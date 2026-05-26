window.onload = function () {

    // PEGAR DADOS
    const dados =
        JSON.parse(localStorage.getItem("prontuario")) || {};

    // FUNÇÃO PARA MOSTRAR
    function mostrar(id, valor) {

        const elemento = document.getElementById(id);

        if (!elemento) return;

        if (Array.isArray(valor)) {
            valor = valor.join(", ");
        }

        elemento.innerText = valor || "Não informado";
    }

    // FORMATAR DATA
    function formatarData(data) {

        if (!data) {
            return "Não informado";
        }

        return new Date(data)
            .toLocaleDateString("pt-BR");
    }

    // =========================
    // IDENTIFICAÇÃO
    // =========================

    mostrar("nome", dados.nome);
    mostrar("nomeCivil", dados.nomeCivil);
    mostrar("pronome", dados.pronome);
    mostrar("idade", dados.idade);
    mostrar("identidadeGenero", dados.identidadeGenero);
    mostrar("contato", dados.contato);
    mostrar("profissional", dados.profissional);

    mostrar(
        "dataConsulta",
        formatarData(dados.dataConsulta)
    );

    mostrar(
        "proximaConsulta",
        formatarData(dados.proximaConsulta)
    );

    // =========================
    // HISTÓRICO
    // =========================

    mostrar("queixaPrincipal", dados.queixaPrincipal);

    mostrar("hda", dados.hda);

    mostrar(
        "tempoHormonioterapia",
        dados.tempoHormonioterapia
    );

    mostrar(
        "tipoHormonioterapia",
        dados.tipoHormonioterapia
    );

    mostrar(
        "viaAdministracao",
        dados.viaAdministracao
    );

    mostrar("doseAtual", dados.doseAtual);

    mostrar(
        "queixasRelacionadas",
        dados.queixasRelacionadas
    );

    // Exibir cirurgia de redesignação: combina os campos de checkbox e tipo
    (function() {
        let texto = "Não informado";
        if (dados.cirurgiaRedesignacaoSim) {
            texto = "Sim";
            if (dados.tipoCirurgiaRedesignacao) texto += " - " + dados.tipoCirurgiaRedesignacao;
        } else if (dados.cirurgiaRedesignacaoNao) {
            texto = "Não";
        }
        mostrar("cirurgiaRedesignacaoSexual", texto);
    })();

    mostrar(
        "procedimentosPrevios",
        dados.procedimentosPrevios
    );

    mostrar(
        "doencasAssociadas",
        dados.doencasAssociadas
    );

    mostrar(
        "historicoFamiliar",
        dados.historicoFamiliar
    );

    mostrar("alergias", dados.alergias);

    // =========================
    // SAÚDE SEXUAL
    // =========================

    mostrar(
        "atividadeSexual",
        dados.atividadeSexual
    );

    mostrar(
        "numeroParceiros",
        dados.numeroParceiros
    );

    mostrar(
        "tipoParceiro",
        dados.tipoParceiro
    );

    mostrar(
        "usoPreservativo",
        dados.usoPreservativo
    );

    mostrar("historicoISTs", dados.historicoISTs);

    // Se a opção 'Quais' foi selecionada, prioriza mostrar os detalhes informados
    if (dados.historicoISTs && dados.historicoISTs.includes("Quais")) {
        mostrar("historicoISTs", dados.quaisISTs || "Quais: Não informado");
    }

    mostrar("desejoReprodutivo", dados.desejoReprodutivo);

    mostrar("planejamentoReprodutivo", dados.planejamentoReprodutivo);

    mostrar("acessoServicosSaude", dados.acessoServicosSaude);
    
    mostrar("orientacaoRecebidas", dados.orientacaoRecebidas);

    // =========================
    // SAÚDE MENTAL
    // =========================

    mostrar("humor", dados.humor);

    mostrar("ansiedade", dados.ansiedade);

    mostrar(
        "autoimagemCorporal",
        dados.autoimagemCorporal
    );

    mostrar("sono", dados.sono);

    mostrar(
        "apoioFamiliarSocial",
        dados.apoioFamiliarSocial
    );

    mostrar(
        "ideacaoSuicida",
        dados.ideacaoSuicida
    );

    // =========================
    // USO DE MEDICAÇÕES
    // =========================
    mostrar("hormonio", dados.hormonioterapia);
    mostrar("antidepre", dados.antidepressivos);
    mostrar("antihipertensivos", dados.antiHipertensivos);
    mostrar("anticoagulantes", dados.anticoagulantes);
    mostrar("antiandrogênicos", dados.antiandrogenicos);
    mostrar("outros", dados.outrosMedicamentos);

    // =========================
    // CONTEXTO SOCIAL
    // =========================

    mostrar("moradia", dados.moradia);
    mostrar("vinculosFamiliares", dados.vinculosFamiliares);
    mostrar("acessoAotrabalho", dados.acessoAotrabalho);
    mostrar("acessoASaudePublica", dados.acessoASaudePublica);
    mostrar("discriminacao", dados.discriminacao + (dados.observacoesDiscriminacaoVivida ? " - " + dados.observacoesDiscriminacaoVivida : ""));
    mostrar("redeApoioSocial", dados.redeApoioSocial);
    mostrar("estrategiasEnfrentamento", dados.estrategiasEnfrentamento);
    mostrar("encaminhamentosNecessarios", dados.encaminhamentosNecessarios);
    mostrar("observacoesEncaminhamentos", dados.observacoesEncaminhamentos);

    // =========================
    // EXAME FÍSICO
    // =========================

    mostrar(
        "pressaoArterial",
        dados.pressaoArterial
    );

    mostrar(
        "frequenciaCardiaca",
        dados.frequenciaCardiaca
    );

    mostrar("frequenciaRespiratoria", dados.frequenciaRespiratoria);

    mostrar("temperatura", dados.temperatura);

    mostrar("spo2", dados.spo2);

    mostrar("peso", dados.peso);

    mostrar("altura", dados.altura);

    mostrar("imc", dados.imc);

    mostrar("distribucaoPele", dados.distribucaoPele);

    mostrar("acne", dados.acne);

    mostrar("oleosidade", dados.oleosidade);

    mostrar("quedaCapilar", dados.quedaCapilar);

    mostrar("pulsosPerifericos", dados.pulsosPerifericos);

    mostrar("edema", dados.edema);

    mostrar("aterosclerose", dados.aterosclerose);

    mostrar("murmurioVesicular", dados.murmurioVesicular);

    mostrar("dispneia", dados.dispneia);

    mostrar("figadoPalpavel", dados.figadoPalpavel);

    mostrar("nauseasVomitos", dados.nauseasVomitos);

    mostrar("tipoAnatomico", dados.tipoAnatomico);

    mostrar("corrimento", dados.corrimento);

    mostrar("miccao", dados.miccao);

    // =========================
    // PREVENTIVOS
    // =========================

    mostrar("situacaoMama", dados.situacaoMama);
    mostrar("dataMama", formatarData(dados.dataMama));
    mostrar("obsMama", dados.obsMama);

    mostrar("situacaoMamografia", dados.situacaoMamografia);
    mostrar("dataMamografia", formatarData(dados.dataMamografia));
    mostrar("obsMamografia", dados.obsMamografia);

    mostrar("situacaoPapanicolau", dados.situacaoPapanicolau);
    mostrar("dataPapanicolau", formatarData(dados.dataPapanicolau));
    mostrar("obsPapanicolau", dados.obsPapanicolau);

    mostrar("situacaoPSA", dados.situacaoPSA);
    mostrar("dataPSA", formatarData(dados.dataPSA));
    mostrar("obsPSA", dados.obsPSA);

    mostrar("situacaoHepatica", dados.situacaoHepatica);
    mostrar("dataHepatica", formatarData(dados.dataHepatica));
    mostrar("obsHepatica", dados.obsHepatica);

        // =========================
        // ACOMPANHAMENTO INTERPROFISSIONAL

        function statusTexto(data) {
            return data ? "Ativo" : "Não informado";
        }

        mostrar("statusEndocrinologia", statusTexto(dados.dataEndocrinologia));
        mostrar("dataEndocrinologia", formatarData(dados.dataEndocrinologia));
        mostrar("planoEndocrinologia", dados.planoEndocrinologia);

        mostrar("statusPsicologia", statusTexto(dados.dataPsicologia));
        mostrar("dataPsicologia", formatarData(dados.dataPsicologia));
        mostrar("planoPsicologia", dados.planoPsicologia);

        mostrar("statusServicoSocial", statusTexto(dados.dataServicoSocial));
        mostrar("dataServicoSocial", formatarData(dados.dataServicoSocial));
        mostrar("planoServicoSocial", dados.planoServicoSocial);

        mostrar("statusNutricao", statusTexto(dados.dataNutricao));
        mostrar("dataNutricao", formatarData(dados.dataNutricao));
        mostrar("planoNutricao", dados.planoNutricao);

        mostrar("statusFisioterapia", statusTexto(dados.dataFisioterapia));
        mostrar("dataFisioterapia", formatarData(dados.dataFisioterapia));
        mostrar("planoFisioterapia", dados.planoFisioterapia);

        mostrar("statusOutros", statusTexto(dados.dataOutros));
        mostrar("dataOutros", formatarData(dados.dataOutros));
        mostrar("planoOutros", dados.planoOutros);

    // =========================
    // EXAMES
    // =========================

    mostrar("hemograma", dados.hemograma);
    mostrar("dataHemograma", formatarData(dados.dataHemograma));
    mostrar("obsHemograma", dados.obsHemograma);

    mostrar("glicemia", dados.glicemia);
    mostrar("dataGlicemia", formatarData(dados.dataGlicemia));
    mostrar("obsGlicemia", dados.obsGlicemia);

    mostrar("perfilLipidico", dados.perfilLipidico);
    mostrar("dataPerfilLipidico", formatarData(dados.dataPerfilLipidico));
    mostrar("obsPerfilLipidico", dados.obsPerfilLipidico);

    mostrar("tgoTgp", dados.tgoTgp);
    mostrar("dataTgoTgp", formatarData(dados.dataTgoTgp));
    mostrar("obsTgoTgp", dados.obsTgoTgp);

    mostrar("prolactina", dados.prolactina);
    mostrar("dataProlactina", formatarData(dados.dataProlactina));
    mostrar("obsProlactina", dados.obsProlactina);

    mostrar("estradiolTestosterona", dados.estradiolTestosterona);
    mostrar("dataEstradiolTestosterona", formatarData(dados.dataEstradiolTestosterona));
    mostrar("obsEstradiolTestosterona", dados.obsEstradiolTestosterona);

    mostrar("creatina", dados.creatina);
    mostrar("dataCreatina", formatarData(dados.dataCreatina));
    mostrar("obsCreatina", dados.obsCreatina);

    // =========================
    // CONDUTA
    // =========================

    mostrar(
        "educacaoSaude",
        dados.educacaoSaude
    );

    mostrar(
        "orientacoesDadas",
        dados.orientacoesDadas
    );

    mostrar(
        "encaminhamentos",
        dados.encaminhamentos
    );

    // =========================
    // PLANEJAMENTO
    // =========================

    mostrar(
        "dataPlanejamento",
        formatarData(dados.dataPlanejamento)
    );

    // =========================
    // OBSERVAÇÕES
    // =========================

    mostrar(
        "observacoesFinais",
        dados.observacoesFinais
    );

    function parseNumber(valor) {
        if (!valor) return NaN;
        return parseFloat(valor.toString().replace(",", ".").replace(/[^0-9.-]/g, "")) || NaN;
    }

    function contemAlterado(valor) {
        return /alterado|alto|elevado|aumentado|reduzido|baixo|positivo/i.test(valor || "");
    }

// =========================
    // RENDERIZAR ALERTAS (NOVO VISUAL)
    

    const dashboardAlerts = document.getElementById("dashboardAlerts");
    if (
    dados.doencasAssociadas?.includes("Hepatopatia") &&
    dados.tipoHormonioterapia
) {

    dashboardAlerts.innerHTML += `
        <div class="RiscoHepatico">
            🚨 Risco hepático:
            uso de hormônio + hepatopatia
        </div>
    `;
}

// ALERTA CARDIOVASCULAR

if (
    dados.doencasAssociadas?.includes("Hipertensão") &&
    dados.tipoHormonioterapia?.includes("Androg")
) {

    dashboardAlerts.innerHTML += `
        <div class="RiscoCardiovascular">
            🚨 Risco cardiovascular:
            uso androgênico + hipertensão
        </div>
    `;
}

    // =========================
    // POPUP TOP-RIGHT: mostrar alarmes configurados ou gerados
    // =========================

    const popupContainer = document.getElementById('topRightPopup');

    function showPopup(messages) {
        if (!popupContainer || !messages || messages.length === 0) return;
        popupContainer.innerHTML = '';
        messages.forEach(msg => {
            const t = document.createElement('div');
            t.className = 'toast small';
            t.innerText = msg;
            popupContainer.appendChild(t);
        });
        popupContainer.classList.remove('hidden');
        // auto-hide after 8 seconds
        setTimeout(() => {
            if (popupContainer) {
                popupContainer.classList.add('hidden');
                popupContainer.innerHTML = '';
            }
        }, 8000);
    }

    // montar mensagens a partir de checkboxes salvos e de alarmes gerados
    const popupMessages = [];
    if (dados.alarmeHormonal) popupMessages.push('Revisão hormonal → a cada 3 meses');
    if (dados.alarmeHepatica) popupMessages.push('Avaliação hepática → a cada 6 meses');
    if (dados.alarmePreventivos) popupMessages.push('Preventivos (mamas, colo, próstata) → anual');
    if (dados.alarmeEmocional) popupMessages.push('Acompanhamento emocional e social → conforme necessidade');

    if (Array.isArray(dados.alarmesGerados) && dados.alarmesGerados.length) {
        dados.alarmesGerados.forEach(a => {
            const text = a.mensagem || a.titulo || JSON.stringify(a);
            if (text) popupMessages.push(text);
        });
    }

    if (popupMessages.length) {
        // mostrar apenas uma vez ao carregar a página
        showPopup(popupMessages);
    }



if (
    dados.antiandrogenicos &&
    dados.antidepressivos
) {

    dashboardAlerts.innerHTML += `
        <div class="InteracaoMedicamentos">
            ⚠️ Interação medicamentosa:
            antiandrogênico + antidepressivo
        </div>
    `;
}


if (
    dados.atividadeSexual === "Sim" &&
    (
        dados.usoPreservativo === "Nunca" ||
        dados.usoPreservativo === "Às vezes"
    )
) {

    dashboardAlerts.innerHTML += `
        <div class="RiscoIST">
            ⚠️ Risco aumentado de IST:
            paciente sem uso regular de preservativo
        </div>
    `;
}


if (dados.ideacaoSuicida === "Sim") {

    dashboardAlerts.innerHTML += `
        <div class="RiscoSuicida">
            ⚠️ Risco de ideação suicida
        </div>
    `;
}



if (
    dados.moradia === "Instável" ||
    dados.discriminacao?.includes("Relatada")
) {

    dashboardAlerts.innerHTML += `
        <div class="RiscoPsicossocial">
            ⚠️ Risco psicossocial:
            moradia instável ou relato de discriminação
        </div>
    `;
}

if (
    dados.spo2 &&
    parseNumber(dados.spo2) < 95
) {
    dashboardAlerts.innerHTML += `
        <div class="RiscoRespiratorio">
            ⚠️ Risco respiratório:
            saturação de oxigênio baixa
        </div>
    `;
}

if (
    dados.temperatura &&
    parseNumber(dados.temperatura) >= 37.5
) {
    dashboardAlerts.innerHTML += `
        <div class="RiscoHepaticoAlterado">
            ⚠️ Possível febre:
            temperatura igual ou acima de 37.5°C
        </div>
    `;
}

if (
    dados.situacaoMama === "pendente" ||
    dados.situacaoMamografia === "pendente" ||
    dados.situacaoPapanicolau === "pendente" ||
    dados.situacaoPSA === "pendente" ||
    dados.situacaoHepatica === "pendente"
) {
    dashboardAlerts.innerHTML += `
        <div class="RiscoPreventivoPendente">
            ⚠️ Preventivos pendentes:
            revisar exames de rastreamento
        </div>
    `;
}

if (
    (dados.glicemia && parseNumber(dados.glicemia) > 100) ||
    contemAlterado(dados.glicemia)
) {
    dashboardAlerts.innerHTML += `
        <div class="RiscoRenal">
            ⚠️ Glicemia alterada:
            avaliar alteração metabólica
        </div>
    `;
}

if (
    (dados.creatina && parseNumber(dados.creatina) > 1.2) ||
    contemAlterado(dados.creatina)
) {
    dashboardAlerts.innerHTML += `
        <div class="RiscoRenal">
            ⚠️ Creatinina alterada:
            possível alteração renal
        </div>
    `;
}

if (
    dados.tgoTgp &&
    contemAlterado(dados.tgoTgp)
) {
    dashboardAlerts.innerHTML += `
        <div class="RiscoHepaticoAlterado">
            ⚠️ TGO/TGP alterado:
            atenção à função hepática
        </div>
    `;
}

}



