const setToken = user => {
    const currentUser = {
        email: user.email,

    }

    fetch(`http://localhost:5000/users/${user?.email}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('accessToken', data.accessToken);
            }
            // console.log(data);
        })
}

export default setToken;