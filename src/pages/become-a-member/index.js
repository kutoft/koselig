import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Become A Member</h1>
              <form
                name="MemberSignUp"
                method="post"
                action="/become-a-member/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Select Your Share Size
                  </label>
                  <div className="control">
                    <select
                      className="input"
                      type={'select'}
                      name={'shareSize'}
                      onChange={this.handleChange}
                      id={'shareSize'}
                      required={true}
                    >
                      <option value="" selected disabled hidden>Select</option>
                      <option value="RestEasy">Rest Easy</option>
                      <option value="ProofPerfect">Proof Perfect</option>
                      <option value="KneadMore">Knead More</option>
                      <option value="TestRun">Test Run</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Select Your Pickup Frequency
                  </label>
                  <div className="control">
                    <select
                      className="input"
                      type={'select'}
                      name={'pickupFrequency'}
                      onChange={this.handleChange}
                      id={'pickupFrequency'}
                      required={true}
                    >
                      <option value="" selected disabled hidden>Select</option>
                      <option value="OnePerMonth">One Per Month</option>
                      <option value="TwoPerMonth">Two Per Month</option>
                      <option value="ThreePerMonth">Three Per Month</option>
                      <option value="FourPerMonth">Four Per Month</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Select Your Pickup Frequency
                  </label>
                  <div className="control">
                    <select
                      className="input"
                      type={'select'}
                      name={'pickupLocation'}
                      onChange={this.handleChange}
                      id={'pickupLocation'}
                      required={true}
                    >
                      <option value="" selected disabled hidden>Select</option> 
                      <option value="StAnthonyChurch">Saint Anthony Park Lurtheran Church</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Select Your Start Date
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'date'}
                      name={'startDate'}
                      onChange={this.handleChange}
                      id={'startDate'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
