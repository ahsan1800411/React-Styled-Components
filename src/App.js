import './App.css';
import logo from './logo.svg';
import styled, {
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${({ variant }) =>
    variant === 'outlined' ? 'red' : 'green'};
  color: #fff;
`;
const FancyButtonStyled = styled(ButtonStyled)`
  border: 2px solid tomato;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
    background-color: orange;
  }
`;

const NewButtonStyled = styled(ButtonStyled).attrs((props) => ({
  type: 'submit',
}))`
  color: 'blue';
  &:hover {
    background-color: blue;
    cursor: pointer;
  }
`;

const rotate = keyframes`
from{
  transform:rotate(0deg)
}to {
  transform:rotate(360deg)
}
`;

const AnimatedLogo = styled.img`
  height: 30vmin;
  pointer-events: none;
  animation: ${rotate} infinite 10s linear;
`;

const theme = {
  dark: {
    primary: '#000',
    text: '#fff',
  },
  light: {
    primary: '#fff',
    text: '#000',
  },
};

const We = styled.button`
  color: ${({ theme }) => theme.dark.primary};
`;

const GlobalStyle = createGlobalStyle`
button{
  font-family:"Roboto"
}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='App'>
        <ButtonStyled variant='outlin'>Home</ButtonStyled>
        <hr />
        <FancyButtonStyled as='a'>Hii</FancyButtonStyled>
        <NewButtonStyled>Munna</NewButtonStyled>
        <AnimatedLogo src={logo} />
        <We>We are</We>
      </div>
    </ThemeProvider>
  );
}

export default App;
