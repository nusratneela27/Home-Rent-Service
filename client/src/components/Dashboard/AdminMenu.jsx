import { NavLink } from 'react-router-dom'
import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import { FaUserShield } from 'react-icons/fa';
const AdminMenu = () => {
    return (
        <>
            <h1 className="bg-purple-100 font-bold px-12 py-2 mt-5">Admin Dashboard</h1>
            <NavLink
                to='allusers'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaUserShield className='w-5 h-5' />
                <span className='mx-4 font-medium'>All Users</span>
            </NavLink>
            <NavLink
                to='allrooms'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <MdHomeWork className='w-5 h-5' />
                <span className='mx-4 font-medium'>All Rooms</span>
            </NavLink>
        </>
    );
};

export default AdminMenu;