import React from 'react';
import '../style/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { MDBFooter } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          
          Get In Touch With Us Vai Join Our Group
        </p>
        <Button variant="secondary">Telegram</Button>{' '}
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>

      <MDBFooter bgColor='light' className=' mt-5 text-center text-lg-left' style={{ width: '100%' }}>
        <div className='text-center p-3 text-decoration-none' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}&lt;JongDer/&gt;
        </div>
      </MDBFooter>
    </div>



  );
}

export default Footer;
