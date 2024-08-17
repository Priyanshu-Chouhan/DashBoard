// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../redux/actions';
import TableView from './TableView';
import PieChartView from './PieChartView';
import Filter from './Filter';
import { Button } from 'antd';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state);
  const [view, setView] = useState('table');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleUserChange = user => {
    setFilteredData(data.filter(item => item.user === user));
  };

  const handleCategoryChange = category => {
    setFilteredData(data.filter(item => item.category === category));
  };

  const toggleView = () => {
    setView(view === 'table' ? 'chart' : 'table');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Filter
        users={[...new Set(data.map(item => item.user))]}
        categories={[...new Set(data.map(item => item.category))]}
        onUserChange={handleUserChange}
        onCategoryChange={handleCategoryChange}
      />
      <Button type="primary" onClick={toggleView}>
        Switch to {view === 'table' ? 'Pie Chart' : 'Table'} View
      </Button>
      {view === 'table' ? <TableView data={filteredData} /> : <PieChartView data={filteredData} />}
    </div>
  );
};

export default Dashboard;
