import fakeTreeData from '../Data/tree-data';
let users = JSON.parse(localStorage.getItem('users')) || [];

export function configureFakeBackend() {
    let fetchAPI = window.fetch;
    window.fetch = (url, options) => {
        const { method, headers } = options;
        const body = options.body && JSON.parse(options.body);

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);
            function handleRoute() {
                switch (true) {
                    case url.endsWith('/users/authenticate') && method === 'POST':
                        return authenticate();
                    case url.endsWith('/users/register') && method === 'POST':
                        return register();
                    case url.endsWith('/user') && method === 'GET':
                        return userTreeData();
                    default:
                        // pass through any requests not handled above
                        return fetchAPI(url, options)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            function authenticate() {
                const { username, password } = body;
                const user = users.find(user => user.username === username && user.password === password);
                if (!user)
                    return error("Username or password is incorrect");
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
                })
            }

            function register() {
                const user = body;
                const usersDB = users.find(userList => userList.username === user.username);

                if (usersDB)
                    return error(`Username ${user.username} is already taken`);

                user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                return ok();
            }
            function userTreeData() {
                if (!isLoggedIn()) return unauthorized();
                let usersFamilyQuery = "";
                const currentUser = JSON.parse(localStorage.getItem('user'));
                usersFamilyQuery = usersFakeTreeData.find(userList => userList.id === currentUser.id);
                return ok(JSON.stringify(usersFamilyQuery));
            }
            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function unauthorized() {
                resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) });
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
            }

            function isLoggedIn() {
                return headers['Authorization'] === 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
            }
            function idFromUrl() {
                const urlParts = url.split('/');
                return parseInt(urlParts[urlParts.length - 1]);
            }
        });
    }
}


const usersFakeTreeData = [{
    id: 1,
    familyData: {
        timestamp: '15/02/2021 10:00',
        name: 'Ben',
        personalData: {
            relation: "Father",
            age: 45,
            gender: "male"
        },
        children: [
            {
                name: 'John',
                personalData: {
                    relation: "Son",
                    age: 20,
                    gender: "male"
                },
                children: []
            },
            {
                name: 'Freda',
                personalData: {
                    relation: "Daughter",
                    age: 22,
                    gender: "female"
                },
                children: []
            }
        ]
    }
},
{
    id: 2,
    familyData: {
        timestamp: '15/02/2021 10:00',
        name: 'Ben',
        personalData: {
            relation: "Father",
            age: 45,
            gender: "male"
        },
        children: [
            {
                name: 'John',
                personalData: {
                    relation: "Son",
                    age: 20,
                    gender: "male"
                },
                children: []
            },
            {
                name: 'Freda',
                personalData: {
                    relation: "Daughter",
                    age: 22,
                    gender: "female"
                },
                children: []
            }
        ]
    }
}]