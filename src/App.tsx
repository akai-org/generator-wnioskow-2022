import { useEffect, useState } from 'react';
import './App.css';
import { ClubsResponse, DepartmentsResponse, fetcher, URLHandler } from './utils';
import { Form } from './components/Form/Form';

function App() {
  const [departments, setDepartments] = useState<string[]>([]);
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
      <Form departments={departments} scienceClubs={scienceClubs} />
    </div>
  );
}

export default App;
