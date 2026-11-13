"""Generate the standalone Chinese page from the English page.

Shared speaker and schedule translations live in dist/content.js.
"""
from pathlib import Path
import hashlib
import re

root = Path(__file__).resolve().parents[1] / 'dist'
source = (root / 'index.html').read_text()
for asset in ['style.css', 'content.js', 'app.js', 'research-data.js', 'research.js']:
    version = hashlib.sha256((root / asset).read_bytes()).hexdigest()[:10]
    source = re.sub(r'(?P<attr>href|src)="' + re.escape(asset) + r'(?:\?v=[^"]*)?"', lambda match: match.group('attr') + '="' + asset + '?v=' + version + '"', source)
source = source.replace('aria-label="切换到中文">中</a>', 'aria-label="切换到中文">中文</a>')
(root / 'index.html').write_text(source)
replacements = {
    '<html lang="en">': '<html lang="zh-CN">',
    'Context-Aware Time Series Forecasting with LLMs | ICDM 2026 Tutorial': '基于大语言模型的上下文感知时间序列预测 | ICDM 2026 教程',
    'Context-Aware Time Series Forecasting with LLMs · ICDM 2026': '基于大语言模型的上下文感知时间序列预测 · ICDM 2026',
    'ICDM 2026 Industrial Tutorial 6: Context-Aware Time Series Forecasting with LLMs. November 15, 2026, 10:10–12:10, Grand Ballroom 1, Shenyang, China.': 'ICDM 2026 产业教程 6：基于大语言模型的上下文感知时间序列预测。2026 年 11 月 15 日 10:10–12:10，中国沈阳，Grand Ballroom 1。',
    'From Pattern Recognition to Cognitive Reasoning. An ICDM 2026 tutorial on multimodal understanding, slow-thinking reasoning, and agentic forecasting.': '从模式识别到认知推理。围绕多模态语义理解、慢思考推理与智能体交互，介绍上下文感知时间序列预测的研究进展。',
    'Skip to content': '跳至正文',
    'Main navigation': '主导航',
    'ICDM 2026 Tutorial home': 'ICDM 2026 教程首页',
    'INDUSTRIAL TUTORIAL 6': '产业教程 6',
    'Toggle navigation': '展开或收起导航',
    'Page language': '页面语言',
    'IEEE ICDM 2026 · SHENYANG, CHINA': 'IEEE ICDM 2026 · 中国沈阳',
    'Context-Aware<br>Time Series Forecasting<br>with <span>LLMs</span>': '基于大语言模型的<br>上下文感知<br><span>时间序列预测</span>',
    'From Pattern Recognition to Cognitive Reasoning': '从模式识别到认知推理',
    'Sunday, November 15, 2026': '2026 年 11 月 15 日（星期日）',
    'Explore the program': '查看日程',
    'Meet the speakers': '认识讲者',
    'Scroll to abstract': '滚动至内容简介',
    'DISCOVER THE TUTORIAL': '了解本教程',
    'THE BIG PICTURE': '研究概览',
    'Forecasting with patterns,<br>context, and reasoning.': '结合历史模式、上下文<br>与推理开展预测。',
    'Real-world forecasts depend on more than historical patterns.': '现实场景中的预测不仅取决于历史模式。',
    'This tutorial explores advances in context-aware time series forecasting with large language models, moving beyond historical pattern recognition toward context-grounded cognitive reasoning. It explains why real-world forecasts depend not only on temporal patterns, but also on external environments, events, domain knowledge, and system states.': '本教程介绍基于大语言模型的上下文感知时间序列预测研究进展，探讨预测方法如何从历史模式识别迈向基于上下文的认知推理。我们将说明，现实场景中的预测不仅依赖时间模式，还受到外部环境、事件、领域知识和系统状态的影响。',
    'The tutorial introduces three generations of context intelligence: <strong>multimodal semantic understanding</strong>, <strong>slow-thinking reasoning over predictive evidence</strong>, and <strong>agentic interaction with tools and environments</strong>. It shows how these capabilities support interpretation, reasoning, and information acquisition, with representative applications in electricity load forecasting, renewable power generation, traffic, industry, and scientific forecasting, while highlighting open challenges and future directions.': '本教程围绕上下文智能的三代演进展开：<strong>多模态语义理解</strong>、<strong>基于预测证据的慢思考推理</strong>，以及<strong>智能体与工具和环境的交互</strong>。我们将介绍这些能力如何支持上下文理解、推理和信息获取，并结合电力负荷预测、可再生能源发电预测、交通、工业和科学预测等领域的代表性应用，讨论开放挑战与未来研究方向。',
    'THREE GENERATIONS OF CONTEXT INTELLIGENCE': '上下文智能的三代演进',
    'Understand context. Reason with evidence.<br>Interact with the world.': '理解上下文，基于证据推理，<br>与外部环境交互。',
    'Multimodal Semantic <br>Understanding': '多模态语义理解',
    'Slow-Thinking <br>Cognitive Reasoning': '慢思考认知推理',
    'Agentic Autonomous <br>Interaction': '智能体自主交互',
    'Connect numerical observations with heterogeneous context through semantic alignment and multimodal representations.': '通过语义对齐与多模态表示，建立数值观测与异构上下文之间的联系。',
    'Reason over predictive evidence, reuse forecasting experience, and examine how contextual factors affect future outcomes.': '基于预测证据开展推理，复用预测经验，分析上下文因素对未来变化的影响。',
    'Acquire information, use tools, and incorporate feedback through forecasting workflows that interact with environments.': '通过与环境交互的预测工作流，主动获取信息、调用工具并利用反馈。',
    'Explore this session': '查看对应议程',
    'THE TUTORIAL TEAM': '教程团队',
    'Meet the people behind the tutorial.': '了解本教程的讲者团队。',
    'SUNDAY, NOVEMBER 15': '11 月 15 日 · 星期日',
    'ICDM 2026 Industrial Tutorial 6 program, November 15, China Standard Time': 'ICDM 2026 产业教程 6 日程，11 月 15 日，北京时间',
    '<th scope="col">Time</th>': '<th scope="col">时间</th>',
    '<th scope="col">Topic</th>': '<th scope="col">主题</th>',
    '<th scope="col">Presenter</th>': '<th scope="col">讲者</th>',
    'All times are China Standard Time (UTC+8).': '所有时间均为北京时间（UTC+8）。',
    'Add to calendar': '添加到日历',
    'assets/tutorial.ics': 'assets/tutorial-zh.ics',
    'KEEP EXPLORING': '更多资料',
    'TUTORIAL SLIDES': '教程课件',
    'Presentation materials': '演示课件',
    'Slides will be added here when they are released.': '课件发布后将在此提供。',
    'Coming soon': '即将发布',
    'Official tutorial listing': '官方教程介绍',
    'View the conference program and event details.': '查看会议日程与教程详情。',
    'GET IN TOUCH': '联系我们',
    'Questions about the tutorial?': '对本教程有疑问？',
    'Connect with the team through the USTC-AGI Research Group.': '可通过中国科大 USTC-AGI 研究组联系教程团队。',
    'Contact the team': '联系团队',
    'Industrial Tutorial 6': '产业教程 6',
    'Context-Aware Time Series Forecasting with LLMs': '基于大语言模型的上下文感知时间序列预测',
    'Conference website': '会议官网',
    '>Abstract<': '>内容简介<',
    '>Topics<': '>核心主题<',
    '>Speakers<': '>讲者团队<',
    '>Schedule<': '>日程安排<',
    '>Materials<': '>教程资料<',
    '>Contact<': '>联系我们<',
}
replacements.update({'PAPERS, MODELS &amp; SYSTEMS': '论文、模型与系统', '>Our Research<': '>代表研究成果<', '>Research<': '>代表工作<', 'Explore the papers, models,<br>and systems behind the tutorial.': '了解教程背后的论文、模型<br>与开源系统。', 'Our work spans time series forecasting foundations, multimodal understanding, cognitive reasoning, and autonomous forecasting agents.': '从领域综述到多模态建模、认知推理与预测智能体，了解本教程中介绍的团队代表工作。', 'Filter research by topic': '按研究方向筛选', 'View all research': '查看全部研究成果'})
chinese = source
for original, translated in sorted(replacements.items(), key=lambda pair: len(pair[0]), reverse=True):
    if original not in chinese:
        raise ValueError(f'Translation source missing: {original[:90]}')
    chinese = chinese.replace(original, translated)
chinese = chinese.replace('hreflang="zh-CN" aria-label="切换到中文"', 'hreflang="zh-CN" aria-current="page" aria-label="中文版"')
chinese = chinese.replace('hreflang="en" aria-current="page" aria-label="English version"', 'hreflang="en" aria-label="Switch to English"')
(root / 'zh.html').write_text(chinese)
print('Generated dist/zh.html from the English page.')
