import FilterList from "../../components/filter-list/FilterList";
import ProductCard from "../../components/product-card/ProductCard";

export default async function Index() {
  const res = await fetch("https://dummyjson.com/products");
	const returned = await res.json();
  return (
		<main className="w-full">
      <FilterList />
			<div className="w-full grid grid-cols-1 sm:px-4 md:px-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 6xl:grid-cols-6 7xl:grid-cols-7 9xl:grid-cols-8 10xl:grid-cols-9 gap-4 2xl:gap-8 9xl:gap-4">
				{returned.products.map((item: any) => (
          <div className="flex w-full" key={item.id}>
          <ProductCard
						key={item.id}
						id={item.id}
						images={item.images}
						title={item.title}
						price={item.price}
						thumbnail={item.thumbnail}
					/>
          </div>
				))}
			</div>
		</main>
	);
}
