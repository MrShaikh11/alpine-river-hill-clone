import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function App() {
  return (
    <div>
      <div className="container con text-center my-5 ">
        <h1 style={{ color: "#e8762b" }}>What our Guests say about us?</h1>
        <h3>Every Review matters</h3>
        <hr />
      </div>

      <div className="container w-75 ">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-transparent">
            <div className="conSlide text-center pb-5">
              <span className="">
                A stay at Alpine Riverhill let's you experience Lonavala's
                natural beauty in an intimate environment. One of Lonavala's
                most sought-after villas, a stay at Alpine Riverhill promises
                all the comforts of home and the luxury of a hotel. Located
                amongst greenery, this grand space is replete with amenities.
                Here, you can spend your days enjoying the soothing mountain
                breeze as the on-site staff attend to your needs. As the sun
                sets, take a stroll by the pool, where you can enjoy
                mouth-watering grilled tandoori dishes.
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-transparent">
            <div className="conSlide text-center">
              For those seeking serenity, Alpine Riverhill offers a perfect
              location peacefully nestled in a cozy environment. The villa's
              natural beauty and five star amenities make it an unforgettable
              place to call your own. Each morning, enjoy the birds chirping
              while savoring your breakfast.
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-transparent">
            <div className="conSlide text-center">
              It is almost too easy to fall in love with the warm and welcoming
              ambience, great food, hospitality and aminities. While you'll have
              no shortage of options, I recommend the tasty barbecue and sheesha
              by the poolside. Combine everything Alpine Riverhill has to offer
              and you will have the recipe for an ideal vacation for family and
              friends alike.
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="conSlide text-center">
              You would never want to leave this tranquil getaway overlooking
              the mesmerizing tree cover. Alpine Riverhill, a luxury boutique
              villa, embodies peace and serenity. It's elegant design blends
              into the surrounding vistas and landscapes. Enjoy the contemporary
              comforts of this villa with hours spent relaxing on sun loungers
              and diving into the refreshing waters of your own private swimming
              pool.
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="conSlide text-center">
              Whether it's your first time visiting or hundredth, Alpine
              Riverhill never fails to impress. From the library to the barbeque
              and bonfire, from hookah to the games and the music system,
              there's somethWhether it's your first time visiting or hundredth,
              Alpine Riverhill never fails to impress. From the library to the
              barbeque and bonfire, from hookah to the games and bonfire,
              there's something here for everyone.
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="conSlide text-center">
              Alpine Riverhill is the ideal destination for your next family
              reunion. Tucked away behind lush greenery and trees, this villa
              offers the perfect balance of privacy and accessibility.
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="conSlide text-center">
              Pool parties, barbeque, bonfire and sheesha - all of the above are
              on the menu at this luxe villa in Lonavla. A stay here is about
              decadent leisure. It's hard to imagine a better vacation without
              Alpine RiverHill.
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="conSlide text-center">
              More than a vacation rental, Alpine Riverhill feels like a
              luxirious hotel. We enjoyed the resort-like amenities and
              hospitality complimented by the surrounding lush greenery.
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="conSlide text-center">
              Warning: you may never want to leave this jaw-dropping villa.
              <br />
              Alpine Riverhill is the ideal retreat when in Lonavala. It will
              leave you spellbound. The space gives you a fresh modern vibe with
              loads of coziness that's sophisticated and welcoming. The 6 master
              bedroom villa comes complete with a housekeeper, private swimming
              pool and an exceptional chef, all waiting to make your stay a
              memorable one.
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="conSlide text-center">
              Whether is the architecture or location, Alpine River Hill conveys
              an overall feeling of tranquility. Nestled within Lonavla's scenic
              rolling hills, this villa is a complete package. The impeccable
              interior design combined with modern comforts and stunning
              hospitality &amp; service are all anyone could ask for in a
              vacation rental home.
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="conSlide text-center">
              Luxury at its peak. Went with friends to celebrate a birthday.
              Extremely courteous staff and management. The rooms area really
              clean and the food is just spectacular. We also did a barbecue
              there by the poolside and the food was so good. The pool was
              really clean and so was the bungalow. Definitely recommend going
              to this place!
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
