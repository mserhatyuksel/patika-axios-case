import axios from "axios";

const getData = async (u_id) => {
    const { data: user } = await axios(
        `https://jsonplaceholder.typicode.com/users/${u_id}`
    );
    const { data: posts } = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${u_id}`
    );
    const allData = { ...user, posts };
    return allData;
};

export default getData;
