import { Suspense } from "react";
import logo from "./logo.svg";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/layout";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
