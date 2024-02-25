import { semuaKelas } from "../data";

const KelasPage = () => {
  return (
    <>
      <section className="kelas bg-gray-50 dark:bg-[#09101F] py-28">
        <div className="container">
          <div className="text-center">
            <h1
              className="text-3xl lg:text-4xl text-color-text dark:text-white font-semibold capitalize mb-2 animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              semua kelas
            </h1>
            <p
              className="text-base lg:text-lg text-gray-600 dark:text-gray-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: "1s" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center mt-16">
            {semuaKelas.map((kelas) => {
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
          {/* <div className="text-center mt-10">
            <button
              className="text-white capitalize bg-color-text dark:bg-red-600 hover:bg-color-text/90 dark:hover:bg-red-600/90 transition ease-in duration-300 px-10 py-3 rounded-full shadow-md"
              onClick={() => navigate("/kelas")}
            >
              lihat semua kelas{" "}
              <i className="fa-solid fa-chevron-right ps-1"></i>
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default KelasPage;
