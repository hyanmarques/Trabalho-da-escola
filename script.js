function simular(opcao) {
    const resultado = document.getElementById('resultado-simulacao');
    
    let texto = "";
    
    switch(opcao) {
        case 'verde':
            texto = "<strong>Resultado:</strong> Independência energética atingida em 2050, mas altos custos de armazenamento de energia causaram instabilidade nos preços na década de 30.";
            break;
        case 'nuclear':
            texto = "<strong>Resultado:</strong> Estabilidade da rede elétrica garantida. A Europa tornou-se exportadora de energia limpa, mas enfrentou protestos sociais severos sobre o lixo radioativo.";
            break;
        case 'acordos':
            texto = "<strong>Resultado:</strong> Segurança imediata garantida, porém a economia ficou refém da volatilidade do mercado de GNL e as metas climáticas foram atrasadas.";
            break;
    }
    
    resultado.innerHTML = `<p>${texto}</p>`;
    resultado.style.borderLeft = "4px solid #FACC15";
    resultado.style.backgroundColor = "rgba(250, 204, 21, 0.1)";
}

// Menu Mobile (Simples)
document.querySelector('.menu-toggle').addEventListener('click', () => {
    alert("Menu Mobile: Início, UE, Crise, Nuclear, Futuro");
    // Aqui você pode implementar um menu lateral (sidebar) ou dropdown
});

// Efeito de rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function simular(opcao) {
    const resultado = document.getElementById('resultado-simulacao');
    
    // Remove a classe de animação para resetar o efeito
    resultado.classList.remove('show');
    
    let texto = "";
    let corDestaque = "";
    
    switch(opcao) {
        case 'verde':
            texto = "<strong>Cenário Sustentável:</strong> A UE atinge a neutralidade climática, mas a volatilidade dos preços da energia exige baterias gigantescas para evitar apagões noturnos.";
            corDestaque = "#22c55e";
            break;
        case 'nuclear':
            texto = "<strong>Cenário de Estabilidade:</strong> A base energética torna-se sólida e barata. No entanto, o debate sobre o armazenamento geológico de resíduos dura décadas.";
            corDestaque = "#FACC15";
            break;
        case 'acordos':
            texto = "<strong>Cenário Geopolítico:</strong> A dependência russa acaba, mas a economia fica vulnerável a tensões no Oriente Médio e variações do dólar.";
            corDestaque = "#60a5fa";
            break;
    }
    
    // Pequeno atraso para o olho humano perceber a mudança
    setTimeout(() => {
        resultado.innerHTML = `<p style="font-size: 1.1rem;">${texto}</p>`;
        resultado.style.borderLeft = `6px solid ${corDestaque}`;
        resultado.classList.add('show'); // Ativa a animação de entrada do CSS
    }, 100);
}