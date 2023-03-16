import logo from './logo.svg';
import './App.css';

function Header({title, num}) {
  return <h1>Hello World {num} {title}</h1>;
}

function App({title, num}) {
  return (
    <Header title={title} num={num}/>
  )
};

export default App;
