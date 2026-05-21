// =====================================================
// FUNCOES DE BANCO DE DADOS - PRONTUARIO ELETRONICO
// =====================================================

// Funcao principal para salvar prontuario completo
async function salvarProntuarioNoBanco() {
    try {
        console.log('Iniciando salvamento no banco...');

        // Validar campo obrigatorio
        const nomeSocial = document.getElementById('nome')?.value?.trim();
        if (!nomeSocial) {
            throw new Error('Nome Social é obrigatório');
        }

        // 1. Criar paciente
        const pacienteData = {
            nome_social: nomeSocial,
            nome_civil: document.getElementById('nomeCivil')?.value?.trim() || null,
            pronome: document.getElementById('pronome')?.value?.trim() || null,
            idade: parseInt(document.getElementById('idade')?.value) || null,
            identidade_genero: getSelectedButton('identidadeGenero') || null,
            contato: document.getElementById('contato')?.value?.trim() || null
        };

        console.log('Salvando paciente:', pacienteData);

        const { data: paciente, error: errPaciente } = await supabase
            .from('pacientes')
            .insert([pacienteData])
            .select()
            .single();

        if (errPaciente) {
            console.error('Erro ao salvar paciente:', errPaciente);
            throw errPaciente;
        }

        console.log('Paciente salvo:', paciente);

        // 2. Criar prontuario
        const prontuarioData = {
            paciente_id: paciente.id,
            profissional_responsavel: document.getElementById('profissional')?.value?.trim() || null,
            data_consulta: document.getElementById('dataConsulta')?.value || null,
            proxima_consulta: document.getElementById('proximaConsulta')?.value || null,
            queixa_principal: document.getElementById('queixaPrincipal')?.value?.trim() || null,
            historia_doenca_atual: document.getElementById('hda')?.value?.trim() || null,
            educacao_saude: document.getElementById('educacaoSaude')?.value?.trim() || null,
            orientacoes_dadas: document.getElementById('orientacoesDadas')?.value?.trim() || null,
            encaminhamentos: document.getElementById('Encaminhamentos:')?.value?.trim() || null,
            data_planejamento: document.getElementById('dataPlanejamento')?.value || null,
            observacoes_finais: document.getElementById('observacoesFinais')?.value?.trim() || null
        };

        console.log('Salvando prontuario:', prontuarioData);

        const { data: prontuario, error: errProntuario } = await supabase
            .from('prontuarios')
            .insert([prontuarioData])
            .select()
            .single();

        if (errProntuario) {
            console.error('Erro ao salvar prontuario:', errProntuario);
            throw errProntuario;
        }

        console.log('Prontuario salvo:', prontuario);

        // 3. Salvar historico clinico
        const historicoData = {
            prontuario_id: prontuario.id,
            tempo_hormonioterapia: document.getElementById('tempoHormonioterapia')?.value?.trim() || null,
            tipo_hormonioterapia: getSelectedButtons('tipoHormonioterapia'),
            via_administracao: getSelectedButtons('viaAdministracao'),
            dose_atual: document.getElementById('doseAtual')?.value?.trim() || null,
            queixas_relacionadas: getSelectedButtons('queixasRelacionadas'),
            cirurgia_redesignacao_sim: document.getElementById('cirurgiaRedesignacaoSim')?.checked || false,
            cirurgia_redesignacao_nao: document.getElementById('cirurgiaRedesignacaoNao')?.checked || false,
            tipo_cirurgia_redesignacao: document.getElementById('tipoCirurgiaRedesignacao')?.value?.trim() || null,
            intencao_futura_sim: document.getElementById('cirurgiaRedesignacaoIntencao')?.checked || false,
            intencao_futura_nao: document.getElementById('cirurgiaRedesignacaoIntencaoNao')?.checked || false,
            procedimentos_previos: getSelectedButtons('procedimentosPrevios'),
            doencas_associadas: getSelectedButtons('doencasAssociadas'),
            historico_familiar: document.getElementById('historicoFamiliar')?.value?.trim() || null,
            alergias: document.getElementById('alergias')?.value?.trim() || null
        };

        await supabase.from('historico_clinico').insert([historicoData]);
        console.log('Historico clinico salvo');

        // 4. Salvar saude sexual
        const saudeSexualData = {
            prontuario_id: prontuario.id,
            atividade_sexual: getSelectedButton('atividadeSexual') || null,
            numero_parceiros: parseInt(document.getElementById('numeroParceiros')?.value) || null,
            tipo_parceira: getSelectedButtons('tipoParceira'),
            uso_preservativo: getSelectedButton('usoPreservativo') || null,
            historico_ists: getSelectedButton('historicoISTs') || null,
            quais_ists: document.getElementById('quaisISTs')?.value?.trim() || null,
            desejo_reprodutivo: getSelectedButton('desejoReprodutivo') || null,
            planejamento_reprodutivo: getSelectedButton('planejamentoReprodutivo') || null,
            acesso_servicos_saude: getSelectedButton('acessoServicosSaude') || null,
            orientacoes_recebidas: document.getElementById('orientacoesRecebidas')?.value?.trim() || null
        };

        await supabase.from('saude_sexual').insert([saudeSexualData]);
        console.log('Saude sexual salvo');

        // 5. Salvar medicacoes
        const medicacoesData = {
            prontuario_id: prontuario.id,
            hormonioterapia: document.getElementById('hormonioterapia')?.value?.trim() || null,
            observacoes_hormonioterapia: document.getElementById('observacoesHormonioterapia')?.value?.trim() || null,
            antidepressivos: document.getElementById('antidepressivos')?.value?.trim() || null,
            observacoes_antidepressivos: document.getElementById('observacoesAntidepressivos')?.value?.trim() || null,
            anti_hipertensivos: document.getElementById('antiHipertensivos')?.value?.trim() || null,
            observacoes_anti_hipertensivos: document.getElementById('observacoesAntiHipertensivos')?.value?.trim() || null,
            anticoagulantes: document.getElementById('anticoagulantes')?.value?.trim() || null,
            observacoes_anticoagulantes: document.getElementById('observacoesAnticoagulantes')?.value?.trim() || null,
            antiandrogenicos: document.getElementById('antiandrogenicos')?.value?.trim() || null,
            observacoes_antiandrogenicos: document.getElementById('observacoesAntiandrogenicos')?.value?.trim() || null,
            outros: document.getElementById('outros')?.value?.trim() || null,
            observacoes_outros: document.getElementById('observacoesOutros')?.value?.trim() || null
        };

        await supabase.from('medicacoes').insert([medicacoesData]);
        console.log('Medicacoes salvo');

        // 6. Salvar saude mental
        const saudeMentalData = {
            prontuario_id: prontuario.id,
            humor: document.getElementById('humor')?.value?.trim() || null,
            ansiedade: document.getElementById('ansiedade')?.value?.trim() || null,
            autoimagem_corporal: document.getElementById('autoimagemCorporal')?.value?.trim() || null,
            sono: document.getElementById('sono')?.value?.trim() || null,
            apoio_familiar_social: document.getElementById('apoiFamiliarSocial')?.value?.trim() || null,
            ideacao_suicida: getSelectedButton('ideacaoSuicida') || null
        };

        await supabase.from('saude_mental').insert([saudeMentalData]);
        console.log('Saude mental salvo');

        // 7. Salvar contexto social
        const contextoSocialData = {
            prontuario_id: prontuario.id,
            situacao_moradia: getSelectedButton('situacaoMoradia') || null,
            vinculos_familiares: getSelectedButton('vinculosFamiliares') || null,
            acesso_trabalho_renda: getSelectedButton('acessoTrabalhoRenda') || null,
            acesso_saude_publica: getSelectedButton('acessoSaudePublica') || null,
            discriminacao_vivida: getSelectedButton('discriminacaoVivida') || null,
            observacoes_discriminacao: document.getElementById('observacoesDiscriminacaoVivida')?.value?.trim() || null,
            rede_apoio_social: getSelectedButton('redeApoioSocial') || null,
            estrategias_enfrentamento: document.getElementById('estrategiasEnfrentamento')?.value?.trim() || null,
            encaminhamentos_necessarios: getSelectedButtons('encaminhamentosNecessarios'),
            observacoes_encaminhamentos: document.getElementById('observacoesEncaminhamentos')?.value?.trim() || null
        };

        await supabase.from('contexto_social').insert([contextoSocialData]);
        console.log('Contexto social salvo');

        // 8. Salvar exame fisico
        const exameFisicoData = {
            prontuario_id: prontuario.id,
            pressao_arterial: document.getElementById('pa')?.value?.trim() || null,
            frequencia_cardiaca: parseInt(document.getElementById('frequenciaCardiaca')?.value) || null,
            frequencia_respiratoria: parseInt(document.getElementById('frequenciaRespiratoria')?.value) || null,
            temperatura: parseFloat(document.getElementById('temperatura')?.value) || null,
            spo2: parseInt(document.getElementById('spo2')?.value) || null,
            peso: parseFloat(document.getElementById('peso')?.value) || null,
            altura: parseFloat(document.getElementById('altura')?.value) || null,
            imc: parseFloat(document.getElementById('imc')?.value) || null,
            distribuicao_pele: getCheckedValues('distribuicaoPele'),
            acne: getCheckedValue('acne') || null,
            regiao_acne: document.getElementById('regiaoAcne')?.value?.trim() || null,
            oleosidade: getCheckedValue('oleosidade') || null,
            queda_capilar: getCheckedValue('quedaCapilar') || null,
            estrias_pigmentacoes: document.getElementById('estriasPigmentacoes')?.value?.trim() || null,
            pulsos_perifericos: getCheckedValue('pulsosPerifericos') || null,
            edema: getCheckedValue('edema') || null,
            sinais_aterosclerose: getCheckedValue('aterosclerose') || null,
            murmurio_vesicular: getCheckedValue('murmurioVesicular') || null,
            dispneia: getCheckedValue('dispneia') || null,
            figado_palpavel: getCheckedValue('figadoPalpavel') || null,
            nauseas_vomitos: getCheckedValue('nauseasVomitos') || null,
            tipo_anatomico: getCheckedValues('tipoAnatomico'),
            corrimento: getCheckedValue('corrimento') || null,
            miccao: getCheckedValue('miccao') || null
        };

        await supabase.from('exame_fisico').insert([exameFisicoData]);
        console.log('Exame fisico salvo');

        // 9. Salvar exames laboratoriais
        const examesLabData = {
            prontuario_id: prontuario.id,
            hemograma: document.getElementById('hemograma')?.value?.trim() || null,
            data_hemograma: document.getElementById('dataHemograma')?.value || null,
            obs_hemograma: document.getElementById('obsHemograma')?.value?.trim() || null,
            glicemia: document.getElementById('glicemia')?.value?.trim() || null,
            data_glicemia: document.getElementById('dataGlicemia')?.value || null,
            obs_glicemia: document.getElementById('obsGlicemia')?.value?.trim() || null,
            perfil_lipidico: document.getElementById('perfilLipidico')?.value?.trim() || null,
            data_perfil_lipidico: document.getElementById('dataPerfilLipidico')?.value || null,
            obs_perfil_lipidico: document.getElementById('obsPerfilLipidico')?.value?.trim() || null,
            tgo_tgp: document.getElementById('tgoTgp')?.value?.trim() || null,
            data_tgo_tgp: document.getElementById('dataTgoTgp')?.value || null,
            obs_tgo_tgp: document.getElementById('obsTgoTgp')?.value?.trim() || null,
            prolactina: document.getElementById('prolactina')?.value?.trim() || null,
            data_prolactina: document.getElementById('dataProlactina')?.value || null,
            obs_prolactina: document.getElementById('obsProlactina')?.value?.trim() || null,
            estradiol_testosterona: document.getElementById('estradiolTestosterona')?.value?.trim() || null,
            data_estradiol_testosterona: document.getElementById('dataEstradiolTestosterona')?.value || null,
            obs_estradiol_testosterona: document.getElementById('obsEstradiolTestosterona')?.value?.trim() || null,
            creatinina: document.getElementById('creatina')?.value?.trim() || null,
            data_creatinina: document.getElementById('dataCreatina')?.value || null,
            obs_creatinina: document.getElementById('obsCreatina')?.value?.trim() || null
        };

        await supabase.from('exames_laboratoriais').insert([examesLabData]);
        console.log('Exames laboratoriais salvo');

        // 10. Salvar avaliacao de orgaos
        const avaliacaoOrgaosData = {
            prontuario_id: prontuario.id,
            situacao_mama: getRadioValue('situacaoMama') || null,
            data_mama: document.querySelector('[name="dataMama"]')?.value?.trim() || null,
            obs_mama: document.querySelector('[name="obsMama"]')?.value?.trim() || null,
            situacao_mamografia: getRadioValue('situacaoMamografia') || null,
            data_mamografia: document.querySelector('[name="dataMamografia"]')?.value?.trim() || null,
            obs_mamografia: document.querySelector('[name="obsMamografia"]')?.value?.trim() || null,
            situacao_papanicolau: getRadioValue('situacaoPapanicolau') || null,
            data_papanicolau: document.querySelector('[name="dataPapanicolau"]')?.value?.trim() || null,
            obs_papanicolau: document.querySelector('[name="obsPapanicolau"]')?.value?.trim() || null,
            situacao_psa: getRadioValue('situacaoPSA') || null,
            data_psa: document.querySelector('[name="dataPSA"]')?.value?.trim() || null,
            obs_psa: document.querySelector('[name="obsPSA"]')?.value?.trim() || null,
            situacao_hepatica: getRadioValue('situacaoHepatica') || null,
            data_hepatica: document.querySelector('[name="dataHepatica"]')?.value?.trim() || null,
            obs_hepatica: document.querySelector('[name="obsHepatica"]')?.value?.trim() || null
        };

        await supabase.from('avaliacao_orgaos').insert([avaliacaoOrgaosData]);
        console.log('Avaliacao orgaos salvo');

        // 11. Salvar acompanhamento interprofissional
        const acompanhamentoData = {
            prontuario_id: prontuario.id,
            prof_endocrinologia: document.getElementById('profEndocrinologia')?.value?.trim() || null,
            data_endocrinologia: document.getElementById('dataEndocrinologia')?.value || null,
            plano_endocrinologia: document.getElementById('planoEndocrinologia')?.value?.trim() || null,
            status_endocrinologia: getRadioValue('statusEndocrinologia') || null,
            prof_psicologia: document.getElementById('profPsicologia')?.value?.trim() || null,
            data_psicologia: document.getElementById('dataPsicologia')?.value || null,
            plano_psicologia: document.getElementById('planoPsicologia')?.value?.trim() || null,
            status_psicologia: getRadioValue('statusPsicologia') || null,
            prof_servico_social: document.getElementById('profServicoSocial')?.value?.trim() || null,
            data_servico_social: document.getElementById('dataServicoSocial')?.value || null,
            plano_servico_social: document.getElementById('planoServicoSocial')?.value?.trim() || null,
            status_servico_social: getRadioValue('statusServicoSocial') || null,
            prof_nutricao: document.getElementById('profNutricao')?.value?.trim() || null,
            data_nutricao: document.getElementById('dataNutricao')?.value || null,
            plano_nutricao: document.getElementById('planoNutricao')?.value?.trim() || null,
            status_nutricao: getRadioValue('statusNutricao') || null,
            prof_fisioterapia: document.getElementById('profFisioterapia')?.value?.trim() || null,
            data_fisioterapia: document.getElementById('dataFisioterapia')?.value || null,
            plano_fisioterapia: document.getElementById('planoFisioterapia')?.value?.trim() || null,
            status_fisioterapia: getRadioValue('statusFisioterapia') || null,
            prof_outros: document.getElementById('profOutros')?.value?.trim() || null,
            data_outros: document.getElementById('dataOutros')?.value || null,
            plano_outros: document.getElementById('planoOutros')?.value?.trim() || null,
            status_outros: getRadioValue('statusOutros') || null
        };

        await supabase.from('acompanhamento_interprofissional').insert([acompanhamentoData]);
        console.log('Acompanhamento interprofissional salvo');

        // 12. Salvar alarmes configurados
        const alarmesData = {
            prontuario_id: prontuario.id,
            revisao_hormonal: document.querySelector('[name="alarmeHormonal"]')?.checked || false,
            avaliacao_hepatica: document.querySelector('[name="alarmeHepatica"]')?.checked || false,
            preventivos: document.querySelector('[name="alarmePreventivos"]')?.checked || false,
            acompanhamento_emocional: document.querySelector('[name="alarmeEmocional"]')?.checked || false
        };

        await supabase.from('alarmes_configurados').insert([alarmesData]);
        console.log('Alarmes configurados salvo');

        console.log('=== PRONTUARIO SALVO COM SUCESSO! ===');
        mostrarModalSucesso();
        return { paciente, prontuario };

    } catch (error) {
        console.error('=== ERRO AO SALVAR PRONTUARIO ===');
        console.error('Erro:', error);
        mostrarModalErro(error.message || 'Erro desconhecido ao salvar.');
        throw error;
    }
}

