import './App.css';
import Background from './components/Background';
import Paragraph from './components/Paragraph';
import Phone from './components/Phone';

function App() {
    return (
        <div className="App">
            <Background />
            <div className="responsive">
                <Paragraph />
                <Phone />
            </div>
        </div>
    );
}

export default App;
