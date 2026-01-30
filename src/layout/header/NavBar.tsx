const links = [
  "خانه",
  "حراج",
  "مردانه",
  "زنانه",
  "کودکانه",
  "لباس مجلسی",
  "تخفیف‌ها",
];

function NavBar() {
  return (
    <nav className="border-t border-[#eadfd6]">
      <ul className="max-w-7xl mx-auto flex justify-center gap-6 px-6 py-3 text-sm">
        {links.map((item, index) => (
          <li
            key={item}
            className={`cursor-pointer pb-1 ${
              index === 2
                ? "border-b-2 border-[#a35d4b] text-[#a35d4b]"
                : "text-gray-700 hover:text-[#a35d4b]"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
