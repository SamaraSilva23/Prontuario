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

    mostrar(
        "estrategiasEnfrentamento",
        dados.estrategiasEnfrentamento
    );

    // =========================
    // EXAME FÍSICO
    // =========================

    mostrar(
        "pressaoArterial",
        dados.pressaoArterial
    );

    mostrar("peso", dados.peso);

    mostrar(
        "frequenciaCardiaca",
        dados.frequenciaCardiaca
    );

    mostrar("altura", dados.altura);

    // =========================
    // EXAMES
    // =========================

    mostrar("hemograma", dados.hemograma);

    mostrar("glicemia", dados.glicemia);

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

// =========================
    // RENDERIZAR ALERTAS (NOVO VISUAL)
    

const dashboardAlerts =
document.getElementById("dashboardAlerts");
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
    dados.discriminacao === "Sim"
) {

    dashboardAlerts.innerHTML += `
        <div class="RiscoPsicossocial">
            ⚠️ Risco psicossocial:
            moradia instável ou relato de discriminação
        </div>
    `;
}

}



