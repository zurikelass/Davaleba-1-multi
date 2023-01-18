
let countries = [
  'Georgia',
  'USA',
  'Armenia',
  'UK',
  'Shri-Lanka',
  'Azerbaijan',
  'Turkey',
  'Somalia',
  'Lebanon',
  'Denmark',
  'Italy',
  'France',
  'Iceland',
  'Greenland',
  'Serbia',
  'Latvia',
  'Estonia',
  'Romania',
  'Germany',
  'Russia',
  'China',
  'Japan'
];

const ul = document.getElementById('countries'); // document.querySelector('#countries')
const btn = document.getElementById('btn')
const input = document.getElementById('input')



btn.addEventListener ('click',function() {
  const value = input.value
   if (value !== ''){
    countries.push(value)
    input.value = ''
    render()
   }
})


function addCountry(str){
  const li = document.createElement('li'); // <li></li>
  li.innerHTML = str+' ';
  ul.appendChild(li);

  const but = document.createElement('button')
  but.addEventListener('click',()=>{
      ul.removeChild(li)
  })
  but.innerHTML = 'delete'
  li.appendChild(but)
}
 function render() {
  ul.innerHTML=''
  countries.forEach(c => addCountry(c));
 }
 function deleteRecord(str){
  countries=countries.filter((country) => country!==str)
  render()
 }

 render()




