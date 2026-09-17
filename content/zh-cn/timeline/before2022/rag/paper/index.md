---
title: "Retrieval-Augmented Generation（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-14
description: >
  按原文结构转述 Lewis 等 2020 年 RAG 论文：参数记忆、非参数记忆、两种边际化与实验。
---

Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau Yih, Tim Rocktäschel, Sebastian Riedel, Douwe Kiela. *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks*. NeurIPS 2020. [arXiv:2005.11401](https://arxiv.org/abs/2005.11401)（v4，2021-04）。作者单位包括 Facebook AI Research、University College London、New York University。

中文译本：[宝玉](https://baoyu.io/translations/ai-paper/2005.11401-retrieval-augmented-generation-for-knowledge-intensive-nlp-tasks)。

---

## 摘要

大规模预训练语言模型可以把事实知识存在参数里，微调后在许多 NLP 任务上达到当时最好水平。但访问并精确操纵这些知识的能力仍有限，知识密集型任务上落后于任务专用结构。如何给预测提供出处、如何更新世界知识，仍是开放问题。带可微访问机制、显式非参数记忆的预训练模型，此前主要只在抽取式下游任务上被研究。

本文给出一种通用微调配方 **retrieval-augmented generation (RAG)**：把预训练的参数记忆与非参数记忆结合起来做语言生成。参数记忆是预训练 seq2seq 模型；非参数记忆是维基百科的稠密向量索引，由预训练神经检索器访问。比较两种写法：整段生成共用同一批检索段落；每个 token 可以使用不同段落。在多种知识密集型任务上微调与评测；三个开域问答任务上达到当时最好，超过纯参数 seq2seq 以及任务专用的「检索再抽取」结构。生成任务上，比当时最好的纯参数 seq2seq 基线更具体、更多样、更符合事实。

## 1 引言

预训练语言模型可以从数据里学到相当深的知识，不必访问外部记忆，相当于参数化的隐式知识库。代价是：记忆不容易扩展或修订；预测不容易给出依据；可能产生幻觉。混合参数记忆与非参数（检索）记忆可以缓解：知识能直接修订、扩展，被访问的内容可检查。REALM 与 ORQA 把掩码语言模型与可微检索器结合，结果可观，但只做了开域抽取式问答。本文把这种混合记忆接到当时 NLP 的主力结构——seq2seq 模型上。

RAG：参数记忆是预训练 seq2seq Transformer；非参数记忆是维基百科稠密索引，由预训练神经检索器访问。检索器是 DPR，按输入给出潜在文档；生成器是 BART，同时条件于这些文档与输入。对潜在文档做 top-K 近似边际化：按整段输出（同一文档负责所有 token）或按 token（不同文档负责不同 token）。与 T5 / BART 一样，RAG 可在任意 seq2seq 任务上微调，生成器与检索器一起学。

与从零训练的记忆网络等不同：这里两块记忆都已预训练、预装大量知识。用预训练好的访问机制，不必再训一遍才能访问知识。

知识密集型任务：人若没有外部知识源，无法合理完成。RAG 在 open Natural Questions、WebQuestions、CuratedTrec 上达到当时最好；TriviaQA 上明显超过使用专用预训练目标的近期方法。这些本是抽取式任务，作者发现无约束生成反而超过先前抽取方法。生成侧做了 MS-MARCO 与 Jeopardy 问题生成。FEVER 事实验证距使用强检索监督的流水线 SOTA 约 4.3%。非参数记忆可以替换，以便世界变化时更新知识。

## 2 方法

输入序列 \(x\) 用来检索文档 \(z\)，再作为额外上下文生成目标序列 \(y\)。两块：(i) 检索器 \(p_\eta(z|x)\)，按查询给出（截断到 top-K 的）段落分布；(ii) 生成器 \(p_\theta(y_i|x,z,y_{1:i-1})\)，根据已生成 token、原输入与检索段落生成当前 token。

把检索到的文档当潜变量，端到端训练。两种边际化：

**RAG-Sequence。** 同一篇检索文档生成整段。top-K 近似：

\[
p_{\text{RAG-Sequence}}(y|x)\approx\sum_{z\in\text{top-}k}p_\eta(z|x)\,p_\theta(y|x,z)
=\sum_{z\in\text{top-}k}p_\eta(z|x)\prod_i p_\theta(y_i|x,z,y_{1:i-1})
\]

**RAG-Token。** 每个目标 token 可以对应不同潜在文档，生成器可从多篇里取内容：

\[
p_{\text{RAG-Token}}(y|x)\approx\prod_i\sum_{z\in\text{top-}k}p_\eta(z|x)\,p_\theta(y_i|x,z,y_{1:i-1})
\]

序列分类把类别当成长度 1 的目标序列，此时两种模型等价。

### 2.2 检索器：DPR

双编码器：\(p_\eta(z|x)\propto\exp(\mathbf{d}(z)^\top\mathbf{q}(x))\)，\(\mathbf{d}(z)=\mathrm{BERT}_d(z)\)，\(\mathbf{q}(x)=\mathrm{BERT}_q(x)\)。top-K 是最大内积搜索（MIPS），可近似亚线性求解。用 DPR 预训练的双编码器初始化检索器并建索引。该检索器原为 TriviaQA 与 Natural Questions 上「检索含答案的文档」而训。文档索引即非参数记忆。

### 2.3 生成器：BART

任意编码器—解码器均可。本文用 BART-large（约 4 亿参数）。把 \(x\) 与检索内容 \(z\) 拼接后送入 BART。BART 参数 \(\theta\) 即参数记忆。

### 2.4 训练

检索器与生成器联合训练，**不对「该检索哪篇」做直接监督**。最小化目标的负边际对数似然。更新文档编码器 \(\mathrm{BERT}_d\) 代价高（索引要像 REALM 那样周期性重建）。作者发现不必如此也能得到强结果：文档编码器与索引固定，只微调查询编码器 \(\mathrm{BERT}_q\) 与 BART。

### 2.5 解码

**RAG-Token** 可看成标准自回归 seq2seq，把对文档的边际化折进转移概率，用普通束搜索。

**RAG-Sequence** 的 \(p(y|x)\) 不能拆成常规的逐 token 似然。对每篇 \(z\) 各做一次束搜索，再对未出现在所有束里的假设补前向，乘上 \(p_\eta(z|x)\) 后求和。称为 Thorough Decoding。更长输出时候选集变大；可近似认为束搜索没生成过的 \(y\) 概率为 0，避免额外前向，称为 Fast Decoding。

## 3 实验设定

非参数知识源：单一维基百科转储（2018 年 12 月，与 Lee et al.、Karpukhin et al. 一致）。每篇切成互不相交的约 100 词块，共 2100 万文档。FAISS + HNSW 建 MIPS 索引。训练时每查询检索 top \(k\in\{5,10\}\)；测试时的 \(k\) 用开发集选。

**开域 QA。** 问题与答案当输入—输出对，直接最小化答案的负对数似然。对照抽取式（答案是检索文档中的跨度，主要靠非参数知识）与闭卷生成（T5 等，纯参数、不检索）。数据集：NQ、TriviaQA、WebQuestions、CuratedTrec。WQ、CT 较小，用 NQ 上的 RAG 初始化。报 Exact Match。TriviaQA 另报与 T5 可比的 Wiki 测试集。

**抽象问答。** MS-MARCO NLG v2.1：不用官方提供的十篇金段落，只问与答，当成开域抽象 QA。部分题没有金段落无法对上参考答案；部分题仅靠维基百科答不了，此时可靠参数知识。

**Jeopardy 问题生成。** 给定实体，生成 Jeopardy 式精确事实问句。SearchQA 划分。对照 BART。指标 Q-BLEU-1；另做事实性与特异性的成对人工评测。

**事实验证。** FEVER：判断断言被维基支持、反驳或信息不足。把三类标签映射成单 token，直接用断言—类别对训练。**不用检索证据的监督**。报 3 分类与 2 分类标签准确率。

## 4 结果

**开域 QA（表 1，测试集 EM）。** RAG-Sequence：NQ 44.5，TQA 56.8 / 68.0（标准 / Wiki），WQ 45.2，CT 52.2。RAG-Token：NQ 44.1，WQ 45.5。均超过闭卷 T5-11B+SSM（NQ 36.6，WQ 44.7）与开域 REALM / DPR。作者强调：不必昂贵的 salient span masking 预训练；也不必 DPR 那套 cross-encoder 重排 + 抽取式阅读器。生成的好处：文档里只有线索、没有答案原文时仍能贡献；检索集里完全没有正确答案时，NQ 上仍有 11.8% 准确率（抽取模型为 0）。

**MS-MARCO。** RAG-Sequence 相对 BART 高 2.6 BLEU、2.6 Rouge-L。接近使用金段落的 SOTA。定性上幻觉更少。

**Jeopardy。** RAG-Token 的 Q-BLEU 高于 RAG-Sequence 与 BART。人工（452 对）：BART 更符合事实仅 7.1%，RAG 更符合事实 42.7%。特异性同样 RAG 明显更好。作者用 Hemingway 一例说明：不同 token 的文档后验会在不同书名上高峰，参数记忆随后能自己补全书名——非参数成分把参数里的具体知识「抽」出来。

**FEVER。** 3 分类距当时流水线 SOTA 约 4.3%；2 分类距给定金证据句的 RoBERTa 约 2.7%。top-1 检索文档与金证据文章重叠 71%，top-10 含金文章 90%。

**多样性。** 不靠多样性解码，RAG 的 distinct trigram 比例高于 BART。

**消融。** 冻结检索器全面变差。把稠密检索换成固定 BM25：FEVER 上 BM25 更好（断言偏实体、适合词重叠）；其余任务尤其开域 QA，可微检索关键。

**索引热替换。** 2016-12 与 2018-12 两份维基索引。对 82 位在两日期之间换人的领导人，用「Who is {position}?」查询 NQ 模型：匹配年份的索引约 70% / 68% 正确；错配索引降至 12% / 4%。**换非参数记忆即可更新世界知识，不必重训。**

训练用 5 或 10 篇差别不大。测试时多检索：RAG-Sequence 的开域 QA 单调变好；RAG-Token 约在 10 篇见顶。

## 5–6 相关工作与讨论

把先前「检索帮单个任务」的成功收成**同一套检索架构微调到多种任务**。对照无检索的通用架构（GPT-2、BART、T5）、可学习检索、记忆网络、retrieve-and-edit。索引是原文而非分布式表示：人能读（可解释），人能写（改索引即改记忆）。

结论：混合生成模型在开域 QA 上达到当时最好；人更偏好 RAG 而非纯参数 BART；检索可学、索引可热替换。后续可考虑两块从零联合预训练。

社会影响：更贴维基事实、幻觉更少、更可控制；维基本身仍有偏差；也可被用来生成误导内容。风险缓解思路与 GPT-2 讨论同类。
