
const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const siteNav = document.querySelector('[data-site-nav]');
const backToTop = document.querySelector('[data-back-to-top]');
const cursorGlow = document.querySelector('.cursor-glow');

function onScroll(){
  if(header) header.classList.toggle('scrolled', window.scrollY > 16);
  if(backToTop) backToTop.classList.toggle('visible', window.scrollY > 600);
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

if(navToggle && siteNav){
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded','false');
  }));
}

if(backToTop){
  backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}

if(cursorGlow){
  window.addEventListener('pointermove', e => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  }, {passive:true});
}

const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, {threshold:.12});
reveals.forEach(el => io.observe(el));

// Optional: edit assets/data/site.json and use this hook later for automatic content rendering.
fetch((document.querySelector('link[rel="manifest"]')?.getAttribute('href') || 'manifest.json').replace('manifest.json','assets/data/site.json'))
  .then(res => res.ok ? res.json() : null)
  .then(data => { window.TRGVC_SITE_DATA = data; })
  .catch(() => {});
