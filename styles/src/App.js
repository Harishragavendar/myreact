import logo from './logo.svg';
import './App.css';
import ListComponent from './components/ListComponent';
import List from './components/list';
import Listt from './components/Demo';
import Display from './components/Display';
import InputFileUpload from './components/Mui';
import IconLabelButtons from './components/Muiicon';
function App() {
  return (
    <div className="App">
        <List/>
        <Listt/>
        <ListComponent/>
        <Display/>
        <InputFileUpload/>
        <IconLabelButtons/>
    </div>
  );
}

export default App;
