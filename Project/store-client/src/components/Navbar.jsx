import { NavLink } from "react-router-dom"
import { Cross, User, X, XCircle } from 'lucide-react'
import { useRef, useState } from "react"
import { Login } from "../api/api"
import {Register} from "../api/api"
const Navbar = () => {

    // For Login popup
    const [showLogin, setShowLogin] = useState(false)
    const emailRef = useRef('')
    const passwordRef = useRef('')
    // For register popup
    const [showRegister, setShowRegister] = useState(false)
    const nameRef = useRef('')
    const phoneRef = useRef('')
    const Linksdata = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Products',
            path: '/products'
        },
        {
            title: 'Contact',
            path: '/contact'
        }
    ]

    // For Login popup
    const handleLogin = async (e) => {
        e.preventDefault()
        const credentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        try {
            const response = await Login(credentials)
            const data = await JSON.stringify(response.data)
            if (response.status === 200) {
                console.log("Login Success" + response.data.token)
            } else {
                console.log("Login Error" + data)
            }

        } catch (error) {
            console.error(error)
        }

        console.log(credentials)
    }


    // For Register popup
    const handleRegister = async (e) => {
        e.preventDefault()
        const credentials = {
            name : nameRef.current.value,
            email: emailRef.current.value,            
            phone: phoneRef.current.value,            
            password: passwordRef.current.value
        }
        try {
            const response = await Register(credentials)
            const data = await JSON.stringify(response.data)
            if (response.status === 200) {
                console.log("Register Success" + response.data.token)
            } else {
                console.log("Register Error" + data)
            }

        } catch (error) {
            console.error(error)
        }

        console.log(credentials)
    }

    return (
        <>
            <div className='w-screen h-14 shadow-purple-500 shadow-md flex flex-row justify-center items-center'>
                <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-purple-500'>
                    Max Store
                </div>
                <div className='w-[40%] h-full flex justify-end items-center '>
                    <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-bold'>
                        {Linksdata.map((link, index) => (
                            <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-purple-500/90 hover:text-white flex justify-center items-center rounded-sm'>
                                {link.title}
                            </NavLink>
                        ))
                        }
                    </div>
                    <button className="h-9 w-9 flex justify-center items-center border-2 border-black rounded-full hover:border-purple-500 hover:text-purple-500 ml-4 shadow-md" onClick={() => { setShowLogin(!showLogin) }}>
                        <User className="h-6 w-6" />
                    </button>
                </div>
            </div>
            

            {/* For Login popup */}
            {showLogin && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    <div className='h-1/1 w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                            <div className="w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left my-6 font-bold text-purple-500'>Login</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowLogin(!showLogin) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[80%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleLogin}>
                                <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <button type="submit" className="w-full h-[3rem] shadow-sm bg-purple-500 text-white rounded-sm outline-none">Login</button>
                                <button className="w-full h-[3rem] shadow-sm bg-white text-purple-500 rounded-sm outline-purple-500" onClick={() => { setShowRegister(!showRegister) }}>Register ?</button>

                            </form>
                        </div>
                    </div>
                </div>
            )
            }


            {/* For Register popup */}
            {showRegister && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    <div className='h-1/1 w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                            <div className="w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left my-6 font-bold text-purple-500'>Register</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowRegister(!showRegister) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[80%] w-[80%] flex flex-col justify-center items-center gap-6' onSubmit={handleRegister}>
                                <input ref={nameRef} type="name" name="" id="name" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input ref={emailRef} type="phone" name="" id="phone" placeholder='Phone Number' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                                <button type="submit" className="w-[60%] h-[3rem] shadow-sm bg-purple-500 text-white rounded-sm outline-none ">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
            }


        </>
    )
}

export default Navbar
