(() => {
  const works = window.TUTORIAL_RESEARCH;
  const chinese = document.documentElement.lang.startsWith('zh');
  const grid = document.querySelector('#research-grid');
  const filters = document.querySelector('#research-filters');
  const count = document.querySelector('#research-count');
  const more = document.querySelector('#research-more');
  if (!grid || !Array.isArray(works)) return;
  const categoryNames = {
    all: chinese ? '全部方向' : 'All research',
    survey: chinese ? '综述与研究视角' : 'Surveys & perspectives',
    multimodal: chinese ? '多模态' : 'Multimodal',
    reasoning: chinese ? '推理' : 'Reasoning',
    agentic: chinese ? 'Agentic 智能体' : 'Agentic'
  };
  const linkNames = {'Paper':'论文','Code':'代码','Project':'项目主页','Reading list':'论文列表','Publication record':'成果记录','arXiv':'arXiv'};
  let category = 'all';
  let expanded = false;
  const create = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text) el.textContent = text; return el; };

  function publicationLabel(publication) {
    const year = publication.year ? ` · ${publication.year}` : '';
    if (publication.status === 'preprint') return (chinese ? '预印本' : 'Preprint') + year;
    if (publication.status === 'under_review') return (chinese ? '研究稿件' : 'Manuscript') + year;
    const venue = publication.venue === 'ICDM Demo Track' ? 'ICDM Demo' : publication.venue;
    return venue + year + (publication.status === 'accepted' ? (chinese ? ' · 已录用' : ' · Accepted') : '');
  }

  function renderCard(work) {
    const card = create('article', 'research-card');
    card.id = `work-${work.id}`;
    if (work.image) {
      const visual = create('a', 'research-visual');
      visual.href = work.image; visual.target = '_blank'; visual.rel = 'noopener noreferrer';
      visual.setAttribute('aria-label', chinese ? `查看 ${work.shortTitle} 框架原图` : `View the ${work.shortTitle} figure`);
      const img = create('img'); img.src = work.image; img.alt = chinese ? `${work.shortTitle} 的方法框架或评测示意图` : `${work.shortTitle}: method or evaluation overview`; img.loading = 'lazy'; img.decoding = 'async';
      const zoom = create('span', 'research-zoom', '↗'); zoom.setAttribute('aria-hidden','true');
      visual.append(img, zoom); card.append(visual);
    } else {
      const cover = create('div', 'research-visual research-survey-cover');
      cover.setAttribute('aria-hidden','true');
      cover.append(create('span', 'survey-cover-label', 'TIME SERIES FORECASTING'), create('strong', '', chinese ? '综述' : 'SURVEY'), create('span', 'survey-cover-caption', chinese ? '概念 · 挑战 · 未来方向' : 'Concepts · Challenges · Future Directions'));
      card.append(cover);
    }
    const body = create('div', 'research-card-body');
    const meta = create('div', 'research-card-meta'); meta.append(create('span', '', categoryNames[work.category]), create('span', 'publication-label', publicationLabel(work.publication)));
    const heading = create('h3', '', chinese && work.id === 'tsf-survey' ? '时间序列预测综述' : work.shortTitle);
    const title = create('p', 'research-paper-title', work.title); title.lang = 'en';
    const summary = create('p', 'research-summary', chinese ? work.summaryZh : work.summaryEn);
    const links = create('div', 'research-links');
    for (const link of work.links) {
      const anchor = create('a', '', `${chinese ? linkNames[link.label] || link.label : link.label} ↗`);
      anchor.href = link.url; anchor.target = '_blank'; anchor.rel = 'noopener noreferrer';
      anchor.setAttribute('aria-label', `${work.shortTitle}: ${chinese ? linkNames[link.label] || link.label : link.label}`);
      links.append(anchor);
    }
    body.append(meta, heading, title, summary, links); card.append(body); return card;
  }

  function render() {
    const matching = works.filter(work => category === 'all' || work.category === category);
    const visible = category === 'all' && !expanded ? matching.filter(work => work.featured) : matching;
    grid.replaceChildren(...visible.map(renderCard));
    count.textContent = chinese ? `展示 ${visible.length} / ${matching.length} 项工作` : `Showing ${visible.length} of ${matching.length} works`;
    more.hidden = category !== 'all';
    more.replaceChildren(document.createTextNode(expanded ? (chinese ? '收起至精选工作 ' : 'Show featured work ') : (chinese ? `查看全部 ${works.length} 项工作 ` : `View all ${works.length} works `)), create('span', '', expanded ? '↑' : '↓'));
    filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
  }

  for (const key of Object.keys(categoryNames)) {
    const total = key === 'all' ? works.length : works.filter(work => work.category === key).length;
    const button = create('button', 'research-filter'); button.type = 'button'; button.dataset.category = key;
    button.append(document.createTextNode(categoryNames[key]), create('span', '', String(total)));
    button.addEventListener('click', () => { category = key; expanded = false; render(); }); filters.append(button);
  }
  more.addEventListener('click', () => {
    expanded = !expanded; render();
    if (!expanded) document.querySelector('#research').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  });
  render();
})();
