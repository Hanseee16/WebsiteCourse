import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <>
      <footer className="bg-white dark:bg-[#09101F] pt-10 md:pt-16 lg:pt-20 pb-7 md:pb-5">
        <div class="container">
          <div className="flex flex-wrap justify-between md:gap-y-16 lg:gap-y-0">
            <div className="w-full lg:w-[35%]">
              <h1 className="text-color-text dark:text-white text-2xl font-medium capitalize mb-3">
                website
                <span className="font-semibold text-red-600">course</span>
              </h1>
              <p className="text-gray-800 dark:text-gray-300 mb-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                amet debitis minus, excepturi assumenda consequatur adipisci
                labore enim? Consequuntur, consectetur?
              </p>
              <div>
                <Link className="flex items-center gap-2 mb-2 text-gray-800 dark:text-gray-300 hover:text-secondary-color transition ease-in duration-300">
                  <i className="fa-brands fa-whatsapp"></i>
                  <p>+62 816-1120-362</p>
                </Link>
                <Link className="flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-secondary-color transition ease-in duration-300">
                  <i className="fa-regular fa-envelope"></i>
                  <p>Kamilfarhan225@gmail.com</p>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[30%] my-16 md:my-0">
              <div className="flex flex-col gap-3">
                <h1 className="text-xl text-color-text dark:text-white font-bold capitalize">
                  menu
                </h1>
                <Link
                  className="text-gray-800 dark:text-gray-300 font-medium hover:text-secondary-color transition ease-in duration-200"
                  to=""
                >
                  Home
                </Link>
                <Link
                  className="text-gray-800 dark:text-gray-300 font-medium hover:text-secondary-color transition ease-in duration-200"
                  to="kelas"
                >
                  Kelas
                </Link>
                <Link
                  className="text-gray-800 dark:text-gray-300 font-medium hover:text-secondary-color transition ease-in duration-200"
                  to="testimonial"
                >
                  Testimonial
                </Link>
                <Link
                  className="text-gray-800 dark:text-gray-300 font-medium hover:text-secondary-color transition ease-in duration-200"
                  to="faq"
                >
                  FAQ
                </Link>
                <Link
                  className="text-gray-800 dark:text-gray-300 font-medium hover:text-secondary-color transition ease-in duration-200"
                  to="syaratdanketentuan"
                >
                  Syarat dan Ketentuan
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[30%]">
              <h1 className="text-lg text-color-text dark:text-white font-bold capitalize">
                subscribe untuk info lebih lanjut
              </h1>
              <div className="flex flex-col md:flex-row items-center gap-3 my-4">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Subscribe..."
                  className="rounded-md w-full py-3"
                />
                <button className="w-full lg:w-1/2 bg-red-600 hover:bg-secondary-color/90 transition ease-in duration-300 text-white py-3 rounded-md">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Link>
                  <i className="text-2xl text-gray-950 dark:text-gray-200 hover:text-blue-800 transition ease-in duration-300 fa-brands fa-facebook"></i>
                </Link>
                <Link>
                  <i className="text-2xl text-gray-950 dark:text-gray-200 hover:text-cyan-600 transition ease-in duration-300 fa-brands fa-twitter"></i>
                </Link>
                <Link>
                  <i className="text-2xl text-gray-950 dark:text-gray-200 hover:text-blue-800 transition ease-in duration-300 fa-brands fa-linkedin"></i>
                </Link>
                <Link>
                  <i className="text-2xl text-gray-950 dark:text-gray-200 hover:text-red-600 transition ease-in duration-300 fa-brands fa-youtube"></i>
                </Link>
              </div>
            </div>
            <div className="w-full text-center text-sm mt-36">
              <p className="text-gray-700 dark:text-gray-300">
                &copy; Copyright {new Date().getFullYear()} All Right Reserved
              </p>
              <p className="ext-gray-700 dark:text-white">
                by{" "}
                <span className="font-bold text-color-text dark:text-red-600">
                  Farhan Kamil
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
