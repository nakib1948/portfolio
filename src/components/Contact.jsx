import send from "../assets/icons8-send-48.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import email from "../assets/email.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/icons8-github-50.png";

const Contact = () => {
  return (
    <div className="pb-10 mt-20">
      
      <div className="card lg:card-side shadow-xl mx-10 pb-5">
      <div className="w-5/12 text-center">
      <p className="text-5xl mb-10 text-blue-400 font-semibold text-center">
        Get in Touch
      </p>
          <div className="flex flex-col items-center mt-4"> {/* Center vertically and horizontally */}
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
            <button className="btn btn-lg bg-[#464866] btn-circle btn-outline mx-1">
              <img src={linkedin} className="h-10" alt="" />
            </button>
            <button className="btn btn-lg bg-[#464866] btn-circle mx-1 btn-outline">
              <img src={facebook} className="h-10" alt="" />
            </button>
            <button className="btn btn-lg bg-[#464866] btn-circle btn-outline mx-1">
              <img src={github} className="h-10" alt="" />
            </button>
          </div>
        </div>
        <div className="card-body bg-[#464866] rounded-3xl">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Message</span>
            </label>
            <textarea
              className="textarea textarea-primary textarea-lg w-full "
              placeholder="your message"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline btn-primary">
              <span className="text-white text-lg font-semibold">send</span>
              <img src={send} className="h-7" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
