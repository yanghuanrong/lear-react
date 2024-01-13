function createTextNode(text) {
  return {
    type: 'TEXT_ElEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((item) =>
        typeof item === 'string' ? createTextNode(item) : item
      ),
    },
  };
}

export default {
  createElement,
};
