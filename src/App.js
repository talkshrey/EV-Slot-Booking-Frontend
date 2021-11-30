import logo from "./logo.svg";
import "./App.css";
import LoginSide from "./pages/Login/Login";
import SignInSide from "./pages/Signup/Signup";

function App() {
	return (
		<div className="App">
			<LoginSide />
      {/* <SignInSide /> */}
		</div>
	);
}

export default App;
