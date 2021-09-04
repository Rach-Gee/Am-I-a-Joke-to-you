const newJokeHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#joke-title').value.trim();
    const content = document.querySelector('#joke-content').value.trim();
    const category_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];


    if (title && content) {
      const response = await fetch(`/api/jokes`, {
        method: 'POST',
        body: JSON.stringify({ title, content, category_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      if (response.ok) {
        document.location.replace(`${category_id}`);
      }       
      if (!response.ok) {
        alert('You need to be logged in to do that!');
      } else {
        alert('Failed to create category');
      }
    }
  };
  
  document
    .addEventListener('submit', newJokeHandler);