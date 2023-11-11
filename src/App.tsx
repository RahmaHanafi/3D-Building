import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Floor from "./pages/floor";

function App() {
  return (
    <>
      <div className=" bg-backGroud w-screen h-screen bg-no-repeat bg-cover">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="floor/:id" element={<Floor />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
