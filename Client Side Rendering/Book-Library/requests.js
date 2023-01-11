class RequestsBooks {
    url = "http://localhost:3030/jsonstore/collections/books"
    constructor() {

    }

    async getAllBooks() {
        return await fetch(this.url)
            .then(data => data.json())
            .catch(this.catchError)
    }

    async createBook(dataBook) {
        return await fetch(this.url + `/${id}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...dataBook })
        })
    }


    async getBookById(id) {
        return await fetch(this.url + `/${id}`)
            .then(data => data.json())
            .catch(this.catchError)
    }

    async updateBook(book) {
        return await fetch(this.url + `/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        })
    }


    async catchError(error) {
        throw new Error(error)
    }

}


let containerRequests = new RequestsBooks()


export {
    containerRequests
}