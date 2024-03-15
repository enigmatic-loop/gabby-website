import React from 'react'

type TabButtonProps = {
  active: boolean,
  selectTab: () => void,
  children?: any 
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children}): JSX.Element => {
  const buttonClasses = active 
  ? 'text-white border-b-2 border-gray-200' 
  : 'text-gray-600'

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-gray-100 ${buttonClasses}`}>
      {children}
      </p>
    </button>
  )
}

export default TabButton