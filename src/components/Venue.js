
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../Swiper.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function App() {
  return (
    <>
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
          <div className="text-center container-fluid p-0">
            <img
              className="img-responsive center-block d-block mx-auto"
              src="https://alpineriverhill.com/assets/img/slider/1.jpg"
              width="100%"
              style={{ margin: "0", padding: "0" }}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center container-fluid p-0">
            <img
              className="img-responsive center-block d-block mx-auto"
              src="https://alpineriverhill.com/assets/img/slider/2.jpg"
              width="100%"
              style={{ margin: "0", padding: "0" }}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center container-fluid p-0">
            <img
              className="img-responsive center-block d-block mx-auto"
              src="https://alpineriverhill.com/assets/img/slider/3.jpg"
              width="100%"
              style={{ margin: "0", padding: "0" }}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center container-fluid p-0">
            <img
              className="img-responsive center-block d-block mx-auto"
              src="https://alpineriverhill.com/assets/img/slider/4.jpg"
              width="100%"
              style={{ margin: "0", padding: "0" }}
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
