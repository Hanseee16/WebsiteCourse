import ImageHero from "../assets/image/hero.png";
import FaqComponent from "../components/FaqComponent";
import { kelasTerbaru, dataSwiper } from "../data";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <section
        id="home"
        className="home bg-gradient-to-l from-[#f7797d] via-[#fbd786] to-[#c6ffdd] dark:from-[#09101F] dark:via-[#09101F] dark:to-[#09101F] "
      >
        <div className="container py-16 md:py-28 lg:py-5">
          <div className="flex flex-wrap justify-center items-center h-dvh">
            <div className="w-full lg:w-1/2">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-color-text dark:text-white font-semibold leading-tight lg:leading-tight pb-2 md:pb-6 animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.6s" }}
              >
                Temukan Bakat Kreatifmu Bersama Kami !
              </h1>
              <p
                className="text-base text-color-text dark:text-gray-300 md:text-lg pb-4 md:pb-6 animate__animated animate__fadeInUp"
                style={{ animationDelay: "1s" }}
              >
                "Menemukan dan Mengembangkan Bakat Kreatif: Jelajahi Kursus Kami
                untuk Peningkatan Diri!"
              </p>
              <div
                className="flex flex-wrap md:space-x-5 space-y-2 md:space-y-0 animate__animated animate__fadeInUp"
                style={{ animationDelay: "1.4s" }}
              >
                <Link
                  to="kelas"
                  className="w-full md:w-1/3 text-white text-lg text-center capitalize bg-secondary-color dark:bg-red-600 hover:bg-secondary-color/90 dark:hover:bg-red-600/90 transition ease-in duration-300 rounded-md py-3"
                >
                  lihat kelas
                </Link>
                <Link
                  to=""
                  className="w-full md:w-1/3 text-white text-lg text-center capitalize bg-color-text dark:bg-[#1E293B] hover:bg-color-text/90 dark:hover:bg-gray-700/90 transition ease-in duration-300 rounded-md py-3"
                >
                  lihat promo
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInUp">
              <img src={ImageHero} alt="" className="animated-image" />
            </div>
          </div>
        </div>
      </section>

      {/* kelas */}
      <section className="kelas bg-gray-50 dark:bg-[#09101F] py-28">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl text-color-text dark:text-white font-semibold capitalize mb-2">
              kelas terbaru
            </h1>
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center mt-16">
            {kelasTerbaru.map((kelas) => {
              return (
                <div
                  className="w-full md:w-1/2 lg:w-1/3 px-2 md:px-3 mb-5 lg:mb-6"
                  key={kelas.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={kelas.delay}
                >
                  <div className="border dark:border-none shadow rounded-md bg-white dark:bg-[#1E293B]">
                    <img
                      src={kelas.image}
                      alt=""
                      className="rounded-tl-md rounded-tr-md"
                    />
                    <div className="p-5">
                      <div className="text-yellow-300 flex gap-1 mb-5">
                        <i className={kelas.star1}></i>
                        <i className={kelas.star2}></i>
                        <i className={kelas.star3}></i>
                        <i className={kelas.star4}></i>
                        <i className={kelas.star5}></i>
                      </div>
                      <h1 className="text-lg md:text-xl text-color-text dark:text-white font-semibold mb-10">
                        {kelas.title}
                      </h1>
                      <div className="flex justify-between items-center">
                        <p className="text-color-text dark:text-[#EBEDF4] font-medium">
                          {kelas.price}
                        </p>
                        <a
                          href=""
                          className="text-white bg-secondary-color dark:bg-red-600 hover:bg-secondary-color/90 dark:hover:bg-red-600/90 transition ease-in duration-300 rounded-md capitalize px-6 py-2"
                        >
                          {kelas.buy}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <button
              className="text-white capitalize bg-color-text dark:bg-red-600 hover:bg-color-text/90 dark:hover:bg-red-600/90 transition ease-in duration-300 px-10 py-3 rounded-full shadow-md"
              onClick={() => navigate("/kelas")}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              lihat semua kelas{" "}
              <i className="fa-solid fa-chevron-right ps-1"></i>
            </button>
          </div>
        </div>
      </section>
      {/* end kelas */}

      {/* testimonials */}
      <section className="testimonials bg-white dark:bg-[#09101F] py-28">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl text-color-text dark:text-white font-semibold capitalize mb-2">
              testimonials
            </h1>
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300">
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
              {dataSwiper.map((data) => {
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
      {/* end testimonials */}

      {/* faq */}
      <FaqComponent />
      {/* end faq */}
    </>
  );
};

export default HomePage;
