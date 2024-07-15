import React from 'react'
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import './App.css'
import OurWork from './pages/OurWorks';
const App = () => {
  return (
    <Layout>
      <LandingPage />
      <OurWork />
    </Layout>
  )
}

export default App
