export interface CreateActivityDTOS {
    nome: string
    data: Date | null
    palestranteNome: string
    categoriaId: string
    vagas: number | null
    detalhes: string | null
    local: string 

}

export interface UpdateActivityDTOS {
    nome: string
    data: Date | null
    palestranteNome: string
    categoriaId: string
    detalhes: string | null
    local: string 

}

export interface ActivityDTOS {
    id: string
    nome: string
    data: Date | null
    vagas: number | null
    detalhes: string | null
    palestranteNome: string
    categoriaId: string


}