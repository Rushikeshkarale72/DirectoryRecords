import "./App.css";
import Header from "./Components/Header";
import Button from "./Components/Button";
import AddNew from "./Pages/AddNew";
import RetrieveData from "./Pages/Retrieve_Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Button /> */}

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<AddNew />} />
          <Route path="/retrieve" element={<RetrieveData />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
