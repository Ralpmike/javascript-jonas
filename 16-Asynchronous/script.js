//? https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0&localityLanguage=en

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
            <img class="country__img" src=${data.flag}
    }/>
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                data.population / 1000000
              ).toFixed(2)}</p>
              <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
              <p class="country__row"><span>💰</span>(${
                data.currencies[0].code
              }) ${data.currencies[0].name}</p>
            </div>
          </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

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

// const request = fetch('https://restcountries.com/v2/name/portugal');

// console.log('request', request);

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       //?country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => {
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err} 💥💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try agian`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('nigeria');
// });

// getCountryData('wefwefwefwefwef');

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🎉');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//?Promisifying settimeout
const wait = seconds => {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 seconds passed');
    return wait(1);
  })
  .then(() => console.log('5 seconds passed'))
  .catch(err => console.error(err));

navigator.geolocation.getCurrentPosition(
  postion => console.log('Position', postion),
  err => console.error(err)
);

const getPosition = () => {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   postion => resolve(postion),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};


const whereAmI = function () {
getPosition().then(pos => {
  const {latitude: lat, longitude: lng} = pos.coords

  
  return fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
})
  .then(response => {
    if (!response.ok)
      throw new Error(
        `Country not found with these latude and longitude: ${lat}, ${lng}`
      );
    return response.json();
  })
  .then(data => {
    console.log('data', data);

    const { countryName } = data;

    let newCountryName = null;

    if (countryName.includes('(the)')) {
      newCountryName = countryName.split('(the)').join(' ');
    } else {
      newCountryName = countryName;
    }

    console.log('NewCountryName', newCountryName);

    if (!newCountryName) throw new Error(`Country not found`);

    return fetch(`https://restcountries.com/v2/name/${newCountryName}`).then(
      response => {
        if (!response.ok) throw new Error(`Country not found`);
        return response.json();
      }
    );
  })
  .then(data => {
    console.log('data', data);
    renderCountry(data[0]);

    const neighbour = data[0]?.borders?.[0] ?? data[1]?.borders?.[0];
    console.log('neighbour', neighbour);

    if (!neighbour) throw new Error('No neighbour found!');

    return fetch(`https://restcountries.com/v2/alpha/${neighbour}`).then(
      response => {
        if (!response.ok) throw new Error(`No neighbouring Country found`);
        return response.json();
      }
    );
  })
  .then(data => {
    renderCountry(data, 'neighbour');
  })
  .catch(err => {
    console.error(`${err} 💥💥💥💥`);
    renderError(`Something went wrong 💥💥💥 ${err.message}. Try agian`);
  })
  .finally(() => {
    countriesContainer.style.opacity = 1;
  });

};


btn.addEventListener("click", whereAmI);