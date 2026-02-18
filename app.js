document.addEventListener("DOMContentLoaded", function(){

  const overlay = document.getElementById("privacy-overlay");
  const acceptBtn = document.getElementById("acceptBtn");
  const denyBtn = document.getElementById("denyBtn");

  if(localStorage.getItem("privacyAccepted") === "true"){
    overlay.style.display = "none";
    return;
  }

  acceptBtn.addEventListener("click", function(){
    localStorage.setItem("privacyAccepted", "true");
    overlay.style.display = "none";
  });

  denyBtn.addEventListener("click", function(){
    window.location.href = "https://google.com";
  });

});
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const supabaseUrl = 'https://pqcgecgvfastavdxlesc.supabase.co';
const supabaseKey = 'sb_publishable_FMaKOlreN3hkZfvMiun47g_cOzNrYuM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function registrarVisita() {
  console.log(" Attempting to register a visit...");

  const sessionId = crypto.randomUUID();

  const { data, error } = await supabase
    .from('usuarios')
    .insert([
      { session_id: sessionId }
    ]);

  if (error) {
    console.error("Error inserting:", error);
  } else {
    console.log("Successfully", data);
  }
}

registrarVisita();
