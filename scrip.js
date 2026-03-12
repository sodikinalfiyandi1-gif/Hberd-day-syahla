document.getElementById('tombol').onclick = function() {
    alert('Tombol telah diklik!');
    document.getElementById('judul').style.color = 'red';
};
document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealMessage');
    const hiddenMessage = document.getElementById('hiddenMessage');
    const fallingElements = document.querySelector('.falling-elements');

    // Tampilkan pesan tersembunyi saat tombol diklik
    revealButton.addEventListener('click', () => {
        hiddenMessage.classList.remove('hidden');
        revealButton.style.display = 'none'; // Sembunyikan tombol setelah diklik
    });

    // Fungsi untuk membuat partikel jatuh
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Ukuran random (kecil-sedang)
        const size = Math.random() * 10 + 5; // antara 5px dan 15px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Posisi X random
        particle.style.left = `${Math.random() * 100}vw`;

        // Durasi animasi random
        const animationDuration = Math.random() * 8 + 5; // antara 5s dan 13s
        particle.style.animationDuration = `${animationDuration}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`; // Delay random agar tidak jatuh bersamaan

        // Bentuk random (bintang atau lingkaran)
        if (Math.random() > 0.5) {
            // Ini bisa jadi bintang, tapi untuk kesederhanaan kita pakai lingkaran dengan shadow untuk efek bintang
            particle.style.boxShadow = `0 0 ${size/2}px ${size/3}px rgba(255, 255, 255, 0.7)`;
            particle.style.backgroundColor = 'transparent'; // Hanya shadow untuk bintang
        } else {
            particle.style.backgroundColor = 'white';
        }
        
        fallingElements.appendChild(particle);

        // Hapus partikel setelah animasinya selesai untuk menghemat memori
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }

    // Buat partikel secara terus menerus
    setInterval(createParticle, 300); // Setiap 300ms, buat partikel baru
});