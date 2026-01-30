import { useSearchParams } from "react-router-dom";
import LogIn from "../../components/auth/LogIn";
import SignUp from "../../components/auth/SignUp";

function Auth() {
	const [searchParams] = useSearchParams();
	const status = searchParams.get("status");
	return (
		<div>
			{status === "signin" && <LogIn />}
			{status === "signup" && <SignUp />}
		</div>
	);
}

export default Auth;
