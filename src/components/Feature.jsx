import cube4 from "../assets/features-icons/cube-04.png";
import star from "../assets/features-icons/star-05.png";
import cube2 from "../assets/features-icons/cube-02.png";
import feature from "../assets/features-icons/feature.png";
import featureSpot from "../assets/features-icons/featureSpot.png";

const features = [
  {
    title: "Budgeting Intervals",
    desc: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    icon: star,
  },
  {
    title: "Detailed Analytics",
    desc: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    icon: cube4,
  },
  {
    title: "User-friendly Interface",
    desc: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    icon: cube2,
  },
];

function Feature() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
      <div className="md:w-1/2 relative">
        <img
          src={featureSpot}
          alt="feature spot"
          className="absolute top-0 left-0 w-full h-full z-0"
        />
        <img
          src={feature}
          alt="feature"
          className="w-full h-auto relative z-10"
        />
      </div>
      <div className="md:w-1/2">
        <p className="text-sm font-extralight text-red-500 uppercase">
          Features
        </p>
        <h1 className="text-3xl font-bold mb-6 tracking-tighter">
          uiFry Premium
        </h1>
        {features.map((feature, index) => (
          <div key={index} className="mb-4 flex items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <img
                  src={feature.icon}
                  alt="feature icon"
                  className="w-12 h-12"
                />
                <h2 className="text-xl font-semibold tracking-tighter">
                  {feature.title}
                </h2>
              </div>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
