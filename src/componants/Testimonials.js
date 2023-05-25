import React from "react";

const Testimonials = (props) => {
  return (
    <section className="props-container">
      <div className="max-w-md p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
            src={props.img}
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            {props.title}
          </h2>
          <p className="mt-2 text-gray-600">{props.info}</p>
        </div>
        <div className="flex justify-end mt-4">
          <a href="#" className="text-xl font-medium text-green-500">
            {props.name}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
