import React from "react";
import "../Form.css";

function Form() {
  return (
    <>
    <div className="formFull">
      <div className="formText">

      <h1 className="orange">Interested to make your life memorable with Alpine Riverhill?</h1>
      <h3>Fill the below details and our support team will contact you soon</h3>
      </div>
       <div class="formInside  container-fluid wow fadeInUp">
    <div class="col-md-6 m-auto mt-4 primary">
      <form
        class="border border-black p-3 ">

        <h2 className="text-center mb-4">Enquiry Form</h2>
        <div className="row">
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
                <input type="tel"
              id="phone"
              name="phone"
              class="form-control mb-4 numberOnly"
              pattern="[0-9]*"
              placeholder="Contact Number"
              required/>
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
                <input type="checkbox"/>
                <label class="custom-control-label" >Meals</label> 
                </div>
                <div className="">
                <input type="checkbox"/>
                <label class="custom-control-label" >Barbeque</label> 
                </div>
                <div className="">
                <input type="checkbox"/>
                <label class="custom-control-label" >Sheesha</label> 
                </div>
            </div>


            <div className="col-12 mt-2">
                <p>Message:</p>
                <textarea name="" class="form-control mb-4" ></textarea>
            </div>
        </div>

        <div className="text-center">
        <button className="btn btn-warning my-4 text-white m-auto"><i class="fa-solid fa-paper-plane"></i> SEND ENQUIRY</button>
        </div>
        </form>
        </div>

        </div>
      </div>
        
    </>
  );
}

export default Form;
