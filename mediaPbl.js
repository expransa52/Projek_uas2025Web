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
  
    // --- Login Form ---
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Username TIDAK DIPAKAI
            const password = passwordInput.value.trim();

            // Hanya cek passwordnya saja
            if (password === commonPassword) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Berhasil',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    window.location.href = 'mediaPbl.html';
                });
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'USERNAME atau PASSWORD salah',
                    showConfirmButton: true,
                    confirmButtonText: 'Coba Lagi',
                    confirmButtonColor: '#dc3545',
                    allowOutsideClick: false,
                    allowEscapeKey: true
                });
            }
        });
    }
});

// Sidebar toggle
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
});

// Navigasi sidebar
document.querySelectorAll('#sidebar .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        // Aktifkan link
        document.querySelectorAll('#sidebar .nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        // Menampilkan halaman
        const page = this.getAttribute('data-page');
        showPage(page);
        // Jika di mobile, otomatis tutup sidebar
        if (window.innerWidth <= 600) sidebar.classList.add('hide');
    });
});

function showPage(page) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('d-none'));
    if (page === 'beranda') {
        document.title = "Media Interaktif Sistem Pernapasan pada Manusia - Beranda";
        document.getElementById('beranda-page').classList.remove('d-none');
    } else if (page === 'materi') {
        document.title = "Media Interaktif Sistem Pernapasan pada Manusia - Materi";
        document.getElementById('materi-page').classList.remove('d-none');
    } else if (page === 'kuis') {
        document.title = "Media Interaktif Sistem Pernapasan pada Manusia - Kuis";
        window.location.href = "kuisPbl.html";
        document.getElementById('kuis-page').classList.remove('d-none');
    } else if (page === 'video') {
        document.title = "Media Interaktif Sistem Pernapasan pada Manusia - Video";
        document.getElementById('video-page').classList.remove('d-none');
    } else if (page === 'tentang') {
        document.title = "Media Interaktif Sistem Pernapasan pada Manusia - Tentang";
        document.getElementById('tentang-page').classList.remove('d-none');
    }
}
