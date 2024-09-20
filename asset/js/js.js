
// انتخاب تمام دیوها و تصویر
let colorDivs = document.querySelectorAll('#color .color_dive');
let jacketImage = document.querySelector('.jacket');

// تابع تغییر رنگ و آدرس تصویر
function changeColorAndImage(imageSrc,width) {
    // تغییر آدرس تصویر
    jacketImage.src = imageSrc;
}

// اضافه کردن رویداد کلیک به هر دیو به صورت مجزا
colorDivs[0].addEventListener('click', function() {
    changeColorAndImage('asset/img/pebذlely.png');
    jacketImage.style.width='100px';

    if(minWidth=600){
        jacketImage.style.width='150px';
    }
    else if(minWidth=1000){
        jacketImage.style.width='300px';
    }
});

colorDivs[1].addEventListener('click', function() {
    changeColorAndImage('asset/img/fjallraven-women-s-keb-eco-shell-jacket-224-removebg-preview.png');
    jacketImage.style.width='150px';
    jacketImage.style.margin='-20px';

    if(minWidth=600){
        jacketImage.style.width='200px';
    }

    else if(minWidth=1000){
        jacketImage.style.width='350px';
    }
});

colorDivs[2].addEventListener('click', function() {
    changeColorAndImage('asset/img/fjaellraeven-keb-eco-shell-jacket-w-deep-forest-removebg-preview.png');
    jacketImage.style.width='150px';
    jacketImage.style.margin='-20px';

    if(minWidth=600){
        jacketImage.style.width='220px';
    }

    else if(minWidth=1000){
        jacketImage.style.width='350px';
    }
});

colorDivs[3].addEventListener('click', function() {
    changeColorAndImage('asset/img/fjallraven-women-s-keb-eco-shell-jacket-230-removebg-preview.png');
    jacketImage.style.width='150px';
    jacketImage.style.margin='-20px';

    if(minWidth=600){
        jacketImage.style.width='220px';
    }

    else if(minWidth=1000){
        jacketImage.style.width='350px';
    }
});





