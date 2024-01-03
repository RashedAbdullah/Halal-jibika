export const localLight = ()=>{
    const data = JSON.parse(localStorage.getItem("isLight"));
    if(data){
        return data;
    }
    return false;
}