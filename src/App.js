// import logo from './logo.svg';/
import app from './App.css';
import nav from './nav.js';
import Header from './list/header.js'
import Todoitem from './list/Todoitem.js';
import Todo from "./list/Todo.js";
import {Footer} from "./list/Footer.js";
import Print from "./Print.js"

let obj=[
  {
    name:'viajy',
    ismute:true
  },
  {
    name:'pbkj',
    ismute:false
  }
]

 function App() {
 

  return (
   <>
    <Print name={obj.name}/>
   <Header/>
   <Footer/>
   <Todoitem/>
   <Todo/>
   
   </>
  );
}

export default App;
