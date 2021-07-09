import React from 'react';
import styled from 'styled-components'
import counter from "../store/counter";
import {observer} from "mobx-react-lite";


const ContainerButton = styled.div`
  height: 20rem;
  width: 20rem;
  border-radius: 2%;
  border: 2px solid royalblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

const Button = styled.button`
  margin: 1rem;
  border-radius: 50%;
  height: 8rem;
  width: 8rem;
  align-items: center;
`


const Buttons = () => {
    return (<div>
            {'counter: '+ counter.count}
            <ContainerButton>
                <Button onClick={()=>{counter.increment()}}>+</Button>
                <Button onClick={()=>{counter.decrement()}}>-</Button>
            </ContainerButton>
        </div>

    );
};

export default observer(Buttons);