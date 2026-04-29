const urls = [
  'https://ibb.co/20QfXPt3',
  'https://ibb.co/d42x45kk',
  'https://ibb.co/84Sq373G',
  'https://ibb.co/tTP5FN4V'
];

async function fetchLinks() {
  for (const url of urls) {
    const res = await fetch(url);
    const text = await res.text();
    const match = text.match(/<meta property="og:image" content="(.*?)"/);
    if (match) {
      console.log(match[1]);
    } else {
      console.log('No match for', url);
    }
  }
}

fetchLinks();
