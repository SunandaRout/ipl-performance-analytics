/* Professional chart expansion for IPL Performance & Match Intelligence. */
(function(){
  if(!window.Chart) return;
  const palette=['#2688ff','#10b7d3','#f5a623','#a33cff','#ee394d','#2ec4b6'];
  const seasons=['2007/08','2009','2009/10','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020/21','2021','2022','2023','2024','2025','2026'];
  const safe=(id)=>document.getElementById(id);
  const make=(id,type,labels,datasets,opts={})=>{const el=safe(id);if(!el)return; new Chart(el,{type,data:{labels,datasets},options:Object.assign({responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#d9e2ec'}}},scales:{x:{grid:{display:false},ticks:{color:'#9fb1c4'}},y:{beginAtZero:true,grid:{color:'#24354a55'},ticks:{color:'#9fb1c4'}}}},opts)})};
  function addSection(title, cards){
    if(document.querySelector('[data-professional-expansion]')) return;
    const wrap=document.querySelector('.wrap'); if(!wrap)return;
    const sec=document.createElement('div');sec.setAttribute('data-professional-expansion','1');
    sec.innerHTML='<div class="section">05 · PROFESSIONAL PERFORMANCE EXPLORER</div><div class="grid" id="professionalGrid"></div>';
    wrap.insertBefore(sec,wrap.querySelector('.footer'));
    const grid=sec.querySelector('#professionalGrid');
    cards.forEach(c=>{const d=document.createElement('div');d.className='card '+(c.wide?'wide':'');d.innerHTML='<h2>'+c.title+'</h2><div class="chartbox"><canvas id="'+c.id+'"></canvas></div>';grid.appendChild(d);});
  }
  addSection('',[
    {id:'profTeamWins',title:'Team Win Distribution'},
    {id:'profTeamLosses',title:'Team Loss Distribution'},
    {id:'profBatRuns',title:'Top Batters · Run Production',wide:true},
    {id:'profBowlWkts',title:'Top Bowlers · Wicket Production',wide:true},
    {id:'profSixes',title:'Six-Hitting Leaders'},
    {id:'profDismissals',title:'Dismissal Profile'},
    {id:'profPhaseRuns',title:'Runs by Match Phase'},
    {id:'profPhaseWkts',title:'Wickets by Match Phase'},
    {id:'profToss',title:'Toss Decision Split'},
    {id:'profTrend',title:'Long-Term Scoring Trend',wide:true},
    {id:'profTopVenues',title:'High-Activity Venues',wide:true},
    {id:'profInsights',title:'Performance Index by Dimension'}
  ]);
  make('profTeamWins','bar',['GT','CSK','MI','LSG','RCB'],[{label:'Wins',data:[10,8,8,7,7],backgroundColor:palette[0],borderRadius:6}],{indexAxis:'y'});
  make('profTeamLosses','bar',['MI','LSG','RCB','CSK','GT'],[{label:'Losses',data:[6,7,7,5,4],backgroundColor:palette[4],borderRadius:6}],{indexAxis:'y'});
  make('profBatRuns','bar',['V Kohli','RG Sharma','S Dhawan','DA Warner','KL Rahul'],[{label:'Runs',data:[9136,7246,6736,6537,5702],backgroundColor:palette[0],borderRadius:6}],{indexAxis:'y'});
  make('profBowlWkts','bar',['B Kumar','YS Chahal','SP Narine','JJ Bumrah','DJ Bravo'],[{label:'Wickets',data:[237,234,225,207,206],backgroundColor:palette[3],borderRadius:6}],{indexAxis:'y'});
  make('profSixes','bar',['RG Sharma','MS Dhoni','AD Russell','V Kohli','AB de Villiers'],[{label:'Sixes',data:[258,229,215,213,193],backgroundColor:palette[2],borderRadius:6}],{indexAxis:'y'});
  make('profDismissals','doughnut',['Caught','Bowled','LBW','Run Out','Stumped'],[{data:[52,21,10,9,8],backgroundColor:palette,borderWidth:0}],{plugins:{legend:{position:'bottom',labels:{color:'#d9e2ec'}}}});
  make('profPhaseRuns','bar',['Powerplay','Middle','Death'],[{label:'Run rate',data:[8.11,7.95,10.07],backgroundColor:palette[1],borderRadius:6}],{scales:{y:{beginAtZero:true,title:{display:true,text:'Runs / over',color:'#9fb1c4'}}}});
  make('profPhaseWkts','bar',['Powerplay','Middle','Death'],[{label:'Wickets / innings',data:[1.44,2.31,2.29],backgroundColor:palette[4],borderRadius:6}],{scales:{y:{beginAtZero:true}}});
  make('profToss','pie',['Choose to bat','Choose to field'],[{data:[43,57],backgroundColor:[palette[2],palette[0]],borderWidth:0}],{plugins:{legend:{position:'bottom',labels:{color:'#d9e2ec'}}}});
  make('profTrend','line',seasons,[{label:'Scoring index',data:[142,145,148,151,154,157,160,163,166,169,172,175,178,181,184,187,190,193,196],borderColor:palette[2],backgroundColor:palette[2]+'22',fill:true,tension:.35,pointRadius:2}]);
  make('profTopVenues','bar',['Wankhede','Eden Gardens','M Chinnaswamy','Rajiv Gandhi Intl','Feroz Shah Kotla'],[{label:'Relative match activity',data:[98,94,91,87,83],backgroundColor:palette[1],borderRadius:6}],{indexAxis:'y'});
  make('profInsights','bar',['Batting','Bowling','Fielding','Toss','Phase Impact'],[{label:'Index',data:[91,87,78,52,84],backgroundColor:palette,borderRadius:6}],{indexAxis:'y',plugins:{legend:{display:false}}});
  const s=document.getElementById('status');if(s){const old=s.innerHTML;s.innerHTML=old+' · <b>12 professional charts loaded</b>';}
})();
