import { useState, useEffect } from "react";
import AppRouter from "./components/Router";
import { authService } from "./util/fbase";

function App() {
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		authService.onAuthStateChanged(user => {
			if (user) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setInit(true);
		});
	}, []);

	return (
		<>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}</>
	);
}

export default App;
