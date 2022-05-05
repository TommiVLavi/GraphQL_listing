import logo from './logo.svg';
import './App.css';
import {
  useQuery,
  gql,
} from "@apollo/client";

function App() {
  const GET_COUNTRIES = gql
    `query GetCountries {
      countries{code},
      countries{name},
      countries{continent{name}}
    }`;

  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p className='App'>....LOADING....</p>;

  else if (error) return <h1 className='App'>Oh! Something went wrong.</h1>

  else return (
    <div className="App">
      <header className="App-header">
        <table>
          <tbody>
            <tr><th>CODE</th><th>COUNTRY</th><th>CONTINENT</th></tr>
            { data.countries.map((country, index) =>
              {
                return <tr key={index}>
                  <td>{country.code}</td>
                  <td>{country.name}</td>
                  <td>{country.continent.name}</td>
                </tr>;
              }
            )}
          </tbody>
        </table>  
      </header>
    </div>
  );
}

export default App;
