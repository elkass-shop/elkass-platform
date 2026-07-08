
(function(){
const $=(s,r=document)=>r.querySelector(s); const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const fmt=n=>(Number(n)||0).toLocaleString('pl-PL')+' zł';
const imgFallback='/assets/products/product-05-telewizor-samsung.jpg';
const categories=[['RTV','Telewizory, audio, kino domowe','/assets/categories/clean-rtv.jpg'],['AGD','Pralki, lodówki, zmywarki','/assets/categories/clean-agd.jpg'],['Do zabudowy','Kuchnia kompletna','/assets/categories/clean-agd-zabudowa.jpg'],['Małe AGD','Ekspresy, odkurzacze, roboty','/assets/categories/clean-male-agd.jpg'],['Komputery','Laptopy, smartfony, tablety','/assets/categories/clean-komputery-telefony.jpg'],['Usługi','Montaż, transport, konfiguracja','/assets/categories/clean-serwis.jpg']];
const brands=['samsung','bosch','lg','beko','amica','philips','sony','lenovo','whirlpool','electrolux','tefal','jbl','siemens','sharp','tcl','hisense','gorenje','xiaomi','aeg','panasonic','remington','blaupunkt','kernau','sencor','manta','philco'];
async function products(){ if(window.ElkassCloud?.getProducts) return await window.ElkassCloud.getProducts(); const r=await fetch('/data/products.json',{cache:'no-store'}); const d=await r.json(); return d.products||[]; }
function settings(){ try{return JSON.parse(localStorage.getItem('elkass.cloud.settings.v54')||'{}')}catch(e){return{}} }
function homeSettings(){ const s=settings(); return Object.assign({},s.home||{},s['home-final']||{}); }
function productCard(p){ return `<a class="ef-product" href="/app/product/?id=${encodeURIComponent(p.id)}"><span class="badge">${p.badge||'ELKASS'}</span><img src="${p.image||imgFallback}" alt="${p.name}"><small>${p.brand||''} • ${p.category||''}</small><h3>${p.name}</h3><p>${p.short||''}</p><div class="row"><strong>${fmt(p.price)}</strong><span class="view">Zobacz</span></div></a>` }
function miniCard(p){ return `<a class="ef-mini" href="/app/product/?id=${encodeURIComponent(p.id)}"><img src="${p.image||imgFallback}" alt="${p.name}"><div><b>${p.name}</b><strong>${fmt(p.price)}</strong></div></a>` }
function renderCats(){ const el=$('#efCategories'); if(el) el.innerHTML=categories.map(c=>`<a class="ef-cat" href="/app/category/"><img src="${c[2]}" alt="${c[0]}"><div><b>${c[0]}</b><small>${c[1]}</small></div></a>`).join(''); }
function renderBrands(){ const el=$('#efBrands'); if(!el) return; el.innerHTML=brands.map(b=>{ const label=b.charAt(0).toUpperCase()+b.slice(1); return `<img src="/assets/logos/${b}.svg" alt="${label}" title="${label}" onerror="this.onerror=null;this.src='/assets/logos/${b}.png';">`; }).join(''); }
function applyHome(){ const h=homeSettings(); if(h.heroImage) $('#efHeroImage')?.setAttribute('src',h.heroImage); if(h.salonImage) $('#efSalonImage')?.setAttribute('src',h.salonImage); if(h.heroTitle) $('.ef-hero h1').innerHTML=h.heroTitle; if(h.heroText) $('.ef-hero-copy p').textContent=h.heroText; }
function renderProducts(list){
 const active=list.filter(p=>p.is_active!==false); const hit=active.find(p=>String(p.id).includes('samsung'))||active[0]; const side=active.filter(p=>p.id!==hit?.id).slice(0,4); const grid=active.slice(0,8);
 if($('#efHitMain')&&hit){ $('#efHitMain').innerHTML=`<div class="ef-hit-img"><img src="${hit.image||imgFallback}" alt="${hit.name}"></div><div class="ef-hit-copy"><span class="ef-kicker">Hit tygodnia</span><h3>${hit.name}</h3><p>${hit.short||''}</p><div class="ef-price"><b>${fmt(hit.price)}</b>${hit.oldPrice?`<s>${fmt(hit.oldPrice)}</s>`:''}<span>${hit.oldPrice?'-'+Math.round((1-hit.price/hit.oldPrice)*100)+'%':'ELKASS'}</span></div><div class="ef-actions"><a class="ef-btn" href="/app/product/?id=${encodeURIComponent(hit.id)}">Zobacz produkt</a><a class="ef-btn ef-btn-light" href="tel:343582442">Zapytaj doradcę</a></div></div>`; }
 if($('#efHitSide')) $('#efHitSide').innerHTML=side.map(miniCard).join('');
 if($('#efProducts')) $('#efProducts').innerHTML=grid.map(productCard).join('');
}
document.addEventListener('DOMContentLoaded',async()=>{renderCats();renderBrands();applyHome();try{renderProducts(await products())}catch(e){console.warn(e)}});
})();
