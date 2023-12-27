export interface IHotel {
    id: string,
    name: string,
    description: string,
    imageUrl: string,
    minPrice:string,
    enabled: boolean,
    rooms:[]
}

export const INIT_HOTEL : IHotel = {
    id: "",
    name: "",
    description: "",
    imageUrl: "",
    minPrice: "",
    enabled: false,
    rooms: []
}