import React from 'react'
//dynamic page

const BlogSlugPage = async ({params}:{params:Promise <{slug:string}>}) => {
  const slug = (await params).slug;
  return (
    <div>
      {slug}
    </div>
  )
}

export default BlogSlugPage
