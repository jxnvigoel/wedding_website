import React from 'react';
import { Star, StarHalf } from 'lucide-react';

export const Rating = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;
  
  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-[var(--color-gold)]" />
      ))}
    </div>
  );
};
