import CategorySection from "./category-section";
import CommentSection from "./comment-section/comment-section";
import DeliverySection from "./delivery-section/delivery-section";
import Hero from "./Hero";
import ProductsSection from "./products-section";

function Home() {
	return (
		<div className="flex flex-col gap-5">
			<Hero />
			<ProductsSection />
			<CategorySection />
			<DeliverySection />
			<CommentSection />
		</div>
	);
}

export default Home;
