import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import git from "../assets/icons8-github-50.png";
import live from "../assets/icons8-eye-50.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useState } from "react";

const Bookvalley = () => {
  const [images, setImages] = useState([]);

  const importImages = async () => {
    const images = [];
    for (let i = 1; i <= 35; i++) {
      const image = await import(`../assets/bookValley/img${i}.png`);
      images.push(image.default);
    }
    return images;
  };

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await importImages();
      setImages(loadedImages);
    };
    loadImages();
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="md:h-[500px] lg:h-[500px] mt-16"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img className="w-3/4 mx-auto" src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="my-12 mx-10 lg:mx-20 md:mx-20">
          <p className="text-4xl my-5 text-blue-300 font-semibold">
            Book Valley
          </p>
          <a
            href="https://github.com/nakib1948/Book-Valley-Client-Side"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-outline btn-primary ml-3">
              {" "}
              <img src={git} className="h-7" alt="" />{" "}
              <span className="text-white">client-site</span>{" "}
            </button>
          </a>
          <a
            href="https://github.com/nakib1948/Book-Valley-Server-Side"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-outline btn-primary ml-3">
              {" "}
              <img src={git} className="h-7" alt="" />{" "}
              <span className="text-white">server-site</span>{" "}
            </button>
          </a>
          <a
            href="https://book-valley-72490.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-outline btn-primary ml-3">
              {" "}
              <img src={live} className="h-7" alt="" />{" "}
              <span className="text-white">live-site</span>{" "}
            </button>
          </a>
          <p className="text-3xl my-5 text-blue-300 font-semibold">Features:</p>
          <p className="text-lg">
            ● create a flexible ecosystem for the digital book industry.
            <br />
            ● create a centralized platform for readers, writers, and
            publishers. <br />
            ● open the scope for new writers to reach out to publishers
            <br />
            ● provide low-cost e-book facilities to readers. <br />● Technology
            Used : Firebase, ReactJS, Stripe payment, JWT, Mongodb, DaisyUI,
            ExpressJs and more
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bookvalley;
