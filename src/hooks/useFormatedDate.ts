export function useFormatedDate(dateInMillis: number) {
    return new Date(dateInMillis).toLocaleDateString('pt-BR');
}