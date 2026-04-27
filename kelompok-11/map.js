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

// Fungsi tampilkan marker
function loadMarkers(data) {
  locationList.innerHTML = "";

  // hapus marker lama
  markerObjects.forEach(m => map.removeLayer(m));
  markerObjects = [];

  data.forEach((marker, index) => {

    // Tambah marker ke map
    const m = L.marker([marker.lat, marker.lng])
      .addTo(map)
      .bindPopup(`
        <b>${marker.nama}</b><br>
        ${marker.deskripsi}
      `);

    markerObjects.push(m);

    // Tambah ke sidebar
    const li = document.createElement("li");
    li.textContent = marker.nama;

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

  const filtered = markersB.filter(m =>
    m.nama.toLowerCase().includes(keyword)
  );

  loadMarkers(filtered);
});

// Load awal
loadMarkers(markersB);