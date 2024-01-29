import styles from './post.module.scss'
import { client } from '../../../../sanity/lib/client'
import { IPostLugares } from '@/types/iPostLugares'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '../../../../sanity/lib/image'


interface Params {
  params: {
    slug: string
  }
}

const getPost = async (slug: string) => {
  const query = `*[_type == "lugares" && slug.current == "${slug}"] {
    title,
    slug,
    publishedAt,
    excerpt,
    body
  } `
  const posts = await client.fetch(query)
  return posts
}

const Post = async ({ params }: Params) => {

  const post: IPostLugares[] = await getPost(params.slug)

  const { title, body, publishedAt, excerpt } = post[0]

  if(!post) {
    return <div>Post not found</div>
  }

  return (
    <main className={`${styles.post}`}>
      <section className={`${styles.post__head}`}>
      </section>
      <article className={`${styles.post__body}`}>
        <div className='container-sm'>
          <h1 className={`${styles.post__title}`}>{title}</h1>
          <p className={`${styles.post__date}`}>
            { new Date(publishedAt).toLocaleDateString('es-ES', {day: 'numeric', month: 'long', year: 'numeric'}) }
          </p>
          <p className={`${styles.post__excerpt}`}>{excerpt}</p>
          <PortableText
            value={body}
            components={myPortableTextComponents}
          />
        </div>
      </article>
    </main>
  )
}

export default Post

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value)}
        alt="Post"
        width={700}
        height={700}
      />
    ),
  },
};