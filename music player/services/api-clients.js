// async function getData(singerName, callBackFn){
    async function getData(singerName='Travis Scott'){
    const URL =` https://itunes.apple.com/search?term=${singerName}&limit=25`; // using backtick ` ` for user customization
    try{
    const response = await fetch(URL);
    const obj = await response.json();
    return obj;
    // return callBackFn(obj);
    }
    catch(err){
        console.log('Error',err);
        throw err;
    }   
}export default getData;