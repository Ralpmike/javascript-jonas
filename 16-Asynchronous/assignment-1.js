

const imageContainer = document.querySelector(".images")


const createImage = (imgPath) => {
  return new Promise(function(resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function() {
      imageContainer.append(img);
      resolve(img);
    }) 
    
    img.addEventListener('error', function() {
      reject(new Error('Image not found'));
    })
  })
}

const wait = seconds => {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000);
  })
}

let currentImage;

createImage('img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    console.log('Image 2 loaded');
    currentImage = img;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
  })
  .catch(err => console.error(err));
