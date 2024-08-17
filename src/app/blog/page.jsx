import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import Pagination from "@/components/pagination/Pagination";
import React from "react";

const Blog = () => {
  return (
    <main className="md:w-4/5 w-11/12 mx-auto ">
      <div className="md:flex gap-8 ">
        <div className="md:w-9/12">
          <CardList /> <Pagination />
        </div>
        <div className="md:w-3/12">
          <Menu />
        </div>
      </div>
    </main>
  );
};

export default Blog;
