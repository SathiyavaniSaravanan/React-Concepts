// function MSD() {
//     return '5 times cup is Ours'
// }
//  //   STEP-1: Function is having a time Object
// // function VK() {
// //          setTimeout(() => {
// //         return "This time cup is Ours";
// //     },2000)
// // }
// //Output:5 times cup is Ours
// // undefined
// // Mr.360

// //    STEP-2:To handle it we are using async Keyword to convert it as a Asynchronous function
// // async function VK() {
// //     setTimeout(() => {
// //         return "This time cup is Ours";
// //     },2000)
// // }
// //Output: 5 times cup is Ours
// // Promise { undefined }
// // Mr.360

// //    STEP-3:To handle the Asynchronous Functions we are using Promise Methos
// function VK() {
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("This time cup is Ours");
//         }, 2000);
//     })
// }
// //Output: 5 times cup is Ours
// // Promise { <pending> }
// // Mr.360

// function ABD() {
//     return "Mr.360"
// }

// //Calling the functions
// // function AAP() {
// //     console.log(MSD());
// //     console.log(VK());
// //     console.log(ABD());
// // }
// // AAP();

// //STEP-4:To wait till Promise is resolved, we should use async await
// async function AAP() {
//     console.log(MSD());
//     console.log(await VK());
//     console.log(ABD());
// }
// AAP();




//API fetching

let fetchData = async() => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
    data.map(users => {
        return (
            <div className="users">
                <h1>${ users.name}</h1>
            </div>
        )
    })
}
fetchData();