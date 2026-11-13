const data = window.TUTORIAL;
const isChinese = document.documentElement.lang.startsWith('zh');
const make = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text) node.textContent = text; return node; };

data.speakers.forEach(speaker => {
  const card = make('article', 'speaker-card');
  card.id = speaker.id;
  const photo = make('div', 'speaker-photo');
  const initials = make('span', 'speaker-initials', speaker.name.split(' ').map(part => part[0]).join(''));
  initials.setAttribute('aria-hidden', 'true');
  photo.append(initials);
  const img = make('img');
  img.src = speaker.photo; img.alt = speaker.name; img.width = 240; img.height = 276; img.loading = 'lazy'; img.decoding = 'async';
  img.addEventListener('error', () => { img.remove(); }, {once: true});
  const displayName = isChinese ? (speaker.chinese || speaker.name) : speaker.name;
  photo.append(img); card.append(photo, make('h3', '', displayName));
  const cn = make('p', 'cn-name', isChinese ? (speaker.chinese ? speaker.name : '\u00a0') : (speaker.chinese || '\u00a0')); cn.lang = isChinese ? 'en' : 'zh-CN'; card.append(cn);
  if (speaker.role) card.append(make('p', 'speaker-role', isChinese ? speaker.roleZh : speaker.role));
  if (speaker.affiliation) card.append(make('p', 'speaker-affiliation', isChinese ? speaker.affiliationZh : speaker.affiliation));
  const profile = make('a', 'speaker-profile', isChinese ? '个人主页 ↗' : 'Profile ↗');
  profile.href = speaker.profile; profile.target = '_blank'; profile.rel = 'noopener noreferrer'; profile.setAttribute('aria-label', isChinese ? `查看${displayName}的个人主页` : `View ${speaker.name}'s profile`);
  card.append(profile); document.querySelector('#speaker-grid').append(card);
});

data.sessions.forEach((session, i) => {
  const row = make('tr'); row.id = `session-${i + 1}`;
  const time = make('td', 'time', session.time);
  const topic = make('td'); topic.append(make('span', 'session-title', isChinese ? session.titleZh : session.title), make('span', 'session-duration', isChinese ? session.duration.replace(' min', ' 分钟') : session.duration));
  const presenter = make('td', 'presenter'); const link = make('a', '', isChinese ? session.presenterZh : session.presenter); link.href = `#${session.speaker}`; presenter.append(link);
  row.append(time, topic, presenter); document.querySelector('#program-body').append(row);
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav-links');
const closeMenu = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

// Keep the current section when changing languages. Links also work without JS.
document.querySelectorAll('.language-switch a').forEach(link => {
  link.addEventListener('click', () => { const target = new URL(link.href); target.hash = window.location.hash; link.href = target.href; });
});

if ('IntersectionObserver' in window) {
  const links = [...nav.querySelectorAll('a')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) links.forEach(link => { const active = link.hash === `#${entry.target.id}`; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  }, {rootMargin: '-15% 0px -65% 0px'});
  document.querySelectorAll('main>section[id]').forEach(section => observer.observe(section));
}
