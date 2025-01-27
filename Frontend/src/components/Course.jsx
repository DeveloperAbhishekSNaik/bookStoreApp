// eslint-disable-next-line no-unused-vars
import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center  text-center">
          <h1 className="text-2xl  md:text-4xl ">
            We are delighted to have you{" "}
            <span className="text-blue-500">Here ! :)</span>{" "}
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            modi delectus, dicta nobis quasi aspernatur vel, hic neque quod
            pariatur beatae nam veniam iure ipsa, molestiae voluptatibus
            nesciunt in officia?
          </p>
          <Link to="/">
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md  hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
