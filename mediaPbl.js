document.addEventListener('DOMContentLoaded', () => {
    const halamanLogin = document.getElementById('halaman_login');
    const sidebar = document.getElementById('sidebar');  
    const mainContent = document.getElementById('mainContent');  
    const showSidebarButton = document.getElementById('showSidebar'); 
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const eyeIcon = document.getElementById('eyeIcon');

    const commonPassword = 'siper01';

    // ini untuk menampilkan passwordnya di console atau di bagian inspect bisa dilihat jika lupa!
    console.log(`Password untuk login (DEMO): ${commonPassword}`); // Untuk debugging di console

    // --- Toggle Password Visibility ---
    if (togglePassword && passwordInput && eyeIcon) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            eyeIcon.classList.toggle('bi-eye');
            eyeIcon.classList.toggle('bi-eye-slash');
        });
    }
  
