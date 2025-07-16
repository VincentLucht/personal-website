export interface IconConfigItem {
  alt: string;
  tooltip: string;
  className: string;
}

export interface IconConfigMap {
  [key: string]: IconConfigItem;
}

export const iconConfig: IconConfigMap = {
  'javascript.png': {
    alt: 'JavaScript',
    tooltip: 'JavaScript',
    className: 'bg-[#f0db4f50]',
  },
  'typescript.png': {
    alt: 'TypeScript',
    tooltip: 'TypeScript',
    className: 'bg-[#267ddb76]',
  },
  'python.svg': {
    alt: 'Python',
    tooltip: 'Python',
    className: 'bg-gradient-to-br from-[#377eb86b] to-[#fec43154]',
  },
  'c.png': {
    alt: 'C',
    tooltip: 'C',
    className: 'bg-[#1e77œd552]',
  },
  'rest-api.png': {
    alt: "Rest Api's",
    tooltip: "Rest Api's",
    className: 'bg-white',
  },
  'html.svg': {
    alt: 'HTML',
    tooltip: 'HTML',
    className: 'bg-[#e44d2650]',
  },
  'css.svg': {
    alt: 'CSS',
    tooltip: 'CSS',
    className: 'bg-[#8122cf4c]',
  },
  'sql.svg': {
    alt: 'SQL',
    tooltip: 'SQL',
    className: 'bg-[#02bef250]',
  },
  'react.svg': {
    alt: 'React',
    tooltip: 'React',
    className: 'bg-[#3fc9ef3d]',
  },
  'tsx.svg': {
    alt: 'TSX',
    tooltip: 'React TypeScript',
    className: 'bg-[#0c80f451]',
  },
  'tailwind.svg': {
    alt: 'Tailwind CSS',
    tooltip: 'Tailwind CSS',
    className: 'bg-[#26b4f143]',
  },
  'node.svg': {
    alt: 'Node.js',
    tooltip: 'Node.js',
    className: 'bg-[#7ed81d58]',
  },
  'express.svg': {
    alt: 'Express',
    tooltip: 'Express',
    className: 'bg-[#80808036]',
  },
  'postgres.png': {
    alt: 'PostgreSQL',
    tooltip: 'PostgreSQL',
    className: 'bg-[#34679186]',
  },
  'prisma.png': {
    alt: 'Prisma',
    tooltip: 'Prisma',
    className: 'bg-[#4db6ac4a]',
  },
  'jwt.png': {
    alt: 'JWT',
    tooltip: 'JSON Web Token',
    className: 'bg-gradient-to-br from-[#d401f960] to-[#2ab5f691]',
  },
  'vscode.svg': {
    alt: 'VS Code',
    tooltip: 'VS Code',
    className: 'bg-[#2da6f648]',
  },
  'vite.png': {
    alt: 'Vite',
    tooltip: 'Vite',
    className: 'bg-[#8a4dfc88]',
  },
  'npm.svg': {
    alt: 'npm',
    tooltip: 'npm',
    className: 'bg-[#ff00005e]',
  },
  'git.png': {
    alt: 'Git',
    tooltip: 'Git',
    className: 'bg-[#e945284a]',
  },
  'jest.png': {
    alt: 'Jest',
    tooltip: 'Jest',
    className: 'bg-[#f73c035f]',
  },
  'github.svg': {
    alt: 'GitHub',
    tooltip: 'GitHub',
    className: 'bg-[#00000095]',
  },
  'vercel.png': {
    alt: 'Vercel',
    tooltip: 'Vercel',
    className: 'bg-[#00000095]',
  },
  'render.png': {
    alt: 'Render',
    tooltip: 'Render',
    className: 'bg-[#00000095]',
  },
  'neon.png': {
    alt: 'Neon',
    tooltip: 'Neon',
    className: 'bg-[#61f7565d]',
  },
  'webpack.png': {
    alt: 'Webpack',
    tooltip: 'Webpack',
    className: 'bg-white',
  },
  'socketIO.png': {
    alt: 'Socket.IO',
    tooltip: 'Socket.IO',
    className: 'bg-white',
  },
  'linked-in.svg': {
    alt: 'Linked in',
    tooltip: 'Linked In',
    className: '',
  },
  'leetcode.png': {
    alt: 'Leetcode',
    tooltip: 'Leetcode',
    className: '',
  },
};
