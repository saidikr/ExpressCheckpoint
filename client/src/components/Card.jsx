import React from 'react'

export const Card = ({title,body}) => {
  return (
                <div className='flex'>
                <h3 className="text-2xl font-semibold">
                    {title}
                </h3>
                <p className="text-gray-600">
                    {body}
                </p>
                </div>
  )
}
