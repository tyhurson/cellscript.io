import * as React from "react";
import Head from "next/head";
import Link from "next/link";
// @ts-ignore
import meta from "../../../../static/meta.json";

type AnchorProps = {
  url: string;
  text: string;
};

function Anchor(props: AnchorProps) {
  return (
    <>
      <Link href={props.url}>
        <a>{props.text}</a>
      </Link>
      <style jsx>{`
        a {
          color: #8c76ff;
          text-decoration: none;
          transition: 250ms color;
        }
        a:hover {
          color: red;
        }
      `}</style>
    </>
  );
}

export default function App() {
  return (
    <>
      <Head>
        <title>cellscript.io</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content={meta.author} />
        <meta name="copyright" content={meta.author} />
        <meta name="description" content={meta.description} />
        <meta name="robots" content="index,follow" />
      </Head>
      <div className="outer">
        <div className="inner">
          <div className="notice">
            <h2>🚧 In Development 🚧</h2>
            <div className="info">
              This project is currently in development. The alpha version of the
              game will be released on <b>July 4, 2021</b>. You can track the
              development of the project by visiting the GitHub link below.
            </div>
          </div>
          <div className="links">
            <h3>Links</h3>
            <div className="links-list">
              <Anchor
                url="https://github.com/tyhurson/cellscript.io"
                text="GitHub"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .outer {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .inner {
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          padding: 40px;
          min-width: 300px;
          max-width: 800px;
          width: 50vw;
        }

        h2,
        h3 {
          margin: 0;
          align-self: center;
        }

        .notice {
          margin-bottom: 20px;
          align-self: center;
          border: 4px dashed #ffe030;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 400px;
          max-width: 35vw;
        }

        .info {
          margin-top: 15px;
          margin-bottom: 0;
        }

        .links {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .links-list {
          margin-top: 15px;
          display: flex;
          justify-content: center;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #333;
          color: #eee;
        }
        * {
          font-family: Roboto, Arial, sans-serif;
        }
      `}</style>
    </>
  );
}
