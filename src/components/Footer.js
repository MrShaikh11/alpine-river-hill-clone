import React from "react";
import "../Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
    <div className="design">
      
    </div>
    <div className="main-footer">
      
      <div className="container">
        <div className="row">
          <div className="col firstCol">
            <img
              src="https://alpineriverhill.com/assets/img/logo.png"
              width={80}
              height={56.7}
            />
            <a className="navbar-brand" href="#">
              ALPINE RIVER HILL
            </a>
            <br/>Alpine Riverhill Villa is a modern & upscale vacation rental villa
            that is passionate about ‘making moments’ and recognising that small
            gestures make a big difference to our guests. We do ordinary things
            in an extraordinary way – a philosophy that has defined our brand’s
            success from the very start.
          </div>

          <div className="col">
            <h4>QUICK LINKS:</h4>
            <ul className="list-unstyled">
              <li>
              <i className="fa-solid fa-home">&nbsp;</i>
                Home</li>
              <li>
              <i className="fa-solid fa-images">&nbsp;</i>
                Gallery</li>
              <li>
              <i className="fa-solid fa-virus">&nbsp;</i>

                Covid-19 Safety Practices</li>
              <li>
              <i className="fa-solid fa-crown">&nbsp;</i>
                Offers</li>
              <li>
              <i className="fa-solid fa-quote-left">&nbsp;</i>

                Testimonials</li>
              <li>
              <i className="fa-solid fa-info-circle">&nbsp;</i>

                About Us</li>
              <li>
              <i className="fa-solid fa-phone">&nbsp;</i>
                Contact Us</li>
            </ul>
          </div>

          <div className="col">
            <h4>CONTACT DETAILS:</h4>
            <ul className="list-unstyled">
              <li>Address: </li>
              <li>Bungalow no. 01, River Hill Park Society, Near Sai Brooklands, Opp. Sidhu Dhaba, Takve, Old Mumbai-Pune Highway, Lonavala - 410405</li>
              <li>CONTACT NO:</li>
              <li><a href="tel:+919930247992">+919930247992</a>/<a href="tel:+919667555554">+919667555554</a></li>
              <li>Social Links:</li>
              <li>
              <a href="https://www.facebook.com/alpine.riverhill/" target="_blank" class="social-facebook"><i class="fab fa-facebook-square fa-2x pr-1"></i></a>
                <a href="https://www.instagram.com/alpine.riverhill/" target="_blank" class="social-instagram"><i class="fab fa-instagram fa-2x pr-1"></i></a>
              <a href="//api.whatsapp.com/send?phone=919667555554" target="_blank" class="social-whatsapp"><i class="fab fa-whatsapp fa-2x pr-1"></i></a>
              <a href="https://www.pinterest.com/alpineriverhillvilla" target="_blank" class="social-google"><i class="fab fa-pinterest fa-2x pr-1"></i></a>
              <a href="https://www.snapchat.com/add/alpineriverhill" target="_blank" class="social-snapchat"><i class="fab fa-snapchat fa-2x pr-1"></i></a>
              <a href="https://www.youtube.com/channel/UCF9uuv6xde1mg8YmdDuP8Kg" target="_blank" class="social-youtube"><i class="fab fa-youtube fa-2x pr-1"></i></a>
              <a href="https://www.google.co.in/travel/hotels/alpine%20riverhill/entity/CgoIm_X7ktrajLUaEAE/overview?g2lb=2502548%2C4258168%2C4260007%2C4274032%2C4305595%2C4306835%2C4317915%2C4326765%2C4328159%2C4329288%2C4330862%2C4366684%2C4373849%2C4381263%2C4382623%2C4385383%2C4386665%2C4388729%2C4395397%2C4270859%2C4284970%2C4316256%2C4356900&amp;hl=en&amp;gl=in&amp;un=1&amp;q=alpine%20riverhill&amp;rp=EJv1-5La2oy1GjgCQABIAQ&amp;ictx=1&amp;utm_campaign=sharing&amp;utm_medium=link&amp;utm_source=htls&amp;hrf=KhYKBwjkDxAGGA8SBwjkDxAGGBAYASgA" target="_blank" class="social-google"><i class="fab fa-google fa-2x"></i></a>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="footer-bottom row">
          <p className="col-sm lastLine">
            &copy; 2020 Alpine Riverhill | All Rights Reserved
          </p>
      </div>
    </div>
    </>

  );
}

export default Footer;
