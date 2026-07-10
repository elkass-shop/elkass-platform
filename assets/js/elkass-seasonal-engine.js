(()=>{
 const KEY='elkass.theme.v1';
 const THEMES={
  premium:{label:'ELKASS Premium',icons:['✨'],particles:[],corners:[]},
  christmas:{label:'Boże Narodzenie',icons:['🎄','🎁','🔔','🧦','⭐'],particles:['❄','❅','✦'],corners:['🎄','🎁'],message:'Świąteczne okazje i prezenty w ELKASS'},
  easter:{label:'Wielkanoc',icons:['🥚','🐰','🌷','🌼'],particles:['🌸','🌼','✿'],corners:['🐰','🥚'],message:'Wielkanocne okazje dla domu'},
  spring:{label:'Wiosna',icons:['🌷','🌿','🌸','🐝'],particles:['🌸','🌿','✿'],corners:['🌷','🦋'],message:'Wiosenne odświeżenie domu'},
  summer:{label:'Lato',icons:['☀️','🌊','🍹','🕶️'],particles:['☀','◌','✦'],corners:['☀️','🌴'],message:'Letnie okazje i chłodne ceny'},
  autumn:{label:'Jesień',icons:['🍂','🍁','🎃','☕'],particles:['🍂','🍁','🍃'],corners:['🎃','🍁'],message:'Jesienne okazje do domu'},
  blackweek:{label:'Black Week',icons:['⚡','🖤','🏷️','🔥'],particles:['◆','⚡','✦'],corners:['🔥','🏷️'],message:'BLACK WEEK — najmocniejsze ceny'},
  backtoschool:{label:'Back to School',icons:['📚','✏️','🎒','💻'],particles:['✏','📎','▤'],corners:['🎒','📚'],message:'Powrót do szkoły z ELKASS'},
  rtvdays:{label:'RTV Days',icons:['📺','🎧','🎮','🔊'],particles:['◈','◉','✦'],corners:['📺','🎧'],message:'RTV Days — obraz, dźwięk i gaming'},
  agddays:{label:'AGD Days',icons:['🧺','🧊','☕','🍳'],particles:['◌','✦','◇'],corners:['☕','🧺'],message:'AGD Days — wyposażamy Twój dom'}
 };
 function read(){try{return JSON.parse(localStorage.getItem(KEY)||'null')||{theme:'premium',decorations:true,message:''}}catch(e){return{theme:'premium',decorations:true,message:''}}}
 function remove(){document.querySelectorAll('.season-layer,.season-banner,.season-corner,.season-top-decor,.season-ribbon,.season-glow').forEach(x=>x.remove())}
 function particleCount(theme){return innerWidth<700?16:(theme==='christmas'?42:28)}
 function apply(input){
  const t=input||read(); const key=THEMES[t.theme]?t.theme:'premium'; const cfg=THEMES[key];
  document.body.className=document.body.className.replace(/\btheme-[a-z0-9]+\b/g,'').replace(/\s+/g,' ').trim(); document.body.classList.add('theme-'+key);
  remove(); if(t.decorations===false||key==='premium') return;
  const layer=document.createElement('div'); layer.className='season-layer'; layer.setAttribute('aria-hidden','true');
  const count=particleCount(key); for(let i=0;i<count;i++){const p=document.createElement('i');p.className='season-particle';p.textContent=cfg.particles[i%cfg.particles.length];p.style.left=(Math.random()*100)+'%';p.style.fontSize=(12+Math.random()*18)+'px';p.style.opacity=(.35+Math.random()*.55);p.style.animationDuration=(7+Math.random()*10)+'s';p.style.animationDelay=(-Math.random()*14)+'s';p.style.setProperty('--drift',(-80+Math.random()*160)+'px');layer.appendChild(p)} document.body.appendChild(layer);
  const top=document.createElement('div'); top.className='season-top-decor'; top.innerHTML=cfg.icons.concat(cfg.icons).slice(0,10).map(x=>`<span>${x}</span>`).join('');document.body.appendChild(top);
  (cfg.corners||[]).forEach((x,i)=>{const c=document.createElement('div');c.className='season-corner '+(i?'right':'left');c.textContent=x;document.body.appendChild(c)});
  const banner=document.createElement('div');banner.className='season-banner';banner.textContent=t.message||cfg.message||cfg.label;document.body.appendChild(banner);
  const ga=document.createElement('div');ga.className='season-glow a';document.body.appendChild(ga);const gb=document.createElement('div');gb.className='season-glow b';document.body.appendChild(gb);
  if(key==='blackweek'){const r=document.createElement('div');r.className='season-ribbon';r.textContent='BLACK WEEK';document.body.appendChild(r)}
 }
 window.ELKASSSeasonal={apply,read,themes:THEMES};
 document.addEventListener('DOMContentLoaded',()=>apply());
 window.addEventListener('storage',e=>{if(e.key===KEY)apply()});
})();
