import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewSection = ({ propertyId }: { propertyId: string | number }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews yet for this property.</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="p-4 border rounded-md shadow-sm">
          <p className="font-medium">{review.user}</p>
          <p className="text-yellow-500">⭐ {review.rating}/5</p>
          <p className="italic">{review.comment}</p>
          <p className="text-gray-500 text-sm">{new Date(review.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
