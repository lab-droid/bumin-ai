/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  LayoutGrid, 
  TrendingUp, 
  Settings, 
  Users, 
  FileText, 
  ExternalLink, 
  Info, 
  Beef, 
  Activity, 
  Thermometer, 
  BarChart3,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  { id: 'all', label: '전체', icon: <LayoutGrid size={18} /> },
  { id: 'marketing', label: '마케팅', icon: <TrendingUp size={18} /> },
  { id: 'sales', label: '영업', icon: <Users size={18} /> },
  { id: 'management', label: '경영', icon: <BarChart3 size={18} /> },
];

const dashboardItems = [
  {
    id: 1,
    category: 'marketing',
    title: '혁신 블로그 AI',
    description: '최신 축산 트렌드와 기술 혁신 소식을 AI가 분석하여 제공하는 블로그 서비스입니다.',
    icon: <FileText className="text-yellow-500" size={32} />,
    link: 'https://hyeoksinblog.fragrant-flower-7056.workers.dev'
  },
  {
    id: 2,
    category: 'marketing',
    title: '혁신 상세페이지 AI',
    description: '축산물 판매를 위한 최적화된 상세페이지를 AI가 자동으로 생성해주는 서비스입니다.',
    icon: <FileText className="text-yellow-500" size={32} />,
    link: 'https://hyeoksin-sangsepage.fragrant-flower-7056.workers.dev'
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = dashboardItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Beef className="text-black" size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight leading-none">부민축산 AI</h1>
              <p className="text-[10px] text-yellow-500 font-medium tracking-[0.2em] uppercase mt-1">Bumin Livestock AI</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">홈</a>
            <a href="#" className="hover:text-white transition-colors">FQA</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white transition-all">
              <Info size={14} className="text-yellow-500" />
              <span>사용방법</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-medium">
              <Users size={14} className="text-yellow-500" />
              <span>개발자 : 정혁신</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative h-[400px] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          {/* Background Gradient/Image Placeholder */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent"></div>
            <img 
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2000&auto=format&fit=crop" 
              alt="Hanwoo Cattle" 
              className="w-full h-full object-cover grayscale brightness-50"
              referrerPolicy="no-referrer"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-bold tracking-widest uppercase mb-6">
              <TrendingUp size={12} />
              Bumin AI Dashboard
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              축산업의 미래, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-yellow-500">
                부민축산 AI
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              부민축산 AI를 활용해서 생산성과 효율성의 한계를 뛰어넘으세요. <br className="hidden md:block" />
              부민축산 임직원분들의 업무 생산성과 효율성을 극대화시킬겁니다.
            </p>
          </motion.div>
        </section>

        {/* Search & Filter Section */}
        <section className="max-w-5xl mx-auto px-6 -mt-12 relative z-20">
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 shadow-2xl shadow-black/50">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="text" 
                  placeholder="검색어를 입력하세요..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-yellow-500/50 transition-colors"
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                      activeCategory === cat.id 
                        ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' 
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {cat.icon}
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Grid Section */}
        <section className="max-w-7xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all hover:shadow-2xl hover:shadow-yellow-500/5"
                >
                  <div className="p-8 flex flex-col h-full">
                    <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 group-hover:bg-yellow-500/10 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-yellow-500 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      {item.description}
                    </p>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all group/btn"
                    >
                      <ExternalLink size={14} className="text-yellow-500" />
                      <span>바로가기</span>
                      <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex p-6 rounded-full bg-white/5 mb-4">
                <Search size={40} className="text-gray-600" />
              </div>
              <p className="text-gray-500">검색 결과가 없습니다.</p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-[10px] text-gray-500 font-medium tracking-wider uppercase">
            <span>© 2026 부민축산 AI 대시보드. All rights reserved.</span>
            <span className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></span>
            <span>개발자: 정혁신</span>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] text-gray-400 font-bold hover:text-white transition-all uppercase tracking-widest"
          >
            <HelpCircle size={14} className="text-yellow-500" />
            오류/유지보수 문의
          </button>
        </div>
      </footer>

      {/* Maintenance Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#121212] border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <HelpCircle size={32} className="text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">오류 및 유지보수 문의</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  업데이트나 유지보수가 필요할 경우 아래 이메일로 <br />
                  어떤 부분이 필요한지 상세하게 작성 후 보내주세요.
                </p>
                <div className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 mb-8">
                  <p className="text-yellow-500 font-mono font-bold text-lg">info@nextin.ai.kr</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-4 rounded-2xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors"
                >
                  확인
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
