function DoctorCard({ name, specialty, experience }) {
  return (
    <div className="doctor-card">
      <div className="doctor-image">
        👨‍⚕️
      </div>

      <div className="doctor-info">
        <h3>{name}</h3>
        <p>{specialty}</p>
        <span>{experience} years experience</span>

        <button>Book Appointment</button>
      </div>
    </div>
  )
}

export default DoctorCard
