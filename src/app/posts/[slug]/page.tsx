import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import styles from './post.module.scss'

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = () => {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
};

export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    title: post?.title,
    description: post?.excerpt,
  };
};

const PostLayout = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  let MDXContent;
  if (!post) {
    return <div>Post not found</div>;
  } else {
    MDXContent = getMDXComponent(post.body.code);
  }

  return (
    <main>
      <article className={styles.article}>
        <header className={styles.article__header}>
        </header>
        <section className="container">
          <h1 className={styles.article__title}>{post.title}</h1>
          <MDXContent />
        </section>
      </article>
        {/* <time>
          {new Date(post.date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time> */}
    </main>
  );
};
export default PostLayout;