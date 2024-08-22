document.getElementById('basic-plan').addEventListener('click', function() {
      showPlan('plan-basico');
  });

  document.getElementById('advanced-plan').addEventListener('click', function() {
      showPlan('plan-avanzado');
  });

  document.getElementById('premium-plan').addEventListener('click', function() {
      showPlan('plan-premium');
  });

  function showPlan(planId) {
      // Ocultar todos los planes
      var plans = document.querySelectorAll('.plan-details');
      plans.forEach(function(plan) {
          plan.classList.remove('active');
      });

      // Mostrar el plan seleccionado
      var selectedPlan = document.getElementById(planId);
      selectedPlan.classList.add('active');
  }