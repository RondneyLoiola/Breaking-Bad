document.addEventListener('DOMContentLoaded', function() {
    
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        let activeSectionIndex = 0;
        const scrollPosition = window.scrollY - header.offsetHeight;

        // Aplica ou remove a sombra do header
        if(scrollPosition <= 0) {
            header.style.background = 'transparent';
        } else {
            header.style.background = '#0d1f1a';
        }

        // Verifica em qual seção o scroll está
        for(let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop - 189;
            const sectionBottom = sectionTop + section.offsetHeight;

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                break;
            }
        }

        // Atualiza o item de navegação ativo
        navItems.forEach(item => item.classList.remove('active'));
        navItems[activeSectionIndex].classList.add('active');
    });
});