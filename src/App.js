import { useState } from 'react';
import random from 'lodash/random';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function App() {

  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(random(0, 100, false));
  };

  return (
    <Container style={{ paddingLeft: '40%', paddingTop: '20%' }}>
      <h4>Random Number: {number}</h4>
      <Button onClick={handleClick} variant='contained'>Generate</Button>
    </Container>
  );
}

export default App;
