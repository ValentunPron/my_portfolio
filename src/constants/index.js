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