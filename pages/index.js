import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Header, Content, ContentAbout, Copy, EuMesmo, About, Footer, SubTitle, Title, Box, Bio, Text, Img, CTA, Social, Titles } from '../styles'
import {Logo, Instagram, Telegram, Medium, Behance, LinkedIn } from '../assets'
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
          <a href="https://t.me/yanvancelis"><CTA>Fale comigo</CTA></a>
              
          
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
                Eu trabalho com Experiência do 
                Usuário. Também tenho afinidades com
                UI Design e programação.
            </Text>
            </Titles>
            
            <Social>
                <a href="http://instagram.com/yanvancelis"><Instagram color="#1D1D1D"/></a>
                <a href="http://medium.com/@yanvancelis"><Medium color="#1D1D1D"/></a>
                <a href="http://behance.net/yanvancelis"><Behance color="#1D1D1D"/></a>
                <a href="https://www.linkedin.com/in/yan-vancelis-16b76b68"><LinkedIn color="#1D1D1D"/></a>
            </Social>

          </Bio>
          
        </ContentAbout>
        
      </About>
      <Footer>
        <Content>
          <div>
            <Copy color="#9C9F9E" >Design e desenvolvimento por&nbsp;</Copy><EuMesmo> Eu mesmo</EuMesmo>
          </div>
          <div></div>
        </Content>
      </Footer>
    </>
  )
}
