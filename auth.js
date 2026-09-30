if(!S.get('users'))S.set('users',USERS0);
if(!S.get('questions'))S.set('questions',Q0);
if(!S.get('attempts'))S.set('attempts',[{title:'Sample JavaScript Test',kind:'practice',score:6,total:8,ts:Date.now()-6*864e5,topics:{Closures:[1,2],Arrays:[2,2],Async:[1,2],Types:[2,2]}},{title:'Sample Aptitude Test',kind:'mock',score:5,total:8,ts:Date.now()-3*864e5,topics:{Percentages:[2,2],Speed:[1,3],Logical:[2,3]}},{title:'Sample SQL Test',kind:'practice',score:7,total:8,ts:Date.now()-864e5,topics:{Joins:[3,4],Aggregates:[4,4]}}]);
const Auth={me(){const id=S.get('me');return id?S.get('users').find(u=>u.id===id):null},
 login(e,p){const u=S.get('users').find(x=>x.email===e.trim().toLowerCase()&&x.pw===p);if(u)S.set('me',u.id);return u},
 register(n,e,p,role){const us=S.get('users');if(us.some(u=>u.email===e))return null;const u={id:'U'+Date.now(),name:n,email:e,pw:p,role,xp:0,level:1,streak:0,goal:'Software Developer'};us.push(u);S.set('users',us);S.set('me',u.id);return u},
 logout(){S.set('me',null);location.href=(document.body.dataset.base||'')+'login.html'}};
