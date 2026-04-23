import { useEffect, useState } from "react";

const SUPABASE_URL = "https://xtucjfzxwfxnlowjwxgk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0dWNqZnp4d2Z4bmxvd2p3eGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MDg0NzIsImV4cCI6MjA5MTM4NDQ3Mn0.CpIjKKhbXrNAnEefZYU-4T1jUWI7whpygeiXZggNvQs";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [produktyData, setProduktyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedShop, setSelectedShop] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch data
useEffect(() => {
  fetch(`${SUPABASE_URL}/rest/v1/promocje?select=*`, {
  headers: {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`
  }
})
    .then(res => res.json())
    .then(data => {
      console.log("DATA:", data);

      // ✅ CRASH PROTECTION HERE
      const safeData = Array.isArray(data) ? data : [];

      setProduktyData(safeData);
      setFilteredData(safeData);
      setLoading(false);
    })
    .catch(err => {
      console.error("FETCH ERROR:", err);
      setFilteredData([]);
      setLoading(false);
    });
}, []);

  // Filter logic
  useEffect(() => {
    let data = [...produktyData];

    if (query) {
      data = data.filter(p =>
        p.produkt.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedShop) {
      data = data.filter(p => p.strona === selectedShop);
    }

    setFilteredData(data);
  }, [query, selectedShop, produktyData]);

  // Sort
  const sortProducts = (order) => {
    const sorted = [...filteredData].sort((a, b) =>
      order === "asc"
  ? Number(a.cena) - Number(b.cena)
  : Number(b.cena) - Number(a.cena)
    );
    setFilteredData(sorted);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <h1>Produkty z gazetki</h1>

      {/* Theme Toggle */}
      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        <img
          src={darkMode ? "./pic/slonce.png" : "./pic/ksiezyc.png"}
          alt="theme"
        />
      </button>

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Szukaj produktu..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={() => sortProducts("asc")}>
          ⬇ Najtańsze
        </button>
        <button onClick={() => sortProducts("desc")}>
          ⬆ Najdroższe
        </button>

        {/* Dropdown */}
        <div className="custom-select">
          <div
            className="selected"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedShop || "Wszystkie sklepy"}
          </div>

          {dropdownOpen && (
            <div className="dropdown">
              <div
                className="option"
                onClick={() => {
                  setSelectedShop("");
                  setDropdownOpen(false);
                }}
              >
                <img src="./pic/all.png" /> Wszystkie sklepy
              </div>

              <div
                className="option"
                onClick={() => {
                  setSelectedShop("Lidl");
                  setDropdownOpen(false);
                }}
              >
                <img src="./pic/lidl.png" /> Lidl
              </div>

              <div
                className="option"
                onClick={() => {
                  setSelectedShop("Biedronka");
                  setDropdownOpen(false);
                }}
              >
                <img src="./pic/biedronka.png" /> Biedronka
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Products */}
      <div className="grid">
        {loading ? (
          <p className="status-text loading">Ładowanie produktów...</p>
        ) : filteredData.length === 0 ? (
          <p className="status-text">Błąd pobierania danych!</p>
        ) : (
          filteredData.map((p, i) => (
            <div key={i} className="card">
              <div className="tag">PROMO</div>
              <h3>{p.produkt}</h3>
              <div className="price">{p.cena} zł</div>
              <div className="shop">{p.strona}</div>
              <p>Stara cena: {p.stara_cena} zł</p>
              <p>Rabat: {p.rabat}%</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
