import { NavLink } from "react-router-dom"
import { useState } from 'react';
import AddEmployee from "./AddEmployee";



const Header = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between">
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