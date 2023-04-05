import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="container con text-center my-5 ">
        <h1 style={{ color: "#e8762b" }}>CONTACT US</h1>
        <h4>Book your villa now</h4>

        <hr />
      </div>

      <div className="container">
        <div className="row mx-auto">
          <div className="box1 col-4">
            <img
              className="contactImg"
              src="https://alpineriverhill.com/assets/img/5.jpg"
              alt=""
            />

            <ul className="list-unstyled my-2">
              <li>
                <h5>
                  <i class="mx-3 fa-solid fa-building" />
                  Address
                </h5>
                <h6>
                  Bungalow no. 01, River Hill Park Society, Near Sai Brooklands,
                  Opp. Sidhu Dhaba, Takve, Old Mumbai-Pune Highway, Lonavala -
                  410405
                </h6>
              </li>
              <li>
                <h5>
                  <i class="fa-solid fa-phone" />
                  Contact Number
                </h5>
                <p>+919930247992 / +919667555554</p>
              </li>
              <li>
                <h5>
                  <i class="fa-solid fa-envelope" />
                  Email
                </h5>
                <p>shazaan@alpineriverhill.com</p>
              </li>
              <li>
                <h5>
                  <i class="fa-solid fa-globe" />
                  Website
                </h5>
                <p>www.alpineriverhill.com</p>
              </li>
              <li>Social Links:</li>
              <li>
                <a
                  href="https://www.facebook.com/alpine.riverhill/"
                  target="_blank"
                  class="social-facebook"
                >
                  <i class="fab fa-facebook-square text-black fa-2x pr-1"></i>
                </a>
                <a
                  href="https://www.instagram.com/alpine.riverhill/"
                  target="_blank"
                  class="social-instagram"
                >
                  <i class="fab fa-instagram text-black fa-2x pr-1"></i>
                </a>
                <a
                  href="//api.whatsapp.com/send?phone=919667555554"
                  target="_blank"
                  class="social-whatsapp"
                >
                  <i class="fab fa-whatsapp text-black fa-2x pr-1"></i>
                </a>
                <a
                  href="https://www.pinterest.com/alpineriverhillvilla"
                  target="_blank"
                  class="social-google"
                >
                  <i class="fab fa-pinterest text-black fa-2x pr-1"></i>
                </a>
                <a
                  href="https://www.snapchat.com/add/alpineriverhill"
                  target="_blank"
                  class="social-snapchat"
                >
                  <i class="fab fa-snapchat text-black fa-2x pr-1"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCF9uuv6xde1mg8YmdDuP8Kg"
                  target="_blank"
                  class="social-youtube"
                >
                  <i class="fab fa-youtube text-black fa-2x pr-1"></i>
                </a>
                <a
                  href="https://www.google.co.in/travel/hotels/alpine%20riverhill/entity/CgoIm_X7ktrajLUaEAE/overview?g2lb=2502548%2C4258168%2C4260007%2C4274032%2C4305595%2C4306835%2C4317915%2C4326765%2C4328159%2C4329288%2C4330862%2C4366684%2C4373849%2C4381263%2C4382623%2C4385383%2C4386665%2C4388729%2C4395397%2C4270859%2C4284970%2C4316256%2C4356900&amp;hl=en&amp;gl=in&amp;un=1&amp;q=alpine%20riverhill&amp;rp=EJv1-5La2oy1GjgCQABIAQ&amp;ictx=1&amp;utm_campaign=sharing&amp;utm_medium=link&amp;utm_source=htls&amp;hrf=KhYKBwjkDxAGGA8SBwjkDxAGGBAYASgA"
                  target="_blank"
                  class="social-google"
                >
                  <i class="fab text-black fa-google fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="box2 col-8">
            <div className="formFull  form2">
              <div className="formText">
                <h1 className="orange">
                  Interested to make your life memorable with Alpine Riverhill?
                </h1>
                <h3>
                  Fill the below details and our support team will contact you
                  soon
                </h3>
              </div>
              <div class="formInside  container-fluid ">
                <div class="col-md-6  mt-4 primary justify-content-center align-items-center">
                  <form class="enquiry border border-black p-3 mx-auto ">
                    <h2 className="text-center mb-4">Enquiry Form</h2>
                    <div className="row ">
                      <div className="col-12 p-2">
                        <label for="name">Name: </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          class="form-control mb-4 numberOnly"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="">Phone Number: </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          class="form-control mb-4 numberOnly"
                          pattern="[0-9]*"
                          placeholder="Contact Number"
                          required
                        />
                      </div>

                      <div className="col-6 ">
                        <label htmlFor="">No of Guests: </label>
                        <input
                          type="tel"
                          id="guests"
                          name="guests"
                          class="form-control mb-4 numberOnly"
                          placeholder="No. of Guests"
                          value="1"
                        />
                      </div>

                      <div class="col-lg-6">
                        <label for="checkin">Check-In Date:</label>
                        <input
                          type="text"
                          id="checkin"
                          name="checkin"
                          class="datepicker form-control mb-4"
                          autcomplete="off"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label for="checkin">Check-Out Date:</label>
                        <input
                          type="text"
                          id="checkin"
                          name="checkin"
                          class="datepicker form-control mb-4"
                          autcomplete="off"
                        />
                      </div>

                      <div className="col-12">
                        <p>Amenities: </p>
                        <div className="">
                          <input type="checkbox" />
                          <label class="custom-control-label">Meals</label>
                        </div>
                        <div className="">
                          <input type="checkbox" />
                          <label class="custom-control-label">Barbeque</label>
                        </div>
                        <div className="">
                          <input type="checkbox" />
                          <label class="custom-control-label">Sheesha</label>
                        </div>
                      </div>

                      <div className="col-12 mt-2">
                        <p>Message:</p>
                        <textarea name="" class="form-control mb-4"></textarea>
                      </div>
                    </div>

                    <div className="text-center">
                      <button className="btn btn-warning my-4 text-white m-auto">
                        <i class="fa-solid fa-paper-plane"></i> SEND ENQUIRY
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="maps mx-auto">
      <iframe className="mx-auto"src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7555.9791360497675!2d73.495792!3d18.754003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1a6a32d5a25efa9b!2sAlpine%20Riverhill%20Villa%2C%20Lonavala%20(6%20BHK)!5e0!3m2!1sen!2sin!4v1676048097386!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}

export default Contact;
