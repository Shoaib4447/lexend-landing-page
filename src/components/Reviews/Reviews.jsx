import styles from "./Reviews.module.scss";
import { testimonials } from "../../data/testimonials";
import Review from "./Review";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Reviews = () => {
  return (
    <>
      <section className={styles.testimonialSection}>
        <h3 className={styles.testimonialHeading}>
          What our clients <br /> sharing about us!
        </h3>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <Review
                img={review.photo}
                quote={review.quote}
                name={review.name}
                role={review.role}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Reviews;
