
import { FaCircle } from "react-icons/fa";
import { LuCodesandbox } from "react-icons/lu";
import { MdDashboard, MdPeople, MdSecurity, MdConstruction, MdChecklist, MdHandshake, MdSettings } from "react-icons/md";

const SideBar = () => {
    return (
        <div className="left w-1/4 p-4 bg-gradient-to-b from-teal-400 via-green-600 to-sky-500 text-white flex flex-col justify-between min-h-screen">
            {/* Top Section */}
            <div className="top space-y-12">
                {/* Brand */}
                <div className="upper flex justify-between items-center px-12">
                    <div className="flex flex-col items-center  space-y-2 bg-black p-2 rounded-xl">
                        <div className="flex space-x-1 text-xs text-red-500">
                            <FaCircle />
                            <FaCircle />
                            <FaCircle />
                        </div>
                        <span className="text-xl font-bold tracking-wide">EarnFlex</span>
                    </div>
                    <div className="text-3xl">
                        <LuCodesandbox />
                    </div>
                </div>

                {/* Navigation */}
                <div className="lower px-6 space-y-6">
                    <div className="flex items-center space-x-3 text-lg hover:opacity-90 cursor-pointer">
                        <MdDashboard className="text-xl" />
                        <span>Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-3 text-lg hover:opacity-90 cursor-pointer">
                        <MdPeople className="text-xl" />
                        <span>Workers</span>
                    </div>
                    <div className="flex items-center space-x-3 text-lg hover:opacity-90 cursor-pointer">
                        <MdChecklist className="text-xl" />
                        <span>All</span>
                    </div>
                    <div className="flex items-center space-x-3 text-lg hover:opacity-90 cursor-pointer">
                        <MdSecurity className="text-xl" />
                        <span>Security</span>
                    </div>
                    <div className="flex items-center space-x-3 text-lg hover:opacity-90 cursor-pointer">
                        <MdConstruction className="text-xl" />
                        <span>Construction</span>
                    </div>
                    <div className="flex items-center space-x-3 text-lg hover:opacity-90 cursor-pointer">
                        <MdChecklist className="text-xl" />
                        <span>Compliance</span>
                    </div>
                    <div className="flex items-center space-x-3 text-lg hover:opacity-90 cursor-pointer">
                        <MdHandshake className="text-xl" />
                        <span>Service Partners</span>
                    </div>
                    <div className="flex items-center space-x-3 text-lg hover:opacity-90 cursor-pointer">
                        <MdSettings className="text-xl" />
                        <span>Settings</span>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bottom px-6 py-4 text-sm text-white text-center border-t border-white/30">
                Powered by <span className="font-semibold ml-1">EarnFlex</span>
            </div>
        </div>
    )
}

export default SideBar