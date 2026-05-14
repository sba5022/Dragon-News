import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import Image from "next/image";
async function getcategories  () {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data;

}
async function getNewsBycategoriesId(id) {
  const res = await fetch(` https://openapi.programming-hero.com/api/news/category/${id}`);
  const data = await res.json();
  return data.data;

}
export default async function Home() {
  const categories = await getcategories();
  console.log(categories.data.news_category,'categories');
  const news = await getNewsBycategoriesId('01');
  console.log(news,'news');
  return (
<div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
  <div className="font-bold text-3xl  col-span-3">
 <LeftSideBar categories={categories} activeId={"01"}/></div>
  <div className="font-bold text-3xl bg-blue-300 col-span-6 space-y-4">All news
    {
      news.map(n => {
        return <div key={n._id} className="p-6 rounded-md border">
          
        {n.title}
        </div>
      })
    }
  </div>
  <div className="font-bold text-3xl  col-span-3"><RightSideBar/></div>
</div>
  );
}
