import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Social() {
    return (
        <Container id="contact">
            <a href="https://www.facebook.com/"><FbIcon /></a>
            <a href="https://www.instagram.com/aseelkp/"><InstaIcon /></a>
            <a href="https://twitter.com/aseelkp1?lang=en"><TwiIcon /></a>
            <a href="https://github.com/aseelkp"><GitIcon /></a>
            <a href="https://www.linkedin.com/in/"><LnIcon /></a>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    padding:3rem 10rem;
    background-color:var(--primary-bg-clr);
    color:var(--primary-fg-clr);
    position:relative;
    ::before{
        content:'';
        z-index:0;
        height:60rem;
        width:60rem;
        position:absolute;
        left:-35rem;
        top:-6rem;
        border-radius:50%;
        animation:2s infinite alternate bouncing;
        box-shadow:0 8px 20px rgba(0,0,0,.18);
        background-image:linear-gradient(to right,#0b77bd,#00a3e4);
    }
    a{
        z-index:3;
    }
    @keyframes bouncing{
        from{
            transform:translateY(0px);
        }
        to{
            transform:translateY(-6px);
        }
    }
    @media screen and (max-width:600px){
        padding:3rem;
        ::before{
            left:-45rem;
        }
    }
`
const getIcon = ({color})=>`
    &&{
        z-index:1;
        font-size:4rem;
        color:var(--primary-fg-clr);
        transition:.5s ease-in-out;
        :hover{
            transform:translateY(-5px);
            color:${color};
        }
    }
`
const FbIcon = styled(FacebookIcon)`
    ${getIcon({color:"blue"})};
`
const InstaIcon = styled(InstagramIcon)`
        ${getIcon({color:"pink"})};
    }
`
const TwiIcon = styled(TwitterIcon)`
        ${getIcon({color:"skyblue"})};
    }
`
const GitIcon = styled(GitHubIcon)`
        ${getIcon({color:"darkgray"})};
    }
`
const LnIcon = styled(LinkedInIcon)`
        ${getIcon({color:"blue"})};
    }
`
export default Social;
