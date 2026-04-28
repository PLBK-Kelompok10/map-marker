// map.js
// Kelompok 11

// Inisialisasi map
const map = L.map('map').setView([4.7, 96.8], 8);

// Tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Elemen HTML
const locationList = document.getElementById("locationList");
const searchInput = document.getElementById("searchInput");
let markerObjects = [];

// Gabung semua marker dari semua anggota + label warna
const semuaMarker = [
  ...markersAska.map(m => ({ ...m, anggota: "Aska", warna: "#e74c3c" })),
  ...markersA.map(m => ({ ...m, anggota: "Tasya Maulidda", warna: "#2980b9" })),
  ...markersB.map(m => ({ ...m, anggota: "Tasya Zahrani", warna: "#27ae60" })),
];

// Fungsi buat ikon berwarna per anggota
function buatIkon(warna) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:14px; height:14px;
      background:${warna};
      border:2px solid white;
      border-radius:50%;
      box-shadow:0 1px 4px rgba(0,0,0,0.4);
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });
}

// Fungsi tampilkan marker
function loadMarkers(data) {
  locationList.innerHTML = "";
  markerObjects.forEach(m => map.removeLayer(m));
  markerObjects = [];

  data.forEach((marker) => {
    const m = L.marker([marker.lat, marker.lng], { icon: buatIkon(marker.warna) })
      .addTo(map)
      .bindPopup(`
        <b>${marker.nama}</b><br>
        <span style="color:#666;font-size:12px">${marker.deskripsi}</span><br>
        <span style="color:#999;font-size:11px">oleh: ${marker.anggota}</span>
      `);
    markerObjects.push(m);

    const li = document.createElement("li");
    li.innerHTML = `
      <span style="
        display:inline-block;
        width:10px; height:10px;
        background:${marker.warna};
        border-radius:50%;
        margin-right:8px;
      "></span>${marker.nama}
      <small style="display:block;color:#aaa;font-size:11px;margin-left:18px">${marker.anggota}</small>
    `;
    li.addEventListener("click", () => {
      map.setView([marker.lat, marker.lng], 13);
      m.openPopup();
    });
    locationList.appendChild(li);
  });
}

// Search
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = semuaMarker.filter(m =>
    m.nama.toLowerCase().includes(keyword) ||
    m.anggota.toLowerCase().includes(keyword)
  );
  loadMarkers(filtered);
});

// Load awal semua marker
loadMarkers(semuaMarker);