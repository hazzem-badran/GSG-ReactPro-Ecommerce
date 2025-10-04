import Delivery2 from "@/assets/icons/delivery2.png";
import { H4, Small } from "../ui/typography";
import { SERVICES } from "@/constants/services";

function Services() {
  return (
    <section className="mx-auto px-4 py-35">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-28 justify-items-center">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center text-center space-y-4 max-w-xs"
          > 
            <div className="bg-border rounded-full p-4">
              <div className="bg-black text-primary-foreground rounded-full p-3">
                <img
                  src={Delivery2}
                  alt="Delivery"
                  className="h-10 w-10 object-contain"
                />
              </div>
            </div>

            <div className="space-y-2">
              <H4 className="!font-bold !text-black !text-lg">
                {service.title}
              </H4>
              <Small className="">{service.description}</Small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;