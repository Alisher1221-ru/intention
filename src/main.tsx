import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ChakraProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ChakraProvider>
);
