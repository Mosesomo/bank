import Billing from "./components/Billing"
import Businness from "./components/Businness"
import Cta from "./components/Cta"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import People from "./components/People"
import Stats from "./components/Stats"
import Stat from "./components/Stat"


const App = () => {
  return (
    <div className="w-[100%] max-h-full bg-gradient-to-r from-gray-950 to-gray-800  text-white p-9 font-serif">
      <Nav />
      <Hero />
      <Stats />
      <Businness />
      <Billing />
      <Card />
      <People />
      <Stat />
      <Cta />
      <Footer />
    </div>
  )
}

export default App