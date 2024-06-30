import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import DocScreen from "./docs/DocScreen";
import BuildScreen from "./build/BuildScreen";
import PlayScreen from "./play/PlayScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/doc" element={<DocScreen />} />
        <Route path="/build" element={<BuildScreen />} />
        <Route path="/play" element={<PlayScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
