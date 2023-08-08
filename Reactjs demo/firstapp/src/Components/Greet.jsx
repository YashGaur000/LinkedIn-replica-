// const greeting= ()=>{
//     const sayGreet=({myname})=>{    // destructuring -> {myname}, directly accessing is happening
//         const today = new Date();
//         const hours = today.getHours();
//         if(hours>=4 && hours<=12){
//             <p>Good Morning {myname}</p>
//         }
//         if(hours>=12 && hours<=16){
//             <p>Good Afternoon {myname}</p>
//         }
//         if(hours>=16 && hours<=19){
//             <p>Good Evening {myname}</p>
//         }
//         if(hours>=19 && hours<=12){
//             <p>Good Night {myname}</p>
//         }
//     }
//     return (<>{greeting()}</>)
// }