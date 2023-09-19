import PriceOption from "../priceOption/PriceOption";

const Prices = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      features: [
        "Access to cardio area",
        "Standard gym equipment",
        "Locker facilities",
      ],
      price: "$30/month",
    },
    {
      id: 2,
      name: "Standard",
      features: [
        "Access to cardio area",
        "Full gym equipment",
        "Locker facilities",
        "Group fitness classes",
        "Sauna access",
      ],
      price: "$50/month",
    },
    {
      id: 3,
      name: "Premium",
      features: [
        "Access to cardio area",
        "Full gym equipment",
        "Locker facilities",
        "Group fitness classes",
        "Personal trainer sessions",
        "Nutritional counseling",
        "Pool access",
      ],
      price: "$80/month",
    },
  ];

  return (
    <div>
      <h2>best price option</h2>
      <div className="grid md:grid-cols-3 gap-5 ml-20">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Prices;
