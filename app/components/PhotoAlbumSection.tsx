import React from 'react';
import PhotoAlbumCard from './PhotoAlbumCard';

const photoAlbumData = [
  {
    albumTitle: 'Aerial Performances',
    coverPhoto: '/images/gabby_leiva_gods_of_the_night.JPG',
    albumLink: 'https://photos.app.goo.gl/7wjmyHuCav9JhYv86',
    altText: 'Album 1',
  },
  {
    albumTitle: 'Silk Fans',
    coverPhoto: '/images/gabby_leiva_silk_fans.jpg',
    albumLink: 'https://photos.app.goo.gl/mGhZFaaYrCxSrHUS8',
    altText: 'Album 2',
  },
  {
    albumTitle: 'LED S-Staffs Buugeng',
    coverPhoto: '/images/gabby_leiva_s_staffs_buugeng.jpeg',
    albumLink: 'https://photos.app.goo.gl/TvCQycnDuu16gUgLA',
    altText: 'Album 2',
  },
  {
    albumTitle: 'Lollipop',
    coverPhoto: '/images/gabby_leiva_lollipop.jpg',
    albumLink: 'https://photos.app.goo.gl/T97oSzTwj9vGD5fm6',
    altText: 'Album 2',
  },
  {
    albumTitle: 'Headshots',
    coverPhoto: '/images/gabby_leiva_headshot.jpg',
    albumLink: 'https://photos.app.goo.gl/u646iC61KkyCoaEE7',
    altText: 'Album 2',
  },
];

const PhotoAlbumSection: React.FC = () => {
  return (
    <section className="flex flex-grid flex-wrap justify-center items-center gap-10 py-6m sm:pt-55 pt-5 ">
      {photoAlbumData.map((album, index) => (
        <PhotoAlbumCard
          key={index}
          albumTitle={album.albumTitle}
          coverPhoto={album.coverPhoto}
          albumLink={album.albumLink}
          altText={album.altText}
        />
      ))}
    </section>
  );
};

export default PhotoAlbumSection;