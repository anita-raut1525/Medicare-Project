import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specialties from './components/Specialties'
import Doctors from './components/Doctors'
import AppointmentForm from './components/AppointmentForm'
import Login from './components/Login'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Specialties />
      <Doctors />
      <AppointmentForm />
      <Login />
      <Footer />
    </div>
  )
}

export default App