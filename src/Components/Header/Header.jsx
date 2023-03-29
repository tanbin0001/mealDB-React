import React from 'react';
import logo from '../../images/faav.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-red-500">
                <div className=" ">
                    <a className="btn btn-ghost normal-case text-xl text-white w-32 "><img className='-mt-6' src={logo} alt="" /></a>
                    <h1 className='font-bold text-white text-2xl'>Fav Meals</h1>
                </div>

                <div className=" ml-[300px]">
                    <div className="form-control   ">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header; <div className="navbar bg-base-100">
    <div className="flex-1">

        <img src={logo} alt="" srcset="" />
    </div>
    <div className="flex-none gap-2">
        <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
        </div>

    </div>
</div>