import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import LoginState from './components/LoginState.jsx';
import SignUp from './components/SignUp.jsx';

function App() {
	return (
		<>
			<Header />
			<main>
				{/* <SignUp /> */}
				<LoginState />
				{/* <Login /> */}
			</main>
		</>
	);
}

export default App;
