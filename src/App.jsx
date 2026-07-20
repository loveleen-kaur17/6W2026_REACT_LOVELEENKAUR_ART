import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/customer/layout/Layout"
import Home from "./components/customer/pages/Home"
import About from "./components/customer/pages/About"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={< Layout />}>
            <Route path="/" element={< Home />}> </Route>
            <Route path="/about" element={< About />}> </Route>



          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
