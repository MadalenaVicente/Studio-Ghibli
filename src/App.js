import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Film } from './pages/Film';
import { Home } from './pages/Home';
import { Header } from './componetes/Header';
import './styles/global.scss'

function App() {
  return ( 

<>
<BrowserRouter>
<Header/>
   <Routes>
     <Route index path="/" element={<Home />} />
     <Route path='film/:id' element={<Film />} />
   </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
