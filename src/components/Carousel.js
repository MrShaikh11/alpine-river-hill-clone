import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../Swiper.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function App() {
  return (
    <div className="container carousel">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container">
            <div className="row row-cols-3">
              <Card
                title="6 Master Bedrooms"
                para="Air condtioned with an attached balcony"
                logo="house"
              />
              <Card
                title="Spacious Living Room"
                para="Sofa Set | Dining Area | Fully Air Conditioned"
                logo="couch"
              />
              <Card
                title="25-30 Guests"
                para="Suitable for family, friends and corporate getaways"
                logo="users"
              />
              <Card
                title="Private Swimming Pool"
                para="Full Size | Waterfall | Patio loungers | Underwater LED Lighting"
                logo="swimming-pool"
              />
              <Card
                title="Meals"
                para="Vegetarian | Non-Vegetarian | Jain Meal Plan(Breakfast, Lunch, High Tea, Dinner"
                logo="utensils"
              />
              <Card
                title="Music System"
                para="Bluetooth, USB & AUX connectivity | Karaoke"
                logo="music"
              />
              <Card
                title="High-Speed WIFI"
                para="Speed upto 30 MBPS"
                logo="wifi"
              />
              <Card
                title="Smart Television"
                para="Full HD 50 inch LED"
                logo="tv"
              />
              <Card
                title="Online Streaming"
                para="Netflix | Disney + Hotstar | Amazon Prime"
                logo="blog"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row row-cols-3">
              <Card
                title="6 Master Bedrooms"
                para="Air condtioned with an attached balcony"
                logo="house"
              />
              <Card
                title="Spacious Living Room"
                para="Sofa Set | Dining Area | Fully Air Conditioned"
                logo="couch"
              />
              <Card
                title="25-30 Guests"
                para="Suitable for family, friends and corporate getaways"
                logo="users"
              />
              <Card
                title="Private Swimming Pool"
                para="Full Size | Waterfall | Patio loungers | Underwater LED Lighting"
                logo="swimming-pool"
              />
              <Card
                title="Meals"
                para="Vegetarian | Non-Vegetarian | Jain Meal Plan(Breakfast, Lunch, High Tea, Dinner"
                logo="utensils"
              />
              <Card
                title="Music System"
                para="Bluetooth, USB & AUX connectivity | Karaoke"
                logo="music"
              />
              <Card
                title="High-Speed WIFI"
                para="Speed upto 30 MBPS"
                logo="wifi"
              />
              <Card
                title="Smart Television"
                para="Full HD 50 inch LED"
                logo="tv"
              />
              <Card
                title="Online Streaming"
                para="Netflix | Disney + Hotstar | Amazon Prime"
                logo="blog"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row row-cols-3">
              <Card
                title="High Quality Mattresses, Towels and Linens"
                para=""
                logo="buffer"
              />
              <Card
                title="Secure Car Park"
                para="Under CCTV Surveillience"
                logo="parking"
              />
               <Card
                title="24X7 Security"
                para="CCTV Camera | Securty Guard | Fire Extinguishers"
                logo="user-lock"
              />
               <Card
                title="Intercom"
                para="Room to Room | Room to Housekeeping"
                logo="phone-volume"
              />
               <Card
                title="Terrace"
                para="Large sit out area on level 1"
                logo="building"
              />
               <Card
                title="8 Washrooms"
                para="Modern fittings and amenities"
                logo="restroom"
              />
               <Card
                title="Pet Friendly"
                para="We love our four-legged friends"
                logo="paw"
              />
               <Card
                title="Swimming Pool Timings"
                para="No Restriction"
                logo="ban"
              />
               <Card
                title="Events, Functions and Parties"
                para="Planning | Organization | Execution"
                logo="birthday-cake"
              />
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="container">
            <div className="row row-cols-3">
              <Card
                title="Fully Stocked Kitchen"
                para="Refrigerator | Microwave | Cookware | Gas Stove &amp; Cyinders"
                logo="utensils"
              />
              <Card
                title="Toiletries"
                h2="Ignis Range by Five Elements®"
                para="Shampoo | Hair Conditioner | Body Lotion | Soap | Comb | Dental Kit | Hand Wash Paraben Free | PETA Certified | Vegan | ISO 22716 GMP | FDA Approved"
                logo="person-booth"
              />
              <Card
                title="Wardrobes and Garment Hangers"
                para="In all bedrooms"
                logo="person-booth"
              />
               <Card
                title="First Aid Kit"
                para="Emergency Supplies"
                logo="first-aid"
              />
               <Card
                title="Extra Matresses"
                para="For additional guests"
                logo="buffer"
              />
               <Card
                title="Doctor on Call"
                para="24X7"
                logo="user-md"
              />
               <Card
                title="Airport Transfers"
                para="Pickup and drop off services"
                logo="car"
              />
               <Card
                title="24X7 Guest Care"
                para="+91 9667555554"
                logo="handshake"
              />
               
               <Card
                title="Driver's Quaters"
                para="Accomodation | Meals"
                logo="hotel"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container">
            <div className="row row-cols-3">
              <Card
                title="Total Area Spread Cover"
                para="8000 Sq ft "
                logo="ruler-combined"
              />
              <Card
                title="Check-In and Check-Out Timings"
                para="Flexible"
                logo="clock"
              />
              <Card
                title="Inverter"
                para="In Case of Electric cut-out"
                logo="image"
              />
              <Card
                title="Covid-19 Safety Practices"
                para="WHO Recommended"
                logo="virus"
              />
              <Card
                title="In House Caretaker"
                para="24 Hours"
                logo="user-tie"
              />
              <Card
                title="Laundry and Dry Cleaning Services"
                para="Bluetooth, USB & AUX connectivity | Karaoke"
                logo="jug-detergent"
              />
              <Card
                title="UV Water Purifier"
                para=""
                logo="glass-water-droplet"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
