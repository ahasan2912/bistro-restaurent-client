import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, handleLogout } = useContext(AuthContext);
    const handleLogOutBtn = () => {
        handleLogout()
            .then(() => {})
            .catch(err => console.log(err));
    }
    const navigations = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/order/salad">Order Food</NavLink>
        {
            user ? <>
                <button onClick={handleLogOutBtn} className="">Logout</button>
            </> : <>
                <NavLink to="/login">Login</NavLink>
            </>
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3 text-base">
                        {navigations}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">Bistro Boss</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 text-base">
                    {navigations}
                </ul>
            </div>
            <div className="navbar-end mr-10">
                {user ? <>
                    <img className='w-10 h-10 rounded-full my-anchor-element' src={user?.photoURL} alt="" />
                    <Tooltip anchorSelect=".my-anchor-element" place="top">
                        {user?.displayName}
                    </Tooltip>
                </> : ""}
            </div>
        </div>
    );
};

export default Navbar;