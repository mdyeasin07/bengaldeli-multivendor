import React from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import { FaFacebookF } from 'react-icons/fa';
import FadeLoader from 'react-spinners/FadeLoader';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Headers />
      <div className="bg-slate-200 mt-4">
        <div className="w-full justify-center items-center p-10">
          <div className="grid  w-[60%] mx-auto bg-white rounded-md">
            <div className="px-8 py-8">
              <h2 className="text-center w-full text-xl text-slate-600 font-bold mb-3">
                About bengaldeli
              </h2>
              <div className="text-slate-600 flex flex-col gap-1 mb-2">
                <h2>
                  "bengaldeli" Multivendor ecommerce website built using the
                  MERN stack, Socket.io, and Stripe, launched in 2023, offers a
                  robust platform for multiple vendors to sell their products.
                  With MongoDB for the database, Express.js for the backend,
                  React.js for the frontend, and Node.js for server-side
                  scripting, it provides a scalable and efficient solution.
                  Integrating Socket.io enables real-time communication between
                  users and vendors, enhancing the shopping experience with
                  features like instant messaging or notifications.
                  Incorporating Stripe for payment processing ensures secure
                  transactions, allowing customers to make purchases seamlessly
                  using various payment methods. Multivendor ecommerce platforms
                  are becoming increasingly popular among future generations due
                  to several reasons. Firstly, they offer a wide range of
                  products and services from various vendors in one convenient
                  location, saving time and effort for shoppers. Secondly, they
                  foster a sense of community and diversity, allowing smaller
                  vendors and artisans to reach a larger audience and compete
                  with larger retailers. Thirdly, multivendor platforms often
                  promote sustainability and ethical consumption by showcasing
                  products from environmentally conscious and socially
                  responsible vendors. Lastly, the interactive and social
                  aspects of these platforms, such as user reviews and ratings,
                  create a more engaging and personalized shopping experience,
                  which resonates well with the preferences of the future
                  generation.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
      {/* <div className="bg-slate-200 mt-4">
        <div className="w-full justify-center items-center p-10">
          <div className="grid grid-cols-2 w-[60%] mx-auto bg-white rounded-md">
            <div className="px-8 py-8">
              <h2 className="text-center w-full text-xl text-slate-600 font-bold">
                Login your account
              </h2>
              <div>
                <form className="text-slate-600">
                  <div className="flex flex-col gap-1 mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-red-500 rounded-md"
                      id="email"
                      name="email"
                      placeholder="email"
                    />
                  </div>

                  <div className="flex flex-col gap-1 mb-5">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-red-500 rounded-md"
                      id="password"
                      name="password"
                      placeholder="password"
                    />
                  </div>

                  <button className="px-8 py-2 w-full bg-red-500 shadow-lg hover:shadow-green-500/30 text-white font-medium rounded-md">
                    Login
                  </button>
                </form>
                <div className="flex justify-center items-center py-2">
                  <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                  <span className="px-3 text-slate-600">or</span>
                  <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                </div>
                <button className="px-8 w-full py-2 bg-indigo-500 shadow hover:shadow-indigo-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>Register with Facebook</span>
                </button>
                <button className="px-8 w-full py-2 bg-orange-500 shadow hover:shadow-orange-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3">
                  <span>
                    <AiOutlineGoogle />
                  </span>
                  <span>Register with Google</span>
                </button>
              </div>
              <div className="text-center text-slate-600 pt-1">
                <p>
                  Create new account?{' '}
                  <Link className="text-blue-500" to="/register">
                    Register
                  </Link>
                </p>
              </div>
              <div className="text-center text-slate-600 pt-1">
                <p>
                  {' '}
                  <a target="__blank" className="text-blue-500" href="#">
                    {' '}
                    Login{' '}
                  </a>
                  become a seller.
                </p>
              </div>
            </div>
            <div className="w-full h-full py-4 pr-4">
              <img
                className="w-full h-[95%]"
                src="http://localhost:3000/images/login.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default About;
