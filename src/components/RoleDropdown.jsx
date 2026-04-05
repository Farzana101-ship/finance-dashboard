// RoleDropdown.jsx
import React, { useState } from 'react';

const RoleDropdown = ({ onChange }) => {
  const [role, setRole] = useState('Viewer');

  const handleChange = (e) => {
    setRole(e.target.value);
    onChange(e.target.value);
  };

  return (
    <select value={role} onChange={handleChange}>
      <option value="Viewer">Viewer</option>
      <option value="Admin">Admin</option>
    </select>
  );
};

export default RoleDropdown;