import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NyTimesListView from "./components/NyTimesListView";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Navigate to="/list-view" />} />
        <Route path="/list-view" element={<NyTimesListView />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
