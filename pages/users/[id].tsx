import { useRouter } from "next/router";

const UserGetPage = () => {
    const router = useRouter();
    const {id} = router.query;
    
    return <h1>User Get Page {id}</h1>
}

export default UserGetPage;