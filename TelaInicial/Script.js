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

function getCheckedValue(name) {
    const input = document.querySelector(`input[name="${name}"]:checked`);
    return input ? input.value : "";
}

function getCheckedValues(name) {
    const inputs = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(inputs).map(i => i.value).join(", ");
}

function getInputValueByName(name) {
    return document.querySelector(`input[name="${name}"]`)?.value || "";
}

// SALVAR DADOS
function salvarDados() {

    const dados = {

        // IDENTIFICAÇÃO
        nome: document.getElementById("nome")?.value || "",
        nomeCivil: document.getElementById("nomeCivil")?.value || "",
        pronome: document.getElementById("pronome")?.value || "",
        idade: document.getElementById("idade")?.value || "",
        identidadeGenero: pegarSelecionados("identidadeGenero"),
        contato: document.getElementById("contato")?.value || "",
        profissional: document.getElementById("profissional")?.value || "",
        dataConsulta: document.getElementById("dataConsulta")?.value || "",
        proximaConsulta: document.getElementById("proximaConsulta")?.value || "",

        // HISTÓRICO
        queixaPrincipal: document.getElementById("queixaPrincipal")?.value || "",
        hda: document.getElementById("hda")?.value || "",

        // HISTÓRIA CLÍNICA
        tempoHormonioterapia: document.getElementById("tempoHormonioterapia")?.value || "",
        tipoHormonioterapia: pegarSelecionados("tipoHormonioterapia"),
        viaAdministracao: pegarSelecionados("viaAdministracao"),
        doseAtual: document.getElementById("doseAtual")?.value || "",
        queixasRelacionadas: pegarSelecionados("queixasRelacionadas"),
        cirurgiaRedesignacaoSim: document.getElementById("cirurgiaRedesignacaoSim")?.checked || false,
        cirurgiaRedesignacaoNao: document.getElementById("cirurgiaRedesignacaoNao")?.checked || false,
        tipoCirurgiaRedesignacao: document.getElementById("tipoCirurgiaRedesignacao")?.value || "",
        intencaoFuturaSim: document.getElementById("intencaoFuturaSim")?.checked || false,
        intencaoFuturaNao: document.getElementById("intencaoFuturaNao")?.checked || false,
        procedimentosPrevios: pegarSelecionados("procedimentosPrevios"),
        doencasAssociadas: pegarSelecionados("doencasAssociadas"),
        historicoFamiliar: document.getElementById("historicoFamiliar")?.value || "",
        alergias: document.getElementById("alergias")?.value || "",

        // SAÚDE SEXUAL E MENTAL
        atividadeSexual: pegarSelecionados("atividadeSexual"),
        numeroParceiros: document.getElementById("numeroParceiros")?.value || "",
        // Corrige id no HTML: 'tipoParceira'
        tipoParceiro: pegarSelecionados("tipoParceira"),
        usoPreservativo: pegarSelecionados("usoPreservativo"),
        historicoISTs: pegarSelecionados("historicoISTs"),
        quaisISTs: document.getElementById("quaisISTs")?.value || "",
        // campos que são grupos de botões
        desejoReprodutivo: pegarSelecionados("desejoReprodutivo"),
        planejamentoReprodutivo: pegarSelecionados("planejamentoReprodutivo"),
        acessoServicosSaude: pegarSelecionados("acessoServicosSaude"),
        // HTML usa 'orientacoesRecebidas' como id do input; chave em dados permanece 'orientacaoRecebidas'
        orientacaoRecebidas: document.getElementById("orientacoesRecebidas")?.value || "",

        // USO DE MEDICAÇÕES
        hormonioterapia: document.getElementById("hormonioterapia")?.value || "",
        antidepressivos: document.getElementById("antidepressivos")?.value || "",
        antiHipertensivos: document.getElementById("antiHipertensivos")?.value || "",
        anticoagulantes: document.getElementById("anticoagulantes")?.value || "",
        antiandrogenicos: document.getElementById("antiandrogenicos")?.value || "",
        outrosMedicamentos: document.getElementById("outros")?.value || "",

        humor: document.getElementById("humor")?.value || "",
        ansiedade: document.getElementById("ansiedade")?.value || "",
        autoimagemCorporal: document.getElementById("autoimagemCorporal")?.value || "",
        sono: document.getElementById("sono")?.value || "",
        // corrige id de 'apoio' no HTML que está escrito 'apoiFamiliarSocial'
        apoioFamiliarSocial: document.getElementById("apoiFamiliarSocial")?.value || "",
        ideacaoSuicida: pegarSelecionados("ideacaoSuicida"),

        // CONTEXTO SOCIAL
        moradia: pegarSelecionados("situacaoMoradia"),
        vinculosFamiliares: pegarSelecionados("vinculosFamiliares"),
        acessoAotrabalho: pegarSelecionados("acessoTrabalhoRenda"),
        acessoASaudePublica: pegarSelecionados("acessoSaudePublica"),
        discriminacao: pegarSelecionados("discriminacaoVivida"),
        observacoesDiscriminacaoVivida: document.getElementById("observacoesDiscriminacaoVivida")?.value || "",
        redeApoioSocial: pegarSelecionados("redeApoioSocial"),
        estrategiasEnfrentamento: document.getElementById("estrategiasEnfrentamento")?.value || "",
        encaminhamentosNecessarios: pegarSelecionados("encaminhamentosNecessarios"),
        observacoesEncaminhamentos: document.getElementById("observacoesEncaminhamentos")?.value || "",

        // EXAME FÍSICO
        pressaoArterial: document.getElementById("pa")?.value || "",
        peso: document.getElementById("peso")?.value || "",
        frequenciaCardiaca: document.getElementById("frequenciaCardiaca")?.value || "",
        frequenciaRespiratoria: document.getElementById("frequenciaRespiratoria")?.value || "",
        temperatura: document.getElementById("temperatura")?.value || "",
        spo2: document.getElementById("spo2")?.value || "",
        altura: document.getElementById("altura")?.value || "",
        imc: document.getElementById("imc")?.value || "",
        distribucaoPele: getCheckedValues("distribuicaoPele"),
        acne: getCheckedValue("acne"),
        oleosidade: getCheckedValue("oleosidade"),
        quedaCapilar: getCheckedValue("quedaCapilar"),
        pulsosPerifericos: getCheckedValue("pulsosPerifericos"),
        edema: getCheckedValue("edema"),
        aterosclerose: getCheckedValue("aterosclerose"),
        murmurioVesicular: getCheckedValue("murmurioVesicular"),
        dispneia: getCheckedValue("dispneia"),
        figadoPalpavel: getCheckedValue("figadoPalpavel"),
        nauseasVomitos: getCheckedValue("nauseasVomitos"),
        tipoAnatomico: getCheckedValues("tipoAnatomico"),
        corrimento: getCheckedValue("corrimento"),
        miccao: getCheckedValue("miccao"),

        situacaoMama: getCheckedValue("situacaoMama"),
        dataMama: getInputValueByName("dataMama"),
        obsMama: getInputValueByName("obsMama"),
        situacaoMamografia: getCheckedValue("situacaoMamografia"),
        dataMamografia: getInputValueByName("dataMamografia"),
        obsMamografia: getInputValueByName("obsMamografia"),
        situacaoPapanicolau: getCheckedValue("situacaoPapanicolau"),
        dataPapanicolau: getInputValueByName("dataPapanicolau"),
        obsPapanicolau: getInputValueByName("obsPapanicolau"),
        situacaoPSA: getCheckedValue("situacaoPSA"),
        dataPSA: getInputValueByName("dataPSA"),
        obsPSA: getInputValueByName("obsPSA"),
        situacaoHepatica: getCheckedValue("situacaoHepatica"),
        dataHepatica: getInputValueByName("dataHepatica"),
        obsHepatica: getInputValueByName("obsHepatica"),
        tgoTgp: document.getElementById("tgoTgp")?.value || "",
        dataTgoTgp: document.getElementById("dataTgoTgp")?.value || "",
        obsTgoTgp: document.getElementById("obsTgoTgp")?.value || "",
        prolactina: document.getElementById("prolactina")?.value || "",
        dataProlactina: document.getElementById("dataProlactina")?.value || "",
        obsProlactina: document.getElementById("obsProlactina")?.value || "",
        estradiolTestosterona: document.getElementById("estradiolTestosterona")?.value || "",
        dataEstradiolTestosterona: document.getElementById("dataEstradiolTestosterona")?.value || "",
        obsEstradiolTestosterona: document.getElementById("obsEstradiolTestosterona")?.value || "",
        creatina: document.getElementById("creatina")?.value || "",
        dataCreatina: document.getElementById("dataCreatina")?.value || "",
        obsCreatina: document.getElementById("obsCreatina")?.value || "",

        // EXAMES
        hemograma: document.getElementById("hemograma")?.value || "",
        dataHemograma: document.getElementById("dataHemograma")?.value || "",
        obsHemograma: document.getElementById("obsHemograma")?.value || "",
        glicemia: document.getElementById("glicemia")?.value || "",
        dataGlicemia: document.getElementById("dataGlicemia")?.value || "",
        obsGlicemia: document.getElementById("obsGlicemia")?.value || "",
        perfilLipidico: document.getElementById("perfilLipidico")?.value || "",
        dataPerfilLipidico: document.getElementById("dataPerfilLipidico")?.value || "",
        obsPerfilLipidico: document.getElementById("obsPerfilLipidico")?.value || "",

        // CONDUTA
        educacaoSaude: document.getElementById("educacaoSaude")?.value || "",
        orientacoesDadas: document.getElementById("orientacoesDadas")?.value || "",
        encaminhamentos: (
            document.getElementById("encaminhamentos")?.value ||
            document.getElementById("Encaminhamentos:")?.value || ""
        ),

        // ACOMPANHAMENTO INTERPROFISSIONAL
        dataEndocrinologia: document.getElementById("dataEndocrinologia")?.value || "",
        planoEndocrinologia: document.getElementById("planoEndocrinologia")?.value || "",
        dataPsicologia: document.getElementById("dataPsicologia")?.value || "",
        planoPsicologia: document.getElementById("planoPsicologia")?.value || "",
        dataServicoSocial: document.getElementById("dataServicoSocial")?.value || "",
        planoServicoSocial: document.getElementById("planoServicoSocial")?.value || "",
        dataNutricao: document.getElementById("dataNutricao")?.value || "",
        planoNutricao: document.getElementById("planoNutricao")?.value || "",
        dataFisioterapia: document.getElementById("dataFisioterapia")?.value || "",
        planoFisioterapia: document.getElementById("planoFisioterapia")?.value || "",
        dataOutros: document.getElementById("dataOutros")?.value || "",
        planoOutros: document.getElementById("planoOutros")?.value || "",

        // PLANEJAMENTO
        dataPlanejamento: document.getElementById("dataPlanejamento")?.value || "",

        // ALARMES CONFIGURADOS (checkboxes)
        alarmeHormonal: document.querySelector('[name="alarmeHormonal"]')?.checked || false,
        alarmeHepatica: document.querySelector('[name="alarmeHepatica"]')?.checked || false,
        alarmePreventivos: document.querySelector('[name="alarmePreventivos"]')?.checked || false,
        alarmeEmocional: document.querySelector('[name="alarmeEmocional"]')?.checked || false,

        // OBSERVAÇÕES
        observacoesFinais: document.getElementById("observacoesFinais")?.value || ""

    };

    // ==========================================
    // LÓGICA: VERIFICAÇÃO DE ALERTAS
    // ==========================================
    let alarmes = [];

    // Regra da Pressão Arterial
    if (dados.pressaoArterial && dados.pressaoArterial.includes("/")) {
        let [sis, dia] = dados.pressaoArterial.split("/");
        if (parseInt(sis) > 140 || parseInt(dia) > 90) {
            alarmes.push({ 
                tipo: "vermelho", 
                titulo: "Risco Cardiovascular",
                mensagem: "PA > 140/90. Atenção para níveis elevados." 
            });
        }
    }

    // Regra de Exames Pendentes
    const examesPendentes = document.querySelectorAll('input[type="radio"][value="pendente"]:checked');
    if (examesPendentes.length > 0) {
        alarmes.push({ 
            tipo: "amarelo", 
            titulo: "Preventivos",
            mensagem: "Exame preventivo vencido ou pendente." 
        });
    }

    // Anexa os alarmes ao pacote de dados do paciente
    dados.alarmesGerados = alarmes;
    // ==========================================

    // Salva na memória do navegador e redireciona
    localStorage.setItem("prontuario", JSON.stringify(dados));
    window.location.href = "../TelaResult/Resultado.html";
}
