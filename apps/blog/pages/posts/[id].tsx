import Layout from '../../app/layout/layout'
import {getAllPostIds, getPostData, Param, Post} from "@nx-nextjs-demo/posts";
import {GetStaticPaths} from "next";
import Head from 'next/head';

interface PostProps {
  post: Post;
}

export default function PostComponent({post}: PostProps) {
  return (
    <Layout>
      <>
        <Head>
          <title>{post.title}</title>
        </Head>
        {post.title}
        <br/>
        {post.id}
        <br/>
        {post.date}
        <br/>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </>
    </Layout>
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
