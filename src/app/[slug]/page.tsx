import { getAllPosts, getPostBySlug } from '@/lib/actions'
import markdownToHtml from '@/lib/markdownToHtml';
import { notFound } from 'next/navigation';
import React from 'react'
import markdownStyles from "./markdown.module.css";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import DateFormatter from '@/components/formatDate';
import { GetStaticPaths, GetStaticProps } from 'next';


const page = async({params}:{params:{slug:string}}) => {
  const post=getPostBySlug(params.slug);
  if(!post){
    notFound();
  }
  const content= await markdownToHtml(post.content || "")

  return (
    <div className="mt-20 container ">
      <div className='absolute top-5 left-5 border'>
        {/* left side close btn */}
        <Button variant={"outline"} asChild className='z-50'>
          <Link href={"/"}><IoMdClose className='text-2xl' /></Link>
        </Button>
      </div>

      <h1 className='text-4xl md:text-6xl lg:text-8xl font-extrabold w-screen my-4'>{post.title}</h1>
      <h3 className='text-lg md:text-2xl font-semibold my-2'>
        Author : {post.author}
      </h3>
      <Image src={post.coverImage} alt='cover image' width={500} height={500} className='w-screen'/>
      <div className="text-lg my-4 px-2 italic">
        <DateFormatter dateString={post.date} />
      </div>
    <div
    // content
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />


  </div>
  )
}

export default page


export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
//* getStaticProps is not supported in app router of the nextjs 14 
// export const getStaticProps:GetStaticProps=async()=>{

// }



