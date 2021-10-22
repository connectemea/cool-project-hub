import React from 'react';
import styled from 'styled-components';
import Project from './Project';

function Projects() {
    const ProjectContent = [
        {
            heading:"tic-tac-toe",
            content:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.",
            image:"https://miro.medium.com/max/2512/1*gYYWXxLr7k4_RlIwkM1Bnw.png"
        },{
            heading:"drum-kit",
            content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.",
            image:"data:image/png;base64,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"
        },{
            heading:"wheater-app",
            content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
            image:"https://raw.githubusercontent.com/alexkowsik/react-weather-app/master/src/images/screenshot.png"
        },{
            heading:"chat-app",
            content:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
            image:"https://camo.githubusercontent.com/63fde2a74e36eaf1da61a78b79477c5b0447a84026d48bc834d59f93e255b64e/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f626b374f4f6d5f724444503854674b4b334b596a356c45564263344670746b57426c476365365f70526a426a32544d54535144366a67546478795530767149333041616163536e745575687a6b696c7470685f6a4d4a5949346255726a4e334156636f7944702d48433061522d69585a5f7a6f4c685239636665493967646966636e507038546c5270513d77323534382d68313331382d6e6f"
        },{
            heading:"blog-app",
            content:"making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            image:"https://www.chriscrewdson.co.uk/wp-content/uploads/2017/07/codeigniter-blog-768x576.jpg"
        }
    ]
    return (
        <Container id="projects">
            <Heading>
                Projects
            </Heading>
            <Content>
                {
                    ProjectContent.map((content)=>(
                        <Project 
                        tittle = {content.heading}
                        content = {content.content}
                        imageUrl = {content.image}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}
const Container = styled.div`
    padding:2rem 3rem;
    background-color:var(--primary-bg-clr);
    color:var(--primary-fg-clr);
    position:relative;
    ::before{
        content:'';
        z-index:0;
        height:50rem;
        width:50rem;
        position:absolute;
        left:-25rem;
        top:0;
        border-radius:50%;
        background-image:linear-gradient(to right,#0b77bd,#00a3e4);
        animation:2s infinite alternate bouncing;
        box-shadow:0 8px 20px rgba(0,0,0,.18);
    }
    ::after{
        content:'';
        z-index:0;
        height:50rem;
        width:60rem;
        position:absolute;
        right:-25rem;
        top:40%;
        border-radius:50%;
        animation:2s infinite alternate bouncing;
        box-shadow:0 8px 20px rgba(0,0,0,.18);
        background-image:linear-gradient(to right,#00a3e4,#0b77bd);
    }
    @keyframes bouncing{
        from{
            transform:translateY(0px);
        }
        to{
            transform:translateY(-30px);
        }
    }
    @media screen and (max-width:600px){
        padding:1rem;
        ::before{
            left:-33rem;
            top:2rem;
        }
        ::after{
            right:-40rem;
        }
    }
`
const Heading = styled.h1`
    z-index:2;
    text-align:center;
    padding:3.8rem 3rem 3rem;
    font-size:4.5rem;
    font-weight: 600;
    text-shadow:2px 1px 0 #fff,3px 4px 0 rgba(0,0,0,0.15);
    text-transform:capitalize;
    @media screen and (max-width:600px){

    }
`
const Content = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;

`
export default Projects;
