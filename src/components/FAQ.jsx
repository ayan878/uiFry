import FAQList from "./FAQList";

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
      <div className="max-w-7xl mx-auto">
        <span className="text-red-500 mb-6">
          FAQ
        </span>

        <h2 className="text-5xl font-bold sm:text-left mb-6 w-2/5">
          Frequently Asked Questions
        </h2>
        <FAQList faqs={faqs} />
      </div>
    </div>
  );
};

export default FAQ;
