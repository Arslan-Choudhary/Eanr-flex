import { useEffect, useState } from 'react';
import { addEmployee, getActivationCode } from '../../Api/EarnFlexApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddEmployee = ({ setShowModal }) => {

    const [code, setCode] = useState("")
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        latitude: '',
        longitude: '',
        employeeID: '',
        city: '',
        country: '',
        activationCode: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const res = await addEmployee(formData)
            console.log(res);

            toast.success("Employee added successfully! 🎉");

        } catch (error) {
            console.log("error submitting", error);
            toast.error("Failed to add employee. Please try again.");
        }
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            latitude: '',
            longitude: '',
            employeeID: '',
            city: '',
            country: '',
            activationCode: '',
        })
        console.log('Submitted Data:', formData);


        // You can send `formData` to your backend here
    };

    const getCode = async () => {
        const codeRes = await getActivationCode()
        const activeCode = codeRes.data.activationCode
        console.log(activeCode);
        // setCode(activeCode)

        setFormData((prev) => ({
            ...prev,
            activationCode: activeCode
        }))
    }

    useEffect(() => {
        getCode()
    }, [])


    return (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50" >

            <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Add New Worker</h2>

                {/* Form content goes here */}

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl space-y-4"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Employee</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            ['firstName', 'First Name'],
                            ['lastName', 'Last Name'],
                            ['email', 'Email'],
                            ['phoneNumber', 'Phone Number'],
                            ['latitude', 'Latitude'],
                            ['longitude', 'Longitude'],
                            ['employeeID', 'Employee ID'],
                            ['city', 'City'],
                            ['country', 'Country'],
                            ['activationCode', 'Activation Code'],
                        ].map(([name, placeholder]) => (
                            <input
                                key={name}
                                type="text"
                                name={name}
                                placeholder={placeholder}
                                value={formData[name]}
                                onChange={handleChange}
                                className="border rounded-md p-2 w-full"
                            />
                        ))}
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={() => {
                                setShowModal(false)
                            }}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                        >
                            Clear
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div >



    )
}

export default AddEmployee