export interface Product {
	id: number;
	price: number;
	imageUrl: string;
}
const products: Product[] = [
	{
		id: 1,
		price: 320000,
		imageUrl: "../../src/assets/images/p1.png",
	},
	{
		id: 2,
		price: 280000,
		imageUrl: "../../src/assets/images/p2.png",
	},
	{
		id: 3,
		price: 180000,
		imageUrl: "../../src/assets/images/p3.png",
	},
	{
		id: 4,
		price: 150000,
		imageUrl: "../../src/assets/images/p4.png",
	},
];
export default function ProductsSection() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 p-6 bg-[#fdf4ed]">
			<h2 className="text-[#b5847f] font-bold  text-2xl">محصولات ویژه </h2>

			<div className="flex  gap-4 w-5/6 bg-[#fdf8f5]">
				{products.map((item) => (
					<div
						key={item.id}
						className="w-full shadow rounded-lg pb-4 flex flex-col items-center gap-8"
					>
						<img className="w-full h-64  rounded-t-lg" src={item.imageUrl} />
						<span className="font-bold text-[#000000c2]">
							تومان {item.price}{" "}
						</span>
						<button className="bg-[#5b93b2] text-white p-2 rounded-md">
							افزودن به سبد خرید
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
