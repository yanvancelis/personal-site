import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Header, Content, ContentAbout, Copy, EuMesmo, About, Footer, SubTitle, Title, Box, Bio, Text, Img, CTA, Social, Titles } from '../styles'
import { Logo, Insta, Medium, In, Behance } from '../assets'

import Image from 'next/image'

export default function Home() {

  return (
    <>
      <Head>
        <title>Yan Vancelis</title>
      </Head>
      <Header>
        <Content>
          <Logo color="#fff" />
          <Link href="http://malito:yanvancelis@gmail.com">
              <CTA>Fale comigo</CTA>
          </Link>
          
        </Content>        
      </Header>
      <About>
        <ContentAbout>
          <Img>
            <Image src="/yan.png" width="500" height="500"/>
          </Img>
          <Bio>
            <Titles>
              <>
                <SubTitle>Olá pessoas!</SubTitle>
                  <Title>
                      Sou Yan Vancelis e sou Designer!
                  </Title>
              </>
            <Text>
                Eu trabalho com experiência do 
                usuário. Tenho experiência com UI
                Design e desenvolvimento web.
            </Text>
            </Titles>
            <Social>
              <Link href="http://instagram.com/yanvancelis" alt="Instagram">
                <Insta color="#1D1D1D"/>
              </Link>
              
              <Medium color="#1D1D1D"/>
              <In color="#1D1D1D"/>
            </Social>
          </Bio>
          
        </ContentAbout>
        
      </About>
      <Footer>
        <Content>
          <div>
            <Copy color="#9C9F9E" >Design e desenvolvimento by&nbsp;</Copy><EuMesmo> Eu mesmo</EuMesmo>
          </div>
          <div></div>
        </Content>
      </Footer>
    </>
  )
}
