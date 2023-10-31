import React from 'react'

const ButtonPage = (props) => {
  
  const pageHandler = () => {
    props.pagination()
  }

  return (
    <button onClick={pageHandler} className="bg-blue-500 hover:bg-blue-600 transition-all shadow-[1px_2px_3px_1px_rgba(0,0,0,0.3)] text-white rounded-md text-lg px-3">
        {props.children}
    </button>
  )
}

export default ButtonPage;
