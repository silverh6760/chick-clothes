import CommentSection from "./comment-section/comment-section";
import DeliverySection from "./delivery-section/delivery-section";

function Home() {
	return (
		<div className="flex flex-col gap-5">
			<DeliverySection />
			<CommentSection />
		</div>
	);
}

export default Home;
