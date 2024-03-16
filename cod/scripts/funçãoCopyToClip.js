function copyTo() {
    var copyText = document.getElementById("Input2");
    navigator.clipboard.writeText(copyText.value).then(function() {
        console.log('Texto copiado para a área de transferência!');
    }).catch(function(err) {
        console.error('Erro ao copiar texto: ', err);
    });
}
