import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getcategories, getNewsBycategoriesId } from '@/lib/data';
import React from 'react';
import { HiH2 } from 'react-icons/hi2';



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
  <div className="font-bold text-3xl  col-span-6 space-y-4">All news
    { news.length >0?
      news.map(n => {
        return <NewsCard key={n._id} news={n}>
          
        {n.title}
        </NewsCard>
      }):<h2 className='my-7'>no news found</h2>
    }
  </div>
  <div className="font-bold text-3xl  col-span-3"><RightSideBar/></div>
</div>
        </div>
    );
};

export default NewsByCategory;