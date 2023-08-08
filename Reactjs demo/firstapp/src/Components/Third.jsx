export const Third=()=>{
    const fruits =["A","B","C","D"];
    // return <h1>Hello, I'm Third React.</h1>
    return (<>
    <div>
    {fruits.map((fruits, index)=>{
       return <h1 key={index}>{fruits} Fruit</h1>
})}
    </div>
    </>)
}