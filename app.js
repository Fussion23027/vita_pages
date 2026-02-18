document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.getElementById("privacy-overlay");
  const acceptBtn = document.getElementById("acceptBtn");
  const denyBtn = document.getElementById("denyBtn");

  if (localStorage.getItem("privacyAccepted") === "true") {
    overlay.remove();
    iniciarSistema();
    return;
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("privacyAccepted", "true");
    overlay.remove();
    iniciarSistema();
  });

  denyBtn.addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});

});

async function iniciarSistema() {

  const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm');
  const supabaseUrl = 'https://pqcgecgvfastavdxlesc.supabase.co';
  const supabaseKey = 'sb_publishable_FMaKOlreN3hkZfvMiun47g_cOzNrYuM';
  const supabase = createClient(supabaseUrl, supabaseKey);

  const sessionId = crypto.randomUUID();

  await supabase
    .from('usuarios')
    .insert([{ session_id: sessionId }]);

}

