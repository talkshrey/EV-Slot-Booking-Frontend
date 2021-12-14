import "./App.css";
import LoginSide from "./pages/Login/Login";
import SignInSide from "./pages/Signup/Signup";

import Review from "./pages/Review/Review";
import { Route, Routes } from "react-router";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";

function App() {

	const theme = createTheme({
		palette: {
		  secondary: {
			main: '#E33E7F'
		  }
		}
	  });

	return (

		<MuiThemeProvider theme={theme}>
      
    
		<Router>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<LoginSide />} />
					<Route path="/signup" element={<SignInSide />} />
					<Route path="/review" element={<Review />} />
				</Routes>
			</div>
		</Router>
		</MuiThemeProvider>
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
