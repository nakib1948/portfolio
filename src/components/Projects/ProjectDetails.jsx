import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import git from "../../assets/icons8-github-50.png";
import live from "../../assets/icons8-eye-50.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { useGetSingleProjectQuery } from "../../redux/api/projectApi";
import Loader from "../shared/Loader";

const ProjectDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProjectQuery(id);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="pt-20" style={{ background: "#282c34" }}>
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
          className="md:h-[500px] lg:h-[500px] "
        >
          {data?.data?.image.map((img, index) => (
            <SwiperSlide key={index}>
              <img className="w-3/4 mx-auto" src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-12 pb-5 mx-10 lg:mx-20 md:mx-20">
          <p className="text-4xl my-5 text-blue-300 font-semibold">
            {data?.data?.name}
          </p>
          <a
            href={data?.data?.client}
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
            href={data?.data?.server}
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
            href={data?.data?.liveSite}
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
          <p className="text-lg">{data?.data?.details}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
