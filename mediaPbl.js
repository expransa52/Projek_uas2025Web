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

// Tombol keluar dari aplikasi/website
function logout() {
    Swal.fire({
        title: 'Log out',
        text: "Anda Yakin Ingin Keluar?",
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'TIDAK',
        confirmButtonColor: '#ff5252',
        cancelButtonColor: '#ffe066',
        confirmButtonText: 'Iya, keluar!',
        customClass: {
            popup: 'pixel-swal',
            title: 'pixel-swal-title',
            content: 'pixel-swal-content',
            confirmButton: 'pixel-swal-confirm',
            cancelButton: 'pixel-swal-cancel'
        },
        buttonsStyling: false,
        backdrop: `
            rgba(0,0,0,0.5)
            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffe066' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")
        `
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Berhasil Keluar!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'pixel-swal',
                    title: 'pixel-swal-title',
                    icon: 'pixel-swal-icon'
                }
            }).then(() => {
                window.location.href = 'Loginmediapbl.html';
            });
        }
    });
}

// Responsive: auto-hide sidebar on mobile
window.addEventListener('resize', function () {
    if (window.innerWidth <= 600) sidebar.classList.add('hide');
    else sidebar.classList.remove('hide');
});
if (window.innerWidth <= 600) sidebar.classList.add('hide');

// Tombol keluar dari Kuis
function keluar() {
    Swal.fire({
        title: 'Keluar Dari Kuis ?',
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Tidak',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Keluar!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Berhasil Keluar Dari Kuis!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                window.location.href = "mediaPbl.html";
            });
        }
    });
}
