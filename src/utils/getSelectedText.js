// @flow
export default function getSelectedText() {
  let text = '';
  const activeElement = document.activeElement;
  const tagName = activeElement.tagName.toLowerCase();
  if (
    tagName === 'textarea' &&
    typeof activeElement.selectionStart === 'number' &&
    typeof activeElement.selectionEnd === 'number'
  ) {
    if (activeElement.value) {
      text = activeElement.value.slice(
        activeElement.selectionStart,
        activeElement.selectionEnd,
      );
    }
  } else if (window.getSelection()) {
    text = window.getSelection().toString();
  }
  return text;
}