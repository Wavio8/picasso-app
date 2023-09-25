import React from 'react';
import './App.css';
import MainPage from "./pages/home/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostAbout from "./pages/about/PostAbout";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post/:postId" element={<PostAbout />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
