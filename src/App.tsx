import { Routes, Route, Link } from "react-router-dom";


interface ButtonProps {
  title: string,
  age: number, 
  name: string
}

function MyButton({ title }: { title: string; }) {
  return (
    <button onClick={() => alert("clicked")}>{title}</button>
  );
}

function MyButtonWProps({title, name, age}: ButtonProps) {
  return (
    <button>Title is {title}. My name is {name}, and I am {age} years old.</button>
  )
}

function Recipe({ drinkers }: { drinkers: number; }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

function SideBar({ nameOfSideBar }: { nameOfSideBar: string; }) {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">{nameOfSideBar}</h3>
      <div className="sidebar-links">
        <Link className="sidebar-link" to="/subtopic1">Recipe (SubTopic 1)</Link>
        <Link className="sidebar-link" to="/subtopic2">MyButtonProps (SubTopic 2)</Link>
        <Link className="sidebar-link" to="/subtopic3">SubTopic 3</Link>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/subtopic1" element={<Recipe drinkers={5} />} />
        <Route path="/subtopic2" element={<MyButtonWProps title="Learn this" name="Mark Zuckerburg" age={35}  />} />
      </Routes>
      <h1 className="">
        Pet Matcher 🐶🐱
      </h1>

      <p>Click below to see your pet</p>
      <MyButton title="Click" />
      <SideBar nameOfSideBar="Beautiful Sidebar"/>
    </div>
  );
}


