import { useForm } from "react-hook-form";
import type { Inputs } from "../../types/types";
import SubmitButton from "../shared/SubmitButton";

function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit = (data: Inputs) => {
		console.log(data);
	};

	return (
		<div className="flex flex-col justify-center items-center gap-2 bg-[#fdf5f3]">
			<h1 className="text-[#c99a87] text-xl font-bold">فروشگاه شیک</h1>
			<h2 className="text-[#6c514c] text-xl font-bold">ثبت نام</h2>
			<p className="text-[#6c514c] text-sm">
				با ثبت نام به خرید خود سرعت بدهید
			</p>
			<div className="flex flex-col gap-3 bg-[#fef8f6] shadow-xl p-10 rounded-2xl border-[#9f9b9a] w-2/3">
				<form
					className="flex flex-col gap-3 justify-center text-right w-full"
					onSubmit={handleSubmit(onSubmit)}
				>
					<label className="text-[#6c514c] text-md">نام و نام خوانوادگی</label>
					<input
						className="p-2 rounded-md bg-white border-[#5a585711] border outline-0 text-[#ae7b66] text-sm"
						type="text"
						{...register("username", {
							required: true,
							maxLength: {
								value: 15,
								message: "must be maximum 15",
							},
							minLength: {
								value: 3,
								message: "must be minimum 3",
							},
						})}
					/>
					{errors.username && (
						<p className="text-red-500 text-[10px]">
							{errors.username.message}
						</p>
					)}
					<label className="text-[#6c514c] text-md">ایمیل</label>
					<input
						className="p-2 rounded-md bg-white border-[#5a585711] border outline-0 text-[#ae7b66] text-sm"
						{...register("email", {
							required: true,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "invalid email address",
							},
						})}
						type="text"
					/>
					{errors.email && (
						<p className="text-red-500 text-[10px]">{errors.email.message}</p>
					)}
					<label className="text-[#6c514c] text-md">رمز عبور</label>
					<input
						className="p-2 rounded-md bg-white border-[#5a585711] border outline-0 text-[#ae7b66] text-sm"
						{...register("password", {
							required: true,
							validate: (value) => {
								return (
									[/[a-z]/, /[A-Z]/, /[0-9]/].every((pattern) =>
										pattern.test(value)
									) || "cannot special chars, only lower, upper, number"
								);
							},
						})}
						type="text"
					/>
					{errors.password && (
						<p className="text-red-500 text-[10px]">
							{errors.password.message}
						</p>
					)}
					<SubmitButton>ثبت نام</SubmitButton>
				</form>
				<div className="text-[#6c514caa] text-center text-md">
					قبلا ثبت نام کردید ؟ ورود
				</div>
			</div>
			<div></div>
			<div></div>
		</div>
	);
}

export default SignUp;
