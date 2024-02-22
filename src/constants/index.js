import Image01 from '@/assets/project/01.PNG';
import Image02 from '@/assets/project/02.PNG';
import Image03 from '@/assets/project/03.PNG';
import Image04 from '@/assets/project/04.PNG';
import Image05 from '@/assets/project/05.PNG';
import Image06 from '@/assets/project/06.PNG';
import Image07 from '@/assets/project/07.PNG';
import Image08 from '@/assets/project/08.PNG';
import Image09 from '@/assets/project/09.PNG';
import Image10 from '@/assets/project/10.PNG';
import Image11 from '@/assets/project/11.PNG';

export const headerNav = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Project", path: "#project"},
    { title: "Contact", path: "#contact"},
  ];

export const tabData = [
  {
    title: 'Front-end',
    id: 'front-end',
    content: (
      <ul className="list-disc pl-2">
        <li>HTML / HTML5</li>
        <li>CSS (SASS, SCSS, LESS)</li>
        <li>JavaScript (ES6+), TypeScript</li>
        <li>React (Hooks, Router)</li>
        <li>Next.js</li>
        <li>Redux / Redux-toolkit</li>
        <li>Tailwind</li>
      </ul>
    )
  },
  {
    title: 'Back-end',
    id: 'back-end',
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>JSON Web Tokens</li>
        <li>RESTful API</li>
      </ul>
    )
  },
  {
    title: 'Language',
    id: 'language',
    content: (
      <ul className="list-disc pl-2">
        <li>Ukraine - Native</li>
        <li>Russian - C2</li>
        <li>English - B2</li>
        <li>German - A2</li>
      </ul>
    )
  }
]

export const projectData = [
  {
    imgUrl: Image01,
    title: 'Knot',
    desc: 'lorem text lorem text lorem text',
    siteUrl: 'https://knot-two.vercel.app/',
    codeUrl: 'https://github.com/ValentunPron/knot'
  },
  {
    imgUrl: Image02,
    title: 'Metabots',
    desc: 'lorem text lorem text lorem text',
    siteUrl: 'https://valentunpron.github.io/metabots',
    codeUrl: 'https://github.com/ValentunPron/metabots',
  },
  {
    imgUrl: Image03,
    title: 'Millor',
    desc: 'lorem text lorem text lorem text',
    siteUrl: 'https://valentunpron.github.io/Millor',
    codeUrl: 'https://github.com/ValentunPron/Millor',
  },
  {
    imgUrl: Image04,
    title: 'Warplay cloud',
    desc: 'lorem text lorem text lorem text',
    siteUrl: 'https://valentunpron.github.io/Warplay_cloud',
    codeUrl: 'https://github.com/ValentunPron/Warplay_cloud',
  },
  {
    imgUrl: Image05,
    title: 'Nike site',
    desc: 'lorem text lorem text lorem text',
    siteUrl: 'https://valentunpron.github.io/nike',
    codeUrl: 'https://github.com/ValentunPron/nike',
  },
  {
    imgUrl: Image06,
    title: 'Healas.lt',
    desc: 'lorem text lorem text lorem text',
    siteUrl: 'https://valentunpron.github.io/Gogame',
    codeUrl: 'https://github.com/ValentunPron/Gogame',
  },
  {
    imgUrl: Image07,
    title: 'Creative Design',
    desc: 'lorem text lorem text lorem text',
    siteUrl: 'https://valentunpron.github.io/Creative-Design',
    codeUrl: 'https://github.com/ValentunPron/Creative-Design',
  },
  {
    imgUrl: Image08,
    title: 'TVL',
    desc: 'lorem text lorem text lorem text',
    siteUrl: 'https://valentunpron.github.io/TVL',
    codeUrl: 'https://github.com/ValentunPron/TVL',
  },
  {
    imgUrl: Image09,
    title: 'CreateX',
    desc: 'lorem text lorem text lorem text',
    siteUrl: 'https://valentunpron.github.io/createX',
    codeUrl: 'https://github.com/ValentunPron/createX',
  },
  {
    imgUrl: Image10,
    title: 'Blanko',
    desc: 'lorem text lorem text lorem text',
    siteUrl: 'https://valentunpron.github.io/blanko',
    codeUrl: 'https://github.com/ValentunPron/blanko',
  },
  {
    imgUrl: Image11,
    title: 'React pizza',
    desc: 'lorem text lorem text lorem text',
    siteUrl: 'https://valentunpron.github.io/pizza-react',
    codeUrl: 'https://github.com/ValentunPron/pizza-react',
  },
]