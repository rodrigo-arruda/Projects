import { useState } from 'react';
import { Wrapper, Input, Button } from './FormTest.styles';

const FormTest = () => {
  const [name, setName] = useState('');
  const [isTrue, setIsTrue] = useState(false);
  const [lastName, setLastName] = useState('');

  const handleclick = () => {
    setIsTrue(true);
  };

  const handleclickClear = () => {
    setName('');
    setLastName('');
    setIsTrue(false);
  };

  return (
    <Wrapper>
      {isTrue ? (
        <div>
          <h1>
            {name} {lastName}
          </h1>
          <Button type="button" onClick={handleclickClear}>
            Clear
          </Button>
        </div>
      ) : (
        <div>
          <Input
            type="text"
            placeholder="firstname"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <Input
            type="text"
            placeholder="lastname"
            name="lastname"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <Button type="submit" onClick={handleclick}>
            Submit
          </Button>
        </div>
      )}
    </Wrapper>
  );
};

export default FormTest;
