import "./App.css";
import LoginSide from "./pages/Login/Login";
import SignInSide from "./pages/Signup/Signup";

import Review from "./pages/Review/Review";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<LoginSide />} />
					<Route path="/signup" element={<SignInSide />} />
					<Route path="/review" element={<Review />} />
				</Routes>
			</div>
		</Router>
	);

	// {
		/* <Router>
<div>
  <Link to="/">Home</Link>
</div>
<div>
  <Link to="/signin">Blog Articles</Link>
</div>

<hr />

<Routes>
  <Route  path="/">
	<LoginSide />
  </Route>
  <Route path="/signin">
	< SignInSide />
  </Route>
</Routes>
</Router> */
	// }

	// </div>

	// );
	// }
	// 	);
}

export default App;
