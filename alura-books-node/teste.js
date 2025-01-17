function gravouArquivo() {
    try {
        throw new Error("a");
        return true;        
    } catch (error) {
        return false;
    }
}

if (gravouArquivo()) {
    console.log("Arquivo gravado com sucesso!");
} else {
    console.log("Erro ao gravar arquivo!");
}