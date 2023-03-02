import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { ContextProvider } from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <ContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ContextProvider>
    </ChakraProvider>
  </BrowserRouter>
);
