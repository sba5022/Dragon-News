import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import Image from "next/image";
async function getcategories  () {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data;

}
export default async function Home() {
  const categories = await getcategories();
  console.log(categories.data.news_category,'categories');
  return (
<div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
  <div className="font-bold text-3xl  col-span-3">
 <LeftSideBar categories={categories} activeId={"01"}/></div>
  <div className="font-bold text-3xl bg-blue-300 col-span-6">All news</div>
  <div className="font-bold text-3xl bg-purple-300 col-span-3">Social</div>
</div>
  );
}
