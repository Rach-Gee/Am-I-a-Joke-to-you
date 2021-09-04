const newJokeHandler = async (event) => {
  event.preventDefault();
    const rating = $(".rating").rate("getValue");
    const content = document.querySelector('#review-content').value.trim();
    const joke_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const body = ({ rating, content, joke_id})
  console.log(body)
  if (rating && content) {
    const response = await fetch(`/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({ rating, content, joke_id,}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`${joke_id}`);
    
    }

    if (!response.ok) {
      alert('You need to be logged in to do that!');
    
    }
    else {
      alert('Failed to create review');
    }
  }

}
document
  .addEventListener('submit', newJokeHandler);