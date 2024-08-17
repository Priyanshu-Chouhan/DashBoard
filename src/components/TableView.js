// src/components/TableView.js
import React from 'react';
import { Table } from 'antd';

const TableView = ({ data }) => {
  const columns = [
    { title: 'User', dataIndex: 'user', key: 'user' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Activity', dataIndex: 'activity', key: 'activity' },
  ];

  return <Table dataSource={data} columns={columns} rowKey="id" />;
};

export default TableView;
