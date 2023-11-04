// MangaCard.tsx
import React from 'react';

interface MangaCardProps {
  image: string;
  name: string;
}

const MangaCard: React.FC<MangaCardProps> = ({ image, name }) => (
  <div className="manga-card">
    <img src={image} alt={name} />
    <p>{name}</p>
  </div>
);

export default MangaCard;
