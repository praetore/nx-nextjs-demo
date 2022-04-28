import Head from 'next/head'
import Layout, {siteTitle} from '../app/layout/layout'
import utilStyles from '../styles/utils.module.css'
import {getPosts, Post} from "@nx-nextjs-demo/posts";
import {GetStaticProps} from "next";

interface HomeProps {
  posts: Post[];
}

export default function Home({posts}: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is the blog from that one dude</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <>
                {title}
                <br/>
                {id}
                <br/>
                {date}
              </>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = getPosts();
  return {
    props: {
      posts,
    }
  }
}
