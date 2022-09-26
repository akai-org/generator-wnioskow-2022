import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetcher } from './utils/fetcher';
import { URLHandler } from './utils/consts';

function App() {
  const [departments, setDepartments] = useState<string[]>([]);

  const [scienceClubs, setScienceClubs] = useState<string[]>([]);

  useEffect(() => {
    const getDepartments = async () => {
      const departments = await fetcher(URLHandler.getDepartmentsUrl);
      setDepartments(departments);
    };

    const getScienceClubs = async () => {
      const scienceClubs = await fetcher(URLHandler.getClubsUrl);
      setScienceClubs(scienceClubs);
    };

    getDepartments().catch((err) => console.log(err));
    getScienceClubs().catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
