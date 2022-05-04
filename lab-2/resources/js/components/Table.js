import React, { useState, useEffect } from 'react';
import { useTable, useFilters, useSortBy, usePagination } from 'react-table';
import BTable from 'react-bootstrap/Table';
import Customer from './Customer';

export default function Table({ columns, data }) {
  const [filterInput, setFilterInput] = useState('');
  const [filterSwitch, setFilterSwitch] = useState('Email');
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    setPageSize(15);
  }, []);
  const handleFilterSwitch = e => {
    setFilterSwitch(e.target.innerText);
    if (e.target.innerText === 'Blocked') {
      setIsInputDisabled(true);
      setFilter('is_blocked', true);
    }
    if (e.target.innerText === 'Email') {
      setIsInputDisabled(false);
      setFilter('is_blocked', false);
    }
    if (e.target.innerText === 'Phone Number') {
      setIsInputDisabled(false);
      setFilter('is_blocked', false);
    }
    if (e.target.innerText === 'Surname') {
      setIsInputDisabled(false);
      setFilter('is_blocked', false);
    }
  };

  const handleFilterChange = e => {
    const value = e.target.value || '';
    setFilterInput(value);
    if (filterSwitch === 'Email') setFilter('email', value);

    if (filterSwitch === 'Phone Number') setFilter('phone_number', value);

    if (filterSwitch === 'Surname') setFilter('surname', value);
  };
  return (
    <>
      <div>
        <div className="input-group mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            value={filterInput}
            onChange={handleFilterChange}
            aria-label="Filter"
            aria-describedby="basic-addon1"
            disabled={isInputDisabled}
          />
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle w-100"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {filterSwitch}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li style={{ cursor: 'pointer' }}>
                <a className="dropdown-item" onClick={e => handleFilterSwitch(e)}>
                  Blocked
                </a>
              </li>
              <li style={{ cursor: 'pointer' }}>
                <a className="dropdown-item" onClick={e => handleFilterSwitch(e)}>
                  Email
                </a>
              </li>
              <li style={{ cursor: 'pointer' }}>
                <a className="dropdown-item" onClick={e => handleFilterSwitch(e)}>
                  Phone Number
                </a>
              </li>
              <li style={{ cursor: 'pointer' }}>
                <a className="dropdown-item" onClick={e => handleFilterSwitch(e)}>
                  Surname
                </a>
              </li>
            </ul>
          </div>
        </div>
        <BTable hover {...getTableProps()} className="mx-auto">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                style={{
                  textAlign: 'center',
                }}
              >
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      padding: '10px',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  style={{ cursor: 'pointer' }}
                  {...row.getRowProps()}
                  onClick={() => {
                    window.history.pushState(
                      { id: row.index + 1 },
                      undefined,
                      `customers/${row.index + 1}`
                    );
                    window.location.reload();
                  }}
                >
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </BTable>
        <div className="pagination justify-content-center align-items-center">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
        </div>
      </div>
    </>
  );
}
