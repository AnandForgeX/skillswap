/**
 * SkillSwap — Student-to-Student College Skill Exchange Platform
 * Architecture: Pure Vanilla JavaScript
 * Visual Theme: Linear / Vercel Minimalist SaaS Aesthetic
 */

// ========================================================
// 1. INITIAL DEMO DATASET & CONSTANTS
// ========================================================

const STORAGE_KEYS = {
  STUDENTS: 'skillswap_students_v1',
  REQUESTS: 'skillswap_requests_v1',
  USER_PROFILE: 'skillswap_user_profile_v1'
};

// Seed dataset with realistic student profiles across campus branches
const DEFAULT_STUDENTS = [
  {
    id: 'stu-1',
    name: 'Anand Kumar',
    email: 'anand.k@college.edu',
    branch: '2nd Year Computer Science',
    teaches: 'C++',
    category: 'Programming',
    level: 'Intermediate',
    wants: 'Video Editing',
    availability: 'Weekday evenings (6:00 - 8:30 PM)',
    bio: 'Competitive programmer & DSA enthusiast. Looking to learn Premiere Pro for tech tutorials.',
    swaps: 12,
    rating: 4.9
  },
  {
    id: 'stu-2',
    name: 'Rahul Sharma',
    email: 'rahul.s@college.edu',
    branch: '3rd Year Information Tech',
    teaches: 'Video Editing',
    category: 'Video & Media',
    level: 'Advanced',
    wants: 'C++',
    availability: 'Friday nights & Sunday afternoons',
    bio: 'Freelance video editor with 3+ years experience. Need guidance mastering C++ STL & pointers.',
    swaps: 10,
    rating: 4.8
  },
  {
    id: 'stu-3',
    name: 'Priya Singh',
    email: 'priya.s@college.edu',
    branch: '3rd Year Design & Media',
    teaches: 'UI/UX Design',
    category: 'Design',
    level: 'Advanced',
    wants: 'Web Development',
    availability: 'Tuesday & Thursday afternoons',
    bio: 'Figma community advocate. Want to learn HTML, CSS & modern JS to build my portfolio live.',
    swaps: 8,
    rating: 5.0
  },
  {
    id: 'stu-4',
    name: 'Aryan Patel',
    email: 'aryan.p@college.edu',
    branch: '2nd Year Computer Science',
    teaches: 'Web Development',
    category: 'Programming',
    level: 'Intermediate',
    wants: 'UI/UX Design',
    availability: 'Weekends (11:00 AM - 3:00 PM)',
    bio: 'Frontend developer comfortable with vanilla JavaScript and Tailwind. Looking for design mentoring.',
    swaps: 6,
    rating: 4.7
  },
  {
    id: 'stu-5',
    name: 'Sneha Reddy',
    email: 'sneha.r@college.edu',
    branch: '4th Year AI & Data Science',
    teaches: 'Python',
    category: 'Programming',
    level: 'Advanced',
    wants: 'Public Speaking',
    availability: 'Flexible on weekends',
    bio: 'Pandas, NumPy, and automation scripts specialist. Want to polish final year presentation delivery.',
    swaps: 9,
    rating: 4.9
  },
  {
    id: 'stu-6',
    name: 'Vikram Malhotra',
    email: 'vikram.m@college.edu',
    branch: '3rd Year Business Administration',
    teaches: 'Public Speaking',
    category: 'Business',
    level: 'Advanced',
    wants: 'Python',
    availability: 'Monday & Wednesday 5 PM onwards',
    bio: 'College debate finalist. Eager to pick up Python scripting for financial analytics.',
    swaps: 5,
    rating: 4.6
  },
  {
    id: 'stu-7',
    name: 'Neha Gupta',
    email: 'neha.g@college.edu',
    branch: '2nd Year Multimedia & Arts',
    teaches: 'Graphic Design',
    category: 'Design',
    level: 'Intermediate',
    wants: 'Digital Marketing',
    availability: 'Saturday mornings & evenings',
    bio: 'Vector illustration and Photoshop designer. Want to understand SEO & growth algorithms.',
    swaps: 4,
    rating: 4.8
  },
  {
    id: 'stu-8',
    name: 'Kavya Nair',
    email: 'kavya.n@college.edu',
    branch: '3rd Year Marketing & Commerce',
    teaches: 'Digital Marketing',
    category: 'Business',
    level: 'Advanced',
    wants: 'Graphic Design',
    availability: 'Sunday afternoons (2 - 5 PM)',
    bio: 'Handled social campaigns for campus fests. Need graphic design skills to design posters independently.',
    swaps: 7,
    rating: 4.7
  },
  {
    id: 'stu-9',
    name: 'Rohan Das',
    email: 'rohan.d@college.edu',
    branch: '3rd Year Electronics & Comm.',
    teaches: 'Java',
    category: 'Programming',
    level: 'Intermediate',
    wants: 'Web Development',
    availability: 'Weekdays after 7:30 PM',
    bio: 'Java OOP and data structures mentor. Looking to build web dashboards for embedded IoT projects.',
    swaps: 3,
    rating: 4.5
  },
  {
    id: 'stu-10',
    name: 'Tanvi Joshi',
    email: 'tanvi.j@college.edu',
    branch: '1st Year MBA / Finance',
    teaches: 'Excel',
    category: 'Business',
    level: 'Advanced',
    wants: 'Python',
    availability: 'Saturdays 2:00 - 6:00 PM',
    bio: 'Financial modeling, VLOOKUP, and Pivot Tables. Excited to learn Python for data analysis.',
    swaps: 5,
    rating: 4.8
  }
];

// Pre-seeded swap requests for dashboard
const DEFAULT_REQUESTS = [
  {
    id: 'req-1',
    fromStudentName: 'You (Anand Kumar)',
    toStudentId: 'stu-2',
    toStudentName: 'Rahul Sharma',
    myTeachSkill: 'C++',
    myLearnSkill: 'Video Editing',
    message: 'Looking forward to exchanging C++ STL concepts for Premiere Pro basics.',
    status: 'Pending',
    createdAt: '2h ago'
  },
  {
    id: 'req-2',
    fromStudentName: 'You (Anand Kumar)',
    toStudentId: 'stu-3',
    toStudentName: 'Priya Singh',
    myTeachSkill: 'C++',
    myLearnSkill: 'UI/UX Design',
    message: 'Ready to review pointers debugging in exchange for Figma feedback.',
    status: 'Accepted',
    createdAt: '1d ago'
  },
  {
    id: 'req-3',
    fromStudentName: 'Aryan Patel',
    toStudentId: 'stu-1',
    toStudentName: 'You (Anand Kumar)',
    myTeachSkill: 'Web Development',
    myLearnSkill: 'C++',
    message: 'Thanks for the binary search tree walkthrough! Marking our swap completed.',
    status: 'Completed',
    createdAt: '3d ago'
  }
];

