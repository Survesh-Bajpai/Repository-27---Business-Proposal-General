// Application Data
const APP_DATA = {
  "peers_comprehensive": [
    {"company": "Physics Wallah", "fy25_revenue": 2400, "profit_loss": 50, "valuation_usd": 3.8, "users_million": 25, "securities_addressable": 0.775, "tam_crores": 1.9, "partnership_2030": 182.8, "financial_education": "No", "ipo_status": "Filed", "growth_rate": 55, "ebitda_margin": 2.1},
    {"company": "BYJU'S", "fy25_revenue": 4000, "profit_loss": -8245, "valuation_usd": 1, "users_million": 1, "securities_addressable": 3.0, "tam_crores": 3.6, "partnership_2030": 339.6, "financial_education": "Limited", "ipo_status": "Bankrupt", "growth_rate": -65, "ebitda_margin": -206},
    {"company": "Unacademy", "fy25_revenue": 1857, "profit_loss": -1537, "valuation_usd": 0.8, "users_million": 6, "securities_addressable": 4.0, "tam_crores": 12.0, "partnership_2030": 1132.0, "financial_education": "No", "ipo_status": "Private", "growth_rate": 158, "ebitda_margin": -83},
    {"company": "upGrad", "fy25_revenue": 1876, "profit_loss": -285, "valuation_usd": 2.25, "users_million": 2.96, "securities_addressable": 2.25, "tam_crores": 12.4, "partnership_2030": 1167.4, "financial_education": "Basic", "ipo_status": "Private", "growth_rate": 30, "ebitda_margin": -15},
    {"company": "Vedantu", "fy25_revenue": 284, "profit_loss": 25, "valuation_usd": 0.920, "users_million": 4.5, "securities_addressable": 0.135, "tam_crores": 0.2, "partnership_2030": 22.9, "financial_education": "No", "ipo_status": "Planning", "growth_rate": 55, "ebitda_margin": 8.8},
    {"company": "Imarticus Learning", "fy25_revenue": 205, "profit_loss": 15, "valuation_usd": 0.33, "users_million": 5, "securities_addressable": 0.038, "tam_crores": 0.4, "partnership_2030": 34.1, "financial_education": "CFA/FRM", "ipo_status": "Planning", "growth_rate": 16, "ebitda_margin": 7.3},
    {"company": "QuantInsti", "fy25_revenue": 145, "profit_loss": 12, "valuation_usd": 0.13, "users_million": 0.13, "securities_addressable": 0.1274, "tam_crores": 1.5, "partnership_2030": 144.2, "financial_education": "Quant Specialty", "ipo_status": "Private", "growth_rate": 8, "ebitda_margin": 8.3},
    {"company": "Simplilearn", "fy25_revenue": 850, "profit_loss": -120, "valuation_usd": 1.2, "users_million": 3.2, "securities_addressable": 0.8, "tam_crores": 3.6, "partnership_2030": 339.6, "financial_education": "Limited", "ipo_status": "Private", "growth_rate": -15, "ebitda_margin": -14.1},
    {"company": "Great Learning", "fy25_revenue": 900, "profit_loss": -80, "valuation_usd": 1.1, "users_million": 2.1, "securities_addressable": 0.63, "tam_crores": 3.1, "partnership_2030": 297.2, "financial_education": "Limited", "ipo_status": "Private", "growth_rate": 10, "ebitda_margin": -8.9},
    {"company": "Emeritus", "fy25_revenue": 2100, "profit_loss": -200, "valuation_usd": 3.2, "users_million": 1.8, "securities_addressable": 1.08, "tam_crores": 9.2, "partnership_2030": 866.0, "financial_education": "Finance MBA", "ipo_status": "Private", "growth_rate": 15, "ebitda_margin": -9.5}
  ],
  "revenue_model": {
    "course_fees": 70,
    "placement_partnerships": 15,
    "corporate_training": 10,
    "certification_consulting": 5
  },
  "certifications": [
    {"name": "CFA (All Levels)", "type": "US", "cost_usd": 3500, "duration_months": 48, "market_size_crores": 1200, "projected_2030_crores": 2800, "demand": "Very High"},
    {"name": "NISM Series 21B (PM)", "type": "NISM", "cost_usd": 50, "duration_months": 3, "market_size_crores": 450, "projected_2030_crores": 1200, "demand": "Very High"},
    {"name": "NISM Series 15 (RA)", "type": "NISM", "cost_usd": 50, "duration_months": 3, "market_size_crores": 380, "projected_2030_crores": 950, "demand": "Very High"},
    {"name": "NISM Series 10A/B (IA)", "type": "NISM", "cost_usd": 50, "duration_months": 3, "market_size_crores": 320, "projected_2030_crores": 850, "demand": "High"},
    {"name": "NISM Series 19C/D (HF)", "type": "NISM", "cost_usd": 50, "duration_months": 3, "market_size_crores": 180, "projected_2030_crores": 600, "demand": "High"},
    {"name": "NISM Series 9 (MB)", "type": "NISM", "cost_usd": 50, "duration_months": 3, "market_size_crores": 280, "projected_2030_crores": 750, "demand": "Very High"},
    {"name": "CMT", "type": "US", "cost_usd": 2200, "duration_months": 18, "market_size_crores": 85, "projected_2030_crores": 250, "demand": "Medium"},
    {"name": "CAIA", "type": "US", "cost_usd": 3190, "duration_months": 18, "market_size_crores": 145, "projected_2030_crores": 450, "demand": "High"},
    {"name": "CFP", "type": "US", "cost_usd": 925, "duration_months": 12, "market_size_crores": 190, "projected_2030_crores": 480, "demand": "Medium"},
    {"name": "Series 7", "type": "US", "cost_usd": 300, "duration_months": 4, "market_size_crores": 25, "projected_2030_crores": 80, "demand": "Low"}
  ],
  "projections_by_year": {
    "2025": {"Physics Wallah": 1.9, "BYJU'S": 3.6, "Unacademy": 12.0, "upGrad": 12.4, "Vedantu": 0.2, "Imarticus Learning": 0.4, "QuantInsti": 1.5, "Simplilearn": 3.6, "Great Learning": 3.1, "Emeritus": 9.2},
    "2026": {"Physics Wallah": 6.9, "BYJU'S": 12.8, "Unacademy": 42.7, "upGrad": 44.1, "Vedantu": 0.9, "Imarticus Learning": 1.3, "QuantInsti": 5.4, "Simplilearn": 12.8, "Great Learning": 11.2, "Emeritus": 32.7},
    "2027": {"Physics Wallah": 21.8, "BYJU'S": 40.6, "Unacademy": 135.3, "upGrad": 139.5, "Vedantu": 2.7, "Imarticus Learning": 4.1, "QuantInsti": 17.2, "Simplilearn": 40.6, "Great Learning": 35.5, "Emeritus": 103.5},
    "2028": {"Physics Wallah": 48.6, "BYJU'S": 90.4, "Unacademy": 301.2, "upGrad": 310.6, "Vedantu": 6.1, "Imarticus Learning": 9.1, "QuantInsti": 38.4, "Simplilearn": 90.4, "Great Learning": 79.1, "Emeritus": 230.4},
    "2029": {"Physics Wallah": 96.2, "BYJU'S": 178.8, "Unacademy": 596.0, "upGrad": 614.6, "Vedantu": 12.1, "Imarticus Learning": 17.9, "QuantInsti": 75.9, "Simplilearn": 178.8, "Great Learning": 156.4, "Emeritus": 455.9},
    "2030": {"Physics Wallah": 182.8, "BYJU'S": 339.6, "Unacademy": 1132.0, "upGrad": 1167.4, "Vedantu": 22.9, "Imarticus Learning": 34.1, "QuantInsti": 144.2, "Simplilearn": 339.6, "Great Learning": 297.2, "Emeritus": 866.0}
  }
};

