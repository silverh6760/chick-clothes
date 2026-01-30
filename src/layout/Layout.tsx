import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import TopBar from "./header/TopBar";

function AppLayout() {
  return (
    <div dir="rtl">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
