export interface ILoginRequest {
    user: string,
    password: string
}

export interface ILoginResponse {
    data:{
        id: string,
        name: string,
        rol: {
            id: number,
            name: string
        },
        token: string
    }

}