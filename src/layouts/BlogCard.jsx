import React from "react";

const BlogCard = ({ img, headline }) => {
  return (
    <div className="w-full lg:w-1/4 p-2  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transitio duration-300 ease-in-out ">
      <img
        src={img}
        alt="img"
        className="h-64 md:h-96lg:h-40 w-full rounded-lg "
      />
      <h2 className="text-lg text-center font-semibold ">{headline}</h2>
      <p className="text-center text-sm ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
        molestiaeLorem ipsum dolor sit amet consectetur adipisicing elit..
      </p>
    </div>
  );
};

export default BlogCard;
