document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
        // هقفل الأنميشن في الموبايل عشان نضمن إن المحتوى يظهر وميختفيش
        disable: window.innerWidth < 768
    });
});

// تغيير شكل الهيدر عند التمرير
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.background = '#ffffff';
    }
});

// قائمة الموبايل (Hamburger Menu)
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active-mobile');
    // إضافة ستايل بسيط لإظهار القائمة في الموبايل
    if (navLinks.classList.contains('active-mobile')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
    } else {
        navLinks.style.display = 'none';
    }
});

// إغلاق القائمة عند الضغط على رابط
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
            navLinks.classList.remove('active-mobile');
        }
    });
});


// لوجيك فلترة المشاريع
const filterButtons = document.querySelectorAll('.f-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // تغيير الزرار النشط
        document.querySelector('.f-btn.active').classList.remove('active');
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.classList.contains(filterValue)) {
                card.classList.remove('hide');
                card.classList.add('show');
            } else {
                card.classList.remove('show');
                card.classList.add('hide');
            }
        });
    });
});