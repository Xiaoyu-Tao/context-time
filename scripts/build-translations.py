"""Refresh asset versions and generate the standalone Chinese tutorial page.

Edit dist/index.html and the translations below, then run this script.
Speakers, schedule and research have bilingual data in dist/*.js.
"""
from pathlib import Path
import hashlib
import re

root = Path(__file__).resolve().parents[1] / 'dist'
source = (root / 'index.html').read_text()
for asset in ['style.css', 'content.js', 'app.js', 'research-data.js', 'research.js']:
    version = hashlib.sha256((root / asset).read_bytes()).hexdigest()[:10]
    source = re.sub(r'(?P<attr>href|src)="' + re.escape(asset) + r'(?:\?v=[^"]*)?"', lambda match: match.group('attr') + '="' + asset + '?v=' + version + '"', source)
(root / 'index.html').write_text(source)
translations = {
    '<html lang="en">': '<html lang="zh-CN">',
    'ICDM 2026 Tutorial: Context-Aware Time Series Forecasting with LLMs. November 15, 2026, Shenyang, China.': 'ICDM 2026 教程：基于大语言模型的上下文感知时间序列预测。2026 年 11 月 15 日，中国沈阳。',
    'Context-Aware Time Series Forecasting with LLMs': '基于大语言模型的上下文感知时间序列预测',
    'From Pattern Recognition to Cognitive Reasoning': '从模式识别到认知推理',
    'ICDM 2026 Tutorial': 'ICDM 2026 教程',
    'Industrial Tutorial 6': '产业教程 6',
    'Skip to content': '跳至正文',
    'Main navigation': '主导航',
    'Page language': '页面语言',
    'November 15, 2026': '2026 年 11 月 15 日',
    'Grand Ballroom 1 · Shenyang, China': 'Grand Ballroom 1 · 中国沈阳',
    'This tutorial explores how large language models bring context and reasoning to time series forecasting. We cover <strong>multimodal understanding</strong>, <strong>reasoning over predictive evidence</strong>, and <strong>agentic interaction with tools and environments</strong>, with applications in energy, traffic, industry, and science.': '本教程介绍大语言模型如何为时间序列预测引入上下文与推理能力，围绕<strong>多模态理解</strong>、<strong>基于预测证据的推理</strong>以及<strong>智能体与工具和环境的交互</strong>展开，并讨论能源、交通、工业与科学领域的应用。',
    '>Overview<': '>简介<',
    '>Speakers<': '>讲者<',
    '>Program<': '>日程<',
    '>Research<': '>研究<',
    '>Selected Research<': '>代表研究<',
    '>Materials<': '>资料<',
    '>Time<': '>时间<',
    '>Topic<': '>主题<',
    '>Presenter<': '>讲者<',
    'Tutorial program, November 15, China Standard Time': '教程日程，11 月 15 日，北京时间',
    'All times are China Standard Time (UTC+8).': '所有时间均为北京时间（UTC+8）。',
    'Add to calendar': '添加到日历',
    'assets/tutorial.ics': 'assets/tutorial-zh.ics',
    'Slides: coming soon.': '课件：即将发布。',
    'Official tutorial listing': '会议官方教程介绍',
    '>Conference<': '>会议官网<',
    '>Contact<': '>联系团队<',
    'ICDM 2026 · Shenyang': 'ICDM 2026 · 沈阳',
}
chinese = source
for original, translated in sorted(translations.items(), key=lambda pair: len(pair[0]), reverse=True):
    if original not in chinese:
        raise ValueError(f'Translation source missing: {original[:90]}')
    chinese = chinese.replace(original, translated)
chinese = chinese.replace('hreflang="zh-CN" aria-label="切换到中文"', 'hreflang="zh-CN" aria-current="page" aria-label="中文版"')
chinese = chinese.replace('hreflang="en" aria-current="page" aria-label="English version"', 'hreflang="en" aria-label="Switch to English"')
(root / 'zh.html').write_text(chinese)
print('Updated asset versions and generated dist/zh.html.')
