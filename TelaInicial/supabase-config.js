// =====================================================
// CONFIGURACAO DO SUPABASE - PRONTUARIO ELETRONICO
// =====================================================

const SUPABASE_URL = 'https://xyxlspeqncdmqqtwnmsv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5eGxzcGVxbmNkbXFxdHdubXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMTgyNzksImV4cCI6MjA5NDc5NDI3OX0.YccurhemrlG4oywdk3PSdHbOn7xljh_5JRpR8VTCExI';

// Inicializar cliente Supabase com schema prontuario
var supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    db: { schema: 'prontuario' }
});

// Alias para facilitar uso
var supabase = supabaseClient;

// Verificar conexao
console.log('Supabase configurado para schema: prontuario');
