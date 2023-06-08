import React from 'react'

const Blog = (props) => {
  const { blog } = props
  return (
    <div className="flex w-100">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex justify-start gap-5">
            <p className="text-red-800">{blog.author}</p>
            <div className="flex flex-row gap-4">
              <p>{blog.date}</p>
              <p>• {blog.readingTime}</p>
            </div>
          </div>
          <div className="flex flex-col text-start">
            <h2 className="font-bold">{blog.header}</h2>
            <p>{blog.description}</p>
          </div>
          <div className="flex flex-row gap-4 flex-wrap">
            {blog.tags.map((tag) => {
              return (
                <h3 className="border rounded-full px-4 py-2 shrink-0 border-black" key={`${tag}-${blog.header}`}>
                  {' '}
                  #{tag}
                </h3>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
