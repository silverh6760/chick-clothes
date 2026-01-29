type ButtonTypes = {
	children: string;
	onclick?: () => void;
};

function SubmitButton({ children, onclick }: ButtonTypes) {
	return (
		<button
			className="bg-[#de9675] p-3 w-full rounded-md text-white cursor-pointer hover:bg-[#6e9f54] hover:shadow-xl transition-all duration-300 ease-in-out"
			onClick={onclick}
		>
			{children}
		</button>
	);
}

export default SubmitButton;
