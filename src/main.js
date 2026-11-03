import { site, availabilityLabel, contactLinks } from './config.js';

const escape = (text) => String(text).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

document.querySelector('#services').innerHTML = site.services.map((service) => `
  <article class="service ${service.featured ? 'service-featured' : ''}">
    <span class="availability">${availabilityLabel(service.available)}</span>
    <h3>${escape(service.title)}</h3><p>${escape(service.description)}</p>
    ${service.featured ? '<a class="text-link" href="#contato">Consulte disponibilidade</a>' : ''}
  </article>`).join('') || '<p>As possibilidades de cuidado serão informadas em breve.</p>';

document.querySelector('#categories').innerHTML = site.categories.map((category) => `
  <article class="category"><h3>${escape(category.title)}</h3><p>${escape(category.description)}</p><span class="category-status">${availabilityLabel(category.available)}</span></article>`).join('') || '<p>Categorias ainda não informadas.</p>';

document.querySelector('#faq').innerHTML = site.faq.map((item) => `<details><summary>${escape(item.question)}<span class="faq-mark" aria-hidden="true"></span></summary><p>${escape(item.answer)}</p></details>`).join('') || '<p>As respostas serão publicadas quando as informações estiverem confirmadas.</p>';

const links = contactLinks(site.contact);
const info = [
  ['Onde estamos', site.contact.address || 'Endereço ainda não informado.'],
  ['Quando visitar', site.contact.hours || 'Horários ainda não informados.'],
];
document.querySelector('#contact-panel').innerHTML = `${links.length ? '<h3>Canais de contato</h3><div class="contact-links">' + links.map((link) => `<a class="text-link" href="${escape(link.href)}">${escape(link.label)}</a>`).join('') + '</div>' : '<h3>Contato em atualização</h3><p>Os canais oficiais ainda não foram informados. Por enquanto, não é possível enviar mensagens ou agendar por este site.</p>'}<dl>${info.map(([label, value]) => `<div><dt>${escape(label)}</dt><dd>${escape(value)}</dd></div>`).join('')}</dl><p class="contact-note">Serviços e condições precisam de confirmação prévia.</p>`;
document.querySelector('#year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
const mobile = window.matchMedia('(max-width: 760px)');
toggle.hidden = false;
document.documentElement.classList.add('js');
function setMenu(open, restore = false) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('span').textContent = open ? 'Fechar' : 'Menu';
  nav.classList.toggle('is-open', open);
  nav.inert = mobile.matches && !open;
  if (restore) toggle.focus();
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header') && toggle.getAttribute('aria-expanded') === 'true') setMenu(false);
});
nav.addEventListener('focusout', () => {
  requestAnimationFrame(() => {
    if (!document.activeElement.closest('.site-header')) setMenu(false);
  });
});
mobile.addEventListener('change', () => setMenu(false));
setMenu(false);

// Preserve native anchor URLs and scroll; transfer keyboard focus to the destination.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    setMenu(false);
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});

document.querySelectorAll('.media img').forEach((image) => {
  const fail = () => {
    image.hidden = true;
    image.parentElement.classList.add('failed');
    image.parentElement.querySelector('.media-error').hidden = false;
  };
  image.addEventListener('error', fail);
  if (image.complete && image.naturalWidth === 0) fail();
});
