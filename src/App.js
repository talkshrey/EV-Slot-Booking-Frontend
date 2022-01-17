import "./App.css";
import React, {useState} from "react";
import LoginSide from "./pages/Login/Login";
import SignInSide from "./pages/Signup/Signup";
import Review from "./pages/Review/Review";
import { Route, Routes , useNavigate} from "react-router";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Details from "./pages/CarDetails/Details";


function App() {

	const [token, setToken] = useState();

//   if(!token) {
//     return <LoginSide setToken={setToken} />
//   }

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
					<Route exact path='/login' element={<LoginSide />} />
					<Route path='/signup' element={<SignInSide />} />
					<Route path='/review' element={<Review />} />
					<Route exact path='/' element={<Landing />} />
					<Route exact path='/details' element={<Details />} />
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
