import { useState } from 'react'

const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({
    type: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!web3FormsKey) {
      setStatus({
        type: 'error',
        message: 'Contact form is not configured yet. Add the Web3Forms access key to enable it.',
      })
      return
    }

    setIsSubmitting(true)
    setStatus({
      type: '',
      message: '',
    })

    const payload = new FormData()
    payload.append('access_key', web3FormsKey)
    payload.append('from_name', 'Sabarish PV Portfolio')
    payload.append('name', formData.name)
    payload.append('email', formData.email)
    payload.append('subject', formData.subject)
    payload.append('message', formData.message)
    payload.append('botcheck', '')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      })

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.message || 'Unable to send message right now.')
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully. I will get it in my inbox.',
      })
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact">
      <div className="contact-layout">
        <div className="section-heading fade-in">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let&apos;s build something useful together.</h2>
          <p className="section-copy">
            I&apos;m actively looking for internships, entry-level roles, and good teams where
            I can contribute and grow quickly.
          </p>

          <div className="contact-points">
            <a href="mailto:sabarishpv1112@gmail.com">sabarishpv1112@gmail.com</a>
            <a href="tel:+919597493193">+91 95974 93193</a>
            <span>Chennai, Tamil Nadu, India</span>
          </div>
        </div>

        <form className="contact-form fade-in" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label className="form-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </label>
          </div>

          <label className="form-field">
            <span>Subject</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project, internship, or collaboration"
              required
            />
          </label>

          <label className="form-field">
            <span>Message</span>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me a bit about what you're looking for"
              required
            />
          </label>

          <input
            type="checkbox"
            name="botcheck"
            className="hidden-botcheck"
            tabIndex="-1"
            autoComplete="off"
          />

          {status.message ? (
            <p className={`form-status ${status.type === 'success' ? 'success' : 'error'}`}>
              {status.message}
            </p>
          ) : null}

          <button type="submit" className="btn-primary submit-button">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
