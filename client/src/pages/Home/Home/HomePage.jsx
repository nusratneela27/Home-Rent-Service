import React, { useContext } from 'react';
import SwiperTry from './SwiperTry';
import { AuthContext } from '../../../providers/AuthProvider';
import { NavLink } from 'react-router-dom'

const HomePage = () => {
    const { place } = useContext(AuthContext);
    return (
        <div
            className="relative bg-cover w-full h-screen"
            style={{
                backgroundImage: `url("${place?.backgroundImage || ""}")`,
                // backgroundImage: `url("${place?.backgroundImage || "/public/images/Rectangle 1.png"}")`,
                height: "80vh",
            }}
        >
            <div className="absolute inset-0 bg-black/50">
                <div className="grid grid-cols-1 md:grid-cols-10 my-20">
                    <div className="ml-40 text-white col-span-4 space-y-5 order-2 md:order-1 pt-20 hidden md:block">
                        <h3 className="text-6xl font-bold">{place?.name}</h3>
                        <p>{place?.info}</p>
                        <NavLink to="/signup">
                            <button className="px-3 py-2 rounded bg-yellow-600">Booking</button>
                        </NavLink>
                    </div>
                    <div className="text-white md:col-span-6 order-1 md:order-2">
                        <SwiperTry></SwiperTry>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;