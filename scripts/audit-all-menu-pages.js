import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const sectionsDir = path.join(rootDir, 'src', 'components', 'sections');

const menuTabs = [
  { id: 'dashboard', label: 'Corporate Dashboard', files: ['ECommerce.jsx', 'ChartsPanel.jsx', 'OrdersChart.jsx', 'ProfitChart.jsx', 'ProfitCard.jsx', 'EarningCard.jsx', 'TrafficRevealCard.jsx', 'VisitorsAnalytics.jsx', 'UserActivity.jsx', 'CountryOrders.jsx'] },
  { id: 'iot', label: 'IoT Smart Home', files: ['ElectricityCard.jsx', 'SecurityCameras.jsx', 'RoomsCard.jsx', 'TemperatureCard.jsx', 'SolarWeather.jsx'] },
  { id: 'orders', label: 'Orders & Invoices', files: ['OrderModal.jsx'] },
  { id: 'users', label: 'User Management', files: ['UserManagement.jsx'] },
  { id: 'chat', label: 'Support Chat App', files: ['Chat.jsx'] },
  { id: 'calendar', label: 'Calendar Scheduler', files: ['CalendarApp.jsx'] },
  { id: 'maps', label: 'Maps Showcase', files: ['Maps.jsx', 'BubbleMaps.jsx'] },
  { id: 'ckeditor', label: 'CKEditor Text Format', files: ['CKEditor.jsx'] },
  { id: 'stepper', label: 'Multi-Step Stepper', files: ['Stepper.jsx'] },
  { id: 'accordion', label: 'Accordion List', files: ['Accordion.jsx'] },
  { id: 'grid', label: 'Responsive Grid', files: ['Grid.jsx'] },
  { id: 'typography', label: 'Typography Scale', files: ['Typography.jsx'] },
  { id: 'icons', label: 'Icon Gallery', files: ['IconGallery.jsx'] },
  { id: 'treegrid', label: 'Tree Grid Table', files: ['TreeGrid.jsx'] },
  { id: 'forms', label: 'Form Controls', files: ['FormInputs.jsx', 'FormLayouts.jsx', 'FormButtons.jsx'] },
  { id: 'auth', label: 'Authentication', files: ['Login.jsx', 'Register.jsx', 'ResetPassword.jsx'] },
  { id: 'settings', label: 'Settings', files: ['Settings.jsx'] }
];

console.log('===================================================');
console.log('📋 IN-DEPTH AUDIT OF ALL 17 MENU TABS & COMPONENTS');
console.log('===================================================\n');

let totalAudit = [];

menuTabs.forEach(tab => {
  let tabFindings = [];

  tab.files.forEach(fileName => {
    // Search recursively in sections or subdirectories
    let filePath = path.join(sectionsDir, fileName);
    if (!fs.existsSync(filePath)) {
      // Find recursively
      const findFile = (dir) => {
        const list = fs.readdirSync(dir);
        for (const file of list) {
          const full = path.join(dir, file);
          if (fs.statSync(full).isDirectory()) {
            const found = findFile(full);
            if (found) return found;
          } else if (file === fileName) {
            return full;
          }
        }
        return null;
      };
      filePath = findFile(sectionsDir) || filePath;
    }

    if (fs.existsSync(filePath)) {
      const code = fs.readFileSync(filePath, 'utf8');

      // Hardcoded indigo matches
      const indigoMatches = [...code.matchAll(/(bg-indigo-[0-9]+|text-indigo-[0-9]+|border-indigo-[0-9]+|focus:ring-indigo-[0-9]+)/g)];
      // Hardcoded blue primary matches
      const blueMatches = [...code.matchAll(/(bg-blue-[0-9]+|text-blue-[0-9]+|border-blue-[0-9]+|focus:ring-blue-[0-9]+)/g)];

      if (indigoMatches.length > 0 || blueMatches.length > 0) {
        tabFindings.push({
          file: fileName,
          indigoCount: indigoMatches.length,
          blueCount: blueMatches.length,
          indigoClasses: Array.from(new Set(indigoMatches.map(m => m[0]))),
          blueClasses: Array.from(new Set(blueMatches.map(m => m[0])))
        });
      }
    }
  });

  totalAudit.push({
    tabId: tab.id,
    label: tab.label,
    findings: tabFindings
  });
});

totalAudit.forEach(t => {
  console.log(`📌 Menu Tab: ${t.label} (ID: ${t.tabId})`);
  if (t.findings.length === 0) {
    console.log(`   ✅ 100% Fully Dynamic Theme Accents`);
  } else {
    t.findings.forEach(f => {
      console.log(`   ⚠️ Component: ${f.file}`);
      if (f.indigoCount > 0) console.log(`      - Indigo Hardcoded (${f.indigoCount}): ${f.indigoClasses.join(', ')}`);
      if (f.blueCount > 0) console.log(`      - Blue Hardcoded (${f.blueCount}): ${f.blueClasses.join(', ')}`);
    });
  }
  console.log('');
});
