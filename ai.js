const pick=a=>a[Math.floor(Math.random()*a.length)];
const AI={
 generateQuestion(type,used=[]){const p=IQ[type].filter(x=>!used.includes(x[0]));return pick(p.length?p:IQ[type])},
 evaluateAnswer(ans,kw){const w=ans.trim().split(/\s+/).filter(Boolean).length,keys=kw.split(' '),hit=keys.filter(k=>ans.toLowerCase().includes(k)),miss=keys.filter(k=>!hit.includes(k));
  const rel=Math.min(100,30+hit.length*(70/keys.length)),comp=Math.min(100,w*4),cor=Math.round((rel+comp)/2),score=Math.round((rel+comp+cor)/3);
  return{score,rel:Math.round(rel),comp:Math.round(comp),cor,strengths:hit.length?'Covered: '+hit.join(', '):'Clear attempt made',missing:miss.join(', ')||'None',tip:w<25?'Add more detail and a concrete example.':pick(['Structure your answer with situation, action, result.','Mention trade-offs and complexity.','Great depth; add a real project example.'])}},
 generateFollowUp(ev){return ev.score>70?pick(['Good. How would you apply this in a real project?','Can you explain the trade-offs?']):pick(['Can you elaborate with an example?','What core concept would you add?'])},
 generateRecommendation(weak,goal){return weak.length?weak.slice(0,3).map(t=>'Practice '+t):['Take a mock test','Try an AI interview for '+(goal||'your goal')]},
 generateSummary(scores){const a=scores.length?Math.round(scores.reduce((x,y)=>x+y,0)/scores.length):0;return a+'% average. '+(a>75?'Strong performance, keep it up.':'Focus on the weaker areas.')},
 chatWithAI(m){m=m.toLowerCase();
  if(m.includes('closure'))return'A closure is a function that remembers variables from its outer scope even after the outer function has returned. Example: function counter(){let c=0;return()=>++c}';
  if(m.includes('binary'))return'Binary search finds an item in a sorted array by repeatedly halving the search range. Time complexity is O(log n).';
  if(m.includes('dbms'))return'DBMS plan: 1) ER models 2) Normalization (1NF-3NF) 3) SQL joins 4) Transactions and ACID 5) Indexing.';
  if(m.includes('aptitude')){const a=Math.floor(Math.random()*40)+10;return`Try: 1) What is ${a}% of 200? 2) Next in 3,6,12,? 3) A car at 40 km/h for 3 h covers? 4) Simplify 15/25. 5) If x+5=12, x=?`}
  if(m.includes('study plan'))return'7-day plan: D1 JS basics, D2 DOM, D3 async, D4 SQL, D5 DSA arrays, D6 mock test, D7 review weak topics.';
  if(m.includes('frontend'))return'Frontend interview prep: HTML semantics, CSS layout, JS closures/async, one framework, accessibility, performance.';
  return pick(['Good question! Tell me your subject and level and I will tailor an explanation.','Try asking me to explain a concept or create a study plan.'])}};
async function askAI(m){if(AI_CONFIG.enabled&&AI_CONFIG.endpoint){try{const r=await fetch(AI_CONFIG.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:AI_CONFIG.model,message:m})});return(await r.json()).reply}catch(e){}}return AI.chatWithAI(m)}
