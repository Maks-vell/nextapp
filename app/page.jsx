import Link from 'next/link';
import Post from './components/Post';
import styles from './page.module.css'
import prisma from '@/lib/prisma'

async function getPosts(){
  const posts = await prisma.post.findMany({
  })
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      <Link href={'/add-post'}>Add Post</Link>
      <h1>Feed</h1>
      {
        posts.map((post) => {
          return (
            <Post
            id={post.id}
            title={post.title}
            age={post.age}
            content={post.content}
            />
          )
        })
      }
    </main>
  )
}
