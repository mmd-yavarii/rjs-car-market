function shorterText(text) {
  return text.split(' ').slice(0, 20).join(' ');
}

export { shorterText };
