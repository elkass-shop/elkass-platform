
(function(){
  const products = [
    {id:'tv-samsung-55-crystal-uhd', name:'Samsung 55” Crystal UHD 4K', short:'Smart TV, dobry obraz i konfiguracja ELKASS.', price:'2 299 zł', old:'2 999 zł', badge:'Hit tygodnia', image:'/assets/products/product-05-telewizor-samsung.jpg'},
    {id:'pralka-beko-8kg-inverter', name:'Beko pralka 8 kg Inverter', short:'Cicha pralka do rodzinnego domu.', price:'1 499 zł', old:'1 899 zł', badge:'Raty 0%', image:'/assets/products/product-02-pralka-beko.jpg'},
    {id:'zmywarka-bosch-60-serie4', name:'Bosch zmywarka 60 cm Serie 4', short:'Cicha zmywarka i montaż lokalny.', price:'1 999 zł', old:'2 499 zł', badge:'Super cena', image:'/assets/products/product-10-zmywarka-bosch.jpg'},
    {id:'ekspres-philips-lattego', name:'Philips LatteGo', short:'Kawy mleczne jednym kliknięciem.', price:'2 199 zł', old:'2 799 zł', badge:'Weekend', image:'/assets/products/product-12-ekspres-philips.jpg'},
    {id:'lodowka-lg-no-frost', name:'LG lodówka No Frost', short:'Duża pojemność i wniesienie.', price:'2 699 zł', old:'3 299 zł', badge:'Outlet', image:'/assets/products/product-16-lodowka-lg.jpg'},
    {id:'soundbar-lg-premium', name:'Soundbar LG', short:'Lepszy dźwięk do filmów i sportu.', price:'799 zł', old:'999 zł', badge:'Audio', image:'/assets/products/product-06-soundbar-lg.jpg'},
    {id:'laptop-lenovo-ideapad', name:'Lenovo IdeaPad', short:'Laptop do nauki, pracy i domu.', price:'2 399 zł', old:'2 899 zł', badge:'Back to school', image:'/assets/products/product-07-laptop-lenovo.jpg'},
    {id:'odkurzacz-bosch-hepa', name:'Bosch odkurzacz HEPA', short:'Mocne sprzątanie i filtr HEPA.', price:'699 zł', old:'899 zł', badge:'Poleca ELKASS', image:'/assets/products/product-09-odkurzacz-bosch.jpg'}
  ];
  function productCard(p){return `<article class="m4-card"><div class="m4-card-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div><div class="m4-card-body"><span class="m4-badge">${p.badge}</span><h3>${p.name}</h3><p>${p.short}</p><div class="m4-price"><strong>${p.price}</strong><s>${p.old}</s></div><a href="/app/product/?id=${p.id}">Zobacz produkt →</a></div></article>`}
  function addHomeShowroom(){
    if(!document.body || document.querySelector('.m4-showroom-banner')) return;
    const isHome = location.pathname==='/' || location.pathname==='/index.html' || location.pathname.includes('/app/home');
    if(!isHome) return;
    const main = document.querySelector('main'); if(!main) return;
    const banner = document.createElement('section');
    banner.className = 'm4-showroom-banner';
    banner.innerHTML = `<div class="m4-inner"><div><span class="m4-kicker">Demo Store Ready</span><h2>Sklep wypełniony produktami i grafikami</h2><p>Ta wersja służy do pokazania szefowi realnego kierunku: produkty, kategorie, lifestyle, banery i Media Studio są spięte w jedną warstwę demonstracyjną.</p><div class="m4-actions"><a class="m4-btn" href="/app/category/">Zobacz ofertę</a><a class="m4-btn ghost" href="/admin/">Przejdź do panelu</a></div></div><div class="m4-visual"><img src="/assets/gallery/gallery-16-salon-elkass.jpg" alt="Salon ELKASS"><img src="/assets/products/product-05-telewizor-samsung.jpg" alt="Telewizor"><img src="/assets/gallery/gallery-02-piekarniki-agd.jpg" alt="AGD"></div></div>`;
    const hero = document.querySelector('.hero');
    if(hero && hero.parentNode) hero.parentNode.insertBefore(banner, hero.nextSibling); else main.prepend(banner);
    const productsSec = document.createElement('section');
    productsSec.className='m4-section';
    productsSec.innerHTML = `<div class="wrap"><div class="m4-head"><div><span class="m4-kicker" style="background:#fff1f2;color:#b5121b;border-color:#ffd6db">Demo Content</span><h2>Produkty, które pokazują sklep „na żywo”</h2><p>Packshoty są już wpięte w karty, linki prowadzą do właściwych produktów, a później podmienisz grafiki z Media Studio bez zmiany układu.</p></div><a class="m4-btn" style="background:#111827;color:#fff" href="/app/promotions/">Wszystkie promocje</a></div><div class="m4-grid">${products.map(productCard).join('')}</div><div class="m4-media-status"><div><b>8</b><span>produktów pokazowych na Home</span></div><div><b>20+</b><span>produktów w demo bazie</span></div><div><b>16</b><span>zdjęć salonu i ekspozycji</span></div><div><b>9</b><span>motywów sezonowych gotowych pod grafiki</span></div></div></div>`;
    const trust = document.querySelector('#opinie') || document.querySelector('#znajdz-nas');
    if(trust && trust.parentNode) trust.parentNode.insertBefore(productsSec, trust); else main.appendChild(productsSec);
    const inspir = document.createElement('section');
    inspir.className='m4-section';
    inspir.innerHTML = `<div class="wrap"><div class="m4-head"><div><span class="m4-kicker" style="background:#f4f7fb;color:#111827;border-color:#e5e7eb">ELKASS Identity</span><h2>Salon, doradztwo i lokalna przewaga</h2><p>To miejsce pod prawdziwe zdjęcia ELKASS: salon, ekspozycja, transport, montaż i realizacje u klientów.</p></div></div><div class="m4-inspiration"><article class="m4-story"><img src="/assets/gallery/gallery-14-ekspozycja-sklepu.jpg" alt="Ekspozycja sklepu"><div class="m4-story-copy"><h3>Nie tylko sklep internetowy</h3><p>ELKASS ma pokazywać prawdziwy salon w Oleśnie, doradztwo i obsługę po zakupie — tego nie mają anonimowe markety.</p></div></article><div class="m4-mini-stories"><article class="m4-mini-story"><img src="/assets/gallery/gallery-05-pralki-i-suszarki.jpg" alt="AGD"><div><h4>AGD z dostawą i montażem</h4><p>Produkty mogą mieć zdjęcia aranżacyjne, montażowe i ekspozycyjne.</p></div></article><article class="m4-mini-story"><img src="/assets/gallery/gallery-08-rtv-telewizory.jpg" alt="RTV"><div><h4>RTV w realnej ekspozycji</h4><p>Hero, kategorie i promocje mogą korzystać z jednej biblioteki mediów.</p></div></article><article class="m4-mini-story"><img src="/assets/banners/raty-0.jpg" alt="Raty"><div><h4>Promocje i raty</h4><p>Raty 0% i dogodne raty pozostają osobnymi mechanizmami w panelu.</p></div></article></div></div></div>`;
    if(trust && trust.parentNode) trust.parentNode.insertBefore(inspir, trust); else main.appendChild(inspir);
  }
  function addAdminShowroom(){
    if(!location.pathname.includes('/admin')) return;
    const host = document.querySelector('.v47-main') || document.querySelector('main') || document.body;
    if(!host || document.querySelector('.m4-admin-live')) return;
    const box=document.createElement('section');
    box.className='m4-admin-live';
    box.innerHTML=`<h2>M4 Showroom Ready</h2><p>Tryb pokazowy dla szefa: wypełnia sklep produktami, grafikami i sekcjami demonstracyjnymi. To nie jest pusty szkielet — to baza do dalszej podmiany na realne materiały ELKASS.</p><div class="m4-admin-actions"><button id="m4SeedDemo">Wczytaj demo content</button><a href="/" target="_blank">Otwórz stronę główną</a><a class="ghost" href="/app/category/" target="_blank">Oferta</a><a class="ghost" href="/app/product/?id=pralka-beko-8kg-inverter" target="_blank">Produkt Beko</a></div>`;
    host.prepend(box);
    const btn=box.querySelector('#m4SeedDemo');
    btn.addEventListener('click',()=>{
      localStorage.setItem('elkass_demo_mode','showroom-ready');
      localStorage.setItem('elkass_demo_products', JSON.stringify(products));
      btn.textContent='Demo content zapisany lokalnie ✓';
      setTimeout(()=>btn.textContent='Wczytaj demo content',2400);
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>{addHomeShowroom();addAdminShowroom();}); else {addHomeShowroom();addAdminShowroom();}
})();
