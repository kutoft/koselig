import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';

import logoPattern from "../../img/logo-pattern.png";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isValidated: false,
      shareSelected: 'RestEasy',
    }
  }


  static getDerivedStateFromProps = (props, state) => {
    if (props.location.state.shareSelected !== state.shareSelected) {
      return {
        shareSelected: props.location.state.shareSelected
      }
    }
    return null;
  }

  componentDidMount = () => {
    document.querySelectorAll('select').forEach(item => {
      this.setState({
        [item.name]: item.value,
      });
    })
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
        <div
          className="hero full-width-image margin-top-0 is-relative is-medium"
          style={{
            backgroundImage: `url(${logoPattern})`,
            backgroundPosition: `top left`,
            backgroundSize: 100,
            backgroundAttachment: `fixed`,
          }}
        >
          <div
            className="hero-body"
            style={{
              display: 'flex',
              height: '150px',
              lineHeight: '1',
              justifyContent: 'space-around',
              alignItems: 'left',
              flexDirection: 'column',
            }}
          >
            <h1
              className="is-size-3-mobile is-size-2-tablet has-text-weight-light"
              style={{
                color: 'white',
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              <span className="is-size-5-mobile is-size-4-tablet has-text-weight-bold is-block">Become A</span>
              Member
            </h1>
          </div>
          <div className="has-gradient-primary is-overlay has-transparentcy-75"></div>
        </div>
        <section className="section is-medium">
          <div className="columns">
            <div className="column is-8-desktop is-offset-2-desktop">
              <div className="content">
                <p className="subtitle">
                  Fill out the form below to submit a pickup request.
                </p>
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
                    <label className="label" htmlFor={'shareSize'}>
                      Select Your Share Size
                    </label>
                    <div className="control select is-fullwidth">
                      <select defaultValue={this.state.shareSelected}
                        className="input"
                        type={'select'}
                        name={'shareSize'}
                        onChange={this.handleChange}
                        id={'shareSize'}
                        required={true}
                      >
                        <option value="RestEasy">Rest Easy</option>
                        <option value="ProofPerfect">Proof Perfect</option>
                        <option value="KneadMore">Knead More</option>
                        <option value="TestRun">Test Run</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'pickupFrequency'}>
                      Select Your Pickup Frequency
                    </label>
                    <div className="control select is-fullwidth">
                      <select defaultValue={'OnePerMonth'}
                        className="input"
                        type={'select'}
                        name={'pickupFrequency'}
                        onChange={this.handleChange}
                        id={'pickupFrequency'}
                        required={true}
                      >
                        <option value="OnePerMonth">One Per Month</option>
                        <option value="TwoPerMonth">Two Per Month</option>
                        <option value="ThreePerMonth">Three Per Month</option>
                        <option value="FourPerMonth">Four Per Month</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'pickupLocation'}>
                      Select Your Pickup Location
                    </label>
                    <div className="control select is-fullwidth">
                      <select defaultValue={'StAnthonyChurch'}
                        className="input"
                        type={'select'}
                        name={'pickupLocation'}
                        onChange={this.handleChange}
                        id={'pickupLocation'}
                        required={true}
                      >
                        <option value="StAnthonyChurch">Saint Anthony Park Lurtheran Church</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'startDate'}>
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
                    <label className="label" htmlFor={'notes'}>
                      Notes
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'notes'}
                        onChange={this.handleChange}
                        id={'notes'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-secondary" type="submit">
                      Send Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
