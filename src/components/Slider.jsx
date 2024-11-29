import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }}>
      <SwiperSlide>
        <div style={{ height: '300px', background: '#ddd', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>Slide 1</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: '300px', background: '#bbb', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>Slide 2</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: '300px', background: '#999', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>Slide 3</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
