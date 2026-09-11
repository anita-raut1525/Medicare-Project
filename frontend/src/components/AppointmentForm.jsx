import { useState } from 'react'

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    doctor: '',
    date: '',
    reason: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('Appointment Data:', formData)

    alert('Appointment request submitted successfully!')
  }

  return (
    <section id="appointment" className="appointment-section">
      <div className="section-heading">
        <p className="subtitle">BOOK APPOINTMENT</p>

        <h2>Schedule your visit</h2>
        <p>
          Fill in your details and choose a doctor to request an appointment.
        </p>
      </div>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
        >
          <option value="">Select a doctor</option>
          <option value="Dr. Rahul">Dr. Rahul - Cardiologist</option>
          <option value="Dr. Priya Singh">
            Dr. Priya Singh - Dermatologist
          </option>
          <option value="Dr. Prisha Patel">
            Dr. Prisha Patel - General Physician
          </option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <textarea
          name="reason"
          placeholder="Reason for appointment"
          value={formData.reason}
          onChange={handleChange}
          rows="5"
        />

        <button type="submit">Book Appointment</button>
      </form>
    </section>
  )
}

export default AppointmentForm