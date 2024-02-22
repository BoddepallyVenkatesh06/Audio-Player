import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("javascript", javascript);

const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Player trackList={tracks} />
      <h1 className="title">Installation</h1>
      <SyntaxHighlighter language="bash" style={coldarkDark}>
        {`npm install @madzadev/audio-player`}
      </SyntaxHighlighter>

      <h1 className="title">Usage</h1>
      <SyntaxHighlighter language="javascript" style={coldarkDark}>
        {`import Player from '@madzadev/audio-player'
        import '@madzadev/audio-player/dist/index.css'`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="javascript" style={coldarkDark}>
        {`const tracks = [
          {
            url: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
            title: 'Madza - Chords of Life',
            tags: ['house']
          },
          {
            url: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
            title: 'Madza - Late Night Drive',
            tags: ['dnb']
          },
          {
            url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
            title: 'Madza - Persistence',
            tags: ['dubstep']
          }
        ]`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Player trackList={tracks} />`}
      </SyntaxHighlighter>
      <p className="warning">
        The only mandatory prop is <code>trackList</code> for audio source.
      </p>
      <p className="warning">
        It requires to pass in an array consisting of objects with{" "}
        <code>url</code>, <code>title</code> and <code>tags</code> keys.
      </p>

      <h1 className="title">Options</h1>
      <p className="note">
        There are multiple optional props you can use to configure the player.
      </p>
      <p className="note">The default values of them are displayed below.</p>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Player
        trackList={tracks}
        includeTags={true}
        includeSearch={true}
        showPlaylist={true}
        sortTracks={true}
        autoPlayNextTrack={true}
      />`}
      </SyntaxHighlighter>

      <h1 className="title">Color schemas</h1>
      <p className="note">
        You can customize the design of the player by editing the{" "}
        <code>colors</code> object below.
      </p>
      <p className="note">
        Include only those properties, that you want to customize.
      </p>
      <SyntaxHighlighter language="javascript" style={coldarkDark}>
        {`const colors = {
            tagsBackground: "#3e32e4",
            tagsText: "#ffffff",
            tagsBackgroundHoverActive: "#6e65f1",
            tagsTextHoverActive: "#ffffff",
            searchBackground: "#18191f",
            searchText: "#ffffff",
            searchPlaceHolder: "#575a77",
            playerBackground: "#18191f",
            titleColor: "#ffffff",
            timeColor: "#ffffff",
            progressSlider: "#3e32e4",
            progressUsed: "#ffffff",
            progressLeft: "#151616",
            bufferLoaded: "#1f212b",
            volumeSlider: "#3e32e4",
            volumeUsed: "#ffffff",
            volumeLeft: "#151616",
            playlistBackground: "#18191f",
            playlistText: "#575a77",
            playlistBackgroundHoverActive: "#18191f",
            playlistTextHoverActive: "#ffffff",
        }`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={coldarkDark}>
        {`<Player
        trackList={tracks}
        customColorScheme={colors}
      />`}
      </SyntaxHighlighter>

      <h1 className="title">Final notes</h1>
      <p className="note">
        The audio files can be stored and accessed both locally in your project
        via file path (e.g., <code>public/yourtrack.mp3</code>) or using
        external host and providing direct URL to the source (e.g.,{" "}
        <code>https://website.com/yourtrack.mp3</code>).
      </p>
      <p className="note">
        This project is under MIT license, so be free to check it out!
      </p>

      <Footer />
    </Wrapper>
  );
};

export default App;
