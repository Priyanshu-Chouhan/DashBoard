// src/components/Filter.js
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Filter = ({ users, categories, onUserChange, onCategoryChange }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Select placeholder="Select User" style={{ width: 200, marginRight: 10 }} onChange={onUserChange}>
        {users.map(user => (
          <Option key={user} value={user}>
            {user}
          </Option>
        ))}
      </Select>
      <Select placeholder="Select Category" style={{ width: 200 }} onChange={onCategoryChange}>
        {categories.map(category => (
          <Option key={category} value={category}>
            {category}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default Filter;

