import React from 'react';
import styled from "styled-components";


const A =styled.a`
  color: royalblue;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  padding-left: 0.5rem;
  text-transform: uppercase;
  line-height: 1.5;
`

const Container = styled.div`
  
  padding-bottom: 4rem ;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-family: Roboto;
`



const Description = ({href, h1}) => {


    return (
        <Container style={styled.container}>
            <h1>{h1}</h1>
            <A target={'_blank'} style={styled.a} href={href}>Api</A>
        </Container>
    );
};

export default Description;