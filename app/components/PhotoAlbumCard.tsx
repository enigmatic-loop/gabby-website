import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PhotoAlbumCardProps {
  albumTitle: string;
  coverPhoto: string;
  albumLink: string;
  altText: string;
}

const PhotoAlbumCard: React.FC<PhotoAlbumCardProps> = ({ albumTitle, coverPhoto, albumLink, altText }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className='relative snap-center border rounded-md p-2.5'>
      <Link href={albumLink} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleMouseEnter}>
        <h2 className='relate'>{albumTitle}</h2>
        <div className='w-64 h-64 mx-auto max-w-full'>
          <Image
            key={isHovered ? 'hovered' : 'not-hovered'}
            src={coverPhoto}
            alt={altText}
            layout="fill"
            objectFit="contain"
            loading="lazy"
            className='p-2'
          />
        </div>
        {isHovered && (
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
            <p className='text-white'>Go to album</p>
          </div>
        )}
      </Link>
    </section>
  );
};

export default PhotoAlbumCard;