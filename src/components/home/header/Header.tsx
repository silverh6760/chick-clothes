import NavBar from "../../../layout/header/NavBar";

function Header() {
  return (
    <header className="bg-[#f3e4da] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-[#a35d4b]">فروشگاه مد</h1>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
