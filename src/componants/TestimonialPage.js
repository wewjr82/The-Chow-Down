import React from 'react'
import Testimonials from './Testimonials'

const TestimonialPage = () => {
  return (
    <div class="pt-4 pb-12 bg-orange-700">
      <div className="my-16 text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-black">
          Testimonials{" "}
        </h2>
        <p className="text-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. soluta
          sapient
        </p>
      </div>
      <div className="testimonial-container grid gap-2 lg:grid-cols-3">
        <Testimonials
          img="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          title="Food"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!"
          name="John Doe"
        />
        <Testimonials
          img="https://cdn.pixabay.com/photo/2018/01/18/17/48/purchase-3090818__340.jpg"
          title="Food"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!"
          name="John Doe"
        />
        <Testimonials
          img="https://cdn.pixabay.com/photo/2018/01/04/21/15/young-3061652__340.jpg"
          title="Food"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!"
          name="John Doe"
        />
      </div>
    </div>
  );
}

export default TestimonialPage
