import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { NewPostForm } from "@/components/NewPostForm/NewPostForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Problem solving</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NewPostForm />
        <div>list of Post&apos;s component here</div>
      </main>
    </>
  );
}
