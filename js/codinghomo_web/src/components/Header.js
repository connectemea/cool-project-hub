import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
// import WbSunnyIcon from '@material-ui/icons/WbSunny';

function Header() {
    const [menuState,setMenu] = useState(false);
    // const [theme,setTheme] = useState({
    //     fgclr:'black',
    //     bgclr:'white'
    // })
    const setState = ()=>menuState?setMenu(false):setMenu(true);
    // const changeTheme = async () =>{
    //     const rootOfDoc = document.documentElement.style
    //     rootOfDoc.setProperty("--secondary-fg-clr",`${theme.fgclr}`);
    //     rootOfDoc.setProperty("--secondary-bg-clr",`${theme.bgclr}`);
    //     await theme.bgclr === 'white'?setTheme({fgclr:'white',bgclr:'black'}):setTheme({fgclr:'black',bgclr:'white'});
    //     rootOfDoc.setProperty("--primary-fg-clr",`${theme.fgclr}`);
    //     rootOfDoc.setProperty("--primary-bg-clr",`${theme.bgclr}`);
    // }
    return (
        <Container >
            <BrandName href="#home">
                <h1>Bobby</h1>
            </BrandName>
            <ListIcon onClick={setState}/>
            <WebLinks state={menuState} >
                <a href="#home">Home</a>
                <a href="#projects">works</a>
                <a href="#contact">about</a>
                <a href="#contact">contact</a>
                {/* <a className="theme-button" onClick={changeTheme}><WbSunnyIcon/></a> */}
            </WebLinks>
        </Container>
    )
}
const Container = styled.div`
    background-color:rgba(0,0,0,.21);
    backdrop-filter:blur(15px);
    color:var(--primary-bg-clr);
    clip-path: circle(99.6% at 49% 0);
    border:.8px solid rgba(255,255,255,.2);
    border-top:none;
    border-left:none;
    overflow:hidden;
    position:fixed;
    top:1rem;
    left:50%;
    box-shadow:0 10px 30px rgba(0,0,0,.25);
    transform:translateX(-50%);
    z-index:3;
    display:flex;
    width:90%;
    border-radius:1.5rem;
    align-items:center;
    padding: 0 2rem;
    min-height:6rem;
    flex-wrap:wrap;
    @media screen and (max-width:600px){
        ${'' /* transform:translateX(0);
        top:0;
        left:0;
        width:100%;
        border-radius:0 0 1rem 1rem;
        padding:0; */}
        box-shadow:0 3px 10px rgba(0,0,0,.2);
        padding:0;
        width:90%;
    }
`
const BrandName = styled.div`
    flex:1;
    h1{
        font-size:2rem;
        text-transform:uppercase;
        font-weight:900;
        letter-spacing:.2rem;
        transition:.2s;
        cursor:pointer;
        :hover{
            opacity:.5;
        }
        @media screen and (max-width:600px){
            padding:2rem;
        }
    }
`
const ListIcon = styled(MenuIcon)`
    padding:0 1.5rem;
    &&{
        font-size:7rem;
        display:none;
        @media screen and (max-width:600px){
            display:inline-block;
        }
    }
`
const WebLinks = styled.div`
    display:flex;
    max-width:100%;
    flex-wrap:wrap;
    a{
        position:relative;
        font-size:2rem;
        font-weight:800;
        font-family:var(--third-fnt);
        text-shadow:0px 2px 3px rgba(0,0,0,.4),
                    0px 4px 13px rgba(0,0,0,.1),
                    0px 9px 23px rgba(0,0,0,.1);
        margin: 0 2rem;
        align-self:end;
        text-decoration:none;
        cursor:pointer;
        transition:.3s;
        text-transform:capitalize;
        color:var(--primary-bg-clr);
        :active{
            border-bottom:2px solid;
        }
        ::before{
            content:'';
            background-color:var(--primary-bg-clr);
            position:absolute;
            bottom:-5px;
            right:0;
            width:100%;
            height:2px;
            transform:scaleX(0);
            transition:.5s;
            transform-origin:left;

        }
        :hover::before{
            transform:scaleX(1);
        }
    }
    .theme-button{
        background-color:var(--primary-bg-clr);
        border-radius:8px;
        font-family:var(--primary-fnt);
        transform:translateY(-12px);
        padding:.6rem .8rem;
        :hover{
            border-bottom:none;
            background-color:var(--primary-fg-clr);
            color:var(--primary-bg-clr);
        }
        :focus{
            outline:none;
        }
    }
    @media screen and (max-width:600px){
        display:${props => (props.state ? "flex":"none")};
        width:100%;
        a{
            margin:0;
            width:100%;
            padding:.8rem 0;
            text-align:center;
            :hover{
                background-color:none;
                color:var(--primary-bg-clr);
            }
            ::before{
                background-color:transparent;
            }
        }

    }
`

export default Header
