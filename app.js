document.addEventListener("DOMContentLoaded", () => {


  const ADMIN_SECRET = btoa("VIAT-ACCESS-2026");

  const adminBtn       = document.getElementById("adminAccess");
  const guestBtn       = document.getElementById("guestAccess");
  const adminModal     = document.getElementById("admin-modal");
  const verifyBtn      = document.getElementById("verifyAdmin");
  const adminCodeInput = document.getElementById("adminCode");
  const adminError     = document.getElementById("adminError");


  const openAdminModal = () => {
    adminModal.classList.remove("hidden");
    adminCodeInput.focus();
  };

  const closeAdminModal = () => {
    adminModal.classList.add("hidden");
    clearError();
  };

  const clearError = () => {
    adminError.textContent = "";
  };

  const validateAdmin = () => {
    const entered = btoa(adminCodeInput.value.trim());

    if (entered === ADMIN_SECRET) {
      sessionStorage.setItem("role", "admin");
      window.location.href = "admin.html";
    } else {
      adminError.textContent = "Invalid access code";
      adminCodeInput.value = "";
      adminCodeInput.focus();
    }
  };


  if (adminBtn) {
    adminBtn.addEventListener("click", openAdminModal);
  }

  if (guestBtn) {
    guestBtn.addEventListener("click", () => {
      sessionStorage.setItem("role", "guest");
      window.location.href = "posts.html";
    });
  }

  if (verifyBtn) {
    verifyBtn.addEventListener("click", validateAdmin);
  }

  if (adminCodeInput) {
    adminCodeInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        validateAdmin();
      }
    });
  }

  if (adminModal) {
    adminModal.addEventListener("click", (e) => {
      if (e.target === adminModal) {
        closeAdminModal();
      }
    });
  }

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

