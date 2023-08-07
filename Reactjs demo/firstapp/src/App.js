// this is a root or first component
//component just a small view. start with capital letter
// component is a fxn in the end
//component contains JSX. Its a OOPS.

// import "./App.css";

const App = ()=>{
  const name = "VIPS"
  const mystyle = {color:'blue', backgroundColor:'cyan'}
  return <div>{name==='Amit'?}
  // {/* <h1 style={mystyle}>Hello {name}</h1> */}
  <h2>
    Its MERN
  </h2>
    <greeting myname = {name}></greeting> //JSX style to call fxn
  </div>
}
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
