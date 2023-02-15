import { BlogContext, BlogContextProvider } from '@/lib/context/BlogContext'
import Link from 'next/link';
import React, { useContext, useEffect } from 'react'

export default function blog({data}) {
  // const { getBlogs,blogs } = useContext(BlogContext);

  // useEffect(() => {
  //   const blogs = getBlogs();
  //   console.log(blogs);
  // }, [])
  
 
  return (
    <div>
      Blog
      {data.map((blog) => {
        return (
          <div>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
            <Link legacyBehavior href={
              {
                pathname: '/blog/[id]',
                query: { ...blog }
              }
            }>
              <a>Read More</a>
            </Link>
          </div>

         )
       })}
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()
  return {
    props: { data }
  }
}