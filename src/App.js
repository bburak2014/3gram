 import './App.css';

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
     <Header/>
     <div className='row'>
     <div className='col-12'>
     <Body/>
     </div>
   
     </div>
    
     <Footer/> 
    </div>
  );
}

export default App;
