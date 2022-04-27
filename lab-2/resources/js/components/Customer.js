import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Customer({ props }) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`/api/customers/${props.id}`).then(data => {
      setUserData(data.data);
      setLoading(false);
    });
  }, []);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <div
        className="row align-items-start"
        style={{ marginTop: '150px', marginLeft: '428px', width: '18rem' }}
      >
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Customer</h5>
              <p className="card-text">
                <b>Name:</b> {userData.name}
              </p>
              <p className="card-text">
                <b>Suename:</b> {userData.surname}
              </p>
              <p className="card-text">
                <b>Email:</b> {userData.email}
              </p>
              <p className="card-text">
                <b>Phone Number:</b> {userData.phone_number}
              </p>
              <p className="card-text">
                <b>Block Status:</b> {userData.is_blocked ? 'Blocked' : 'Not Blocked'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 align-items-center">
        {userData.addresses.map((address, idx) => {
          return (
            <div className="col mt-2">
              <div className="card" style={{ width: '18rem', height: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">Address {idx + 1}</h5>
                  <p className="card-text">Address: {address.address}</p>
                  <p className="card-text">City: {address.city}</p>
                  <p className="card-text">Flat: {address.flat}</p>
                  <p className="card-text">
                    Created At: {new Date(address.created_at).toLocaleString('ru-RU')}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Customer;
