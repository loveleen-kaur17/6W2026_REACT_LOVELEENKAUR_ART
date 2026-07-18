import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/customer/layout/Layout"
import Home from "./components/customer/pages/Home"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element ={< Layout/>}>
              <Route path="/" element ={< Home/>}> </Route>
              
             
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
