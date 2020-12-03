import {myFetch} from "./my-fetch";

export function getList() {
    return myFetch('users');
}

export function getNames() {
    return myFetch('users/names');
}