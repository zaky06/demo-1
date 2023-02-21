import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import MyComponent from './components/main/main1';


function App() {
  return (
    <div>
        <Header/>
        {/* <MyComponent/> */}
        <Main/>
        <Footer/>
    </div>
    
  )
}

export default App;
