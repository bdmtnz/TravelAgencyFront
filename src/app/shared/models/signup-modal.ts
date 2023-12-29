export interface ISignup {
    name: string,
    lastName: string,
    documentType: number,
    document: string,
    gender: number,
    birth: string
    phone: string,
    indicative: number|null,
    email: string,
    password: string
}

export const INIT_SIGNUP : ISignup = {
    name: "",
    lastName: "",
    documentType: -1,
    document: "",
    gender: -1,
    birth: "",
    phone: "",
    indicative: null,
    email: "",
    password: ""
}

export interface ISignupRequestModal {
    title: string,
    mode: 'ADD'|'EDIT'
    showPassword: boolean,
    content: ISignup
}

export interface ISignupResponseModal {
    mode: 'ADD'|'EDIT',
    dispatcher: 'OK'|'CLOSE'|'CANCEL'|string,
    content: ISignup
}

