import { useEffect, useState } from "react";
import CardList from "./components/cardList/cardList.component";
import SearchBox from "./components/searchBox/searchBox.component";
import Title from "./components/title/title.component";
import "./App.css";

const url = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [searchField, setSearchField] = useState("");

  const getUserData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  const filteredMonsters = userData.filter((monster) =>
    monster.name.toLocaleLowerCase().includes(searchField)
  );

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="App">
      <Title title="Monsters Rolodex" />

      <SearchBox
        onChangeHandler={(e) => onSearchChange(e)}
        placeholder="search monster"
      />
      <CardList data={filteredMonsters} />
    </div>
  );
};

export default App;
