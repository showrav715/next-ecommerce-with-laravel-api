import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
export default function BlogDetails() {
    const router = useRouter()
    const { id,title,body } = router.query;
  return (
      <div>
          <h1>Blog Details</h1>
          {id && <p>Id: {id}</p>}
          {title && <p>Title: {title}</p>}
          {body && <p>Body: {body}</p>}

          <Link href="/blog" legacyBehavior>
            <a>Go Back</a>
          </Link>
          
    </div>
  )
}
