import axios from "axios";
import { useEffect, useState } from "react";


const url = "https://my-json-server.typicode.com/gitcleber/my-app-nextjs/users"
const UsersSpaPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(url)
        .then(resp => setUsers(resp.data));

    }, []);

    return (
        <div>
            <h1>UsersSpaPage</h1>
            <ul>
                {users.map((user:any, key) => (
                    <li key={key}>{user.name}</li>
                ))}
            </ul>
        </div>

    );
};

export default UsersSpaPage;

