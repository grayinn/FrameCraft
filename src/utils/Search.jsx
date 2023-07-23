// import React from 'react'
// import unsplash from '../api/unsplash'
// import Header from '../components/Header'

// function Search() {
//     const getImages = (term) => {
//         return unsplash.get("https://api.unsplash.com/search/photos", {
//             params: {
//                 query: term,
                
//             },
//         })
//     }

//     const onSearchSubmit = (term) => {
//         console.log("on search submit", term)
//         getImages(term)
//     }

//     <Header onSubmit={onSearchSubmit} />
//     // return (
//     //     <Header onSubmit={onSearchSubmit} />
//     // )

// }
// export default Search