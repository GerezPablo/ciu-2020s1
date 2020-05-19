function getProcessedData(url) {
    return downloadData(url) // returns a promise
      .catch(e => {

       return downloadFallbackData(url)  // returns a promise
      })
      .then(v => {
        return processDataInWorker(v); // returns a promise
      });
  }

  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);



  async function getPost() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/5');
      const post = await response.json();
  
      console.log(post);
      return post;
    } catch (e) {
      console.error(e.message);
    }
  };
  
  getPost();  