import React from 'react'

const Title = ({children}) => {
  return (
		<h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-300 to-gray-200 text-transparent bg-clip-text inline-block mb-8 py-1">
			{children}
		</h2>
  );
}

export default Title
