import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/query-client.config";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
