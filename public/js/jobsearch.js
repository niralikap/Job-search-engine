async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#title').value;
    const industry = document.querySelector('#industry').value;
    const experience = document.querySelector('#experience').value;
    const minSalary = document.querySelector('#minSalary').value;
    const maxSalary = document.querySelector('#maxSalary').value;
    const employer = document.querySelector('#employer').value;
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;
    const isRemote = document.querySelector('#isRemote').value;
  
    const response = await fetch(`/api/job`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        industry,
        experience,
        minSalary,
        maxSalary,
        employer,
        city,
        state,
        isRemote,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {

      document.location.replace('/job/' + data.id);
    } else {
      alert('Failed to add job');
    }
  };
  
  /*const response = await fetch(`/api/job`, {
    method: 'GET',
    body: JSON.stringify({
      title,
      industry,
      experience,
      minSalary,
      maxSalary,
      employer,
      city,
      state,
      isRemote,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/job');
  } else {
    alert('Failed to add job');
  }*/


document
  .querySelector('.new-job-form')
  .addEventListener('submit', newFormHandler);
  
/*document
  .querySelector('#search')
  .addEventListener('search', jobSearch);


async function jobSearch(event) {
  event.preventDefault();
  const searchContent = document.querySelector('#searchContent').value;
  if (searchContent) {
    document.location.replace('/search/' + searchContent);
  }
};*/