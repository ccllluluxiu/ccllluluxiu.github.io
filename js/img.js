

let slideIndex = 0; // 当前显示的幻灯片索引
showSlide(slideIndex); // 显示初始幻灯片

function changeSlide(n) {
    slideIndex += n; // 根据按钮的点击调整索引
    showSlide(slideIndex); // 更新显示的幻灯片
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide"); // 获取所有的幻灯片
    if (n >= slides.length) {
        slideIndex = 0; // 如果索引超出范围，回到第一张
    }
    if (n < 0) {
        slideIndex = slides.length - 1; // 如果索引小于0，返回最后一张
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // 隐藏所有幻灯片
    }
    slides[slideIndex].style.display = "block"; // 显示当前幻灯片
}
setInterval(() => {
    changeSlide(1); // 每隔3秒自动切换到下一张
}, 3000);
