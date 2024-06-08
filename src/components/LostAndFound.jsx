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
const LostAndFound = () => {
  const [images, setImages] = useState([]);

  const importImages = async () => {
    const images = [];
    for (let i = 1; i <= 16; i++) {
      const image = await import(`../assets/lostandfound/img${i}.png`);
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
            Lost and Found System
          </p>
          <a
            href="https://github.com/nakib1948/Lost-Found-front-end"
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
            href="https://github.com/nakib1948/Lost-and-found-backend"
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
            href="https://lost-and-found-system-frontend.vercel.app/"
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
            ● user has to sign in to access the dashboard
            <br />
            ● user need to signup if the user does not have an account <br />
            ● If a user loses or finds an item, a user has to submit the
            respective form with details.
            <br />
            ● user can filter and search any Lost Items and Found Items pages.
            <br />
            ● Founder reviews and verifies the claim. <br />
            ● Arrange for the item to be returned if proof is valid.
            <br />
            ● Owner updates the item status to (Found) once received.
            <br />
            ● Admin can manage and take action against users
            <br />
            ● Admin can see the website overall statistics.
            <br />
            ● Owner updates the item status to (Found) once received.
            <br />
            ● Technology Used : Typescript, NextJS, PostgreSQL, Prisma,
            Material UI,
            <br /> JWT, ExpressJs, Zod Validation and more.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LostAndFound;
