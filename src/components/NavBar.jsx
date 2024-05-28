import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [btn, setBtn] = useState(false);
    const btnHandler = () => {
        setBtn(!btn);
    }
    return (
        <div>
            <div className="navbar shadow-lg bg-base-100">
                <Link to='/' className="btn navbar-start btn-ghost normal-case text-xl">Visualization Dashboard</Link>
                <div className='navbar-end'>
                    <label onClick={btnHandler} htmlFor="my-drawer-2" className={`btn btn-outline drawer-button lg:hidden`}>
                        {
                            btn === !true ?
                                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                                :
                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                        }
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NavBar;