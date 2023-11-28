import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: ' ChatGPT教程',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        用一手经验从0到1带你进入ChatGPT，从大语言模型的原理，到充分发挥ChatGPT潜力，帮助你实现商业成功，提升工作、学习效率.
      </>
    ),
  },
  {
    title: ' ChatGPT Prompt提示词',
    Img: require('@site/static/img/2.png').default,
    description: (
      <>
        ChatGPT的使用是一门实践的艺术，我们通过提供一系列不同职业和生活场景下你可用的结构化提示词，让你获得启发.
      </>
    ),
  },
  {
    title: 'MidJourney教程',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        除了LLM，AI绘画也是目前取得了快速发展的方向，其中Midjourney是技术发展最快，对新手最友好的，我们的教程带你实现从0-1的AI绘画入门.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
