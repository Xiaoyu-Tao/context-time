// Research discussed in the tutorial. Metadata and links verified on 2026-11-13.
window.TUTORIAL_RESEARCH = [
  {
    "id": "tsf-survey",
    "category": "survey",
    "shortTitle": "Time Series Forecasting Survey",
    "title": "A Comprehensive Survey of Time Series Forecasting: Concepts, Challenges, and Future Directions",
    "summaryEn": "A systematic overview of time series forecasting concepts, methodological progress, key challenges, and future research directions.",
    "summaryZh": "系统梳理时间序列预测的概念、方法演进、关键挑战与未来研究方向。",
    "publication": {
      "venue": "IEEE TKDE",
      "year": 2026,
      "status": "published"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://ieeexplore.ieee.org/abstract/document/11732182"
      },
      {
        "label": "Reading list",
        "url": "https://github.com/USTCAGI/Awesome-Papers-Time-Series-Forecasting"
      }
    ],
    "image": null,
    "featured": true
  },
  {
    "id": "hitime",
    "category": "multimodal",
    "shortTitle": "HiTime",
    "title": "Hierarchical Multimodal LLMs with Semantic Space Alignment for Enhanced Time Series Classification",
    "summaryEn": "Combines data-specific and task-specific temporal features with coarse and fine semantic alignment for time series classification.",
    "summaryZh": "结合数据特征与任务特征，通过粗粒度和细粒度语义对齐提升时间序列分类。",
    "publication": {
      "venue": "ACM TIST",
      "year": null,
      "status": "accepted"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/abs/2410.18686"
      },
      {
        "label": "Code",
        "url": "https://github.com/Xiaoyu-Tao/HiTime"
      }
    ],
    "image": "assets/research/hitime.png",
    "featured": true
  },
  {
    "id": "tokencast",
    "category": "multimodal",
    "shortTitle": "TokenCast",
    "title": "From Values to Tokens: An LLM-Driven Framework for Context-Aware Time Series Forecasting via Symbolic Discretization",
    "summaryEn": "Learns a causal vector-quantized tokenizer that connects temporal tokens with text context for joint generative forecasting.",
    "summaryZh": "学习因果向量量化 tokenizer，连接离散时间序列 token 与文本上下文，实现联合生成式预测。",
    "publication": {
      "venue": "IJCAI",
      "year": 2026,
      "status": "published"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://ijcai.org/proceedings/2026/338"
      },
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2508.09191"
      },
      {
        "label": "Code",
        "url": "https://github.com/ustc-time-series/TokenCast"
      }
    ],
    "image": "assets/research/tokencast.png",
    "featured": true
  },
  {
    "id": "timereasoner",
    "category": "reasoning",
    "shortTitle": "TimeReasoner",
    "title": "Can Slow-Thinking LLMs Reason Over Time? Empirical Studies in Time Series Forecasting",
    "summaryEn": "Introduces explicit long-chain reasoning for forecasting and compares one-shot, rollout, and decoupled inference strategies.",
    "summaryZh": "将显式长思维链引入时间序列预测，比较一次性、滚动和解耦推理策略。",
    "publication": {
      "venue": "WSDM",
      "year": 2026,
      "status": "published"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1145/3773966.3777931"
      },
      {
        "label": "Code",
        "url": "https://github.com/ustc-time-series/TimeReasoner"
      }
    ],
    "image": "assets/research/timereasoner.png",
    "featured": true
  },
  {
    "id": "memcast",
    "category": "reasoning",
    "shortTitle": "MemCast",
    "title": "MemCast: Memory-Driven Time Series Forecasting with Experience-Conditioned Reasoning",
    "summaryEn": "Organizes historical patterns, reasoning wisdom, and general laws into layered memory to reuse forecasting experience with frozen model parameters.",
    "summaryZh": "以历史模式、推理经验和一般规律构建分层记忆，在不更新模型参数的情况下复用预测经验。",
    "publication": {
      "venue": "ICML",
      "year": 2026,
      "status": "accepted"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/abs/2602.03164"
      },
      {
        "label": "Code",
        "url": "https://github.com/ustc-time-series/MemCast"
      }
    ],
    "image": "assets/research/memcast.png",
    "featured": true
  },
  {
    "id": "time-r1",
    "category": "reasoning",
    "shortTitle": "Time-R1",
    "title": "Time Series Forecasting via Reasoning: A Slow-Thinking Approach with Reinforcement Fine-Tuned LLMs",
    "summaryEn": "Trains LLMs for direct slow-thinking forecasting through chain-of-thought supervised fine-tuning and reinforcement learning with verifiable rewards.",
    "summaryZh": "通过思维链监督微调与可验证奖励强化学习，训练大语言模型直接进行慢思考预测。",
    "publication": {
      "venue": "CIKM",
      "year": 2026,
      "status": "accepted"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/abs/2506.10630"
      },
      {
        "label": "Code",
        "url": "https://github.com/ustc-time-series/Time-R1"
      }
    ],
    "image": "assets/research/time-r1.png",
    "featured": false
  },
  {
    "id": "castreasoner",
    "category": "reasoning",
    "shortTitle": "CastReasoner",
    "title": "Learning Evidence-Grounded Reasoning for Context-Aware Time Series Forecasting",
    "summaryEn": "Structures forecasting into evidence analysis, strategy selection, and forecast construction, supported by trajectory selection and fine-grained training rewards.",
    "summaryZh": "将预测推理组织为证据分析、策略选择和预测构造三个阶段，并以数据选择与细粒度奖励支持训练。",
    "publication": {
      "venue": "arXiv",
      "year": 2026,
      "status": "preprint"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/abs/2611.12285"
      }
    ],
    "image": "assets/research/castreasoner.png",
    "featured": false
  },
  {
    "id": "agentic-position",
    "category": "survey",
    "shortTitle": "Agentic Time Series Forecasting",
    "title": "Position: Beyond Model-Centric Prediction—Agentic Time Series Forecasting",
    "summaryEn": "Presents an agentic perspective on forecasting through perception, planning, action, reflection, and memory.",
    "summaryZh": "提出从模型中心预测走向智能体预测的研究视角，以感知、规划、行动、反思和记忆组织预测过程。",
    "publication": {
      "venue": "arXiv",
      "year": 2026,
      "status": "preprint"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/abs/2602.01776"
      }
    ],
    "image": "assets/research/agentic-position.png",
    "featured": false
  },
  {
    "id": "alphacast",
    "category": "agentic",
    "shortTitle": "AlphaCast",
    "title": "AlphaCast: A Human Wisdom-LLM Intelligence Co-Reasoning Framework for Time Series Forecasting",
    "summaryEn": "Uses investigator, generator, and reflector roles to combine domain knowledge, contextual evidence, and historical cases in forecasting.",
    "summaryZh": "利用调查、生成和反思角色，将领域知识、上下文线索与历史案例纳入预测决策。",
    "publication": {
      "venue": "CIKM",
      "year": 2026,
      "status": "accepted"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/abs/2511.08947"
      },
      {
        "label": "Code",
        "url": "https://github.com/SkyeGT/CastMind"
      }
    ],
    "image": "assets/research/alphacast.png",
    "featured": false
  },
  {
    "id": "castfsr",
    "category": "agentic",
    "shortTitle": "CastFSR",
    "title": "CastFSR: Fast–Slow–Reflect Agentic Reasoning for Context-Aware Time Series Forecasting",
    "summaryEn": "Connects a fast numerical prior, slow contextual revision, and reflective checking to revise forecast intervals supported by evidence.",
    "summaryZh": "以快速数值先验、慢思考上下文修正和反思校验衔接预测过程，针对有证据支持的区间进行修订。",
    "publication": {
      "venue": "arXiv",
      "year": 2026,
      "status": "preprint"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/abs/2608.03031"
      },
      {
        "label": "Code",
        "url": "https://github.com/Xiaoyu-Tao/CastFSR"
      }
    ],
    "image": "assets/research/castfsr.png",
    "featured": true
  },
  {
    "id": "adacast",
    "category": "agentic",
    "shortTitle": "AdaCast",
    "title": "One Forecast, One World: Adaptive Evidence Reasoning for Context-Aware Time Series Forecasting",
    "summaryEn": "Selects evidence adaptively for each forecast, checks sufficiency, and fills information gaps according to the current forecasting state.",
    "summaryZh": "根据当前预测状态自适应选择证据，检查信息充分性，并在需要时补充上下文。",
    "publication": {
      "venue": "WSDM",
      "year": 2027,
      "status": "accepted"
    },
    "links": [
      {
        "label": "Publication record",
        "url": "https://mingyue-cheng.github.io/"
      }
    ],
    "image": "assets/research/adacast.png",
    "featured": false
  },
  {
    "id": "castflow",
    "category": "agentic",
    "shortTitle": "CastFlow",
    "title": "CastFlow: Bridging Evidence Acquisition and Accurate Prediction in Agentic Time Series Forecasting",
    "summaryEn": "Uses a frozen planner for evidence acquisition and a specialist to refine an ensemble prior, with reinforcement rewards for accuracy and improvement over the prior.",
    "summaryZh": "以冻结的规划器获取证据，由专门的预测模型修正集成先验，并以预测准确性和先验改进量进行强化学习。",
    "publication": {
      "venue": "arXiv",
      "year": 2026,
      "status": "preprint"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/abs/2604.27840"
      },
      {
        "label": "Code",
        "url": "https://github.com/Forever-Pan/CastFlow"
      }
    ],
    "image": "assets/research/castflow.png",
    "featured": false
  },
  {
    "id": "cast-r1",
    "category": "agentic",
    "shortTitle": "Cast-R1",
    "title": "Learning Agentic Time Series Forecasting via Trajectory Distillation and Memory-Based Reinforcement Learning",
    "summaryEn": "Trains a unified forecasting agent for tool selection, model routing, and forecast revision through trajectory distillation and multi-turn reinforcement learning.",
    "summaryZh": "通过轨迹蒸馏与多轮强化学习，训练统一预测智能体完成工具选择、模型路由与预测修订。",
    "publication": {
      "venue": "arXiv",
      "year": 2026,
      "status": "preprint"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/abs/2602.13802"
      },
      {
        "label": "Code",
        "url": "https://github.com/ustc-time-series/Cast-R1"
      }
    ],
    "image": "assets/research/cast-r1.png",
    "featured": true
  },
  {
    "id": "castclaw",
    "category": "agentic",
    "shortTitle": "CastClaw",
    "title": "CastClaw: A Human-in-the-Loop Autonomous Agent for Industry Time Series Forecasting",
    "summaryEn": "Brings operator constraints and feedback into an industrial forecasting workflow, with validation and execution records for forecast revisions.",
    "summaryZh": "将用户约束与反馈引入工业预测工作流，通过验证和执行记录管理预测修订。",
    "publication": {
      "venue": "ICDM Demo Track",
      "year": 2026,
      "status": "accepted"
    },
    "links": [
      {
        "label": "Code",
        "url": "https://github.com/ustc-time-series/CastClaw"
      }
    ],
    "image": "assets/research/castclaw.png",
    "featured": true
  },
  {
    "id": "neoresearch",
    "category": "agentic",
    "shortTitle": "NeoResearch",
    "title": "NeoResearch: Literature- and Experience-Guided Autonomous Time Series Model Discovery",
    "summaryEn": "Uses separate model-design and tuning-validation loops, guided by literature and previous experiments, for autonomous time series model discovery.",
    "summaryZh": "采用设计与调优验证双循环，利用文献和历史实验经验开展自主时间序列模型发现。",
    "publication": {
      "venue": null,
      "year": 2026,
      "status": "under_review"
    },
    "links": [
      {
        "label": "Publication record",
        "url": "https://mingyue-cheng.github.io/"
      }
    ],
    "image": "assets/research/neoresearch.png",
    "featured": false
  },
  {
    "id": "world2ts",
    "category": "reasoning",
    "shortTitle": "World2TS",
    "title": "World2TS: Real-World Event Context for Time-Series Forecasting",
    "summaryEn": "Builds a contextual forecasting resource by linking verified real-world events to relevant time series through temporal and semantic scope.",
    "summaryZh": "以可核验事件与时间序列的时空、语义关联构建上下文资源，用于评估预测模型对真实事件信息的利用。",
    "publication": {
      "venue": "arXiv",
      "year": 2026,
      "status": "preprint"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/abs/2610.14861"
      },
      {
        "label": "Project",
        "url": "https://world2ts.github.io/"
      }
    ],
    "image": "assets/research/world2ts.png",
    "featured": false
  },
  {
    "id": "castworld",
    "category": "agentic",
    "shortTitle": "CastWorld",
    "title": "CastWorld: Benchmarking Context-Aware Agentic Time Series Forecasting Beyond Predictive Accuracy",
    "summaryEn": "Combines datasets, a shared harness, and process evaluation to assess forecast quality, execution, behavioral trustworthiness, and resource efficiency.",
    "summaryZh": "结合数据集、共享执行框架与过程评测，从预测质量、执行过程、行为可信性和资源效率评估预测智能体。",
    "publication": {
      "venue": "arXiv",
      "year": 2026,
      "status": "preprint"
    },
    "links": [
      {
        "label": "Paper",
        "url": "https://arxiv.org/abs/2611.15262"
      }
    ],
    "image": "assets/research/castworld.png",
    "featured": false
  }
];
