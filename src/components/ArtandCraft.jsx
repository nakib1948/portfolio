import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import img1 from "../assets/artAndCraft/img1.png";
import img2 from "../assets/artAndCraft/img2.png";
import img3 from "../assets/artAndCraft/img3.png";
import img4 from "../assets/artAndCraft/img4.png";
import img5 from "../assets/artAndCraft/img5.png";
import img6 from "../assets/artAndCraft/img6.png";
import img7 from "../assets/artAndCraft/img7.png";
import img8 from "../assets/artAndCraft/img8.png";
import img9 from "../assets/artAndCraft/img9.png";
import git from "../assets/icons8-github-50.png";
import live from "../assets/icons8-eye-50.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ArtandCraft = () => {
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
          <SwiperSlide>
            <img className="w-3/4 mx-auto" src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/4 mx-auto" src={img8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-3/4 mx-auto" src={img9} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="mt-12 pb-5 mx-10 lg:mx-20 md:mx-20">
          <p className="text-4xl my-5 text-blue-300 font-semibold">
            ArtisticCraftersCorner
          </p>
          <a
            href="https://github.com/nakib1948/ArtisticCraftersCorner-client-side"
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
            href="https://github.com/nakib1948/ArtisticCraftersCorner-server-side"
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
            href="https://summer-camp-school-22af6.web.app/"
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
            ● Educational platform for students and instructors. <br />
            ● Features include course listings, student achievements, and
            instructor profiles. <br />● Different dashboards for instructors,
            students, and admin roles. <br />
            ● Instructors propose courses, awaiting admin approval. <br />
            ● Enrolled students access courses with payment.
            <br />
            ● Admin feedback improves courses. <br />
            ● Technology Used: Firebase, ReactJS, Stripe payment, Mongodb,
            NodeJS, ExpressJs,
            <br />
            React Router, TailwindCSS, Framer motion, AOS, Vercel server, and
            more.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArtandCraft;
