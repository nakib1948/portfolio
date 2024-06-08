import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import img1 from "../assets/toyStore/img1.png";
import img2 from "../assets/toyStore/img2.png";
import img3 from "../assets/toyStore/img3.png";
import img4 from "../assets/toyStore/img4.png";
import img5 from "../assets/toyStore/img5.png";
import img6 from "../assets/toyStore/img6.png";
import git from "../assets/icons8-github-50.png";
import live from "../assets/icons8-eye-50.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
const ToysStore = () => {
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
          <SwiperSlide>
            {" "}
            <img className="w-3/4 mx-auto" src={img1} alt="" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/4 mx-auto" src={img2} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-3/4 mx-auto" src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/4 mx-auto" src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/4 mx-auto" src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/4 mx-auto" src={img6} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="mt-12 pb-5 mx-10 lg:mx-20 md:mx-20">
          <p className="text-4xl my-5 text-blue-300 font-semibold">
            Toys-Store
          </p>
          <a
            href="https://github.com/nakib1948/ToysStore-client-side"
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
            href="https://github.com/nakib1948/ToysStore-server-side"
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
            href="https://toys-store-a3804.web.app/"
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
            ● E-commerce platform for superhero toy purchases. <br />
            ● The homepage showcases toy categories and customer reviews. <br />
            ● Detailed listings for various toy types are available.
            <br />
            ● Logged-in users can add their toys for sale. <br />
            ● Users can manage their listed toys, including updates and
            deletions.
            <br />
            ● Access to full toy descriptions requires a user login. <br />
            ● Technology Used: Firebase, ReactJS, MongoDB, NodeJS, ExpressJs,
            React Router,
            <br />
            TailwindCSS, Framer motion, AOS, Vercel server, and more.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ToysStore;