// Global Variables
let currentPeer = null;
let charts = {};

// Utility Functions
function formatCurrency(amount) {
  if (amount >= 10000) {
    return `₹${(amount / 10000).toFixed(1)} Tn`;
  } else if (amount >= 100) {
    return `₹${(amount / 100).toFixed(1)} Bn`;
  } else {
    return `₹${amount.toFixed(1)} Cr`;
  }
}

function formatPercentage(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function calculateCAGR(startValue, endValue, years) {
  if (startValue <= 0) return 0;
  return Math.pow(endValue / startValue, 1 / years) - 1;
}

// Theme Management
function initializeTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  if (!themeToggle || !themeIcon) return;

  let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-color-scheme', theme);
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    currentTheme = theme;
    
    // Update charts when theme changes
    setTimeout(() => updateAllCharts(), 100);
  }

  applyTheme(currentTheme);

  themeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
    showNotification(`Switched to ${currentTheme} theme`, 'success');
  });
}

// Navigation Management
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const contentSections = document.querySelectorAll('.content-section');
  
  if (!navLinks.length || !contentSections.length) {
    console.error('Navigation elements not found');
    return;
  }

  function showSectionInternal(sectionId) {
    console.log('Showing section:', sectionId);
    
    // Hide all sections
    contentSections.forEach(section => {
      section.style.display = 'none';
      section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.style.display = 'block';
      targetSection.classList.add('active');
      
      // Update nav links
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
          link.classList.add('active');
        }
      });
      
      console.log('Section shown successfully:', sectionId);
      
      // Initialize section-specific content
      setTimeout(() => {
        if (sectionId === 'market-analysis') {
          createMarketCharts();
        } else if (sectionId === 'business-model') {
          createBusinessModelCharts();
        } else if (sectionId === 'competitive-edge') {
          createCompetitiveEdgeCharts();
        } else if (sectionId === 'financial-projections' && currentPeer) {
          createProjectionCharts();
        } else if (sectionId === 'partnership-terms') {
          updatePartnershipChart();
        } else if (sectionId === 'roi-calculator') {
          updateROICalculation();
        }
      }, 100);
    } else {
      console.error('Section not found:', sectionId);
    }
  }

  // Expose to global scope
  window.showSectionGlobal = showSectionInternal;

  // Setup navigation event listeners
  navLinks.forEach(link => {
    const sectionId = link.getAttribute('data-section');
    if (sectionId) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Nav link clicked:', sectionId);
        showSectionInternal(sectionId);
      });
    }
  });

  // Show initial section
  showSectionInternal('executive-dashboard');
  
  console.log('Navigation initialized successfully');
}

// Peer Selection Management
function initializePeerSelection() {
  const peerSelectors = [
    document.getElementById('peer-select-header'),
    document.getElementById('peer-select-main'),
    document.getElementById('comparison-peer-select')
  ];

  // Setup event listeners for main selectors
  const mainSelectors = [
    document.getElementById('peer-select-header'),
    document.getElementById('peer-select-main')
  ];

  mainSelectors.forEach(selector => {
    if (selector) {
      selector.addEventListener('change', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const selectedPeer = e.target.value;
        console.log('Peer selected:', selectedPeer);
        
        if (selectedPeer) {
          selectPeer(selectedPeer);
        } else {
          clearPeerSelection();
        }
      });
    }
  });

  console.log('Peer selection initialized');
}

