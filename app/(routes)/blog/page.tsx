import React from 'react'

const BlogPage = async() => {

    const res = await fetch("http://localhost:3000/api/blog")
    const posts = await res.json()
    console.log(posts)
  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl'>Server Side Rendering Blog Posts</h1>
      <ul className='space-y-4'>
        {
            posts.map((post) => (
                <li key={post.id}>
                    <h2 className='text-xl'>{post.title}</h2>
                    <p>{post.content}</p>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default BlogPage
