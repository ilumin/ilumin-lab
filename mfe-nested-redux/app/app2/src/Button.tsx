import React from 'react'

const Button = ({ onClick }) => {
  const handleClick = () => {
    console.log('clicked!')

    onClick && onClick()
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-100 py-2 px-4 rounded text-sm"
    >
      App2 Button
    </button>
  )
}

export default Button
