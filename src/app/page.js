import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import Pagination from "@/components/pagination/Pagination";


export default function Home() {
  return (
    <main className="md:w-4/5 w-11/12 mx-auto ">
      <Featured/>
      <CategoryList/>    
      <div className="md:flex gap-8 ">
        <div className="md:w-9/12"><CardList />     <Pagination/></div>
        <div className="md:w-3/12"><Menu /></div>
      </div>
 
    </main>
  );
}
