import React from 'react'

const Welcome = () => {
  return (
    <section className="px-2 py-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-4 sm:max-w-md lg:max-w-lg lg:space-y-4 lg:pr-0 md:pb-0">
              <h3 className="text-xl">OUR STORY</h3>
              <h2 className="text-4xl text-orange-700">Welcome</h2>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus nemo incidunt praesentium, ipsum culpa minus eveniet,
                id nesciunt excepturi sit voluptate repudiandae. Explicabo,
                incidunt quia. Repellendus mollitia quaerat est voluptas!
              </p>
              <div className="relative flex">
                <a
                  href="#_"
                  className="
                    flex
                    items-center
                    w-full
                    px-6
                    py-3
                    mb-3
                    text-lg
                    text-white
                    bg-orange-700
                    rounded-md
                    sm:mb-0
                    hover:bg-black
                    sm:w-auto
                  "
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img
                src="https://thumbs.dreamstime.com/b/female-chef-kitchen-portrait-smiling-hands-crossed-33838375.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome
