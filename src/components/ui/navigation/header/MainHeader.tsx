
import Input from "../../forms/Input";
import Heart from "../../../../assets/icons/heart-small.png";
import Shearch from "../../../../assets/icons/search.png";
import Cart1 from "../../../../assets/icons/cart1.png";
import Container from "@/components/layout/Container";
import Nav from "./Nav";

const MainHeader = () => {
  return (
    <div className="mx-auto  py-4">
      <Container>
        <div className="flex items-center justify-between gap-2 lg:gap-8">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold ">
            Exclusive
          </a>

          {/* Navigation */}
          <Nav />

          {/* Search and Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center w-full bg-white rounded-md pl-1 py-0 max-w-sm shadow-xs">
              <Input
                type="search"
                className="bg-transparent text-md w-full"
                placeholder="Search..."
              />

              <img
                src={Shearch}
                alt="Shearch"
                className="w-6 h-6 object-contain"
              />
            </div>

            <img src={Heart} alt="Heart" className="w-8 h-8 object-contain " />
            <div className="relative">
              <img
                src={Cart1}
                alt="Cart1"
                className=" w-8 h-8 object-contain "
              />
              <span className=" absolute -top-1 -right-1.5 bg-red-500 text-white text-xs rounded-full h-3.5 w-3.5 flex items-center justify-center">
                0
              </span>
            </div>

            {/* <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainHeader;
