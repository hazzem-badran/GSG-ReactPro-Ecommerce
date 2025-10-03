import HeadingSection from "../shard/HeadingSection";
import Container from "../layout/Container";
import Heart from "@/assets/icons/heart-small.png";
import { Small } from "../ui/typography";

function Categories() {
  const categories = [
    { name: "Phones" },
    { name: "Computers" },
    { name: "SmartWatch" },
    { name: "Camera" },
    { name: "HeadPhones" },
    { name: "Gaming" },
  ];
  return (
    <Container className="mt-14.5 pb-17.5 border-b-[0.5px] border-border">
      <HeadingSection
        title="Categories"
        subTitle="Browse By Category"
        className="mb-15.5"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          // const Icon = category.icon;
          return (
            <div
              key={category.name}
              className="flex flex-col items-center justify-center gap-5 p-8 border border-border rounded-sm hover:bg-secondary-2 hover:text-white hover:border-accent transition-colors"
            >
              {/* <Icon className="h-12 w-12" /> */}
              <img src={Heart} alt="Heart" className="h-6 w-6" />
              <Small className="!font-medium">{category.name}</Small>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Categories;