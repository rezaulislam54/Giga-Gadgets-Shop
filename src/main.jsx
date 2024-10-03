import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import AuthContextProvider from './authContext/AuthContext.jsx'
import Routes from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={Routes} />
    </AuthContextProvider>
  </StrictMode>
);
