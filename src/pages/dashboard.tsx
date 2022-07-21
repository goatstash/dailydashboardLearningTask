import Shell from '../components/AppShell';

import { WeatherContextProvider } from '../components/context/WeatherContext';

const Dashboard = () => {
  return (
    <>
      <WeatherContextProvider>
        <Shell />
      </WeatherContextProvider>
    </>
  );
};

export default Dashboard;