// =====================================================
// FUNCOES DO MODAL
// =====================================================

function mostrarModalSucesso() {
    const modal = document.getElementById('modalSucesso');
    if (modal) {
        modal.classList.add('active');
    }
}

function mostrarModalErro(mensagem) {
    const modal = document.getElementById('modalErro');
    const msgElement = document.getElementById('mensagemErro');
    if (modal) {
        if (msgElement) msgElement.textContent = mensagem;
        modal.classList.add('active');
    }
}

function fecharModalErro() {
    const modal = document.getElementById('modalErro');
    if (modal) {
        modal.classList.remove('active');
    }
}

function redirecionarAposSucesso() {
    // Salva no localStorage tambem para compatibilidade com TelaResult
    window.location.href = "../TelaResult/Resultado.html";
}

// Funcao para buscar todos os prontuarios
async function buscarProntuarios() {
    try {
        const { data, error } = await supabase
            .from('prontuarios')
            .select(`
                *,
                pacientes (*)
            `)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Erro ao buscar prontuarios:', error);
        return [];
    }
}

// Funcao para buscar prontuario completo por ID
async function buscarProntuarioCompleto(prontuarioId) {
    try {
        const { data, error } = await supabase
            .from('prontuarios')
            .select(`
                *,
                pacientes (*),
                historico_clinico (*),
                saude_sexual (*),
                medicacoes (*),
                saude_mental (*),
                contexto_social (*),
                exame_fisico (*),
                exames_laboratoriais (*),
                avaliacao_orgaos (*),
                acompanhamento_interprofissional (*),
                alarmes_configurados (*)
            `)
            .eq('id', prontuarioId)
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Erro ao buscar prontuario:', error);
        return null;
    }
}

// =====================================================
// FUNCOES AUXILIARES
// =====================================================

// Obter valor do botao selecionado (classe ativo ou active)
function getSelectedButton(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return null;
    const activeBtn = container.querySelector('.btn-select.ativo, .btn-select.active');
    return activeBtn ? activeBtn.textContent.trim() : null;
}

// Obter array de valores dos botoes selecionados
function getSelectedButtons(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return [];
    const activeBtns = container.querySelectorAll('.btn-select.ativo, .btn-select.active');
    return Array.from(activeBtns).map(btn => btn.textContent.trim());
}

// Obter valor de checkbox por name
function getCheckedValue(name) {
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    return checked ? checked.value : null;
}

// Obter array de valores de checkboxes por name
function getCheckedValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

// Obter valor de radio button por name
function getRadioValue(name) {
    const radio = document.querySelector(`input[name="${name}"]:checked`);
    return radio ? radio.value : null;
}
