import { Accordion } from "flowbite-react";
import { faq } from "../data/index";

const FaqComponent = () => {
  return (
    <>
      <section className="testimonials bg-gray-50 dark:bg-[#09101F] py-28">
        <div className="container">
          <div className="text-center">
            <h1
              className="text-3xl lg:text-4xl text-color-text dark:text-white font-semibold capitalize mb-2 animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              pertanyaan yang sering ditanyakan
            </h1>
            <p
              className="text-base lg:text-lg text-gray-600 dark:text-gray-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: "1s" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center mt-16">
            <div className="w-full">
              <Accordion>
                {faq.map((data) => {
                  return (
                    <Accordion.Panel key={data.id} className="">
                      <Accordion.Title className="text-color-text dark:text-white">
                        {data.title}
                      </Accordion.Title>
                      <Accordion.Content>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {data.desc}
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqComponent;
