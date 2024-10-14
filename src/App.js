import logo from './logo.svg';
import './App.css';
import Studentdata from './Component/Studentdata';
import Student from './Classes/Student';



function App() {

  let jaya = new Student("female","DAV");
  let sree =  new Student("female","Joseph");
  let suji = new  Student("male","Joseph");
  let abhi =  new Student("male","DAV");
   abhi.age = 25;
   jaya.age=27;
   suji.calculateResult();
   console.log(abhi.age);
   console.log(jaya.age);

  return (
   <div className="App">
    <Studentdata name="sree"/>
    <Studentdata name="abhi"/>
    <Studentdata name="suji"/>
    <Studentdata name="jaya"/>
   </div>
  );
}

export default App;
