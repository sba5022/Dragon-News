import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaRegBookmark, FaRegStar } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

const NewsCard = ({news}) => {
    console.log(news,'newsCard');
    return (
       <div className="card bg-base-100 w-full shadow-sm">
  
  <div className="card-body ">
<div className='flex justify-between items-center bg-slate-300'>
    <div className='flex gap-1 items-center '> <Image
    className='rounded-full'
    src={news.author?.img} alt={news.author?.name}
    height={40}
    width={40}/>
    <div>
    <h2 className='font-semibold'>{news.author?.name}</h2> 
    <p className='text-xs'>{news.author?.published_date}</p>
    </div>
    </div>
    <div className='flex justify-between items-center '><CiShare2 />
    <FaRegBookmark />
    </div>
</div>
    <p>{news.title}</p>
    
  </div>
  <figure>
    <Image
    src={news.image_url}
    alt={news.title} width={300} height={300}
    className='w-full'/>
  </figure>
  <p className='font-light line-clamp-3'>{news.details}</p>
  <div>
<div className='flex gap-2'><h2 className='flex'><FaRegStar />{news.rating.number}</h2>
    <h2 className='flex'><IoEyeOutline />{news.total_view}</h2> </div>
<Link href={`/news/${news._id}`}><button className='btn'>See details</button></Link>

  </div>
  
</div>
    );
};

export default NewsCard;