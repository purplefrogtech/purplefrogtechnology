// Hidebar SECTION

document.querySelector('.respo').addEventListener('click', function () {
  const hidebarList = document.querySelector('.hidebar-list');
  hidebarList.style.display = hidebarList.style.display === 'block' ? 'none' : 'block';
});

// Hidebar SECTION

// Sidebar SECTION

document.addEventListener('DOMContentLoaded', function () {
  const hideBtn = document.querySelector('.hide-btn');
  const sidebarList = document.querySelector('.sidebar-list');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');

  if (!hideBtn || !sidebarList || !openIcon || !closeIcon) {
    console.error("Gerekli elemanlar bulunamadı!");
    return;
  }

  hideBtn.addEventListener('click', function () {
    // Menü açık mı kapalı mı kontrol et ve ikonları güncelle
    if (sidebarList.style.display === 'block') {
      sidebarList.style.display = 'none';
      openIcon.style.display = 'inline';
      closeIcon.style.display = 'none';
    } else {
      sidebarList.style.display = 'block';
      openIcon.style.display = 'none';
      closeIcon.style.display = 'inline';
    }
  });
});


// Sidebar SECTION


// Slider SECTION

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const mobileContent = document.querySelector('.slider-content-mobile');

function showSlide(index) {
  slideIndex = (index + slides.length) % slides.length;
  const offset = -slideIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

  // Slider içeriğini mobil versiyona kopyala
  const currentContent = slides[slideIndex].querySelector('.slider-content').innerHTML;
  mobileContent.innerHTML = currentContent;
}

function moveSlide(direction) {
  showSlide(slideIndex + direction);
}

// İlk slaytı göster ve içeriği kopyala
showSlide(slideIndex);

// Otomatik geçiş (opsiyonel)
setInterval(() => moveSlide(1), 18000);

// Slider SECTION


// Music Button

let isPlaying = false;
const audio = document.getElementById("background-music");
const icon = document.querySelector(".music-button i");

function toggleMusic() {
  if (isPlaying) {
    audio.pause();
    icon.classList.replace("fa-pause", "fa-play");
  } else {
    audio.play();
    icon.classList.replace("fa-play", "fa-pause");
  }
  isPlaying = !isPlaying;
}

// Music Button


// PROJECT SECTION

const projectCarousel = document.querySelector('.project-carousel');
const projectCards = document.querySelectorAll('.project-card');
const projectSlider = document.getElementById('project-slider');
const projectPrevButton = document.getElementById('project-prev');
const projectNextButton = document.getElementById('project-next');

// Yeni kart genişliği ve margin ile hesaplamalar
const projectCardWidth = 550; // Kart genişliği (550px)
const projectVisibleCards = 3; // Görünen kart sayısı
let maxIndex = projectCards.length - projectVisibleCards + 1; // Kaydırma payı arttırıldı
let projectCurrentIndex = 0;

// Başlangıç ayarları
updateProjectCarousel();
updateSliderBackground();

// Slider kaydırıldığında kartları güncelle
projectSlider.addEventListener('input', (e) => {
    const maxScroll = maxIndex * projectCardWidth;
    const offset = -(e.target.value / 100) * maxScroll;
    projectCarousel.style.transform = `translateX(${offset}px)`;
    
    projectCurrentIndex = Math.round((e.target.value / 100) * maxIndex);
    updateProjectNavButtons();
    updateSliderBackground();
});

// Önceki butonuna tıklandığında kaydırma
projectPrevButton.addEventListener('click', () => {
    if (projectCurrentIndex > 0) {
        projectCurrentIndex--;
    } else {
        projectCurrentIndex = maxIndex; // Başa döndüğünde sona geçiş
    }
    updateProjectCarousel();
});

// Sonraki butonuna tıklandığında kaydırma
projectNextButton.addEventListener('click', () => {
    if (projectCurrentIndex < maxIndex) {
        projectCurrentIndex++;
    } else {
        projectCurrentIndex = 0; // Sona gelindiğinde başa dön
    }
    updateProjectCarousel();
});

// Carousel pozisyonunu güncelle
function updateProjectCarousel() {
    const offset = -projectCurrentIndex * projectCardWidth;
    projectCarousel.style.transform = `translateX(${offset}px)`;
    
    const sliderValue = (projectCurrentIndex / maxIndex) * 100;
    projectSlider.value = sliderValue;
    updateSliderBackground();
    updateProjectNavButtons();
}

// Slider'ın arka planını güncelle
function updateSliderBackground() {
    const sliderValue = projectSlider.value;
    projectSlider.style.background = `linear-gradient(to right, #8a2be2 ${sliderValue}%, #ddd ${sliderValue}%)`;
}

// Butonların aktifliğini güncelle
function updateProjectNavButtons() {
    projectPrevButton.disabled = projectCurrentIndex === 0 && maxIndex > 0;
    projectNextButton.disabled = projectCurrentIndex >= maxIndex;
}

// PROJECT SECTION
