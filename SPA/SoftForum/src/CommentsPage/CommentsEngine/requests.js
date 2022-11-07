async function getSelectedPost() {
      try {
        return await fetch("http://localhost:3030/jsonstore/collections/myboard/posts")
                  .then(data => data.json())
                  
      }catch(err) {
          throw new Error(err);
      }
}






export { getSelectedPost }