import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <Container id="home">
            <Content>
                <h1>
                    {/* <span>Passion</span><br/>
                    beats <br/>
                    <span>Impossible</span> */}
                    Hi,<br/>
                    <span>i am bobby</span><br/>
                </h1>
                <a href="#projects">explore</a>
            </Content>
            <ProfileImage>

            </ProfileImage>
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    min-height:100%;
    background:url('./assets/bg.jpg') center/cover no-repeat scroll;
    justify-content:center;
    align-item:center;
    flex:1;
    padding:2rem;
    padding-left:calc(5% + 2rem);
    overflow: hidden;
`
const Content = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:left;
    height:100%;
    h1{
        color:var(--primary-bg-clr);
        font-size:5rem;
        font-family:var(--secondary-fnt);
        margin:13rem 0 3.5rem;
        text-transform:capitalize;
        text-shadow:0px 4px 3px rgba(0,0,0,.4),
                    0px 8px 13px rgba(0,0,0,.1),
                    0px 18px 23px rgba(0,0,0,.1);
        position:relative;
        span{
            font-size:6rem;
            letter-spacing:.4rem;
            font-weight:600;
            text-transform:uppercase;
            margin-bottom:2.5rem;
        }
        :after{
            content:'';
            position:absolute;
            top:0;
            left:0;
            height:5rem;
            width:100%;
            background-color:rgba(--secondary-bg-clr);
            transform:rotate(45deg);
        }
    }
    a{
        text-decoration:none;
        text-align:center;
        outline:none;
        max-width:12rem;
        margin-top:1rem;
        background-image:linear-gradient(to right,#0b77bd,#00a3e4);
        ${'' /* background-color:var(--primary-bg-clr); */}
        color:var(--primary-bg-clr);
        box-shadow:0 20px 40px rgba(0,0,0,.21);
        ${'' /* border-radius:8px; */}
        ${'' /* border:1px solid var(--primary-fg-clr); */}
        font-size:2rem;
        text-transform:capitalize;
        font-weight:900;
        font-family:var(--primary-fnt);
        padding:.6rem 1rem;
        transition:.3s;
        :hover{
            box-shadow:0 45px 60px rgba(0,0,0,.16);
            transform:translate(1px,1px);
        }
        :focus{
            outline:none;
        }
    }
    @media screen and (max-width:600px){
        transform:translateY(-50px);
        h1{
            font-size:4rem;
            margin-top:30rem;
            span{
                font-size:5rem
            }
        }
    }
`
const ProfileImage = styled.div``


export default Home;
