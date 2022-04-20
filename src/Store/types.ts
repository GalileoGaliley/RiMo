

export type Personage = {
    id:number,
    name:string,
    status:string,
    species: string,
    gender:string,
    origin:string,
    location:string,
    image:string
}

export type PageState = {
    page:number,
    allPages:number
}

export type AppState = {
    personages: PersonageList,
    favorites: PersonageList,
    page?: PageState,
    settings:SettingState
}
export type PersonageList = Personage[];
export type SettingState = {
    fontColor:string,
    back1:string,
    back2:string,
    fontSize: number,
    lightMode: string
}