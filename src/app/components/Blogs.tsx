import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Heading from "./Heading";
import b1 from '../Images/b1.png'
import b2 from '../Images/b2.png'
import b3 from '../Images/b3.png'


const imges = [
  {
    id: 1,
    url: b1,
    name: "SaberAli",
    calender: "21 Augest,2020",
    title: "Top essential Trends in 2021",
    text: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    penImg: <FaPenNib className="text-pink-500" size={11} />,
    docImg: <SlCalender className="text-yellow-500" size={13} />,
    link: "Read More",
  },
  {
    id: 2,
    url: b2,
    name: "SaberAli",
    calender: "21 Augest,2020",
    title: "Top essential Trends in 2021",
    text: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    penImg: <FaPenNib className="text-pink-500" size={11} />,
    docImg: <SlCalender className="text-yellow-500" size={13} />,
    link: "Read More",
  },
  {
    id: 3,
    url:b3,
    name: "SaberAli",
    calender: "21 Augest,2020",
    title: "Top essential Trends in 2021",
    text: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    penImg: <FaPenNib className="text-pink-500" size={11} />,
    docImg: <SlCalender className="text-yellow-500" size={13} />,
    link: "Read More",
  },
];

const Blog = () => {
  return (
    <section className="mt-20">
      <Heading text="Latest Blogs"/>
      <div className="flex justify-center items-center gap-8 mt-14 md:flex-row flex-col">
        {imges.map((item, index) => (
          <div
            key={index}
            className="rounded-md shadow pb-4 w-[370px] h-auto cursor-pointer"
          >
            <Image
              src={item.url}
              alt="blog-img"
              width={370}
              height={255}
              className="rounded-md"
            />
            <div className="mx-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center mt-4 gap-x-2 w-full">
                  {item.penImg}
                  <p className="text-1 text-indigo-950">{item.name}</p>
                </div>
                <div className="flex items-center mt-4 gap-x-2 w-full">
                  {item.docImg}
                  <p className="text-1 text-indigo-950">{item.calender}</p>
                </div>
              </div>
              <h3
                className={`${
                  item.id === 2 ? "text-pink-500" : "text-indigo-950"
                } mt-5 text-lg font-bold text-1 `}
              >
                {item.title}
              </h3>
              <p className="text-slate-500 lato mt-4 text-wrap tracking-wide">
                {item.text}
              </p>
              <p
                className={`${
                  item.id === 2 ? "text-pink-500" : "text-indigo-900"
                } underline lato mt-5 font-medium `}
              >
                {item.link}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;