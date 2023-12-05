---
sidebar_position: 9999
---
# 一个策略，让ChatGPT翻译质量提升100%，超越专业译者

去年11月ChatGPT刚出来的时候，很多人就断言，翻译将成为最早被人工智能取代的工种之一。

今年5月，OpenAI发表了一篇对不同工种工作内容受AI影响程度的研究论文，里面提到口译员和翻译的工作有76.5%的工作内容是暴露在人工智能影响下的，成为最可能被AI影响和取代的工种之一。

但是很多人对于ChatGPT的翻译能力是否真的比专业的人类翻译更好，还是充满疑问。

所以，我设计了一套把ChatGPT 翻译质量再提升100%的prompt提示词，经过测验，我发现这套prompt带来的翻译结果全面超越了人类翻译的质量。而且这不是我自己的主观评价，而是让GPT-4、Bard、Claude2这几个模型统一评价的结果。

你可以通过我的[YouTube频道](https://www.youtube.com/watch?v=o6GFQS6Nyf4)或[B站视频](https://www.bilibili.com/video/BV1aM411o7JG/)获取更多测试的策略和测试结果的信息。

Prompt如下：

## 角色 & 任务

### 任务
我希望你以一个专业翻译团队的身份，协助完成从英文到中文的翻译任务。

### 角色
对于每个翻译任务，我将扮演三个专家角色，分别负责翻译、校对与润色工作：
1. 翻译专家：具有20年翻译经验，精通中英双语，并拥有丰富的跨学科知识。此阶段的目标是提供一份既忠实于原文，又在中文中读起来流畅自然的初稿。在翻译时，特别注重保持原文的风格和语调。
2. 资深校对编辑：拥有20年专业编辑经验，中文系毕业，对中文语法、用词有精准把握。在此阶段，您需要对翻译稿进行深度校对，包括语法、用词、风格的校正，确保翻译的准确性和易读性，进而输出第二版翻译稿。
3. 润色专家：作为一位拥有20年写作经验的获奖作家，擅长各种风格流派的写作。在此阶段，您需要在校对编辑提供的稿件基础上，进行风格上的润色，提高文本的文学美感，同时保持原文的专业性和准确性。例如，润色诗歌时应使用更优美、富有意境的语言；润色科技类文章时则应维持其专业性和准确性。

## 工作流程

### 1. 翻译阶段
参与人：翻译专家

输出物：翻译稿件

任务：提供忠实原文且流畅的中文初稿。

### 2. 校对阶段
参与人：资深校对编辑

输出物：校对过的翻译稿件

任务：深度校对初稿，保证准确性和易读性。

### 3. 润色阶段
参与人：润色专家

输出物：润色过后的最终翻译稿

任务：提升文本的风格美感，同时保持专业性和准确性。

 
 
## 本次测试设计的原文及翻译稿如下
原文摘取自《了不起的盖茨比》第一章

原文：When I came back from the East last autumn I felt that I wanted the world to be in uniform and at a sort of moral attention forever; I wanted no more riotous13 excursions with privileged glimpses into the human heart. Only Gatsby, the man who gives his name to this book, was exempt14 from my reaction--Gatsby who represented everything for which I have an unaffected scorn. If personality is an unbroken series of successful gestures, then there was something gorgeous about him, some heightened sensitivity to the promises of life, as if he were related to one of those intricate machines that register earthquakes ten thousand miles away. This responsiveness had nothing to do with that flabby impressionability which is dignified15 under the name of the "creative temperament16"--it was an extraordinary gift for hope, a romantic readiness such as I have never found in any other person and which it is not likely I shall ever find again. No--Gatsby turned out all right at the end; it is what preyed17 on Gatsby, what foul18 dust floated in the wake of his dreams that temporarily closed out my interest in the abortive19 sorrows and short-winded elations of men.

翻译稿一【Google translater】：去年秋天，当我从东方回来时，我觉得我希望世界永远穿着制服并受到某种道德关注；我不想再进行喧闹的旅行，以特权一睹人类的内心。只有盖茨比，这个以他的名字命名这本书的人，没有受到我的反应——盖茨比代表了我不假思索地蔑视的一切。如果个性是一系列不间断的成功姿态，那么他身上就有一些华丽的东西，对生命的承诺有一种高度的敏感性，就好像他与那些记录一万英里外地震的复杂机器有关。这种反应性与那种被称为“创造性气质”的软弱易感性无关——它是一种非凡的希望天赋，一种浪漫的准备，这是我从未在任何其他人身上发现的，而且它也不是。我可能会再次找到。不——盖茨比最后一切顺利；正是这种东西掠夺了盖茨比，正是他的梦醒后飘扬的肮脏的尘埃，暂时关闭了我对人类未遂的悲伤和短暂的欢欣的兴趣。

翻译稿二【我的Prompt加工版】：去年秋自东方归来，我渴望世间万物永守秩序，心怀道德之警醒；不再向往那些藉特权窥探心灵深处的喧嚣历险。唯独盖茨比，此书之名便是以他命名，未曾触动我的情绪——盖茨比，他所象征的一切，正是我坦率地鄙弃之所在。若言个性乃一连串得体举止的不息展现，那么他身上自有一番独特的华丽，对生命诺言的敏感度超然，宛如那些能在万里之遥感知地震波动的精密仪器。这种反应力并非那种被冠以“创造性气质”名号的脆弱易感——它是对希望的非凡恩赐，一种我在其他人身上从未见过、也大概永远不会再遇到的浪漫准备。不，盖茨比的结局其实是美好的；真正让人忧虑的是，盖茨比梦想背后飘散的那些污浊尘埃，它们暂时封闭了我对人间那些未竟之悲和短暂之喜的兴趣。

翻译稿三【专业译者版】：去年秋天我从东部回来后，我恨不得世人全都穿上军装，永远向道德立正致敬；我再也不要参加各种乱七八糟的活动，再也不要窥见人们的内心。只有盖茨比例外。这本书是以盖茨比命名的，他曾经象征着我厌憎的一切。倘使人格是许多连续不断的成功行动，那么他身上自有雍容华贵的气派，他对生活的各种前景也敏感得如同一台能够测知万里之外地震的精密仪器。这种敏锐并非那种被冠以“天才气质”美誉的多愁善感，而是一种永不言弃的乐观心态，一种罗曼蒂克的随机应变，是我在别人身上未曾发现、以后也很可能不会再见到的。是的——盖茨比其实完全没有问题，使我暂时对人世徒劳之悲哀和易逝之欢欣丧失兴趣的，是盖茨比身边那些食客，是那阵在他的梦想破灭之后飘散的污浊灰尘。

翻译稿四【GPT-4直译】：当我去年秋天从东方回来时，我感觉我希望世界穿上统一的制服，永远保持一种道德的警觉；我不再想要那些带有特权的混乱冒险，不再想偷看人心的隐秘。唯有盖茨比，这本书的名字由他命名，是我反应的例外——盖茨比代表了我对一切都有天生的蔑视。如果说个性是一系列成功姿态的不间断展现，那么他身上有着某种华丽，有着对生活承诺的更高敏感度，就好像他与那些能够感应万里之外地震的复杂机器有着某种联系。这种反应力与那种被高尚地称为“创造性气质”的松弛易感完全无关——它是对希望的非凡天赋，一种浪漫的准备，就像我在其他任何人身上从未发现过的，也不太可能再次发现。不，盖茨比最后变得很好；是什么侵蚀了盖茨比，是什么邪恶的尘埃在他的梦想之后飘扬，暂时关闭了我对那些失败的悲伤和短暂的欢愉的兴趣。


