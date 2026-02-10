import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainView from './pages/MainView';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-black text-white font-sans">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 overflow-y-auto">
          <Switch>
            <Route exact path="/" component={MainView} />
            <Route path="/admin" component={AdminDashboard} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
