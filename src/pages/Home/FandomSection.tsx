import FandomLanding from "../../assets/fandom_landing.svg";
function FandomSection() {
  return (
    <div className="flex max-w-[1200px] mx-auto py-28">
      <div className="w-3/5">
        <img src={FandomLanding} alt="fandom-img" className="w-full" />
      </div>
      <div className="flex flex-col items-center justify-center w-2/5 gap-6">
        <h2 className="font-extrabold text-5xl leading-snug text-black-secondary">
          From few to a fandom
        </h2>
        <p className="text-xl font-light">
          Get any community running with moderation tools and custom member
          access. Give members special powers, set up private channels, and
          more.
        </p>
      </div>
    </div>
  );
}

export default FandomSection;
