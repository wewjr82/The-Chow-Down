import React from "react";

const Hero = () => {
  return (
    <div
      className="container max-w-lg px-4 py-32 mx-auto text-left bg-center bg-no-repeat bg-cover md:max-w-none md:text-center "
      style={{
        backgroundImage: `url('https://images.nappy.co/photo/8sOvn79NjVA6bryveb6xJ.jpg?h=750&w=1260&cs=srgb&fm=jpg')`,
      }}
    >
      <h1 className="font-mono text-3xl font-extrabold text-transparent bg-clip-text text-white md:text-center sm:leading-none lg:text-5xl">
        <span className="inline md:block">Welcome To The Chow Down</span>
      </h1>
      <div className="mx-auto mt-2 text-green-50 md:text-center lg:text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
        voluptatem ab necessitatibus illo praesentium culpa excepturi quae
        commodi quaerat,
      </div>
      <div className="flex flex-col items-center mt-12 text-center">
        <span class="relative inline-flex w-full md:w-auto">
          <a
            href="#_"
            type="button"
            className="
            inline-flex
            items-center
            justify-center
            px-6
            py-2
            text-base
            font-bold
            leading-6
            text-white
            bg-orange-700
            rounded-full
            lg:w-full
            md:w-auto
            hover:bg-black
            focus:outline-none
          "
          >
            Buy Now
          </a>
        </span>
      </div>
    </div>
  );
};

export default Hero;
