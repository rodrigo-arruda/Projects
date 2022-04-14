import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Doom2 from '../src/components/Doom2';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: ${(props) => (props.whiteColor ? 'white' : 'black')};
    font-family: ${(props) => props.theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function App() {
  return (
    <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
      <>
        <div style={{ color: 'black' }}>
          <Doom2 />
        </div>
        <GlobalStyle whiteColor />
      </>
    </ThemeProvider>
  );
}

export default App;
