import { useState, useEffect } from "react";
import axios from "axios";
export default function users() {
  const [users, setUsers] = useState<[]>([]);

  useEffect(() => {
    axios
      .get(`/api/users`)
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [users]);

  const handleSubmitUsers = async () => {
    axios.post("/api/users", {
      name: "randomNameAdded",
    });
  };

  return (
    <div>
      {users.map((user: any) => {
        return (
          <div>
            The id fetched is {user.id} and name of user is {user.name}
          </div>
        );
      })}
      <button onClick={handleSubmitUsers}>submit users</button>
    </div>
  );
}
