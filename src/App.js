import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Schedule from './pages/Schedule';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/schedule" component={Schedule}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
