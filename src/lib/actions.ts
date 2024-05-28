// file system module and its not for client side 
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

// interface for the post 
export interface Post {
    slug:string;
    title:string;
    excerpt:string;
    coverImage:string;
    date:string;
    author:string;
    content:string;
}


const postsDirectory = join(process.cwd(), "src/content/posts");

export function getPostSlugs() {
    // return an array of filename[slug] of the dir.
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
    // get the file name with regex 
  const realSlug = slug.replace(/\.md$/, "");
  // get the path of the file.
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  // read the content of the file with the path we got.
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // get the front matter form the markdown.
  const { data, content } = matter(fileContents);
    // return the data and also add the slug as the member
  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
    // get all the files in the posts directory
  const slugs = getPostSlugs();
//   console.log(slugs);
// map over the array of the files and call the getPostByslug function to get the data and sort them accourding to the created date
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    // returns the array of the posts
  return posts;
}