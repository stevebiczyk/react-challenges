import css from './App.module.css';
// import Sidebar from "./components/Sidebar";
import NavBarSimple from "./components/NavBarSimple";

function App() {
  return (
    <div className={css.NavBarSimple}>
      {/* Add your components here */}
      <NavBarSimple />
    </div>
  );
}

export default App;