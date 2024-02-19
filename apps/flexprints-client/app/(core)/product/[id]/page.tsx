import ProductCard from "../../../../components/product-card/ProductCard";
import ProductDetailsSlides from "../../../../components/product-details-slides/ProductDetailsSlides";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
	const data = await fetch(`https://dummyjson.com/products/${params.id}`);
	const product = await data.json();
	const images = product.images;
	// console.log('PRODUCT', product);
	return (
		<>
			<div className=" w-[70%] mx-auto flex mb-8 mt-8">
				<div className=" w-3/5  pl-16 ">
					<div className=" flex justify-between w-full pt-6">
						<div className=" flex items-center">
							<div className=" w-12 h-12 mr-6">
								<img
									src={images[0]}
									alt=""
									className=" h-full w-full object-cover rounded-full"
								/>
							</div>
							<div>
								<p className=" font-bold cursor-pointer">Small Flex</p>
								<p className=" text-grayMain/80">
									Fashion design at Flexatron Ltd.
								</p>
							</div>
						</div>
						<div className=" ">
							<button className="btn">Follow</button>
						</div>
					</div>
					<div>
						<ProductDetailsSlides images={images} />
					</div>
				</div>

				<div className=" w-2/5 px-10">
					<div className=" py-6">
						<p className=" text-3xl font-semibold">
							{product.title}
						</p>
					</div>
					<div className=" flex justify-between my-6">
						<p className=" line-through text-grayMain/40 ">Rwf 15,000</p>
						<p>Rwf {product.price}</p>
					</div>
					<div className=" flex justify-between">
						<p className=" font-semibold">Select size</p>
						<p className=" text-main cursor-pointer font-semibold">View size guide</p>
					</div>
					<div className=" flex my-6">
						<div className=" flex flex-col mr-4">
							<p className="  text-center">S</p>
							<span className=" border-grayMain border-2 px-4 py-3 rounded">
								3
							</span>
						</div>
						<div className=" flex flex-col mr-4">
							<p className="  text-center">M</p>
							<span className=" border-grayMain border-2 px-4 py-3 rounded">
								5
							</span>
						</div>
						<div className=" flex flex-col mr-4">
							<p className="  text-center">L</p>
							<span className=" border-grayMain border-2 px-4 py-3 rounded">
								2
							</span>
						</div>
						<div className=" flex flex-col mr-4">
							<p className="  text-center">XL</p>
							<span className=" border-grayMain border-2 px-4 py-3 rounded">
								4
							</span>
						</div>
					</div>
					<div className=" my-6">
						<p className=" font-semibold">Other Options/Colors</p>
					</div>
					<div className=" flex mb-10">
						{images.map((image: any, index: any) => (
							<img
								src={image}
								key={index}
								alt=""
								className=" w-16 h-10 rounded-md object-cover mr-4"
							/>
						))}
					</div>
					<div className=" flex justify-between mb-6">
						<button className="btn mb-4 bg-main hover:bg-main/80 text-white flex-1 mr-4">Add to Cart</button>
						<button className="btn text-grayMain">Add to Shopping List</button>
					</div>
					<div>
						<p className=" font-semibold mt-10 mb-3">Product description</p>
						<p className=" font-thin w-[400px] text-grayMain/80">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
							natus cupiditate voluptatem dolorem magni eius modi eligendi
							ratione minus aut, quidem nulla, alias porro! Reiciendis, eligendi
							praesentium perferendis molestiae provident accusamus repudiandae
							error deserunt. Eius maxime suscipit magnam perspiciatis
							aspernatur.
						</p>
					</div>
				</div>
			</div>
			<div className=" px-16">
				<div className=" my-4">
					<p className=" font-bold text-xl">Other products from this creator</p>
				</div>
				<div className=" grid grid-cols-3 gap-8 mb-8">
					<ProductCard
						images={images}
						thumbnail={product.thumbnail}
						title={product.title}
						price={product.price}
            id={product.id}
					/>
					<ProductCard
						images={images}
						thumbnail={product.thumbnail}
						title={product.title}
						price={product.price}
            id={product.id}
					/>
					<ProductCard
						images={images}
						thumbnail={product.thumbnail}
						title={product.title}
						price={product.price}
            id={product.id}
					/>
					{/* <ProductCard images={images} thumbnail={product.thumbnail}/> */}
				</div>
        <div className=" flex justify-center mt-8 mb-20">
          <button className="btn text-grayMain/80">Load More...</button>
        </div>
			</div>
		</>
	);
};

export default ProductDetails;
