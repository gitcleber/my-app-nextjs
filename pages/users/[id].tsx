import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserGetPage = () => {
    const [users, setUsers] = useState()
    const router = useRouter();
    const {id} = router.query;
    useEffect(()=>{
        axios.get('https://my-json-server.typicode.com/gitcleber/my-app-nextjs/db')
        .then(resp => setUsers(resp.data.users));
        

    }, []);
    return <h1>UserGetPage {id}</h1>
};

export default UserGetPage;

//users/123?para1=value1&param2=value2