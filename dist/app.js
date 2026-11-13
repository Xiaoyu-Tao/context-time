(() => {
  const data = window.TUTORIAL;
  const chinese = document.documentElement.lang.startsWith('zh');
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  for (const speaker of data.speakers) {
    const card = make('article', 'speaker-card');
    card.id = speaker.id;
    const profile = make('a', 'speaker-link');
    profile.href = speaker.profile;
    profile.target = '_blank';
    profile.rel = 'noopener noreferrer';
    const image = make('img', 'speaker-photo');
    image.src = speaker.photo;
    image.alt = '';
    image.width = 88;
    image.height = 104;
    image.loading = 'lazy';
    image.decoding = 'async';
    const name = chinese ? (speaker.chinese || speaker.name) : speaker.name;
    profile.append(image, make('h3', '', name));
    card.append(profile,
      make('p', 'speaker-role', chinese ? speaker.roleZh : speaker.role),
      make('p', 'speaker-affiliation', chinese ? speaker.affiliationZh : speaker.affiliation));
    document.querySelector('#speaker-grid').append(card);
  }
  data.sessions.forEach((session, index) => {
    const row = make('tr');
    row.id = `session-${index + 1}`;
    const presenter = make('td', 'presenter');
    const link = make('a', '', chinese ? session.presenterZh : session.presenter);
    link.href = `#${session.speaker}`;
    presenter.append(link);
    row.append(make('td', 'time', session.time), make('td', '', chinese ? session.titleZh : session.title), presenter);
    document.querySelector('#program-body').append(row);
  });
  document.querySelectorAll('.language-switch a').forEach(link => {
    link.addEventListener('click', () => {
      const target = new URL(link.href);
      target.hash = window.location.hash;
      link.href = target.href;
    });
  });
})();
