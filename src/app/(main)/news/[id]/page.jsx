import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaArrowRight, FaRegBookmark, FaRegStar } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

export const  generateMetadata =async(params)=> {
    const {id}=await params
console.log(id,' meta params');
 const news = await getNewsDetailsById(id);
 console.log(news,'news details');
  return {
    title: news.title,
    description: news.details,
    
    };
}


const NewsDetailsPage = async({params}) => {
    const {id}=await params
    // console.log(id,'para');
    const news = await getNewsDetailsById(id);
    // console.log(news,'news details');
    return (
        <div className='max-w-4xl  mx-auto my-8'>
      <div className="card bg-base-100  shadow-sm">
        
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
        <p className='font-light '>{news.details}</p>
        <div>
      <div className='flex gap-2'><h2 className='flex'><FaRegStar />{news.rating.number}</h2>
          <h2 className='flex'><IoEyeOutline />{news.total_view}</h2> </div>
      
      <Link href={`/category/${news.category_id}`}><button className='btn btn-primary'>See other news for this category<FaArrowRight /></button></Link>

        </div>
        
      </div>
      </div>
    );
};

export default NewsDetailsPage;