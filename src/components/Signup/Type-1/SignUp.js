import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [email, setEmail] = useState('');
    const [email_LI, setEmail_LI] = useState('');
    const [password_LI, setPassword_LI] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [mobileNo, setMobileNo] = useState('');
    const [validMobileNo, setValidMobileNo] = useState(true);

    const handleMobileNoChange = (event) => {
        const inputValue = event.target.value;
        setMobileNo(inputValue);

        // Validate mobile number format using regex
        const isValidMobileNo = /^\d{10}$/.test(inputValue);
        setValidMobileNo(isValidMobileNo);
    };

    const handleToggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleEmail_LI = (event) => {
        setEmail_LI(event.target.value);
    };
    const handlePassword_LI = (event) => {
        setPassword_LI(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        if (password === event.target.value) {
            setPasswordsMatch(true);
            console.log('Passwords match');
        } else {
            setPasswordsMatch(false);
            console.log('Passwords do not match');
        }
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${process.env.HOSTNAME}/auth/instituteregister`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    mobileNumber: mobileNo
                }),
            });
            const responseData = await response.json();
            if (responseData && responseData.status === 200 && responseData.data) {
                const adminId = responseData.data.adminId;
                const token = responseData.data.accessToken;
                const refreshToken = responseData.data.refreshToken;
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('adminId', adminId);
                localStorage.setItem('token', token);
                localStorage.setItem('refreshToken', refreshToken);
            } else {
                // Handle unexpected response structure
                console.error('Unexpected response structure:', responseData);
            }
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Login Error:', error);
        }
    };
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${process.env.HOSTNAME}/auth/institutelogin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email_LI,
                    password: password_LI
                }),
            });
            const responseData = await response.json();
            if (responseData && responseData.status === 200 && responseData.data) {
                const adminId = responseData.data.adminId;
                const token = responseData.data.accessToken;
                const refreshToken = responseData.data.refreshToken;
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('adminId', adminId);
                localStorage.setItem('token', token);
                localStorage.setItem('refreshToken', refreshToken);
            } else {
                // Handle unexpected response structure
                console.error('Unexpected response structure:', responseData);
            }
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Login Error:', error);
        }
    };

    return (
        <div className="wrapper">
            <div className="title-text">
                <div className={`title ${isLoginForm ? 'login' : 'signup'}`}>{isLoginForm ? 'Login Form' : 'Signup Form'}</div>
            </div>
            <div className="form-container">
                <div className="slide-controls">
                    <input type="radio" name="slide" id="login" checked={isLoginForm} onChange={handleToggleForm} />
                    <input type="radio" name="slide" id="signup" checked={!isLoginForm} onChange={handleToggleForm} />
                    <label htmlFor="login" className="slide login">
                        Login
                    </label>
                    <label htmlFor="signup" className="slide signup">
                        Signup
                    </label>
                    <div className="slider-tab" />
                </div>
                <div className="form-inner">
                    {isLoginForm ? (
                        <form action="" onSubmit={handleLogin} className="login">
                            <div className="field">
                                <input type="text" placeholder="Email Address" value={email_LI} onChange={handleEmail_LI} required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" value={password_LI} onChange={handlePassword_LI} required />
                            </div>
                            <div className="pass-link">
                                <Link to='/'>Forgot password?</Link>
                            </div>
                            <div className="field btn">
                                <div className="btn-layer" />
                                <input type="submit" defaultValue="Login" />
                            </div>
                            <div className="signup-link flex justify-center">
                                Not a member? <div className='text-blue-600 cursor-pointer' onClick={() => handleToggleForm()}>Signup now</div>
                            </div>
                        </form>
                    ) : (
                        <form action="" onSubmit={handleSignUp} className="signup">
                            <div className="field">
                                <input type="text" placeholder="Email Address" value={email} onChange={handleEmail} required />
                            </div>
                            <div className="field">
                                <input type="tel" placeholder="Mobile No" required value={mobileNo} onChange={handleMobileNoChange} />
                            </div>
                            {!validMobileNo && (
                                <div style={{ color: 'red' }}>Please enter a valid 10-digit mobile number</div>
                            )}
                            <div className="field">
                                <input type="password" placeholder="Password" required value={password} onChange={handlePasswordChange} />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Confirm password" required value={confirmPassword} onChange={handleConfirmPasswordChange} />
                            </div>
                            {!passwordsMatch && (
                                <div style={{ color: 'red' }}>Passwords do not match</div>
                            )}
                            <div className="field btn">
                                <div className="btn-layer" />
                                <input type="submit" defaultValue="Signup" />
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignUp;
