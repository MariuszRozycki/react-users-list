import "./FilterButtons.css";

const FilterButtons = (props) => {
  return (
    <div className="filterButtonsWrapper">
      <button onClick={() => props.handleUserTypes("admin")}>
        Admins only
      </button>
      <button onClick={() => props.handleUserTypes("user")}>Users only</button>
      <button onClick={() => props.handleUserTypes("all")}>All users</button>
    </div>
  );
};

export default FilterButtons;
