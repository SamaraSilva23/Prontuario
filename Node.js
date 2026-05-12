// BOTÕES SELECIONÁVEIS
const botoes = document.querySelectorAll(".btn-select");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        botao.classList.toggle("ativo");
    });
});

// PEGAR BOTÕES SELECIONADOS
function pegarSelecionados(id) {

    const container = document.getElementById(id);

    if (!container) return "";

    const ativos = container.querySelectorAll(".btn-select.ativo");

    let valores = [];

    ativos.forEach(botao => {
        valores.push(botao.innerText);
    });

    return valores.join(", ");
}

// SALVAR DADOS
function salvarDados() {

    const dados = {

        nome: document.getElementById("nome").value,
        nomeCivil: document.getElementById("nomeCivil").value,
        pronome: document.getElementById("pronome").value,
        idade: document.getElementById("idade").value,

        identidadeGenero: pegarSelecionados("identidadeGenero"),

        contato: document.getElementById("contato").value,
        profissional: document.getElementById("profissional").value,
        dataConsulta: document.getElementById("dataConsulta").value,
        proximaConsulta: document.getElementById("proximaConsulta").value,

        queixaPrincipal: document.getElementById("queixaPrincipal").value,
        hda: document.getElementById("hda").value,

        tempoHormonioterapia: document.getElementById("tempoHormonioterapia").value,
        tipoHormonioterapia: pegarSelecionados("tipoHormonioterapia"),
        viaAdministracao: pegarSelecionados("viaAdministracao"),
        doseAtual: document.getElementById("doseAtual").value,

        queixasRelacionadas: pegarSelecionados("queixasRelacionadas"),

        cirurgiaSim: document.getElementById("cirurgiaRedesignacaoSim").checked ? "Sim" : "Não",

        cirurgiaNao: document.getElementById("cirurgiaRedesignacaoNao").checked ? "Sim" : "Não",

        tipoCirurgia: document.getElementById("tipoCirurgiaRedesignacao").value,

        cirurgiaIntencao:
            document.getElementById("cirurgiaRedesignacaoIntencao").checked
            ? "Sim"
            : "Não",

        cirurgiaIntencaoNao:
            document.getElementById("cirurgiaRedesignacaoIntencaoNao").checked
            ? "Sim"
            : "Não",

        procedimentosPrevios: pegarSelecionados("procedimentosPrevios"),

        doencasAssociadas: pegarSelecionados("doencasAssociadas"),

        historicoFamiliar: document.getElementById("historicoFamiliar").value,

        alergias: document.getElementById("alergias").value,

        atividadeSexual: pegarSelecionados("atividadeSexual"),

        numeroParceiros: document.getElementById("numeroParceiros").value,

        tipoParceira: pegarSelecionados("tipoParceira"),

        usoPreservativo: pegarSelecionados("usoPreservativo"),

        historicoISTs: pegarSelecionados("historicoISTs"),

        quaisISTs: document.getElementById("quaisISTs").value,

        desejoReprodutivo: pegarSelecionados("desejoReprodutivo"),

        planejamentoReprodutivo: pegarSelecionados("planejamentoReprodutivo"),

        acessoServicosSaude: pegarSelecionados("acessoServicosSaude"),

        orientacoesRecebidas:
            document.getElementById("orientacoesRecebidas").value,

        hormonioterapia:
            document.getElementById("hormonioterapia").value,

        observacoesHormonioterapia:
            document.getElementById("observacoesHormonioterapia").value,

        antidepressivos:
            document.getElementById("antidepressivos").value,

        observacoesAntidepressivos:
            document.getElementById("observacoesAntidepressivos").value,

        humor: document.getElementById("humor").value,
        ansiedade: document.getElementById("ansiedade").value,

        autoimagemCorporal:
            document.getElementById("autoimagemCorporal").value,

        sono: document.getElementById("sono").value,

        apoioFamiliarSocial:
            document.getElementById("apoiFamiliarSocial").value,

        ideacaoSuicida:
            pegarSelecionados("ideacaoSuicida"),

        situacaoMoradia:
            pegarSelecionados("situacaoMoradia"),

        vinculosFamiliares:
            pegarSelecionados("vinculosFamiliares"),

        acessoTrabalhoRenda:
            pegarSelecionados("acessoTrabalhoRenda"),

        acessoSaudePublica:
            pegarSelecionados("acessoSaudePublica"),

        discriminacaoVivida:
            pegarSelecionados("discriminacaoVivida"),

        observacoesDiscriminacaoVivida:
            document.getElementById("observacoesDiscriminacaoVivida").value,

        redeApoioSocial:
            pegarSelecionados("redeApoioSocial"),

        estrategiasEnfrentamento:
            document.getElementById("estrategiasEnfrentamento").value,

        encaminhamentosNecessarios:
            pegarSelecionados("encaminhamentosNecessarios"),

        observacoesEncaminhamentos:
            document.getElementById("observacoesEncaminhamentos").value,

        pressaoArterial:
            document.getElementById("pressaoArterial").value,

        peso:
            document.getElementById("peso").value,

        frequenciaCardiaca:
            document.getElementById("frequenciaCardiaca").value,

        altura:
            document.getElementById("altura").value,

        hemograma:
            document.getElementById("hemograma").value,

        glicemia:
            document.getElementById("glicemia").value,

        condutaEnfermagem:
            document.getElementById("condutaEnfermagem").value
    };

    localStorage.setItem("prontuario", JSON.stringify(dados));

    window.location.href = "resultado.html";
}