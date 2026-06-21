import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Companies from "./Pages/Companies";
import Events from "./Pages/Events";
import JobDetails from "./Pages/JobDetails";
import SearchResults from "./Pages/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      }
      <Footer />
    </BrowserRouter>
  );
}

export default App;
