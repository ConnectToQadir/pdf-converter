import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Blogs = () => {
  return (
   <>
    <div className="blog-container mt-4">
      <div className="blog-heading">
        <h1>Blog</h1>
      </div>
    </div>
    <div className="blogs-grid mb-5">
      <div className="blog">
            <Image className="blog-img" width="200" height="70" src="/blog-img.jpg" alt="" />
        
        <p className="text-gray">Thu Dec 22, 2022</p>
        <h2 className="blog-title">Universities in Birmingham</h2>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, nobis ipsum fugit iure illum voluptatem enim officiis quis dolore voluptatum.
            </p>
        <Link className='blog-atag text-yellow' href="#"> Read More  </Link>
      </div>
      <div className="blog">
      <Image className="blog-img" width="200" height="70" src="/blog-img.jpg" alt="" />
        <p className="text-gray">Thu Dec 22, 2022</p>
        <h2 className="blog-title">Universities in Birmingham</h2>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, nobis ipsum fugit iure illum voluptatem enim officiis quis dolore voluptatum.
            </p>
            <Link className='blog-atag text-yellow' href="#"> Read More  </Link>
      </div>
      <div className="blog">
      <Image className="blog-img" width="200" height="70" src="/blog-img.jpg" alt="" />
        <p className="text-gray">Thu Dec 22, 2022</p>
        <h2 className="blog-title">Universities in Birmingham</h2>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, nobis ipsum fugit iure illum voluptatem enim officiis quis dolore voluptatum.
            </p>
        <Link className='blog-atag text-yellow ' href="#"> Read More  </Link>
      </div>


      <div className="blog">
            <Image className="blog-img" width="200" height="70" src="/blog-img.jpg" alt="" />
        
        <p className="text-gray">Thu Dec 22, 2022</p>
        <h2 className="blog-title">Universities in Birmingham</h2>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, nobis ipsum fugit iure illum voluptatem enim officiis quis dolore voluptatum.
            </p>
        <Link className='blog-atag text-yellow' href="#"> Read More  </Link>
      </div>
      <div className="blog">
            <Image className="blog-img" width="200" height="70" src="/blog-img.jpg" alt="" />
        
        <p className="text-gray">Thu Dec 22, 2022</p>
        <h2 className="blog-title">Universities in Birmingham</h2>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, nobis ipsum fugit iure illum voluptatem enim officiis quis dolore voluptatum.
            </p>
        <Link className='blog-atag text-yellow' href="#"> Read More  </Link>
      </div>
      <div className="blog">
            <Image className="blog-img" width="200" height="70" src="/blog-img.jpg" alt="" />
        
        <p className="text-gray">Thu Dec 22, 2022</p>
        <h2 className="blog-title">Universities in Birmingham</h2>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, nobis ipsum fugit iure illum voluptatem enim officiis quis dolore voluptatum.
            </p>
        <Link className='blog-atag text-yellow' href="#"> Read More  </Link>
      </div>

      
    </div>
   </>
  )
}

export default Blogs