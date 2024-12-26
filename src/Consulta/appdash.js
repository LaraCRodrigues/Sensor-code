import React, { useState } from 'react';
import './dash.css';
import './Principal.css';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { OverviewCards } from './components/OverviewCards';
import { ChartSection } from './components/ChartSection';
import { RecentOrders } from './components/RecentOrders';

function App() {
  const [colors, setColors] = useState({
    azul: 0,
    verde: 0,
    vermelho: 0,
    amarelo: 0
  });

  const addData = (color) => {
    setColors(prevColors => ({
      ...prevColors,
      [color]: prevColors[color] + 1
    }));
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="main-dashboard">
          <OverviewCards />
          <div className="dashboard-content">
            <ChartSection colors={colors} />
            <RecentOrders addData={addData} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
