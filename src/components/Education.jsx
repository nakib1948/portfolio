const Education = () => {
  return (
    <div>
      <p className="text-5xl text-blue-400 font-semibold my-10 text-center">
        Education
      </p>
      <div className="bg-blue-300 h-1 w-24 mx-auto mt-1"></div>
      <ul className="timeline md:mx-40 lg:mx-40 timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">(2019-2023)</time>
            <div className="text-lg font-black">Bachelor of Science</div>
            <div className="text-l text-blue-500  font-black">
              Computer Science & Engineering (CSE)
            </div>
            <div className="text-lg font-black">
              International Islamic University Chittagong
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10 md:text-end">
            <time className="font-mono italic">(2016-2018)</time>
            <div className="text-lg font-black">
              Higher School Certificate (HSC)
            </div>
            <div className="text-l text-blue-500  font-black">Science</div>
            <div className="text-lg font-black">
              kc shaheed ziaur rahman college
            </div>
          </div>

          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">(2014-2016)</time>
            <div className="text-lg font-black">
              Secondary School Certificate (SSC)
            </div>
            <div className="text-l text-blue-500  font-black">Science</div>
            <div className="text-lg font-black">Ks Nazu Meah High School</div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Education;
