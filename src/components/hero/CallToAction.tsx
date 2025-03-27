import { useState } from "react";

interface CallToActionProps {
  handleCTAClick: (email: string) => void;
}

const CallToAction = (props: CallToActionProps) => {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (email !== "") props.handleCTAClick(email);

    setEmail("");
  };

  return (
    <div className="w-full space-y-3 md:pt-12 md:z-10">
      <div className="flex items-start justify-start flex-col md:flex-row space-y-3 space-x-3">
        <input
          type="text"
          className="w-full md:w-[360px] h-12 py-3 px-4 text-base bg-white placeholder:text-gray-500 text-black rounded-md"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="cursor-pointer h-12 w-full md:w-[140px] bg-indigo-600 px-4 rounded-[6px] text-white text-base font-medium"
        >
          Start free trial
        </button>
      </div>

      <p className="text-sm font-normal text-gray-300 md:w-[510px]">
        Start your free 14-day trial, no credit card necessary. By providing
        your email, you agree to our&nbsp;
        <a href="#" className="text-white">
          terms of service
        </a>
        .
      </p>
    </div>
  );
};

export default CallToAction;
