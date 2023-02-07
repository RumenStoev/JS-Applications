class TemplateBuilder {
    constructor(dataPage, template) {
        this.dataPage = dataPage;
        this.template = template;

    }

    createPage() {
        return this;
    }


    updatePage() {
        return this;
    }

    deletePage() {
        return this;
    }

    buildPage() {
        return this.template()

    }

}








export { TemplateBuilder }