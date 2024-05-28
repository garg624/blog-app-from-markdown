import { getAllPosts } from '@/lib/actions'
import React from 'react'
import BlogCard from './BlogCard';


const Blogs = () => {
   const allPosts=getAllPosts();

  return (
    <section className='container mx-auto mt-2'>
        <h1 className='text-6xl m-6 animate-pulse font-extrabold'>
            Blogs...
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3  mb-32 '>
       {allPosts.map((p)=>{
        return(
            <BlogCard 
            key={p.slug}
            title={p.title}
            date={p.date}
            excerpt={p.excerpt}
            slug={p.slug}
            author={p.author}
            coverImage={p.coverImage}
            />
        )
       })}
       
        
        </div>

    </section>
  )
}

export default Blogs