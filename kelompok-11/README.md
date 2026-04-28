# Map Marker — Kelompok 10

Tugas kolaborasi Git — penggunaan sistem kontrol versi dalam pengembangan perangkat lunak.

## Anggota Kelompok

| Nama | Branch | File Marker | Wilayah |
|------|--------|-------------|---------|
| Aska (Ketua) | `aska` | `marker1.js` | Banda Aceh & Aceh Besar |
| Tasya Maulidda | `TasyaM` | `markers_a.js` | Aceh Utara & Aceh Timur |
| Tasya Zahrani | `TasyaZ` | `markers_b.js` | Sabang & Aceh Tengah |

## Cara Menjalankan

Buka file `index.html` di browser. Tidak perlu server, cukup double-click.

> Pastikan koneksi internet aktif karena tile peta diambil dari OpenStreetMap.

## Struktur File

```
kelompok-11/
├── index.html        # Halaman utama peta
├── marker1.js   # Data marker Aska
└── README.md         # Dokumentasi ini
```

## Library

- [Leaflet.js 1.9.4](https://leafletjs.com/) — peta interaktif open source
- [OpenStreetMap](https://www.openstreetmap.org/) — tile peta gratis

## Cara Menambah Marker

Edit file marker masing-masing, tambahkan objek baru di array:

```js
{
  nama: "Nama Lokasi",
  lat: 5.5497,
  lng: 95.3175,
  deskripsi: "Deskripsi singkat lokasi"
}
```

Commit setiap hari minimal 1x:

```bash
git add marker1.js
git commit -m "feat: add marker [nama_lokasi] - [tanggal]"
git push origin aska
```
