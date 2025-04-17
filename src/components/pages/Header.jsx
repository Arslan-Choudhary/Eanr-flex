import { NavLink } from "react-router-dom"
import { useState } from 'react';
import AddEmployee from "./AddEmployee";
import { IoIosLink, IoMdNotificationsOutline, IoIosSunny } from "react-icons/io";
import { CiGrid42 } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";


const Header = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between border-b-1 pb-2 ">
        <ul className='flex p-4 pl-11'>
          <li className=''>
            <NavLink to="/" className={({ isActive }) =>
              ` ${isActive
                ? 'bg-green-500 text-white'
                : ' text-black hover:bg-green-600'
              } border border-black outline-none p-2 rounded-l-4xl active:text-white active:bg-green-600 active:border-green-600 hover:text-white`}> List View</NavLink>
          </li>
          <li>
            <NavLink to="/map" className={({ isActive }) =>
              ` ${isActive
                ? 'bg-green-500 text-white'
                : ' text-black hover:bg-green-600'
              } border border-black outline-none p-2 rounded-r-4xl active:text-white active:bg-green-600 active:border-green-600 hover:text-white`}>Map View</NavLink>
          </li>
        </ul>

        <div>
          <ul className="flex items-center gap-10 text-2xl">
            <li className="bg-blue-100 text-blue-900  rounded-full p-2"><IoIosLink /></li>
            <li ><IoMdNotificationsOutline /></li>
            <li><CiGrid42 /></li>
            <li className="text-yellow-400"><IoIosSunny /></li>
            <li  className="bg-blue-100 text-blue-900  rounded-full p-2"><FaUserAlt /></li>
          </ul>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 font-semibold cursor-pointer outline-none rounded-xl mt-2 mr-11 px-4 py-3 text-white"
        >
          + Add Worker
        </button>

      </nav >

      {showModal && <AddEmployee setShowModal={setShowModal} />
      }

    </>
  )
}

export default Header