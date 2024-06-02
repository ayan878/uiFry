import FAQList from "./FAQList";
import iphone13Pro from "../assets/iPhone13Pro.png"
import { BsApple } from "react-icons/bs";

const faqs = [
  {
    title: "The Best Financial Accounting App Ever!",
    description:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
    isHighlighted: true,
  },
  {
    title: "The Best Financial Accounting App Ever!",
    description:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
    isHighlighted: false,
  },
  {
    title: "The Best Financial Accounting App Ever!",
    description:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
    isHighlighted: false,
  },
  {
    title: "The Best Financial Accounting App Ever!",
    description:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
    isHighlighted: true,
  },
  {
    title: "The Best Financial Accounting App Ever!",
    description:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
    isHighlighted: true,
  },
  {
    title: "The Best Financial Accounting App Ever!",
    description:
      "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.",
    isHighlighted: false,
  },
];

const FAQ = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-red-500 mb-6">FAQ</span>

        <h2 className="text-5xl font-bold sm:text-left mb-6 w-2/5">
          Frequently Asked Questions
        </h2>
        <FAQList faqs={faqs} />
      </div>
      <div className="w-full h-auto border-2 rounded-md bg-black  flex flex-col lg:flex-row items-center lg:items-start overflow-hidden">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-2 lg:mb-0 lg:mr-8 p-16 md:mt-8 ">
          <h1 className="text-white text-3xl capitalize font-bold tracking-tighter mb-4">
            ready to get started?
          </h1>
          <p className="text-white text-lg mb-4 w-full">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <button className="bg-white flex p-4 justify-between items-center gap-2 rounded-md">
            Download App <BsApple className="text-black" />
          </button>
        </div>
        <div className="relative w-full max-w-xs lg:max-w-md lg:self-end overflow-hidden md:z-50">
          <img
            src={iphone13Pro}
            alt="iphone 13 pro"
            className="md:relative md:left-20 w-full py-4"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
