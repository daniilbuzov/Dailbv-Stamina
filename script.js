// ===== ОТСЛЕЖИВАНИЕ ДВИЖЕНИЯ МЫШИ ДЛЯ ГЛАЗ КОТИКА =====
document.addEventListener('mousemove', (e) => {
    const svg = document.querySelector('svg');
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const distance = 3;

    const pupil1 = document.getElementById('pupil1');
    const pupil2 = document.getElementById('pupil2');

    if (pupil1 && pupil2) {
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        pupil1.setAttribute('cx', 80 + x);
        pupil1.setAttribute('cy', 70 + y);
        pupil2.setAttribute('cx', 120 + x);
        pupil2.setAttribute('cy', 70 + y);
    }
});

// ===== КЛИК НА КОТИКА =====
const svg = document.querySelector('svg');
if (svg) {
    svg.addEventListener('click', function() {
        const messages = ['😸', '😻', '🐱', '😸 Мяу!', '😻 Спасибо!', '😺 Еще!'];
        const msg = messages[Math.floor(Math.random() * messages.length)];
        
        const msgEl = document.createElement('div');
        msgEl.className = 'message';
        msgEl.textContent = msg;
        msgEl.style.left = (Math.random() * 100 - 50) + 'px';
        msgEl.style.top = '-50px';
        
        this.parentElement.appendChild(msgEl);
        setTimeout(() => msgEl.remove(), 1000);
    });
}

// ===== ФУНКЦИЯ СКАЧИВАНИЯ =====
function downloadFile() {
    alert('⬇️ DAILBV STAMINA (6767.exe) готов к скачиванию!\n\nСохраните файл и запустите его для начала работы.');
    // В реальности здесь будет ссылка на скачивание файла
}

// ===== ПЛАВНАЯ ПРОКРУТКА =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ЗАГРУЗКА СТРАНИЦЫ =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐱 Dailbv Stamina website loaded!');
});
