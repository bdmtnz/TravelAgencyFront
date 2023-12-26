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

export interface ISelectOption {
    id: number,
    name: string
}