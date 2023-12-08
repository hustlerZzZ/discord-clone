import FandomLanding from "../../assets/fandom_landing.svg";
function FandomSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 max-w-[1200px] mx-auto py-8 lg:py-28">
      <div className="w-3/5">
        <img src={FandomLanding} alt="fandom-img" className="w-full" />
      </div>
      <div className="flex flex-col items-center text-center justify-center lg:w-2/5 lg:gap-6 px-4">
        <h2 className="font-extrabold text-xl md:text-3xl lg:text-5xl leading-snug text-black-secondary">
          From few to a fandom
        </h2>
        <p className="text-md md:text-lg lg:text-xl font-light">
          Get any community running with moderation tools and custom member
          access. Give members special powers, set up private channels, and
          more.
        </p>
      </div>
    </div>
  );
}

export default FandomSection;
