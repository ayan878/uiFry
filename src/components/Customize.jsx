
import advantage from "../assets/features-icons/feature.png";
import featureSpot from "../assets/features-icons/featureSpot.png";
import { PiStarFour } from "react-icons/pi";

function Customize() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2 px-4">
      <div className="md:w-1/2 relative">
        <img
          src={featureSpot}
          alt="feature spot"
          className="absolute top-0 left-0 w-full h-full z-0"
        />
        <img
          src={advantage}
          alt="feature"
          className="w-full h-auto relative z-10"
        />
      </div>
      <div className="md:w-1/2">
        <div className="flex items-center space-x-2 mb-4">
          <PiStarFour
            className="w-8 h-8 rounded-full bg-red-500 p-2
          text-white"
          />
          <h1 className="font-semibold "> Fully Customizable</h1>
        </div>
        <p className="text-gray-600">
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam.
        </p>
      </div>
    </div>
  );
}

export default Customize;
