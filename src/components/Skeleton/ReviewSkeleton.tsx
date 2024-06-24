const ReviewSkeleton = () => {
  return (
    <div className="border border-gray-300 rounded-md shadow-lg w-full animate-pulse">
      <div className="relative rounded-md p-6">
        <div className="h-10 w-10 rounded-full bg-gray-200 absolute left-6 top-6"></div>
        <div className="relative mt-16">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mt-3"></div>
        </div>
        <div className="relative mt-6 flex items-center justify-between pt-6">
          <div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-3 bg-gray-200 rounded w-16 mt-2"></div>
          </div>
          <div className="overflow-hidden rounded-full bg-slate-50">
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;
