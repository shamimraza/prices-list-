import PropType from "prop-types";
import Feature from "../features/feature";
const PriceOption = ({ option }) => {
  const { price, name, features } = option;
  return (
    <div className="flex flex-col bg-gray-600 text-white rounded-xl p-4">
      <h2>
        <span className="text-5xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl">{name}</h4>
      <div className="pl-5 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className=" bg-amber-300 w-full py-3 rounded hover:bg-gray-200 text-red-400 text-lg  mt-4">
        Buy Naw
      </button>
    </div>
  );
};

PriceOption.prototypes = {
  option: PropType.object,
};

export default PriceOption;
