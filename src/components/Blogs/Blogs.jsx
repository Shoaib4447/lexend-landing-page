import styles from "./Blogs.module.scss";
import images from "../../asserts/images";
import Blog from "./Blog";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Blogs = () => {
  const { Post4, Post5, Post6 } = images;
  return (
    <section className={styles.insights}>
      <h3 className={styles.insights__title}>From the insights</h3>
      <div className={styles.blogFlex}>
        <Swiper
          // slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
          breakpoints={{
            0: {
              slidesPerView: 1, // for all small screens
            },
            768: {
              slidesPerView: 2, // for tablets and up
            },
            1024: {
              slidesPerView: 3, // for laptops and desktops
            },
          }}
        >
          <SwiperSlide>
            <Blog img={Post4} heading=' Team Solve Today Biggest Challenges' />
          </SwiperSlide>
          <SwiperSlide>
            <Blog img={Post5} heading=' Team Solve Today Biggest Challenges' />
          </SwiperSlide>
          <SwiperSlide>
            <Blog img={Post6} heading=' Team Solve Today Biggest Challenges' />
          </SwiperSlide>
          <SwiperSlide>
            <Blog img={Post4} heading=' Team Solve Today Biggest Challenges' />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Blog img={Post6} heading=' Team Solve Today Biggest Challenges' />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Blogs;
