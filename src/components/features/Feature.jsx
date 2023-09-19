import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({ feature }) => {
  return (
    <div>
      <h2 className="flex items-center gap-3">
        <AiFillCheckCircle className="text-orange-200"></AiFillCheckCircle>
        {feature}
      </h2>
    </div>
  );
};

export default Feature;
