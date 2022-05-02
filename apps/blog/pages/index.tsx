import Head from 'next/head'
import LayoutComponent from '../app/layout/layout.component'
import utilStyles from '../styles/utils.module.css'
import {getPosts, Post} from "@nx-nextjs-demo/posts";
import {GetStaticProps} from "next";
import Link from 'next/link';
import DateComponent from "../app/date/date.component";

const name = 'Darryl'
export const siteTitle = `${name}'s Blog`

interface HomeProps {
  posts: Post[];
}

export default function Home({posts}: HomeProps) {
  return (
    <LayoutComponent home>
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
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <DateComponent date={date} />
                </small>
              </>
            </li>
          ))}
        </ul>
      </section>
    </LayoutComponent>
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
