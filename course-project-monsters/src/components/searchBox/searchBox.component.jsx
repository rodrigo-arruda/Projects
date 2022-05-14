import "./searchBox.styles.css";

const SearchBox = ({ onChangeHandler, placeholder }) => {
  return (
    <div>
      <input
        className="searchBox"
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
