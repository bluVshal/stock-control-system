import './StockControlApp.css';

import Jumbotron from './Jumbotron/Jumbotron';
import MenuBar from './MenuBar/MenuBar';
import Dashboard from './Dashboards/DashboardMain';
import QuickLinks from './QuickLinks/QuickLinks';
import Interface from './Interface/Interface';

function App() {
  return (
    <div className="app-container">
      <Jumbotron/>
      <MenuBar/>
      <Dashboard />
      <QuickLinks/>
      <Interface/>
    </div>
  );
}

export default App;