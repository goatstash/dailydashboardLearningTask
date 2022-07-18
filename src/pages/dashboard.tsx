import Shell from '../components/AppShell';
import UserForm from '../components/UserForm';
import { WeatherContextProvider } from '../components/context/WeatherContext';
import WeatherComponent from '../components/WeatherComponent';
const Dashboard = () => {
  return (
    <>
      <WeatherContextProvider>
        <UserForm />
        <WeatherComponent />
      </WeatherContextProvider>
      <Shell />
    </>
  );
};

export default Dashboard;
