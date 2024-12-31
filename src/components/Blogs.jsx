import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h2 className="text-4xl font-semibold text-center lg:text-start ">
            Latest Post
          </h2>
          <p className="mt-2 text-center lg:text-start ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            molestiae
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className="my-8">
        <div className=" flex flex-wrap justify-center gap-5 ">
          <BlogCard img={img1} headline="Unraveling the Mysteries of Sleep" />
          <BlogCard img={img2} headline="The Heart-Healthy Diet " />
          <BlogCard
            img={img3}
            headline="Understanding Pediatric Vaccinations"
          />
          <BlogCard img={img4} headline="Navigating Mental Health" />
          <BlogCard img={img5} headline="The Importance of Regular Exercise" />
          <BlogCard img={img6} headline="Skin Health 101" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
