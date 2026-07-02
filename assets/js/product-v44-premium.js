(function(){
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const fmt=n=> new Intl.NumberFormat('pl-PL',{style:'currency',currency:'PLN',maximumFractionDigits:0}).format(Number(n||0));
  const params=new URLSearchParams(location.search);
  const id=params.get('id')||'tv-samsung-55-crystal-uhd';

  async function load(){
    let data={products:[]};
    try{ data=await fetch('/data/products.json',{cache:'no-store'}).then(r=>r.json()); }
    catch(e){ console.warn('Nie udało się wczytać products.json',e); }
    const products=data.products||[];
    const product=products.find(p=>p.id===id)||products[0];
    if(!product) return;
    render(product,products,Object.fromEntries(products.map(p=>[p.id,p])));
  }

  function flatParams(p){
    const rows=[];
    Object.entries(p.params||{}).forEach(([group,obj])=>{
      Object.entries(obj||{}).forEach(([name,value])=>rows.push({group,name,value}));
    });
    Object.entries(p.dimensions||{}).forEach(([name,value])=>rows.push({group:'Wymiary',name,value}));
    return rows;
  }

  function keySpecs(p){
    const out=[];
    (p.features||[]).forEach(f=>out.push({label:'Cecha',value:f}));
    const preferred=['Przekątna','Rozdzielczość','Pojemność','Głośność','Klasa energetyczna','Szerokość','Wysokość','HDMI','No Frost','Wi-Fi'];
    const rows=flatParams(p);
    preferred.forEach(key=>{
      const hit=rows.find(r=>r.name.toLowerCase().includes(key.toLowerCase()));
      if(hit && !out.some(x=>x.value===hit.value)) out.push({label:hit.name,value:hit.value});
    });
    rows.forEach(r=>{ if(out.length<8 && !out.some(x=>x.value===r.value)) out.push({label:r.name,value:r.value}); });
    return out.slice(0,6);
  }

  function discount(p){
    if(!p.oldPrice || !p.price || p.oldPrice<=p.price) return null;
    return Math.round((1-p.price/p.oldPrice)*100);
  }

  function render(p, products, byId){
    document.title=p.name+' — ELKASS Premium';
    const root=$('#product-v44'); if(!root) return;
    const imgs=(p.images&&p.images.length?p.images:[p.image]).filter(Boolean);
    const specs=keySpecs(p);
    const related=(p.related||[]).map(x=>byId[x]).filter(Boolean);
    const same=products.filter(x=>x.id!==p.id && (x.category===p.category || x.brand===p.brand)).slice(0,4);
    const bundles=(related.length?related:same).slice(0,4);
    const viewed=products.filter(x=>x.id!==p.id).slice(0,4);
    const disc=discount(p);
    const installment=Math.max(39,Math.round((p.price||1200)/36));

    root.innerHTML=`
      <nav class="crumbs-v44" aria-label="Ścieżka produktu">
        <a href="/">Start</a><span>›</span><a href="/app/category/">${p.category||'Oferta'}</a><span>›</span><span>${p.subcategory||p.brand||''}</span><span>›</span><b>${p.name}</b>
      </nav>

      <section class="product-hero-v44">
        <div class="gallery-card-v44 premium-panel">
          <div class="gallery-layout-v44">
            <div class="thumbs-v44" aria-label="Miniatury produktu">
              ${imgs.map((im,i)=>`<button class="thumb-v44 ${i?'':'active'}" data-img="${im}" aria-label="Pokaż zdjęcie ${i+1}"><img src="${im}" alt="${p.name} miniatura ${i+1}"></button>`).join('')}
            </div>
            <button class="main-photo-v44" id="photoZoomBtn" aria-label="Powiększ zdjęcie produktu">
              <img id="mainPhotoV44" src="${imgs[0]}" alt="${p.name}">
              <span class="zoom-hint">⌕ Powiększ</span>
            </button>
          </div>
        </div>

        <aside class="buybox-v44 premium-panel">
          <div class="product-meta-line-v44">
            <span>${p.brand||'ELKASS'}</span><span>${p.subcategory||p.category||'Produkt'}</span><span>ID: ${p.id}</span>
          </div>
          <div class="badge-row-v44">
            <span class="badge-v44 red">${p.badge||'Polecany produkt'}</span>
            <span class="badge-v44 green">${p.availability||'Dostępny w salonie'}</span>
            ${disc?`<span class="badge-v44 dark">-${disc}%</span>`:''}
          </div>
          <h1 class="product-title-v44">${p.name}</h1>
          <div class="rating-v44"><span>★★★★★</span><small>4.9 / 5 • opinie klientów ELKASS</small></div>
          <p class="short-v44">${p.short||'Produkt dostępny w ofercie ELKASS z doradztwem, transportem i obsługą po zakupie.'}</p>

          <div class="key-specs-v44" aria-label="Najważniejsze parametry produktu">
            ${specs.map(s=>`<div class="spec-chip-v44"><small>${s.label}</small><b>${s.value}</b></div>`).join('')}
          </div>

          <div class="purchase-card-v44">
            <div class="price-row-v44">
              <div>
                ${p.oldPrice?`<div class="oldprice-v44">${fmt(p.oldPrice)}</div>`:''}
                <div class="price-v44">${fmt(p.price)}</div>
              </div>
              ${disc?`<span class="discount-v44">-${disc}%</span>`:''}
            </div>
            <div class="availability-v44">● ${p.availability||'Dostępny od ręki w salonie ELKASS Olesno'}</div>
            <div class="finance-row-v44">
              <div class="finance-pill zero"><b>Raty 0%</b><small>np. 10× bez odsetek</small></div>
              <div class="finance-pill"><b>Dogodne raty</b><small>od ${installment} zł/mies.</small></div>
            </div>
            <div class="cta-row-v44">
              <a class="btn-v44 primary" href="/app/cart/?add=${p.id}">Dodaj do koszyka</a>
              <a class="btn-v44 ghost" href="tel:343582442">Zapytaj doradcę</a>
            </div>
          </div>
        </aside>
      </section>

      <section class="section-v44 tabs-section-v44">
        <div class="tabs-v44">
          <div class="tab-buttons-v44" role="tablist">
            <button class="active" data-tab="elkass">Opis ELKASS</button>
            <button data-tab="producer">Opis producenta</button>
            <button data-tab="params">Parametry</button>
            <button data-tab="faq">FAQ</button>
          </div>
          <div class="tab-pane-v44 active" data-pane="elkass">
            <h2>Dlaczego warto wybrać ten model?</h2>
            <p>${p.short||''} W ELKASS dobieramy sprzęt do realnych potrzeb domu: pomieszczenia, budżetu, sposobu używania oraz możliwości transportu i montażu.</p>
            <div class="value-list-v44">${(p.features||[]).map(f=>`<span>✓ ${f}</span>`).join('')}</div>
          </div>
          <div class="tab-pane-v44" data-pane="producer">
            <h2>Opis producenta</h2>
            <p>Opis producenta jest docelowo formatowany w Product Studio: nagłówki, listy, wyróżnienia i czytelne bloki zamiast długiej ściany tekstu.</p>
          </div>
          <div class="tab-pane-v44" data-pane="params"><div class="spec-grid-v44">${renderSpecs(p)}</div></div>
          <div class="tab-pane-v44" data-pane="faq">
            <h2>Najczęstsze pytania</h2>
            <details open><summary>Czy produkt można odebrać w salonie?</summary><p>Tak, dostępność salonowa jest widoczna przy cenie i może być ustawiana w panelu.</p></details>
            <details><summary>Czy ELKASS oferuje montaż?</summary><p>Tak, transport, wniesienie, montaż i konfiguracja mogą być dodane jako usługa.</p></details>
          </div>
        </div>
      </section>

      <section class="section-v44">
        <div class="section-head-v44"><div><h2>Kupowane razem</h2><p>Akcesoria i dodatki dobierane z Product Studio.</p></div></div>
        <div class="product-strip-v44">${renderProducts(bundles)}</div>
      </section>

      <section class="section-v44">
        <div class="section-head-v44"><div><h2>Produkty podobne</h2><p>Ta sama kategoria, marka lub podobny budżet.</p></div></div>
        <div class="product-strip-v44">${renderProducts(same)}</div>
      </section>

      <section class="section-v44">
        <div class="section-head-v44"><div><h2>Klienci oglądali również</h2><p>Dodatkowe propozycje z oferty ELKASS.</p></div></div>
        <div class="product-strip-v44">${renderProducts(viewed)}</div>
      </section>

      <section class="section-v44 advisor-v44">
        <div><span class="section-kicker-v44">Doradztwo lokalne</span><h2>Ekspert ELKASS poleca</h2><p>Po zapoznaniu się z parametrami produktu doradca pomoże dobrać akcesoria, usługę transportu, montaż i konfigurację do Twojego domu.</p></div>
        <a class="btn-v44 advisor-btn" href="tel:343582442">Porozmawiaj z doradcą</a>
      </section>

      <section class="section-v44 services-v44">
        <div class="section-head-v44"><div><span class="section-kicker-v44">Po zakupie</span><h2>Usługi ELKASS</h2><p>Usługi są wsparciem decyzji zakupowej, dlatego znajdują się niżej — produkt pozostaje najważniejszy.</p></div></div>
        <div class="services-grid-v44">
          <div class="service-v44"><b>Odbiór w salonie</b><small>ELKASS Olesno</small></div>
          <div class="service-v44"><b>Transport lokalny</b><small>Wniesienie i ustawienie</small></div>
          <div class="service-v44"><b>Montaż</b><small>Dobór i konfiguracja</small></div>
          <div class="service-v44"><b>Serwis</b><small>Wsparcie po zakupie</small></div>
        </div>
      </section>

      <div class="mobile-buybar-v44"><div><small>${p.name}</small><br><b>${fmt(p.price)}</b></div><a href="/app/cart/?add=${p.id}">Dodaj</a></div>
    `;
    bind();
  }

  function renderSpecs(p){
    let html='';
    Object.entries(p.params||{}).forEach(([g,obj])=>{
      html+=`<div class="spec-group"><h3>${g}</h3>${Object.entries(obj||{}).map(([k,v])=>`<div class="spec-line"><span>${k}</span><b>${v}</b></div>`).join('')}</div>`;
    });
    if(p.dimensions){
      html+=`<div class="spec-group"><h3>Wymiary</h3>${Object.entries(p.dimensions).map(([k,v])=>`<div class="spec-line"><span>${k}</span><b>${v}</b></div>`).join('')}</div>`;
    }
    return html||'<div class="spec-group"><h3>Parametry</h3><p>Parametry zostaną uzupełnione w Product Studio.</p></div>';
  }

  function renderProducts(list){
    return (list||[]).map(x=>`<a class="mini-product-v44" href="/app/product/?id=${x.id}"><div class="photo"><img src="${x.image||'/assets/products/product-05-telewizor-samsung.jpg'}" alt="${x.name}"></div><h3>${x.name}</h3><p>${(x.features||[]).slice(0,2).join(' • ')}</p><b>${fmt(x.price)}</b></a>`).join('') || '<p>Produkty zostaną wybrane w Product Studio.</p>';
  }

  function bind(){
    $$('.thumb-v44').forEach(b=>b.addEventListener('click',()=>{
      $$('.thumb-v44').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      const main=$('#mainPhotoV44'); if(main) main.src=b.dataset.img;
    }));
    $$('.tab-buttons-v44 button').forEach(b=>b.addEventListener('click',()=>{
      $$('.tab-buttons-v44 button').forEach(x=>x.classList.remove('active'));
      $$('.tab-pane-v44').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      const pane=$(`.tab-pane-v44[data-pane="${b.dataset.tab}"]`); if(pane) pane.classList.add('active');
    }));
  }
  load();
})();
