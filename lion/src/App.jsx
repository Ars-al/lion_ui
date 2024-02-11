

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Elements/Profile";
import Menu from "./components/Elements/Menu";
import Detail from "./components/Elements/Detail";
import Aboutpage from './components/Elements/Aboutpage';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/aboutpage" element={<Aboutpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
