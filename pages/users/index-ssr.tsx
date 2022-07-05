import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
// import { useEffect, useState } from "react";

type User = {
    name: string;
}

type UserPageProps ={
    users: User[]
}

const url = "https://my-json-server.typicode.com/gitcleber/my-app-nextjs/users"
const UsersSSRPage: NextPage<UserPageProps> = (props) => {
    // const [users, setUsers] = useState([]);
    // useEffect(()=>{
    //     axios.get(url)
    //     .then(resp => setUsers(resp.data.users));

    // }, []);

    const { users } = props;

    return (
        <div>
            <h1>UsersSSRPage</h1>
            <ul>
                {users.map((user:any, key) => (
                    <li key={key}>{user.name}</li>
                ))}
            </ul>
        </div>

    );
};

export default UsersSSRPage;

export const getServerSideProps: GetServerSideProps = async () => {

    const {data} = await axios.get(url)

    return {
        props: {
            users: data,
        },
    }   
} 