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
  
    if (response.ok) {
      document.location.replace('/job/' +response.data.id);
    } else {
      alert('Failed to add job');
    }
  }
  
  document
    .querySelector('.new-job-form')
    .addEventListener('submit', newFormHandler);
  