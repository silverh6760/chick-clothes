import { Outlet, useLocation } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function AppLayout() {
	const location = useLocation();

	const isAuthRoute = location.pathname.startsWith("/auth");
	const isNotFound = location.pathname === "*"; // explained below

	const hideLayout = isAuthRoute || isNotFound;

	return (
		<div dir="rtl">
			{!hideLayout && <Header />}
			<Outlet />
			{!hideLayout && <Footer />}
		</div>
	);
	// const [searchParams] = useSearchParams();
	// const status = searchParams.get("status");
	// return (
	// 	<div dir="rtl">
	// 		{status === "signin" && <LogIn />}
	// 		{status === "signup" && <SignUp />}
	// 		{status === null && (
	// 			<>
	// 				<Header />
	// 				<Outlet />
	// 				<Footer />
	// 			</>
	// 		)}
	// 	</div>
	// );
}

export default AppLayout;
