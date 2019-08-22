import router from 'next/router';

export default function onPath({ options, record }) {
  const { path, query = { id: 'id' } } = options;
  const data = {};
  Object.keys(query).forEach(key => {
    data[key] = record[key] || query[key];
  });

  router.push({
    pathname: path,
    query: data,
  });
}