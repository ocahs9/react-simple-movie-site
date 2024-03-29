import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App()
{ //url 변수명은 중복되어서는 안됨
  return (
    <Router basename= {process.env.PUBLIC_URL} > 
      <Routes >
        <Route path={`/hello`} element={<h1>Hello~</h1>}>
        </Route>
        <Route path={`/movie/:id/:idd`} element={<Detail/>}> 
        </Route>
        <Route path={`/`} element={<Home/>}> 
        </Route>
      </Routes> 
    </Router>
  );
}
export default App;
