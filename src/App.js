import { Container } from "@mui/system";
import React from "react";
import { Routes, Route } from "react-router-dom";
import JobCard from "./components/JobCard";
import SearchAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <JobCard />
    </div>
  );
}

export default App;
