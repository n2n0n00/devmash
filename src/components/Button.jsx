/* eslint-disable react/prop-types */

const Button = ({ text }) => {
  return (
    <div className="button flex flex-row items-center justify-center">
      <p className="small_white_p">{text}</p>
    </div>
  );
};

export default Button;
