import React from 'react'
import './NavDashboard2.css'

const NavDashboard2 = () => {
    return (
        <nav className='navbar navbar-wrapper'>
            <div className='container'>
                {/* Brand */}
                <div className='navbar-brand'>
                    <a href='/' className='brand-link'>
                        <img src='https://eskooly.com/assets/images/logos/logoxx.png' className='nav-brand h-16' alt='logo' />
                    </a>

                    {/* Responsive Toggle Burger Icon */}
                    <div className='custom-burger'>
                        <div className='responsive-btn'>
                            <span className='menu-toggle'>
                                <span className='icon-box-toggle'>
                                    <span className='rotate'>
                                        <i className='icon-line-top'></i>
                                        <i className='icon-line-center'></i>
                                        <i className='icon-line-bottom'></i>
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                    {/* Responsive Toggle Burger Icon */}
                </div>

                {/* Navbar menu */}
                <div className='navbar-menu'>
                    <div className='navbar-start'>
                        <div className='navbar-items has-dropdown'>
                            <div className='navbar-item m-white'>Products <i className='im im-icon-Arrow-Down'></i></div>
                            {/* <div className='navbar-dropdown'>
                                <div className='mega-inner'>
                                    <div className='container'>
                                        <div className='columns'>
                                            <div className='column'>
                                                <h2 className='title is-6 is-mega-menu-title'>eSchool for Desktop</h2>
                                                <a className='navbar-item is-flex' href='/'>
                                                    <i className='im im-icon-Windows-Microsoft'></i>
                                                    <div className='navbar-content'>
                                                        <p>
                                                            <small className='color-secondary'>Windows</small>
                                                        </p>
                                                        <p>Download Now</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className='navbar-item is-slide m-white'>Help</div>
                    </div>
                </div>


                {/* Navbar End */}
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <a id='#signup-btn' href='/' className='button button-cta bg-m-blue7 m-white is-bold btn-align rounded raised'><i className="im im-icon-Add-User"></i> Sign Up</a>
                    </div>
                    <div className='navbar-item'>
                        <a id='#signup-btn' className='button button-cta bg-m-white m-dblue is-bold btn-align rounded raised' href='/'><i className="im im-icon-Key-Lock"></i> Login</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavDashboard2