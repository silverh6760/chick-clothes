import NavBar from "./NavBar";

function Header() {
  return (
    <header className="bg-[#fbf5ef] border-b border-[#eadfd6]">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2 text-sm">
        {/* Right: Store title */}
        <h1 className="text-lg font-semibold text-[#a35d4b]">فروشگاه مد</h1>

        {/* Center: Search */}
        <div className="relative w-80">
          <input
            type="text"
            placeholder="جستجو..."
            className="w-full rounded-full border border-[#e6d6cc] px-4 py-1.5 text-sm focus:outline-none"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

        {/* Left: user + icons */}
        <div className="flex items-center gap-4 text-gray-600">
          <span className="flex items-center gap-1">
            👤 <span>مسعود فرید</span>
          </span>
          <span>🔒</span>
          <span className="relative">
            🛒
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
              1
            </span>
          </span>
        </div>
      </div>

      {/* Navigation */}
      <NavBar />
    </header>
  );
}

export default Header;
