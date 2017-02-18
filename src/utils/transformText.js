// @flow
function removeMarkdown(transformType: string, text: string) {
  switch (transformType) {
    case 'bold':
      return text.replace('__', '');
    case 'italic':
      return text.replace('*', '');
    case 'link':
      return text
        .slice(0, text.indexOf(')'))
        .replace('[', '')
        .replace(']', '');
    case 'list':
      return text
        .split('\n')
        .map(i => i.replace('*', ''))
        .join('\n');
    case 'header':
      return text.replace('#', '');
    case 'quote':
      return text.replace('>', '');
    case 'image':
      return text
        .slice(0, text.indexOf(')'))
        .replace('!', '')
        .replace('[', '')
        .replace(']', '');
    default: return text;
  }
}

function addMarkdown(transformType: string, text: string) {
  switch (transformType) {
    case 'bold':
      return `__${text}__`;
    case 'italic':
      return `*${text}*`;
    case 'link':
      return `[${text}](url)`;
    case 'list':
      return text
        .replace('\n\n', '\n')
        .split('\n')
        .map(i => `* ${i}`)
        .join('\n');
    case 'header':
      return `# ${text}`;
    case 'quote':
      return `> ${text}`;
    case 'image':
      return `![${text}](url)`;
    default: return text;
  }
}

function addOrRemoveMarkdown(transformType: string, text: string, comparator: Function) {
  if (comparator() === true) {
    return removeMarkdown(transformType, text);
  }
  return addMarkdown(transformType, text);
}

export default function transformText(transformType: string, text: string): string {
  switch (transformType) {
    case 'bold':
      return addOrRemoveMarkdown(transformType, text, () => text.indexOf('__') > 0);
    case 'italic':
      return addOrRemoveMarkdown(transformType, text, () => text.indexOf('*') > 0);
    case 'link':
      return addOrRemoveMarkdown(
        transformType,
        text,
        () => text.indexOf('[') > 0 && text.indexOf(']') > 0,
      );
    case 'list':
      return addOrRemoveMarkdown(transformType, text, () => text.indexOf('*') > 0);
    case 'header':
      return addOrRemoveMarkdown(transformType, text, () => text.indexOf('#') > 0);
    case 'quote':
      return addOrRemoveMarkdown(transformType, text, () => text.indexOf('>') > 0);
    case 'image':
      return addOrRemoveMarkdown(transformType, text, () => text.indexOf('[') > 0);
    default: return text;
  }
}