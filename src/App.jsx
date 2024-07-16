import React from 'react'
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import OurWork from './pages/OurWorks';
import Clients from './pages/Clients';
import Location from './pages/Location';
import Contact from './pages/Contact';
import './App.css'
const App = () => {
  return (
    <Layout>
      <LandingPage />
      <OurWork />
      <Clients />
      <Location />
      <Contact />
    </Layout>
  )
}

export default App
