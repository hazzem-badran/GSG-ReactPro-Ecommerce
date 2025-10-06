import Container from "@/components/layout/Container";

const TopBanner = () => {
  return (
    <div className="bg-black text-white py-2">
      <Container>
        <div className="flex items-center justify-between text-sm">
          <div className="flex-1" />

          <div className="text-center">
            <span>
              <span className="hidden sm:inline">
                Summer Sale For All Swim Suits And Free
              </span>{" "}
              Express Delivery - OFF 50%!
            </span>

            <a
              href="#"
              className="font-semibold underline ml-2 hover:text-gray-300 transition-colors"
            >
              ShopNow
            </a>
          </div>

          <div className="flex-1 flex justify-end">
            <select className="bg-transparent text-white border-none text-sm cursor-pointer focus:outline-none">
              <option className="text-black">English</option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBanner;
