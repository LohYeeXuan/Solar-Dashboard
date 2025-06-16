// Site data - simulate data for each solar site
const sites = {
    selangor: {
      name: 'Selangor Solar Farm',
      location: 'Selangor',
      inverter: 'Huawei',
      todayOutput: 123.5,
      totalOutput: 6589.2,
      status: 'healthy'
    },
    penang: {
      name: 'Penang Solar Site',
      location: 'Penang',
      inverter: 'Sungrow',
      todayOutput: 98.4,
      totalOutput: 4231.7,
      status: 'maintenance'
    }
  };
  
  // Track which site is currently selected
  let currentSite = 'selangor';
  
  // Get elements from HTML to update dynamically
  const todayEl = document.getElementById('today');
  const totalEl = document.getElementById('total');
  const statusText = document.getElementById('status-text');
  const statusIndicator = document.getElementById('status-indicator');
  const siteSelect = document.getElementById('site');
  const nameInput = document.getElementById('site-name');
  const locationInput = document.getElementById('location');
  const inverterInput = document.getElementById('inverter');
  const saveMessage = document.getElementById('save-message');
  
  // Update the dashboard with selected site info
  function updateDashboard() {
    const site = sites[currentSite];
  
    // Set energy values
    todayEl.textContent = `Today's Output: ${site.todayOutput} kWh`;
    totalEl.textContent = `Total Output: ${site.totalOutput} MWh`;
  
    // Set status text and color
    statusText.textContent = site.status;
    statusIndicator.className = 'status-indicator status-' + site.status;
  
    // Populate form values
    nameInput.value = site.name;
    locationInput.value = site.location;
    inverterInput.value = site.inverter;
  }
  
  // Simulate refresh with loading animation
  function refreshOutput() {
    // Show skeleton animation
    todayEl.innerHTML = '<div class="skeleton" style="width:120px;"></div>';
    totalEl.innerHTML = '<div class="skeleton" style="width:100px;"></div>';
  
    // Delay update (simulate loading)
    setTimeout(updateDashboard, 1000);
  }
  
  // Change site when dropdown changes
  siteSelect.addEventListener('change', (e) => {
    currentSite = e.target.value;
    updateDashboard();
  });
  
  // Save settings (simulate saving)
  document.getElementById('settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Update current site values
    sites[currentSite].name = nameInput.value;
    sites[currentSite].location = locationInput.value;
    sites[currentSite].inverter = inverterInput.value;
  
    // Show save message
    saveMessage.textContent = 'Settings saved!';
    setTimeout(() => saveMessage.textContent = '', 2000);
  });
  
  // Handle navigation between sections using hash in URL
  function handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'dashboard';
  
    // Hide all sections first
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('active');
    });
  
    // Show the selected section
    const active = document.getElementById(`${hash}-section`);
    if (active) active.classList.add('active');
  }
  
  // Watch for hash change (e.g., #settings, #billing)
  window.addEventListener('hashchange', handleRoute);
  
  // Initial setup
  handleRoute();
  updateDashboard();
  