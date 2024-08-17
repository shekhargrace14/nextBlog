import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  const data = [
    { id: "1", title: "style", link: "/blog?cat=style", image: "/style.png", bg:"bg-red-100"},
    { id: "2", title: "fashion", link: "/blog?cat=fashion", image: "/fashion.png", bg:"bg-green-100"},
    { id: "3", title: "food", link: "/blog?cat=food", image: "/food.png", bg:"bg-pink-100"},
    { id: "4", title: "travel", link: "/blog?cat=travel", image: "/travel.png", bg:"bg-yellow-100"},
    { id: "5", title: "culture", link: "/blog?cat=culture", image: "/culture.png", bg:"bg-gray-100"},
    { id: "6", title: "coding", link: "/blog?cat=coding", image: "/coding.png", bg:"bg-cyan-100"},
  ];
  return (
    <div>
      <h2 className="h2 ">Category List</h2>
      <div className="grid gap-4 lg:grid-cols-6 sm:grid-cols-2">
        {data.map((item) => (
          <Link href={item.link} key={item.id} className={`${item.bg}  flex gap-4 justify-center items-center  p-4 text-black rounded`}>
            <Image src={item.image} width={50} height={50} className="rounded-full w-10 h-10" />
            <p className="capitalize">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
