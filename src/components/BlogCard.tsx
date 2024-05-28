import Image from 'next/image'
import React from 'react'
import DateFormatter from './formatDate'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const BlogCard = ({title,excerpt,coverImage,date,author,slug}:
    {title:string,excerpt:string,coverImage:string,date:string,author:string,slug:string}
) => {
  return (
    <div className='col-span-1  m-5 p-2'>
        
        <Image
      src={coverImage}
      alt={`Cover Image for ${title}`}
      className="shadow-sm w-full rounded-lg mb-3"
      width={1300}
      height={630}
    />
        
        <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
        <div className='flex justify-between items-center'>
        <div className="text-lg mb-4 px-2 italic">
        <DateFormatter dateString={date} />
      </div>
            <p className='text-lg mb-4 font-semibold'>{author}</p>
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default BlogCard
