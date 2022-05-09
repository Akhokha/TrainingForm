import "./App.scss";
import PopUpMassage from "./components/ReusableComponents/Popup/PopUpMassage";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="container">
      <UserForm />
      <PopUpMassage />
    </div>
  );
}

export default App;
