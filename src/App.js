import Home from "./pages/Home/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleDistrict from "./pages/SingleDistrict";
import Navbar from "./components/Navbar";
import Party from "./pages/Party";
import Footer from "./components/Footer";
import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/state/:stateId/district/:districtId"
              exact
              element={<SingleDistrict />}
            />
            <Route path="/party/:partyId" exact element={<Party />} />
          </Routes>
          <Footer />
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
