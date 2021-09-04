const newJokeHandler = async (event) => {
    event.preventDefault();
  
    const rating = document.querySelector('#review-rating').value.trim();
    const content = document.querySelector('#review-content').value.trim();
    const star = document.querySelector('#rateNum').value.trim();
    const joke_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    
    const body = ({ rating, content, joke_id, })
    console.log(body)

    if (rating && content) {
      console.log("-------------" + star)
      const response = await fetch(`/api/reviews`, {
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