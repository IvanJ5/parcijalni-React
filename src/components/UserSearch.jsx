const UserSearch = ({ query, setQuery, user, getUser, getRepos }) => {
  const numUser = user.length;

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query === "") {
      alert("Upiši ispravan username!");
    } else {
      getUser(query);
      getRepos(query);
      setQuery("");
    }
  };

  return (
    <>
      {numUser === 0 && (
        <div className="search">
          <form onSubmit={handleSubmit}>
            <p>GitHub username:</p>
            <input type="text" placeholder="e.g. facebook" value={query} onChange={handleChange} />
            <button>GO!</button>
          </form>
        </div>
      )}
    </>
  );
};

export default UserSearch;
