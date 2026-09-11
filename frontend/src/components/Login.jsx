import { useState } from 'react'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    console.log('Login Data:', formData)

    alert('Login form submitted!')
  }

  return (
    <section id="login" className="login-section">
      <div className="section-heading">
        <p className="subtitle">WELCOME BACK</p>

        <h2>Login to Medicare</h2>

        <p>
          Login to manage your appointments and healthcare information.
        </p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </section>
  )
}

export default Login
