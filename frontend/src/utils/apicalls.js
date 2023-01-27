import { createPath, json } from "react-router-dom"

// add user 
export function addUser(params){
    return fetch('http://localhost:4000/api/user/signup', {
        method:'POST',
        body: JSON.stringify(params),
        headers :{ 'Content-Type' : 'application/json; charset=utf-8' },
    })
    .then(function(response){
        return response.json
    })
    .catch(function(err){
        console.log(err)
    })
}


// user log in
export function userLogin(params){
    return fetch('http://localhost:4000/api/user/signin', {
        method:'POST',
        body: JSON.stringify(params),
        headers: { 'Content-Type':'application/json; charset=utf-8'},
    })
    .then(function (response){
        return response.json()
    })
    .catch(function(err){
        console.log(err)
    })
}

// verify if user is connected
export async function userAuth() {
    if (!localStorage.getItem('token')) {
        return false;
    }
    return fetch('http://localhost:4000/api/user/auth', {
        method: 'POST',
        body: JSON.stringify({ token: localStorage.getItem('token') }),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    })
        .then(function (response) {
            return response.json()
        })
        .catch(function (error) {
            console.warn(error)
        })

}

// retrieve articles
export function getPosts(params){

    return fetch('http://localhost:4000/api/post',{
        method:'GET',
        headers:{ 'Content-Type': 'application/json; charset=utf-8; image/pgn; image/jpg', 'Authorization': localStorage.getItem('token')}
    })
    .then(function (res){
        return res.json()
    })
    .catch(function(err){
        console.log('catch getPost ' + err)
    })
}

export function addPost(params){

    return fetch('http://localhost:4000/api/post', {
        method:'POST',
        body: JSON.stringify(params),
        headers:{'Content-Type': 'application/json', 'Authorization' : localStorage.getItem('token')}
    })
    .then(function(res){
        return res.json()
    })
    .catch(function(err){
        console.log('dans le catch ==>' + err)
    })
}