function selectPeer(peerName) {
  console.log('Selecting peer:', peerName);
  currentPeer = peerName;
  
  // Sync all main selectors
  const selectors = [
    document.getElementById('peer-select-header'),
    document.getElementById('peer-select-main')
  ];
  
  selectors.forEach(selector => {
    if (selector && selector.value !== peerName) {
      selector.value = peerName;
    }
  });

  updateDashboard(peerName);
  updateAllSections(peerName);
  updatePartnerStatus(peerName);
  
  showNotification(`Selected ${peerName} for partnership analysis`, 'success');
}

function clearPeerSelection() {
  currentPeer = null;
  
  // Show placeholder
  const dashboard = document.getElementById('key-metrics-dashboard');
  if (dashboard) {
    dashboard.innerHTML = `
      <div class="no-peer-selected">
        <div class="placeholder-content">
          <h3>🚀 Welcome to QuantEdu Partnership Platform</h3>
          <p>Select an EdTech partner above to view comprehensive business intelligence, financial projections, and partnership opportunities.</p>
          <div class="feature-highlights">
            <div class="feature-item" onclick="showSection('market-analysis')">
              <span class="feature-icon">📊</span>
              <span>Real-time Data Analytics</span>
            </div>
            <div class="feature-item" onclick="showSection('financial-projections')">
              <span class="feature-icon">💰</span>
              <span>Financial Projections</span>
            </div>
            <div class="feature-item" onclick="showSection('market-analysis')">
              <span class="feature-icon">🎯</span>
              <span>Market Intelligence</span>
            </div>
            <div class="feature-item" onclick="showSection('partnership-terms')">
              <span class="feature-icon">🤝</span>
              <span>Partnership Modeling</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // Hide other sections
  const proposalOverview = document.getElementById('proposal-overview');
  const ctaSection = document.getElementById('cta-section');
  
  if (proposalOverview) proposalOverview.style.display = 'none';
  if (ctaSection) ctaSection.style.display = 'none';
  
  updatePartnerStatus(null);
}

function updatePartnerStatus(peerName) {
  const statusElement = document.getElementById('partner-status');
  const nameElement = document.getElementById('selected-peer-name');
  
  if (peerName && statusElement && nameElement) {
    nameElement.textContent = `${peerName} Partnership`;
    statusElement.textContent = '✓ Partner Selected';
    statusElement.className = 'partner-status active';
  } else if (statusElement && nameElement) {
    nameElement.textContent = 'Select a partner to begin';
    statusElement.textContent = 'No partner selected';
    statusElement.className = 'partner-status';
  }
}

function updateDashboard(peerName) {
  const peerData = APP_DATA.peers_comprehensive.find(p => p.company === peerName);
  if (!peerData) return;

  const projections = APP_DATA.projections_by_year;
  const cagr = calculateCAGR(projections['2025'][peerName], projections['2030'][peerName], 5);

  const metricsHTML = `
    <div class="key-metrics-grid">
      <div class="metric-card">
        <h3>${formatCurrency(projections['2030'][peerName])}</h3>
        <p>Partnership Revenue by 2030</p>
        <span class="metric-change">${formatPercentage(cagr)} CAGR</span>
      </div>
      <div class="metric-card">
        <h3>$${peerData.valuation_usd.toFixed(1)}B</h3>
        <p>Current Valuation</p>
        <span class="metric-change ${peerData.growth_rate >= 0 ? '' : 'negative'}">${peerData.growth_rate}% Growth</span>
      </div>
      <div class="metric-card">
        <h3>${peerData.users_million.toFixed(1)}M</h3>
        <p>Active Users</p>
        <span class="metric-change">Partnership Ready</span>
      </div>
    </div>
  `;

  const dashboard = document.getElementById('key-metrics-dashboard');
  if (dashboard) {
    dashboard.innerHTML = metricsHTML;
  }

  // Show other sections
  const proposalOverview = document.getElementById('proposal-overview');
  const ctaSection = document.getElementById('cta-section');
  
  if (proposalOverview) proposalOverview.style.display = 'block';
  if (ctaSection) ctaSection.style.display = 'block';

  // Update CTA section
  const ctaTitle = document.getElementById('cta-title');
  const ctaSubtitle = document.getElementById('cta-subtitle');
  
  if (ctaTitle) ctaTitle.textContent = `Transform Financial Education with ${peerName}`;
  if (ctaSubtitle) ctaSubtitle.textContent = `Partner with us to capture ${formatCurrency(peerData.tam_crores)} in TAM opportunity`;
}

function updateAllSections(peerName) {
  updateMarketAnalysis(peerName);
  updateCompetitiveEdge(peerName);
  updateFinancialProjections(peerName);
  updatePartnershipTerms(peerName);
}

function updateMarketAnalysis(peerName) {
  const peerData = APP_DATA.peers_comprehensive.find(p => p.company === peerName);
  if (!peerData) return;

  const partnerTam = document.getElementById('partner-tam');
  const partnerGrowth = document.getElementById('partner-growth');
  
  if (partnerTam) partnerTam.textContent = formatCurrency(peerData.tam_crores);
  if (partnerGrowth) partnerGrowth.textContent = `+${peerData.growth_rate}% Growth`;

  // Update certification grid
  const certGrid = document.getElementById('cert-market-grid');
  if (certGrid) {
    certGrid.innerHTML = APP_DATA.certifications.slice(0, 3).map(cert => `
      <div class="cert-market-item">
        <h5>${cert.name}</h5>
        <p>₹${cert.market_size_crores} Cr → ₹${cert.projected_2030_crores} Cr</p>
      </div>
    `).join('');
  }
}

function updateCompetitiveEdge(peerName) {
  const tableBody = document.getElementById('competitor-table-body');
  const title = document.getElementById('competitor-comparison-title');
  
  if (tableBody) {
    tableBody.innerHTML = APP_DATA.peers_comprehensive.map(peer => {
      const isSelected = peer.company === peerName;
      return `
        <tr ${isSelected ? 'class="highlight-row"' : ''}>
          <td><strong>${peer.company}</strong></td>
          <td>$${peer.valuation_usd.toFixed(1)}B</td>
          <td>${peer.users_million.toFixed(1)}M</td>
          <td>${peer.financial_education}</td>
          <td>${peer.growth_rate}%</td>
          <td>₹${peer.partnership_2030.toFixed(1)} Cr</td>
        </tr>
      `;
    }).join('');
  }

  if (title) {
    title.textContent = `Market Position vs ${peerName}`;
  }
}

function updateFinancialProjections(peerName) {
  const projections = {};
  Object.keys(APP_DATA.projections_by_year).forEach(year => {
    projections[year] = APP_DATA.projections_by_year[year][peerName] || 0;
  });

  const peerData = APP_DATA.peers_comprehensive.find(p => p.company === peerName);
  const cagr = calculateCAGR(projections['2025'], projections['2030'], 5);

  // Update projection cards
  const proj2025 = document.getElementById('proj-2025');
  const proj2030 = document.getElementById('proj-2030');
  const projCagr = document.getElementById('proj-cagr');
  
  if (proj2025) proj2025.textContent = formatCurrency(projections['2025']);
  if (proj2030) proj2030.textContent = formatCurrency(projections['2030']);
  if (projCagr) projCagr.textContent = formatPercentage(cagr);

  // Update detailed table
  const tableBody = document.getElementById('detailed-projections-body');
  const title = document.getElementById('detailed-projections-title');
  
  if (tableBody && title) {
    title.textContent = `${peerName} Partnership Forecast`;
    
    const years = Object.keys(projections);
    tableBody.innerHTML = years.map(year => {
      const coreRevenue = peerData.fy25_revenue * Math.pow(1.15, parseInt(year) - 2025);
      const finEduRevenue = projections[year];
      const totalRevenue = coreRevenue + finEduRevenue;
      const finEduShare = (finEduRevenue / totalRevenue) * 100;
      const students = Math.round(finEduRevenue * 50);
      
      return `
        <tr>
          <td>${year}</td>
          <td>${formatCurrency(coreRevenue)}</td>
          <td>${formatCurrency(finEduRevenue)}</td>
          <td>${formatCurrency(totalRevenue)}</td>
          <td>${finEduShare.toFixed(1)}%</td>
          <td>${students.toLocaleString()}</td>
        </tr>
      `;
    }).join('');
  }
}

function updatePartnershipTerms(peerName) {
  const peerData = APP_DATA.peers_comprehensive.find(p => p.company === peerName);
  if (!peerData) return;

  const partnerBenefits = document.getElementById('partner-benefits');
  const partnerTitle = document.getElementById('partner-brings-title');
  
  if (partnerBenefits && partnerTitle) {
    partnerTitle.textContent = `🏢 ${peerName} Provides`;
    
    partnerBenefits.innerHTML = `
      <div class="benefit-item">
        <span class="benefit-icon">👥</span>
        <div class="benefit-content">
          <h4>Massive User Base</h4>
          <p>${peerData.users_million.toFixed(1)}M+ students with strong brand trust</p>
        </div>
      </div>
      <div class="benefit-item">
        <span class="benefit-icon">💰</span>
        <div class="benefit-content">
          <h4>Capital Investment</h4>
          <p>$${peerData.valuation_usd.toFixed(1)}B valuation with operational support</p>
        </div>
      </div>
      <div class="benefit-item">
        <span class="benefit-icon">🏢</span>
        <div class="benefit-content">
          <h4>Platform Infrastructure</h4>
          <p>Established learning management system</p>
        </div>
      </div>
      <div class="benefit-item">
        <span class="benefit-icon">🎯</span>
        <div class="benefit-content">
          <h4>Brand Recognition</h4>
          <p>${peerData.ipo_status} status with ${peerData.financial_education} education focus</p>
        </div>
      </div>
    `;
  }
}

// Chart Management
function getChartTheme() {
  const isDark = document.documentElement.getAttribute('data-color-scheme') === 'dark';
  return {
    textColor: isDark ? '#f5f5f5' : '#134252',
    gridColor: isDark ? '#626f7c80' : '#5e414080',
    backgroundColor: isDark ? '#262829' : '#fcfcf9'
  };
}

function createMarketCharts() {
  createMarketGrowthChart();
  if (currentPeer) {
    createPartnerTAMChart();
  }
}

function createMarketGrowthChart() {
  const ctx = document.getElementById('market-growth-chart');
  if (!ctx) return;

  const theme = getChartTheme();
  
  if (charts.marketGrowth) {
    charts.marketGrowth.destroy();
  }

  try {
    charts.marketGrowth = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [{
          label: 'Global FinTech Education ($ Tn)',
          data: [8.5, 9.1, 9.7, 10.3, 10.9, 11.6],
          borderColor: '#1FB8CD',
          backgroundColor: '#1FB8CD40',
          fill: true,
          tension: 0.4
        }, {
          label: 'India Securities Education ($ Bn)',
          data: [3.3, 3.8, 4.4, 5.1, 5.9, 6.8],
          borderColor: '#FFC185',
          backgroundColor: '#FFC18540',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: theme.textColor }
          }
        },
        scales: {
          x: {
            ticks: { color: theme.textColor },
            grid: { color: theme.gridColor }
          },
          y: {
            ticks: { color: theme.textColor },
            grid: { color: theme.gridColor }
          }
        }
      }
    });
    console.log('Market growth chart created successfully');
  } catch (error) {
    console.error('Error creating market growth chart:', error);
  }
}

function createPartnerTAMChart() {
  const ctx = document.getElementById('partner-tam-chart');
  if (!ctx || !currentPeer) return;

  const theme = getChartTheme();
  const peerData = APP_DATA.peers_comprehensive.find(p => p.company === currentPeer);
  
  if (charts.partnerTAM) {
    charts.partnerTAM.destroy();
  }

  try {
    charts.partnerTAM = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [`${currentPeer} TAM`, 'Remaining Market'],
        datasets: [{
          data: [peerData.tam_crores, 8410 - peerData.tam_crores],
          backgroundColor: ['#1FB8CD', '#ECEBD5'],
          borderWidth: 2,
          borderColor: theme.backgroundColor
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: theme.textColor }
          }
        }
      }
    });
    console.log('Partner TAM chart created successfully');
  } catch (error) {
    console.error('Error creating partner TAM chart:', error);
  }
}

// Business Model Charts
function createBusinessModelCharts() {
  createRevenueModelChart();
}

function createRevenueModelChart() {
  const ctx = document.getElementById('revenue-model-chart');
  if (!ctx) return;

  const theme = getChartTheme();
  const revenueModel = APP_DATA.revenue_model;
  
  if (charts.revenueModel) {
    charts.revenueModel.destroy();
  }

  try {
    charts.revenueModel = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Course Fees (70%)', 'Placement Partnerships (15%)', 'Corporate Training (10%)', 'Certification Consulting (5%)'],
        datasets: [{
          data: [
            revenueModel.course_fees,
            revenueModel.placement_partnerships,
            revenueModel.corporate_training,
            revenueModel.certification_consulting
          ],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
          borderWidth: 2,
          borderColor: theme.backgroundColor
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: theme.textColor }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.parsed + '%';
              }
            }
          }
        }
      }
    });
    console.log('Revenue model chart created successfully');
  } catch (error) {
    console.error('Error creating revenue model chart:', error);
  }
}

// Competitive Edge Charts
function createCompetitiveEdgeCharts() {
  createCompetitiveAnalysisChart();
}

function createCompetitiveAnalysisChart() {
  const ctx = document.getElementById('competitive-analysis-chart');
  if (!ctx) return;

  const theme = getChartTheme();
  const peers = APP_DATA.peers_comprehensive;
  
  if (charts.competitiveAnalysis) {
    charts.competitiveAnalysis.destroy();
  }

  try {
    // Create scatter plot data
    const data = peers.map((peer, index) => ({
      x: peer.users_million,
      y: peer.valuation_usd * 1000, // Convert to millions for better scale
      label: peer.company,
      backgroundColor: `hsl(${index * 36}, 70%, 60%)`,
      borderColor: `hsl(${index * 36}, 70%, 50%)`,
      pointRadius: peer.company === currentPeer ? 12 : 8,
      pointBorderWidth: peer.company === currentPeer ? 3 : 1
    }));

    charts.competitiveAnalysis = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'EdTech Companies',
          data: data,
          backgroundColor: data.map(d => d.backgroundColor),
          borderColor: data.map(d => d.borderColor),
          pointRadius: data.map(d => d.pointRadius),
          pointBorderWidth: data.map(d => d.pointBorderWidth)
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: theme.textColor }
          },
          tooltip: {
            callbacks: {
              title: function(context) {
                return peers[context[0].dataIndex].company;
              },
              label: function(context) {
                const peer = peers[context.dataIndex];
                return [
                  `Users: ${peer.users_million}M`,
                  `Valuation: $${peer.valuation_usd}B`,
                  `Growth: ${peer.growth_rate}%`,
                  `FinEdu: ${peer.financial_education}`
                ];
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Users (Millions)',
              color: theme.textColor
            },
            ticks: { color: theme.textColor },
            grid: { color: theme.gridColor }
          },
          y: {
            title: {
              display: true,
              text: 'Valuation ($ Millions)',
              color: theme.textColor
            },
            ticks: { 
              color: theme.textColor,
              callback: function(value) {
                return '$' + (value / 1000).toFixed(1) + 'B';
              }
            },
            grid: { color: theme.gridColor }
          }
        }
      }
    });
    console.log('Competitive analysis chart created successfully');
  } catch (error) {
    console.error('Error creating competitive analysis chart:', error);
  }
}

function createProjectionCharts() {
  createPartnershipProjectionsChart();
  createMarketShareChart();
}

function createPartnershipProjectionsChart() {
  const ctx = document.getElementById('partnership-projections-chart');
  if (!ctx || !currentPeer) return;

  const theme = getChartTheme();
  const projections = {};
  Object.keys(APP_DATA.projections_by_year).forEach(year => {
    projections[year] = APP_DATA.projections_by_year[year][currentPeer] || 0;
  });
  
  if (charts.partnershipProjections) {
    charts.partnershipProjections.destroy();
  }

  try {
    charts.partnershipProjections = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Object.keys(projections),
        datasets: [{
          label: `${currentPeer} Partnership Revenue (₹ Cr)`,
          data: Object.values(projections),
          borderColor: '#1FB8CD',
          backgroundColor: '#1FB8CD40',
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: theme.textColor }
          }
        },
        scales: {
          x: {
            ticks: { color: theme.textColor },
            grid: { color: theme.gridColor }
          },
          y: {
            ticks: { color: theme.textColor },
            grid: { color: theme.gridColor }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating partnership projections chart:', error);
  }
}

function createMarketShareChart() {
  const ctx = document.getElementById('market-share-chart');
  if (!ctx || !currentPeer) return;

  const theme = getChartTheme();
  const peerData = APP_DATA.peers_comprehensive.find(p => p.company === currentPeer);
  const totalMarket = 8410;
  
  if (charts.marketShare) {
    charts.marketShare.destroy();
  }

  try {
    charts.marketShare = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [`${currentPeer} + QuantEdu`, 'Other Players', 'Unaddressed Market'],
        datasets: [{
          data: [
            peerData.partnership_2030 / 100,
            totalMarket * 0.4,
            totalMarket - (peerData.partnership_2030 / 100) - (totalMarket * 0.4)
          ],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
          borderWidth: 2,
          borderColor: theme.backgroundColor
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: theme.textColor }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating market share chart:', error);
  }
}

function updateAllCharts() {
  Object.values(charts).forEach(chart => {
    if (chart && chart.update) {
      try {
        chart.update();
      } catch (error) {
        console.error('Error updating chart:', error);
      }
    }
  });
}

// ROI Calculator
function initializeROICalculator() {
  const inputs = ['initial-investment', 'operational-cost', 'marketing-budget', 'team-size'];
  
  inputs.forEach(inputId => {
    const input = document.getElementById(inputId);
    if (input) {
      input.addEventListener('input', updateROICalculation);
    }
  });
  
  updateROICalculation();
}

function updateROICalculation() {
  const initialInvestment = parseFloat(document.getElementById('initial-investment')?.value || 50);
  const operationalCost = parseFloat(document.getElementById('operational-cost')?.value || 20);
  const marketingBudget = parseFloat(document.getElementById('marketing-budget')?.value || 15);
  const teamSize = parseFloat(document.getElementById('team-size')?.value || 25);

  const totalAnnualCost = operationalCost + marketingBudget + (teamSize * 0.5);
  
  let projectedRevenues = [0, 10, 25, 45, 75, 120];
  if (currentPeer) {
    const projections = Object.values(APP_DATA.projections_by_year).map(year => year[currentPeer] || 0);
    projectedRevenues = [0, ...projections.slice(0, 5)];
  }

  const cashflows = calculateCashflows(initialInvestment, totalAnnualCost, projectedRevenues);
  const breakeven = calculateBreakeven(cashflows);
  const roi5Year = calculateROI(initialInvestment, cashflows[5]);
  const npv = calculateNPV(cashflows, 0.12);
  const irr = calculateIRR(cashflows);

  updateROIMetrics(breakeven, roi5Year, npv, irr);
  createROICashflowChart(cashflows);
}

function calculateCashflows(initialInvestment, annualCost, revenues) {
  const cashflows = [-initialInvestment];
  
  for (let i = 1; i < revenues.length; i++) {
    const netCashflow = revenues[i] - annualCost;
    cashflows.push((cashflows[cashflows.length - 1] || 0) + netCashflow);
  }
  
  return cashflows;
}

function calculateBreakeven(cashflows) {
  for (let i = 1; i < cashflows.length; i++) {
    if (cashflows[i] > 0) {
      return i * 12;
    }
  }
  return 60;
}

function calculateROI(initialInvestment, finalValue) {
  if (initialInvestment === 0) return 0;
  return ((finalValue - (-initialInvestment)) / initialInvestment) * 100;
}

function calculateNPV(cashflows, discountRate) {
  let npv = 0;
  for (let i = 0; i < cashflows.length; i++) {
    npv += cashflows[i] / Math.pow(1 + discountRate, i);
  }
  return npv;
}

function calculateIRR(cashflows) {
  let rate = 0.1;
  let iteration = 0;
  const maxIterations = 100;
  
  while (iteration < maxIterations) {
    let npv = 0;
    let dnpv = 0;
    
    for (let i = 0; i < cashflows.length; i++) {
      npv += cashflows[i] / Math.pow(1 + rate, i);
      dnpv -= i * cashflows[i] / Math.pow(1 + rate, i + 1);
    }
    
    if (Math.abs(npv) < 0.01) break;
    
    rate = rate - npv / dnpv;
    iteration++;
  }
  
  return rate * 100;
}

function updateROIMetrics(breakeven, roi, npv, irr) {
  const elements = {
    'breakeven-period': `${breakeven} months`,
    'five-year-roi': `${roi.toFixed(1)}%`,
    'npv-value': `₹${npv.toFixed(1)} Cr`,
    'irr-value': `${irr.toFixed(1)}%`
  };

  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });
}

function createROICashflowChart(cashflows) {
  const ctx = document.getElementById('roi-cashflow-chart');
  if (!ctx) return;

  const theme = getChartTheme();
  
  if (charts.roiCashflow) {
    charts.roiCashflow.destroy();
  }

  try {
    charts.roiCashflow = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Year 0', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
        datasets: [{
          label: 'Cumulative Cash Flow (₹ Cr)',
          data: cashflows,
          borderColor: '#1FB8CD',
          backgroundColor: '#1FB8CD40',
          fill: true,
          tension: 0.4,
          pointRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: theme.textColor }
          }
        },
        scales: {
          x: {
            ticks: { color: theme.textColor },
            grid: { color: theme.gridColor }
          },
          y: {
            ticks: { color: theme.textColor },
            grid: { color: theme.gridColor }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating ROI cashflow chart:', error);
  }
}

// Partnership Terms Calculator
function initializePartnershipCalculator() {
  const sliders = ['equity-share', 'fixed-income', 'variable-bonus', 'revenue-share'];
  const valueIds = ['equity-value', 'fixed-value', 'variable-value', 'revenue-value'];

  sliders.forEach((sliderId, index) => {
    const slider = document.getElementById(sliderId);
    const valueDisplay = document.getElementById(valueIds[index]);
    
    if (slider && valueDisplay) {
      slider.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        
        if (sliderId === 'equity-share') {
          valueDisplay.textContent = `${value}%`;
        } else if (sliderId === 'fixed-income') {
          valueDisplay.textContent = `₹${value} Cr`;
        } else if (sliderId === 'variable-bonus') {
          valueDisplay.textContent = `${value}%`;
        } else if (sliderId === 'revenue-share') {
          valueDisplay.textContent = `${value}%`;
        }
        
        updatePartnershipChart();
      });
    }
  });
  
  updatePartnershipChart();
}

function updatePartnershipChart() {
  const equity = parseFloat(document.getElementById('equity-share')?.value || 15);
  const fixed = parseFloat(document.getElementById('fixed-income')?.value || 2.5);
  const variable = parseFloat(document.getElementById('variable-bonus')?.value || 12);
  const revenue = parseFloat(document.getElementById('revenue-share')?.value || 6);

  createPartnershipTermsChart(equity, fixed, variable, revenue);
}

function createPartnershipTermsChart(equity, fixed, variable, revenue) {
  const ctx = document.getElementById('partnership-terms-chart');
  if (!ctx) return;

  const theme = getChartTheme();
  
  if (charts.partnershipTerms) {
    charts.partnershipTerms.destroy();
  }

  try {
    charts.partnershipTerms = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Equity Share', 'Fixed Income', 'Variable Bonus', 'Revenue Share'],
        datasets: [{
          label: 'Partnership Value Distribution',
          data: [equity, fixed * 10, variable, revenue],
          borderColor: '#1FB8CD',
          backgroundColor: '#1FB8CD40',
          pointBackgroundColor: '#1FB8CD',
          pointBorderColor: theme.backgroundColor,
          pointRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: theme.textColor }
          }
        },
        scales: {
          r: {
            angleLines: { color: theme.gridColor },
            grid: { color: theme.gridColor },
            pointLabels: { color: theme.textColor },
            ticks: { color: theme.textColor }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating partnership terms chart:', error);
  }
}

// Button Handlers
function initializeButtons() {
  // Get all buttons with onclick handlers - they're handled by HTML
  console.log('Button handlers initialized via HTML onclick attributes');
}

function showScheduleModalInternal() {
  createModal('Schedule Executive Presentation', `
    <p>Thank you for your interest in partnering with QuantEdu!</p>
    <p>Please contact us to schedule a comprehensive presentation.</p>
    <div class="contact-info" style="background: var(--color-secondary); padding: var(--space-16); border-radius: var(--radius-base); margin: var(--space-16) 0;">
      <p><strong>📧 Email:</strong> partnerships@quantedu.in</p>
      <p><strong>📱 Phone:</strong> +91-7898696623</p>
      <p><strong>🌐 Calendar:</strong> calendly.com/quantedu/partnership</p>
    </div>
    <div style="display: flex; gap: var(--space-12); justify-content: center;">
      <button class="btn btn--primary" onclick="window.open('mailto:partnerships@quantedu.in', '_blank')">📧 Send Email</button>
      <button class="btn btn--outline" onclick="window.open('tel:+919876543211', '_blank')">📞 Call Now</button>
    </div>
  `);
}

function showContactModalInternal() {
  createModal('Contact QuantEdu Partnership Team', `
    <p>Get in touch with our partnership specialists for detailed discussions.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-16); margin: var(--space-16) 0;">
      <div style="background: var(--color-secondary); padding: var(--space-16); border-radius: var(--radius-base);">
        <h4>Business Development</h4>
        <p>📧 partnerships@quantedu.in</p>
        <p>📱 +91-7898696623</p>
      </div>
      <div style="background: var(--color-secondary); padding: var(--space-16); border-radius: var(--radius-base);">
        <h4>Technical Integration</h4>
        <p>📧 tech@quantedu.in</p>
        <p>📱 +91-9033169431</p>
      </div>
    </div>
  `);
}

function handleDownloadInternal() {
  if (!currentPeer) {
    showNotification('Please select a partner first to download customized proposal', 'warning');
    return;
  }

  const peerData = APP_DATA.peers_comprehensive.find(p => p.company === currentPeer);
  const projections = APP_DATA.projections_by_year;
  
  // Generate 10-slide presentation content
  const slidesContent = `
QuantEdu Partnership Proposal - ${currentPeer}
10-SLIDE EXECUTIVE PRESENTATION

===== SLIDE 1: EXECUTIVE SUMMARY =====
Partnership Opportunity: ${currentPeer}
Current Valuation: $${peerData.valuation_usd}B
Active Users: ${peerData.users_million}M
2030 Revenue Projection: ₹${peerData.partnership_2030} Cr

===== SLIDE 2: MARKET OPPORTUNITY =====
Total Addressable Market: ₹8,410 Cr
${currentPeer} Specific TAM: ₹${peerData.tam_crores} Cr
Growth Rate: ${peerData.growth_rate}%
Financial Education Focus: ${peerData.financial_education}

===== SLIDE 3: QUANTEDU VALUE PROPOSITION =====
• 15+ Years WorldQuant Experience
• SEBI Registered RA/IA/PM Professionals
• Complete 10 Certification Coverage (CFA, NISM, CMT, CAIA, CFP)
• Proprietary AI Trading & Investment Technology
• 90% Regulatory Compliance Protection

===== SLIDE 4: PARTNERSHIP PROJECTIONS (2025-2030) =====
2025: ₹${projections['2025'][currentPeer]} Cr
2026: ₹${projections['2026'][currentPeer]} Cr
2027: ₹${projections['2027'][currentPeer]} Cr
2028: ₹${projections['2028'][currentPeer]} Cr
2029: ₹${projections['2029'][currentPeer]} Cr
2030: ₹${projections['2030'][currentPeer]} Cr

===== SLIDE 5: REVENUE MODEL =====
• Course Fees: 70%
• Placement Partnerships: 15%
• Corporate Training: 10%
• Certification Consulting: 5%

===== SLIDE 6: COMPETITIVE ADVANTAGES =====
• SEBI Monopoly Protection (90% market exclusivity)
• WorldQuant Quantitative Expertise
• Complete Certification Portfolio
• AI-Powered Learning Platform
• C-Suite Industry Network

===== SLIDE 7: ${currentPeer} SYNERGIES =====
• ${peerData.users_million}M User Base Access
• $${peerData.valuation_usd}B Platform Infrastructure
• ${peerData.ipo_status} Status Brand Recognition
• Existing ${peerData.financial_education} Education Base
• ${peerData.growth_rate}% Growth Momentum

===== SLIDE 8: PARTNERSHIP TERMS =====
• Equity Share: 15-20%
• Annual Fixed Income: ₹2-3 Cr
• Variable Performance Bonus: 10-15%
• Revenue Share: 5-8%
• Joint Technology Development

===== SLIDE 9: IMPLEMENTATION ROADMAP =====
Q1 2025: Partnership Agreement & Team Formation
Q2 2025: Course Development & Platform Integration
Q3 2025: Beta Launch with Select Cohorts
Q4 2025: Full Market Launch & Scaling

===== SLIDE 10: NEXT STEPS & CONTACT =====
Contact Information:
Email: partnerships@quantedu.in
Phone: +91-7898696623
Calendar: https://calendly.com/survesh/30min

Immediate Actions:
1. Schedule Executive Presentation
2. Technical Due Diligence
3. Term Sheet Negotiation
4. Partnership Agreement

Prepared by: QuantEdu Partnership Team
Date: ${new Date().toLocaleDateString('en-IN')}
Confidential & Proprietary
`;

  try {
    const blob = new Blob([slidesContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `QuantEdu_${currentPeer}_10_Slide_Presentation.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showNotification(`${currentPeer} 10-slide presentation downloaded!`, 'success');
  } catch (error) {
    showNotification('Download failed. Please contact us directly.', 'error');
  }
}

