import logo from './logo.svg';
import './App.css';

function App() {
  let mylist = [
    {things: ("Learn React")},
    {things: ("Climb MT Everest")},
    {things: ("Run a Marathon")},
    {things: ("Feed the Dogs")},
    {things: ("Go Surfing")},
  ]
  return (
    <div className="App">
      <h1>Hello Dojo!!!</h1>
      <h2>Things I need to get done</h2>
      {
        mylist.map(list => {
          return <ul>
            <li>{list.things}</li>
          </ul>
        })
      }
    </div>
  )
}

export default App;
