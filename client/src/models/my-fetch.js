const API_ROOT = process.env.API_ROOT || 'http://localhost:3001/';

export function myFetch(url, data = null, method = null){

    if(data){
        return fetch( API_ROOT + url,{
            method: 'POST',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(x=> x.json() )
    }else{
        return fetch( API_ROOT + url  ).then(x=> x.json() )
    }
}