// Expose functions to global scope
window.showScheduleModalGlobal = showScheduleModalInternal;
window.showContactModalGlobal = showContactModalInternal;
window.handleDownloadGlobal = handleDownloadInternal;

function createModal(title, content) {
  document.querySelectorAll('.modal:not(.hidden)').forEach(m => m.remove());

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>${title}</h3>
        <button class="modal-close">&times;</button>
      </div>
      <div class="modal-body">${content}</div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeModal = () => modal.remove();
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function escapeHandler(e) {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escapeHandler);
    }
  });
}

// Notification System
function showNotification(message, type = 'info', duration = 4000) {
  document.querySelectorAll('.notification').forEach(n => n.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;
  
  const colors = {
    success: '#1FB8CD',
    error: '#B4413C',
    info: '#1FB8CD',
    warning: '#FFC185'
  };
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 24px;
    background: var(--color-surface);
    color: var(--color-text);
    padding: 16px 20px;
    border-radius: 8px;
    box-shadow: var(--shadow-lg);
    border-left: 4px solid ${colors[type]};
    z-index: 1500;
    max-width: 350px;
    font-size: 14px;
    animation: slideInRight 0.3s ease-out;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, duration);
}

// Mobile Menu
function initializeMobileMenu() {
  if (window.innerWidth <= 1024) {
    createMobileToggle();
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024) {
      createMobileToggle();
    } else {
      const toggle = document.querySelector('.mobile-menu-toggle');
      if (toggle) toggle.remove();
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) sidebar.classList.remove('open');
    }
  });
}

