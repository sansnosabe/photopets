import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Modal from 'react-modal';
import { BrowserRouter } from "react-router-dom";
import { AuthProviderComponent } from "./context/AuthContext";

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProviderComponent>
				<App />
			</AuthProviderComponent>
		</BrowserRouter>
	</React.StrictMode>
);
