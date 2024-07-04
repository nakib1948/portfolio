import { Blocks } from "react-loader-spinner";
const Loader = () => {
  return (
    <dic className="flex justify-center">
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </dic>
  );
};

export default Loader;