function createMobileToggle() {
  if (document.querySelector('.mobile-menu-toggle')) return;

  const toggle = document.createElement('button');
  toggle.className = 'mobile-menu-toggle btn btn--outline btn--sm';
  toggle.innerHTML = '☰';
  toggle.style.cssText = `
    position: fixed;
    top: 20px;
    left: 16px;
    z-index: 1001;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
  `;

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('open');
      toggle.innerHTML = sidebar.classList.contains('open') ? '✕' : '☰';
    }
  });

  document.body.appendChild(toggle);
}

// Application Initialization
function initializeApp() {
  console.log('Initializing QuantEdu Partnership Platform...');
  
  // Initialize all components
  try {
    initializeTheme();
    console.log('✓ Theme initialized');
    
    initializeNavigation();
    console.log('✓ Navigation initialized');
    
    initializePeerSelection();
    console.log('✓ Peer selection initialized');
    
    initializeROICalculator();
    console.log('✓ ROI calculator initialized');
    
    initializePartnershipCalculator();
    console.log('✓ Partnership calculator initialized');
    
    initializeButtons();
    console.log('✓ Buttons initialized');
    
    initializeMobileMenu();
    console.log('✓ Mobile menu initialized');
    
    // Initialize base charts after a delay
    setTimeout(() => {
      createMarketGrowthChart();
      createRevenueModelChart();
      createCompetitiveAnalysisChart();
      console.log('✓ Base charts initialized');
    }, 500);
    
    console.log('🚀 QuantEdu Partnership Platform initialized successfully!');
    showNotification('Welcome to QuantEdu Partnership Platform!', 'success');
    
  } catch (error) {
    console.error('Initialization error:', error);
    showNotification('Initialization error. Please refresh the page.', 'error');
  }
}

// Start the application
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, starting initialization...');
  setTimeout(initializeApp, 100);
});

// Fallback initialization
if (document.readyState === 'complete') {
  console.log('Document already loaded, initializing immediately');
  initializeApp();
}