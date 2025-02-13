import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { assets, icons } from '../../assets/assets'
import './Login.css'
import axios from 'axios';  

const Login = () => {
  const navigate = useNavigate()
  // const buttonRef = useRef(null);

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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formData, setFormData] = useState({
    
    firstname: '',
    lastname: '',
    companyName: '',
    email: '',
    password: '',
    mobile: '',
    phone_code: '',
    salutation: '',
  })
  const handleSubmit = () => {
      const payload = {
          email:email,
          password:password
      }
      console.log("output",payload)
      axios.post('https://cams-exim.com/api/app-login',payload)
      .then((res) => {
          localStorage.setItem("token", res.data.data.access_token)
          alert("Login Successfull");
          console.log("Login Successfull", res);
          navigate('/')
      })
      .catch((err)=> {
          alert("Login Failed");
          console.log("Login Failed", err);
      }
      
      )
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleFormSubmit = () => {
    console.log("output", formData);
    axios
      .post('https://cams-exim.com/api/app-register', formData,  {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        alert("Registration Successful");
        console.log("Registration Successful", res.data);
      })
      .catch((err) => {
        alert("Registration Failed");
        console.log("Registration Failed", err.response ? err.response.data : err.message);
      });
  };
  useEffect(() => {
    const sign_in_btn = document.querySelector('#sign-in-btn')
    const sign_up_btn = document.querySelector('#sign-up-btn')
    const container = document.querySelector('.container')

    const handleSignUp = () => {
      container.classList.add('sign-up-mode')
      setTimeout(() => {
        setIsSignUpMode(true)
        setActiveForm('supplier')
        setUserType('supplier')
      }, 1000)
    }
    const handleSignIn = () => {
      container.classList.remove('sign-up-mode')
      setIsSignUpMode(false)
      setTimeout(() => {
        setActiveForm('buyer')
        setUserType('buyer')
      }, 1000)
    }

    if (sign_up_btn) sign_up_btn.addEventListener('click', handleSignUp)
    if (sign_in_btn) sign_in_btn.addEventListener('click', handleSignIn)

    return () => {
      if (sign_up_btn) sign_up_btn.removeEventListener('click', handleSignUp)
      if (sign_in_btn) sign_in_btn.removeEventListener('click', handleSignIn)
    }
  }, [])

  const [activeForm, setActiveForm] = useState('buyer')
  const [isSignUpMode, setIsSignUpMode] = useState(false)
  const handleFormChange = (formType) => {
    setActiveForm(formType)
  }
  const [userType, setUserType] = useState('buyer')
  const userTypeConfig = {
    buyer: {
      title: 'FBIndustries Customer Account',
      loginText: 'Login with Buyer Number',
      emailLoginText: 'Login with Email',
      registerText: 'Make your FBIndustries Buyer Account',
      buttonText: 'Suppliers, Get Started Here',
    },
    supplier: {
      title: 'FBIndustries Supplier Account',
      loginText: 'Login with Supplier Number',
      emailLoginText: 'Login with Email',
      registerText: 'Make your FBIndustries Supplier Account',
      buttonText: 'Buyers, Get Started Here',
    },
  }
  const logoPosition = isSignUpMode
    ? 'h-24 mb-10 absolute top-10 left-1/4 transform -translate-x-1/2 transition-all duration-1000'
    : 'h-24 mb-10 absolute top-10 right-8 transform -translate-x-1/2 transition-all duration-1000';

    useEffect(() => {
      const switchButton = document.querySelector('.switch-button');
      if (!switchButton) return;
    
      switchButton.classList.remove('animate-bounce-five');
      void switchButton.offsetWidth;
      switchButton.classList.add('animate-bounce-five');
    }, [userType]);

  // useEffect(() => {
  //   setUserType(activeForm)
  // }, [activeForm])

  const renderMainContent = () => (
    <>
      {/* <img src={assets.Fbi_logo} className="h-24 mb-10" alt="FBI Logo" /> */}
      <h2 className="text-4xl text-slate-600 mb-3"></h2>
      <button
        className="max-w-96 w-full h-12 bg-white my-3 mx-0 rounded-md flex gap-10 p-2 px-5 items-center justify-center relative shadow-xl hover:bg-lightRed hover:text-white hover:scale-105 transition-all duration-300 group"
        onClick={() => handleFormChange('number')}
      >
        <span className="absolute left-5">
          <img
            src={assets.flagImg}
            className="w-6 h-6 group-hover:invert "
            alt="Flag"
          />
        </span>
        <p className="text-lg">{userTypeConfig[activeForm].loginText}</p>
      </button>

      <h1 className="flex my-2">---------- OR ----------</h1>

      <button
        className="max-w-96 w-full h-12 bg-white my-3 mx-0 rounded-md flex gap-10 p-2 px-5 items-center justify-center relative shadow-xl hover:bg-lightRed hover:text-white hover:scale-105 transition-all duration-300 group"
        onClick={() => handleFormChange('email')}
      >
        <span className="absolute left-5">
          <img
            src={assets.emailImg}
            className="w-6 h-6 group-hover:invert"
            alt="Email"
          />
        </span>
        <p className="text-lg">{userTypeConfig[userType].emailLoginText}</p>
      </button>

      <p
        className="text-blackShade hover:underline underline-offset-2 hover:text-lightRed transition decoration-lightRed cursor-pointer my-2"
        onClick={() => handleFormChange('register')}
      >
        Register Here !
      </p>
      <span className='flex justify-end'>
      <button className='switch-button bg-lightRed animate-bounce-five text-white font-medium px-4 py-2 rounded-md hover:bg-darkRed transition-all duration-300 tracking-wide relative -bottom-32 -right-[235px] shadow-xl'>
        {userTypeConfig[userType].buttonText}
      </button></span>
    </>
  )

  const renderNumberContent = () => (
    <div className="w-full max-w-96">
      <h2 className="text-2xl mb-6">
        Login with <span className="font-semibold">Mobile Number</span>
      </h2>
      <div className="flex flex-col gap-4">
        <span className="relative w-full">
          <input
            type="number"
            placeholder=" Enter Mobile Number"
            className="w-full p-3 pl-16 focus:outline-none bg-transparent border-b-[1px] border-grayShade appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <img
            src={assets.flagImg}
            alt="email"
            className="w-7 h-7 absolute left-3 top-1/2 transform -translate-y-1/2 "
          />
        </span>
        <span className="flex gap-6 my-4">
          <button className="bg-lightRed text-white font-medium px-4 py-2 rounded-md hover:bg-darkRed transition-all duration-300 tracking-wide w-32 shadow-xl" onClick={() => handleFormChange('buyer')}>
            Back
          </button>
          <button
            className="bg-lightRed text-white font-medium px-4 py-2 rounded-md hover:bg-darkRed transition-all duration-300 tracking-wide w-32 shadow-xl"
            
          >
            Verify
          </button>
        </span>
      </div>
    </div>
  )

  const renderEmailContent = () => (
    <div className="w-full max-w-96">
      <h2 className="text-2xl mb-6 flex items-center gap-2">
        Enter your <span className="font-semibold">Credentials Below</span>
        <img src={assets.HandDown} alt="" className="w-6 h-6" />
      </h2>
      <div className="flex flex-col gap-4">
        <span className="relative w-full">
          <input
            type="email"
            id='email' name='email' onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email Id"
            className="w-full p-3 pl-12 focus:outline-none bg-transparent border-b-[1px] border-grayShade"
          />
          <img
            src={assets.emailImg}
            alt="email"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 "
          />
        </span>
        <span className="relative w-full">
          <input
            type="password"
            id='password' name='password' onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 pl-12 focus:outline-none bg-transparent border-b-[1px] border-grayShade"
          />
          <img
            src={assets.password}
            alt="email"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 "
          />
        </span>
        <span className="flex justify-between text-sm -mt-5">
          <p
            className="text-lightRed hover:underline underline-offset-2 hover:text-darkRed transition decoration-darkRed cursor-pointer my-2"
            onClick={() => handleFormChange('register')}
          >
            Register Here !
          </p>
          <p
            className="text-grayBorder1 hover:underline underline-offset-2 hover:text-grayShade transition decoration-grayShade cursor-pointer my-2"
            onClick={() => handleFormChange('forgot')}
          >
            Forgot Password ?
          </p>
        </span>
        <span className="flex gap-6 my-4">
          <button className="bg-lightRed text-white font-semibold px-4 py-2 rounded-md hover:bg-darkRed transition-all duration-300 tracking-wider w-36" onClick={handleSubmit}>
            Login
          </button>
          <button
            className="bg-lightRed text-white font-semibold px-4 py-2 rounded-md hover:bg-darkRed transition-all duration-300 tracking-wider w-36"
            onClick={() => handleFormChange('buyer')}
          >
            Mobile Login
          </button>
        </span>
      </div>
    </div>
  )

  const renderRegisterContent = () => (
    <div className="">
      {/* <img src={assets.Fbi_logo} className="h-20 mb-10" alt="FBI Logo" /> */}
      <p className="text-3xl mb-6 ">
        {' '}
        {userTypeConfig[userType]?.registerText ||
          'Make your FBIndustries Customer Account'}
      </p>
      <div className="flex flex-col gap-4">
        <span className="flex gap-5">
          <select
            name="salutation"
            id="salutation"
            className="bg-transparent focus:outline-none appearance-none font-semibold border-b-[1px] border-grayShade px-1"  onChange={handleInputChange}
          >
            <option value="1">Mr</option>
            <option value="2">Ms</option>
          </select>

          <input
            type="text"
            name='firstname'
            id='firstname'
            placeholder="First Name"
            className="w-full py-3 focus:outline-none bg-transparent border-b-[1px] border-grayShade"  onChange={handleInputChange}
          />

          <input
            type="text"
            name='lastname'
            id='lastname'
            placeholder="Last Name"
            className="w-full py-3 focus:outline-none bg-transparent border-b-[1px] border-grayShade" 
             onChange={handleInputChange}
          />
        </span>

        <span className="relative w-full">
          <input
            type="text"
            name='companyName'
            id='companyName'
            placeholder="Company Name"
            className="w-full p-3 pl-12 focus:outline-none bg-transparent border-b-[1px] border-grayShade"
             onChange={handleInputChange}
          />
          <img
            src={assets.companies}
            alt="email"
            className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 "
          />
        </span>
        <span className="relative w-full">
          <input
            type="number"
            name='mobile'
            id='mobile'
            placeholder="Mobile Number"
            className="w-full p-3 pl-24 focus:outline-none bg-transparent border-b-[1px] border-grayShade appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
             onChange={handleInputChange}
          />
          <select
      name="phone_code"
      id='phone_code'
      className="border-none bg-transparent focus:outline-none text-gray-700 absolute left-10 top-1/2 transform -translate-y-1/2"  onChange={handleInputChange}
    >
      <option value="+91">+91</option>
      <option value="+92">+92</option>
      <option value="+93">+93</option>
      <option value="+94">+94</option>
      {/* Add more country codes as needed */}
    </select>
          <img
            src={assets.GreatBritain}
            alt="email"
            className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 "
          />
        </span>
        <span className="relative w-full">
          <input
            type="email"
            name='email'
            id='email'
            placeholder="Email Id"
            className="w-full p-3 pl-12 focus:outline-none bg-transparent border-b-[1px] border-grayShade"
             onChange={handleInputChange}
          />
          <img
            src={assets.email1}
            alt="email"
            className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 "
          />
        </span>
        <span className="relative w-full">
          <input
            type="password"
            name='password'
            id='password'
            placeholder="Password"
            className="w-full p-3 pl-12 focus:outline-none bg-transparent border-b-[1px] border-grayShade"
             onChange={handleInputChange}
          />
          <img
            src={assets.Eye}
            alt="email"
            className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 "
          />
        </span>
        <span className="relative w-full">
          <input
            type="text"
            placeholder="Referral Code (Optional)"
            className="w-full p-3 pl-12 focus:outline-none bg-transparent border-b-[1px] border-grayShade"
          />
          <img
            src={assets.Connect}
            alt="email"
            className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 "
          />
        </span>
        <span className="flex gap-6 my-4">
          <button className="bg-lightRed text-white font-semibold px-4 py-2 rounded-md hover:bg-darkRed transition-all duration-300 tracking-wider w-32" onClick={() => handleFormChange('buyer')}>
            BACK
          </button>
          <button
            className="bg-lightRed text-white font-semibold px-4 py-2 rounded-md hover:bg-darkRed transition-all duration-300 tracking-wider w-32"
            onClick={handleFormSubmit}
          >
            REGISTER
          </button>
        </span>
      </div>
    </div>
  )
  const renderForgotPasswordContent = () => (
    <div className="">
      <h2 className="text-3xl mb-6 ">
        Recover Your<span className="font-bold"> Password Below</span>
      </h2>
      <span className="relative w-full">
        <input
          type="email"
          placeholder="Email Id"
          className="w-full p-3 pl-12 focus:outline-none bg-transparent border-b-[1px] border-grayShade"
        />
        <img
          src={assets.emailImg}
          alt="email"
          className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 "
        />
      </span>
      <span className="flex gap-6 my-9">
        <button className="bg-lightRed text-white font-semibold px-4 py-2 rounded-md hover:bg-darkRed transition-all duration-300 tracking-wider w-32">
          Submit
        </button>
        <button
          className="bg-lightRed text-white font-semibold px-4 py-2 rounded-md hover:bg-darkRed transition-all duration-300 tracking-wider w-32"
          onClick={() => handleFormChange('buyer')}
        >
          Login
        </button>
      </span>
    </div>
  )

  const renderContent = () => {
    const formType =
      activeForm === 'supplier' || activeForm === 'buyer'
        ? activeForm
        : activeForm

    switch (formType) {
      case 'buyer':
      case 'supplier':
        return renderMainContent()
      case 'number':
        return renderNumberContent()
      case 'email':
        return renderEmailContent()
      case 'register':
        return renderRegisterContent()
      case 'forgot':
        return renderForgotPasswordContent()
      default:
        return renderMainContent()
    }
  }
  console.log('activeForm:', activeForm)
  console.log('userTypeConfig[activeForm]:', userTypeConfig[activeForm])

  return (
    <div className="container relative w-full min-h-[100vh] bg-slate-100 overflow-hidden before:content-[''] before:absolute before:w-[2000px] before:h-[2000px] before:rounded-full before:bg-custom-gradient before:-top-[10%] before:right-[48%] before:transform before:-translate-y-1/2 before:z-40 before:transition-all before:duration-[1800ms] before:ease-in-out">
      <div className='cursor-pointer bg-black'>
      <a
  href="https://dev2.fajarbenua.co.id/en/"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={assets.Fbi_logo} className={logoPosition} alt="FBI Logo" />
</a>
</div>

      <div className="forms-container absolute w-full h-full top-12  left-0">
        <div className="signin-signup absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-1/2 grid grid-cols-1 z-30">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-center flex-col col-start-1 col-end-2 row-start-1 row-end-2 z-20 px-20 py-0 overflow-hidden sign-in-form h-[580px]"
          >
            {/* <img src={assets.Fbi_logo} className='h-24 mb-10' alt="" />
            <h2 className="text-4xl text-slate-600 mb-3 "></h2>
            <button className="max-w-96 w-full h-12 bg-white my-3 mx-0 rounded-full flex gap-10 p-2 px-5 items-center justify-center relative shadow-xl hover:bg-lightRed hover:text-white hover:scale-105 transition-all duration-300">
              <span className="absolute left-5">
                <img src={assets.flagImg} className="w-6 h-6" />
              </span> */}
            {/* <input
                type="text"
                placeholder="Username"
                className="w-full bg-white leading-none border-none focus:outline-none font-semibold text-lg placeholder:text-slate-500"
                required
              /> */}
            {/* <p className='text-lg'>Login with Buyer Number</p>
            </button>
            <h1 className='flex my-2'>---------- OR ----------</h1>
            <button className="max-w-96 w-full h-12 bg-white my-3 mx-0 rounded-full flex gap-10 p-2 px-5 items-center justify-center relative shadow-xl hover:bg-lightRed hover:text-white hover:scale-105 transition-all duration-300">
              <span className="absolute left-5">
              <img src={assets.emailImg} className="text-slate-600 w-6 h-6" />
              </span> */}
            {/* <input
                type="password"
                placeholder="Password"
                className="w-full focus:outline-none bg-gray-100 leading-none border-none font-semibold text-lg placeholder:text-slate-500"
                required
              /> */}
            {/* <p className='text-lg'>Login with Email</p>
            </button> */}
            {/* <input
              type="submit"
              value="login"
              className="w-36 h-12 border-none outline-none rounded-md cursor-pointer bg-lightRed text-white uppercase font-bold my-3 mx-0 transition-all duration-75 hover:bg-darkRed"
            /> */}
            {/* <p className='text-grayBorder1 hover:underline underline-offset-2 hover:text-lightRed transition decoration-lightRed cursor-pointer my-2'>Register Here !</p> */}
            {/* <p className="py-3 px-0 text-">Or Sign in with social platforms</p>
            <div className="flex justify-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  className="border-[1px] shadow-lg hover:text-lightRed transition-all duration-100 hover:border-darkRed rounded-full p-2"
                >
                  <span className="text-xl shadow-lg">{social.icon} </span>
                </a>
              ))}
            </div> */}

            {renderContent()}
          </form>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-center flex-col col-start-1 col-end-2 row-start-1 row-end-2 z-10 opacity-0 sign-up-form h-[580px]"
          >
            {/* <h2 className="text-4xl text-slate-600 mb-3">Sign Up</h2>
            <div className="max-w-96 w-full h-14 bg-gray-100 my-3 mx-0 rounded-md grid grid-cols-[0.15fr,0.85fr] p-2 items-center">
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
            <div className="max-w-96 w-full h-14 bg-gray-100 my-3 mx-0 rounded-md grid grid-cols-[0.15fr,0.85fr] p-2 items-center">
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
            <div className="max-w-96 w-full h-14 bg-gray-100 my-3 mx-0 rounded-md grid grid-cols-[0.15fr,0.85fr] p-2 items-center">
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
              className="w-36 h-12 border-none outline-none rounded-md cursor-pointer bg-lightRed text-white uppercase font-bold my-3 mx-0 transition-all duration-75 hover:bg-darkRed"
            />
            <p className="py-3 px-0 text-">Or Sign Up with social platforms</p>
            <div className="flex justify-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  className="border-[1px] shadow-lg hover:text-darkRed transition-all duration-100 hover:border-darkRed rounded-full p-2"
                >
                  <span className="text-xl shadow-lg">{social.icon} </span>
                </a>
              ))}
            </div> */}
            {renderContent()}
          </form>
        </div>
      </div>
      <div className="panels-container absolute w-full h-full top-0 left-0 grid grid-cols-2">
        <div className="panel left-panel pointer-events-auto flex flex-col items-end pt-12 pr-[17%] pb-8 pl-[12%] justify-around text-center z-50 ">
          <div className="content text-white">
            {/* <h3 className="font-semibold leading-none text-2xl">New here ?</h3> */}
            <p className="text-2xl py-3 px-0">
            Have your products ready with <span className='font-bold'> FBIndustries
            </span></p>
            <span className='flex justify-end mt-16'>
            <button
              className="btn transparent m-0 bg-none border-2 border-solid border-white rounded-md w-32 h-10 font-semibold text-lg"
              id="sign-up-btn"
              onClick={() => setUserType('buyer')}
            >
              Supplier
            </button></span>
          </div>
          <img src={assets.login_img} className="image w-full" alt="" />
        </div>
        <div className="panel right-panel pointer-events-none flex flex-col items-end pt-12 pr-[17%] pb-8 pl-[12%] justify-around text-center z-50 ">
          <div className="content text-white transform translate-x-[800px]">
            {/* <h3 className="font-semibold leading-none text-2xl">One of us ?</h3> */}
            <p className="text-2xl py-3 px-0">
            Check your newest orders on <span className='font-bold'> FBIndustries
            </span>
            </p>
            <button
              className="btn transparent m-0 bg-none border-2 border-solid border-white w-32 p-1 font-semibold text-lg rounded-md"
              id="sign-in-btn"
              onClick={() => setUserType('supplier')}
            >
              Buyer
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
