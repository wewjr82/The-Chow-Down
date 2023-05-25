import React from "react";

const FoodMenu = (props) => {
  return (
    <section className="mt-8 bg-white ">
      <div className="container w-full px-5 py-6 mx-auto ">
        <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg ">
          <img className="w-full h-48" src={props.img} alt="Image" />
          <div className="px-6 py-4">
            <div className="flex mb-2">
              <span className="px-4 py-0.5 text-sm bg-red-500 rounded-full text-red-50">
                {props.category}
              </span>
            </div>
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-green-600 uppercase">
              {props.name}
            </h4>
            <p className="leading-normal text-gray-700">{props.info}</p>
          </div>
          <div className="flex items-center justify-between p-4">
            <button className="px-4 py-2 bg-orange-700 text-green-50">
              Order Now
            </button>
            <span className="text-xl text-orange-700">${props.price}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
