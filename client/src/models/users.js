import {myFetch} from "./my-fetch";

export function getList() {
    return myFetch('users');
}

export function login(){
    return myFetch('users/login');
}

export function getNames() {
    return myFetch('users/names');
}