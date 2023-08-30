import send from "../assets/icons8-send-48.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import email from "../assets/email.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/icons8-github-50.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ggidb95",
        "template_svcpdeq",
        form.current,
        "2U4hS75Yd_RZTz-RG"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Message sent successfully!!",
            showConfirmButton: false,
            timer: 2000,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="pb-10 mt-20" id="contact">
      <div className="card lg:card-side shadow-xl md:mx-10 lg:mx-10 pb-5">
        <div
          className="md:w-5/12 lg:w-5/12 text-center"
          data-aos="zoom-in-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <p className="text-5xl mb-10 text-blue-400 font-semibold text-center">
            Get in Touch
          </p>
          <div className="flex flex-col items-center mt-4">
            {" "}
            {/* Center vertically and horizontally */}
            <img src={phone} alt="" className="mr-2 h-10" />
            <p className="text-xl">+88 01796310361</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img src={email} alt="" className="mr-2 h-10" />
            <p className="text-xl">hayathossain7@gmail.com</p>
          </div>
          <div className="flex flex-col items-center mt-4">
            <img src={location} alt="" className="mr-2 h-10" />
            <p className="text-xl">Hathazari, Chattogram, Bangladesh</p>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href="https://www.linkedin.com/in/hayat-hossain7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-lg bg-[#464866] btn-circle btn-outline mx-1">
                <img src={linkedin} className="h-10" alt="" />
              </button>
            </a>
            <a
              href="https://www.facebook.com/HayatHossainNChowdhury/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-lg bg-[#464866] btn-circle mx-1 btn-outline">
                <img src={facebook} className="h-10" alt="" />
              </button>
            </a>
            <a
              href="https://github.com/nakib1948"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-lg bg-[#464866] btn-circle btn-outline mx-1">
                <img src={github} className="h-10" alt="" />
              </button>
            </a>
          </div>
        </div>
        <div
          className="card-body bg-[#464866] rounded-3xl"
          data-aos="flip-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="user_name"
                className="input input-bordered text-gray-950"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="user_email"
                className="input input-bordered text-gray-950"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Message</span>
              </label>
              <textarea
                className="textarea textarea-primary textarea-lg w-full text-gray-950"
                placeholder="your message"
                name="message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline btn-primary">
                <span className="text-white text-lg font-semibold">send</span>
                <img src={send} className="h-7" alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
