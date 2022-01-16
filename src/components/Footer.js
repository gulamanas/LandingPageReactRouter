import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer_container'>
            <section className="footer_subscription">
                <p className="footer_subscription_heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer_subscription_text">
                    You can unsubscribe at any time.
                </p>
                <div className="input_areas">
                    <form>
                        <input
                            type="email"
                            name='email'
                            placeholder='Your Email'
                            className='footer_input'
                        />
                        <Button buttonStyle='btn_outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer_links">
                <div className="footer_link_wrapper">
                    <div className="footer_link_items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer_link_items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
                <div className="footer_link_wrapper">
                    <div className="footer_link_items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer_link_items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social_media">
                <div className="social_media_wrap">
                    <div className="footer_logo">
                        <Link to='/' className='social_logo'>
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website_rights">TRVL &copy; 2022</small>
                    <div className="social_icons">
                        <Link
                            className='social_icon_link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                            className='social_icon_link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link
                            className='social_icon_link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link
                            className='social_icon_link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link
                            className='social_icon_link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
