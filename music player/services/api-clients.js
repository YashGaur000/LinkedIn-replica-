// async function getData(singerName, callBackFn){
    async function getData(singerName='sonu nigam'){
    const URL ='https://itunes.apple.com/search?term=${singerName}&entity=musicVideo.'; // using back slash '\....${}\' for user customization
    try{
    const response = await fetch(URL);
    const obj = await response.json();
    return obj;
    // return callBackFn(obj);
    }
    catch(err){
        throw err;
    }   
}export default getData;