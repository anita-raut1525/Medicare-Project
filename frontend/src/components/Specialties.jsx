import SpecialtyCard from './SpecialtyCard'

function Specialties() {
  const specialties = [
    {
      id: 1,
      name: 'Cardiology',
      description: 'Heart and cardiovascular care',
    },
    {
      id: 2,
      name: 'Dermatology',
      description: 'Skin, hair and nail care',
    },
    {
      id: 3,
      name: 'Neurology',
      description: 'Brain and nervous system care',
    },
    {
      id: 4,
      name: 'Pediatrics',
      description: 'Healthcare for children',
    },
    {
      id: 5,
      name: 'Orthopedics',
      description: 'Bone, joint and muscle care',
    },
    {
      id: 6,
      name: 'General Medicine',
      description: 'Primary healthcare services',
    },
  ]

  return (
    <section className="specialties-section">
      <div className="section-heading">
        <p className="subtitle">MEDICAL SPECIALTIES</p>

        <h2>Find care by specialty</h2>

        <p>
          Explore our medical specialties and find the right healthcare
          professional for your needs.
        </p>
      </div>

      <div className="specialties-grid">
        {specialties.map((specialty) => (
          <SpecialtyCard
            key={specialty.id}
            name={specialty.name}
            description={specialty.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Specialties
