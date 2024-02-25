import { testimonial } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialPage = () => {
  return (
    <>
      <section className="testimonials bg-white dark:bg-[#09101F] py-28">
        <div className="container">
          <div className="text-center">
            <h1
              className="text-3xl lg:text-4xl text-color-text dark:text-white font-semibold capitalize mb-2 animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              testimonials
            </h1>
            <p
              className="text-base lg:text-lg text-gray-600 dark:text-gray-300 animate__animated animate__fadeInUp"
              accordion
              style={{ animationDelay: "1s" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center mt-16">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 35,
                },
              }}
              modules={[Pagination]}
              className="mySwiper pb-12"
            >
              {testimonial.map((data) => {
                return (
                  <SwiperSlide
                    key={data.id}
                    className=" border dark:border-none shadow-md rounded-md p-5 cursor-grab active:cursor-grabbing bg-white dark:bg-[#1E293B] overflow-hidden h-80 relative"
                  >
                    <p className="text-base text-gray-700 dark:text-white mb-5">
                      {data.desc}
                    </p>
                    <div className="flex items-center gap-4 absolute bottom-5 left-5">
                      <img
                        src={data.image}
                        alt=""
                        className="w-16 rounded-full"
                      />
                      <div className="">
                        <h5>{data.name}</h5>
                        <p className="font-semibold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialPage;
