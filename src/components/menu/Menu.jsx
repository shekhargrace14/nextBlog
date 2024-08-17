import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  const data = [
    { id: "1", category: "style", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "/blog?cat=style", image: "/style.png", date: "16.08.2024", author: "Shekhar JC", bg: "bg-red-400", lightBg:"bg-red-100" },
    { id: "2", category: "fashion", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "/blog?cat=fashion", image: "/fashion.png", date: "16.08.2024", author: "Shekhar JC", bg: "bg-green-800", lightBg:"bg-green-100" },
    { id: "3", category: "food", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "/blog?cat=food", image: "/food.png", date: "16.08.2024", author: "Shekhar JC", bg: "bg-pink-400", lightBg:"bg-pink-100" },
    { id: "4", category: "travel", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "/blog?cat=travel", image: "/travel.png", date: "16.08.2024", author: "Shekhar JC", bg: "bg-yellow-800", lightBg:"bg-yellow-100" },
    { id: "5", category: "culture", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "/blog?cat=culture", image: "/culture.png", date: "16.08.2024", author: "Shekhar JC", bg: "bg-blue-500", lightBg:"bg-blue-100" },
    // { id: "6", category: "coding", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "/blog?cat=coding", image: "/coding.png", date: "16.08.2024", author: "Shekhar JC", bg: "bg-gray-600", lightBg:"bg-gray-300" },
  ];
  return (
    <div className="my-16">
      <div className="mb-12">
        <p>What&apos;s New</p>
        <h2>Most Popular</h2>
        <div className="">
          {data.map((item) => (
            <div key={item.id} className="mb-8">
              <Link href={item.link}  >
                <p className={`${item.bg} text-xs text-white rounded-full w-fit px-2 py-1 mb-2 capitalize`}>{item.category}</p>
                <p className="text-sm mb-2">{item.text}</p>
                <div className="flex gap-2">
                  <p className="text-xs">{item.author}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <p>Discover by topic</p>
        <h2>Categories</h2>
        <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2">
          {data.map((item) => (
            <Link href={item.link} key={item.id} className={`${item.lightBg} flex justify-center px-2 py-1 rounded`}>
              <p className="text-sm text-black capitalize">{item.category}</p>
            </Link>
          ))}
      </div>
      </div>
      <div>
        <p>What&apos;s New</p>
        <h2>Most Popular</h2>
        <div className="">
          {data.map((item) => (
            <Link href={item.link} key={item.id} >
              <div className="mb-8 flex gap-4 items-center">
                <Image src={item.image} alt={item.title} width={250} height={250} className="rounded-full w-20 h-20 "/>
                <div>
                  <p className={`${item.bg} text-xs text-white rounded-full w-fit px-2 py-1 mb-2 capitalize`}>{item.category}</p>
                  <p className="text-sm mb-2 line-clamp-1">{item.text}</p>
                  <div className="flex gap-2">
                    <p className="text-xs">{item.author}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Menu