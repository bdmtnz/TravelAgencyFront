export interface ISignup {
    name: string,
    lastName: string,
    documentType: number,
    document: string,
    gender: string,
    birth: string
    phone: string,
    indicative: number,
    email: string,
    password: string
}

export const INIT_SIGNUP : ISignup = {
    name: "",
    lastName: "",
    documentType: 0,
    document: "",
    gender: "",
    birth: "",
    phone: "",
    indicative: 0,
    email: "",
    password: ""
}

