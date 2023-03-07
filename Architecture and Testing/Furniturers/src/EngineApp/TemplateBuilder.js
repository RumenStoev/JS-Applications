function TemplateBuilder() {
    this.contentView = ""
    this.requestData = ""
}


TemplateBuilder.prototype.addHTMLElement = function (stringHTML) {
    this.contentView += stringHTML

    return this;
}

TemplateBuilder.prototype.takeDataRequest = function (request) {
    this.requestData = request

    return this
}

TemplateBuilder.prototype.buildPage = function () {
    return this.contentView;
}




export { TemplateBuilder }



