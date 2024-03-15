import React from 'react'
import { PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type PerformanceCardProps = {
  title: string,
  description: string 
  imgUrl: string | null,
  morePhotosUrl: string |null,
  videoUrl: string
}



const PerformanceCard: React.FC<PerformanceCardProps> = ({ imgUrl, title, description, morePhotosUrl, videoUrl }): JSX.Element => {
  return (
    <div>
      <div 
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}>
        <div className='overlay items-center justify-center absolute  w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-50 transition-all duration-500'>
          <Link 
            href="/" 
            className='h-14 w-14 mr-6 border-2 border-spacing-x-10 relative rounded-full border-gray-500 hover:border-gray-200 group/link'>
              <PhotoIcon className='m-2 text-gray-400 cursor-pointer group-hover/link:text-gray-200' />
          </Link>
          <Link 
            href={videoUrl} 
            target='_blank'
            className='h-14 w-14 border-2 relative rounded-full border-gray-500 hover:border-gray-200 group/link'>
            <VideoCameraIcon className='m-2 text-gray-400 absolute cursor-pointer group-hover/link:text-gray-200' />
          </Link>
        </div>
      </div>
      <div className='rounded-b-xl bg-black px-4'>
        <h5 className='font-xl font-semibold mb-2'>{title}</h5>
        <p className='text-gray-300'>{description}</p>
      </div>
    </div>
  )
}

export default PerformanceCard