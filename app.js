import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

console.log(" AnimReddit fully loaded");

const supabaseUrl = 'https://pqcgecgvfastavdxlesc.supabase.co';
const supabaseKey = 'sb_publishable_FMaKOlreN3hkZfvMiun47g_cOzNrYuM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function registrarVisita() {
  console.log(" Intentando registrar visita...");

  const sessionId = crypto.randomUUID();

  const { data, error } = await supabase
    .from('usuarios')
    .insert([
      { session_id: sessionId }
    ]);

  if (error) {
    console.error(" Error insertando:", error);
  } else {
    console.log(" Usuario registrado correctamente:", data);
  }
}

registrarVisita();
