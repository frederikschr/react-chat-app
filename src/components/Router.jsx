import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar'
import Home from '../views/Home'
import About from '../views/About'

const Router = () => {
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
</BrowserRouter>
}

export default Router;


