export const FormatadorService = {
    valorMonetario(valor: number): string {
        return valor.toLocaleString(
            'en-NA', 
            { 
                minimumFractionDigits: 2, 
                style: 'currency', 
                currency: 'EUR' 
            }
        );
    },
    limitarTexto(texto: string, tamanhoMaximo: number): string {
        if (texto.length < tamanhoMaximo) {
            return texto;
        }

        return texto.slice(0, tamanhoMaximo) + '...';
    }
}