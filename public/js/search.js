document
  .querySelector('.jobsearch')
  .addEventListener('submit', jobSearch);


async function jobSearch(event) {
  event.preventDefault();
  const searchContent = document.querySelector('#searchContent').value;
  console.log('searchContent');
  if (searchContent) {
    document.location.replace('/search/' + searchContent);
  }
};