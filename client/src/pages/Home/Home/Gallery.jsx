import React from 'react';
import place1 from '../../../assets/travel1.jpg'
import place2 from '../../../assets/travel2.jpg'
import place3 from '../../../assets/travel3.jpg'
import place4 from '../../../assets/travel4.jpg'
import Container from '../../../components/Shared/Container';

const Gallery = () => {
    return (
        <Container>
            <div className="p-16 my-16 bg-teal-50 rounded-lg shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        <div>
                            <img src={place1} alt="" className='rounded-lg' />
                        </div>
                        <div>
                            <img src={place2} alt="" className='rounded-lg' />
                        </div>
                        <div>
                            <img src={place3} alt="" className='rounded-lg' />
                        </div>
                        <div>
                            <img src={place4} alt="" className='rounded-lg' />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-3xl mb-5">Find the best vacation rentals from around the world</h1>
                        <br />
                        <h3 className="font-semibold text-xl mb-3">Book the perfect rental</h3>
                        <p>HomeToGo makes it easy to book the right vacation home for any trip, no matter your budget.Easily find and book the perfect vacation rental with AI Mode, HomeToGo's AI-powered travel planner, now available in beta in the app. Download today, and start leveling up your stays.</p>
                        <br />
                        <h3 className="font-semibold text-xl mb-3">Find inspiration for your next tripe</h3>

                        <p>Browse vacation homes, cabins, beach houses, condos, houseboats—and everything in between</p>
                        <br />
                        <h3 className="font-semibold text-xl mb-3">Discover millions of homes</h3>

                        <p>Find and compare unique vacation homes from thousands of trusted providers worldwide</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Gallery;