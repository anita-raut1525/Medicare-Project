import { useEffect, useState } from 'react'

function AppointmentForm() {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    console.log('AppointmentForm loaded')

    fetch('/api/doctors')
      .then((response) => {
        console.log('Response status:', response.status)
        return response.json()
      })
      .then((data) => {
        console.log('Doctors from backend:', data)
        setDoctors(data)
      })
      .catch((error) => {
        console.error('Doctor API error:', error)
      })
  }, [])

  return (
    <section id="appointment" className="appointment-section">
      <h2>Book Appointment</h2>

      <p>Doctors loaded: {doctors.length}</p>

      <select>
        <option value="">Select a doctor</option>

        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.name}>
            {doctor.name} - {doctor.specialty}
          </option>
        ))}
      </select>
    </section>
  )
}

export default AppointmentForm