# Studi Kasus Front-End: Website Gerakan "Generasi Biru"

Proyek ini merupakan studi kasus *front-end* fungsional yang dikembangkan oleh **Yurida Zani**.

**https://generasi-biru-app.vercel.app/**

---

##  Deskripsi Proyek

"Generasi Biru" adalah sebuah studi kasus website untuk sebuah gerakan aktivisme lingkungan fiktif. Tujuan proyek ini adalah untuk membangun sebuah "pusat gerakan" digital yang profesional dan kredibel.

Fokus utamanya adalah menciptakan pengalaman pengguna yang imersif dan fungsional untuk mengartikulasikan manifesto gerakan, menampilkan dampak (impact) secara visual, merekrut relawan, dan memproses donasi.

## Fitur Utama

Situs ini dirancang sebagai *web app* multi-halaman dengan fitur-fitur teknis berikut:

* **Navigasi Multi-Halaman:** Diimplementasikan menggunakan `react-router-dom` untuk navigasi yang bersih dan instan antara halaman utama, halaman donasi (`/donate`), dan halaman rekrutmen (`/join`).
* **Form Fungsional Penuh:** Halaman "Gabung Gerak" dan "Bahan Bakar" menggunakan `react-hook-form` untuk:
    * Validasi input *real-time* (nama, email, telepon).
    * Manajemen *state* (memilih nominal donasi).
    * *Loading state* saat tombol *submit* ditekan.
    * Notifikasi *success/error* yang dinamis menggunakan `Framer Motion`.
* **Animasi Interaktif (Framer Motion):**
    * **Statistik Dampak:** Angka-angka pada bagian "Bukti Kerja" dianimasikan (menghitung naik) saat terlihat di layar menggunakan *hook* `useInView`.
    * **Galeri Interaktif:** Bagian "KRU" menggunakan *layout* *draggable* horizontal (`drag="x"`) untuk pengalaman *mobile-friendly*.
* **Layout Imersif (Scroll Snap):** Halaman utama menggunakan properti CSS `scroll-snap-y` untuk membagi setiap bagian (`Hero`, `Manifesto`, `Impact`) menjadi satu layar penuh (*full-viewport sections*), menciptakan alur *storytelling* yang terfokus.

---

## Tumpukan Teknologi (Tech Stack)

* **Framework:** React.js (Vite)
* **Styling:** Tailwind CSS (via CDN)
* **Navigasi:** React Router (`react-router-dom`)
* **Animasi:** Framer Motion (`framer-motion`)
* **Manajemen Form:** React Hook Form (`react-hook-form`)
* **Ikon:** Lucide React (`lucide-react`)

---

## Palet Warna

| Warna | Hex Code | Penggunaan |
| :--- | :--- | :--- |
| **Polynesian Blue** | `#054a91ff` | Teks Utama, Latar Gelap, Footer |
| **Steel Blue** | `#3e7cb1ff` | Sub-Teks, Gradien Visual |
| **Vista Blue** | `#81a4cdff` | Teks Sekunder (Footer) |
| **Alice Blue** | `#dbe4eeff` | Latar Belakang Utama, Input Form |
| **Safety Orange** | `#f17300ff` | Tombol CTA (Donasi, Gabung) |

---

## Instalasi Lokal

1.  Clone repositori ini.
2.  Masuk ke direktori proyek.
    ```bash
    cd generasi-biru-app
    ```
3.  Install semua dependensi.
    ```bash
    npm install
    ```
4.  Jalankan server development.
    ```bash
    npm run dev
    ```

---

## Lisensi

Proyek ini dilisensikan di bawah **MIT License**.

Copyright (c) 2025 - **Yurida Zani**
