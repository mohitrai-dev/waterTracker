import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4 ">
        <h1 className="text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className="text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae
          iste ipsum molestias, ut fugit obcaecati, vel ducimus officia culpa
          dolores? Vitae voluptatum, omnis nemo reprehenderit ad similique,
          quisquam cum architecto quod odio ipsum.
        </p>
        <p className="text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae
          iste ipsum molestias, ut fugit obcaecati, vel ducimus officia culpa
          dolores? Vitae voluptatum, omnis nemo reprehenderit ad similique,
          quisquam cum architecto quod odio ipsum.
        </p>
        <p className="text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae
          iste ipsum molestias, ut fugit obcaecati, vel ducimus officia culpa
          dolores? Vitae voluptatum, omnis nemo reprehenderit ad similique,
          quisquam cum architecto quod odio ipsum.
        </p>
      </div>
      <div className="w-full lg:w-3/4">
        <img src={img} alt="about" className="rounded-lg" />
      </div>
    </div>
  );
};

export default About;
