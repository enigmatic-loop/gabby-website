import React from 'react';

interface VideoCardProps {
  videoUrl: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, title }) => {
  return (
    <div className="video-card md:max-w-full">
      <iframe 
        width="93%" 
        height="315" 
        src={videoUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
    </div>
  );
};

export default VideoCard;