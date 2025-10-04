const NewsCardSkeleton = () => {
  return (
    <div
      className="bg-gray-50 animate-pulse
      w-full sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] 
      rounded-br-4xl rounded-tl-4xl overflow-hidden shadow-lg"
    >
      {/* Image with fixed ratio for consistency */}
      <div className="w-full aspect-[4/3] relative">
        <div className="w-ful h-full bg-gray-200"></div>
      </div>

      <div className="p-4 md:p-5 lg:p-6 text-white/80 flex flex-col gap-3">
        <div>
          <p className="bg-gray-200 py-3 rounded-sm"></p>
          <p className="bg-gray-200 py-3 w-3/4 rounded-sm mt-5"></p>
        </div>
        <div className="mt-4">
          <p className="bg-gray-200 py-2"></p>
          <p className="bg-gray-200 py-2 mt-2"></p>
          <p className="bg-gray-200 w-4/5 py-2 mt-2"></p>
        </div>
        <div className="mt-2">
          <p className="bg-gray-200 py-2"></p>
          <p className="bg-gray-200 py-2 mt-2"></p>
          <p className="bg-gray-200 w-2/5 py-2 mt-2"></p>
        </div>

        <div className="flex-grow flex justify-between items-end gap-4 pt-4">
          <p className="bg-gray-200 p-3 mt-3"></p>
          <p className="bg-gray-200 py-3 w-3/5 mt-3"></p>
        </div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
