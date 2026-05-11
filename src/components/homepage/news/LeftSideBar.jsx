import React from 'react';

const LeftSideBar = ({categories,activeId}) => {
    return (
        <div>
             <div className="font-bold text-3xl  col-span-3">All catagories
    <ul className="flex flex-col gap-3 mt-6">{categories.data.news_category.map(category => {
      return <li key={category.category_id} className={`
        ${activeId === category.category_id && "bg-slate-100"}
        bg-slate-100 p-2 text-lg text-center  font-bold  rounded-md`}>{category.category_name}</li>
    })}</ul>
  </div>
        </div>
    );
};

export default LeftSideBar;