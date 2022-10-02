import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./component/Shop";
import About from "./component/About";
import Contact from "./component/Contact";
import Pages from "./component/Pages";
import Home from "./component/Home";
import store from "./reducer/Store";
import { Provider } from "react-redux";

function App() {  
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pages" element={<Pages />} />
        </Routes>

        
        
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
