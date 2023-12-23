import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaTelegram, FaWhatsapp, FaViber, FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <>
  <div className="footer"></div>
    <div class="text-bg-secondary p-3 ">
      <div className='row py-5'>
        <div className='col-md-4 col-sm-12'>
          <h4 class="text-bg-warning">ABOUT KARKHANA</h4>
          <p>Karkhana is a social enterprise that aims to teach young students problem-solving skills, independent mindset, and attitude to build their future. We create learning kits for middle-school students that teach children to be resourceful and confident.</p>
        </div>
        <div className='col-md-2 col-sm-12'>
          <h4 class="text-bg-warning"> SITE MAP</h4>
          <a href=''><p>Home</p></a>
          <a href=''><p>Why us</p></a>
          <a href=''><p>Our Partners</p></a>
          <a href=''><p>Contact</p></a>
        </div>
        <div className='col-md-4 col-sm-12'>
          <h4 class="text-bg-warning">VISIT US/ SEND US A MESSAGE</h4>
         <a href=''> <p> 01-4512624</p></a>
          <a href=''><p>M824+G89, Karyabinayak 44700, Lalitpur, Nepal</p></a>
          <a href=''><p>info@karkhana.asia</p></a>
        </div>
         <div className='col-md-2 col-sm-12'>
          <h4 class="text-bg-warning" >FOLLOW US</h4>
          <a href=''><p>Contact Us</p></a>
          

          <div className='icon'>
             <a href="https://www.youtube.com" target="blank"> <p><FaYoutube className="icon youtube"/></p></a>
             <a href="https://www.facebook.com" target="blank"> <p><FaFacebook className="icon facebook"/></p></a>
              <a href="https://twitter.com" target="blank"><p><FaTwitter className="icon twitter"/></p></a>
             <a href="https://www.instagram.com" target="blank"><p><FaInstagram className="icon instagram"/></p></a>
             <a href="https://api.whatsapp.com/send/?phone=9779807726543&text=I+want+to+join+THT+News+Alerts+free+service+on+whatsapp&type=phone_number&app_absent=0" target="blank"> <p><FaWhatsapp className="icon whatsapp"/></p></a>
              <a href="https://invite.viber.com" target="blank"><p><FaViber className="icon viber"/></p></a>
             <a href="https://www.linkedin.com" target="blank"> <p><FaLinkedin className="icon linkedin"/></p></a>
              <a href="https://t.me" target="blank"><p><FaTelegram className="icon telegram"/></p></a>
              </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer