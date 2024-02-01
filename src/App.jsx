import './App.css';
import logo from './assets/logo.png';
import menu from './assets/menu.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function App() {
  return (
    <div className="App">
    <nav>
     <img src={logo} alt="logo" className='logo' />
      <img src={menu} alt="menu" className='menu' />
     </nav>
     <div className='section1'>
      <h1>Say hello to ReactJS</h1>
      <p>
      You will learn a Frontend framework to become a Ninja Developer.
      </p>
      <button>
        Awesome!
      </button>
     </div>
     <div className='cardsSection'>
      <div className="card">
          <img src={icon1} alt="illustration" />
          <h4 className="card-title">Declarative</h4>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="card">
          <img src={icon2} alt="illustration" />
          <h4 className="card-title">Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="card">
          <img src={icon3} alt="illustration" />
          <h4 className="card-title">Single-Way</h4>
          <p>A set of immutable values are passed to the components.</p>
        </div>

        <div className="card">
          <img src={icon4} alt="illustration" />
          <h4 className="card-title">JSX</h4>
          <p>Statically-typed, design to run on modern browsers.</p>
        </div>

     </div>
    </div>
  
  );
}

export default App;