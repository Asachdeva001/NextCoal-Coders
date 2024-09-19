import React, { useState } from 'react'
import Designer from './designer.png'
import Designer1 from './designer.png'
import { useNavigate } from 'react-router-dom'

export default function LoginSignup() {
    const navigate = useNavigate()
    const [page, setPage] = useState("Login")
    return (
        <div className="align-items-center justify-content-center d-flex" style={{ height: "95vh", background: "cyan" }}>
            <div className='d-flex' style={{ height: "75vh", width: "85vw", borderRadius: "3rem", overflow: "hidden" }}>
                <div className="align-items-center d-flex justify-content-center" style={{ width: "50%", height: '100%', padding: "4vw", background: page === "Login" ? "black" : `url(${Designer1}) center center/cover` }} onClick={()=>{setPage('Login')}}>
                    <div style={{ display: page === "Login" ? "block" : "none", color: "white", width: "25vw", padding: "5vh 3vw", border: "0.5px white solid", background: "grey", borderRadius: "1rem" }}>
                        <h2 className='text-center mb-4'>Login</h2>
                        <p className='text-center'>Enter Login credentials below</p>
                        <div className="form-floating mt-4 mb-3" style={{ color: "black" }}>
                            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" />
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating mb-3" style={{ color: "black" }}>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className='justify-content-center d-flex'><button type="button" className="btn btn-primary" onClick={() => { navigate('/dashboard') }}>Login</button></div>
                    </div>
                </div>
                <div className='align-items-center d-flex justify-content-center' style={{ width: "50%", height: '100%', padding: "4vw", background: page!== "Login" ? "black" : `url(${Designer}) center center/cover` }} onClick={()=>{setPage('SignUp')}}>
                    <div style={{ display: page !== "Login" ? "block" : "none", color: "white", width: "25vw", padding: "3vw 4vw", border: "0.5px white solid", background: "grey", borderRadius: "1rem" }}>
                        <h2 className='text-center mb-5'>SignUp</h2>
                        <div className="form-floating mt-4 mb-3" style={{ color: "black" }}>
                            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" />
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating justify-content-center mt-4 mb-3" style={{ color: "black" }}>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                            <label htmlFor="otp">Password</label>
                        </div>
                        <div className="form-floating justify-content-center mt-4 mb-3" style={{ color: "black" }}>
                            <input type="password" className="form-control" id="vpass" name="vpass" placeholder="Verify Password" />
                            <label htmlFor="otp">Password</label>
                        </div>
                        <div className='justify-content-center d-flex'><button type="button" className="btn btn-primary" onclick={()=>{navigate('/dashboard')}}>SignUp</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
