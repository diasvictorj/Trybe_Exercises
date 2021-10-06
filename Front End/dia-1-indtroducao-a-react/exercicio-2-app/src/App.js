import './App.css';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header className = 'header'/>
      <Content className = 'content'/>
      <Footer className = 'footer'/>
    </div>
  );
}

export default App;
