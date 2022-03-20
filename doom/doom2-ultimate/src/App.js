import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.whiteColor ? 'white' : 'black')};
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

function App() {
  return (
    <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
      <>
        <div style={{ color: 'black' }}>Test</div>
        <GlobalStyle whiteColor />
      </>
    </ThemeProvider>
  );
}

export default App;
