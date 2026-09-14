import { useEffect, useState } from 'react'
import DoctorCard from './DoctorCard'

function Doctors() {
  const [doctors, setDoctors] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/doctors')
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data)
      })
      .catch((error) => {
        console.error('Error fetching doctors:', error)
      })
  }, [])

  const filteredDoctors = doctors.filter((doctor) => {
    const searchText = search.toLowerCase()

    return (
      doctor.name.toLowerCase().includes(searchText) ||
      doctor.specialty.toLowerCase().includes(searchText)
    )
  })

  return (
    <section id="doctors" className="doctors-section">
      <div className="section-heading">
        <p className="subtitle">OUR DOCTORS</p>

        <h2>Meet our specialists</h2>

        <p>
          Choose from experienced healthcare professionals and book
          an appointment with the right doctor.
        </p>
      </div>

      <div className="doctor-search">
        <input
          type="text"
          placeholder="Search doctors or specialties..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="doctors-grid">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            name={doctor.name}
            specialty={doctor.specialty}
            experience={doctor.experience}
          />
        ))}
      </div>
    </section>
  )
}

export default Doctors
