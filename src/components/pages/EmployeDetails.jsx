
import { useState, useEffect, useTransition } from 'react'
import { getActivationCode, getEmployees } from '../../Api/EarnFlexApi'
import { Loader } from '../UI/Loader'
import SideBar from '../UI/SideBar'


const EmployeDetails = () => {
    const [employees, setEmployees] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const [employeesPerPage] = useState(10)

    const [isPending, startTransition] = useTransition()

    const fetchEmployees = () => {
        try {
            startTransition(async () => {

                // Step 1: Always get a fresh activation code
                const codeRes = await getActivationCode()
                const activationCode = codeRes.data.activationCode

                // Step 2: Use the fresh code to get employees
                const empRes = await getEmployees(activationCode)
                // console.log(empRes);


                // Step 3: Set employees safely
                const allEmployees = Array.isArray(empRes.data) ? empRes.data : []
                console.log(allEmployees);
                setEmployees(allEmployees)
            })
        } catch (err) {
            console.error("Error fetching employees", err)
        }
    }

    const filterEmployees = employees.filter((employee) => {
        if (searchTerm) {
            return (
                employee.employeeID.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.email.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }
        return employee
    })
    console.log(filterEmployees);

    const indexOfLastEmployee = currentPage * employeesPerPage
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage
    const currentEmployees = filterEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee)

    const totalPages = Math.ceil(filterEmployees.length / employeesPerPage)
    // console.log("totalpages: ",Math.ceil(filterEmployees.length / employeesPerPage))

    useEffect(() => {
        fetchEmployees()
    }, [])


    if (isPending) return <Loader />

    return (
        <>
            <div className="main flex h-auto ">
                {/* Left Panel */}
                
                <SideBar />


                {/* Right Panel */}
                <div className="right w-3/4 px-4 py-8 ">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">Employee Directory</h1>

                    <div className="flex justify-end mb-6">
                        <input
                            type="text"
                            placeholder="Search by employee ID, email or city"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="w-full">
                        <table className="w-full table-auto bg-white rounded-xl shadow-md border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
                                    <th className="px-4 py-3 text-left">Profile</th>
                                    <th className="px-4 py-3 text-left">Location</th>
                                    <th className="px-4 py-3 text-left">Date Created</th>
                                    <th className="px-4 py-3 text-left">Coordinates</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentEmployees.map(emp => (
                                    <tr
                                        key={emp.Hiring_TestID}
                                        className="bg-white border-t border-gray-200 text-sm text-gray-700"
                                    >
                                        <td className="px-4 py-3">
                                            <div className="flex flex-row items-start space-x-3">
                                                {/* Profile Picture or Icon */}
                                                {emp.profilePicture ? (
                                                    <img
                                                        src={emp.profilePicture}
                                                        alt="Profile"
                                                        className="w-10 h-10 rounded-full object-cover border border-gray-300"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-500 text-xl">
                                                        👤
                                                    </div>
                                                )}

                                                {/* Employee Details */}
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium">{`${emp.firstName} ${emp.lastName}`}</span>
                                                    <span className="text-sm text-gray-600">{emp.phoneNumber}</span>
                                                    <span className="text-sm text-gray-600">{emp.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 break-words">{`${emp.city}, ${emp.country}`}</td>
                                        <td className="px-4 py-3 break-words">{emp.createdAt}</td>
                                        <td className="px-4 py-3 break-words">{`${emp.latitude}, ${emp.longitude}`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-center mt-6 space-x-2">
                        <button
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>

                        <span className="px-3 py-1 rounded bg-blue-500 text-white">
                            {currentPage}
                        </span>

                        <button
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>

                    <span className="flex justify-end px-3 py-1 text-sm text-gray-600">
                        Page {currentPage} of {totalPages}
                    </span>
                </div>
            </div>


        </>

    )
}

export default EmployeDetails