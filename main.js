const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.Selector('.container');
let searchQuery ='';
const APP_ID = '0429c84e';
const APP_key ='b06140c8db71f415176fceab2f37c479';


searchForm.addEventListener('submit', (e)=> {
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  fetchAPI();
})


const APP =() => {
  constAPP_ID ="0429c84e";

constAPP_KEV=
  'b06140c8db71f415176fceab2f37c479';

  consut url= 'https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}';

Const getData =async () => {
 const result = await Axios.get(url);

 console.log(result)
}
