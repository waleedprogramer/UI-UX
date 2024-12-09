'use client'

import React, { useState } from "react";
import FilterSection from "../filter/page";
import Image from "next/image";
import o1 from "../Images/Rectangle 34.png";
import o2 from "../Images/Rectangle 35.png";
import o3 from "../Images/Rectangle 36.png";
import o4 from "../Images/Rectangle 37.png";
import o5 from "../Images/Rectangle 38.png";
import cart from "../Images/cart.png";

const shoppingCart = [
  {
    name: "Ut diam consequat",
    color: "Brown",
    size: "XL",
    img: o1,
    price: 32.0,
  },
  {
    name: "Vel faucibus posuere",
    color: "Brown",
    size: "XL",
    img: o2,
    price: 32.0,
  },
  {
    name: "Ac vitae vestibulum",
    color: "Brown",
    size: "XL",
    img: o3,
    price: 32.0,
  },
  {
    name: "Elit massa diam",
    color: "Brown",
    size: "XL",
    img: o4,
    price: 32.0,
  },
  {
    name: "Proin pharetra elementum",
    color: "Brown",
    size: "XL",
    img: o5,
    price: 32.0,
  },
];

const Cart = () => {
  const [quantities, setQuantities] = useState(
    shoppingCart.map(() => 1) // Initialize quantities for all items
  );

  const incrementQuantity = (index: number) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index ? q + 1 : q))
    );
  };

  const decrementQuantity = (index: number) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index && q > 1 ? q - 1 : q))
    );
  };

  return (
    <section>
      <FilterSection
        textTitle="Shopping Cart"
        textNavigation="Home . Pages ."
        pageName="Shopping Cart"
        className="hidden"
      />
      <div className="mt-16">
        <div className="flex items-center flex-col lg:flex-row">
          <div className="flex-1">
            <div className="hidden lg:flex justify-around items-center text-xl font-semibold text-1 text-indigo-900">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            {shoppingCart.map((item, index) => (
              <div
                className="mt-8 grid lg:grid-cols-4 grid-cols-2 items-center gap-y-4"
                key={index}
              >
                <div className="flex gap-x-2 items-center lg:ml-16 ml-4">
                  <Image src={item.img} alt={item.name} width={83} height={87} />
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <div className="text-gray-400 text-sm">
                      <p>{item.size}</p>
                      <p>{item.color}</p>
                    </div>
                  </div>
                </div>
                <p className="font-bold text-1 text-indigo-900 lg:ml-24 ml-4">
                  ${item.price.toFixed(2)}
                </p>
                <div className="lg:ml-24 ml-4 flex items-center gap-2">
                  <button
                    onClick={() => decrementQuantity(index)}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span>{quantities[index]}</span>
                  <button
                    onClick={() => incrementQuantity(index)}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <div className="font-bold text-1 text-indigo-900 lg:ml-28 ml-4">
                  ${(item.price * quantities[index]).toFixed(2)}
                </div>
              </div>
            ))}
            <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-10 py-10">
              <p className="text-1 text-white flex justify-center cursor-pointer items-center font-bold px-4 h-[41px] bg-color mt-6 hover:opacity-90 transition ease duration-300">
                Update Cart
              </p>
              <p className="text-1 text-white flex cursor-pointer justify-center items-center font-bold px-4 h-[41px] bg-color mt-6 hover:opacity-90 transition ease duration-300">
                Clear Cart
              </p>
            </div>
          </div>
          <div className="lg:w-[30%] w-full lg:mr-7">
            <h1 className="text-xl font-semibold text-1 text-indigo-900 text-center">
              Cart Total
            </h1>
            <div className="mt-5 flex justify-center">
              <Image src={cart} alt="img" width={371} height={284} />
            </div>
            <h1 className="text-xl font-semibold text-1 text-indigo-900 text-center my-7">
              Calculate Shipping
            </h1>
            <div className="w-full lg:w-[371px] h-auto bg-[#F2F0FF] p-8 mx-auto px-8">
              <input
                type="text"
                placeholder="Bangladesh"
                className="border-b border-slate-400 outline-none bg-[#F2F0FF] w-full h-10 text-1"
              />
              <input
                type="text"
                placeholder="Mirpur - Dhaka"
                className="border-b border-slate-400 outline-none bg-[#F2F0FF] w-full h-10 text-1 mt-5"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border-b border-gray-100 outline-none bg-[#F2F0FF] w-full h-10 text-1 mt-5"
              />
              <p className="text-1 text-white flex justify-center items-center font-bold w-full lg:w-[179px] h-[41px] bg-color mt-6 mx-auto cursor-pointer hover:opacity-90 transition ease duration-300">
                Calculate Shipping
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
