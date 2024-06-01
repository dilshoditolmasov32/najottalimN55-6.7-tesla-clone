import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "../index.css";
import { img1, img2, img3, img4 } from "@images";

const Index = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="swipper-slide">
        <img src={img4} alt="tesla-car" />
      </SwiperSlide>
      <SwiperSlide className="swipper-slide">
        <img src={img3} alt="tesla-car" />
      </SwiperSlide>
      <SwiperSlide className="swipper-slide">
        <img src={img2} alt="tesla-car" />
      </SwiperSlide>
      <SwiperSlide className="swipper-slide">
        <img src={img1} alt="tesla-car" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Index;
