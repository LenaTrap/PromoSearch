import { useEffect, useState } from "react";

const SUPABASE_URL = "https://xtucjfzxwfxnlowjwxgk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0dWNqZnp4d2Z4bmxvd2p3eGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MDg0NzIsImV4cCI6MjA5MTM4NDQ3Mn0.CpIjKKhbXrNAnEefZYU-4T1jUWI7whpygeiXZggNvQs";

export default function App() {
  return (
    <div className="bg-background font-body-md text-on-surface">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest dark:bg-surface-dim border-b border-outline-variant dark:border-outline docked full-width top-0 sticky z-50">
        <nav className="flex justify-between items-center px-margin-desktop py-md w-full max-w-max-width mx-auto">
          <div className="flex items-center gap-xl">
            <span className="text-headline-md font-headline-md font-black text-primary dark:text-primary-fixed">LidlPromos</span>
            <div className="hidden md:flex items-center gap-lg font-body-md text-body-md">
              <a className="text-primary dark:text-primary-fixed font-bold border-b-2 border-primary dark:border-primary-fixed pb-1 hover:text-primary-container transition-colors" href="#">Weekly Ad</a>
              <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary-container dark:hover:text-primary-fixed-dim transition-colors" href="#">Groceries</a>
              <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary-container dark:hover:text-primary-fixed-dim transition-colors" href="#">Locations</a>
              <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary-container dark:hover:text-primary-fixed-dim transition-colors" href="#">Rewards</a>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <div className="hidden lg:flex items-center gap-sm">
              <button className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs">
                <span className="material-symbols-outlined">location_on</span>
                Store Finder
              </button>
            </div>
            <div className="flex items-center gap-md border-l border-outline-variant pl-md ml-xs">
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" data-icon="favorite">favorite</button>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors relative" data-icon="shopping_cart">
                shopping_cart
                <span className="absolute -top-2 -right-2 bg-tertiary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </button>
              <button className="bg-primary text-on-primary px-lg py-sm rounded-full font-label-bold text-label-bold hover:bg-primary-container transition-colors active:scale-95 active:duration-75">Log In</button>
            </div>
          </div>
        </nav>
      </header>
      <main className="max-w-max-width mx-auto px-margin-desktop py-xl space-y-xl">
        {/* Hero Promotional Banner */}
        <section className="relative w-full rounded-xl overflow-hidden bg-primary-container min-h-[400px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10"></div>
          <div className="relative z-20 px-xl w-full md:w-2/3">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-md py-xs rounded-full font-label-bold text-label-bold mb-md">TYLKO W TYM TYGODNIU</span>
            <h1 className="text-display-lg font-display-lg text-white mb-md">Wielkie Okazje Tygodnia</h1>
            <p className="text-body-lg font-body-lg text-white opacity-90 mb-xl max-w-md">Odkryj setki produktów w niesamowitych cenach. Od wieych warzyw po ulubione marki kawy - wszystko taniej nawet o 50%!</p>
            <button className="bg-secondary-fixed text-on-secondary-fixed px-xl py-md rounded-full font-headline-sm text-headline-sm hover:scale-105 transition-transform shadow-lg">Sprawd gazetk</button>
          </div>
          <div className="absolute inset-0 w-full h-full">
            <img className="w-full h-full object-cover object-center" data-alt="A bright and vibrant grocery store interior focusing on a fresh produce section with high-key lighting. The scene is filled with colorful vegetables and fruits like bell peppers, tomatoes, and citrus, creating a welcoming and modern retail atmosphere. The color palette emphasizes primary blues and warm yellows to align with a professional, high-contrast supermarket brand identity. The overall mood is energetic, clean, and commercial." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxwvBWOJkQQB1nV0L92X6DBjOp20tVto54dm9Txv2gtkLrJKIF7DLBvuY5rWRzOsBkEGTkGUPhzTZ6PFQXW1sqE0fp_DK30JtUMy8_1GvSOdbs5_wWIQcrw7t8af5Pw5_vMaZanHc6U1wm9GZEGqbylA2s6rXOOl_OKMh9mrovzV77X8VUEkvq039Gc9xaWsY9dIDeziBbJ3FNSSfNzniMyT9TPmpGda8Kx6wet5YZOP5DyIPPTAbFfLxuBeYkXDYiMPGrEwNdIYc" />
          </div>
        </section>
        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-md">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-md">Kategorie</h2>
              <div className="flex flex-wrap lg:flex-col gap-sm">
                <button className="flex items-center gap-sm px-md py-sm rounded-full bg-primary text-on-primary font-body-md text-body-md w-full text-left">
                  <span className="material-symbols-outlined">restaurant</span>
                  Wszystkie promocje
                </button>
                <button className="flex items-center gap-sm px-md py-sm rounded-full bg-surface-container hover:bg-surface-variant transition-colors text-on-surface-variant font-body-md text-body-md w-full text-left">
                  <span className="material-symbols-outlined">eco</span>
                  Owoce i Warzywa
                </button>
                <button className="flex items-center gap-sm px-md py-sm rounded-full bg-surface-container hover:bg-surface-variant transition-colors text-on-surface-variant font-body-md text-body-md w-full text-left">
                  <span className="material-symbols-outlined">egg</span>
                  Nabia
                </button>
                <button className="flex items-center gap-sm px-md py-sm rounded-full bg-surface-container hover:bg-surface-variant transition-colors text-on-surface-variant font-body-md text-body-md w-full text-left">
                  <span className="material-symbols-outlined">kebab_dining</span>
                  Miso
                </button>
                <button className="flex items-center gap-sm px-md py-sm rounded-full bg-surface-container hover:bg-surface-variant transition-colors text-on-surface-variant font-body-md text-body-md w-full text-left">
                  <span className="material-symbols-outlined">local_drink</span>
                  Napoje
                </button>
              </div>
            </div>
            <div className="bg-tertiary-container rounded-lg p-md text-on-tertiary-container">
              <h3 className="font-headline-sm text-headline-sm mb-xs">Aplikacja Lidl Plus</h3>
              <p className="font-body-sm text-body-sm mb-md">Aktywuj kupony i oszczdzaj jeszcze wicej przy kasie!</p>
              <button className="w-full bg-white text-tertiary py-sm rounded-full font-label-bold text-label-bold">Pobierz teraz</button>
            </div>
          </aside>
          {/* Product Section */}
          <section className="flex-1 space-y-lg">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-lg text-headline-lg text-primary">Super Ceny</h2>
              <div className="flex items-center gap-sm">
                <span className="text-body-sm text-on-surface-variant">Sortuj wedug:</span>
                <select className="bg-transparent border-none font-label-bold text-primary focus:ring-0 cursor-pointer">
                  <option>Najwiksza znika</option>
                  <option>Cena: od najniszej</option>
                  <option>Popularno</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-gutter">
              {/* Product 1: Maso */}
              <div className="bg-white border border-outline-variant rounded-lg p-md hover:shadow-md transition-shadow group">
                <div className="relative h-48 mb-md rounded-lg overflow-hidden bg-surface-container-low">
                  <img className="w-full h-full object-contain group-hover:scale-105 transition-transform" data-alt="A professional studio product shot of a premium brick of butter on a minimalist white background. The lighting is soft and bright, highlighting the smooth texture and creamy color of the dairy product. The image reflects a clean, high-quality supermarket aesthetic with a focus on freshness and essential household groceries, fitting a modern and accessible retail brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_EU_44OHlmaJVebKzxM7LqnaEgk4M7uleGMLzAK-kR2onhrdDCs24Lpfs4SNbbeo1nzZnOzVzwIxskiqzGVVYH7fNaL4wZfNA-ghM7PxWyYBoHbogDirr5DGBr-UIeRA9J0ZNI4BvNHhRG2o6jxRZ2SLnhGQAw1WyhZNf6i65zdexQgzujry1usQe3BKVWhA5NOc8WmYsbxnAD4tMJ3mKxiAiGkSR436wSly0xs1hXVubKqfBotPvOwVtg6cwc_KJBpooJDegsew" />
                  <div className="absolute top-sm right-sm bg-tertiary text-white font-label-bold text-label-bold px-sm py-1 rounded-full shadow-sm">-33%</div>
                </div>
                <div className="space-y-xs mb-md">
                  <span className="text-body-sm text-on-surface-variant font-medium">PILOS</span>
                  <h3 className="font-body-md text-body-md font-bold h-12 overflow-hidden">Maso Ekstra Pilos 82% tuszczu, 200g</h3>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-body-sm text-on-surface-variant line-through">7,49 z</span>
                    <span className="text-price-display font-price-display text-tertiary">4,99 z</span>
                  </div>
                  <button className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-container active:scale-90 transition-all">
                    <span className="material-symbols-outlined" data-icon="add">add</span>
                  </button>
                </div>
              </div>
              {/* Product 2: Banany */}
              <div className="bg-white border border-outline-variant rounded-lg p-md hover:shadow-md transition-shadow group">
                <div className="relative h-48 mb-md rounded-lg overflow-hidden bg-surface-container-low">
                  <img className="w-full h-full object-contain group-hover:scale-105 transition-transform" data-alt="A close-up high-resolution photograph of a bunch of ripe, vibrant yellow premium bananas on a clean, light-mode background. The fruit appears fresh and unblemished, illuminated by bright daylight that accentuates the saturated yellow color. The visual style is commercial and appetizing, representing the highest quality of fresh produce available in a modern grocery store environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0XcLPQtEhatOxCKTzICO_4pXS_MnyVzv7IAFMl2VZNhJw4F3KOPktOZy1QXAXPLm_TLZnl0qhaJzzQexl7khF2i9zZdbsGijZM4y4peXD4PnNAbyifHAQhBp3CV6bjizYR9M2f41AYI5EmGqEq-An0NeF0jMVyZRQIS6vtr5OjJYgQ24peMfpGGu-rQstiJzf758pIsV9V61Cq_rAwvuNCgqSkVTkSkPvlYYbgc3UITRdky1Fbb4RVgU6OqMWQyObNRQbR4B83v4" />
                  <div className="absolute top-sm right-sm bg-tertiary text-white font-label-bold text-label-bold px-sm py-1 rounded-full shadow-sm">-50%</div>
                </div>
                <div className="space-y-xs mb-md">
                  <span className="text-body-sm text-on-surface-variant font-medium">RYNEK LIDLA</span>
                  <h3 className="font-body-md text-body-md font-bold h-12 overflow-hidden">Banany Premium, luzem 1kg</h3>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-body-sm text-on-surface-variant line-through">6,99 z</span>
                    <span className="text-price-display font-price-display text-tertiary">3,49 z</span>
                  </div>
                  <button className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-container active:scale-90 transition-all">
                    <span className="material-symbols-outlined" data-icon="add">add</span>
                  </button>
                </div>
              </div>
              {/* Product 3: Kawa */}
              <div className="bg-white border border-outline-variant rounded-lg p-md hover:shadow-md transition-shadow group">
                <div className="relative h-48 mb-md rounded-lg overflow-hidden bg-surface-container-low">
                  <img className="w-full h-full object-contain group-hover:scale-105 transition-transform" data-alt="An elegant product photograph of a coffee bean bag and a cup of freshly brewed coffee, styled with a modern, high-contrast aesthetic. The setting is bright and clean with soft shadows, highlighting the rich dark tones of the coffee against a pristine white surface. The image evokes a sense of quality and morning energy, aligning with a premium grocery store brand that values both affordability and taste." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaOl8BAMOv9zNHHeXl__SvJBUX1LSnVEClzyTA8S6miaY0jaPMVVfrufCfInoXRYiNiu3LjeyPomBBBP_tVsClRc4QJtEiO_LEMqErF5_6wr20ALW7qfUvSTPnP5cLyWrYCsPOxpbo1tyRb6tZW4a_4iyQ5xvGT6RZWyG-IKQ9Uv5W_vk3ZwZiGMuAZU0Wg36-qBbes8Q3vsISlvEWf0a32Z-DTCi2c4AtIKbbDO_oXROOUXtP7j6O46mkMF__rFbJNM5aOLPc2bo" />
                  <div className="absolute top-sm right-sm bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-sm py-1 rounded-full shadow-sm">SUPERCENA</div>
                </div>
                <div className="space-y-xs mb-md">
                  <span className="text-body-sm text-on-surface-variant font-medium">LAVAZZA</span>
                  <h3 className="font-body-md text-body-md font-bold h-12 overflow-hidden">Kawa Lavazza Qualità Oro 250g</h3>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-body-sm text-on-surface-variant line-through">29,99 z</span>
                    <span className="text-price-display font-price-display text-secondary">19,99 z</span>
                  </div>
                  <button className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-container active:scale-90 transition-all">
                    <span className="material-symbols-outlined" data-icon="add">add</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Secondary Promo Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter pt-xl">
              <div className="bg-secondary-container rounded-lg p-xl flex flex-col justify-center relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-headline-lg font-headline-lg text-on-secondary-container mb-sm">Zawsze wiee</h4>
                  <p className="text-body-md text-on-secondary-container mb-lg">Dostawy owoców i warzyw kadego ranka prosto od lokalnych dostawców.</p>
                  <button className="bg-primary text-on-primary px-lg py-sm rounded-full font-label-bold text-label-bold self-start">Dowiedz si wicej</button>
                </div>
                <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] opacity-10 text-on-secondary-container" data-icon="local_shipping">local_shipping</span>
              </div>
              <div className="bg-surface-container-highest rounded-lg p-xl flex flex-col justify-center relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-headline-lg font-headline-lg text-primary mb-sm">Nasze Marki</h4>
                  <p className="text-body-md text-on-surface-variant mb-lg">Wysoka jako w dyskontowej cenie. Wybierz Pilos, Dulano lub Parkside.</p>
                  <button className="border-2 border-primary text-primary px-lg py-sm rounded-full font-label-bold text-label-bold self-start">Zobacz ofert</button>
                </div>
                <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] opacity-10 text-primary" data-icon="verified">verified</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-surface-container-high dark:bg-inverse-surface mt-xl">
        <div className="w-full py-xl px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-max-width mx-auto">
          <div className="space-y-md">
            <span className="text-headline-sm font-headline-sm font-bold text-primary dark:text-primary-fixed">LidlPromos</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant max-w-xs">© 2024 LidlPromos. All rights reserved. Radically accessible groceries.</p>
            <div className="flex gap-md">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity" data-icon="facebook">social_leaderboard</span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity" data-icon="instagram">photo_camera</span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity" data-icon="youtube">video_library</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-md">
            <div className="flex flex-col gap-sm">
              <span className="font-label-bold text-on-surface">Customer Care</span>
              <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity font-body-sm text-body-sm" href="#">Help Center</a>
              <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity font-body-sm text-body-sm" href="#">Contact Us</a>
            </div>
            <div className="flex flex-col gap-sm">
              <span className="font-label-bold text-on-surface">Legal</span>
              <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity font-body-sm text-body-sm" href="#">Privacy Policy</a>
              <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity font-body-sm text-body-sm" href="#">Terms of Use</a>
              <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-opacity font-body-sm text-body-sm" href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
