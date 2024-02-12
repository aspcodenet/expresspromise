function myFetch(url){
    const myPromise = new Promise((resolve, reject) => { 
        // Simulating an asynchronous operation 
        setTimeout(() => { 
            resolve({
                name: 'Foppa',
			    jersey:21,
			    age:52
            }); 
           }, 10000); 
        }); 
    return myPromise
}

let age = 123


// function test(){
//     console.log('testing')
// }

// module.exports = test



module.exports = {
    myFetch,
    team: 'Colorado',
    name: '2344',
    age
}
