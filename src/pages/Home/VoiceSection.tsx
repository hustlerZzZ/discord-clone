import VoiceImage from "../../assets/hanging_out_easy_landing.svg";
function VoiceSection() {
  return (
    <div className="bg-light-gray">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-center items-center w-full gap-8 lg:gap-0 pt-10 pb-12 lg:py-28">
        <div className="flex flex-col w-full lg:w-2/5 px-4 lg:px-0 text-center lg:text-start gap-6">
          <h2 className="font-extrabold text-xl md:text-3xl lg:text-5xl leading-snug text-black-secondary">
            Where hanging out is easy
          </h2>
          <p className="text-md md:text-lg lg:text-xl font-light">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>
        <div className="w-3/5">
          <img src={VoiceImage} alt="voice-img" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default VoiceSection;
