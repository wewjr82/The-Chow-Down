import React from "react";

const Gallery = () => {
  return (
    <section className="pt-4 pb-12 bg-gray-50">
      <div className="my-8 text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-orange-700">
          Food Gallery
        </h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. soluta
          sapient, quisquam, enim, voluptatum, fugit, modi, quidem accusantium
          illo deleniti reiciendis maiores nobis.
        </p>
      </div>
      <div className="container grid gap-4 mx-auto lg:grid-cols-3">
        <div className="w-full rounded">
          <img
            src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZWQlMjBjaGlja2VufGVufDB8MHwwfHx8Mg%3D%3D"
            alt="food"
            className="object-cover w-full h-80"
          />
        </div>
        <div className="w-full rounded">
          <img
            src="https://images.unsplash.com/photo-1629366149329-75525cd8f372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29ybmJyZWFkfGVufDB8MHwwfHx8Mg%3D%3D"
            alt="food"
            className="object-cover w-full h-80"
          />
        </div>
        <div className="w-full rounded">
          <img
            src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGF8ZW58MHwwfDB8fHwy"
            alt="food"
            className="object-cover w-full h-80"
          />
        </div>
        <div className="w-full rounded">
          <img
            src="https://images.unsplash.com/photo-1612548127010-97b48ffa2aef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c291dGhlcm4lMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="food"
            className="object-cover w-full h-80"
          />
        </div>
        <div className="w-full rounded">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSGlJ12iFux3-GJTC2ZHEvnBJLZMzjA-mTw&usqp=CAU"
            alt="food"
            className="object-cover w-full h-80"
          />
        </div>
        <div className="w-full rounded">
          <img
            src="https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBpenphfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="image"
            className="object-cover w-full h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
