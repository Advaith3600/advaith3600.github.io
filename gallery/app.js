const button = document.querySelectorAll('button');

button[0].addEventListener('click', event => {
    document.querySelector('img').style.filter = 'grayscale(100%)'
})

button[1].addEventListener('click', event => {
    document.querySelector('img').style.filter = 'none'
})

button[2].addEventListener('click', event => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    var redValue = 0;
    var greenValue = 0;
    var blueValue = 0;

    canvas.width = document.querySelector('img').width;
    canvas.height = document.querySelector('img').height;

    ctx.drawImage(document.querySelector('img'), 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < imageData.data.length; i += 4) {
        redValue += imageData.data[i];
        greenValue += imageData.data[i + 1];
        blueValue += imageData.data[i + 2];
    }

    if (redValue > greenValue && redValue > blueValue) {
        //display text saying redis the most common color next to the button
        document.getElementById('whichish').innerHTML = "Red is the most common color";
    } else if (greenValue > redValue && greenValue > blueValue) {
        document.getElementById('whichish').innerHTML = "Green is the most common color";
    } else if (blueValue > redValue && blueValue > greenValue) {
        document.getElementById('whichish').innerHTML = "Blue is the most common color";
    }
    else {
        document.getElementById('whichish').innerHTML = "Equal distribution of colors.";
    }

    ctx.putImageData(imageData, 0, 0);
    document.querySelector('img').src = canvas.toDataURL();
    document.querySelector('img').style.filter = 'none';
})

button[3].addEventListener('click', event => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = document.querySelector('img').width;
    canvas.height = document.querySelector('img').height;

    ctx.drawImage(document.querySelector('img'), 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i] = 255;
    }

    ctx.putImageData(imageData, 0, 0);

    document.querySelector('img').src = canvas.toDataURL();
    document.querySelector('img').style.filter = 'none';
})

button[4].addEventListener('click', event => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = document.querySelector('img').width;
    canvas.height = document.querySelector('img').height;

    ctx.drawImage(document.querySelector('img'), 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i+1] = 255;
    }

    ctx.putImageData(imageData, 0, 0);

    document.querySelector('img').src = canvas.toDataURL();
    document.querySelector('img').style.filter = 'none';
})

button[5].addEventListener('click', event => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = document.querySelector('img').width;
    canvas.height = document.querySelector('img').height;

    ctx.drawImage(document.querySelector('img'), 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i+2] = 255;
    }

    ctx.putImageData(imageData, 0, 0);

    document.querySelector('img').src = canvas.toDataURL();
    document.querySelector('img').style.filter = 'none';
})

button[6].addEventListener('click', event => {
    document.querySelector('img').style.filter = 'brightness(200%)';
})

button[7].addEventListener('click', event => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = document.querySelector('img').width;
    canvas.height = document.querySelector('img').height;

    ctx.drawImage(document.querySelector('img'), 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i+2] = 255;
    }

    ctx.putImageData(imageData, 0, 0);

    document.querySelector('img').src = canvas.toDataURL();
    document.querySelector('img').style.filter = 'none';
})