import React from 'react';
import styled from 'styled-components';

function Contact() {
    return (
        <Container>
            <Heading>
                contact
            </Heading>
            <Details>
            <p>
                <span>Bobby s</span><br/>
                central house , gramam<br/>
                puram (po) , 112233 (pin)<br/>
                city , district<br/>
                kerala (state),india(91)
            </p>

            </Details>
            <ContactForm>
                <label for="profile name" className="profileName">
                    name
                </label>
                <input 
                type="text" 
                name="profile name"
                required='true'/>
                <label for="message" className="contactMsg">
                    message
                </label>
                <textarea name="message"/>
                <a href="mailto:tinkerhubemea@gmail.com">send</a>
            </ContactForm>
            <p className="copyRight">All rights are reserved &copy;codinghomo</p>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    width:100%;
    padding:3rem 6rem;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    background-color:var(--primary-bg-clr);
    color:var(--primary-fg-clr);
    .copyRight{
        padding:2rem 0 0;
        text-align:center;
        width:100%;
        font-size:1.3rem;
        color:lightgray;
    }
    @media screen and (max-width:600px){
        justify-content:center;
    }
`
const Heading = styled.h1`
    z-index:2;
    width:100%;
    text-align:center;
    padding:3rem;
    font-size:4.5rem;
    font-weight: 600;
    text-shadow:2px 1px 0 #fff,3px 4px 0 rgba(0,0,0,0.15);
    text-transform:capitalize;
`
const Details = styled.div`
    flex:.5;
    display:flex;
    padding:1rem;
    color:var(--primary-fg-clr);
    z-index:2;
    p{
        text-align:left;
        font-size:2rem;
        font-weight:500;
        text-transform:capitalize;
    }
    span{
        font-size:2.3rem;
        font-weight:600;
    }
    @media screen and (max-width:600px){
        flex:1;
    }
`
const ContactForm = styled.div`
    z-index:1;
    display:flex;
    flex:.5;
    flex-direction:column;
    padding:1rem 3rem;
    label{
      font-size:2rem;
      font-weight:500;
      margin-top:1rem; 
      text-transform:capitalize;
    }
    input{
        flex:.7;
        background-color:transparent;
        color:var(--primary-fg-clr);
        padding:.5rem;
        font-size:2rem;
        border:none;
        border:1px solid var(--primary-fg-clr);
        transition:.4s ease-in-out;
        :focus-within{
            outline:none;
            border-width:2px;
            box-shadow:0 3px 15px rgba(0,0,0,.3);
        }
    }
    textarea{
        font-size:1.8rem;
        padding:.5rem;
        border:1px solid var(--primary-fg-clr);
        resize:none;
        outline:none;
        transition:.4s ease-in-out;
        :focus-within{
            outline:none;
            border-width:2px;
            box-shadow:0 4px 20px rgba(0,0,0,.3);
        }
    }
    a{
        text-decoration:none;
        text-align:center;
        outline:none;
        max-width:7rem;
        margin-top:1.5rem;
        background-color:var(--primary-bg-clr);
        color:var(--primary-fg-clr);
        border-radius:8px;
        border:1px solid var(--primary-fg-clr);
        font-size:1.7rem;
        text-transform:capitalize;
        font-weight:700;
        font-family:var(--primary-fnt);
        padding:.4rem .6rem;
        transition:.3s;
        :hover{
            box-shadow:0 4px 20px rgba(0,0,0,.21);
            background-color:var(--primary-fg-clr);
            color:var(--primary-bg-clr);
            transform:translate(2px,2px);
        }
        :focus{
            outline:none;
        }
`
export default Contact;
