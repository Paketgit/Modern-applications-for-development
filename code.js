let str = `<!doctype html>`


str = str.replaceAll('<', '&lt;');
str = str.replaceAll('>', '&gt;');

console.log(str);
