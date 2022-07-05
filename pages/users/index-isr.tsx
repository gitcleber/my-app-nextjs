import axios from "axios";
import { GetStaticProps, NextPage } from "next";

type User = {
    name: string;
}

type UserPageProps ={
    users: User[]
    date: string;
}

const url = "https://my-json-server.typicode.com/gitcleber/my-app-nextjs/users"
const UsersISRPage: NextPage<UserPageProps> = (props) => {
    // const [users, setUsers] = useState([]);
    // useEffect(()=>{
    //     axios.get(url)
    //     .then(resp => setUsers(resp.data.users));

    // }, []);

    const { users, date } = props;

    return (
        <div>
            <h1>UsersPage {date}</h1>
            <ul>
                {users.map((user:any, key) => (
                    <li key={key}>{user.name}</li>
                ))}
            </ul>
        </div>

    );
};

export default UsersISRPage;

export const getStaticProps: GetStaticProps = async () => {

    const {data} = await axios.get(url)

    return {
        props: {
            users: data,
            date: new Date().getTime()
        },
        revalidate: 10
    }   
} 