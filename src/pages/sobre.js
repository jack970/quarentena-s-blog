import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import * as S from '../components/Post/style'

const About = () => (
  <Layout>
    <SEO title="Sobre" />
    <S.PostTitle style={{fontWeight: '200'}}>Sobre:</S.PostTitle>
    <S.MainContent>
      <p>Conteúdo da Página About</p>
      <Link to="/">Voltar para o início</Link>
    </S.MainContent>
  </Layout>
)

export default About
