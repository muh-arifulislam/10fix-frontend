import { useEffect, useState } from "react";
import CardReview from "../../components/Card/CardReview";
import useBreakpoint from "../../hooks/useBreakpoint";
import Slider from "../../lib/swiper/Slider";
import { TReview } from "../../types/review.type";
import ReviewSkeleton from "../../components/Skeleton/ReviewSkeleton";

const ReviewSection = () => {
  const breakPoint = useBreakpoint();

  const [reviews, setReviews] = useState<null | TReview[]>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setLoading(true);
    fetch("https://server.10fix.com.bd/api/v1/reviews?limit=10")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReviews(data.data);
          setLoading(false);
        } else {
          setError("something went wrong!!. Reload the page.");
          setLoading(false);
        }
      })
      .catch(() => {
        setError("something went wrong!!. Reload the page.");
        setLoading(false);
      });
  }, []);

  let content;
  content = (
    <Slider
      data={reviews}
      render={CardReview}
      autoPlay={false}
      slidePerView={breakPoint === "xs" ? 1 : 3}
    />
  );

  if (error) {
    content = (
      <div className="custom-container my-10">
        <div>
          <div className="text-center">
            <h5 className="text-3xl">Oops!</h5>
            <h5 className="text-xl">
              Something went wrong! Please refresh the page and try again
            </h5>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="mt-[120px]">
      <div className="custom-container">
        <div className="">
          <h2 className="section-title text-center">আমাদের নিয়ে লেখা হয়েছে</h2>
        </div>
        <div className="">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {breakPoint === "xs" ? (
                <ReviewSkeleton />
              ) : (
                <>
                  <ReviewSkeleton />
                  <ReviewSkeleton />
                  <ReviewSkeleton />
                </>
              )}
            </div>
          ) : (
            content
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
