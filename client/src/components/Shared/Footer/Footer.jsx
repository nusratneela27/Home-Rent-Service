import React from 'react';
import logo from '../../../assets/images/logo-color.svg'
import { FaArrowRight } from 'react-icons/fa';
import Container from '../Container';
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-zinc-200'>
      <Container>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="my-14">
            <div
              className='pb-5'
            ><img src={logo}
              alt='logo'
              width='100'
              height='100'
              /></div>
            <div className="grid grid-cols-2">
              <div>
                <h1 className="font-bold">Quick Links</h1>
                <ul>
                  <li>About Us</li>
                  <li>Rooms</li>
                  <li>Careers</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold">Useful Links</h1>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms And Conditions</li>
                  <li>Support</li>
                  <li>Disclaimer</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center my-14">
              <h4 className="flex items-center">Ready to get started?</h4>
              <NavLink to='/signup'>
                <button className="bg-gradient-to-r from-gray-400 via-gray-50 to-zinc-300 px-5 py-2 rounded ms-3 shadow-md">Get Started</button>
              </NavLink>
            </div>
            <div className="grid grid-cols-2">
              <div className='-my-12'>
                <h1 className="font-bold pt-5">Help</h1>
                <ul>
                  <li>FAQ</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold text-3xl mb-2">Subscribe to our newsletter</h1>
                <div className="flex mb-3">
                  <input type="email" placeholder="username@site.com" className="bg-transparent border-b-2 w-4/6 md:w-5/6" />
                  <p className="p-3 bg-zinc-500 rounded-full"><FaArrowRight ></FaArrowRight></p>

                </div>
                <div className="flex justify-between w-2/5 mb-3">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-square-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr
          className='border-black'
        />
        <p className="text-center pb-10 pt-10">Copyright © 2021. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;