import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ClubsResponse, DepartmentsResponse, fetcher, URLHandler } from './utils';

function App() {
  // TODO: pass departments to Form
  const [departments, setDepartments] = useState<string[]>([]);

  // TODO: pass scienceClubs to Form
  const [scienceClubs, setScienceClubs] = useState<string[]>([]);

  useEffect(() => {
    const getDepartments = async () => {
      const departmentsResponse = await fetcher<DepartmentsResponse>(URLHandler.getDepartmentsUrl);
      setDepartments(departmentsResponse.departments);
    };

    const getScienceClubs = async () => {
      const scienceClubsResponse = await fetcher<ClubsResponse>(URLHandler.getClubsUrl);
      setScienceClubs(scienceClubsResponse.clubs);
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
