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

const BookManagement = () => {
  const [images, setImages] = useState([]);

  const importImages = async () => {
    const images = [];
    for (let i = 1; i <= 9; i++) {
      const image = await import(`../assets/bookManagement/img${i}.png`);
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
      <div style={{ background: "#282c34" }}>
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
        <div className="mt-12 pb-5 mx-10 lg:mx-20 md:mx-20">
          <p className="text-4xl my-5 text-blue-300 font-semibold">
            Book Management Dashboard
          </p>
          <a
            href="https://github.com/nakib1948/Book-Management-Dashboard-client"
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
            href="https://github.com/nakib1948/Book-Management-Dashboard-server"
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
            href="https://enchanting-liger-81b4b8.netlify.app/"
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
            ● user has to sign in to access the dashboard.
            <br />
            ● user can signup if the user does not have an account. <br />
            ● user can add products, update and delete product.
            <br />
            ● user can filter and search any product based on any field. <br />
            ● user can sell product to customer. <br />
            ● customer sales history has a filter system based on day, week,
            month, and year.
            <br />
            ● Technology Used : Typescript, ReactJS, MongoDB, Mongoose, Material
            Tailwind,
            <br /> JWT, ExpressJs, Zod Validation and more.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookManagement;
