const newCategoryHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#category-title').value.trim();
  
    if (title) {
      const response = await fetch(`/api/categories`, {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create category');
      }
    }
  };
  
  document
    .addEventListener('submit', newCategoryHandler);