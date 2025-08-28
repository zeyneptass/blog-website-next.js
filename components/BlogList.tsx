"use client"
import React, { useEffect , useState} from 'react'

const BlogList = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
             const res = await fetch("http://localhost:3000/api/blog")
             const data = await res.json()
             setPosts(data)
        }
        fetchProducts()
    },[])

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

export default BlogList
