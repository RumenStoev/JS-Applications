let editTemplate = ({title,img, description}) => {
  
    return `
    <section id="edit-movie" class="view-section">
        <form class="text-center border border-light p-5" action="#" method="" id="editForm">
          <h1>Edit Movie</h1>
          <div class="form-group">
            <label for="title">Movie Title</label>
            <input
              id="title"
              type="text"
              class="form-control"
              placeholder="Movie Title"
              value="${title}"
              name="title"
            />
          </div>
          <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea
              class="form-control"
              placeholder="Movie Description..."
              name="description"
              value=""
            >${description}</textarea>
          </div>
          <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input
              id="imageUrl"
              type="text"
              class="form-control"
              placeholder="Image Url"
              value="${img}"
              name="img"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </section>
    `
}



export { editTemplate }
