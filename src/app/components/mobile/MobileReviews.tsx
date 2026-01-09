import { Star } from "lucide-react";

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: "1",
    author: "Sarah Chen",
    rating: 5,
    date: "2 weeks ago",
    title: "Game changer for my workflow",
    content: "As a developer, having AI assistance while coding is incredible. The hands-free operation lets me multitask seamlessly. Battery life is solid too!",
    verified: true,
  },
  {
    id: "2",
    author: "Marcus Johnson",
    rating: 5,
    date: "1 month ago",
    title: "Perfect for travel",
    content: "Real-time translation feature saved me countless times in Tokyo. The camera quality is surprisingly good for such a small device.",
    verified: true,
  },
  {
    id: "3",
    author: "Emily Rodriguez",
    rating: 4,
    date: "3 weeks ago",
    title: "Great but needs improvements",
    content: "Love the concept and execution. AI responses are fast and accurate. Only wish the battery lasted a bit longer during heavy use.",
    verified: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? 'fill-[#fbbf24] text-[#fbbf24]'
              : 'fill-none text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[14px] text-[#0a0a0a]">
              {review.author}
            </p>
            {review.verified && (
              <span className="bg-[#00b869] text-white text-[10px] font-['Red_Hat_Display:SemiBold',sans-serif] px-2 py-0.5 rounded-full">
                Verified
              </span>
            )}
          </div>
          <StarRating rating={review.rating} />
        </div>
        <p className="font-['Red_Hat_Display:Regular',sans-serif] text-[12px] text-gray-500">
          {review.date}
        </p>
      </div>

      {/* Content */}
      <h4 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[15px] text-[#0a0a0a] mb-2">
        {review.title}
      </h4>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] text-[14px] text-gray-700 leading-relaxed">
        {review.content}
      </p>
    </div>
  );
}

export default function MobileReviews() {
  const averageRating = 4.7;
  const totalReviews = 2847;

  return (
    <div className="w-full py-8 px-6 bg-gray-50">
      <div className="max-w-[390px] mx-auto">
        {/* Section Header */}
        <div className="mb-6">
          <h3 className="font-['Red_Hat_Display:Bold',sans-serif] text-[24px] text-[#0a0a0a] mb-2">
            Customer Reviews
          </h3>
          
          {/* Rating Summary */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-baseline gap-1">
              <span className="font-['Red_Hat_Display:Bold',sans-serif] text-[32px] text-[#0a0a0a]">
                {averageRating}
              </span>
              <span className="font-['Red_Hat_Display:Regular',sans-serif] text-[14px] text-gray-600">
                / 5
              </span>
            </div>
            <div>
              <StarRating rating={5} />
              <p className="font-['Red_Hat_Display:Regular',sans-serif] text-[12px] text-gray-600 mt-1">
                Based on {totalReviews.toLocaleString()} reviews
              </p>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2 mb-6">
            {[
              { stars: 5, percentage: 78 },
              { stars: 4, percentage: 15 },
              { stars: 3, percentage: 4 },
              { stars: 2, percentage: 2 },
              { stars: 1, percentage: 1 },
            ].map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <span className="font-['Red_Hat_Display:Regular',sans-serif] text-[12px] text-gray-600 w-8">
                  {item.stars} ★
                </span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#fbbf24] rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="font-['Red_Hat_Display:Regular',sans-serif] text-[12px] text-gray-600 w-10 text-right">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Cards */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* View All Button */}
        <button className="w-full mt-6 py-3 border border-gray-300 rounded-full font-['Red_Hat_Display:SemiBold',sans-serif] text-[14px] text-[#0a0a0a] hover:bg-gray-50 active:scale-98 transition-all">
          View All {totalReviews.toLocaleString()} Reviews
        </button>
      </div>
    </div>
  );
}
