import Navbar from "../Navbar";
import Footer from "../Footer";
import { useGetAllblogQuery } from "../../redux/api/blogApi";
import Loader from "../shared/Loader";
import SafeHtmlComponent from "./SafeHtmlComponent";

const Blog = () => {
  const { data, isLoading } = useGetAllblogQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div style={{ background: "#282c34", position: "relative" }}>
      <Navbar />
      <p className="text-5xl pt-20 text-blue-400 font-semibold mb-10 text-center">
        Blogs
      </p>
      <div className="bg-blue-300 h-1 w-32 mx-auto mt-1"></div>
      <div className="grid pt-20 mb-10 grid-cols-1">
        {data?.data.map((blog, index) => (
          <div
            key={index}
            className="card md:mx-20 lg:mx-20 text-black bg-base-100 lg:card-side shadow-xl"
          >
            <figure>
              <img src={blog.image}  alt="Blog" />
            </figure>
            <div className="card-body md:w-2/3 lg:w-2/3 h-64 overflow-y-scroll">
              <h2 className="card-title font-bold text-2xl">{blog.title}</h2>
              <SafeHtmlComponent htmlString={blog.description} />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
