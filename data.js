const USERS0=[{id:'STU001',name:'Alex Johnson',email:'student@interviewai.demo',pw:'student123',role:'STUDENT',xp:2450,level:12,streak:7,goal:'Full Stack Developer',dept:'Computer Science',sem:6,skills:'JavaScript, HTML, CSS, SQL',college:'',phone:'',bio:''},
{id:'FAC001',name:'Dr. Priya Rao',email:'faculty@interviewai.demo',pw:'faculty123',role:'FACULTY'},
{id:'ADM001',name:'Admin User',email:'admin@interviewai.demo',pw:'admin123',role:'ADMIN'}];
const Q_RAW=`JavaScript|Closures|Medium|What is a closure?|A function that keeps access to its outer scope;A loop construct;A CSS rule;A DOM event|Closures remember variables from where they were created.
JavaScript|Variables|Easy|Which keyword declares a block-scoped variable?|let;var;def;dim|let is block scoped.
JavaScript|Arrays|Easy|Which method adds an element to the end of an array?|push;pop;shift;slice|push appends.
JavaScript|Async|Hard|What does await do?|Pauses an async function until a promise settles;Creates a thread;Blocks the browser;Loops forever|await suspends only the async function.
JavaScript|Types|Easy|typeof null returns?|object;null;undefined;number|A historic quirk of JavaScript.
HTML|Semantics|Easy|Which is a semantic navigation tag?|nav;div;span;b|nav describes navigation links.
CSS|Layout|Medium|Which declaration creates a flex container?|display:flex;float:flex;position:flex;flex:none|display:flex enables flexbox.
CSS|Specificity|Hard|Which has highest specificity?|Inline style;Class selector;Tag selector;Universal selector|Inline styles beat selectors.
SQL|Joins|Medium|Which join returns only matching rows?|INNER JOIN;LEFT JOIN;FULL JOIN;CROSS JOIN|INNER JOIN keeps matches only.
SQL|Aggregates|Easy|Which function counts rows?|COUNT;SUM;AVG;MAX|COUNT counts rows.
DBMS|Normalization|Medium|Third normal form removes?|Transitive dependencies;All keys;Indexes;Tables|3NF removes transitive dependencies.
DBMS|Transactions|Hard|What does I in ACID stand for?|Isolation;Integrity;Index;Inheritance|Isolation.
DataStructures|Stacks|Easy|A stack follows which order?|LIFO;FIFO;Random;Sorted|Last in, first out.
Algorithms|Searching|Medium|Binary search time complexity?|O(log n);O(n);O(n^2);O(1)|It halves the range each step.
Algorithms|Sorting|Hard|Average complexity of quicksort?|O(n log n);O(n^2);O(n);O(log n)|Average case is n log n.
Aptitude|Percentages|Easy|What is 20% of 150?|30;20;15;25|150 x 0.2 = 30.
Aptitude|Speed|Medium|A train at 60 km/h for 2.5 h covers?|150 km;120 km;100 km;180 km|60 x 2.5 = 150.
Aptitude|Logical|Medium|Next in 2, 4, 8, 16?|32;24;30;20|Each term doubles.`;
const Q0=Q_RAW.split('\n').map((l,i)=>{const p=l.split('|');return{id:'Q'+(i+1),subject:p[0],topic:p[1],diff:p[2],q:p[3],o:p[4].split(';'),e:p[5]}});
const CODING=[{id:1,t:'Sum of Two Numbers',d:'Easy',s:'Return a+b.',fn:'function solve(a,b){\n  \n}',tests:[[[1,2],3],[[-5,5],0],[[10,20],30]]},
{id:2,t:'Reverse a String',d:'Easy',s:'Return the reversed string.',fn:'function solve(s){\n  \n}',tests:[[['abc'],'cba'],[['hello'],'olleh'],[[''],'']]},
{id:3,t:'Palindrome Check',d:'Medium',s:'Return true if s is a palindrome.',fn:'function solve(s){\n  \n}',tests:[[['level'],true],[['abc'],false],[['a'],true]]}];
const IQ={HR:[['Tell me about yourself.','experience skills goals'],['Why should we hire you?','skills team value']],Technical:[['Explain closures in JavaScript.','function scope variable lexical'],['What is normalization in DBMS?','redundancy tables dependency']],Behavioral:[['Describe a time you resolved a conflict.','situation action result team'],['Tell me about a failure and what you learned.','learned improve responsibility']],Coding:[['How would you find duplicates in an array?','set hash loop complexity'],['Explain binary search.','sorted middle half log']]};
const BADGES=[['First Step','Complete 1 test',s=>s.n>=1],['Getting Going','Complete 3 tests',s=>s.n>=3],['7 Day Streak','7 day streak',s=>s.streak>=7],['100 Questions','Solve 100 questions',s=>s.solved>=100],['Perfect Score','Score 100%',s=>s.perfect],['Interview Ready','Finish an interview',s=>s.iv>=1],['Coding Beginner','Pass a coding problem',s=>s.code>=1],['Level 10','Reach level 10',s=>s.level>=10]];
