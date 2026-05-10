import React from 'react';
import Marquee from 'react-fast-marquee';
const news= [
  {
    "id": 1,
    "title": "Global Heatwave Impacts Major Cities"
  },
  {
    "id": 2,
    "title": "New Technology Trends Emerging in 2026"
  },
  {
    "id": 3,
    "title": "Scientists Discover Breakthrough in Renewable Energy"
  }
];
const BreakingNews = () => {
    return (
        <div className='flex justify-between  bg-gray-200 items-center py-4 px-2 mx-auto gap-4 container'>
            <button className='btn bg-pink-500 text-white'>Latest news</button>
            <Marquee pauseOnHover={true}>
               {news.map(n => {return <span key={n.id} className='mx-4'>{n.title}</span>})}
            </Marquee>
        </div>
    );
};

export default BreakingNews;