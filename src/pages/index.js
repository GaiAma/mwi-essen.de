import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import '../styles/global'

const Container = styled.div`
  height: 94%;
  height: 94vh;
  width: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`

const LogoSvg = styled.svg`
  min-height: 100px;
  width: 100%;
`

const Title = styled.h1`
  color: #fff;
`

const ContactDetails = styled.div`
  color: #fff;
  margin-top: 1.5rem;
  & + & {
    margin-top: 0.8rem;
  }
`

const Index = () => (
  <React.Fragment>
    <SEO />
    <Container>
      <Main>
        <Logo />
        <Title>Mehrwert Immobilien</Title>
        <ContactDetails>
          <VerticalCenteredText>
            <PhoneIcon fill="#fff" height="20" />
            <span>0201.7494183</span>
          </VerticalCenteredText>

          <VerticalCenteredText>
            <EmailIcon fill="#fff" height="20" />
            <WhiteLink href="mailto:info@mwi-essen.de">
              info@mwi-essen.de
            </WhiteLink>
          </VerticalCenteredText>
        </ContactDetails>

        <Address>
          MEHR-WERT Immobilien GmbH & Co. KG
          <br />
          Alfredstraße 98
          <br />
          45131 Essen
        </Address>

        <Footer>
          <MetaLink to="/datenschutz">Datenschutz</MetaLink>
        </Footer>
      </Main>
    </Container>
  </React.Fragment>
)

export default Index

const VerticalCenteredText = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
`

const WhiteLink = styled.a`
  color: #fff;
  text-decoration: underline;
  :hover {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: underline;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

const MetaLink = styled(Link)`
  background: none;
  border: none;
  color: #fff;
  font-size: 0.8rem;
  :hover {
    color: rgba(255, 255, 255, 0.7);
  }
`

const Address = styled.div`
  margin-top: 2rem;
  color: #fff;
  font-size: 0.9rem;
`

const PhoneIcon = props => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
  </svg>
)

const EmailIcon = props => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z" />
  </svg>
)

const Logo = props => (
  <LogoSvg width="100%" viewBox="0 0 120 55" {...props}>
    <polygon
      fill="#949188"
      transform="translate(13.693221, 30.606656) rotate(15.000000) translate(-13.693221, -30.606656) "
      points="9.01444942 3.38480527 19.2890018 0.631747264 19.7213472 57.3511009 7.66509411 60.5815642"
    />
    <polygon
      fill="#949188"
      transform="translate(29.693221, 30.606656) scale(-1, 1) rotate(15.000000) translate(-29.693221, -30.606656) "
      points="25.0144494 3.38480527 35.2890018 0.631747264 35.7213472 57.3511009 23.6650941 60.5815642"
    />
    <polygon
      fill="#949188"
      transform="translate(44.693221, 30.606656) rotate(15.000000) translate(-44.693221, -30.606656) "
      points="40.0144494 3.38480527 50.2890018 0.631747264 50.7213472 57.3511009 38.6650941 60.5815642"
    />
    <polygon
      fill="#949188"
      transform="translate(60.693221, 30.606656) scale(-1, 1) rotate(15.000000) translate(-60.693221, -30.606656) "
      points="56.0144494 3.38480527 66.2890018 0.631747264 66.7213472 57.3511009 54.6650941 60.5815642"
    />
    <polygon
      fill="#949188"
      transform="translate(75.693221, 30.606656) rotate(15.000000) translate(-75.693221, -30.606656) "
      points="71.0144494 3.38480527 81.2890018 0.631747264 81.7213472 57.3511009 69.6650941 60.5815642"
    />
    <polygon
      fill="#DBDBDB"
      transform="translate(106.693221, 30.606656) rotate(15.000000) translate(-106.693221, -30.606656) "
      points="102.014449 3.38480527 112.289002 0.631747264 112.721347 57.3511009 100.665094 60.5815642"
    />
    <polygon
      fill="#949188"
      transform="translate(91.693221, 30.606656) scale(-1, 1) rotate(15.000000) translate(-91.693221, -30.606656) "
      points="87.0144494 3.38480527 97.2890018 0.631747264 97.7213472 57.3511009 85.6650941 60.5815642"
    />
  </LogoSvg>
)
