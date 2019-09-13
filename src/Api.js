import React from 'react'
const wlnfetch = async () => {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.wlnupdates.com/api', {
        method: 'POST',
        body: JSON.stringify({
            'mode' : 'search-advanced',
            'include-results' : ['covers','description'],
            'tag-category' : {'mystery' : 'included'},
        }),
        headers: {
            'Content-Type': 'application/json'        
        }
    });
    const myJson = await response.json();
    console.log(myJson);
    return myJson;
};

export function FetchBtn() {    
    return (
        <div>
        <h2>WLN FETCH HEADER</h2>
        <button onClick={wlnfetch}> FETCH WLN GOOOOOOO</button>
        </div>
    );
}
  

// Access to fetch at 'https://www.wlnupdates.com/api' from origin 'blah' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.


// tested in console
// var wlnfetch = async () => {
//     const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.wlnupdates.com/api', {
//         method: 'POST',
//         body: JSON.stringify({
//             'mode' : 'search-advanced',
//             'include-results' : ['covers','description'],
//             'tag-category' : {'mystery' : 'included'},
//         }),
//         headers: {
//             'Content-Type': 'application/json'        
//         }
//     });
//     const myJson = await response.json();
//     console.log(myJson);
//     return myJson;
// };



