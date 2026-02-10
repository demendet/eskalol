import { useState, useEffect } from 'react'
import eskilPhoto from '../assets/eskalol in school years ago.jpg'

function VisitorCounter() {
  const [count, setCount] = useState(1337420)
  useEffect(() => {
    const t = setInterval(() => setCount(c => c + Math.floor(Math.random() * 3)), 2000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="bg-black text-green-400 font-mono text-center p-2 pixel-border inline-block">
      <div className="text-[10px] text-gray-400">~ WEB COUNTER ~</div>
      <div className="text-2xl tracking-widest">{count.toLocaleString()}</div>
      <div className="text-[10px] text-gray-400">visitors since 2003</div>
    </div>
  )
}

function MarqueeBar({ children, speed = 15 }) {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-black border-y-2 border-yellow-400 py-1">
      <div className="marquee-text inline-block" style={{ animationDuration: `${speed}s` }}>
        {children}
      </div>
    </div>
  )
}

function Win98Window({ title, children, className = '' }) {
  return (
    <div className={`bg-[#c0c0c0] retro-border ${className}`}>
      <div className="win98-title">
        <span>📁 {title}</span>
        <div className="flex gap-0.5">
          <button className="bg-[#c0c0c0] text-black text-[10px] px-1 border border-white border-b-gray-600 border-r-gray-600 leading-none">_</button>
          <button className="bg-[#c0c0c0] text-black text-[10px] px-1 border border-white border-b-gray-600 border-r-gray-600 leading-none">□</button>
          <button className="bg-[#c0c0c0] text-black text-[10px] px-1 border border-white border-b-gray-600 border-r-gray-600 leading-none">✕</button>
        </div>
      </div>
      <div className="p-3">{children}</div>
    </div>
  )
}

function GuestbookEntry({ name, msg, date }) {
  return (
    <div className="bg-white text-black p-2 mb-2 border-2 border-gray-400 text-sm">
      <div className="font-bold text-blue-800">{name}</div>
      <div className="text-[10px] text-gray-500">{date}</div>
      <div className="mt-1">{msg}</div>
    </div>
  )
}

function FloatingEmoji({ emoji, style }) {
  return (
    <div className="fixed text-4xl pointer-events-none float" style={style}>
      {emoji}
    </div>
  )
}

function GitHubStats() {
  const repos = [
    { name: 'generator-swagger-es-6', stars: 11, lang: 'JavaScript', desc: 'His MAGNUM OPUS. A yeoman generator. 11 stars. ELEVEN. he peaked here honestly' },
    { name: 'srcds_python', stars: 3, lang: 'Python', desc: 'RCON commands for game servers because playing CS:GO wasnt enough he had to MANAGE the servers too' },
    { name: 'StackSmashingDetected', stars: 2, lang: 'JavaScript', desc: 'university group project. the name is a C buffer overflow joke. nerd alert' },
    { name: 'cryptodwarf', stars: 1, lang: 'Python', desc: 'crypto mining monitor from 2017. he was literally mining with DWARVES during the crypto boom lmaooo' },
    { name: 'CS-GO_Compomaster', stars: 0, lang: 'Java', desc: 'competition manager for CS:GO in JAVA. this man really said "yeah java is great for this"' },
    { name: 'DOMReplay', stars: 0, lang: 'JavaScript', desc: 'records and replays browser interactions. actually kinda sick ngl but zero stars rip' },
    { name: 'google-sheets-wow-assignment-script', stars: 0, lang: 'Sheets??', desc: 'wrote a CUSTOM PROGRAMMING LANGUAGE inside google sheets for WoW raid assignments. im not joking.' },
    { name: 'lolchan-django', stars: 0, lang: 'Python', desc: 'lolchan. LOL CHAN. the name says it all' },
  ]
  return (
    <div className="space-y-2">
      {repos.map((r, i) => (
        <a key={i} href={`https://github.com/Eskalol/${r.name}`} target="_blank" rel="noreferrer"
          className="block bg-gray-900 border border-gray-700 p-2 hover:bg-gray-800 no-underline transition-all hover:scale-[1.02]">
          <div className="flex justify-between items-center">
            <span className="text-yellow-300 font-bold text-sm">📂 {r.name}</span>
            <span className="text-yellow-500 text-xs">⭐ {r.stars}</span>
          </div>
          <div className="text-[10px] text-cyan-400">{r.lang}</div>
          <div className="text-xs text-gray-300 mt-1">{r.desc}</div>
        </a>
      ))}
    </div>
  )
}

function SkillBar({ skill, level, color }) {
  return (
    <div className="mb-2">
      <div className="flex justify-between text-xs text-white mb-0.5">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="bg-gray-700 h-4 pixel-border">
        <div className="h-full transition-all duration-1000" style={{ width: `${level}%`, background: color }} />
      </div>
    </div>
  )
}

function App() {
  const [showSecret, setShowSecret] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [guestName, setGuestName] = useState('')
  const [guestMsg, setGuestMsg] = useState('')
  const [guestEntries, setGuestEntries] = useState([
    { name: 'xXx_N00bSl4y3r_xXx', msg: 'sick page bro. eskil still owes me 50kr from that CS bet lol', date: '04/20/2069' },
    { name: 'CryptoKing2017', msg: 'remember when eskil said bitcoin was going to 100k? well... he was right eventually lmao took a few years tho', date: '12/25/2017' },
    { name: 'WoWRaidLeader', msg: 'this mans really wrote an entire scripting language just to assign healers in our raid. absolute legend or absolute maniac. maybe both.', date: '06/09/2023' },
    { name: 'AppressoBoss', msg: 'Eskil please stop reading this at work and finish your tickets. Thanks.', date: '01/15/2025' },
    { name: 'his mom probably', msg: 'very nice website eskil!! but when are you coming home to visit?? its been 3 months. dad says hi. we made your favorite fish.', date: '03/01/2024' },
  ])
  const [activeTab, setActiveTab] = useState('about')
  const [matrixChars, setMatrixChars] = useState([])

  useEffect(() => {
    const chars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      char: String.fromCharCode(33 + Math.random() * 93),
      left: Math.random() * 100,
      delay: Math.random() * 5,
      speed: 3 + Math.random() * 7,
    }))
    setMatrixChars(chars)
  }, [])

  useEffect(() => {
    if (clickCount >= 10 && !showSecret) setShowSecret(true)
  }, [clickCount, showSecret])

  const submitGuestbook = () => {
    if (guestName && guestMsg) {
      setGuestEntries([{ name: guestName, msg: guestMsg, date: new Date().toLocaleDateString() }, ...guestEntries])
      setGuestName('')
      setGuestMsg('')
    }
  }

  const floatingEmojis = ['🎮', '💻', '⚡', '🔥', '💀', '🤡', '👾', '🎯', '⛏️', '🪙']

  return (
    <div className="min-h-screen bg-[#000080] text-white relative overflow-hidden geocities-bg">
      {matrixChars.map(c => (
        <div key={c.id} className="fixed text-green-500 text-xs font-mono pointer-events-none opacity-20 z-0"
          style={{
            left: `${c.left}%`,
            animation: `marquee ${c.speed}s linear infinite`,
            animationDelay: `${c.delay}s`,
            top: `${Math.random() * 100}%`,
          }}>
          {c.char}
        </div>
      ))}

      {floatingEmojis.map((e, i) => (
        <FloatingEmoji key={i} emoji={e} style={{
          left: `${5 + i * 9}%`,
          top: `${10 + (i % 3) * 30}%`,
          animationDelay: `${i * 0.4}s`,
          opacity: 0.15,
          fontSize: `${20 + Math.random() * 30}px`,
          zIndex: 0,
        }} />
      ))}

      <div className="relative z-10">
        <div className="under-construction">
          <span className="text-black font-bold text-xs bg-yellow-400 px-2">🚧 UNDER CONSTRUCTION SINCE 2003 🚧</span>
        </div>

        <MarqueeBar speed={20}>
          <span className="text-yellow-400 text-sm">
            ⭐ WELCOME TO THE OFFICIAL ESKIL "ESKALOL" OPDAHL NORDLAND FAN PAGE ⭐ NOW WITH 100% MORE JAVASCRIPT ⭐ BEST VIEWED IN INTERNET EXPLORER 6 AT 800x600 ⭐ YOU ARE VISITOR NUMBER 1,337,420 ⭐ SIGN THE GUESTBOOK ⭐ POWERED BY GEOCITIES ⭐ MADE WITH NOTEPAD ⭐
          </span>
        </MarqueeBar>

        <header className="text-center py-8 relative">
          <div className="mb-4 inline-block">
            <img src={eskilPhoto} alt="the legend himself" className="w-48 h-48 object-cover rounded-full border-4 border-yellow-400 pulse" style={{ imageRendering: 'auto' }} />
            <div className="text-xs text-yellow-300 mt-1 blink">rare photo from the school days</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold fire-text tracking-wider mb-2" onClick={() => setClickCount(c => c + 1)}>
            <span className="glitch">ESKALOL</span>
          </h1>
          <div className="text-xl rainbow-text font-bold mb-4">
            ★ The Legend, The Myth, The JavaScript Developer ★
          </div>
          <div className="text-sm text-cyan-300 blink mb-4">
            👆 click the name 10 times for a secret 👆
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://github.com/Eskalol" target="_blank" rel="noreferrer"
              className="bg-gray-900 text-white px-4 py-2 pixel-border hover:bg-gray-700 text-sm bounce-boy inline-block no-underline">
              💻 GitHub (25 repos of glory)
            </a>
            <a href="https://github.com/Eskalol?tab=followers" target="_blank" rel="noreferrer"
              className="bg-purple-900 text-white px-4 py-2 pixel-border hover:bg-purple-700 text-sm pulse inline-block no-underline">
              👥 28 Followers (famous)
            </a>
          </div>
          <div className="mt-4">
            <VisitorCounter />
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 pb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['about', 'github', 'skills', 'timeline', 'guestbook'].map(tab => (
              <button key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-bold uppercase pixel-border transition-all ${activeTab === tab ? 'bg-[#000080] text-white' : 'bg-[#c0c0c0] text-black hover:bg-[#a0a0a0]'}`}>
                {tab === 'about' && '👤 '}
                {tab === 'github' && '💾 '}
                {tab === 'skills' && '📊 '}
                {tab === 'timeline' && '📅 '}
                {tab === 'guestbook' && '📝 '}
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'about' && (
            <div className="space-y-4" style={{ animation: 'slideIn 0.5s ease-out' }}>
              <Win98Window title="who_is_eskalol.txt">
                <div className="text-black space-y-3 text-sm">
                  <p className="text-lg font-bold text-blue-800">
                    "Im a guy from a small town in northern Norway with passion for programming"
                  </p>
                  <p className="italic text-gray-600 text-xs">actual quote from his github bio. poetry.</p>

                  <p>
                    So basically Eskil Opdahl Nordland aka <b>eskalol</b> is this dude from <b>Karasjok</b> up in northern Norway
                    (yes THE Karasjok, population like 1500 people, middle of Finnmark, reindeer capital of the world basically).
                    He somehow made it all the way down to Oslo and now works at <b>Appresso AS</b> which is a small dev shop that
                    does Django and React stuff. They got like 7 employees. Cozy vibes.
                  </p>

                  <p>
                    He studied at the <b>University of Oslo</b> (UiO) where he took courses like INF5750 (Open Source Development)
                    and INF3121. His university group project was literally called <b>"StackSmashingDetected"</b> which is a C
                    buffer overflow error message. Peak nerd humor honestly.
                  </p>

                  <p>
                    He is a member of the <b>Devilry</b> organization on GitHub which is UiOs assignment delivery system.
                    He also co founded an esports org called <b>NiehkuEsports</b> based in Troms Norway.
                    The contact email for that org is pokebusiness@pokesports.org which is honestly hilarious.
                  </p>

                  <p>
                    His code is literally preserved in the <b>Arctic Code Vault</b> on Svalbard. Thats right. His JavaScript
                    is frozen under permafrost in a decommissioned coal mine for 1000 years. Future civilizations will
                    discover his Yeoman generators and be very confused.
                  </p>
                </div>
              </Win98Window>

              <Win98Window title="fun_facts.exe">
                <div className="text-black text-sm">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">📍 Location</td>
                        <td className="p-2">Oslo, Norway (originally from Karasjok, Finnmark. yes really. google it.)</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">💼 Job</td>
                        <td className="p-2">Developer at Appresso AS (they do Django + React + vibes)</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">🎓 School</td>
                        <td className="p-2">University of Oslo (Informatics)</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">💻 Repos</td>
                        <td className="p-2">25 public repos (mostly JavaScript, some Python)</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">⭐ Top Stars</td>
                        <td className="p-2">11 stars on generator-swagger-es-6. ELEVEN. He is basically mass popular.</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">🏆 Badges</td>
                        <td className="p-2">Arctic Code Vault Contributor + Pull Shark x2 🦈</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">🎮 Games</td>
                        <td className="p-2">CS:GO (built tools, servers, AND an esports org) + WoW Classic (scripting language for raids)</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">⛏️ Crypto Phase</td>
                        <td className="p-2">2017 crypto mining bro (built cryptodwarf and cryptoforge). Mining with dwarves fr</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold bg-blue-100">🌐 Website</td>
                        <td className="p-2">eska.no (currently down lol. self signed cert error. classic dev move)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Win98Window>

              <Win98Window title="the_wow_incident.doc">
                <div className="text-black text-sm space-y-2">
                  <div className="text-center">
                    <span className="text-3xl">⚔️</span>
                    <h3 className="text-red-600 font-bold text-lg">THE WOW RAID ASSIGNMENT INCIDENT OF 2023</h3>
                  </div>
                  <p>
                    Ok so picture this. Its 2023. Eskil is playing WoW Classic with his guild. They need to assign roles for raids.
                    Normal people would just use a spreadsheet or discord or literally anything simple.
                  </p>
                  <p>
                    But not our boy Eskil. No no no. This man went and created an <b>ENTIRE CUSTOM PROGRAMMING LANGUAGE</b> inside
                    Google Sheets. Im talking tokenization. Parsing trees. Interpretation. The whole compiler pipeline.
                    FOR A GOOGLE SHEET. FOR A VIDEO GAME.
                  </p>
                  <p>
                    It has <code className="bg-gray-200 px-1">#define</code> statements. It has logical operators like AND, OR,
                    joint denial, and negation. You can write conditions like
                    <code className="bg-gray-200 px-1 block my-1">class == 'DeathKnight' && spec == 'Blood'</code>
                    This is the most over engineered spreadsheet in the history of gaming. Maybe in the history of spreadsheets.
                    Actually no, definitely in the history of spreadsheets.
                  </p>
                  <p className="text-center font-bold text-blue-800">
                    He automated the process of assigning healers. In a video game. Using compiler theory. In Google Sheets. King behavior.
                  </p>
                </div>
              </Win98Window>
            </div>
          )}

          {activeTab === 'github' && (
            <div className="space-y-4" style={{ animation: 'slideIn 0.5s ease-out' }}>
              <Win98Window title="github_stats.exe">
                <div className="text-black text-sm mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">💾</span>
                    <div>
                      <div className="font-bold text-lg">github.com/Eskalol</div>
                      <div className="text-gray-600 text-xs">25 repos | 28 followers | 46 following</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">🧊 Arctic Code Vault Contributor</span>
                    <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">🦈 Pull Shark x2</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 border border-yellow-400">Org: Devilry</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 border border-yellow-400">Org: Lavvu</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 border border-yellow-400">Org: NiehkuEsports</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 border border-yellow-400">Org: Appresso AS</span>
                  </div>
                  <p className="text-gray-600">
                    bro follows more people (46) than follow him (28). down bad on the github social scene.
                    but hey he has his code frozen in arctic permafrost for 1000 years so who is really winning here
                  </p>
                </div>
              </Win98Window>

              <Win98Window title="repos_ranked_by_clout.txt">
                <div className="bg-black p-3 rounded text-green-400 font-mono">
                  <div className="text-xs text-gray-500 mb-2">[LOADING REPOSITORIES...]</div>
                  <GitHubStats />
                  <div className="text-xs text-gray-500 mt-3">
                    total stars across all repos: roughly 15. mass famous.
                    for context the react repo has like 230k stars. eskil is only 229,985 stars behind.
                    closing the gap every day. well, not really. but spiritually.
                  </div>
                </div>
              </Win98Window>

              <Win98Window title="language_breakdown.png">
                <div className="text-black text-sm">
                  <h3 className="font-bold mb-2">Languages Used (by repo count)</h3>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="bg-yellow-400 h-4 rounded" style={{ width: '80%' }} />
                      <span className="text-xs">JavaScript (16 repos) 🏆</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-500 h-4 rounded" style={{ width: '25%' }} />
                      <span className="text-xs">Python (5 repos)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-orange-500 h-4 rounded" style={{ width: '5%' }} />
                      <span className="text-xs">Java (1 repo... enough said)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-green-500 h-4 rounded" style={{ width: '5%' }} />
                      <span className="text-xs">C# (1 uni project)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-cyan-500 h-4 rounded" style={{ width: '5%' }} />
                      <span className="text-xs">Dart (1 fork of the dart SDK because why not)</span>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600 text-xs">
                    this man really said "JavaScript is my personality" and went all in.
                    16 out of 25 repos. thats a 64% JavaScript rate.
                    he works at a Django/Python shop btw. the irony is thick.
                  </p>
                </div>
              </Win98Window>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-4" style={{ animation: 'slideIn 0.5s ease-out' }}>
              <Win98Window title="power_levels.exe">
                <div className="bg-black p-4 rounded">
                  <h3 className="text-green-400 font-mono text-center mb-4 text-lg">⚡ OFFICIAL POWER LEVEL ASSESSMENT ⚡</h3>
                  <SkillBar skill="JavaScript (its his whole personality)" level={95} color="#f7df1e" />
                  <SkillBar skill="Python / Django (work stuff)" level={75} color="#3776ab" />
                  <SkillBar skill="React" level={80} color="#61dafb" />
                  <SkillBar skill="Over Engineering Simple Things" level={100} color="#ff0000" />
                  <SkillBar skill="CS:GO Server Management" level={90} color="#ff8c00" />
                  <SkillBar skill="WoW Raid Assignment Automation" level={100} color="#9400d3" />
                  <SkillBar skill="Yeoman Generators (who still uses these)" level={85} color="#5aadbb" />
                  <SkillBar skill="Crypto Mining (2017 era)" level={60} color="#f7931a" />
                  <SkillBar skill="Docker" level={70} color="#2496ed" />
                  <SkillBar skill="Maintaining Personal Website (eska.no is down)" level={5} color="#ff0000" />
                  <SkillBar skill="GitHub Star Collection" level={3} color="#ffcc00" />
                  <SkillBar skill="Following People on GitHub (46 following, 28 followers)" level={88} color="#ff69b4" />
                </div>
              </Win98Window>

              <Win98Window title="achievements_unlocked.txt">
                <div className="text-black text-sm space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      { icon: '🧊', title: 'ARCTIC VAULT', desc: 'Code literally frozen in a mountain on Svalbard. Future humans will study his Yeoman generators.' },
                      { icon: '🦈', title: 'PULL SHARK x2', desc: 'Got PRs merged. Twice. Double shark. Jaws who??' },
                      { icon: '⛏️', title: 'CRYPTO MINER (RETIRED)', desc: 'Built entire monitoring stack for his mining rigs in 2017. Probably made like 50 bucks.' },
                      { icon: '🏗️', title: 'META AUTOMATOR', desc: 'Built generators that generate generators. Automated the automation of automation.' },
                      { icon: '🎮', title: 'ESPORTS FOUNDER', desc: 'Co founded NiehkuEsports. Built Docker containers for CS:GO servers. Built competition tools. The whole pipeline.' },
                      { icon: '📝', title: 'LANGUAGE DESIGNER', desc: 'Created a programming language inside Google Sheets. For WoW. Has #define statements. This is real.' },
                      { icon: '🎓', title: 'STACK SMASHER', desc: 'Named his uni project after a buffer overflow error. Professor probably had questions.' },
                      { icon: '💀', title: 'WEBSITE MAINTAINER', desc: 'Personal website eska.no has a self signed cert error. Been like that for a while. Priorities.' },
                    ].map((a, i) => (
                      <div key={i} className="bg-gray-100 p-2 border-2 border-gray-300 flex items-start gap-2">
                        <span className="text-2xl">{a.icon}</span>
                        <div>
                          <div className="font-bold text-xs">{a.title}</div>
                          <div className="text-xs text-gray-600">{a.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Win98Window>

              <Win98Window title="appresso_file.doc">
                <div className="text-black text-sm space-y-2">
                  <h3 className="font-bold flex items-center gap-2">
                    <span className="text-2xl">🏢</span> APPRESSO AS
                  </h3>
                  <p>
                    Eskil works at Appresso AS in Oslo. They are a small dev shop with about 7 employees (LinkedIn says 11 to 50 but
                    lets be real its 7). Founded in 2014. Revenue about 7 million NOK which is roughly 670k USD. Not bad for 7 people.
                  </p>
                  <p>
                    Their tech stack is Django, Python, ReactJS. Their GitHub tagline is "Flexible and robust web solutions with long lifespan"
                    which is very corporate. They made django_cradmin (13 stars) and a VSCode extension.
                  </p>
                  <p>
                    The CEO is Tor Ivar Johansen and the CTO is Espen Angell Kristiansen who has been coding since 1999.
                    Office is at Oslo gate 23C. If you want to send Eskil a pizza or something.
                  </p>
                  <p className="text-gray-500 text-xs">
                    (please dont actually send pizza to his office. or do. i cant stop you. he probably likes pizza tho)
                  </p>
                </div>
              </Win98Window>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-4" style={{ animation: 'slideIn 0.5s ease-out' }}>
              <Win98Window title="life_timeline.exe">
                <div className="text-black text-sm">
                  <div className="relative border-l-4 border-blue-600 ml-4 space-y-4">
                    {[
                      { year: '???', icon: '👶', title: 'Born in Karasjok', desc: 'Karasjok, Finnmark. Population like 1500. Reindeer outnumber humans. Minus 40 in winter. This is where legends come from apparently.' },
                      { year: '~2014', icon: '🎓', title: 'University of Oslo', desc: 'Studies Informatics at UiO. Joins the Devilry organization. Names group project StackSmashingDetected because of course he does.' },
                      { year: '~2015', icon: '🎮', title: 'CS:GO Era Begins', desc: 'Builds CS-GO_Compomaster in Java. Creates srcds_python for server management. Builds EsportFinnmark website. Goes ALL IN on esports infrastructure.' },
                      { year: '~2016', icon: '🔧', title: 'The Yeoman Phase', desc: 'Creates generator-swagger-es-6 (his most popular project ever at 11 stars). Also makes yo-inception and generator-eska-module. He is automating everything.' },
                      { year: '2017', icon: '⛏️', title: 'The Crypto Mining Phase', desc: 'December 2017. Bitcoin is mooning. Eskil builds cryptodwarf and cryptoforge to monitor his mining rigs. Named one after a literal dwarf. Mining with dwarves.' },
                      { year: '~2017', icon: '🎯', title: 'NiehkuEsports Founded', desc: 'Co founds NiehkuEsports. Builds Docker containers for CS:GO servers. The esports pipeline is complete. Contact: pokebusiness@pokesports.org (amazing).' },
                      { year: '~2018', icon: '💼', title: 'Joins Appresso AS', desc: 'Gets a real job at Appresso AS in Oslo. Django and React. Professional developer mode activated. Still thinks about CS:GO servers probably.' },
                      { year: '2020', icon: '🧊', title: 'Arctic Code Vault', desc: 'GitHub archives his code in a vault under Svalbard permafrost. His JavaScript will outlive us all. 1000 year storage. Let that sink in.' },
                      { year: '2023', icon: '⚔️', title: 'THE WOW INCIDENT', desc: 'Creates a full programming language in Google Sheets for WoW Classic raid assignments. Compiler theory meets spreadsheets meets video games. Peak Eskil.' },
                      { year: '2025', icon: '🌐', title: 'Present Day', desc: 'Still at Appresso. eska.no is still down. 28 GitHub followers. Code frozen in the arctic. Living the dream honestly.' },
                    ].map((e, i) => (
                      <div key={i} className="ml-6 relative">
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-1 border-2 border-white" />
                        <div className="bg-gray-100 p-3 rounded border border-gray-300">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{e.icon}</span>
                            <span className="font-bold text-blue-800">{e.year}</span>
                            <span className="font-bold">{e.title}</span>
                          </div>
                          <p className="text-gray-600 mt-1">{e.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Win98Window>
            </div>
          )}

          {activeTab === 'guestbook' && (
            <div className="space-y-4" style={{ animation: 'slideIn 0.5s ease-out' }}>
              <Win98Window title="guestbook.html">
                <div className="text-black text-sm">
                  <div className="text-center mb-3">
                    <span className="text-2xl">📝</span>
                    <h3 className="font-bold">SIGN THE GUESTBOOK!!</h3>
                    <p className="text-xs text-gray-500">let eskil know what you think</p>
                  </div>
                  <div className="bg-gray-200 p-3 mb-3 border-2 border-gray-400">
                    <input
                      type="text"
                      placeholder="your name (or alias)"
                      value={guestName}
                      onChange={e => setGuestName(e.target.value)}
                      className="w-full p-1 mb-2 border-2 border-gray-400 text-sm bg-white"
                      style={{ borderStyle: 'inset' }}
                    />
                    <textarea
                      placeholder="write something nice (or not)"
                      value={guestMsg}
                      onChange={e => setGuestMsg(e.target.value)}
                      className="w-full p-1 mb-2 border-2 border-gray-400 text-sm bg-white h-20 resize-none"
                      style={{ borderStyle: 'inset' }}
                    />
                    <button
                      onClick={submitGuestbook}
                      className="bg-[#c0c0c0] text-black px-4 py-1 text-sm font-bold pixel-border hover:bg-[#a0a0a0] active:border-inset">
                      📮 SUBMIT
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {guestEntries.map((e, i) => (
                      <GuestbookEntry key={i} name={e.name} msg={e.msg} date={e.date} />
                    ))}
                  </div>
                </div>
              </Win98Window>
            </div>
          )}

          {showSecret && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setShowSecret(false)}>
              <div className="bg-black border-4 border-green-400 p-8 max-w-md text-center" onClick={e => e.stopPropagation()}>
                <div className="text-6xl mb-4 spin">🏆</div>
                <h2 className="text-green-400 font-mono text-xl mb-4 glitch">SECRET UNLOCKED</h2>
                <p className="text-green-300 font-mono text-sm mb-4">
                  you found the easter egg. congrats. you clicked a heading 10 times.
                  thats basically what eskil does at work except he clicks buttons in Django admin.
                </p>
                <p className="text-yellow-400 font-mono text-xs mb-4">
                  fun fact: eskils npm package generator-swagger-es-6 is at version 0.3.9
                  which means he published it 9+ times and it still never hit 1.0.
                  the forever beta king. respect honestly.
                </p>
                <button onClick={() => setShowSecret(false)}
                  className="bg-green-400 text-black px-4 py-2 font-bold pixel-border hover:bg-green-300">
                  CLOSE (or click outside idc)
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 space-y-4">
            <div className="under-construction">
              <span className="text-black font-bold text-xs bg-yellow-400 px-2">🚧 MORE SECTIONS COMING SOON (PROBABLY NOT) 🚧</span>
            </div>

            <MarqueeBar speed={25}>
              <span className="text-cyan-400 text-xs">
                🔥 THIS PAGE WAS MADE WITH LOVE AND JAVASCRIPT 🔥 ESKIL IF YOU ARE READING THIS PLEASE FIX ESKA.NO 🔥 YOUR SSL CERT IS EXPIRED BRO 🔥 ALSO UPDATE YOUR GITHUB BIO ITS BEEN THE SAME SINCE LIKE 2016 🔥 28 FOLLOWERS AND COUNTING 🔥 ARCTIC CODE VAULT LEGEND 🔥
              </span>
            </MarqueeBar>

            <div className="text-center text-xs text-gray-400 py-4 space-y-1">
              <p>best viewed in Netscape Navigator 4.0 at 800x600 resolution</p>
              <p>this site is certified 100% hand crafted artisanal HTML</p>
              <p>no frameworks were harmed in the making of this website (just kidding its React + Vite + Tailwind lol)</p>
              <p className="blink text-yellow-400">🌟 eskalol fan club established 2003 🌟</p>
              <div className="flex justify-center gap-4 mt-2 text-2xl">
                <span className="spin inline-block">⭐</span>
                <span className="bounce-boy inline-block">🎮</span>
                <span className="pulse inline-block">💻</span>
                <span className="shake inline-block">🔥</span>
                <span className="float inline-block">🤡</span>
              </div>
              <p className="text-gray-600 mt-2">
                © 2003{new Date().getFullYear() > 2003 ? ` to ${new Date().getFullYear()}` : ''} eskalol fan club international. all rights reserved. none of this is real. or is it. eskil is real tho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
