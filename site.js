(function(){
  // mobile menu
  var mb=document.getElementById('spMenuBtn'), mm=document.getElementById('spMenu');
  if(mb&&mm){mb.addEventListener('click',function(){var o=mm.hasAttribute('hidden');if(o){mm.removeAttribute('hidden')}else{mm.setAttribute('hidden','')}mb.setAttribute('aria-expanded',o?'true':'false')});}
  // accordions (one open per group)
  document.querySelectorAll('.faq').forEach(function(g){
    g.querySelectorAll('.faq-q').forEach(function(btn){
      var a=btn.nextElementSibling; if(!a||!a.classList.contains('faq-a'))return;
      btn.addEventListener('click',function(){
        var open=btn.getAttribute('aria-expanded')==='true';
        g.querySelectorAll('.faq-q[aria-expanded]').forEach(function(b){b.setAttribute('aria-expanded','false');var x=b.nextElementSibling;if(x)x.setAttribute('hidden','');var t=b.querySelector('.tg');if(t)t.textContent='+';});
        if(!open){btn.setAttribute('aria-expanded','true');a.removeAttribute('hidden');var t=btn.querySelector('.tg');if(t)t.textContent='−';}
      });
    });
  });
  // faq tabs
  var tabs=document.querySelectorAll('[data-tab]');
  tabs.forEach(function(t){t.addEventListener('click',function(){
    tabs.forEach(function(x){x.classList.toggle('on',x===t);x.setAttribute('aria-pressed',x===t?'true':'false')});
    document.querySelectorAll('[data-panel]').forEach(function(p){if(p.getAttribute('data-panel')===t.dataset.tab){p.removeAttribute('hidden')}else{p.setAttribute('hidden','')}});
    var n=document.getElementById('faqTabName'); if(n)n.textContent=t.dataset.tab;
  })});
  // works filter
  var grid=document.getElementById('worksGrid');
  if(grid){
    var cat='すべて', area='すべて', ctabs=document.querySelectorAll('[data-cat].tabbtn'), sel=document.getElementById('worksArea');
    function apply(){var c=0;grid.querySelectorAll('.work').forEach(function(w){var ok=(cat==='すべて'||w.dataset.cat===cat)&&(area==='すべて'||w.dataset.area===area);w.hidden=!ok;if(ok)c++;});
      var n=document.getElementById('worksCount');if(n)n.textContent=c;var e=document.getElementById('worksEmpty');if(e)e.hidden=c>0;}
    ctabs.forEach(function(t){t.addEventListener('click',function(){cat=t.dataset.cat;ctabs.forEach(function(x){x.classList.toggle('on',x===t);x.setAttribute('aria-pressed',x===t?'true':'false')});apply();})});
    if(sel)sel.addEventListener('change',function(){area=sel.value;apply();});
  }
  // before/after slider
  var r=document.getElementById('baRange');
  if(r){var top=document.getElementById('baTop'),bar=document.getElementById('baBar'),knob=document.getElementById('baKnob');
    function upd(){var p=r.value;top.style.clipPath='inset(0 '+(100-p)+'% 0 0)';bar.style.left=p+'%';knob.style.left=p+'%';}
    r.addEventListener('input',upd);upd();}
})();
