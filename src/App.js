import { Routes, Route } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Menu from "./components/Menu"
import Order from "./components/Order"
import MenuItem from "./components/MenuItem"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <MenuItem/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="menu" element={ <Menu/> } />
        <Route path="order" element={ <Order/> } />
      </Routes>
    </div>
  )
}

export default App