const fetchUser = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const userID = data.map((val)=> val.id)
    return userID;
}

export default fetchUser;