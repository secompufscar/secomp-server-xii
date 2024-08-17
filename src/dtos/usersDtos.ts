export interface CreateUserDTOS {
    nome: string
    email: string
    senha: string
    tipo: string
}

export interface UpdateUserDTOS {
    nome: string 
    email: string
    senha: string


}

export interface UpdateQrCodeUsersDTOS {
    qrCode: string | null

}