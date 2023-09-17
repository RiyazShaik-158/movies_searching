// console.log("data will be fetched here!")

// http://www.omdbapi.com/?s=${searchName}&apikey=43db7d14

let searchTitle = "titanic";

// const fetchInitial = (movie) => {
//     fetch(`http://www.omdbapi.com/?s=${movie}&apikey=43db7d14`)
//         .then(res => res.json()) 
//         .then(data => console.log(data))
// }

// fetchInitial('titanic');

let dataGot;


const fetchInter = async (movie) => {
    let resp = await fetch(`http://www.omdbapi.com/?s=${movie}&apikey=43db7d14`)
    resp = await resp.json();
    // console.log(resp)
    dataGot = resp;
    const moviesOnThisPage = dataGot.Search;
    // console.log(moviesOnThisPage)

    moviesOnThisPage.map(item => console.log(item.Title))
}
fetchInter('avengers');
