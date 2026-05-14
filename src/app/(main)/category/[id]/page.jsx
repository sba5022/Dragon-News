import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import React from 'react';
import { HiH2 } from 'react-icons/hi2';
async function getcategories  () {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data;

}
async function getNewsBycategoriesId(id) {
  const res = await fetch(` https://openapi.programming-hero.com/api/news/category/${id}`);
  const data = await res.json();
  return data.data;

};


const NewsByCategory = async({params}) => {
    const categories = await getcategories();

    const {id} = await params;
    console.log(id,'paramsRes');
    const news = await getNewsBycategoriesId(id);
    return (
        <div>
       <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
  <div className="font-bold text-3xl  col-span-3">
 <LeftSideBar categories={categories} activeId={id}/></div>
  <div className="font-bold text-3xl bg-blue-300 col-span-6 space-y-4">All news
    { news.length >0?
      news.map(n => {
        return <div key={n._id} className="p-6 rounded-md border">
          
        {n.title}
        </div>
      }):<h2 className='my-7'>no news found</h2>
    }
  </div>
  <div className="font-bold text-3xl  col-span-3"><RightSideBar/></div>
</div>
        </div>
    );
};

export default NewsByCategory;