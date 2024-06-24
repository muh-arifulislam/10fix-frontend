const BlogSkeleton = () => {
  return (
    <div className="z-50 w-full group animate-pulse">
      <div className="rounded-[6px] text-left">
        <div>
          <div className="w-full h-full min-h-[230px] max-h-[230px] bg-gray-200 rounded-t-md"></div>
        </div>
        <div className="border border-t-0 w-full px-[30px] py-[25px] rounded-md">
          <div className="min-h-[72px]">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
