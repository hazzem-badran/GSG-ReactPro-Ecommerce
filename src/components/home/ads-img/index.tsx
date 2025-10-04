import JBL from "@/assets/images/jbl-boombox.png";
import Shadow from "@/assets/images/shadow.png";

const AdsImg = () => {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={Shadow}
        alt="Shadow"
        className="absolute bottom-0  w-[80%] max-w-md blur-sm opacity-80 transform scale-[1.5]"
      />
      <img
        src={JBL}
        alt="Music Speaker"
        className="relative w-full max-w-md z-10"
      />
    </div>
  );
};

export default AdsImg;