// Curated skill tips for student peer mentoring
const SKILL_TIPS = [
  {
    tip: 'Teaching someone else is one of the fastest ways to strengthen your own conceptual understanding.',
    category: 'Peer Tutoring'
  },
  {
    tip: 'Split skill swaps into two 45-minute halves so both students get dedicated time as teacher and learner.',
    category: 'Session Strategy'
  },
  {
    tip: 'Build a small real-world mini-project together rather than just reviewing slides.',
    category: 'Active Learning'
  },
  {
    tip: 'Exchange GitHub repos or Figma links before the session to make the most of 1-on-1 time.',
    category: 'Preparation'
  },
  {
    tip: 'Consistency beats intensity: a weekly 1-hour swap creates compounding skill gains over a semester.',
    category: 'Habit Building'
  }
];

// Skill graph node descriptions
const SKILL_GRAPH_DATA = {
  'Web Development': {
    category: 'Programming',
    desc: 'Modern responsive web development with HTML5, CSS3, JavaScript, React, and REST APIs.'
  },
  'C++': {
    category: 'Programming',
    desc: 'Object-oriented programming, standard template library (STL), memory management, and competitive DSA.'
  },
  'Python': {
    category: 'Programming',
    desc: 'General scripting, automation, Pandas, NumPy, data analysis, and introductory machine learning.'
  },
  'UI/UX Design': {
    category: 'Design',
    desc: 'Wireframing, prototyping, user journey mapping, typography, and design systems in Figma.'
  },
  'Video Editing': {
    category: 'Video & Media',
    desc: 'Premiere Pro timeline pacing, color grading, sound sync, B-roll transitions, and After Effects.'
  },
  'Graphic Design': {
    category: 'Design',
    desc: 'Vector illustration, Canva, Photoshop manipulation, posters, and campus event branding.'
  },
  'Java': {
    category: 'Programming',
    desc: 'Core Java fundamentals, OOP design patterns, multithreading, and collections framework.'
  }
};

// ========================================================
// 2. STATE INITIALIZATION & LOCALSTORAGE MANAGEMENT
// ========================================================

let students = [];
let swapRequests = [];
let currentCategory = 'All';
let currentSearchQuery = '';
let currentTipIndex = 0;
let tipInterval = null;

function loadStudents() {
  try {
    const rawData = localStorage.getItem(STORAGE_KEYS.STUDENTS);
    if (rawData) {
      students = JSON.parse(rawData);
    } else {
      students = [...DEFAULT_STUDENTS];
      saveStudents();
    }
  } catch (err) {
    console.error('Failed to load students:', err);
    students = [...DEFAULT_STUDENTS];
  }
  return students;
}

function saveStudents() {
  try {
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
  } catch (err) {
    console.error('Failed to save students:', err);
  }
}

function loadSwapRequests() {
  try {
    const rawData = localStorage.getItem(STORAGE_KEYS.REQUESTS);
    if (rawData) {
      swapRequests = JSON.parse(rawData);
    } else {
      swapRequests = [...DEFAULT_REQUESTS];
      saveSwapRequests();
    }
  } catch (err) {
    console.error('Failed to load swap requests:', err);
    swapRequests = [...DEFAULT_REQUESTS];
  }
  return swapRequests;
}

function saveSwapRequests() {
  try {
    localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(swapRequests));
  } catch (err) {
    console.error('Failed to save swap requests:', err);
  }
}

function resetDemoData() {
  localStorage.removeItem(STORAGE_KEYS.STUDENTS);
  localStorage.removeItem(STORAGE_KEYS.REQUESTS);
  loadStudents();
  loadSwapRequests();
  updateStatistics();
  renderStudents();
  renderTrendingSkills();
  renderLeaderboard();
  renderDashboard();
  findMatches();
  renderSkillMap('Web Development');
  showToast('Demo data reset to initial state.', 'info');
}

// ========================================================
// 3. STATS & ANIMATED COUNTERS
// ========================================================

function updateStatistics() {
  const totalStudents = students.length;
  
  const uniqueSkills = new Set();
  students.forEach(s => {
    if (s.teaches) uniqueSkills.add(s.teaches.trim().toLowerCase());
    if (s.wants) uniqueSkills.add(s.wants.trim().toLowerCase());
  });

  let twoWayMatchCount = 0;
  for (let i = 0; i < students.length; i++) {
    for (let j = i + 1; j < students.length; j++) {
      const a = students[i];
      const b = students[j];
      const aTeachesB = a.teaches.trim().toLowerCase() === b.wants.trim().toLowerCase();
      const bTeachesA = b.teaches.trim().toLowerCase() === a.wants.trim().toLowerCase();
      if (aTeachesB && bTeachesA) {
        twoWayMatchCount++;
      }
    }
  }

  const totalCompletedSwaps = students.reduce((acc, s) => acc + (s.swaps || 0), 0);

  animateCounter('stat-students', totalStudents);
  animateCounter('stat-skills', uniqueSkills.size);
  animateCounter('stat-matches', twoWayMatchCount);
  animateCounter('stat-swaps', totalCompletedSwaps);

  updateSkillDataLists(Array.from(uniqueSkills));
  updateCategoryCounts();
}

function animateCounter(elementId, targetValue) {
  const el = document.getElementById(elementId);
  if (!el) return;
  
  const startValue = parseInt(el.innerText) || 0;
  if (startValue === targetValue) {
    el.innerText = targetValue;
    return;
  }

  const duration = 400;
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOutQuad = progress * (2 - progress);
    const current = Math.floor(startValue + (targetValue - startValue) * easeOutQuad);
    
    el.innerText = current;

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      el.innerText = targetValue;
    }
  }

  requestAnimationFrame(updateCount);
}

function updateSkillDataLists(skills) {
  const teachList = document.getElementById('teach-skills-list');
  const learnList = document.getElementById('learn-skills-list');
  if (!teachList || !learnList) return;

  const optionsHTML = skills.map(skill => {
    const formatted = skill.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return `<option value="${formatted}"></option>`;
  }).join('');

  teachList.innerHTML = optionsHTML;
  learnList.innerHTML = optionsHTML;
}

function updateCategoryCounts() {
  const countAll = document.getElementById('count-all');
  if (countAll) countAll.innerText = `(${students.length})`;
}

// ========================================================
// 4. EXPLORE STUDENT SKILLS & FILTERS (Linear Style Cards)
// ========================================================

