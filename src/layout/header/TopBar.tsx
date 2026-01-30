function TopBar() {
  return (
    <div className="bg-[#f7efe9] border-b border-[#ead8cd]">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3 text-sm">
        <div className="text-gray-600">مسعود فرید</div>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="جستجو..."
            className="w-full rounded-xl border border-[#ead8cd] px-4 py-2 focus:outline-none"
          />
        </div>
        <div className="flex gap-4 text-gray-600">
          <span>🛒</span>
          <span>👤</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
