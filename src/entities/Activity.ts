export interface Activity {
    id: string
    nome: string
    data: Date | null
    vagas: number | null
    detalhes: string | null
    palestranteNome: string
    categoriaId: string
    points: number
}