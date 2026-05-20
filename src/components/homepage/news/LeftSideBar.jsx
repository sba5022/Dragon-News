import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories,activeId}) => {
    return (
        <div>
             <div className="font-bold text-3xl  col-span-3">All catagories
    <ul className="flex flex-col gap-3 mt-6">{categories.data.news_category.map(category => {
      return <li key={category.category_id} className={`
        ${activeId === category.category_id && "bg-slate-100"}
         p-2 text-lg text-center  font-bold  rounded-md`}>
            
            <Link href={`/category/${category.category_id}`} className='block '>{category.category_name}</Link>
         </li>
    })}</ul>
  </div>
        </div>
    );
};

export default LeftSideBar;