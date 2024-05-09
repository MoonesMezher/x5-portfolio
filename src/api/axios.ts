const API = {
    GET: {
        messages: 'http://127.0.0.1:8000/api/messages',
        projects: 'http://127.0.0.1:8000/api/projects',
    },
    POST: {
        messages: 'http://127.0.0.1:8000/api/messages',
        projects: 'http://127.0.0.1:8000/api/projects',
        login: 'http://127.0.0.1:8000/api/login',
        logout: 'http://127.0.0.1:8000/api/logout'
    },
    PUT: {
        projects: 'http://127.0.0.1:8000/api/projects/',
    },
    DELETE: {
        messages: 'http://127.0.0.1:8000/api/messages/',
        projects: 'http://127.0.0.1:8000/api/projects/',
    }
}

export default API;