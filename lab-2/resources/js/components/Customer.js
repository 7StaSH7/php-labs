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
              <p className="card-text">
                <b>Registration Date:</b>{' '}
                {new Date(userData.registration_date).toLocaleDateString('ru-Ru')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        {userData.addresses.map((address, idx) => {
          return (
            <div
              key={idx}
              className="card mt-3 me-3"
              style={{ width: '18rem', height: '26rem' }}
            >
              <div className="card-body">
                <h5 className="card-title">Address {idx + 1}</h5>
                <p className="card-text">
                  <b>Address:</b> {address.address}
                </p>
                <p className="card-text">
                  <b>City:</b> {address.city}
                </p>
                <p className="card-text">
                  <b>Street:</b> {address.street}
                </p>
                <p className="card-text">
                  <b>House:</b> {address.house}
                </p>
                <p className="card-text">
                  <b>Floor:</b> {address.floor}
                </p>
                <p className="card-text">
                  <b>Flat:</b> {address.flat}
                </p>
                <p className="card-text">
                  <b>Code:</b> {address.code}
                </p>
                <p className="card-text">
                  <b>Created At:</b>{' '}
                  {new Date(address.created_at).toLocaleString('ru-RU')}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Customer;
