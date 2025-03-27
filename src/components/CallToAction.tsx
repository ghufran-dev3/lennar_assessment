const CallToAction = () => {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-center flex-col md:flex-row space-y-3">
        <input
          type="text"
          className="w-full h-12 py-3 px-4 text-base bg-white placeholder:text-gray-500 text-black rounded-md"
          placeholder="Enter your email"
        />
        <button className="h-12 w-full bg-indigo-600 px-4 rounded-[6px] text-white text-base font-medium">
          Start free trial
        </button>
      </div>
      <p className="text-sm font-normal">
        Start your free 14-day trial, no credit card necessary. By providing
        your email, you agree to our terms of service.
      </p>
    </div>
  );
};

export default CallToAction;
