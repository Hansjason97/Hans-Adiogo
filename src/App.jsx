import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./routes/Home";
import { useTranslation } from "react-i18next";

function App() {

  const {t} = useTranslation();

  document.title = t("title");

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
      </Route>
    </Routes>
  )
}

export default App
