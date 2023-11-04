// MangaCover.tsx
import React from 'react';

interface MangaCoverProps {
  title: string;
  imageUrl: string;
  synopsis: string;
}

const MangaCover: React.FC<MangaCoverProps> = ({ title, imageUrl, synopsis }) => (
  <div className="manga-cover">
    <img src={imageUrl} alt={title} />
    <h2>{title}</h2>
    <p>{synopsis}</p>
  </div>
);

export default MangaCover;
