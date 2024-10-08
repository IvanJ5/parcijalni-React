const UserDetails = ({ user, repos, setUser, setRepos }) => {
  const numRepos = repos.length;

  const handleClick = () => {
    setUser([]);
    setRepos([]);
  };

  return (
    <>
      {user !== undefined && numRepos > 0 && (
        <div className="details">
          <div className="details-row">
            <img className="avatar" src={user.avatar_url} />
            <h1>{user.name}</h1>
          </div>
          <div className="details-column">
            <h2>BIO:</h2>
            <p>{user.bio}</p>
            <h2>LOCATION:</h2>
            <p>{user.location}</p>
            <h2>REPOSITORIES:</h2>
            <ul>
              {repos?.map((repo) => (
                <li key={repo.id}>{repo.name}</li>
              ))}
            </ul>
            <button onClick={handleClick}>Reset</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
