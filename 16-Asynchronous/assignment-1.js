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
              <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
              <p class="country__row"><span>💰</span>(${
                data.currencies[0].code
              }) ${data.currencies[0].name}</p>
            </div>
          </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const imageContainer = document.querySelector('.images');

const createImage = imgPath => {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imageContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// const wait = seconds => {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// let currentImage;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     console.log('Image 2 loaded');
//     currentImage = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(err => console.error(err));
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    console.log('Lat: ', lat, 'Lng: ', lng);

    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );

    if (!resGeo.ok) throw new Error('Country not found');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryName}`
    );

    if (!res.ok) throw new Error('Problem getting Country');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.countryName}`;
  } catch (error) {
    console.log(`Error: ${error} 💥`);
    renderError(`Something went wrong 💥 ${error.message}`);

    //?reject promise from async function
    throw error;
  }
};

//  const result =  whereAmI();

// console.log(result)

// (async function(){
//   try {
//    const city = await whereAmI();
//    console.log(`2: ${city}`);
//   } catch (error) {
//     console.log(`2: ${error.message} 💥`);
//   }

//   console.log('3: Finished getting location');
// })()

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const get3Countries = async function(c1,c2,c3){
//   try {

// const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`)
// const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`)
// const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`)

// console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//     , getJSON(`https://restcountries.com/v2/name/${c2}`),
//     , getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.filter(d => d?.[0]?.capital).map(d => d[0].capital));
//   } catch (error) {
//     console.error(error);
//   }
// }

// get3Countries('nigeria', 'usa', 'canada');

//?Other Promises Combinatiors: race, allSettled and any

//?Promise.race

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/nigeria`),
    getJSON(`https://restcountries.com/v2/name/usa`),
    getJSON(`https://restcountries.com/v2/name/canada`),
  ]);

  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/cameroon`),
  // timeout(5),
  timeout(1),
  // getJSON(`https://restcountries.com/v2/name/usa`),
  // getJSON(`https://restcountries.com/v2/name/canada`),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//?Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

//? Promise.all

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//? Promise.any

Promise.any([
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
  Promise.resolve('Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

Promise.try(function () {
  return fetch('https://restcountries.com/v2/name/nigeria');
})
  .then(res => console.log(res.json()))
  .catch(err => console.error(err));

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

// const loadNPause = async function () {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     console.log('Image 1 loaded');
//     await wait(2);
//     img.style.display = 'none';
//     img = await createImage('img/img-2.jpg');
//     console.log('Image 2 loaded');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (error) {
//     console.error(error);
//   }
// };

// loadNPause();

async function loadAll(imgPaths = []){

  try {
    const imgs = imgPaths.map(async imgPath => await createImage(imgPath));
    console.log(imgs);
    const imgsEl = await Promise.all(imgs);
    console.log('Images loaded', imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));

    
  } catch (error) {
    console.log(error);
  }
 
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
