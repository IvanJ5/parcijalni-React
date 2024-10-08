import { useState } from "react";
import UserSearch from "./UserSearch";
import UserDetails from "./UserDetails";

const App = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);

  const getUser = async (query) => {
    try {
      const response = await fetch(`https://api.github.com/users/${query}`);
      const data = await response.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.error("Greška prilikom dohvaćanja korisnika:", error);
    }
  };

  const getRepos = async (query) => {
    try {
      const response = await fetch(`https://api.github.com/users/${query}/repos`);
      const data = await response.json();
      console.log(data);
      setRepos(data);
    } catch (error) {
      console.error("Greška prilikom dohvaćanja podataka:", error);
    }
  };

  return (
    <div className="app">
      <UserSearch query={query} setQuery={setQuery} user={user} getUser={getUser} getRepos={getRepos} />
      <UserDetails user={user} setUser={setUser} repos={repos} setRepos={setRepos} />
    </div>
  );
};

export default App;
