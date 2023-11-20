import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo"

//esempi di codice JS - le classi

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
const mycar = new Model("Ford", "Mustang");
document.getElementById("prove").innerHTML=mycar.show();

var hello = function() {
  return "<p>es1 - Hello World!</p>";
}
document.getElementById("prove").innerHTML+=hello();
//-------------------------------------------
var hello2 = () => {
  return "<p>es2 - Hello World!</p>";
}
document.getElementById("prove").innerHTML+=hello2();
//-------------------------------------------
var hello3 = () => "<p>es3 - Hello World!</p>";
document.getElementById("prove").innerHTML+=hello2();
//-------------------------------------------
var hello4 = (parametro) => "es4 - Hello" + parametro;
document.getElementById("prove").innerHTML+=hello4(" "+5);
//-------------------------------------------
var hello5 = parametro => "<p>es4 - Hello" + parametro + "</p>";
document.getElementById("prove").innerHTML+=hello5(" paolo");

// parole chiave: var, let, const
// var has a function scope, not a block scope.
// let has a block scope.
// const has a block scope.
var globale = "ciao";
function prova_globale(){
  let let_variable = 5;
}
// il valore della variabile globale è visibile sia all'esterno del metodo che all'interno
// il valore della variabile let_variable è visibile solo all'interno del metodo
function prova2(){
  var a = 10;
  for(let i=0;i<10;i++){
    a+=i;
  }
  // a+=i questo comando non si può fare perchè i non è più disponibile
}
// esempio metodi di array
const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

for(let i=0;i<myList.length;i++){
  document.getElementById("prove").innerHTML+="<p>"+myList[i].props.children+"</p>";
}
const vehicles = ["mustang","f-150","expedition"];
const [car,truck,suv] = vehicles;
document.getElementById("prove").innerHTML+="<p>"+car+"</p>";
const array1= [1,2,3];
const array2= [4,5,6];
const array12=[...array1,...array2];
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>sono stra figo</h1>

      </header>
    </div>
  );
}*/
function App() {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <Todo name="Eat"/>
        <Todo name="Sleep"/>
        <Todo name="Repeat"/ >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
