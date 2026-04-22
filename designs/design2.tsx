import { useEffect, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [produktyData, setProduktyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedShop, setSelectedShop] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("https://unestimable-bibi-helically.ngrok-free.dev/produkty", {
      headers: { "ngrok-skip-browser-warning": "true" }
    })
      .then(res => res.json())
      .then(data => {
        setProduktyData(data);
        setFilteredData(data);
      })
      .catch(() => {
        setFilteredData([]);
      });
  }, []);

  useEffect(() => {
    let data = [...produktyData];

    if (query) {
      data = data.filter(p =>
        p.nazwa.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedShop) {
      data = data.filter(p => p.sklep === selectedShop);
    }

    setFilteredData(data);
  }, [query, selectedShop, produktyData]);

  const sortProducts = (order) => {
    const sorted = [...filteredData].sort((a, b) =>
      order === "asc" ? a.cena - b.cena : b.cena - a.cena
    );
    setFilteredData(sorted);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <h1>Produkty z gazetki</h1>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        <img
          src={darkMode ? "/pic/slonce.png" : "/pic/ksiezyc.png"}
          alt="theme"
        />
      </button>

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
                <img src="/pic/all.png" alt="all" /> Wszystkie sklepy
              </div>

              <div
                className="option"
                onClick={() => {
                  setSelectedShop("Lidl");
                  setDropdownOpen(false);
                }}
              >
                <img src="/pic/lidl.png" alt="lidl" /> Lidl
              </div>

              <div
                className="option"
                onClick={() => {
                  setSelectedShop("Biedronka");
                  setDropdownOpen(false);
                }}
              >
                <img src="/pic/biedronka.png" alt="biedronka" /> Biedronka
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid">
        {filteredData.length === 0 ? (
          <p className="status-text">Brak produktów lub błąd pobierania</p>
        ) : (
          filteredData.map((p, i) => (
            <div key={i} className="card">
              <div className="tag">PROMO</div>
              <h3>{p.nazwa}</h3>
              <div className="price">{p.cena} zł</div>
              <div className="shop">{p.sklep}</div>
              {p.opis && <p>{p.opis}</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
