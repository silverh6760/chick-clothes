function CommentBox(props: any) {
	return (
		<div className="bg-[#ebf3f6] rounded-sm p-5">
			<div className="bg-white rounded-xl relative pt-8 pb-15 pr-20 pl-2">
				<img
					src="https://img.freepik.com/free-photo/front-view-man-posing_23-2148364843.jpg?semt=ais_hybrid&w=740&q=80"
					className="w-20 h-20 rounded-full absolute -top-1.5 -right-1.5"
				/>
				<p className="font-semibold text-right">
					نوع محصولات عالی بود و کیفیت مناسب. امیدوارم که ادامه دار باشد
				</p>
				<p className="font-semibold absolute right-14 bottom-4">{props.name}</p>
			</div>
		</div>
	);
}

export default CommentBox;
