import React, { useEffect } from 'react'
import { assets, icons } from '../../assets/assets'
import './Login.css'

const Login = () => {
  const {
    UserRegIcon,
    LockIcon,
    FacebookIcon,
    TwitterIcon,
    GoogleIcon,
    LinkedinIcon,
    EnvelopeIcon,
  } = icons
  const socialIcons = [
    { id: 1, icon: <FacebookIcon />, link: '#' },
    { id: 2, icon: <TwitterIcon />, link: '#' },
    { id: 3, icon: <GoogleIcon />, link: '#' },
    { id: 4, icon: <LinkedinIcon />, link: '#' },
  ]
  
  useEffect(() => {
    const sign_in_btn = document.querySelector('#sign-in-btn');
    const sign_up_btn = document.querySelector('#sign-up-btn');
    const container = document.querySelector('.container');
  
    const handleSignUp = () => container.classList.add('sign-up-mode');
    const handleSignIn = () => container.classList.remove('sign-up-mode');
  
    if (sign_up_btn) sign_up_btn.addEventListener('click', handleSignUp);
    if (sign_in_btn) sign_in_btn.addEventListener('click', handleSignIn);
  
    return () => {
      if (sign_up_btn) sign_up_btn.removeEventListener('click', handleSignUp);
      if (sign_in_btn) sign_in_btn.removeEventListener('click', handleSignIn);
    };
  }, []);
  

  return (
    <div className="container relative w-full min-h-[99vh] bg-slate-50 overflow-hidden before:content-[''] before:absolute before:w-[2000px] before:h-[2000px] before:rounded-full before:bg-custom-gradient before:-top-[10%] before:right-[48%] before:transform before:-translate-y-1/2 before:z-40 before:transition-all before:duration-[1800ms] before:ease-in-out ">
      <div className="forms-container absolute w-full h-full top-0 left-0">
        <div className="signin-signup absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-1/2 grid grid-cols-1 z-30">
          <form
            action=""
            className="flex items-center justify-center flex-col col-start-1 col-end-2 row-start-1 row-end-2 z-20 px-20 py-0 overflow-hidden sign-in-form"
          >
            <h2 className="text-4xl text-slate-600 mb-3 ">Sign In</h2>
            <div className="max-w-96 w-full h-14 bg-gray-100 my-3 mx-0 rounded-[55px] grid grid-cols-[0.15fr,0.85fr] p-2 items-center">
              <span className="text-center">
                <UserRegIcon className="text-slate-400 w-6 h-6" />
              </span>
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-gray-100 leading-none border-none focus:outline-none font-semibold text-lg placeholder:text-slate-500"
                required
              />
            </div>
            <div className="max-w-96 w-full h-14 bg-gray-100 my-3 mx-0 rounded-[55px] grid grid-cols-[0.15fr,0.85fr] p-2 items-center">
              <LockIcon className="text-slate-600 w-6 h-6" />
              <input
                type="password"
                placeholder="Password"
                className="w-full focus:outline-none bg-gray-100 leading-none border-none font-semibold text-lg placeholder:text-slate-500"
                required
              />
            </div>
            <input
              type="submit"
              value="login"
              className="w-36 h-12 border-none outline-none rounded-[50px] cursor-pointer bg-blue-500 text-white uppercase font-bold my-3 mx-0 transition-all duration-75 hover:bg-[#4d84e2]"
            />
            <p className="py-3 px-0 text-">Or Sign in with social platforms</p>
            <div className="flex justify-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  className="border-[1px] shadow-lg hover:text-sky-500 transition-all duration-100 hover:border-blue-500 rounded-full p-2"
                >
                  <span className="text-xl shadow-lg">{social.icon} </span>
                </a>
              ))}
            </div>
          </form>
          <form
            action=""
            className="flex items-center justify-center flex-col col-start-1 col-end-2 row-start-1 row-end-2 z-10 opacity-0 sign-up-form"
          >
            <h2 className="text-4xl text-slate-600 mb-3">Sign Up</h2>
            <div className="max-w-96 w-full h-14 bg-gray-100 my-3 mx-0 rounded-[55px] grid grid-cols-[0.15fr,0.85fr] p-2 items-center">
              <span className="text-center">
                <UserRegIcon className="text-slate-400 w-6 h-6" />
              </span>
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-gray-100 leading-none border-none focus:outline-none font-semibold text-lg placeholder:text-slate-500"
                required
              />
            </div>
            <div className="max-w-96 w-full h-14 bg-gray-100 my-3 mx-0 rounded-[55px] grid grid-cols-[0.15fr,0.85fr] p-2 items-center">
              <span className="text-center">
                <EnvelopeIcon className="text-slate-400 w-6 h-6" />
              </span>
              <input
                type="text"
                placeholder="Email"
                className="w-full bg-gray-100 leading-none border-none focus:outline-none font-semibold text-lg placeholder:text-slate-500"
                required
              />
            </div>
            <div className="max-w-96 w-full h-14 bg-gray-100 my-3 mx-0 rounded-[55px] grid grid-cols-[0.15fr,0.85fr] p-2 items-center">
              <LockIcon className="text-slate-600 w-6 h-6" />
              <input
                type="password"
                placeholder="Password"
                className="w-full focus:outline-none bg-gray-100 leading-none border-none font-semibold text-lg placeholder:text-slate-500"
                required
              />
            </div>
            <input
              type="submit"
              value="Register"
              className="w-36 h-12 border-none outline-none rounded-[50px] cursor-pointer bg-blue-500 text-white uppercase font-bold my-3 mx-0 transition-all duration-75 hover:bg-[#4d84e2]"
            />
            <p className="py-3 px-0 text-">Or Sign Up with social platforms</p>
            <div className="flex justify-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  className="border-[1px] shadow-lg hover:text-sky-500 transition-all duration-100 hover:border-blue-500 rounded-full p-2"
                >
                  <span className="text-xl shadow-lg">{social.icon} </span>
                </a>
              ))}
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container absolute w-full h-full top-0 left-0 grid grid-cols-2">
        <div className="panel left-panel pointer-events-auto flex flex-col items-end pt-12 pr-[17%] pb-8 pl-[12%] justify-around text-center z-50 ">
          <div className="content text-white">
            <h3 className="font-semibold leading-none text-2xl">New here ?</h3>
            <p className="text-base py-3 px-0">
            Join our community to simplify and streamline your product operations.
            </p>
            <button
              className="btn transparent m-0 bg-none border-2 border-solid border-white rounded-full w-32 h-10 font-semibold text-sm"
              id="sign-up-btn"
            >
              Sign Up
            </button>
          </div>
          <img src={assets.login_img} className="image w-full" alt="" />
        </div>
        <div className="panel right-panel pointer-events-none flex flex-col items-end pt-12 pr-[17%] pb-8 pl-[12%] justify-around text-center z-50 ">
          <div className="content text-white transform translate-x-[800px]">
            <h3 className="font-semibold leading-none text-2xl">One of us ?</h3>
            <p className="text-base py-3 px-0">
            Access your dashboard and manage your products efficiently.
            </p>
            <button
              className="btn transparent m-0 bg-none border-2 border-solid border-white w-32 h-10 font-semibold text-sm rounded-full"
              id="sign-in-btn"
            >
              Sign In
            </button>
          </div>
          <img
            src={assets.register_img}
            className="image transform translate-x-[800px] w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Login
