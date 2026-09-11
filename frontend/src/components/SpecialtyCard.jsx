function SpecialtyCard({ name, description }) {
  return (
    <div className="specialty-card">
      <div className="specialty-icon">🏥</div>

      <h3>{name}</h3>

      <p>{description}</p>

      <button>View Doctors</button>
    </div>
  )
}

export default SpecialtyCard
