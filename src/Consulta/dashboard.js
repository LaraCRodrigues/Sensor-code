import React, { useState } from 'react';
import { Sidebar } from './sidebardash';
// import { Header } from './headerdash';
import { ChartSection } from './paineldash';
import { RecentOrders } from './graficoehistorico';
import './dash.css';
import InteracaoDash from './apresentacaodash';
import ChartSectionTotal from './totaldash';
import Navbar from './navbar';




function Dashboard() {
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
    <>
    <InteracaoDash/>
    <Navbar />


    <div className="dashboard">
     
      <div className="main-content">
     
        <main className="main-dashboard">
        <ChartSectionTotal/>
         
          <div className="dashboard-content">
            <ChartSection colors={colors} />
            <RecentOrders addData={addData} />
          </div>
        </main>
      </div>
    </div>
    </>
  );
}


export default Dashboard;



