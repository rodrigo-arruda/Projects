import { useEffect, useState } from 'react';

const url = 'https://jsonplaceholder.typicode.com/users/1';

const Fetch = () => {
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  // No need to touch code below
  return (
    <div className="App">
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong> {userData.name || '(Need to populate name here)'}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || '(Need to populate website here)'}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || '(Need to populate email here)'}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || '(Need to populate phone here)'}
      </p>
    </div>
  );
};

export default Fetch;
