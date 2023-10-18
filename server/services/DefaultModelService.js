class DefaultModelService {
    limit = 10;
    page = 1;
    async getAll(model, query = {}){
        const perPage = query?.limit || this.limit
        const page = query?.page || this.page
        delete query.limit
        delete query.page

        console.log('------class-----\n', model, '\n-----------')

        const total = await model.count(query);
        const data = await model
            .find(query)
            .limit(perPage)
            .skip(perPage * (page-1))
        return {
            meta: {
                page,
                perPage,
                total
            },
            data
        }
    }
}

export default DefaultModelService