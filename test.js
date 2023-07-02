const createPost = async () => {
    const newPost = {
      //id: 123, // Replace 123 with your desired post ID
      title: 'My Custom Post',
      //content: 'This is the content of my custom post.',
      //status: 'publish',
      //author: 1, // Replace 1 with the desired author's user ID
    };
  
    try {
      const response = await fetch('https://localhost/wordpress/wp-json/wp/v2/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
  
      if (response.ok) {
        const createdPost = await response.json();
        console.log('Post created:', createdPost);
      } else {
        console.error('Failed to create post:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
createPost()