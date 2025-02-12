// import { Textfit } from "react-textfit";


const Screen = ({ value }) => {
  return (
    // <Textfit className="screen" mode="single" max={70}>
    //   {value}
    // </Textfit>
    <div className="flex justify-center items-center text-white text-4xl my-3 font-semibold">
    {value}</div>
  );
};

export default Screen;