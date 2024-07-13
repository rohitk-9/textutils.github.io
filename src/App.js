// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
      <Navbar /><br/>
      <div className='container'>
        <Textarea />
      </div>
    </>
  );
}

export default App;
