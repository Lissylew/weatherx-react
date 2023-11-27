import React from "react";
import Weather from "./Weather";

import "./App.css";


function App() {
  return (
		<div className="App">
			<header className="App-header">
				<h1>Search City</h1>
				<Weather />
				<footer>Open source
					<a href="https://github.com/Lissylew/weatherx-react">Arlene Lewis-Lall</a>
				</footer>
			</header>
		</div>
	);
}

export default App;
