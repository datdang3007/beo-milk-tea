import { ThemeProvider } from "@mui/material";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { Order } from "./pages";
import theme from "./theme";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Order />}></Route>
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
