const users = [
  { name: 'John Doe', id: 1 },
  { name: 'Jane Doe', id: 2 },
  { name: 'Billy Doe', id: 3 }
];

const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);

const MapFunction = () => {
  return (
    <>
      <h3>User names</h3>
      <ul>{userItems}</ul>
    </>
  );
};

export default MapFunction;
