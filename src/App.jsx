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
    { name: 'generator-swagger-es-6', stars: 11, lang: 'JavaScript', desc: 'yeoman generator. 11 stars. this is the one he puts on his resume probably' },
    { name: 'srcds_python', stars: 3, lang: 'Python', desc: 'rcon commands for game servers' },
    { name: 'StackSmashingDetected', stars: 2, lang: 'JavaScript', desc: 'uni group project' },
    { name: 'cryptodwarf', stars: 1, lang: 'Python', desc: 'crypto mining stats. december 2017. we all had a phase' },
    { name: 'CS-GO_Compomaster', stars: 0, lang: 'Java', desc: 'cs:go comp manager. in java. yeah' },
    { name: 'DOMReplay', stars: 0, lang: 'JavaScript', desc: 'records and replays dom stuff. this ones actually decent tbh' },
    { name: 'google-sheets-wow-assignment-script', stars: 0, lang: '???', desc: 'he wrote a whole programming language inside google sheets for wow raids. not a joke btw this is real go look at it' },
    { name: 'lolchan-django', stars: 0, lang: 'Python', desc: 'lolchan' },
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
    { name: 'Lasse', msg: 'jeg flyr bokstavelig talt fly til jobb og du tror fortsatt jobben din er kulere fordi du "skriver kode". du lager nettsider eskil. jeg lander en 737 i sidevind i tromsø', date: '02/08/2026' },
    { name: 'mamma', msg: 'Eskil Oda fortalte meg at pappa har kjøpt enda en gitar. den sjuende. han har ikke plass i gjøvik leiligheten engang. ring meg', date: '01/30/2026' },
    { name: 'Lukas', msg: 'bygde ferdig terrassen i dag. hva gjorde du? satt foran pcen i 12 timer og klagde på at noe som heter npm ikke fungerer', date: '01/22/2026' },
    { name: 'Oda', msg: 'storebror hvorfor har du en fan page. jeg jobber på sykehusapoteket og ingen har laget en side om meg. urettferdig egentlig', date: '01/15/2026' },
    { name: 'pappa', msg: 'Eskil har du sett den nye Strandberg gitaren?? headless. du hadde likt den. og ja jeg kjøpte en gitar til men den var på tilbud så det teller ikke. hilsen pappa i gjøvik', date: '01/10/2026' },
    { name: 'Tor Ivar (boss)', msg: 'Eskil can you please close your jira tickets', date: '01/15/2025' },
    { name: 'raid_healer_69', msg: 'the google sheets thing still haunts me. i just wanted to know where to stand during the boss fight and he pulls out a compiler', date: '06/09/2023' },
    { name: 'Lasse', msg: 'hahaha husker du den gangen eskil prøvde å lære seg å fly dronen min og kjørte den rett i fjorden. 8000kr. rett i vannet. han sa ingenting bare gikk inn og satte seg foran pcen igjen', date: '11/14/2024' },
    { name: 'anonymous', msg: 'who made this site lmao', date: '12/25/2024' },
    { name: 'Lukas', msg: 'eskil kom opp til alta i helga vi skal bygge garasje. nei du kan ikke ta med laptopen. JO jeg mener det', date: '09/03/2024' },
    { name: 'mamma', msg: 'hei eskil ring meg tilbake. kommer du hjem til karasjok til jul i år? vi har reinsdyrkjøtt. Oda kommer. Lukas og Lasse kommer også. bare du som ikke har svart', date: '03/01/2024' },
    { name: 'pappa', msg: 'fant en gibson les paul 1978 på finn.no for 45000. har ikke plass men det er en investering eskil. du skjønner det du er jo smart', date: '08/17/2024' },
    { name: 'Oda', msg: 'mamma gråter litt fordi du ikke ringer. bare ring henne eskil det tar 5 minutter', date: '04/22/2024' },
    { name: 'wow_guild_officer', msg: 'eskil afka midt i en raid igjen fordi han "hadde en idé for google sheets scriptet". vi wipet. vi wipet 3 ganger.', date: '05/15/2023' },
    { name: 'Lasse', msg: 'karasjok gutta i oslo nå. eskil viste meg kontoret hans. det er 7 personer der. hyggelig men litt som et stort soverom med skjermer', date: '07/20/2023' },
    { name: 'appresso_kollega', msg: 'han har mass mange tabs åpne til enhver tid. jeg telte en gang. 47 tabs. to av dem var wow wikier', date: '10/05/2024' },
    { name: 'Lukas', msg: 'eskil sa han skulle hjelpe meg å flytte i 2019. han dukket opp 3 timer for sent med en laptop under armen og sa "sorry hadde en bug". vi var ferdige', date: '06/12/2023' },
    { name: 'mamma', msg: 'veldig fin nettside eskil!! men hvem har laget den?? Oda sa at pappa vil ha en nettside for gitarsamlingen sin. IKKE lag det eskil', date: '02/09/2026' },
    { name: 'pappa', msg: 'Eskil kan du lage en nettside for gitarene mine?? jeg har 7 nå. nei 8. glemte den i boden. leiligheten i gjøvik er ikke så stor men det går fint', date: '02/09/2026' },
    { name: 'Oda', msg: 'var på besøk hos pappa i gjøvik. han har nå 8 gitarer. ÅTTE. i en tolværelses. han spiller på kanskje 2 av dem. eskil dette er din feil fordi du ga ham den tuner appen', date: '02/10/2026' },
    { name: 'raid_tank_420', msg: 'the #define statements in that google sheets script are genuinely unhinged. he defined a shortcut for every single class spec combo. there are like 30 of them', date: '07/01/2023' },
    { name: 'Lasse', msg: 'landa i karasjok i dag. minus 35. tenkte på eskil som sitter i oslo og klager når det er minus 5. blitt myk den karen', date: '12/20/2024' },
    { name: 'anonymous2', msg: 'i found this page by googling "eskalol" expecting a league of legends highlight. this is better', date: '11/01/2024' },
    { name: 'Lukas', msg: 'eskil sin headless gitar ser ut som noen kutta av hodet på en vanlig gitar med en sag. han sier det er "moderne design". sure bro', date: '04/10/2024' },
    { name: 'pappa', msg: 'eskil kom til gjøvik etter jul og vi spilte gitar sammen. han på sin headless og jeg på min nye taylor. Oda ringte og sa hun hørte oss gjennom telefonen til eskil som han glemte å legge på. fin kveld ellers', date: '12/26/2024' },
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
          <span className="text-black font-bold text-xs bg-yellow-400 px-2">🚧 UNDER CONSTRUCTION FOREVER 🚧</span>
        </div>

        <MarqueeBar speed={20}>
          <span className="text-yellow-400 text-sm">
            ⭐ eskalol.com ⭐ best viewed in internet explorer 6 ⭐ you are visitor number 1,337,420 ⭐ sign the guestbook ⭐ karasjok's finest export ⭐ 11 github stars and counting ⭐
          </span>
        </MarqueeBar>

        <header className="text-center py-8 relative">
          <div className="mb-4 inline-block">
            <img src={eskilPhoto} alt="him" className="w-48 h-48 object-cover rounded-full border-4 border-yellow-400 pulse" style={{ imageRendering: 'auto' }} />
            <div className="text-xs text-yellow-300 mt-1 blink">he doesnt know this site exists</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold fire-text tracking-wider mb-2" onClick={() => setClickCount(c => c + 1)}>
            <span className="glitch">ESKALOL</span>
          </h1>
          <div className="text-lg rainbow-text font-bold mb-4">
            from karasjok with mass love
          </div>
          <div className="text-sm text-cyan-300 blink mb-4">
            click the name 10 times btw
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://github.com/Eskalol" target="_blank" rel="noreferrer"
              className="bg-gray-900 text-white px-4 py-2 pixel-border hover:bg-gray-700 text-sm bounce-boy inline-block no-underline">
              💻 github
            </a>
            <a href="https://eska.no" target="_blank" rel="noreferrer"
              className="bg-purple-900 text-white px-4 py-2 pixel-border hover:bg-purple-700 text-sm pulse inline-block no-underline">
              🌐 eska.no (its down lol)
            </a>
          </div>
          <div className="mt-4">
            <VisitorCounter />
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 pb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['about', 'github', 'skills', 'timeline'].map(tab => (
              <button key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-bold uppercase pixel-border transition-all ${activeTab === tab ? 'bg-[#000080] text-white' : 'bg-[#c0c0c0] text-black hover:bg-[#a0a0a0]'}`}>
                {tab === 'about' && '👤 '}
                {tab === 'github' && '💾 '}
                {tab === 'skills' && '📊 '}
                {tab === 'timeline' && '📅 '}
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'about' && (
            <div className="space-y-4" style={{ animation: 'slideIn 0.5s ease-out' }}>
              <Win98Window title="who_is_this_guy.txt">
                <div className="text-black space-y-3 text-sm">
                  <p className="text-lg font-bold text-blue-800">
                    "Im a guy from a small town in northern Norway with passion for programming"
                  </p>
                  <p className="italic text-gray-600 text-xs">his actual github bio btw he wrote this himself</p>

                  <p>
                    so this is eskil. hes from karasjok which if you dont know is this tiny place way up in finnmark
                    where theres like 1500 people and genuinely more reindeer than humans. somehow he ended up in oslo
                    working as a developer at appresso which is this small company that does django and react stuff
                  </p>

                  <p>
                    he went to university of oslo and studied informatics. his group project was called StackSmashingDetected
                    which ok thats kinda funny if you know what a stack smashing error is and if you dont then idk google it
                  </p>

                  <p>
                    hes on like 4 different github organizations. devilry (thats UiOs assignment system),
                    something called lavvu, niehkuesports which is an esports org he cofounded,
                    and appresso which is his actual job. the esports org contact email is pokebusiness@pokesports.org and
                    i think about that a lot
                  </p>

                  <p>
                    oh and his code is in the arctic code vault on svalbard. like frozen in a mountain for 1000 years.
                    so when society collapses and they dig it up theyre gonna find his yeoman generators and
                    have absolutely no idea what to do with them
                  </p>
                </div>
              </Win98Window>

              <Win98Window title="stats.exe">
                <div className="text-black text-sm">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">📍 from</td>
                        <td className="p-2">karasjok, finnmark</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">📍 now</td>
                        <td className="p-2">oslo</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">💼 job</td>
                        <td className="p-2">dev @ appresso as</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">🎓 school</td>
                        <td className="p-2">uio, informatics</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">💻 repos</td>
                        <td className="p-2">25</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">⭐ most stars</td>
                        <td className="p-2">11</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">👥 followers</td>
                        <td className="p-2">28 (follows 46 tho)</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">🏆 badges</td>
                        <td className="p-2">arctic code vault + pull shark x2</td>
                      </tr>
                      <tr className="border-b border-gray-400">
                        <td className="p-2 font-bold bg-blue-100">🎮 games</td>
                        <td className="p-2">csgo, wow classic</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold bg-blue-100">🌐 website</td>
                        <td className="p-2">eska.no (ssl cert error for months now)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Win98Window>

              <Win98Window title="the_google_sheets_thing.doc">
                <div className="text-black text-sm space-y-2">
                  <div className="text-center">
                    <span className="text-3xl">⚔️</span>
                  </div>
                  <p>
                    ok so eskil plays wow classic right. and his guild needed to figure out raid assignments.
                    like who goes where during boss fights. normal thing
                  </p>
                  <p>
                    most people would just type it in a spreadsheet or post it in discord.
                    eskil made a programming language
                  </p>
                  <p>
                    inside google sheets. with tokenization and a parser and an interpreter.
                    it has <code className="bg-gray-200 px-1">#define</code> statements.
                    you write stuff like
                    <code className="bg-gray-200 px-1 block my-1">class == 'DeathKnight' && spec == 'Blood'</code>
                    to assign healers
                  </p>
                  <p>
                    bro used compiler theory to decide where the tank stands. go check the repo its called
                    google-sheets-wow-assignment-script and its all there
                  </p>
                </div>
              </Win98Window>

              <Win98Window title="guestbook.html">
                <div className="text-black text-sm">
                  <div className="text-center mb-3">
                    <h3 className="font-bold">guestbook</h3>
                  </div>
                  <div className="bg-gray-200 p-3 mb-3 border-2 border-gray-400">
                    <input
                      type="text"
                      placeholder="name"
                      value={guestName}
                      onChange={e => setGuestName(e.target.value)}
                      className="w-full p-1 mb-2 border-2 border-gray-400 text-sm bg-white"
                      style={{ borderStyle: 'inset' }}
                    />
                    <textarea
                      placeholder="say something"
                      value={guestMsg}
                      onChange={e => setGuestMsg(e.target.value)}
                      className="w-full p-1 mb-2 border-2 border-gray-400 text-sm bg-white h-20 resize-none"
                      style={{ borderStyle: 'inset' }}
                    />
                    <button
                      onClick={submitGuestbook}
                      className="bg-[#c0c0c0] text-black px-4 py-1 text-sm font-bold pixel-border hover:bg-[#a0a0a0] active:border-inset">
                      submit
                    </button>
                  </div>
                  <div className="max-h-[600px] overflow-y-auto">
                    {guestEntries.map((e, i) => (
                      <GuestbookEntry key={i} name={e.name} msg={e.msg} date={e.date} />
                    ))}
                  </div>
                </div>
              </Win98Window>
            </div>
          )}

          {activeTab === 'github' && (
            <div className="space-y-4" style={{ animation: 'slideIn 0.5s ease-out' }}>
              <Win98Window title="github.exe">
                <div className="text-black text-sm mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">💾</span>
                    <div>
                      <div className="font-bold text-lg">github.com/Eskalol</div>
                      <div className="text-gray-600 text-xs">25 repos, 28 followers, 46 following</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">🧊 arctic code vault</span>
                    <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">🦈 pull shark x2</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 border border-yellow-400">devilry</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 border border-yellow-400">lavvu</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 border border-yellow-400">niehkuesports</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 border border-yellow-400">appresso</span>
                  </div>
                  <p className="text-gray-600">
                    follows more people than follow him back. rough
                  </p>
                </div>
              </Win98Window>

              <Win98Window title="repos.txt">
                <div className="bg-black p-3 rounded text-green-400 font-mono">
                  <GitHubStats />
                  <div className="text-xs text-gray-500 mt-3">
                    about 15 total stars across everything. hes getting there
                  </div>
                </div>
              </Win98Window>

              <Win98Window title="languages.png">
                <div className="text-black text-sm">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="bg-yellow-400 h-4 rounded" style={{ width: '80%' }} />
                      <span className="text-xs">javascript (16 repos)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-500 h-4 rounded" style={{ width: '25%' }} />
                      <span className="text-xs">python (5 repos)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-orange-500 h-4 rounded" style={{ width: '5%' }} />
                      <span className="text-xs">java (1 repo)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-green-500 h-4 rounded" style={{ width: '5%' }} />
                      <span className="text-xs">c# (1 repo)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-cyan-500 h-4 rounded" style={{ width: '5%' }} />
                      <span className="text-xs">dart (forked the sdk once)</span>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600 text-xs">
                    works at a python/django shop. 16 out of 25 personal repos are javascript
                  </p>
                </div>
              </Win98Window>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-4" style={{ animation: 'slideIn 0.5s ease-out' }}>
              <Win98Window title="skills.exe">
                <div className="bg-black p-4 rounded">
                  <SkillBar skill="javascript" level={95} color="#f7df1e" />
                  <SkillBar skill="python / django" level={75} color="#3776ab" />
                  <SkillBar skill="react" level={80} color="#61dafb" />
                  <SkillBar skill="overcomplicating things" level={100} color="#ff0000" />
                  <SkillBar skill="csgo server admin" level={90} color="#ff8c00" />
                  <SkillBar skill="wow spreadsheet engineering" level={100} color="#9400d3" />
                  <SkillBar skill="yeoman generators" level={85} color="#5aadbb" />
                  <SkillBar skill="crypto mining (retired)" level={60} color="#f7931a" />
                  <SkillBar skill="docker" level={70} color="#2496ed" />
                  <SkillBar skill="keeping eska.no online" level={5} color="#ff0000" />
                  <SkillBar skill="getting github stars" level={3} color="#ffcc00" />
                </div>
              </Win98Window>

              <Win98Window title="achievements.txt">
                <div className="text-black text-sm space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      { icon: '🧊', title: 'ARCTIC VAULT', desc: 'code frozen in svalbard. 1000 years of storage.' },
                      { icon: '🦈', title: 'PULL SHARK x2', desc: 'merged pull requests. twice.' },
                      { icon: '⛏️', title: 'CRYPTO MINER', desc: 'built a whole monitoring stack in december 2017. called it cryptodwarf.' },
                      { icon: '🏗️', title: 'META AUTOMATOR', desc: 'made generators that make generators.' },
                      { icon: '🎮', title: 'ESPORTS ORG FOUNDER', desc: 'cofounded niehkuesports. built docker containers for csgo servers. the email is pokebusiness@pokesports.org' },
                      { icon: '📝', title: 'LANGUAGE CREATOR', desc: 'made a programming language in google sheets for wow raid assignments.' },
                      { icon: '🎓', title: 'STACK SMASHER', desc: 'named his uni project after a buffer overflow.' },
                      { icon: '💀', title: 'WEBMASTER', desc: 'eska.no has had an ssl error for a while now.' },
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

              <Win98Window title="appresso.doc">
                <div className="text-black text-sm space-y-2">
                  <h3 className="font-bold flex items-center gap-2">
                    <span className="text-2xl">🏢</span> appresso as
                  </h3>
                  <p>
                    his actual job. small dev company in oslo, like 7 people. they do django and react.
                    founded in 2014, revenue around 7 million nok. office is at oslo gate 23C
                  </p>
                  <p>
                    their github says "flexible and robust web solutions with long lifespan" which is
                    corporate speak but ok. they made django_cradmin which has 13 stars so the whole
                    company combined has more stars than eskil does individually
                  </p>
                </div>
              </Win98Window>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-4" style={{ animation: 'slideIn 0.5s ease-out' }}>
              <Win98Window title="timeline.exe">
                <div className="text-black text-sm">
                  <div className="relative border-l-4 border-blue-600 ml-4 space-y-4">
                    {[
                      { year: '???', icon: '👶', title: 'karasjok', desc: 'born in karasjok finnmark. population 1500. minus 40 in winter. more reindeer than people' },
                      { year: '~2014', icon: '🎓', title: 'moves to oslo', desc: 'starts informatics at uio. joins the devilry org. names his group project StackSmashingDetected' },
                      { year: '~2015', icon: '🎮', title: 'csgo era', desc: 'builds CS-GO_Compomaster (in java), srcds_python, the EsportFinnmark website. goes deep' },
                      { year: '~2016', icon: '🔧', title: 'yeoman arc', desc: 'makes generator-swagger-es-6. publishes to npm. gets 11 stars. also makes yo-inception which is a generator for generators' },
                      { year: '2017', icon: '⛏️', title: 'crypto', desc: 'builds cryptodwarf and cryptoforge in december 2017. we dont talk about how much he made' },
                      { year: '~2017', icon: '🎯', title: 'niehkuesports', desc: 'cofounds an esports org. dockerizes csgo servers. email: pokebusiness@pokesports.org' },
                      { year: '~2018', icon: '💼', title: 'gets a job', desc: 'joins appresso as in oslo. django and react. still has side projects going' },
                      { year: '2020', icon: '🧊', title: 'arctic vault', desc: 'github freezes his code in svalbard. its gonna be there for 1000 years' },
                      { year: '2023', icon: '⚔️', title: 'the wow thing', desc: 'builds a full programming language inside google sheets for raid assignments. with #define statements and everything. go look at the repo' },
                      { year: 'now', icon: '🌐', title: 'present', desc: 'still at appresso. eska.no still down. 28 followers. code in the arctic. living' },
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

          {showSecret && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setShowSecret(false)}>
              <div className="bg-black border-4 border-green-400 p-8 max-w-md text-center" onClick={e => e.stopPropagation()}>
                <div className="text-6xl mb-4 spin">🏆</div>
                <h2 className="text-green-400 font-mono text-xl mb-4 glitch">ok you found it</h2>
                <p className="text-green-300 font-mono text-sm mb-4">
                  you clicked a heading 10 times. why. anyway his npm package generator-swagger-es-6 is on version 0.3.9
                  which means he updated it at least 9 times and never hit 1.0
                </p>
                <p className="text-yellow-400 font-mono text-xs mb-4">
                  also he forked the entire dart sdk once. just the whole thing. its sitting in his repos. no commits on it or anything. just forked it and left it there
                </p>
                <button onClick={() => setShowSecret(false)}
                  className="bg-green-400 text-black px-4 py-2 font-bold pixel-border hover:bg-green-300">
                  ok close this
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 space-y-4">
            <div className="under-construction">
              <span className="text-black font-bold text-xs bg-yellow-400 px-2">🚧 more stuff eventually maybe 🚧</span>
            </div>

            <MarqueeBar speed={25}>
              <span className="text-cyan-400 text-xs">
                eskil if you see this please fix eska.no the cert has been expired for months ⭐ also your github bio hasnt changed since like 2016 ⭐ 28 followers ⭐ karasjok represent ⭐
              </span>
            </MarqueeBar>

            <div className="text-center text-xs text-gray-400 py-4 space-y-1">
              <p>best viewed in netscape navigator 4.0</p>
              <p>made at 2am with mass lack of sleep</p>
              <p className="blink text-yellow-400">🌟 eskalol fan club est. 2003 🌟</p>
              <div className="flex justify-center gap-4 mt-2 text-2xl">
                <span className="spin inline-block">⭐</span>
                <span className="bounce-boy inline-block">🎮</span>
                <span className="pulse inline-block">💻</span>
                <span className="shake inline-block">🔥</span>
                <span className="float inline-block">🤡</span>
              </div>
              <p className="text-gray-600 mt-2">
                © 2003{new Date().getFullYear() > 2003 ? ` to ${new Date().getFullYear()}` : ''}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
