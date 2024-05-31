import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
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
       <h1>Solar Panels-1</h1>
      </SwiperSlide>
      <SwiperSlide className="swipper">
      <h1>Solar Panels-2</h1>
      </SwiperSlide>

      <SwiperSlide className="swipper">
      <h1>Solar Panels-3</h1>
      </SwiperSlide>
      <SwiperSlide className="swipper">
      <h1>Solar Panels-4</h1>
      </SwiperSlide>
    </Swiper>
  );
};

export default Index;
