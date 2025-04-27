import React from 'react'

interface PerformanceTagProps {
  name: string,
  onClick: any,
  isSelected: boolean
}

const PerformanceTag: React.FC<PerformanceTagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-purple-700"
    : "text-gray-500 border-slate-600 hover:border-white"
  return (
    <button 
      className={`${buttonStyles} rounded-full border-2 border-purple-700 px-6 py-2 lg:text-xl cursor-pointer md:text-sm`}
      onClick={() => onClick(name)}>
      {name}
    </button>
  )
}

export default PerformanceTag