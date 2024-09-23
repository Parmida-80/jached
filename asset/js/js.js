// انتخاب تمام دیوها و تصویر
let colorDivs = document.querySelectorAll('#color .color_dive');
let jacketImage = document.querySelector('.jacket');

// تابع تغییر رنگ و آدرس تصویر
function changeColorAndImage(imageSrc) {
    // تغییر آدرس تصویر
    jacketImage.src = imageSrc;
}

// تابع تنظیم اندازه تصویر بر اساس عرض صفحه
function adjustImageSize(largeSize = '300px', mediumSize = '250px', smallSize = '150px') {
    let width = window.innerWidth;
    
    if (width >= 1000) {
        jacketImage.style.width = largeSize;
    } else if (width >= 700) {
        jacketImage.style.width = mediumSize;
    } else {
        jacketImage.style.width = smallSize;
    }
}

// تابع تغییر پس‌زمینه بر اساس عرض صفحه
function changeWindowBackground(backgroundLarge, backgroundSmall) {
    let width = window.innerWidth;
    
    if (width >= 900) {
        backgroundBody(backgroundLarge);
    } else if (width <= 700) {
        backgroundBody(backgroundSmall);
    }
}

// تابع تغییر پس‌زمینه
function backgroundBody(backgroundB) {
    document.body.style.backgroundImage = `url(${backgroundB})`;
}

// اضافه کردن رویداد کلیک به هر دیو به صورت مجزا
colorDivs[0].addEventListener('click', function() {
    changeColorAndImage('asset/img/pebذlely.png');
    adjustImageSize('230px', '200px', '120px');

    changeWindowBackground('asset/img/Autumn_forest_colorful_wallpaperz.blog.ir.jpg', 'asset/img/b563148d688c1f84695b414788d52e2c.jpg');

});

colorDivs[1].addEventListener('click', function() {
    changeColorAndImage('asset/img/fjallraven-women-s-keb-eco-shell-jacket-224-removebg-preview.png');
    adjustImageSize('300px', '250px', '150px');
    changeWindowBackground('asset/img/c3b04421d9f0897963975f04abf6a5cb_LE_auto_x2.jpg', 'asset/img/10dd9194b73ab996d79e1a50d7df738d.jpg');
});

colorDivs[2].addEventListener('click', function() {
    changeColorAndImage('asset/img/fjaellraeven-keb-eco-shell-jacket-w-deep-forest-removebg-preview.png');
    adjustImageSize('320px', '270px', '170px');

    changeWindowBackground('asset/img/df79f418e943c3feceeaa95e112e99c1_LE_auto_x2.jpg', 'asset/img/45f9a785915c5b21974bcad7f18731f1.jpg');
   
});

colorDivs[3].addEventListener('click', function() {
    changeColorAndImage('asset/img/fjallraven-women-s-keb-eco-shell-jacket-230-removebg-preview.png');
    adjustImageSize('300px', '250px', '150px');

    changeWindowBackground('asset/img/619049f4584a6f971afaf2458ed2b86a_LE_auto_x2.jpg', 'asset/img/5944034b143fc25ed0d4b2dbe2dd3603.jpg');
  
});

// وقتی اندازه صفحه تغییر کند، سایز تصویر و پس‌زمینه را تنظیم می‌کنیم
window.addEventListener('resize', function() {
    adjustImageSize('300px', '250px', '150px');
});

// فراخوانی تابع برای تنظیم سایز تصویر در هنگام بارگذاری صفحه
adjustImageSize('300px', '250px', '150px');
