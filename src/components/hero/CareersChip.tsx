const CareersChip = () => {
  return (
    <div className="cursor-pointer bg-black flex items-center justify-start h-8 rounded-[14px] space-x-4 px-1 py-[2px]">
      <div className="flex items-center justify-center bg-indigo-500 px-3 py-[2px] rounded-[10px] text-xs h-6">
        WE'RE HIRING
      </div>
      <div className="flex space-x-2 text-sm">
        <div className="">Visit our careers page</div>
        <div className="h-5 w-5 flex items-center justify-center">
          <img
            src="/icons/caret-right.png"
            className="h-[10px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CareersChip;
