import * as React from "react";
import { Component, Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #333;
    color: #ddd;
  }
  * {
    font-family: Roboto, Arial, sans-serif;
  }
`;

const OuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  min-width: 300px;
  width: 50vw;
`;

const Title = styled.h1`
  font-size: 44px;
  align-self: center;
  margin: 0;
`;

const Notice = styled.div`
  margin-bottom: 20px;
  align-self: center;
  border: 2px dotted white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 35vw;
`;

const NoticeTitle = styled.h2`
  margin: 0;
`;

const Info = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
`;

const Links = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LinksTitle = styled.h3`
  margin: 0;
  text-align: center;
`;

const LinksList = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const LinkWrapper = styled.a`
  color: #8c76ff;
  text-decoration: none;
  transition: 250ms color;
  &:hover {
    color: red;
  }
`;

type LinkProps = {
  url: string;
  text: string;
};

function Link(props: LinkProps) {
  return <LinkWrapper href={props.url}>{props.text}</LinkWrapper>;
}

type AppProps = {};
type AppState = {};

export class App extends Component<AppProps, AppState> {
  state: AppState = {};
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <OuterContainer>
          <InnerContainer>
            <Notice>
              <NoticeTitle>🚧 In Development 🚧</NoticeTitle>
              <Info>
                This project is currently in development. The alpha version of
                the game will be released on <b>July 4, 2021</b>. You can track
                the development of the project by visiting the GitHub link
                below.
              </Info>
            </Notice>
            <Title>cellscript.io</Title>
            <Info>
              <b>cellscript.io</b> is a real-time, 4X-style empire-building
              strategy game set in a procedurally generated 2D world where the
              player controls units by writing Javascript code. The project is
              developed and maintained by{" "}
              <Link
                url={"https://www.linkedin.com/in/tyler-hurson-068b59b0/s"}
                text={"Tyler Hurson"}
              />
              .
            </Info>
            <Links>
              <LinksTitle>Links</LinksTitle>
              <LinksList>
                <Link
                  text="GitHub"
                  url="https://github.com/tyhurson/cellscript-empire"
                />
              </LinksList>
            </Links>
          </InnerContainer>
        </OuterContainer>
      </Fragment>
    );
  }
}
