import './App.css';
import {Routes, Route} from "react-router-dom";
import Students from './pages/Students';
import Add from './pages/Add';
import Edit from './pages/Edit';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Students />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
