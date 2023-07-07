import { useState } from "react"
import Footer from "./components/Footer"
import GraphSection from "./components/GraphSection"
import HeroSection from "./components/HeroSection"
import ListGroup from "./components/ListGroup"
import Navigation from "./components/Navigation"
import ProfileSection from "./components/ProfileSection"
import { ExpenseProvider } from "./context/ExpenseContext"

function App() {

 
  return (
    <ExpenseProvider>
      <div className="container">
      <Navigation />
      <HeroSection />
      <ProfileSection />
      <GraphSection />
      <ListGroup />
      <Footer />
      </div>
    </ExpenseProvider>
  )
}

export default App
