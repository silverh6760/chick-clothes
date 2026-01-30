export interface CategoryInterface {
	id: number;
	name: string;
	icon: string;
}
const CategoryList: CategoryInterface[] = [
	{
		id: 1,
		name: "مردانه",
		icon: "👔",
	},
	{
		id: 2,
		name: "زنانه",
		icon: "👗",
	},
	{
		id: 3,
		name: "کودکانه ",
		icon: "👕",
	},
	{
		id: 4,
		name: "لباس مجلسی ",
		icon: "👗",
	},
	{
		id: 5,
		name: "ورزشی",
		icon: "👟",
	},
	{
		id: 6,
		name: "اکسسوری",
		icon: "👜",
	},
];
export default function CategorySection() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 p-6">
			<h2 className="text-[#b5847f] font-bold  text-2xl">دسته بندی ها </h2>

			<div className="flex  gap-4 w-5/6">
				{CategoryList.map((item) => (
					<div
						key={item.id}
						className="w-full h-30 bg-[#fbe5d7] shadow  flex flex-col items-center justify-center gap-3 rounded-lg text-center"
					>
						<span className="text-5xl  ">{item.icon}</span>
						<div className="font-bold text-[#000000c2]">{item.name} </div>
					</div>
				))}
			</div>
		</div>
	);
}
