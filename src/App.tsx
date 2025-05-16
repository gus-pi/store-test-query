import { Outlet } from 'react-router';
import NavBar from './components/NavBar';
import { Button } from './components/ui/button';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-row">
        <main className="flex flex-1 px-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
