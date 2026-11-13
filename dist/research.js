(() => {
  const works = window.TUTORIAL_RESEARCH;
  const grid = document.querySelector('#research-grid');
  if (!grid || !Array.isArray(works)) return;

  const chinese = document.documentElement.lang.startsWith('zh');
  const groups = [
    ['survey', chinese ? '综述' : 'Survey', 'tsf-survey'],
    ['multimodal', chinese ? '多模态' : 'Multimodal', 'tokencast'],
    ['reasoning', chinese ? '推理' : 'Reasoning', 'memcast'],
    ['agentic', chinese ? '预测智能体' : 'Agentic forecasting', 'castclaw']
  ];
  const selected = new Set(groups.map(([, , id]) => id));
  const labels = {
    Paper: '论文', Code: '代码', Project: '项目',
    'Reading list': '论文列表', 'Publication record': '成果记录', arXiv: 'arXiv'
  };
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  const externalLink = (label, url, accessibleName) => {
    const link = make('a', '', label);
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    if (accessibleName) link.setAttribute('aria-label', accessibleName);
    return link;
  };

  function publicationLabel(publication) {
    const year = publication.year ? ` · ${publication.year}` : '';
    if (publication.status === 'preprint') return (chinese ? '预印本' : 'Preprint') + year;
    if (publication.status === 'under_review') return (chinese ? '研究稿件' : 'Manuscript') + year;
    const venue = publication.venue === 'ICDM Demo Track' ? 'ICDM Demo' : publication.venue;
    return venue + year + (publication.status === 'accepted' ? (chinese ? ' · 已录用' : ' · Accepted') : '');
  }

  function renderWork(work, withSummary) {
    const item = make('li', 'research-item');
    item.id = `work-${work.id}`;
    const name = chinese && work.id === 'tsf-survey' ? '时间序列预测综述' : work.shortTitle;
    const heading = make('h4', 'research-item-title');
    if (work.links.length) {
      const title = externalLink(name, work.links[0].url, work.title);
      title.title = work.title;
      heading.append(title);
    } else {
      const title = make('span', '', name);
      title.title = work.title;
      title.setAttribute('aria-label', work.title);
      heading.append(title);
    }
    heading.append(make('span', 'research-meta', publicationLabel(work.publication)));
    item.append(heading);
    if (withSummary) item.append(make('p', 'research-summary', chinese ? work.summaryZh : work.summaryEn));

    const links = make('div', 'research-links');
    for (const link of work.links) {
      const label = chinese ? (labels[link.label] || link.label) : link.label;
      links.append(externalLink(label, link.url, `${work.shortTitle}: ${label}`));
    }
    if (work.image) {
      const label = chinese ? '框架图' : 'Figure';
      links.append(externalLink(label, work.image, `${work.shortTitle}: ${label}`));
    }
    item.append(links);
    return item;
  }

  function renderGroups(showSelected) {
    const container = make('div', 'research-groups');
    for (const [category, name, representative] of groups) {
      const entries = works.filter(work => work.category === category && (showSelected ? work.id === representative : !selected.has(work.id)));
      if (!entries.length) continue;
      const group = make('section', 'research-group');
      group.append(make('h3', '', name));
      const list = make('ul', 'research-list');
      list.append(...entries.map(work => renderWork(work, showSelected)));
      group.append(list);
      container.append(group);
    }
    return container;
  }

  const archive = make('details', 'research-archive');
  const remaining = works.filter(work => !selected.has(work.id)).length;
  archive.append(make('summary', '', chinese ? `更多研究（${remaining}项）` : `More research (${remaining})`), renderGroups(false));
  grid.replaceChildren(renderGroups(true), archive);
})();
