import React from 'react'

const Title = ({children}) => {
  return (
		<h2 className=" text-3xl md:text-4xl font-bold dark:bg-gradient-to-r dark:from-teal-300 dark:to-gray-200 bg-gradient-to-r from-red-600 to-orange-400  text-transparent bg-clip-text inline-block mb-8 py-1">
			{children}
		</h2>
  );
}

export default Title
