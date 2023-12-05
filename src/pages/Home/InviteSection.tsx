import InviteImage from "../../assets/invite_only_landing.svg";
function InviteSection() {
  return (
    <div className="max-w-[1200px] mx-auto flex justify-center items-center w-full py-32">
      <div className="flex justify-end items-end py-1">
        <img src={InviteImage} alt="invite-img" className="w-[778px]" />
      </div>
      <div className="flex flex-col gap-5 w-2/5 pl-8">
        <h2 className="font-extrabold text-5xl leading-snug text-black-secondary">
          Create an invite-only place where you belong
        </h2>
        <p className="text-xl font-light">
          Discord servers are organized into topic-based channels where you can
          collaborate, share, and just talk about your day without clogging up a
          group chat.
        </p>
      </div>
    </div>
  );
}

export default InviteSection;
