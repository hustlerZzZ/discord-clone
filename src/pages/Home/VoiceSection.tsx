import VoiceImage from "../../assets/hanging_out_easy_landing.svg";
function VoiceSection() {
  return (
    <div className="bg-light-gray">
      <div className="max-w-[1200px] mx-auto flex justify-center items-center w-full py-28">
        <div className="flex flex-col w-2/5 gap-6">
          <h2 className="font-extrabold text-5xl leading-snug text-black-secondary">
            Where hanging out is easy
          </h2>
          <p className="text-xl font-light">
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
