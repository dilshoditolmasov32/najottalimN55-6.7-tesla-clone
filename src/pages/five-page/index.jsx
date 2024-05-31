import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../index.css";

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
        <h1>Solar Roof-1</h1>
      </SwiperSlide>
      <SwiperSlide className="swipper">
        <h1>Solar Roof-2</h1>
      </SwiperSlide>

      <SwiperSlide className="swipper">
        <h1>Solar Roof-3</h1>
      </SwiperSlide>
      <SwiperSlide className="swipper">
        <h1>Solar Roof-4</h1>
      </SwiperSlide>
    </Swiper>
  );
};

export default Index;
