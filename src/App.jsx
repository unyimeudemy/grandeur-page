import {
  //   createBrowserRouter,
  //   RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  //   Link,
} from "react-router-dom";
import Home from "./pages/home.jsx";



function App() {
  return (
    <BrowserRouter basename="/">
      {/* <BrowserRouter basename=""> */}
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
