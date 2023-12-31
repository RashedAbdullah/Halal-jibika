export const favoriteDataFunc = ()=>{
    const data = JSON.parse(localStorage.getItem("favoriteData"));
    if(data){
        return data;
    }
    return [];
}