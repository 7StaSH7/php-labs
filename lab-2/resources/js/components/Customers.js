import React, { useState, useEffect, useMemo } from 'react';

import axios from 'axios';
import Table from './Table';

function Customers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios.get('/api/customers').then(data => setCustomers(data.data));
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: 'Customers',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Surname',
            accessor: 'surname',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Phone number',
            accessor: 'phone_number',
          },
          {
            Header: 'Registration Date',
            accessor: 'registration_date',
            Cell: ({ cell: { value } }) => {
              return <>{new Date(value).toLocaleDateString('ru-RU')}</>;
            },
          },
          {
            Header: 'Blocked',
            accessor: 'is_blocked',
            Cell: ({ cell: { value } }) => {
              return <>{value ? 'Blocked' : 'Not blocked'}</>;
            },
          },
        ],
      },
    ],

    []
  );
  return (
    <div className="container">
      <Table columns={columns} data={customers} />
    </div>
  );
}

export default Customers;