function renderStudents(customList = null) {
  const grid = document.getElementById('students-grid');
  const emptyState = document.getElementById('explore-empty-state');
  if (!grid) return;

  let listToDisplay = customList;

  if (!listToDisplay) {
    listToDisplay = students.filter(student => {
      const matchesCategory = (currentCategory === 'All') || (student.category === currentCategory);
      const q = currentSearchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        student.name.toLowerCase().includes(q) ||
        student.teaches.toLowerCase().includes(q) ||
        student.wants.toLowerCase().includes(q) ||
        student.category.toLowerCase().includes(q) ||
        student.branch.toLowerCase().includes(q) ||
        student.bio.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }

  if (listToDisplay.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  grid.innerHTML = listToDisplay.map(student => {
    const initials = student.name.split(' ').map(n => n[0]).join('').substring(0, 2);

    return `
      <div class="saas-card p-4 sm:p-5 flex flex-col justify-between" data-student-id="${student.id}">
        
        <div>
          <!-- Header: Avatar, Name, Rating -->
          <div class="flex items-start justify-between gap-3 mb-3.5">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded bg-[#161D2E] text-slate-200 border border-[#1E2638] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                ${initials}
              </div>
              <div>
                <h4 class="font-semibold text-white text-sm leading-tight">${student.name}</h4>
                <p class="text-[11px] text-slate-400 font-mono mt-0.5">${student.branch || 'Campus Student'}</p>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <span class="text-xs font-mono text-slate-300 bg-[#161D2E] px-1.5 py-0.5 rounded border border-[#1E2638]">
                ★ ${student.rating.toFixed(1)}
              </span>
              <span class="text-[10px] text-slate-500 font-mono mt-0.5">${student.swaps} swaps</span>
            </div>
          </div>

          <!-- Can Teach Box -->
          <div class="p-2.5 rounded-lg bg-[#161D2E] border border-[#1E2638] mb-2">
            <div class="flex items-center justify-between text-[11px] mb-0.5">
              <span class="font-mono text-sky-400 uppercase font-semibold text-[10px]">Can Teach</span>
              <span class="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#111622] text-slate-400 border border-[#1E2638]">
                ${student.level}
              </span>
            </div>
            <p class="text-xs font-semibold text-white">${student.teaches}</p>
          </div>

          <!-- Wants to Learn Box -->
          <div class="p-2.5 rounded-lg bg-[#161D2E] border border-[#1E2638] mb-3">
            <div class="flex items-center justify-between text-[11px] mb-0.5">
              <span class="font-mono text-slate-400 uppercase font-semibold text-[10px]">Wants to Learn</span>
              <span class="text-[10px] font-mono text-slate-500">
                ${student.category}
              </span>
            </div>
            <p class="text-xs font-medium text-slate-200">${student.wants}</p>
          </div>

          <!-- Bio -->
          <p class="text-xs text-slate-400 line-clamp-2 mb-2 leading-relaxed">
            "${student.bio}"
          </p>

          <!-- Availability -->
          <div class="text-[11px] text-slate-500 font-mono mb-4">
            Avail: ${student.availability}
          </div>
        </div>

        <!-- Actions -->
        <div class="pt-3 border-t border-[#1E2638] flex items-center gap-2">
          <button 
            type="button" 
            onclick="showProfileModal('${student.id}')"
            class="flex-1 py-1.5 px-3 rounded-lg bg-[#161D2E] hover:bg-[#1C253B] text-slate-300 hover:text-white text-xs font-medium border border-[#1E2638] transition-colors text-center"
          >
            Profile
          </button>
          <button 
            type="button" 
            onclick="openSwapModal('${student.id}')"
            class="flex-1 py-1.5 px-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium transition-colors text-center shadow-sm"
          >
            Request Swap
          </button>
        </div>

      </div>
    `;
  }).join('');
}

function filterByCategory(categoryName) {
  currentCategory = categoryName;

  document.querySelectorAll('.cat-pill').forEach(btn => {
    if (btn.dataset.category === categoryName) {
      btn.className = 'cat-pill active px-3 py-1 rounded-md text-xs font-medium transition-colors bg-sky-600 text-white';
    } else {
      btn.className = 'cat-pill px-3 py-1 rounded-md text-xs font-medium transition-colors bg-[#111622] text-slate-300 hover:text-white border border-[#1E2638]';
    }
  });

  renderStudents();
}

function searchStudents(query) {
  currentSearchQuery = query;
  renderStudents();
}

// ========================================================
// 5. SMART SKILL MATCHING ENGINE
// ========================================================

function normalizeSkill(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isSkillMatch(skillA, skillB) {
  const normA = normalizeSkill(skillA);
  const normB = normalizeSkill(skillB);
  if (!normA || !normB) return false;

  if (normA === normB) return true;
  if (normA.includes(normB) || normB.includes(normA)) return true;

  const aliases = [
    ['cpp', 'c'],
    ['js', 'javascript', 'webdevelopment', 'webdev', 'frontend'],
    ['uiux', 'uiuxdesign', 'figma', 'design', 'productdesign'],
    ['videoediting', 'premierepro', 'video', 'editing'],
    ['python', 'datascience', 'machinelearning', 'ai'],
    ['graphicdesign', 'photoshop', 'illustrator', 'graphics']
  ];

  for (const group of aliases) {
    const hasA = group.some(item => normA.includes(item));
    const hasB = group.some(item => normB.includes(item));
    if (hasA && hasB) return true;
  }

  return false;
}

function calculateMatchScore(student, userTeachSkill, userLearnSkill, isTwoWay) {
  if (isTwoWay) {
    let score = 93;
    if (student.level === 'Advanced') score += 4;
    else if (student.level === 'Intermediate') score += 2;
    if (student.rating >= 4.8) score += 2;
    return Math.min(score, 99);
  }

  let score = 72;
  const teachesWhatYouWant = isSkillMatch(student.teaches, userLearnSkill);
  const wantsWhatYouTeach = isSkillMatch(student.wants, userTeachSkill);

  if (teachesWhatYouWant) score += 8;
  if (wantsWhatYouTeach) score += 5;
  if (student.level === 'Advanced') score += 3;
  if (student.rating >= 4.8) score += 2;

  return Math.min(score, 88);
}

function findMatches(customTeach = null, customLearn = null) {
  const teachInput = document.getElementById('match-teach-input');
  const learnInput = document.getElementById('match-learn-input');
  const resultsContainer = document.getElementById('match-results-container');
  if (!resultsContainer) return;

  const teachSkill = (customTeach !== null ? customTeach : (teachInput ? teachInput.value : '')).trim();
  const learnSkill = (customLearn !== null ? customLearn : (learnInput ? learnInput.value : '')).trim();

  if (!teachSkill || !learnSkill) {
    resultsContainer.innerHTML = `
      <div class="saas-card p-6 text-center max-w-sm mx-auto">
        <h4 class="text-xs font-semibold text-white mb-1">Enter skills to begin matching</h4>
        <p class="text-[11px] text-slate-400">Fill both fields to scan the campus network.</p>
      </div>
    `;
    return;
  }

  const perfectMatches = [];
  const oneWayMatches = [];

  students.forEach(student => {
    const studentTeachesWhatYouWant = isSkillMatch(student.teaches, learnSkill);
    const studentWantsWhatYouTeach = isSkillMatch(student.wants, teachSkill);

    if (studentTeachesWhatYouWant && studentWantsWhatYouTeach) {
      const score = calculateMatchScore(student, teachSkill, learnSkill, true);
      perfectMatches.push({ student, score, type: 'perfect' });
    } else if (studentTeachesWhatYouWant) {
      const score = calculateMatchScore(student, teachSkill, learnSkill, false);
      oneWayMatches.push({ student, score, type: 'can-teach-you', note: `${student.name} can teach you ${student.teaches}` });
    } else if (studentWantsWhatYouTeach) {
      const score = calculateMatchScore(student, teachSkill, learnSkill, false);
      oneWayMatches.push({ student, score, type: 'wants-your-skill', note: `${student.name} wants to learn your ${student.wants}` });
    }
  });

  perfectMatches.sort((a, b) => b.score - a.score);
  oneWayMatches.sort((a, b) => b.score - a.score);

  if (perfectMatches.length === 0 && oneWayMatches.length === 0) {
    resultsContainer.innerHTML = `
      <div class="saas-card p-8 text-center max-w-md mx-auto">
        <span class="text-xs font-mono text-slate-500 block mb-1">NO DIRECT MATCH</span>
        <h3 class="text-sm font-bold text-white mb-1">No perfect match yet 😔</h3>
        <p class="text-xs text-slate-400 mb-4 leading-relaxed">
          Try another skill. Someone with your perfect match might join soon!
        </p>
        <div class="flex items-center justify-center gap-2">
          <a href="#explore" class="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium transition-colors">
            Explore All Skills
          </a>
        </div>
      </div>
    `;
    showToast('No matching students found for this combination.', 'info');
    return;
  }

  let html = '';

  if (perfectMatches.length > 0) {
    html += `
      <div>
        <div class="flex items-center gap-2 mb-3">
          <span class="px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/60 text-sky-400 font-mono text-xs font-semibold">
            🔥 Perfect 2-Way Match (${perfectMatches.length})
          </span>
          <span class="text-xs text-slate-400">Reciprocal skill swap identified</span>
        </div>

        <div class="grid grid-cols-1 gap-3">
          ${perfectMatches.map(m => renderPerfectMatchCard(m, teachSkill, learnSkill)).join('')}
        </div>
      </div>
    `;
  }

  if (oneWayMatches.length > 0) {
    html += `
      <div class="pt-4">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-xs font-bold font-mono uppercase text-slate-400">
            One-Way Matches (${oneWayMatches.length})
          </h4>
          <span class="text-[11px] text-slate-500 font-mono">Compatible peers</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          ${oneWayMatches.map(m => renderOneWayMatchCard(m, teachSkill, learnSkill)).join('')}
        </div>
      </div>
    `;
  }

  resultsContainer.innerHTML = html;

  if (perfectMatches.length > 0) {
    showToast(`Found ${perfectMatches.length} 2-Way Skill Match!`, 'match');
  } else {
    showToast(`Found ${oneWayMatches.length} compatible skill matches.`, 'match');
  }
}

function renderPerfectMatchCard(matchObj, userTeachSkill, userLearnSkill) {
  const s = matchObj.student;
  const score = matchObj.score;
  const initials = s.name.split(' ').map(n => n[0]).join('').substring(0, 2);

  return `
    <div class="saas-card p-5 sm:p-6 border-sky-500/30 bg-[#111622]">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-4 mb-4">
        
        <!-- Left: YOU -->
        <div class="w-full lg:w-5/12 bg-[#161D2E] rounded-lg p-3.5 border border-[#1E2638]">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-6 h-6 rounded bg-[#111622] text-slate-300 font-mono text-xs font-bold flex items-center justify-center border border-[#1E2638]">YOU</span>
            <span class="font-semibold text-white text-xs">Your Proposal</span>
          </div>
          <div class="space-y-1 text-xs font-mono">
            <p class="text-slate-400">Teach: <strong class="text-white">${userTeachSkill}</strong></p>
            <p class="text-slate-400">Learn: <strong class="text-sky-400">${userLearnSkill}</strong></p>
          </div>
        </div>

        <!-- Center: Match Badge -->
        <div class="flex flex-col items-center justify-center text-center px-2">
          <div class="w-8 h-8 rounded bg-[#161D2E] border border-[#1E2638] text-sky-400 font-mono font-bold flex items-center justify-center text-sm">
            ⇄
          </div>
          <span class="mt-1 text-[11px] font-mono font-bold text-sky-400">
            ${score}% MATCH
          </span>
        </div>

        <!-- Right: MATCHED STUDENT -->
        <div class="w-full lg:w-5/12 bg-[#161D2E] rounded-lg p-3.5 border border-[#1E2638]">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded bg-[#111622] text-slate-300 font-mono text-xs font-bold flex items-center justify-center border border-[#1E2638]">${initials}</span>
              <span class="font-semibold text-white text-xs">${s.name}</span>
            </div>
            <span class="text-[11px] font-mono text-slate-300">★ ${s.rating.toFixed(1)}</span>
          </div>
          <div class="space-y-1 text-xs font-mono">
            <p class="text-slate-400">Teaches You: <strong class="text-sky-400">${s.teaches}</strong></p>
            <p class="text-slate-400">Learns: <strong class="text-white">${s.wants}</strong></p>
          </div>
        </div>

      </div>

      <!-- Footer Bar -->
      <div class="pt-3 border-t border-[#1E2638] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <span class="text-slate-500 font-mono text-[11px]">Avail: ${s.availability}</span>

        <div class="flex items-center gap-2 w-full sm:w-auto">
          <button 
            type="button" 
            onclick="showProfileModal('${s.id}')"
            class="px-3 py-1.5 rounded-lg bg-[#161D2E] hover:bg-[#1C253B] text-slate-300 text-xs font-medium border border-[#1E2638] transition-colors"
          >
            Profile
          </button>
          <button 
            type="button" 
            onclick="openSwapModal('${s.id}', '${userTeachSkill}', '${userLearnSkill}')"
            class="flex-1 sm:flex-none px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium transition-colors shadow-sm"
          >
            Send Swap Request
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderOneWayMatchCard(matchObj, userTeachSkill, userLearnSkill) {
  const s = matchObj.student;
  const score = matchObj.score;
  const initials = s.name.split(' ').map(n => n[0]).join('').substring(0, 2);

  return `
    <div class="saas-card p-3.5 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded bg-[#161D2E] text-slate-300 font-mono text-xs font-bold flex items-center justify-center border border-[#1E2638]">
              ${initials}
            </div>
            <div>
              <p class="font-semibold text-white text-xs">${s.name}</p>
              <p class="text-[10px] text-slate-500 font-mono">${s.branch}</p>
            </div>
          </div>
          <span class="px-1.5 py-0.2 rounded bg-[#161D2E] text-slate-300 border border-[#1E2638] font-mono text-[10px]">
            ${score}%
          </span>
        </div>

        <div class="p-2 rounded bg-[#161D2E] text-[11px] font-mono space-y-0.5 mb-2">
          <p class="text-slate-400">Teaches: <strong class="text-sky-400">${s.teaches}</strong></p>
          <p class="text-slate-400">Wants: <strong class="text-slate-200">${s.wants}</strong></p>
        </div>
      </div>

      <div class="pt-2 border-t border-[#1E2638] flex items-center gap-2">
        <button 
          type="button" 
          onclick="showProfileModal('${s.id}')"
          class="flex-1 py-1 rounded bg-[#161D2E] hover:bg-[#1C253B] text-slate-300 text-xs font-medium transition-colors text-center"
        >
          Profile
        </button>
        <button 
          type="button" 
          onclick="openSwapModal('${s.id}', '${userTeachSkill}', '${userLearnSkill}')"
          class="flex-1 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium transition-colors text-center shadow-sm"
        >
          Request
        </button>
      </div>
    </div>
  `;
}

// ========================================================
// 6. SWAP REQUEST SYSTEM & MODAL
// ========================================================

let pendingSwapTarget = null;

function openSwapModal(studentId, defaultTeach = '', defaultLearn = '') {
  const targetStudent = students.find(s => s.id === studentId);
  if (!targetStudent) return;

  pendingSwapTarget = targetStudent;

  const teachSkill = defaultTeach || document.getElementById('match-teach-input')?.value || 'C++';
  const learnSkill = defaultLearn || targetStudent.teaches;

  const modal = document.getElementById('swap-request-modal');
  const modalBody = document.getElementById('swap-modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="mb-4">
      <span class="text-[10px] font-mono uppercase text-sky-400 block mb-1">Proposal</span>
      <h3 class="text-base font-bold text-white">Confirm Skill Exchange</h3>
      <p class="text-xs text-slate-400 mt-0.5">
        Requesting skill exchange with <strong class="text-white">${targetStudent.name}</strong> (${targetStudent.branch}).
      </p>
    </div>

    <div class="p-3 rounded-lg bg-[#161D2E] border border-[#1E2638] mb-4 space-y-2 text-xs font-mono">
      <div class="flex items-center justify-between">
        <span class="text-slate-400">You teach:</span>
        <span class="text-white font-semibold" id="modal-swap-teach">${teachSkill}</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-slate-400">You learn:</span>
        <span class="text-sky-400 font-semibold" id="modal-swap-learn">${learnSkill}</span>
      </div>
      <div class="flex items-center justify-between pt-1.5 border-t border-[#1E2638]">
        <span class="text-slate-500">Peer availability:</span>
        <span class="text-slate-300">${targetStudent.availability}</span>
      </div>
    </div>

    <div class="mb-4">
      <label for="swap-request-note" class="block text-xs font-semibold text-slate-300 mb-1">
        Meeting Note (Optional)
      </label>
      <textarea 
        id="swap-request-note" 
        rows="2" 
        placeholder="Suggest a meeting time or communication preference..." 
        class="w-full bg-[#161D2E] border border-[#1E2638] focus:border-sky-500 rounded-lg p-2.5 text-white placeholder-slate-500 text-xs focus:outline-none transition-colors resize-none font-sans"
      ></textarea>
    </div>

    <div class="flex items-center justify-end gap-2 pt-2 border-t border-[#1E2638]">
      <button 
        type="button" 
        onclick="closeSwapModal()"
        class="px-3.5 py-1.5 rounded-lg bg-[#161D2E] hover:bg-[#1C253B] text-slate-300 text-xs font-medium border border-[#1E2638] transition-colors"
      >
        Cancel
      </button>
      <button 
        type="button" 
        onclick="confirmSendSwapRequest()"
        class="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium transition-colors shadow-sm"
      >
        Send Request
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeSwapModal() {
  const modal = document.getElementById('swap-request-modal');
  if (modal) modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
  pendingSwapTarget = null;
}

function confirmSendSwapRequest() {
  if (!pendingSwapTarget) return;

  const teachSkill = document.getElementById('modal-swap-teach')?.innerText || 'C++';
  const learnSkill = document.getElementById('modal-swap-learn')?.innerText || pendingSwapTarget.teaches;
  const note = document.getElementById('swap-request-note')?.value.trim() || 'Looking forward to our skill exchange session.';

  const newRequest = {
    id: 'req-' + Date.now(),
    fromStudentName: 'You',
    toStudentId: pendingSwapTarget.id,
    toStudentName: pendingSwapTarget.name,
    myTeachSkill: teachSkill,
    myLearnSkill: learnSkill,
    message: note,
    status: 'Pending',
    createdAt: 'Just now'
  };

  swapRequests.unshift(newRequest);
  saveSwapRequests();

  closeSwapModal();
  renderDashboard();
  updateStatistics();

  showToast(`Skill Swap request sent to ${pendingSwapTarget.name}.`, 'success');
}

// ========================================================
// 7. MY DASHBOARD (Linear Style Queue)
// ========================================================

function renderDashboard() {
  const pendingCountEl = document.getElementById('dash-pending-count');
  const acceptedCountEl = document.getElementById('dash-accepted-count');
  const completedCountEl = document.getElementById('dash-completed-count');
  const navBadge = document.getElementById('nav-pending-badge');
  const sidebarBadge = document.getElementById('sidebar-pending-badge');
  const swapsContainer = document.getElementById('active-swaps-container');
  const emptyState = document.getElementById('swaps-empty-state');

  const pending = swapRequests.filter(r => r.status === 'Pending').length;
  const accepted = swapRequests.filter(r => r.status === 'Accepted').length;
  const completed = swapRequests.filter(r => r.status === 'Completed').length;

  if (pendingCountEl) pendingCountEl.innerText = pending;
  if (acceptedCountEl) acceptedCountEl.innerText = accepted;
  if (completedCountEl) completedCountEl.innerText = completed;

  if (navBadge) {
    if (pending > 0) {
      navBadge.innerText = pending;
      navBadge.classList.remove('hidden');
    } else {
      navBadge.classList.add('hidden');
    }
  }

  if (sidebarBadge) {
    if (pending > 0) {
      sidebarBadge.innerText = pending;
      sidebarBadge.classList.remove('hidden');
    } else {
      sidebarBadge.classList.add('hidden');
    }
  }

  if (!swapsContainer) return;

  if (swapRequests.length === 0) {
    swapsContainer.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  swapsContainer.innerHTML = swapRequests.map(req => {
    const statusBadge = 
      req.status === 'Completed' ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60' :
      req.status === 'Accepted' ? 'bg-sky-950/60 text-sky-300 border border-sky-800/60' :
      'bg-amber-950/60 text-amber-300 border border-amber-800/60';

    let actionButtons = '';
    if (req.status === 'Pending') {
      actionButtons = `
        <button onclick="acceptSwap('${req.id}')" class="px-2.5 py-1 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-medium transition-colors">
          Accept
        </button>
        <button onclick="rejectSwap('${req.id}')" class="px-2.5 py-1 rounded bg-[#111622] hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 text-xs font-medium border border-[#1E2638] transition-colors">
          Reject
        </button>
      `;
    } else if (req.status === 'Accepted') {
      actionButtons = `
        <button onclick="completeSwap('${req.id}')" class="px-2.5 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium transition-colors">
          Mark Complete
        </button>
      `;
    } else {
      actionButtons = `
        <span class="text-xs font-mono text-emerald-400">
          Completed ✓
        </span>
      `;
    }

    return `
      <div class="p-3 rounded-lg bg-[#161D2E] border border-[#1E2638] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        
        <div class="space-y-1 flex-1">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs font-mono font-bold text-white">
              ${req.myTeachSkill} ↔ ${req.myLearnSkill}
            </span>
            <span class="text-[10px] font-mono px-1.5 py-0.2 rounded ${statusBadge}">
              ${req.status}
            </span>
            <span class="text-[11px] font-mono text-slate-500">${req.createdAt}</span>
          </div>

          <p class="text-xs text-slate-300">
            <strong>${req.fromStudentName}</strong> ↔ <strong>${req.toStudentName}</strong>
          </p>

          ${req.message ? `<p class="text-[11px] text-slate-400 italic font-mono bg-[#111622] px-2 py-0.5 rounded">"${req.message}"</p>` : ''}
        </div>

        <div class="flex items-center gap-1.5 self-end sm:self-center shrink-0">
          ${actionButtons}
        </div>

      </div>
    `;
  }).join('');
}

function acceptSwap(requestId) {
  const req = swapRequests.find(r => r.id === requestId);
  if (!req) return;

  req.status = 'Accepted';
  saveSwapRequests();
  renderDashboard();
  showToast(`Swap proposal accepted with ${req.toStudentName}.`, 'success');
}

function rejectSwap(requestId) {
  swapRequests = swapRequests.filter(r => r.id !== requestId);
  saveSwapRequests();
  renderDashboard();
  showToast('Swap request removed.', 'info');
}

function completeSwap(requestId) {
  const req = swapRequests.find(r => r.id === requestId);
  if (!req) return;

  req.status = 'Completed';
  
  const targetStudent = students.find(s => s.id === req.toStudentId);
  if (targetStudent) {
    targetStudent.swaps = (targetStudent.swaps || 0) + 1;
    saveStudents();
  }

  saveSwapRequests();
  renderDashboard();
  updateStatistics();
  renderLeaderboard();

  showToast('Swap marked as completed.', 'success');
}

// ========================================================
// 8. TRENDING SKILLS (Structured Progress Bars)
// ========================================================

function renderTrendingSkills() {
  const container = document.getElementById('trending-skills-list');
  if (!container) return;

  const skillCountMap = {};
  students.forEach(s => {
    if (!s.wants) return;
    const skillName = s.wants.trim();
    skillCountMap[skillName] = (skillCountMap[skillName] || 0) + 1;
  });

  const sortedSkills = Object.entries(skillCountMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  const maxCount = sortedSkills.length > 0 ? sortedSkills[0].count : 1;

  container.innerHTML = sortedSkills.map((item, index) => {
    const percentage = Math.round((item.count / maxCount) * 100);

    return `
      <div 
        class="p-2.5 rounded-lg bg-[#161D2E] border border-[#1E2638] hover:border-slate-700 cursor-pointer transition-colors"
        onclick="quickSelectTrendingSkill('${item.name}')"
        title="Find matches for ${item.name}"
      >
        <div class="flex items-center justify-between mb-1.5 text-xs">
          <div class="flex items-center gap-1.5 font-mono">
            <span class="text-slate-500 font-bold">#${index + 1}</span>
            <span class="font-medium text-white">${item.name}</span>
          </div>
          <span class="text-[11px] text-slate-400 font-mono">
            ${item.count} ${item.count === 1 ? 'student' : 'students'}
          </span>
        </div>

        <div class="w-full bg-[#111622] rounded-full h-1.5 overflow-hidden">
          <div 
            class="bg-sky-600 h-1.5 rounded-full" 
            style="width: ${percentage}%"
          ></div>
        </div>
      </div>
    `;
  }).join('');
}

function quickSelectTrendingSkill(skillName) {
  const learnInput = document.getElementById('match-learn-input');
  if (learnInput) {
    learnInput.value = skillName;
  }
  
  const matchSection = document.getElementById('find-match');
  if (matchSection) {
    matchSection.scrollIntoView({ behavior: 'smooth' });
    findMatches();
  }
}

// ========================================================
// 9. SKILL LEADERBOARD (Clean Tabular Cards)
// ========================================================

function renderLeaderboard() {
  const container = document.getElementById('leaderboard-list');
  if (!container) return;

  const rankedStudents = [...students].sort((a, b) => {
    const scoreA = (a.swaps * 10) + (a.rating * 5);
    const scoreB = (b.swaps * 10) + (b.rating * 5);
    return scoreB - scoreA;
  }).slice(0, 5);

  container.innerHTML = rankedStudents.map((s, index) => {
    const initials = s.name.split(' ').map(n => n[0]).join('').substring(0, 2);

    return `
      <div class="p-2.5 rounded-lg bg-[#161D2E] border border-[#1E2638] flex items-center justify-between gap-3 text-xs">
        <div class="flex items-center gap-2.5">
          <span class="w-5 text-center font-mono font-bold text-slate-400">#${index + 1}</span>

          <div class="w-7 h-7 rounded bg-[#111622] text-slate-300 font-mono text-[10px] font-bold flex items-center justify-center border border-[#1E2638]">
            ${initials}
          </div>

          <div>
            <h5 class="font-semibold text-white text-xs">${s.name}</h5>
            <p class="text-[10px] text-slate-400 font-mono">Teaches: ${s.teaches}</p>
          </div>
        </div>

        <div class="flex items-center gap-3 font-mono">
          <span class="text-white">${s.swaps} <span class="text-slate-500 text-[10px]">swaps</span></span>
          <span class="text-slate-400 text-[11px]">★ ${s.rating.toFixed(1)}</span>
        </div>
      </div>
    `;
  }).join('');
}

// ========================================================
// 10. CAMPUS SKILL MAP / DISCOVERY
// ========================================================

function renderSkillMap(selectedSkillName = 'Web Development') {
  const titleEl = document.getElementById('selected-skill-title');
  const badgeEl = document.getElementById('selected-skill-badge');
  const descEl = document.getElementById('selected-skill-desc');
  const teachersListEl = document.getElementById('graph-teachers-list');
  const learnersListEl = document.getElementById('graph-learners-list');
  const btnFilter = document.getElementById('btn-graph-filter-explore');

  if (!titleEl) return;

  const meta = SKILL_GRAPH_DATA[selectedSkillName] || {
    category: 'General',
    desc: 'Campus skill exchange domain.'
  };

  titleEl.innerText = selectedSkillName;
  if (badgeEl) badgeEl.innerText = meta.category;
  if (descEl) descEl.innerText = meta.desc;

  document.querySelectorAll('.skill-node').forEach(node => {
    if (node.dataset.skill === selectedSkillName) {
      node.className = 'skill-node active px-2.5 py-1 rounded bg-sky-950/60 text-sky-400 border border-sky-800/60 text-xs font-mono font-medium transition-colors';
    } else {
      node.className = 'skill-node px-2.5 py-1 rounded bg-[#161D2E] hover:bg-[#1C253B] text-slate-300 hover:text-white border border-[#1E2638] text-xs font-mono font-medium transition-colors';
    }
  });

  const teachers = students.filter(s => isSkillMatch(s.teaches, selectedSkillName));
  const learners = students.filter(s => isSkillMatch(s.wants, selectedSkillName));

  if (teachersListEl) {
    if (teachers.length > 0) {
      teachersListEl.innerHTML = teachers.map(t => `
        <div class="flex items-center justify-between text-[11px] font-mono">
          <span class="text-white">• ${t.name}</span>
          <span class="text-slate-500">${t.level}</span>
        </div>
      `).join('');
    } else {
      teachersListEl.innerHTML = `<span class="text-slate-500 italic text-[11px]">No peer instructors listed yet.</span>`;
    }
  }

  if (learnersListEl) {
    if (learners.length > 0) {
      learnersListEl.innerHTML = learners.map(l => `
        <div class="flex items-center justify-between text-[11px] font-mono">
          <span class="text-white">• ${l.name}</span>
          <span class="text-sky-400">${l.branch.split(' ')[0]}</span>
        </div>
      `).join('');
    } else {
      learnersListEl.innerHTML = `<span class="text-slate-500 italic text-[11px]">No open requests for this skill.</span>`;
    }
  }

  if (btnFilter) {
    btnFilter.onclick = () => {
      currentSearchQuery = selectedSkillName;
      const searchInput = document.getElementById('search-input');
      if (searchInput) searchInput.value = selectedSkillName;
      renderStudents();
      const exploreSection = document.getElementById('explore');
      if (exploreSection) exploreSection.scrollIntoView({ behavior: 'smooth' });
    };
  }
}

// ========================================================
// 3. STUDENT PROFILE MODAL
// ========================================================

function showProfileModal(studentId) {
  const student = students.find(s => s.id === studentId);
  if (!student) return;

  const modal = document.getElementById('profile-modal');
  const content = document.getElementById('profile-modal-content');
  if (!modal || !content) return;

  const initials = student.name.split(' ').map(n => n[0]).join('').substring(0, 2);

  content.innerHTML = `
    <!-- Header -->
    <div class="flex items-start gap-3 mb-5">
      <div class="w-12 h-12 rounded bg-[#161D2E] text-slate-200 border border-[#1E2638] font-mono text-sm font-bold flex items-center justify-center shrink-0">
        ${initials}
      </div>
      <div>
        <h3 class="text-lg font-bold text-white">${student.name}</h3>
        <p class="text-xs text-slate-400 font-mono mt-0.5">${student.branch} • ${student.email}</p>
        
        <div class="flex items-center gap-3 mt-1.5 text-xs font-mono">
          <span class="text-slate-300">★ ${student.rating.toFixed(1)}</span>
          <span class="text-slate-600">•</span>
          <span class="text-sky-400">${student.swaps} Completed Swaps</span>
        </div>
      </div>
    </div>

    <!-- Skills Breakdown -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
      <div class="p-3 rounded-lg bg-[#161D2E] border border-[#1E2638]">
        <span class="text-[10px] font-mono uppercase text-sky-400 block mb-1">
          Teaches
        </span>
        <p class="text-sm font-semibold text-white">${student.teaches}</p>
        <span class="inline-block mt-1 text-[11px] font-mono text-slate-400">
          Level: ${student.level}
        </span>
      </div>

      <div class="p-3 rounded-lg bg-[#161D2E] border border-[#1E2638]">
        <span class="text-[10px] font-mono uppercase text-slate-400 block mb-1">
          Learning Wishlist
        </span>
        <p class="text-sm font-semibold text-white">${student.wants}</p>
        <span class="inline-block mt-1 text-[11px] font-mono text-slate-400">
          Category: ${student.category}
        </span>
      </div>
    </div>

    <!-- Bio & Availability -->
    <div class="space-y-3 mb-6">
      <div>
        <h5 class="text-[11px] font-mono uppercase text-slate-400 mb-1">Background</h5>
        <p class="text-xs text-slate-300 leading-relaxed bg-[#161D2E] p-3 rounded-lg border border-[#1E2638]">
          "${student.bio}"
        </p>
      </div>

      <div>
        <h5 class="text-[11px] font-mono uppercase text-slate-400 mb-1">Schedule</h5>
        <div class="text-xs font-mono text-slate-300 bg-[#161D2E] p-2.5 rounded-lg border border-[#1E2638]">
          ${student.availability}
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center justify-end gap-2 pt-3 border-t border-[#1E2638]">
      <button 
        type="button" 
        onclick="closeProfileModal()"
        class="px-3.5 py-1.5 rounded-lg bg-[#161D2E] hover:bg-[#1C253B] text-slate-300 text-xs font-medium border border-[#1E2638] transition-colors"
      >
        Close
      </button>
      <button 
        type="button" 
        onclick="closeProfileModal(); openSwapModal('${student.id}');"
        class="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium transition-colors shadow-sm"
      >
        Request Skill Swap
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeProfileModal() {
  const modal = document.getElementById('profile-modal');
  if (modal) modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// ========================================================
// 4. ADD YOUR SKILL (FORM HANDLING)
// ========================================================

function addStudent(event) {
  event.preventDefault();

  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const teachInput = document.getElementById('form-teach');
  const categoryInput = document.getElementById('form-category');
  const levelInput = document.getElementById('form-level');
  const wantInput = document.getElementById('form-want');
  const availabilityInput = document.getElementById('form-availability');
  const bioInput = document.getElementById('form-bio');

  let isValid = true;

  function validateField(inputEl, errorId, condition) {
    const errorEl = document.getElementById(errorId);
    if (!condition) {
      if (errorEl) errorEl.classList.remove('hidden');
      inputEl.classList.add('border-rose-500');
      isValid = false;
    } else {
      if (errorEl) errorEl.classList.add('hidden');
      inputEl.classList.remove('border-rose-500');
    }
  }

  validateField(nameInput, 'error-name', nameInput.value.trim().length >= 2);
  validateField(emailInput, 'error-email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()));
  validateField(teachInput, 'error-teach', teachInput.value.trim().length >= 2);
  validateField(categoryInput, 'error-category', categoryInput.value !== '');
  validateField(wantInput, 'error-want', wantInput.value.trim().length >= 2);
  validateField(availabilityInput, 'error-availability', availabilityInput.value.trim().length >= 3);
  validateField(bioInput, 'error-bio', bioInput.value.trim().length >= 10);

  if (!isValid) {
    showToast('Please complete all required fields.', 'error');
    return;
  }

  const newStudent = {
    id: 'stu-' + Date.now(),
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    branch: 'Campus Student',
    teaches: teachInput.value.trim(),
    category: categoryInput.value,
    level: levelInput.value,
    wants: wantInput.value.trim(),
    availability: availabilityInput.value.trim(),
    bio: bioInput.value.trim(),
    swaps: 0,
    rating: 5.0
  };

  students.unshift(newStudent);
  saveStudents();

  document.getElementById('add-skill-form').reset();
  const charCounter = document.getElementById('bio-char-count');
  if (charCounter) charCounter.innerText = '0 / 250';

  updateStatistics();
  renderStudents();
  renderTrendingSkills();
  renderLeaderboard();
  findMatches();

  showToast(`Skill added successfully for ${newStudent.name}.`, 'success');

  const exploreSection = document.getElementById('explore');
  if (exploreSection) {
    setTimeout(() => {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  }
}

// ========================================================
// 11. DAILY SKILL TIP ROTATOR
// ========================================================

function rotateSkillTip() {
  const contentEl = document.getElementById('skill-tip-content');
  const badgeEl = document.getElementById('tip-category-badge');
  if (!contentEl) return;

  currentTipIndex = (currentTipIndex + 1) % SKILL_TIPS.length;
  const currentTip = SKILL_TIPS[currentTipIndex];

  contentEl.style.opacity = '0';
  setTimeout(() => {
    contentEl.innerText = `“${currentTip.tip}”`;
    if (badgeEl) badgeEl.innerText = currentTip.category;
    contentEl.style.opacity = '1';
  }, 200);
}

// ========================================================
// 13. TOAST NOTIFICATION SYSTEM (Linear Style)
// ========================================================

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'pointer-events-auto flex items-center gap-2.5 p-3 rounded-lg bg-[#161D2E] border border-[#2A364E] text-slate-200 text-xs font-medium shadow-xl transition-all duration-200 transform translate-y-3 opacity-0';

  let statusDot = 'bg-sky-400';
  if (type === 'success') statusDot = 'bg-emerald-400';
  if (type === 'error') statusDot = 'bg-rose-400';

  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full ${statusDot} shrink-0"></span>
    <p class="leading-snug flex-1">${message}</p>
    <button class="text-slate-500 hover:text-white text-xs px-1" onclick="this.parentElement.remove()">✕</button>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => {
      toast.remove();
    }, 200);
  }, 3200);
}

// ========================================================
// 12. EVENT LISTENERS & APPLICATION BOOTSTRAP
// ========================================================

function initEventListeners() {
  const btnHamburger = document.getElementById('btn-hamburger');
  const sidebar = document.getElementById('left-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  const btnCloseSidebar = document.getElementById('btn-close-sidebar');

  function openSidebar() {
    if (!sidebar || !backdrop) return;
    backdrop.classList.remove('hidden');
    requestAnimationFrame(() => {
      backdrop.classList.remove('opacity-0');
      backdrop.classList.add('opacity-100');
      sidebar.classList.remove('-translate-x-full');
      sidebar.classList.add('translate-x-0');
    });
    document.body.classList.add('overflow-hidden');
  }

  function closeSidebar() {
    if (!sidebar || !backdrop) return;
    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0');
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('-translate-x-full');
    setTimeout(() => {
      backdrop.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 200);
  }

  if (btnHamburger) btnHamburger.addEventListener('click', openSidebar);
  if (btnCloseSidebar) btnCloseSidebar.addEventListener('click', closeSidebar);
  if (backdrop) backdrop.addEventListener('click', closeSidebar);

  document.querySelectorAll('.sidebar-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeSidebar();
    });
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchStudents(e.target.value);
    });
  }

  const btnClearSearch = document.getElementById('btn-clear-search');
  if (btnClearSearch) {
    btnClearSearch.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      currentCategory = 'All';
      filterByCategory('All');
    });
  }

  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      filterByCategory(btn.dataset.category);
    });
  });

  const btnRunMatch = document.getElementById('btn-run-match');
  if (btnRunMatch) {
    btnRunMatch.addEventListener('click', () => {
      findMatches();
    });
  }

  const btnSwapInputs = document.getElementById('btn-swap-inputs');
  if (btnSwapInputs) {
    btnSwapInputs.addEventListener('click', () => {
      const teachInput = document.getElementById('match-teach-input');
      const learnInput = document.getElementById('match-learn-input');
      if (teachInput && learnInput) {
        const temp = teachInput.value;
        teachInput.value = learnInput.value;
        learnInput.value = temp;
        findMatches();
      }
    });
  }

  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const teach = btn.dataset.teach;
      const learn = btn.dataset.learn;
      const teachInput = document.getElementById('match-teach-input');
      const learnInput = document.getElementById('match-learn-input');
      if (teachInput) teachInput.value = teach;
      if (learnInput) learnInput.value = learn;
      findMatches(teach, learn);
    });
  });

  const addForm = document.getElementById('add-skill-form');
  if (addForm) {
    addForm.addEventListener('submit', addStudent);
  }

  const bioInput = document.getElementById('form-bio');
  const bioCounter = document.getElementById('bio-char-count');
  if (bioInput && bioCounter) {
    bioInput.addEventListener('input', () => {
      bioCounter.innerText = `${bioInput.value.length} / 250`;
    });
  }

  const profileCloseBtn = document.getElementById('btn-close-profile-modal');
  const profileBackdrop = document.getElementById('profile-modal-backdrop');
  if (profileCloseBtn) profileCloseBtn.addEventListener('click', closeProfileModal);
  if (profileBackdrop) profileBackdrop.addEventListener('click', closeProfileModal);

  const swapCloseBtn = document.getElementById('btn-close-swap-modal');
  const swapBackdrop = document.getElementById('swap-modal-backdrop');
  if (swapCloseBtn) swapCloseBtn.addEventListener('click', closeSwapModal);
  if (swapBackdrop) swapBackdrop.addEventListener('click', closeSwapModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProfileModal();
      closeSwapModal();
      closeSidebar();
    }
  });

  const btnNextTip = document.getElementById('btn-next-tip');
  if (btnNextTip) {
    btnNextTip.addEventListener('click', () => {
      rotateSkillTip();
    });
  }

  document.querySelectorAll('.skill-node').forEach(node => {
    node.addEventListener('click', () => {
      renderSkillMap(node.dataset.skill);
    });
  });

  const btnReset = document.getElementById('btn-reset-data');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm('Reset SkillSwap to default sample students & requests?')) {
        resetDemoData();
      }
    });
  }

  initScrollSpy();
}

function initScrollSpy() {
  const sections = ['hero', 'find-match', 'explore', 'skill-discovery', 'trending', 'dashboard', 'add-skill'];
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    let currentSection = 'hero';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSection = id;
        }
      }
    });

    navLinks.forEach(link => {
      if (link.dataset.section === currentSection) {
        link.classList.add('active-nav');
      } else {
        link.classList.remove('active-nav');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

// ========================================================
// 13. DOM READY INITIALIZATION
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  loadStudents();
  loadSwapRequests();
  initEventListeners();
  updateStatistics();
  renderStudents();
  renderTrendingSkills();
  renderLeaderboard();
  renderDashboard();
  renderSkillMap('Web Development');
  findMatches();

  tipInterval = setInterval(rotateSkillTip, 10000);

  setTimeout(() => {
    showToast('SkillSwap campus network online.', 'info');
  }, 600);
});
