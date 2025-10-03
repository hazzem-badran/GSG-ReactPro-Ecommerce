import DropDownRight from "@/assets/icons/drop-down-right.png";
import { CATEGORIES } from "@/constants/categories";

const Sidebar = () => {
  return (
    <aside className="hidden md:block border-r-[0.5px] pr-4">
      <nav className="space-y-3 pt-10 h-full flex flex-col justify-between">
        {CATEGORIES.map((category) => (
          <a
            key={category}
            href="#"
            className="font-poppins flex items-center justify-between text-base hover:text-secondary2 transition-colors"
          >
            {category}
            {(category === "Woman's Fashion" ||
              category === "Men's Fashion") && (
              <img src={DropDownRight} alt="DropDownRight" />
            )}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
