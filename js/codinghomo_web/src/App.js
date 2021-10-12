import React from 'react';
import styled from 'styled-components';
import {Header,Home,Projects,Social,Contact} from './components/index.js';
const App = () => {
  return (
    <Container>
      <Header/>
      <Home/>
      <Projects/>
      <Social/>
      <Contact/>
    </Container>
  )
}
const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    overflow-x:hidden;
    flex-direction:column;
`

export default App;
