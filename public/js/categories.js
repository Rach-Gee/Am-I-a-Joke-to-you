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
        alert('Category created!')
        document.location.replace('/');
      } 
      else if (!response.ok) {
        alert('You need to be logged in to do that!');
      }
      else {
        alert('Failed to create category');
      }
    }
  };
  
  document
    .addEventListener('submit', newCategoryHandler);