
export class TodoModel {
    public _id: string
    public description: string
    public date: string
    public clientId: string
    public status: boolean

    public clients: {
        _id: string,
        name: string,
        business: string,
        tel: string,
        email: string
    }
}