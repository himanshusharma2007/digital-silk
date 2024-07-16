import React from 'react'
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import './App.css'
import OurWork from './pages/OurWorks';
import Clients from './pages/Clients';
import Location from './pages/Location';
const App = () => {
  return (
    <Layout>
      <LandingPage />
      <OurWork />
      <Clients />
      <Location />
    </Layout>
  )
}

export default App
