
class RequestBuilder {
    constructor(serverURL) {
        this.init = {

            "headers": {},

        }
        this.storageData = {}
        this.serverURL = serverURL
        this.fullURL = ""

    }

    setUrlPath(path) {
        this.fullURL = this.serverURL + path;
        return this;
    }


    setMethod(method) {

        this.init["method"] = method

        return this;
    }

    setHeader(prop, value) {
        if (prop && value) {
            this.init["headers"][prop] = value
        }
        return this
    }

    setLocaleStorageKey(key) {
        this.storageData['key'] = key
        return this;
    }

    setLocaleStorageData(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    deleteLocalStorageData(key) {
        localStorage.removeItem(key)
        return this
    }

    setBody(body) {
        this.init["body"] = JSON.stringify(body)
        return this
    }

    async buildRequest() {
        try {
            let request = await fetch(this.fullURL, this.init)

            if (request.ok) {
                let resultRequest = request.json()

                if (this.storageData["key"]) {
                    this.setLocaleStorageData(this.storageData["key"], await resultRequest)
                }

                return resultRequest
            }


        } catch (e) {
            throw new Error(e)
        }

    }
}

export { RequestBuilder }