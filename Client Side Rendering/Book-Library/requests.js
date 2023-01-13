

class RequestsBooks {
    url = "http://localhost:3030/jsonstore/collections/books"


    async getAllBooks() {
        return await fetch(this.url)
            .then(data => data.json())
            .catch(this.catchError)
    }

    async createBook(dataBook) {
        return await fetch(this.url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...dataBook })
        })
            .then(response => response.status)
            .catch(this.catchError)
    }


    async getBookById(id) {
        return await fetch(this.url + `/${id}`)
            .then(data => data.json())
            .catch(this.catchError)
    }

    async updateBook(dataBook, id) {
        return await fetch(this.url + `/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataBook)
        })
            .catch(this.catchError)
    }

    async deleteBook(id) {
        return await fetch(this.url + `/${id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
            .catch(this.catchError)
    }


    async catchError(error) {
        throw new Error(error)
    }

}


let containerRequests = new RequestsBooks()


export {
    containerRequests
}
