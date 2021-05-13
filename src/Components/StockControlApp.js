import './StockControlApp.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Jumbotron from './Jumbotron/Jumbotron';
import MenuBar from './MenuBar/MenuBar';
import Dashboard from './Dashboards/DashboardMain';
import QuickLinks from './QuickLinks/QuickLinks';
import Interface from './Interface/Interface';

import Sales from './Pages/Sales/Sales';
import Suppliers from './Pages/Suppliers/Suppliers';
import Inventory from './Pages/Inventory/Inventory';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Jumbotron/>
        <MenuBar/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/inventory" component={Inventory}/>
          <Route path="/sales" component={Sales}/>
          <Route path="/suppliers" component={Suppliers}/>
        </Switch>
        <QuickLinks/>
        <Interface/>
      </Router>
    </div>
  );
}

export default App;