import React from 'react';
import FilterSection from "../filter/page"; 
import BlogPage from '../components/BlogPage';
import Catogaries from '../components/Catogaries';
import RecentPosts from '../components/Rescent';
import Sale from '../components/Sale';
import BlogLast from '../components/BlogLast';
import Image from 'next/image';
import icon from '../Images/icons.png'



function Blogs() {
  return (
    <>
      <FilterSection
        textTitle="Shopping Cart"
        textNavigation="Home . Pages ."
        pageName="Shopping Cart"
        className="hidden"
      />
      <div className='flex flex-col lg:flex-row gap-5'>
        <BlogPage />
        <div className='lg:w-4/12 w-full'>
          <Catogaries />
          <RecentPosts />
          <Sale />
          <BlogLast />
        </div>
      </div>

      {/* Added Section */}
      <div className="flex justify-center items-center mt-14">
        <Image
          src={icon}
          alt="brands-img"
          width={904}
          height={93}
          className="cursor-pointer"
        />
      </div>
    </>
  );
}

export default Blogs;
