import { Outlet, useSearchParams } from "react-router-dom";
import LogIn from "../components/auth/LogIn";
import SignUp from "../components/auth/SignUp";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function AppLayout() {
	const [searchParams] = useSearchParams();
	const status = searchParams.get("status");
	return (
		<div dir="rtl">
			{status === "signin" && <LogIn />}
			{status === "signup" && <SignUp />}
			{status === null && (
				<>
					<Header />
					<Outlet />
					<Footer />
				</>
			)}
		</div>
	);
}

export default AppLayout;
