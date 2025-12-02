// Menu Toggle para dispositivos móveis
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// Scroll suave para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerOffset = 80;
            const elementPosition = targetSection.offsetTop;
            const offsetPosition = elementPosition - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animação de entrada dos cards ao rolar a página
function animateOnScroll() {
    const cards = document.querySelectorAll('.beneficio-card, .plano-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s, transform 0.6s';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Inicializa as animações quando a página carregar
window.addEventListener('load', animateOnScroll);

// Adiciona funcionalidade aos botões de planos
const planButtons = document.querySelectorAll('.btn-plano');

planButtons.forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.closest('.plano-card').querySelector('h3').textContent;
        alert(`Obrigado pelo interesse no ${planName}! Em breve nossa equipe entrará em contato.`);
    });
});

// Efeito de mudança de cor do header ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});