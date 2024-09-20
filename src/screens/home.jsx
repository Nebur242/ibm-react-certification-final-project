import { Link } from "react-router-dom";

const home = () => {
  return (
    <div className="w-screen bg-hero-pattern bg-cover">
      <div className="container mx-auto">
        <div className="h-screen p-4 flex flex-col md:flex-row justify-center items-center md:gap-[10%] gap-[5%] text-white">
          <div className="md:w-[40%] flex flex-col items-center">
            <h1 className="md:text-5xl text-2xl font-semibold text-center capitalize">
              Welcome to Paradise Nursery
            </h1>
            <p className="text-base text-center my-10 capitalize relative before:content-[''] before:absolute  before:left-[50%] before:translate-x-[-50%] before:top-[-8px] before:w-10 before:h-[1px] before:bg-primary">
              Where Green Meets serenity
            </p>
            <Link to={"/products"}>
              <button className="px-5 py-3 bg-primary hover:opacity-80 text-md rounded">
                Get started
              </button>
            </Link>
          </div>
          <div className="md:w-[60%]">
            <h2 className="text-center text-xl mb-6">
              Welcome to Paradise Nursery, where green meets serenity!
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-base">
                At Paradise Nursery, we are passionate about bringing nature
                closer to you. Our mission is to provide a wide range of
                high-quality plants that not only enhance the beauty of your
                surroundings but also contribute to a healthier and more
                sustainable lifestyle. From air- purifying plants to aromatic
                fragrant ones, we have something for every plant enthusiast.
              </p>
              <p className="text-base">
                Our team of experts is dedicated to ensuring that each plant
                meets our strict standards of quality and care. Whether
                {"you're"} a seasoned gardener or just starting your green
                journey, {"we're"} here to support you every step of the way.
                Feel free to explore our collection, ask questions, and let us
                help you find the perfect plant for your home or office.
              </p>
              <p className="text-base">
                Join us in our mission to create a greener, healthier world.
                Visit Paradise Nursery today and experience the beauty of nature
                right at your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
