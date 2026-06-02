function FilterBar({
  filter,
  setFilter,
}) {
  return (
    <div className="filter-buttons">

      <button
        onClick={() =>
          setFilter("all")
        }
      >
        All Tasks
      </button>

      <button
        onClick={() =>
          setFilter("active")
        }
      >
        Active
      </button>

      <button
        onClick={() =>
          setFilter("completed")
        }
      >
        Completed
      </button>

    </div>
  );
}

export default FilterBar;