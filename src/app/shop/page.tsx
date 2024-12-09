import React from "react";
import FilterSection from "../filter/page";
import Image, { StaticImageData } from "next/image";
import p1 from "../images2/img1.png";
import p2 from "../images2/img2.png";
import p3 from "../images2/img3.png";
import p4 from "../images2/img5.png";
import p5 from "../images2/img6.png";
import p6 from "../images2/img7.png";
import p7 from "../images2/img4.png";
import p8 from "../images2/img1.png";
import icon from '../Images/icons.png'


type Product = {
  name: string;
  originalPrice: string;
  discountedPrice: string;
  colors: string[];
  image: StaticImageData;
};

function Features() {
  const products: Product[] = [
    {
      name: "Graphic Designer",
      originalPrice: "16.48",
      discountedPrice: "6.48",
      colors: ["blue", "green", "orange", "purple"],
      image: p1,
    },
    {
      name: "Web Developer",
      originalPrice: "18.99",
      discountedPrice: "8.99",
      colors: ["red", "blue", "yellow", "green"],
      image: p2,
    },
    {
      name: "UI/UX Designer",
      originalPrice: "20.99",
      discountedPrice: "12.99",
      colors: ["pink", "orange", "blue"],
      image: p3,
    },
    {
      name: "Product Manager",
      originalPrice: "25.99",
      discountedPrice: "15.99",
      colors: ["yellow", "black", "blue"],
      image: p4,
    },
    {
      name: "Digital Marketer",
      originalPrice: "30.99",
      discountedPrice: "18.99",
      colors: ["purple", "green", "red"],
      image: p5,
    },
    {
      name: "SEO Specialist",
      originalPrice: "22.99",
      discountedPrice: "14.99",
      colors: ["blue", "gray", "black"],
      image: p6,
    },
    {
      name: "Content Writer",
      originalPrice: "14.99",
      discountedPrice: "9.99",
      colors: ["orange", "green", "blue"],
      image: p7,
    },
    {
      name: "Social Media Manager",
      originalPrice: "19.99",
      discountedPrice: "10.99",
      colors: ["green", "blue", "yellow"],
      image: p8,
    },
    {
      name: "Web Developer",
      originalPrice: "18.99",
      discountedPrice: "8.99",
      colors: ["red", "blue", "yellow", "green"],
      image: p2,
    },
    {
      name: "UI/UX Designer",
      originalPrice: "20.99",
      discountedPrice: "12.99",
      colors: ["pink", "orange", "blue"],
      image: p3,
    },
    {
      name: "Product Manager",
      originalPrice: "25.99",
      discountedPrice: "15.99",
      colors: ["yellow", "black", "blue"],
      image: p4,
    },
    {
      name: "Digital Marketer",
      originalPrice: "30.99",
      discountedPrice: "18.99",
      colors: ["purple", "green", "red"],
      image: p5,
    },
  ];

  return (
    <div className="container mx-auto ">
      {/* Heading */}
      <div>
        <FilterSection
          textTitle="Shop Products"
          textNavigation="Home ."
          pageName="Shop Products"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-lg p-4  flex flex-col items-center justify-center"
          >
            {/* Product Image */}
            <div className="relative w-full h-72 bg-[#F2F0FF] mb-4 flex justify-center items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={314}
                height={218}
                className="w-auto h-auto hover:rounded-xl transition-all ease duration-300"
              />
            </div>

            {/* Product Details */}
            <h3 className="text-lg font-semibold">{product.name}</h3>
             {/* Color Options */}
             <div className="flex gap-2 mt-4">
              {product.colors.map((color, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full `}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>

            {/* Prices */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-400 line-through">
                ${product.originalPrice}
              </span>

              <span className="text-green-500 font-semibold">
                ${product.discountedPrice}
              </span>
            </div>

           
          </div>
        ))}
      </div>
      <div>
        
      </div>
      {/* Brands Section */}
      <div className="flex justify-center items-center mt-14">
        <Image
          src={icon}
          alt="brands-img"
          width={904}
          height={93}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Features;
