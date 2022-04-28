import LayoutComponent from '../../app/layout/layout.component'
import {getAllPostIds, getPostData, Param, Post} from "@nx-nextjs-demo/posts";
import {GetStaticPaths} from "next";
import Head from 'next/head';
import DateComponent from "../../app/date/date.component";
import utilStyles from '../../styles/utils.module.css'

interface PostProps {
  post: Post;
}

export default function PostComponent({post}: PostProps) {
  return (
    <LayoutComponent>
      <>
        <Head>
          <title>{post.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{post.title}</h1>
          <div className={utilStyles.lightText}>
            <DateComponent date={post.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </>
    </LayoutComponent>
  )
}

export async function getStaticProps({params}) {
  const post = await getPostData(params.id);
  return {
    props: {
      post
    }
  };
}

export const getStaticPaths: GetStaticPaths<Param> = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}
