import Container from "../layout/Container";
import HeadingSection from "../shard/HeadingSection";
import PS5 from "@/assets/images/ps5.png";
import Woman from "@/assets/images/attractive-woman-wearing-hat-posing-black.png";
import Speakers from "@/assets/images/speakers.png";
import perfume from "@/assets/images/perfume.png";
import NewArrivalProducts from "./new-arrival-products";

const NewArrival = () => {
  return (
    <Container className="mt-5.5">
      <HeadingSection
        title="Featured"
        subTitle="New Arrival"
        className="mb-10"
        hideArrow
      />

      <div className="grid md:grid-cols-2 gap-y-6 md:gap-y-0 gap-x-6">
        {/* Large PS5 card */}
        <NewArrivalProducts
          title="PlayStation 5"
          description="Black and White version of the PS5 coming out on sale."
          image={PS5}
          alt="PlayStation 5"
          className="md:row-span-2 min-h-[500px]"
        />

        <div className="space-y-6">
          <NewArrivalProducts
            title="Women's Collections"
            description="Featured woman collections that give you another vibe."
            image={Woman}
            alt="Women's Collections"
            className="min-h-[240px]"
            imgClassName="transform translate-x-5"
            gradientClass="bg-gradient-to-r from-black/80 to-transparent"
          />

          <div className="grid grid-cols-2 gap-6">
            <NewArrivalProducts
              title="Speakers"
              description="Amazon wireless speakers"
              image={Speakers}
              alt="Speakers"
              className="min-h-[240px]"
              imgClassName="w-[80%] h-[80%] transform translate-x-[30px] translate-y-[20px]"
            />
            <NewArrivalProducts
              title="Perfume"
              description="GUCCI INTENSE OUD EDP"
              image={perfume}
              alt="Perfume"
              className="min-h-[240px]"
              imgClassName="w-[80%] h-[80%] transform translate-x-[30px] translate-y-[20px]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewArrival;
