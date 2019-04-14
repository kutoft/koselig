import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import HeroTitle from '../components/HeroTitle'
import Faq from '../components/Faq'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/pro-light-svg-icons'

import logoPattern from "../img/logo-pattern.png";
import dotPattern from "../img/dot-pattern.png";
import dotPatternDark from "../img/dot-pattern-dark.png";
import breadBg from "../img/bread-bg.jpg";
import bread1 from "../img/bread-1.jpg";
import bread2 from "../img/bread-2.jpg";
import bread3 from "../img/bread-3.jpg";
import bread4 from "../img/bread-4.jpg";
import bread5 from "../img/bread-5.jpg";
import bread6 from "../img/bread-6.jpg";
import bread7 from "../img/bread-7.jpg";
import bread8 from "../img/bread-8.jpg";

import bread10 from "../img/bread-10.jpg";


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
}) => (
  <div>
    <div
      className="hero full-width-image margin-top-0 is-relative is-large"
      style={{
        backgroundImage: `url(${bread10})`,
        backgroundPosition: `top left`,
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
          <span className="is-size-5-mobile is-size-4-tablet has-text-weight-bold is-block">Baked With</span>
          <HeroTitle titles={['Community', 'Tradition', 'Love', 'Family', 'Warmth', 'Happiness', 'Community']}/>
        </h1>
      </div>
      <div className="has-gradient-primary is-overlay has-transparentcy-75"></div>
    </div>
    <section id="about" >
      <div className="container">
        <div
          className="section"
          style={{
            backgroundImage: `url(${breadBg})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
          }}
        >
          <div className="columns is-centered">
            <div className="column is-10-desktop">
              <div className="content">
                <div className="columns">
                  <div className="column is-6">
                    <div className="content">
                      <div className="tile">
                        <h1 className="title is-uppercase is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-weight-light">
                          <span className="is-size-5-mobile is-size-4-tablet is-block has-text-weight-bold">Bringing People<br/> Together With</span>
                          Bread
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div
                    className="column is-6"
                    style={{
                      background: 'rgba(255, 255, 255, 0.75)',
                    }}
                  >
                    <div className="content about-description is-size-6">
                      <p>Koselig Bread is a community supported bakery that provides weekly pickups of fresh baked bread of our members.</p>
                      <p>Our fresh baked bread harkens back to a simpler time when neighbors gathered together and you could trust where your food came from. We bring a modern take on classic recipes that we know your family will love.</p>
                      <p>Koselig is a Norwegian word that translates most simply to “cozy,” but more than anything else koselig is a feeling of intimacy, warmth, happiness, and being content. We believe that the concept of koselig should be applied to every aspect of our lives in our homes and our community. The sharing of bread appeals to the principles of koselig that we want to bring to the Saint Anthony Park Community.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="membership" className="has-text-centered has-text-white">
      <div className="columns is-multiline">
        <div className="column is-6-tablet is-3-desktop is-relative"
          style={{
            backgroundImage: `url(${
              bread1
            })`,
            backgroundPosition: `center`,
            backgroundSize: 'cover',
          }}
        >
          <div className="content is-relative has-zindex-1">
            <p className="membership-number badge is-size-3">1</p>
            <h3 className="membership-title has-text-white">Become A Member</h3>
            <p className="membership-description">Select a package size and frequency that fits your families needs.</p>
          </div>
          <div className="has-gradient-dark is-overlay has-transparentcy-75"></div>
        </div>
        <div className="column is-6-tablet is-3-desktop is-relative"
          style={{
            backgroundImage: `url(${
              bread2
            })`,
            backgroundPosition: `center`,
            backgroundSize: 'cover',
          }}
        >
          <div className="content is-relative has-zindex-1">
            <p className="membership-number badge is-size-3">2</p>
            <h3 className="membership-title has-text-white">Purchase</h3>
            <p className="membership-description">Pay when you schedule a pick up. Purchase more and save.</p>
          </div>
          <div className="has-gradient-dark is-overlay has-transparentcy-75"></div>
        </div>
        <div className="column is-6-tablet is-3-desktop is-relative"
          style={{
            backgroundImage: `url(${
              bread3
            })`,
            backgroundPosition: `center`,
            backgroundSize: 'cover',
          }}
        >
          <div className="content is-relative has-zindex-1">
            <p className="membership-number badge is-size-3">3</p>
            <h3 className="membership-title has-text-white">Pickup</h3>
            <p className="membership-description">Select a pickup location and time.</p>
          </div>
          <div className="has-gradient-dark is-overlay has-transparentcy-75"></div>
        </div>
        <div className="column is-6-tablet is-3-desktop is-relative"
          style={{
            backgroundImage: `url(${
              bread4
            })`,
            backgroundPosition: `center`,
            backgroundSize: 'cover',
          }}
        >
          <div className="content is-relative has-zindex-1">
            <p className="membership-number badge is-size-3">4</p>
            <h3 className="membership-title has-text-white">Enjoy</h3>
            <p className="membership-description">Each week we offer unique home baked bread your family will be sure to love.</p>
          </div>
          <div className="has-gradient-dark is-overlay has-transparentcy-75"></div>
        </div>
      </div>
    </section>
    <section
      id="shares"
      style={{
        backgroundImage: 'url(' + logoPattern + ')',
        backgroundSize: 100,
      }}
    >
      <div className="container">
        <div className="section is-medium">
          <div className="columns">
            <div className="column is-10-desktop is-offset-1-desktop">
              <div className="content">
                <div className="columns is-gapless">
                  <div className="column is-4 is-relative share">
                    <div className="content is-relative has-zindex-1">
                      <h3 className="share-title">Rest Easy</h3>
                      <div
                        className="share-dots"
                        style={{
                          backgroundImage: `url(${dotPattern})`,
                        }}
                      ></div>
                      <ul className="share-details">
                        <li className="share-detail"><span className="share-detail-left">1</span> Large Loaf</li>
                        <li className="share-detail"><span className="share-detail-left">10</span> Pickup Weeks</li>
                        <li className="share-detail"><span className="share-detail-left"><FontAwesomeIcon icon={faStar} /></span> Perfect For Families</li>
                      </ul>
                      <p className="share-price"><span className="share-price-pre">$</span>60 <span className="share-price-share">/ Share</span></p>
                      <Link className="button is-secondary is-fullwidth" to="/#">Select Share</Link>
                    </div>
                    <div className="has-gradient-light is-overlay"></div>
                  </div>
                  <div className="column is-4 is-relative share">
                    <div className="content has-text-white is-relative has-zindex-1">
                      <h3 className="share-title has-text-white">Proof Perfect</h3>
                      <div
                        className="share-dots"
                        style={{
                          backgroundImage: `url(${dotPatternDark})`,
                        }}
                      ></div>
                      <ul className="share-details">
                        <li className="share-detail"><span className="share-detail-left">1</span> Large Loaf</li>
                        <li className="share-detail"><span className="share-detail-left">1</span> Small Item</li>
                        <li className="share-detail"><span className="share-detail-left">10</span> Pickup Weeks</li>
                        <li className="share-detail"><span className="share-detail-left"><FontAwesomeIcon icon={faStar} /></span> Perfect For Families</li>
                      </ul>
                      <p className="share-price"><span className="share-price-pre">$</span>80 <span className="share-price-share">/ Share</span></p>
                      <Link className="button is-secondary is-fullwidth" to="/#">Select Share</Link>
                    </div>
                    <div className="has-gradient-primary is-overlay"></div>
                  </div>
                  <div className="column is-4 is-relative share">
                    <div className="content is-relative has-zindex-1">
                      <h3 className="share-title">Knead More</h3>
                      <div
                        className="share-dots"
                        style={{
                          backgroundImage: `url(${dotPattern})`,
                        }}
                      ></div>
                      <ul className="share-details">
                        <li className="share-detail"><span className="share-detail-left">2</span> Large Loaf</li>
                        <li className="share-detail"><span className="share-detail-left">1</span> Small Item</li>
                        <li className="share-detail"><span className="share-detail-left">10</span> Pickup Weeks</li>
                        <li className="share-detail"><span className="share-detail-left"><FontAwesomeIcon icon={faStar} /></span> Perfect For Families</li>
                      </ul>
                      <p className="share-price"><span className="share-price-pre">$</span>120 <span className="share-price-share">/ Share</span></p>
                      <Link className="button is-secondary is-fullwidth" to="/#">Select Share</Link>
                    </div>
                    <div className="has-gradient-light is-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="faqs">
      <div className="container">
        <div className="section is-medium">
          <div className="columns">
            <div className="column is-10-desktop is-offset-1-desktop">
              <div className="content">
                <Faq
                  question="Hello World"
                  answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."
                  ></Faq>
                  <Faq
                    question="Hello World"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."
                  ></Faq>
                  <Faq
                    question="Hello World"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."
                  ></Faq>
                  <Faq
                    question="Hello World"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."
                  ></Faq>
                  <Faq
                    question="Hello World"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."
                  ></Faq>
                  <Faq
                    question="Hello World"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."
                  ></Faq>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="gallery">
      <div className="tile is-ancestor">
        <div className="tile">
          <div className="tile is-vertical is-2">
            <div className="tile is-parent">
              <div className="tile is-child">
                <figure className="image is-1by1">
                  <img src={bread1} alt="image" />
                </figure>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child">
                <figure className="image is-1by1">
                  <img src={bread2} alt="image" />
                </figure>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child">
                <figure className="image is-1by1">
                  <img src={bread3} alt="image" />
                </figure>
              </div>
            </div>
          </div>
          <div className="tile is-vertical is-4">
            <div className="tile is-parent">
              <div className="tile is-child">
                <figure className="image is-1by1">
                  <img src={bread4} alt="image" />
                </figure>
              </div>
            </div>
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child">
                  <figure className="image is-1by1">
                    <img src={bread5} alt="image" />
                  </figure>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child">
                  <figure className="image is-1by1">
                    <img src={bread6} alt="image" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-vertical is-4">
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child">
                  <figure className="image is-1by1">
                    <img src={bread7} alt="image" />
                  </figure>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child">
                  <figure className="image is-1by1">
                    <img src={bread8} alt="image" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child">
                <figure className="image is-1by1">
                  <img src={bread1} alt="image" />
                </figure>
              </div>
            </div>
          </div>
          <div className="tile is-vertical is-2">
            <div className="tile is-parent">
              <div className="tile is-child">
                <figure className="image is-1by1">
                  <img src={bread2} alt="image" />
                </figure>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child">
                <figure className="image is-1by1">
                  <img src={bread3} alt="image" />
                </figure>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child">
                <figure className="image is-1by1">
                  <img src={bread4} alt="image" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        pretitle={frontmatter.pretitle}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
