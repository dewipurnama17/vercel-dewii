document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    const footerHomeLink = document.querySelector('.footer ul li a[href="#home"]');
    
    // Tambahkan event listener untuk mengatur klik pada menu icon
    menuIcon.addEventListener('click', () => {
        // Toggle class 'active' pada navMenu
        navMenu.classList.toggle('active');
    });
    // Loop melalui setiap link navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Menghentikan perilaku default link
            
            // Ambil id dari link yang diklik
            const sectionId = this.getAttribute('href').substring(1); // mengambil id dari href, potong text setelah #
            
            // Scroll ke bagian dengan id yang sesuai
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' }); // pergerakan lembut
            }

            // Tambahkan class 'active' pada link yang diklik, dan hapus 'active' dari link lainnya
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Scroll ke bagian atas halaman saat link "Home" pada footer diklik
    if (footerHomeLink) {
        footerHomeLink.addEventListener('click', function(e) {
            e.preventDefault(); // Untuk mencegah perilaku default dari link
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll ke atas halaman dengan pergerakan lembut
        });
    }
});

