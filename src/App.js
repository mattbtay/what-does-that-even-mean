import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, Text } from "@chakra-ui/react";


import Nav from "./components/Nav";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";



const App =() => {

  return (
    <>
      <ChakraProvider>
        
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path='/pricing' exact element={<PricingPage />} />
            <Route path='/about' exact element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App;
