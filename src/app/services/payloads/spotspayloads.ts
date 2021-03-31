//payload declaration for data type management
export interface spotsPayload extends Array<spotsPayload>{
        id: number,
        createdAt: string,
        name: string,
        country: string,
        lat: number,
        long: number,
        probability: number,
        month: string
};