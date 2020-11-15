const API = 'https://teclados4.herokuapp.com/api/all_keyboards/'
// condicion ? resultado true : resultado false
const getData = async(id) =>{
    const apiURL = id ? `${API}${id}` : API+'?page=2';
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    }catch (error){
        console.log('fetch error', error)
    }
}

export default getData