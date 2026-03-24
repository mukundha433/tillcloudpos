import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      {/* Navbar */}
      <nav className="max-w-[1240px] mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-tight">TILLCLOUD</div>
        <div className="hidden md:flex items-center space-x-8 text-[15px] font-semibold text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">aeatures</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#support" className="hover:text-slate-900 transition-colors">Support</a>
        </div>
        <div className="flex items-center space-x-6 text-[15px] font-semibold">
          <a href="/login" className="text-slate-600 hover:text-slate-900 transition-colors">Login</a>
          <a href="/register" className="bg-[#0b1b3d] text-white px-6 py-2.5 rounded-full hover:bg-[#152a55] transition-all font-medium text-sm">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-[1240px] mx-auto px-6 pt-[72px] text-center">
        <h1 className="text-7xl md:text-[88px] font-black tracking-[-0.04em] mb-4 leading-[1.05]">
          <span className="text-[#091124]">Modern Billing for</span>
          <br />
          <span className="text-[#4fc3f7]">Australian Restaurants</span>
        </h1>
        
        <p className="mt-8 text-[20px] text-slate-500 max-w-3xl mx-auto font-medium">
          Manage orders, billing, kitchen and tables — all in one powerful system designed for the speed of modern hospitality.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center space-y-3 text-slate-500 text-[15px] font-medium">
          <div className="flex items-center space-x-3">
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
            <span>Trusted by 500+ restaurants</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
            <span>Setup in under 2 minutes</span>
          </div>
        </div>

        {/* Dashboard Mockup Image */}
        <div className="mt-20 relative mx-auto w-full group">
          <div className="absolute -inset-10 bg-black/5 blur-[100px] -z-10 rounded-[4rem]"></div>
          
          <div className="rounded-[2.5rem] shadow-[0_35px_100px_-15px_rgba(0,0,0,0.15)] overflow-hidden bg-white p-3 border border-slate-100/60 max-w-[1100px] mx-auto">
            <div className="rounded-[2rem] overflow-hidden border border-slate-200/50 relative bg-[#fafafa] flex flex-col" style={{height: '620px'}}>
              
              {/* Mockup Header */}
              <div className="h-[68px] bg-white border-b border-slate-200/80 flex items-center px-4 shrink-0 shadow-sm z-10">
                <div className="flex items-center justify-center w-[72px] h-full border-r border-slate-200/80 mr-4 shrink-0">
                  <div className="w-9 h-9 rounded-[10px] border-[2.5px] border-[#4fc3f7] flex items-center justify-center text-[#4fc3f7] text-sm font-bold">☁</div>
                </div>
                
                <div className="flex-1 flex items-center justify-between pl-2 pr-2">
                   <div className="flex items-center space-x-4">
                      <button className="bg-[#0b1b3d] text-white px-4 py-2 rounded-[8px] text-[13px] font-semibold flex items-center tracking-wide shadow-sm">
                        <span className="mr-2 text-lg leading-none mt-[-2px]">+</span> New Order
                      </button>
                      <div className="relative">
                        <input type="text" placeholder="Table, Guest, Order ID..." className="pl-9 pr-4 py-2 bg-[#f8fafc] border border-slate-200/80 rounded-[8px] text-[13px] w-[280px] focus:outline-none font-medium text-slate-500 shadow-sm" />
                        <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm opacity-70">🔍</span>
                      </div>
                   </div>
                   
                   <div className="flex items-center bg-[#f8fafc] px-3 py-1.5 rounded-xl border border-slate-200/60 shadow-sm">
                      <div className="mr-3 text-right">
                         <div className="text-[8px] text-slate-400 font-bold uppercase tracking-[0.15em] mb-0.5">Floor Manager</div>
                         <div className="text-[12px] font-bold text-[#091124]">Alexander Wright</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center">
                        <span className="text-[14px] opacity-20">👤</span>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Mockup Body */}
              <div className="flex flex-1 overflow-hidden">
                 
                 {/* Sidebar */}
                 <div className="w-[88px] bg-white border-r border-slate-200/80 flex flex-col items-center py-6 space-y-4 shrink-0 z-10">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#f0f9ff] text-[#4fc3f7] rounded-[14px] text-xl font-bold cursor-pointer">⊞</div>
                    <div className="w-12 h-12 flex items-center justify-center hover:bg-slate-50 text-slate-400 rounded-[14px] text-xl cursor-pointer">🍴</div>
                    <div className="w-12 h-12 flex items-center justify-center hover:bg-slate-50 text-slate-400 rounded-[14px] text-xl cursor-pointer">🧾</div>
                    <div className="w-12 h-12 flex items-center justify-center hover:bg-slate-50 text-slate-400 rounded-[14px] text-xl cursor-pointer">📦</div>
                    <div className="flex-1"></div>
                    <div className="w-12 h-12 flex items-center justify-center hover:bg-slate-50 text-slate-400 rounded-[14px] text-xl cursor-pointer">📈</div>
                    <div className="w-12 h-12 flex items-center justify-center hover:bg-slate-50 text-slate-400 rounded-[14px] text-xl cursor-pointer">⚙</div>
                 </div>

                 {/* Main Content Area */}
                 <div className="flex-1 p-[32px] bg-white overflow-hidden flex flex-col relative">
                    
                    {/* Top Bar inside content */}
                    <div className="flex justify-between items-center mb-8 shrink-0">
                       <div className="flex items-center space-x-3">
                          <h2 className="text-[22px] font-extrabold text-[#091124] tracking-tight">Table Management</h2>
                          <span className="px-2.5 py-1 bg-slate-100/80 border border-slate-200/50 text-slate-600 text-[9px] font-black tracking-widest rounded-md uppercase">Live View</span>
                       </div>
                       
                       <div className="flex border border-slate-200/80 rounded-lg overflow-hidden text-[13px] font-bold shadow-sm">
                          <button className="px-[18px] py-[9px] bg-white text-slate-600 hover:bg-slate-50">Takeaway</button>
                          <button className="px-[18px] py-[9px] bg-[#0b1b3d] text-white">Dine-in</button>
                          <button className="px-[18px] py-[9px] bg-white text-slate-600 hover:bg-slate-50 border-l border-slate-100">Delivery</button>
                       </div>
                    </div>

                    {/* Stats Legend */}
                    <div className="flex items-center space-x-5 mb-[30px] shrink-0">
                       <div className="flex items-center space-x-2.5 border border-slate-100 px-3.5 py-1.5 rounded-full bg-slate-50/50">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
                          <span className="text-[10px] font-bold text-slate-500 tracking-[0.05em] uppercase">Available (12)</span>
                       </div>
                       <div className="flex items-center space-x-2.5 border border-slate-100 px-3.5 py-1.5 rounded-full bg-slate-50/50">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                          <span className="text-[10px] font-bold text-slate-500 tracking-[0.05em] uppercase">Occupied (08)</span>
                       </div>
                       <div className="flex items-center space-x-2.5 border border-slate-100 px-3.5 py-1.5 rounded-full bg-slate-50/50">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]"></span>
                          <span className="text-[10px] font-bold text-slate-500 tracking-[0.05em] uppercase">Pending KOT (03)</span>
                       </div>
                       <div className="flex items-center space-x-2.5 border border-slate-100 px-3.5 py-1.5 rounded-full bg-slate-50/50">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#334155]"></span>
                          <span className="text-[10px] font-bold text-slate-500 tracking-[0.05em] uppercase">Paid Bill (02)</span>
                       </div>
                       <div className="flex items-center space-x-2.5 border border-red-200 px-3.5 py-1.5 rounded-full bg-red-50/50 ring-1 ring-red-500/10">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
                          <span className="text-[10px] font-bold text-red-500 tracking-[0.05em] uppercase">Selected</span>
                       </div>
                    </div>

                    {/* Tables Grid */}
                    <div className="flex-1 overflow-hidden relative pb-10">
                      <div className="text-[10px] font-black text-slate-400 tracking-[0.15em] uppercase mb-4">Main Floor (AC)</div>
                      
                      <div className="grid grid-cols-8 gap-[14px] mb-8">
                         {/* AC1...AC3, AC5, AC8 are Ready/Available */}
                         {['AC1', 'AC2', 'AC3'].map(id => (
                           <div key={id} className="h-[110px] rounded-xl bg-[#ecfdf5] flex flex-col overflow-hidden ring-1 ring-[#a7f3d0] shadow-sm">
                              <div className="h-2.5 bg-[#10b981] w-full shrink-0"></div>
                              <div className="flex flex-col items-center justify-center flex-1 pb-1">
                                 <div className="text-[20px] font-extrabold text-[#064e3b]">{id}</div>
                                 <div className="text-[9px] font-bold text-[#10b981] uppercase tracking-[0.1em] mt-2">Ready</div>
                              </div>
                           </div>
                         ))}
                         
                         {/* AC4 -> Pending KOT */}
                         <div className="h-[110px] rounded-xl bg-[#fffbeb] flex flex-col overflow-hidden ring-1 ring-[#fde68a] shadow-sm">
                            <div className="h-2.5 bg-[#fbbf24] w-full shrink-0"></div>
                            <div className="flex flex-col items-center justify-center flex-1 pb-1">
                               <div className="text-[20px] font-extrabold text-[#b45309]">AC4</div>
                               <div className="text-[9px] font-bold text-[#f59e0b] uppercase tracking-[0.1em] mt-2">New KOT</div>
                            </div>
                         </div>
                         
                         {/* AC5 */}
                         <div className="h-[110px] rounded-xl bg-[#ecfdf5] flex flex-col overflow-hidden ring-1 ring-[#a7f3d0] shadow-sm">
                            <div className="h-2.5 bg-[#10b981] w-full shrink-0"></div>
                            <div className="flex flex-col items-center justify-center flex-1 pb-1">
                               <div className="text-[20px] font-extrabold text-[#064e3b]">AC5</div>
                               <div className="text-[9px] font-bold text-[#10b981] uppercase tracking-[0.1em] mt-2">Ready</div>
                            </div>
                         </div>

                         {/* AC6 -> Paid / Printed */}
                         <div className="h-[110px] rounded-xl bg-slate-50 flex flex-col overflow-hidden ring-1 ring-slate-200 shadow-sm opacity-90">
                            <div className="h-2.5 bg-[#334155] w-full shrink-0"></div>
                            <div className="flex flex-col items-center justify-center flex-1 pb-1">
                               <div className="text-[20px] font-extrabold text-[#334155]">AC6</div>
                               <div className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.1em] mt-2">Printed</div>
                            </div>
                         </div>
                         
                         {/* AC7 -> Occupied */}
                         <div className="h-[110px] rounded-xl bg-slate-50 flex flex-col overflow-hidden ring-1 ring-slate-200 shadow-sm">
                            <div className="h-2.5 bg-slate-400 w-full shrink-0"></div>
                            <div className="flex flex-col items-center justify-center flex-1 pb-1">
                               <div className="text-[20px] font-extrabold text-[#334155]">AC7</div>
                               <div className="text-[9px] font-bold text-slate-500 tracking-[0.1em] mt-2">01:10:45</div>
                            </div>
                         </div>
                         
                         {/* AC8 */}
                         <div className="h-[110px] rounded-xl bg-[#ecfdf5] flex flex-col overflow-hidden ring-1 ring-[#a7f3d0] shadow-sm">
                            <div className="h-2.5 bg-[#10b981] w-full shrink-0"></div>
                            <div className="flex flex-col items-center justify-center flex-1 pb-1">
                               <div className="text-[20px] font-extrabold text-[#064e3b]">AC8</div>
                               <div className="text-[9px] font-bold text-[#10b981] uppercase tracking-[0.1em] mt-2">Ready</div>
                            </div>
                         </div>
                      </div>

                      <div className="text-[10px] font-black text-slate-400 tracking-[0.15em] uppercase mb-4 mt-8">Garden Terrace</div>
                      <div className="grid grid-cols-8 gap-[14px]">
                          <div className="h-[110px] rounded-xl bg-[#ecfdf5] flex flex-col overflow-hidden ring-1 ring-[#a7f3d0] shadow-sm">
                            <div className="h-2.5 bg-[#10b981] w-full shrink-0"></div>
                            <div className="flex flex-col items-center justify-center flex-1 pb-1">
                               <div className="text-[20px] font-extrabold text-[#064e3b]">G2</div>
                               <div className="text-[9px] font-bold text-[#10b981] uppercase tracking-[0.1em] mt-2">Ready</div>
                            </div>
                         </div>
                         <div className="h-[110px] rounded-xl bg-slate-50 flex flex-col overflow-hidden ring-1 ring-slate-200 shadow-sm">
                            <div className="h-2.5 bg-slate-400 w-full shrink-0"></div>
                            <div className="flex flex-col items-center justify-center flex-1 pb-1">
                               <div className="text-[20px] font-extrabold text-slate-300">...</div>
                            </div>
                         </div>
                         <div className="h-[110px] rounded-xl bg-white flex flex-col overflow-hidden shadow-md ring-2 ring-red-500 ring-offset-2 ring-offset-white relative z-10 scale-[1.03]">
                            <div className="h-2.5 bg-red-500 w-full shrink-0"></div>
                            <div className="flex flex-col items-center justify-center flex-1 pb-1 bg-white">
                               <div className="text-[20px] font-extrabold text-[#091124]">G4</div>
                               <div className="text-[9px] font-bold text-red-500 uppercase tracking-[0.1em] mt-2">Selecting</div>
                            </div>
                         </div>
                         <div className="h-[110px] rounded-xl bg-[#ecfdf5] flex flex-col overflow-hidden ring-1 ring-[#a7f3d0] shadow-sm">
                            <div className="h-2.5 bg-[#10b981] w-full shrink-0"></div>
                            <div className="flex flex-col items-center justify-center flex-1 pb-1">
                               <div className="text-[20px] font-extrabold text-[#064e3b]">G5</div>
                               <div className="text-[9px] font-bold text-[#10b981] uppercase tracking-[0.1em] mt-2">Ready</div>
                            </div>
                         </div>
                      </div>
                      
                      {/* Gradient cutoff at bottom exactly like image mockup */}
                      <div className="absolute -bottom-8 left-0 w-[calc(100%+64px)] -ml-8 h-40 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none z-20"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
