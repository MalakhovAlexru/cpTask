function importAll(r) {
  return r.keys().map((key, idx) => {
    const regExp = /[A-Z]\D*[^.png]/gm;
    return {
      appName: key.match(regExp)[0],
      imgURI: r(key).default,
      position: idx,
      inButtomMenu: false,
    };
  });
}

export { importAll };
