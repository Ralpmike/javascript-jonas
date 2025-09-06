'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// async function fetchCountries(){
//   try {
//     const res = await fetch(
//       'https://restcountries.com/v3.1/all?fields=name,flags,currencies,capital',
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     if(!res.ok) throw new Error('Country not found');
//     const data = await res.json();

//     console.log(data.slice(0, 10));

//   } catch (error) {
//     console.log('Error', error);

//   }
// }

// fetchCountries()

// function getCountryData(country) {

//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v2/name/${country}`);

//   request.setRequestHeader('Content-Type', 'application/json');

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const {currencies} = data;
//     // console.log(currencies);

//     const html = `
//       <article class="country">
//             <img class="country__img" src=${data.flag}
//     }/>
//             <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(
//                 2
//               )}</p>
//               <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//               <p class="country__row"><span>💰</span>(${
//                 data.currencies[0].code
//               }) ${data.currencies[0].name}</p>
//             </div>
//           </article>
//     `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// }
// const renderCountry = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//             <img class="country__img" src=${data.flag}
//     }/>
//             <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 data.population / 1000000
//               ).toFixed(2)}</p>
//               <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//               <p class="country__row"><span>💰</span>(${
//                 data.currencies[0].code
//               }) ${data.currencies[0].name}</p>
//             </div>
//           </article>
//     `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// function getCountryAndNeighbourData(country) {
//   //?AJAX call country 1
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v2/name/${country}`);

//   request.setRequestHeader('Content-Type', 'application/json');

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //?Render country
//     renderCountry(data);

//     //?Get neighbour country
//     const neighbour = data.borders?.[0];

//     if(!neighbour) return;

//     //?AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.setRequestHeader('Content-Type', 'application/json');
//     request2.send();

//     request2.addEventListener('load', function(){
//       const data2 = JSON.parse(this.responseText);
//       console.log('neighbour', data2);
      
//       renderCountry(data2, "neighbour");
//     })


//   });
// }

// getCountryData('nigeria');
// getCountryData('usa');
// getCountryAndNeighbourData('portugal');

const request = fetch('https://restcountries.com/v2/name/portugal');

console.log('request', request);
