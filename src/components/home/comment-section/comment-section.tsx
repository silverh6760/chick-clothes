import CommentBox from "./comment-box";

function CommentSection() {
	return (
		<div className="w-full flex flex-col justify-center items-center gap-6 bg-[#F7E6D2] p-6">
			<p className="font-bold text-2xl text-[#26211e]">نظرات مشتریان</p>
			<div className="flex flex-col justify-center items-center gap-3 md:flex-row">
				<CommentBox name="اشکان" />
				<CommentBox name="سهیل" />
				<CommentBox name="مریم" />
			</div>
		</div>
	);
}

export default CommentSection;
