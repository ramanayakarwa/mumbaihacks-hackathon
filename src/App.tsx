import { useState, useEffect } from 'react';
import {
  Activity,
  Users,
  Package,
  Bell,
  TrendingUp,
  Calendar,
  Wind,
  AlertTriangle,
  ChevronDown,
  Menu,
  X,
  Download,
  Play,
  CheckCircle,
  BarChart3,
  MessageSquare,
  Github,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const forecastData = [
  { date: 'Oct 15', baseline: 420, predicted: 425, confidence: { low: 400, high: 450 } },
  { date: 'Oct 16', baseline: 435, predicted: 460, confidence: { low: 440, high: 480 } },
  { date: 'Oct 17', baseline: 440, predicted: 520, confidence: { low: 500, high: 540 } },
  { date: 'Oct 18', baseline: 430, predicted: 680, confidence: { low: 650, high: 710 } },
  { date: 'Oct 19', baseline: 425, predicted: 750, confidence: { low: 720, high: 780 } },
  { date: 'Oct 20', baseline: 420, predicted: 820, confidence: { low: 790, high: 850 } },
  { date: 'Oct 21', baseline: 415, predicted: 720, confidence: { low: 690, high: 750 } },
];

const supplyData = [
  { item: 'PPE Kits', current: 850, needed: 1200, critical: 600 },
  { item: 'Oxygen', current: 420, needed: 680, critical: 300 },
  { item: 'Beds', current: 230, needed: 340, critical: 150 },
  { item: 'Ventilators', current: 45, needed: 62, critical: 30 },
];

const mapData = [
  { city: 'Mumbai', state: 'Maharashtra', lat: 19.076, lng: 72.877, surge: 78, staff: '+24' },
  { city: 'Delhi', state: 'Delhi', lat: 28.704, lng: 77.102, surge: 92, staff: '+35' },
  { city: 'Bangalore', state: 'Karnataka', lat: 12.972, lng: 77.594, surge: 45, staff: '+12' },
  { city: 'Kolkata', state: 'West Bengal', lat: 22.572, lng: 88.363, surge: 65, staff: '+18' },
  { city: 'Chennai', state: 'Tamil Nadu', lat: 13.082, lng: 80.270, surge: 55, staff: '+15' },
  { city: 'Hyderabad', state: 'Telangana', lat: 17.385, lng: 78.486, surge: 38, staff: '+8' },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeScenario, setActiveScenario] = useState('diwali');
  const [intensitySlider, setIntensitySlider] = useState(50);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
        } else {
          header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header
        id="header"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900">SurgeCare</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-slate-700 hover:text-teal-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-slate-700 hover:text-teal-600 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('dashboard')}
                className="text-slate-700 hover:text-teal-600 transition-colors"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-slate-700 hover:text-teal-600 transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all transform hover:scale-105"
              >
                Request Demo
              </button>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-teal-50 rounded-lg"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-teal-50 rounded-lg"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('dashboard')}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-teal-50 rounded-lg"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-teal-50 rounded-lg"
              >
                How It Works
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="block w-full px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <CheckCircle className="w-4 h-4 text-teal-400" />
                  <span className="text-sm">Trusted by tertiary hospitals & municipal health departments</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Predict hospital surges.
                  <span className="block text-teal-400">Staff smarter. Save lives.</span>
                </h1>

                <p className="text-xl text-slate-300 leading-relaxed">
                  AI-driven forecasts and automated recommendations for staffing, supplies, and patient advisories during festivals, pollution spikes, and epidemics.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setShowModal(true)}
                    className="px-8 py-4 bg-teal-600 text-white rounded-2xl font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Request Demo</span>
                  </button>
                  <button
                    onClick={() => scrollToSection('dashboard')}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center space-x-2"
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span>Explore Dashboard</span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-teal-400">92%</div>
                    <div className="text-sm text-slate-400">Forecast Accuracy</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-teal-400">35%</div>
                    <div className="text-sm text-slate-400">Wait Time Reduction</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-teal-400">14d</div>
                    <div className="text-sm text-slate-400">Advance Warning</div>
                  </div>
                </div>
              </div>

              <div className="relative animate-slide-in">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Live Forecast</h3>
                      <div className="flex items-center space-x-2 text-sm bg-amber-500/20 px-3 py-1 rounded-full">
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        <span>High Alert</span>
                      </div>
                    </div>

                    <div className="h-48 bg-slate-900/50 rounded-xl p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={forecastData.slice(0, 5)}>
                          <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#0EA5A9" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="#0EA5A9" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="predicted"
                            stroke="#0EA5A9"
                            strokeWidth={2}
                            fill="url(#gradient)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-900/50 rounded-xl p-4">
                        <div className="text-sm text-slate-400">Next 24h Surge</div>
                        <div className="text-2xl font-bold text-teal-400">+78%</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-xl p-4">
                        <div className="text-sm text-slate-400">Staff Needed</div>
                        <div className="text-2xl font-bold text-amber-400">+24</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">The Problem</h3>
                <p className="text-slate-600">
                  Overcrowding and supply shortages during festivals, pollution spikes, and epidemics lead to preventable deaths and overwhelmed staff.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Approach</h3>
                <p className="text-slate-600">
                  Data fusion: festival calendars, air quality indices, historical admissions, and social signals power event-aware predictive models.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">The Impact</h3>
                <p className="text-slate-600">
                  35% reduction in wait times, optimized rosters, automated supply reorders, and proactive patient advisories in regional languages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="dashboard" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Live Predictive Dashboard</h2>
              <p className="text-xl text-slate-600">
                Interactive forecasts, scenario simulation, and actionable recommendations
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-1 space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 text-slate-900">Scenario Controls</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">Event Type</label>
                      <select
                        value={activeScenario}
                        onChange={(e) => setActiveScenario(e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="diwali">Diwali Festival</option>
                        <option value="holi">Holi Festival</option>
                        <option value="pollution">Severe Pollution</option>
                        <option value="epidemic">Epidemic Outbreak</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Intensity: {intensitySlider}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={intensitySlider}
                        onChange={(e) => setIntensitySlider(Number(e.target.value))}
                        className="w-full accent-teal-600"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-slate-600">Date Range</span>
                      <select className="px-3 py-1 border border-slate-300 rounded-lg text-sm">
                        <option>Next 7 days</option>
                        <option>Next 14 days</option>
                        <option>Next 30 days</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 text-slate-900">India Heatmap</h3>
                  <div className="relative h-64 bg-slate-100 rounded-xl overflow-hidden">
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                      {mapData.map((city, idx) => {
                        const x = (city.lng - 68) * 4.5;
                        const y = 400 - (city.lat - 8) * 12;
                        const radius = 8 + (city.surge / 10);
                        const color =
                          city.surge > 70 ? '#EF4444' : city.surge > 50 ? '#F59E0B' : '#0EA5A9';

                        return (
                          <g
                            key={idx}
                            onMouseEnter={() => setHoveredCity(city.city)}
                            onMouseLeave={() => setHoveredCity(null)}
                            className="cursor-pointer"
                          >
                            <circle
                              cx={x}
                              cy={y}
                              r={radius}
                              fill={color}
                              opacity="0.7"
                              className="transition-all hover:opacity-100"
                            />
                            <circle
                              cx={x}
                              cy={y}
                              r={radius + 4}
                              fill="none"
                              stroke={color}
                              strokeWidth="2"
                              opacity="0.3"
                              className="animate-pulse"
                            />
                          </g>
                        );
                      })}
                    </svg>

                    {hoveredCity && (
                      <div className="absolute top-4 left-4 bg-white rounded-xl p-3 shadow-lg border border-slate-200 text-sm">
                        {mapData
                          .filter((c) => c.city === hoveredCity)
                          .map((city, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="font-semibold text-slate-900">{city.city}</div>
                              <div className="text-slate-600">Surge: +{city.surge}%</div>
                              <div className="text-teal-600 font-medium">Staff: {city.staff}</div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-900">7-Day Admission Forecast</h3>
                    <button className="text-sm text-teal-600 hover:text-teal-700 flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>Export</span>
                    </button>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={forecastData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="date" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '12px',
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="baseline"
                        stroke="#94a3b8"
                        strokeWidth={2}
                        name="Baseline"
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="predicted"
                        stroke="#0EA5A9"
                        strokeWidth={3}
                        name="AI Forecast"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 text-slate-900">Supply Requirements</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={supplyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="item" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '12px',
                        }}
                      />
                      <Legend />
                      <Bar dataKey="current" fill="#94a3b8" name="Current Stock" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="needed" fill="#0EA5A9" name="Required" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="critical" fill="#EF4444" name="Critical Level" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white">
                    <Users className="w-8 h-8 mb-3 opacity-80" />
                    <div className="text-sm opacity-90 mb-1">Recommended Staff</div>
                    <div className="text-3xl font-bold">+24 Nurses</div>
                    <div className="text-sm opacity-75 mt-1">2 shifts, 12h each</div>
                    <button className="mt-4 w-full bg-white text-teal-600 px-4 py-2 rounded-xl font-semibold hover:bg-teal-50 transition-colors">
                      Apply
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white">
                    <Package className="w-8 h-8 mb-3 opacity-80" />
                    <div className="text-sm opacity-90 mb-1">Supply Order</div>
                    <div className="text-3xl font-bold">200 O₂</div>
                    <div className="text-sm opacity-75 mt-1">Cylinders needed</div>
                    <button className="mt-4 w-full bg-white text-amber-600 px-4 py-2 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
                      Auto-Order
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white">
                    <Bell className="w-8 h-8 mb-3 opacity-80" />
                    <div className="text-sm opacity-90 mb-1">Patient Advisory</div>
                    <div className="text-lg font-bold">Pollution Alert</div>
                    <div className="text-sm opacity-75 mt-1">Send to 12k patients</div>
                    <button className="mt-4 w-full bg-white text-red-600 px-4 py-2 rounded-xl font-semibold hover:bg-red-50 transition-colors">
                      Send SMS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Platform Features</h2>
              <p className="text-xl text-slate-600">
                Everything you need to stay ahead of patient surges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Predictive Forecasting</h3>
                <p className="text-slate-600 leading-relaxed">
                  Anticipate patient volumes up to 14 days out with event-aware models trained on festivals, air quality, and seasonal patterns.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Staffing Optimizer</h3>
                <p className="text-slate-600 leading-relaxed">
                  Create minimum-cost rosters that meet predicted demand and labor rules. Automatic shift scheduling with overtime minimization.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <Package className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Supply Chain Planner</h3>
                <p className="text-slate-600 leading-relaxed">
                  Auto-trigger reorders and buffer stock for critical supplies. Integrated supplier contact and purchase order generation.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Patient Advisories</h3>
                <p className="text-slate-600 leading-relaxed">
                  Automated SMS and push notification templates in regional languages. Proactive health guidance during high-risk periods.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Bell className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Alerts & Escalation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Threshold notifications by channel: SMS, email, WhatsApp. Configurable escalation paths for critical capacity breaches.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Analytics & Reporting</h3>
                <p className="text-slate-600 leading-relaxed">
                  Export CSV and PDF reports. Audit logs, historical performance tracking, and automated weekly summaries for stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">How SurgeCare Works</h2>
              <p className="text-xl text-slate-600">
                Three simple steps to smarter hospital operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Ingest Data</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Connect hospital EHR systems, public festival calendars, AQI feeds, weather APIs, and social media signals.
                  </p>
                  <div className="space-y-2 text-sm text-slate-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                      <span>OpenMRS / HealthPlix integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                      <span>Real-time AQI and weather data</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                      <span>Government event calendars</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-teal-200"></div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Forecast & Recommend</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    AI scenarios analyze constraints and generate optimal staffing, supply, and advisory recommendations.
                  </p>
                  <div className="space-y-2 text-sm text-slate-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      <span>14-day admission predictions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      <span>Constraint-aware optimization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      <span>Confidence intervals included</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-200"></div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Execute</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Apply roster changes, trigger supply orders, and send patient advisories — all with one click.
                </p>
                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    <span>Automated shift scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    <span>Supplier purchase orders</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    <span>Multi-language SMS advisories</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Integrations & Data Sources</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Hospital EHR</div>
                    <div className="text-xs text-slate-500">OpenMRS, HealthPlix</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Festival Calendar</div>
                    <div className="text-xs text-slate-500">Government APIs</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Wind className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Air Quality</div>
                    <div className="text-xs text-slate-500">AirNow, AQI APIs</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Messaging</div>
                    <div className="text-xs text-slate-500">WhatsApp, SMS APIs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Hospital Operations?</h2>
            <p className="text-xl text-teal-100 mb-8">
              Join leading hospitals using AI to predict surges and save lives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="px-8 py-4 bg-white text-teal-600 rounded-2xl font-semibold hover:bg-teal-50 transition-all transform hover:scale-105 shadow-xl"
              >
                Request Demo
              </button>
              <button
                onClick={() => scrollToSection('dashboard')}
                className="px-8 py-4 bg-teal-500 text-white rounded-2xl font-semibold hover:bg-teal-400 transition-all border-2 border-white/30"
              >
                Explore Dashboard
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">SurgeCare</span>
              </div>
              <p className="text-slate-400 text-sm">
                AI-powered surge prediction for smarter hospital operations
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <button onClick={() => scrollToSection('features')} className="hover:text-teal-400 transition-colors">
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('dashboard')} className="hover:text-teal-400 transition-colors">
                    Demo
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('how-it-works')} className="hover:text-teal-400 transition-colors">
                    How It Works
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center space-x-2">
                  <Github className="w-4 h-4" />
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="mailto:demo@surgecare.ai" className="hover:text-teal-400 transition-colors">
                    demo@surgecare.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>Built for healthcare. Powered by AI. Made in India.</p>
            <p className="mt-2">© 2025 SurgeCare. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative animate-scale-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Demo</h3>
            <p className="text-slate-600 mb-6">
              See SurgeCare in action. We'll schedule a personalized demo for your hospital.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Hospital Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="City General Hospital"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Dr. Sharma"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="you@hospital.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Role</label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>Hospital Administrator</option>
                  <option>Chief Medical Officer</option>
                  <option>Supply Chain Manager</option>
                  <option>IT Director</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-all transform hover:scale-105"
              >
                Schedule Demo
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
