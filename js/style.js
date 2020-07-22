window.addEventListener('load', function() {
    var bannerImgs = document.querySelector('.banner-content').querySelectorAll('img');
    var banner = document.querySelector('.banner-content');
    var dots = document.querySelector('.dots').querySelectorAll('span');
    var lbtn = document.querySelector('.banner-lbtn');
    var rbtn = document.querySelector('.banner-rbtn');
    //设置鼠标移入移出事件
    banner.addEventListener('mouseover', function() {
        window.clearInterval(timer);
    });
    banner.addEventListener('mouseout', function() {
        window.clearInterval(timer);
        timer = setInterval(() => {
            changer();
        }, 2000);
    });
    //为轮播图片绑定下标并绑定鼠标移入移出事件
    for (let i = 0; i < bannerImgs.length; i++) {
        bannerImgs[i].setAttribute('data-index', i);
        // bannerImgs[i].addEventListener('mouseover', function() {
        //     window.clearInterval(timer);
        // });
        // bannerImgs[i].addEventListener('mouseout', function() {
        //     window.clearInterval(timer);
        //     timer = setInterval(() => {
        //         changer();
        //     }, 2000);
        // });
    };
    //为原点按钮绑定下标并绑定点击事件
    for (let i = 0; i < dots.length; i++) {
        dots[i].setAttribute('data-index', i);
        dots[i].addEventListener('click', function() {
            var dotsIndex = this.getAttribute('data-index');
            if (dotsIndex != currentIndex) {
                bannerImgs[currentIndex].classList.remove('banner-active');
                dots[currentIndex].classList.remove('square');
                bannerImgs[dotsIndex].classList.add('banner-active');
                dots[dotsIndex].classList.add('square');
                currentIndex = dotsIndex;
            }
        });
    }
    var current = document.querySelector('.banner-active');
    var currentIndex = current.getAttribute('data-index')
        //设置轮播定时器
    var timer = setInterval(() => {
        changer();
    }, 2000);
    //图片切换功能逻辑实现
    function changer() {
        if (currentIndex < 4) {
            bannerImgs[currentIndex].classList.remove('banner-active');
            dots[currentIndex].classList.remove('square');
            currentIndex++;
            bannerImgs[currentIndex].classList.add('banner-active');
            dots[currentIndex].classList.add('square');
        } else {
            bannerImgs[currentIndex].classList.remove('banner-active');
            dots[currentIndex].classList.remove('square');
            currentIndex = 0;
            bannerImgs[currentIndex].classList.add('banner-active');
            dots[currentIndex].classList.add('square');
        }
    };
    //点击上一张
    lbtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            bannerImgs[currentIndex].classList.remove('banner-active');
            dots[currentIndex].classList.remove('square');
            currentIndex--;
            bannerImgs[currentIndex].classList.add('banner-active');
            dots[currentIndex].classList.add('square');
        } else {
            bannerImgs[currentIndex].classList.remove('banner-active');
            dots[currentIndex].classList.remove('square');
            currentIndex = 4;
            bannerImgs[currentIndex].classList.add('banner-active');
            dots[currentIndex].classList.add('square');
        }
    });
    //点击下一张
    rbtn.addEventListener('click', function() {
        if (currentIndex < 4) {
            bannerImgs[currentIndex].classList.remove('banner-active');
            dots[currentIndex].classList.remove('square');
            currentIndex++;
            bannerImgs[currentIndex].classList.add('banner-active');
            dots[currentIndex].classList.add('square');
        } else {
            bannerImgs[currentIndex].classList.remove('banner-active');
            dots[currentIndex].classList.remove('square');
            currentIndex = 0;
            bannerImgs[currentIndex].classList.add('banner-active');
            dots[currentIndex].classList.add('square');
        }
    });
});