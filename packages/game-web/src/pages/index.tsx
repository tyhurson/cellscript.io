import * as React from "react";
import Head from "next/head";
import Link from "next/link";
// @ts-ignore
import metaInfo from "../../../../package.json";

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
        <title>{metaInfo.name}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content={metaInfo.author.name} />
        <meta name="copyright" content={metaInfo.author.name} />
        <meta name="description" content={metaInfo.description} />
        <meta name="robots" content="index,follow" />
      </Head>
      <div className="outer">
        <div className="inner">
          <div className="notice">
            <h1>🚧 Under Construction 🚧</h1>
            <div className="info">
              cellscript.io is currently in development. The alpha version of
              the game is expected to release on <b>July 4, 2021</b>. Follow{" "}
              <Anchor url={metaInfo.urls.twitter} text="@cellscript_io" /> on
              Twitter for the latest updates.
            </div>
            <div className="info">
              Questions about the game? Visit the official subreddit:{" "}
              <Anchor url={metaInfo.urls.reddit} text="r/cellscript" />
            </div>
          </div>
          <div className="links">
            <h2>Links</h2>
            <div className="links-list">
              <div className="links-list-link">
                <Anchor url={metaInfo.homepage} text="GitHub" />
              </div>
              <div className="links-list-link">
                <Anchor url={metaInfo.urls.reddit} text="Reddit" />
              </div>
              <div className="links-list-link">
                <Anchor url={metaInfo.urls.twitter} text="Twitter" />
              </div>
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
          padding: 25px;
          min-width: 300px;
          max-width: 40vw;
        }
        h1 {
          font-size: 44px;
        }
        h1,
        h2 {
          margin: 0;
          align-self: center;
        }

        .notice {
          margin-bottom: 20px;
          align-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
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
          margin-top: 10px;
          display: flex;
          justify-content: center;
        }

        .links-list-link {
          padding: 5px;
          margin: 0 5px 0 5px;
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
