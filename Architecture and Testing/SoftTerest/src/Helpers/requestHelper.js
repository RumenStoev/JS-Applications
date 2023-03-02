function setLocaleStorage(key, requestData) {

    return localStorage.setItem(key, JSON.stringify(requestData))

}

function getAccessToken(key) {
    return JSON.parse(localStorage.getItem(key)).accessToken
}


class InitObjBuilder {
    constructor() {}
        result = {}


        setMethod(method) {
            this.result["method"] = method
            return this
        }

        setHeader(headers) {
            this.result["headers"] = headers
            return this
        }

        setBody(body) {
            this.result["body"] = body
            return this
        }

        build() {
            return this.result
        }
    
} 



export {
    setLocaleStorage,
    getAccessToken,
    InitObjBuilder
}