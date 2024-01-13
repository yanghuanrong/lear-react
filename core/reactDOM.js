function render(el, container) {
  const dom =
    el.type === 'TEXT_ElEMENT'
      ? document.createTextNode('')
      : document.createElement(el.type);

  Object.keys(el.props).forEach((key) => {
    if (key !== 'children') {
      dom[key] = el.props[key];
    }
  });

  const children = el.props.children;
  children.forEach((item) => {
    render(item, dom);
  });

  container.append(dom);
}

export default {
  createRoot(container) {
    return {
      render(app) {
        render(app, container);
      },
    };
  },
};
