import React from "react";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className="mt-12">
      <h2 className="h2">Recent Posts</h2>
      <div className="grid xl:grid-cols-1 ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardList;
