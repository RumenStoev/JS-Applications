

class TemplateBuilder {

    constructor(requestData, templateView) {
        this.contentView = ``
        this.requestData = requestData;
        this.templateView = templateView;
    }

    addDataToMainTemplate(fnTemplate) {
        this.contentView = fnTemplate(this.contentView)
        return this;
    } 

    addHTMLElement(HTMLTagElement) {
        this.contentView += HTMLTagElement
        return this;
    }


    buildPage() {
        return this.contentView
    }
    
    

}





export { TemplateBuilder }