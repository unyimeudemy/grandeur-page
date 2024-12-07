import {
  //   createBrowserRouter,
  //   RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  //   Link,
} from "react-router-dom";
import Home from "./pages/home";



function App() {
  return (
    <BrowserRouter basename="/">
      {/* <BrowserRouter basename=""> */}
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              {/* <Route path="business" element={<SingleBusiness/>} /> */}
              {/* <Route path="services" element={<Services />} /> */}
              {/* <Route path="myProfile" element={<MyProfile />} /> */}
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
