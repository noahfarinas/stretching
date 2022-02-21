import "./App.css";
import Search from "./Search";
import TitleView from "./TitleView";
import Buttons from "./Buttons";
import ReactPlayer from "react-player";

function App() {
  const TITLE = "Stretches";

  const DATA = [
    {
      area: "upper-back",
      video: "https://www.youtube.com/watch?v=bTn89EBKJdM",
    },

    {
      area: "mid-back",
      video: "https://www.youtube.com/watch?v=VnDuWC40egg",
    },

    {
      area: "lower-back",
      video: "https://www.youtube.com/watch?v=N-xqKx8oshs",
    },

    {
      area: "hips",
      video: "https://www.youtube.com/watch?v=nLuvQCTPrcY",
    },

    {
      area: "calves",
      video: "https://www.youtube.com/watch?v=37GHTaoknfw",
    },

    {
      area: "chest",
      video: "https://www.youtube.com/watch?v=NePr1XKRTLU",
    },

    {
      area: "glute",
      video: "https://www.youtube.com/watch?v=eRCpceBhcm0",
    },

    {
      area: "foot",
      video: "https://www.youtube.com/watch?v=AXSj_5pBAKw",
    },

    {
      area: "forearm",
      video: "https://www.youtube.com/watch?v=Ayhu7TzNGSQ",
    },

    {
      area: "it band",
      video: "https://www.youtube.com/watch?v=i6Psvd81Hyc",
    },

    {
      area: "hamstring",
      video: "https://www.youtube.com/watch?v=pJUwEBgxWoE",
    },

    {
      area: "tricep",
      video: "https://www.youtube.com/watch?v=SaZK9vlSmHI",
    },

    {
      area: "lat",
      video: "https://www.youtube.com/watch?v=6V5tSn9oEJg",
    },
  ];

  const BUTTONDATA = [
    {
      title: "back",
      embed: "https://www.youtube.com/watch?v=buF1v8aiTvM",
    },

    {
      title: "legs",
      embed: "https://www.youtube.com/watch?v=UIRTPXj1Q1U",
    },

    {
      title: "upper-body",
      embed: "https://www.youtube.com/watch?v=Kpd9ik93Sxk",
    },

    {
      title: "hips",
      embed: "https://www.youtube.com/watch?v=j42sLnoMkrA",
    },
  ];

  return (
    <div className="App">
      <TitleView headline={TITLE} />
      <Search placeholder="What hurts..." data={DATA} />
      <Buttons content={BUTTONDATA} />
    </div>
  );
}

export default App;
