export interface IManageGuestRequest {
    name: string,
    indicative: number,
    phone: string,
    documentType: number,
    document: string,
    lastName: string,
    birth: Date|null,
    gender: number,
    email: string
}