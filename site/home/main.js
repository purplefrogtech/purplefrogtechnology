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
