import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    background: #1D1D1D;
    padding:50px 5px 70px 5px; 
    color: #fff;

    @media (max-width: 800px) {
        padding:30px 0px 50px 0px; 
    }

    svg {
        transition: 0.5s;
        opacity:86%;
    }

    svg:hover {
        opacity:99%;
        cursor:pointer;
        transition: 0.5s;
    }

` 

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0px 45px 0px 45px; 
    width:1200px;
    flex-wrap: wrap;

    @media (max-width: 800px) {
        padding:0 30px 0px 30px; 
    }
    
`

export const About = styled.div`
    background: #1D1D1D;
    max-height:800px;
    padding-top:0px;
    display: flex;
    justify-content: center;
    width:100%;
    height:390px;

    @media (max-width: 800px) {
        
        height:300px;
    }

`
export const ContentAbout = styled.div`
    height:100%;
    min-height:500px;
    max-height:800px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap-reverse;
    justify-content: flex-start;
    padding:0px 0px 0px 45px; 
    width:1200px;

    @media (max-width: 800px) {
        margin-top:100px;
        height:600px;
        padding:0;
        margin:0;
        h2 {
          font-size:38px;
      } 
      
      img {
          width:300px;
          padding:30px;
      }
    }

`
export const SubTitle = styled.h4`
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;

    @media (max-width: 800px) {
        width:300px; 
        padding:0 0 0 30px;
      }
` 

export const Title = styled.h2`
    margin-top:10px;
    color: #fff;
    width:400px;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;

    @media (max-width: 800px) {
        width:360px; 
        padding:10px 0 10px 30px;
        margin: 0;
      }
`

export const Text = styled.h6`
    color: #9C9F9E;
    margin-top:40px;
    width:400px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    @media (max-width: 800px) {
        margin: 0;
        width:350px; 
        padding:0 0 0 30px;
        font-size: 18px;
      }
`
export const Titles = styled.div`
    height:100px;
` 
export const Bio = styled.div`
      padding-left:80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 430px;

    @media (max-width: 800px) {
        display: flex;
        padding:0;
      }

`
export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:950px;
    flex-wrap: wrap;
`
export const Img = styled.div`

    img {
        border-radius:3px;
    }

    @media (max-width: 800px) {
        padding:30px;
        margin-top:-200px;
    }
` 

export const CTA = styled.button`
    background:transparent;
    border: solid 2px;
    border-radius: 3px;
    border-color: #fff;
    color: #fff;
    padding: 10px 30px 10px 30px;
    width:201px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    transition: 0.5s;

    :hover {
        cursor: pointer;
        opacity:90%;
        transition: 0.5s;
    }
    
`

export const Social = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    svg {
        width:40px;
        height:40px;
        margin-right:30px;
        transition: 0.5s;
        opacity:80%;
        cursor:pointer;
    }

    svg:hover {
        transition: 0.5s;
        opacity:99%;
    }

    @media (max-width: 800px) {

        display: flex;
        padding: 0 0 30px 30px;
        svg {
            fill:#fff;
        }
        
    }

    @media (max-width: 800px) {

        margin-top:500px;
        padding-bottom:60px;
        
    }
    
`

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-items: center;
    margin-top:150px;
    width:100%;
    font-style: normal;
    
    h6 {
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        
    }
    

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    @media (max-width: 800px) {

        margin-top:400px;
        padding-bottom:60px;
        
    }
` 

export const EuMesmo = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color:#1D1D1D;
`
export const Copy = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color:#9C9F9E;
`