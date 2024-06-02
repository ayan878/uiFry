import userGroup from "../assets/features-icons/users-group.png";
import userGroup1 from "../assets/features-icons/user-group1.png";

function Testimonials() {
  return (
    <section id="testimonials" className="p-8 flex flex-col items-center">
      <div className="text-center mb-8 w-1/2">
        <p className="text-sm font-extralight text-red-500 uppercase">
          Testimonials
        </p>
        <h1 className="text-3xl font-bold mb-2 tracking-tighter ">
          What Our Users Say About Us?
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 w-full">
        <div className="md:w-1/2 flex justify-center relative">
          <img src={userGroup} alt="user group" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 flex flex-col items-start p-4">
          <h2 className="text-xl font-semibold tracking-tighter mb-2">
            The Best Financial Accounting App Ever!
          </h2>
          <p className="text-gray-600 mb-4">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <div className="items-center gap-4">
            <img
              src={userGroup1}
              alt="user"
              className="mb-2"
            />
            <span className="text-lg font-bold ">Nick Jonas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
