import 'leaflet/dist/leaflet.css';
import { useEffect, useState, useTransition } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { getActivationCode, getEmployees } from '../../Api/EarnFlexApi'
import { Loader } from '../UI/Loader';

const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
})

const EmployeeMap = () => {
    
    const [employees, setEmployees] = useState([])
    const [isPending, startTransition] = useTransition()

    const fetchData = () => {
        try {
            startTransition( async () => {

                const codeRes = await getActivationCode()
                const empRes = await getEmployees(codeRes.data.activationCode)
                const allEmployees = Array.isArray(empRes.data) ? empRes.data : []
                
                setEmployees(allEmployees)
                
            })
            } catch (error) {
                console.error("Failed to load employee data", error)
            }
        }
        
    useEffect(() => {
        fetchData()
    }, [])

    if (isPending) return <Loader />

    return (
        <div className="max-w-7xl mx-auto p-8 ">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Employee Locations</h1>
            


                <MapContainer
                    center={[30.3753, 69.3451]}
                    zoom={4}
                    scrollWheelZoom={true}
                    style={{ height: '600px', width: '100%' }}
                    className="rounded-lg border border-gray-300 shadow-lg"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="© OpenStreetMap contributors"
                    />

                    {employees.map((emp) => {
                        const lat = parseFloat(emp.latitude)
                        const lng = parseFloat(emp.longitude)

                        // Only render if both lat & lng are valid numbers
                        if (
                            !isNaN(lat) &&
                            !isNaN(lng) &&
                            lat !== 0 &&
                            lng !== 0 &&
                            Math.abs(lat) <= 90 &&
                            Math.abs(lng) <= 180
                        ) {
                            return (
                                <Marker
                                    key={emp.Hiring_TestID}
                                    position={[lat, lng]}
                                    icon={defaultIcon}
                                >
                                    <Popup>
                                        <div className="text-sm">
                                            <strong>{emp.firstName} {emp.lastName}</strong><br />
                                            ID: {emp.employeeID}<br />
                                            {emp.city}, {emp.country}<br />
                                            {emp.email}
                                        </div>
                                    </Popup>
                                </Marker>
                            )
                        }
                    })}

                </MapContainer>
            
        </div>
    )
}

export default EmployeeMap
