export default function transformText(transformType: string, text: string): string {
  switch (transformType) {
    case 'bold':
      return `__${text}__`;
    case 'italic':
      return `*${text}*`;
    case 'link':
      return `[${text}](url)`;
    case 'list':
      return text.split('\n').map(i => `- ${i}`);
    case 'header':
      return `# ${text}`;
    case 'quote':
      return `> ${text}`;
    case 'image':
      return `![${text}](url)`;
    default: return text;
  }
}