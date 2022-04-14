import { useState } from 'react';
import FormmTest from './FormTest';
import { Wrapper, ItemsWrapper, Title } from './Doom2.styles';
import MapFunction from './MapFunction';
import SimpleInput from './SimpleInput';
import SumComponent from './SumComponent';
import Counter from './Counter';
import Fetch from './Fetch';

const Doom2 = () => {
  const [inputTitle, setInputTitle] = useState('Input Title');

  return (
    <Wrapper>
      <ItemsWrapper>
        <Title>Forms Test</Title>
        <FormmTest />
      </ItemsWrapper>
      <ItemsWrapper>
        <MapFunction />
      </ItemsWrapper>
      <ItemsWrapper>
        <h1 style={{ color: 'black' }}>{inputTitle}</h1>
        <SimpleInput setTitle={setInputTitle} />
      </ItemsWrapper>
      <ItemsWrapper>
        <h1 style={{ color: 'black' }}>Sum component</h1>
        <SumComponent />
      </ItemsWrapper>
      <ItemsWrapper>
        <h1 style={{ color: 'black' }}>Counter</h1>
        <Counter />
      </ItemsWrapper>
      <ItemsWrapper>
        <h1 style={{ color: 'black' }}>Fetch</h1>
        <Fetch />
      </ItemsWrapper>
    </Wrapper>
  );
};

export default Doom2;
