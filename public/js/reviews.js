const newJokeHandler = async (event) => {
    event.preventDefault();
  
    const rating = document.querySelector('#review-rating').value.trim();
    const content = document.querySelector('#review-content').value.trim();
    const joke_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    


    if (rating && content) {
      const response = await fetch(`/api/jokes`, {
        method: 'POST',
        body: JSON.stringify({ rating, content, joke_id, }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`${joke_id}`);
      } else {
        alert('Failed to create review');
      }
    }
  };
  
  document
    .addEventListener('submit', newJokeHandler);