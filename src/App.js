import {useState} from 'react';
import './App.css';
import Header from './Header';
import List from './List'

const URL = 'http://localhost/todo/';

function App() {
  const [searchCriteria,setSearchCriteria] = useState(null);

  function search(criteria) {
    setSearchCriteria(criteria);
  }

  return (
    <>
      <Header search={search} />
      <List URL={URL} criteria={searchCriteria} />
    </>
  );
}

export default App;
