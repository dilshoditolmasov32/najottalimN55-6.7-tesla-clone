import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../index.css";
import img1 from "../../assets/images/img1.svg";
import img2 from "../../assets/images/img2.svg";
import img3 from "../../assets/images/img3.svg";
import img4 from "../../assets/images/img4.svg";

const Index = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      center={100}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="swipper">
        <img src={img3} alt="tesla-car" />
      </SwiperSlide>
      <SwiperSlide className="swipper">
        <img src={img2} alt="tesla-car" />
      </SwiperSlide>
      <SwiperSlide className="swipper">
        <img src={img1} alt="tesla-car" />
      </SwiperSlide>
      <SwiperSlide className="swipper">
        <img src={img4} alt="tesla-car" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Index;
