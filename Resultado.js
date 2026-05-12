window.onload = function () {

    const dados = JSON.parse(localStorage.getItem("prontuario"));

    const resultado = document.getElementById("resultado");

    if (!dados) {

        resultado.innerHTML = "<p>Nenhum dado encontrado.</p>";

        return;
    }

    // VALIDAR CAMPOS VAZIOS
    function mostrar(valor) {

        if (valor === undefined || valor === null || valor === "") {
            return "Não informado";
        }

        return valor;
    }

    resultado.innerHTML = `

    <h2>Identificação</h2>

    <p><strong>Nome:</strong> ${mostrar(dados.nome)}</p>

    <p><strong>Nome Civil:</strong> ${mostrar(dados.nomeCivil)}</p>

    <p><strong>Pronome:</strong> ${mostrar(dados.pronome)}</p>

    <p><strong>Idade:</strong> ${mostrar(dados.idade)}</p>

    <p><strong>Identidade de Gênero:</strong> ${mostrar(dados.identidadeGenero)}</p>

    <p><strong>Contato:</strong> ${mostrar(dados.contato)}</p>

    <p><strong>Profissional:</strong> ${mostrar(dados.profissional)}</p>
    
    <p><strong>Data Consulta:</strong> ${mostrar(dados.dataConsulta)}</p>

    <p><strong>Próxima Consulta:</strong> ${mostrar(dados.proximaConsulta)}</p>



    <h2>Histórico</h2>

    <p><strong>Queixa Principal:</strong> ${mostrar(dados.queixaPrincipal)}</p>

    <p><strong>HDA:</strong> ${mostrar(dados.hda)}</p>

    <p><strong>Tempo Hormonioterapia:</strong> ${mostrar(dados.tempoHormonioterapia)}</p>

    <p><strong>Tipo Hormonioterapia:</strong> ${mostrar(dados.tipoHormonioterapia)}</p>

    <p><strong>Via Administração:</strong> ${mostrar(dados.viaAdministracao)}</p>

    <p><strong>Dose Atual:</strong> ${mostrar(dados.doseAtual)}</p>

    <p><strong>Queixas Relacionadas:</strong> ${mostrar(dados.queixasRelacionadas)}</p>

    <p><strong>Cirurgia:</strong> ${mostrar(dados.cirurgiaSim)}</p>

    <p><strong>Tipo Cirurgia:</strong> ${mostrar(dados.tipoCirurgia)}</p>

    <p><strong>Procedimentos:</strong> ${mostrar(dados.procedimentosPrevios)}</p>

    <p><strong>Doenças Associadas:</strong> ${mostrar(dados.doencasAssociadas)}</p>

    <p><strong>Histórico Familiar:</strong> ${mostrar(dados.historicoFamiliar)}</p>

    <p><strong>Alergias:</strong> ${mostrar(dados.alergias)}</p>



    <h2>Saúde Sexual</h2>

    <p><strong>Atividade Sexual:</strong> ${mostrar(dados.atividadeSexual)}</p>

    <p><strong>Número de Parceiros:</strong> ${mostrar(dados.numeroParceiros)}</p>

    <p><strong>Tipo Parceira:</strong> ${mostrar(dados.tipoParceira)}</p>

    <p><strong>Uso Preservativo:</strong> ${mostrar(dados.usoPreservativo)}</p>

    <p><strong>ISTs:</strong> ${mostrar(dados.historicoISTs)}</p>

    <p><strong>Quais ISTs:</strong> ${mostrar(dados.quaisISTs)}</p>



    <h2>Saúde Mental</h2>

    <p><strong>Humor:</strong> ${mostrar(dados.humor)}</p>

    <p><strong>Ansiedade:</strong> ${mostrar(dados.ansiedade)}</p>

    <p><strong>Sono:</strong> ${mostrar(dados.sono)}</p>

    <p><strong>Autoimagem:</strong> ${mostrar(dados.autoimagemCorporal)}</p>



    <h2>Exame Físico</h2>

    <p><strong>Pressão Arterial:</strong> ${mostrar(dados.pressaoArterial)}</p>

    <p><strong>Peso:</strong> ${mostrar(dados.peso)}</p>

    <p><strong>Frequência Cardíaca:</strong> ${mostrar(dados.frequenciaCardiaca)}</p>

    <p><strong>Altura:</strong> ${mostrar(dados.altura)}</p>



    <h2>Exames</h2>

    <p><strong>Hemograma:</strong> ${mostrar(dados.hemograma)}</p>

    <p><strong>Glicemia:</strong> ${mostrar(dados.glicemia)}</p>



    <h2>Conduta</h2>

    <p>${mostrar(dados.condutaEnfermagem)}</p>

    `;
};