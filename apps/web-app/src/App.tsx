import { Link } from 'react-router-dom';
import './App.css';
import { useQuery_USERS_IN_ROOM_QUERY } from './hooks/rooms';

function App() {
  const { data, loading, error } = useQuery_USERS_IN_ROOM_QUERY('fe0b7bf6-e409-425c-b9f0-29869455c712');
  console.log({ data, loading, error });

  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}

export default App;
