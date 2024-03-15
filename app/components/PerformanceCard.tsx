import React from 'react'

type Props = {
  title: string,
  description: string 
  imgUrl: string | null,
}

const PerformanceCard: React.FC<Props> = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div 
        className='h-52 md:h-72'
        style={{ background: `url${imgUrl}`, backgroundSize: "cover"}}>
        <div className='overlay absolute top=0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'></div>
      </div>
      <div className='rounded-b-xl bg-black px-4'>
        <h5 className='font-xl font-semibold mb-2'>{title}</h5>
        <p className='text-gray-700'>{description}</p>
      </div>
    </div>
  )
}

export default PerformanceCard