"use client";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import style from "./card.module.css";
import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import data from "@/data/data.json";

const CardGrid = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    // Handle potential decrement below zero (optional)
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [product] = useState(data);
  const [value, setValue] = useState(0);

  const { mainImage } = product[value];

  return (
    <section className="flex p-28  place-content-center mx-auto">
      <div className={`flex flex-col gap-[100px] ${style.row}`}>
        <div className="flex-1 relative  ">
          <Image
            src={mainImage}
            alt="alt"
            width={650}
            height={0}
            className="h-[550px] w-[500px] rounded-2xl "
          />
        </div>

        <div className="p-6 flex gap-40 flex-col">
          <div className="flex-1">
            <span className=" font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#1E81A8] to-[#c5cfe0]">
              Apple Company
            </span>
            <h1 className="text-7xl font-semibold mt-3 ">
              <span className="">MacBook</span>

              <span className="ml-4">Pro</span>
            </h1>
            <div className="flex mt-4">
              <span className="text-3xl flex text-amber-500 space-x-2">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarHalf />
              </span>
            </div>

            <p className="mt-4 font-medium text-md text-neutral-500 max-w-[620px]">
              With its high-resolution Retina display for accurate visuals,
              powerful M chips for smooth design software performance, and long
              battery life for on-the-go creativity, the MacBook Pro is a
              premium laptop that empowers UI/UX designers to work with
              precision and portability.
            </p>
            <div className="flex mt-[40px]">
              <h1 className=" font-extrabold text-3xl">$899</h1>
              <span className="text-xl text-[#127c94] ml-3 rounded-md font-extrabold text-center w-[55px] h-[30px]  bg-gradient-to-r from-[#1e81a8a5] to-[#c5cfe0a2]">
                50%
              </span>
            </div>
            <span>
              <del className="text-xl text-zinc-300">$1799</del>
            </span>
            <div className="flex flex-wrap items-center justify-start gap-3 mt-5 ">
              {product.map((p, i) => (
                <div key={p.id}>
                  <Image
                    onClick={() => setValue(i)}
                    src={p.thumbnail}
                    alt=""
                    width={55}
                    height={0}
                    className="rounded-md h-[55px]"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="mt-12 flex md:w-[150px] bg-[#F6F8FD] justify-between p-5  rounded-md w-full ">
                <button
                  onClick={handleDecrement}
                  className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#1E81A8] to-[#c5cfe0]"
                >
                  -
                </button>
                <p className="text-xl flex items-center">{count}</p>
                <button
                  onClick={handleIncrement}
                  className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#1E81A8] to-[#c5cfe0]"
                >
                  +
                </button>
              </div>
              <div className=" md:mt-12 mt-5 flex md:p-1 md:ml-10 ml-0 justify-between w-full md:w-fit">
                <button className=" rounded-md bg-gradient-to-r from-[#1E81A8] to-[#c5cfe0] md:w-[250px] w-full ">
                  <span className="text-2xl flex justify-center p-3">
                    <MdOutlineShoppingCart />
                    <p className="font-semibold text-xl text-zinc-200">
                      Add to Cart
                    </p>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
