const VIDEO_ROOT = "https://cdn.jsdelivr.net/gh/dianzixiaobai-cpu/silk-road-lotus@main/assets/videos/";
const POSTER_ROOT = "https://cdn.jsdelivr.net/gh/dianzixiaobai-cpu/silk-road-lotus@main/assets/posters/";
const VIDEO_FALLBACK_ROOT = "https://dianzixiaobai-cpu.github.io/silk-road-lotus/assets/videos/";
const STORAGE_KEY = "silk-road-lotus-progress-v1";

const prologuePages = [
  {
    kind: "cover",
    image: "assets/characters/sulaiman.png",
    kicker: "入卷 · 时代与行旅",
    title: "长风起，丝路未眠",
    identity: "大唐开元末至天宝初 · 河西走廊",
    description: "长安、河西、西域与波斯湾沿岸，被驼铃与商路连在一起。你带着二十驼货物和半块神秘瓷片来到玉门关：有人说，完整瓷盏藏着大唐西进的兵势图；一路所见，却尽是水渠、屯田与挡沙的树。",
    culture: "丝绸之路不只运送货物，也让技艺、知识与生活方式跨越山海。",
    inscription: "开元末年 · 玉门关外"
  },
  {
    image: "assets/characters/sulaiman.png",
    kicker: "人物志 · 你",
    title: "苏莱曼",
    identity: "30岁 · 大食商人 · 玩家所扮演的人",
    description: "行走丝路十年，以乳香、琉璃和金银器往来长安。谨慎、善良，也会在利润、恐惧与诚信之间摇摆。你所作的每一次判断，都将成为他的命运。",
    culture: "商旅以账本记货、以水囊度路；货通有无，先从彼此守信开始。",
    inscription: "十年风沙 · 一念抉择"
  },
  {
    image: "assets/characters/hadi.png",
    kicker: "人物志 · 同行",
    title: "哈迪",
    identity: "21岁 · 年轻伙计",
    description: "与你相伴上路的年轻助手。瘦而灵活，机灵、忠诚，遇到变故时容易紧张。他会在最危险的时候，提醒你每个决定都不只关乎自己。",
    culture: "丝路商队彼此照应，人与人之间的信任，是穿越荒漠的另一种水源。",
    inscription: "同行有义 · 患难见心"
  },
  {
    image: "assets/characters/ibrahim.png",
    kicker: "人物志 · 西市",
    title: "伊卜拉欣",
    identity: "55岁 · 波斯货栈老板",
    description: "在长安生活二十年，熟悉西市的人情与商律。亲切稳重，观察入微。他的货栈既收纳远方来客，也见证不同语言与习俗如何在日常生意里相互理解。",
    culture: "唐代长安西市汇聚多方商旅，胡饼、香料、织物与器物在此相遇。",
    inscription: "寓居长安 · 四海一家"
  },
  {
    image: "assets/characters/wang.png",
    kicker: "人物志 · 官署",
    title: "王佐吏",
    identity: "42岁 · 长安西市署佐吏",
    description: "负责西市文书与查验。程序严谨，不苟言笑，说话从不高声。他相信规矩不是为了压人，而是让来自不同地方的人能够在同一座市场里安心交易。",
    culture: "木牍、封泥、铜权与长杆秤，让贸易有据、货物有衡、争议有解。",
    inscription: "执法有度 · 守市以信"
  },
  {
    image: "assets/characters/zhang-mo.png",
    kicker: "人物志 · 青泥村",
    title: "张墨",
    identity: "28岁 · 瓷匠之子 · 行踪成谜",
    description: "居于终南山麓青泥村，似乎与失踪的莲心盏有关。少言沉静，谈到父亲留下的瓷盏与水脉时，眼神会忽然明亮。他的真实来历，仍藏在一卷未展开的图中。",
    culture: "泥、火与水在匠人手中相济；器物既盛日常，也能保存一代人的知识。",
    inscription: "瓷火未熄 · 身世未明"
  },
  {
    image: "assets/characters/ali.png",
    kicker: "人物志 · 迷局",
    title: "阿里",
    identity: "35岁 · 丝路同行商人 · 来意难辨",
    description: "在波斯货栈主动接近你的同乡。外表豪爽，似乎知道莲心盏的传闻；他谈起利润时十分笃定，目光却常常避开对视。此人是助力还是暗礁，只能由你亲自判断。",
    culture: "丝路带来交流，也带来流言。兼听、求证与克制，是穿过迷雾的路标。",
    inscription: "同乡相逢 · 真意难量"
  },
  {
    image: "assets/characters/sulaiman.png",
    kicker: "启程 · 你的使命",
    title: "让真相在水中显影",
    identity: "七次抉择 · 九种结局 · 命运可以回溯",
    description: "你不是旁观者。你将以苏莱曼的眼睛看见冲突，以他的处境权衡得失，并在传闻与亲历之间寻找答案。和平并非一句口号，而是治水、护林、守信、协商与分享技术时作出的具体选择。",
    culture: "因势利导，节用惜物；万物并育，道并行而不相悖。",
    inscription: "以亲眼所见 · 回答千年传闻"
  }
];

const choiceWisdom = {
  1: "信近于义，言可复也。——《论语》",
  2: "和实生物，同则不继。——《国语》",
  3: "兼听则明，偏信则暗。——《资治通鉴》",
  4: "知者利仁。——《论语》",
  5: "知止而后有定，定而后能静。——《大学》",
  6: "见善如不及，见不善如探汤。——《论语》",
  7: "万物并育而不相害，道并行而不相悖。——《中庸》"
};

const segmentDestinations = {
  "intro.mp4": "玉门",
  "1-a.mp4": "关城", "1-b.mp4": "长安",
  "2-a.mp4": "西市", "2-b.mp4": "货栈",
  "3-a.mp4": "青泥", "3-b.mp4": "青泥",
  "4-a.mp4": "官署", "4-b.mp4": "西市",
  "5-a.mp4": "北线", "5-b.mp4": "市署",
  "6-a.mp4": "归途", "6-b.mp4": "窑场",
  "7-a.mp4": "故土", "7-b.mp4": "西域", "7-c.mp4": "巴士拉"
};

const choices = {
  1: { location: "玉门关", title: "关前的珍珠", prompt: "守关军士即将查到藏有珍珠的夹层。你是否主动取出珍珠，向关吏如实申报？", options: [
    { letter: "A", text: "主动取出，说明疏忽遗漏，愿意补税认罚", hint: "坦诚或许会失去眼前的小利。", video: "1-a.mp4", ending: 1 },
    { letter: "B", text: "不动声色，赌关吏不会细查夹层", hint: "赌一次侥幸，继续追寻莲心盏。", video: "1-b.mp4", next: 2 }
  ]},
  2: { location: "长安西市", title: "查税的关口", prompt: "珍珠被查获，素不相识的伊卜拉欣愿意替你作保。是否接受他的求情，认罚了事？", options: [
    { letter: "A", text: "不接受，坚持自己并非走私，要和官吏理论清楚", hint: "维护自己的解释，不肯退让。", video: "2-a.mp4", ending: 2 },
    { letter: "B", text: "接受求情，认罚并谢过伊卜拉欣", hint: "承担后果，也给彼此留下余地。", video: "2-b.mp4", next: 3 }
  ]},
  3: { location: "波斯货栈", title: "阿里的邀约", prompt: "陌生同乡阿里声称莲心盏是大唐西进的证据，邀你夜袭青泥村。你是否立刻合作？", options: [
    { letter: "A", text: "当即答应，和阿里一起谋划夜袭青泥村", hint: "相信同乡，也相信五五分成的利润。", video: "3-a.mp4", ending: 3 },
    { letter: "B", text: "借口需要考虑，先独自去青泥村探查", hint: "暂缓判断，用亲眼所见校验传闻。", video: "3-b.mp4", next: 4 }
  ]},
  4: { location: "终南山青泥村", title: "竹林边的意外", prompt: "院中争执骤停，脚步声正向门口逼近。你是否推门进去，帮张墨对峙？", options: [
    { letter: "A", text: "推门而入，斥责官府仗势欺人", hint: "凭直觉和热血立刻介入。", video: "4-a.mp4", ending: 4 },
    { letter: "B", text: "转身往竹林跑，先引开追出来的人", hint: "先脱离混乱，等待更多线索。", video: "4-b.mp4", next: 5 }
  ]},
  5: { location: "长安西市", title: "阿里落网之后", prompt: "阿里因勾结沙匪、散播谣言被捕。你曾与他见面，是否立刻收拾货物连夜离开？", options: [
    { letter: "A", text: "打包贵重货物，走北线绕道回国", hint: "抢在牵连到来前逃离长安。", video: "5-a.mp4", ending: 5 },
    { letter: "B", text: "按兵不动，照常经营，等待官府查问", hint: "没有做亏心事，便不让恐惧替你决定。", video: "5-b.mp4", next: 6 }
  ]},
  6: { location: "长安市署", title: "真相的入口", prompt: "王佐吏邀你配合官府引出沙匪余党，并承诺让你亲眼看到莲心盏。是否答应？", options: [
    { letter: "A", text: "拒绝，只想安分做生意，不再卷入是非", hint: "守住财富与个人安稳。", video: "6-a.mp4", ending: 6 },
    { letter: "B", text: "答应配合，亲自弄清莲心盏的秘密", hint: "承担风险，也承担求证真相的责任。", video: "6-b.mp4", next: 7 }
  ]},
  7: { location: "终南山窑场", title: "归途的方向", prompt: "兵势图原来是水利与林木图。得知全部真相后，你想怎样践行这份和平心愿？", options: [
    { letter: "A", text: "不愿再涉险，做完这单生意就平安回家", hint: "把亲眼所见留在自己的商路上。", video: "7-a.mp4", ending: 7 },
    { letter: "B", text: "带莲心盏出使西域，揭穿谣言、传授治水之法", hint: "以亲历与行动，让各国重新理解大唐。", video: "7-b.mp4", ending: 8 },
    { letter: "C", text: "留在大唐学习制瓷与水利，学成后带回故土", hint: "让共生智慧在另一片土地扎根。", video: "7-c.mp4", ending: 9 }
  ]}
};

const endings = {
  1: { title: "安稳余生", summary: "你选择安分与坦诚，避开风波，也未能窥见莲心盏的真相。丝路漫漫，你守住的是岁岁平安与货通有无。", quote: "地势坤，君子以厚德载物。", source: "《周易》", reflection: "安稳不是等来的，而是一步一个脚印、不欺不瞒走出来的。" },
  2: { title: "流言添薪", summary: "一时意气断送了你的大唐商路，你也在无意中成为谣言的推手。偏见像风沙蔓延，最终困住每一个丝路行人。", quote: "万物并育而不相害，道并行而不相悖。", source: "《中庸》", reflection: "与人相处如此，国与国相处亦如此：不必以冲突证明自身。" },
  3: { title: "黄雀在后", summary: "轻信与贪利让你撞进别人布好的局。你付出自由与商路的代价，却始终没有看见真相。", quote: "德者本也，财者末也。", source: "《大学》", reflection: "见利思义，看见好处时先停一停，这一念之差便是天壤之别。" },
  4: { title: "风波骤起", summary: "贸然闯入打乱了所有布局，真相随莲心盏消失，只留下混乱和更难辨真假的流言。", quote: "知人者智，自知者明。", source: "《老子》", reflection: "真正的善意不只有勇气，也需要审时度势、因势利导的智慧。" },
  5: { title: "仓皇之祸", summary: "恐惧让你放弃判断，逃进更危险的北线。货物尽失，同行受伤，真正困住你的是心里的那座沙漠。", quote: "知止而后有定，定而后能静。", source: "《大学》", reflection: "心慌则乱。越是风沙扑面，越要先站稳，再辨认方向。" },
  6: { title: "抱憾而归", summary: "你守住了财富与安稳，却永远错过莲心盏的真相。有些门一旦关上，便只剩传闻。", quote: "穷则独善其身，达则兼善天下。", source: "《孟子》", reflection: "独善其身没有错，但有能力为更多人做些什么时，转身也意味着错过成长。" },
  7: { title: "独善之路", summary: "你不再涉险，却仍以亲眼所见消解了一些谣言。个体的安稳，终究系在整条道路的和平之上。", quote: "士不可以不弘毅，任重而道远。", source: "《论语》", reflection: "和平由普通人多担一分、多走一步，慢慢汇成。" },
  8: { title: "莲开万里", summary: "你带着莲心盏走过高昌、龟兹与疏勒，让水利图、林木图和共生智慧跨越山海，和平的莲花开遍万里丝路。", quote: "以德服人者，中心悦而诚服也。", source: "《孟子》", reflection: "因为懂得与自然共生，所以懂得与邻国共荣。真正的强大不是征服，而是养护与给予。", trueEnding: true },
  9: { title: "匠火西传", summary: "你把制瓷、治水与固沙之法带回故土。泥土化为丝路瓷，荒漠长出良田，中华智慧在异域生根。", quote: "致中和，天地位焉，万物育焉。", source: "《中庸》", reflection: "文明的和平底色，是愿意把过好日子的本事分享给每一个向往美好生活的人。", trueEnding: true }
};

const chapterNames = { intro: "序章 · 风起玉门", 1: "第一折 · 玉门藏珠", 2: "第二折 · 西市问律", 3: "第三折 · 同乡迷局", 4: "第四折 · 竹影惊心", 5: "第五折 · 风声鹤唳", 6: "第六折 · 盏底真相", 7: "终章 · 莲心何往" };
const numerals = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];

const $ = (id) => document.getElementById(id);
const video = $("storyVideo");
let state = loadState();
let activeSegment = null;
let pendingDestination = null;
let toastTimer = null;
let mediaLoadTimer = null;
let glazeTimer = null;
let prologueIndex = 0;

function defaultState() { return { unlocked: [], history: [], currentChoice: 1, hasStarted: false, segment: null }; }
function loadState() {
  try { return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") }; }
  catch { return defaultState(); }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); updateCounters(); }

function updateCounters() {
  $("endingCount").textContent = `${state.unlocked.length}/9`;
  $("timelineCount").textContent = state.history.length;
  $("continueButton").hidden = !state.hasStarted;
}

function startNewJourney() {
  state.history = [];
  state.currentChoice = 1;
  state.hasStarted = false;
  saveState();
  $("opening").hidden = true;
  openPrologue();
}

function openPrologue() {
  video.pause();
  $("prologue").hidden = false;
  prologueIndex = 0;
  renderProloguePage();
}

function beginStory() {
  $("prologue").hidden = true;
  state.hasStarted = true;
  saveState();
  playSegment("intro.mp4", { choice: 1 }, "序章 · 风起玉门");
}

function renderProloguePage() {
  const page = prologuePages[prologueIndex];
  const stage = $("prologueStage");
  stage.classList.remove("page-arriving");
  stage.classList.toggle("cover-page", page.kind === "cover");
  void stage.offsetWidth;
  stage.classList.add("page-arriving");
  $("prologueKicker").textContent = page.kicker;
  $("prologueCount").textContent = `${numerals[prologueIndex]} / ${numerals[prologuePages.length - 1]}`;
  $("prologueTitle").textContent = page.title;
  $("prologueIdentity").textContent = page.identity;
  $("prologueDescription").textContent = page.description;
  $("portraitInscription").textContent = page.inscription;
  const portrait = $("prologuePortrait");
  const landscape = $("prologueLandscape");
  if (page.image) {
    portrait.src = page.image;
    portrait.alt = `${page.title}人物定妆照`;
    portrait.hidden = false;
    landscape.hidden = true;
    stage.classList.remove("background-page");
  } else {
    portrait.hidden = true;
    portrait.removeAttribute("src");
    landscape.hidden = false;
    stage.classList.add("background-page");
  }
  $("prologuePrevButton").disabled = prologueIndex === 0;
  $("prologueNextButton").hidden = prologueIndex === prologuePages.length - 1;
  $("prologueEnterButton").hidden = prologueIndex !== prologuePages.length - 1;
  document.querySelectorAll(".prologue-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === prologueIndex);
    dot.setAttribute("aria-current", index === prologueIndex ? "step" : "false");
  });
}

function changeProloguePage(delta) {
  const next = Math.max(0, Math.min(prologuePages.length - 1, prologueIndex + delta));
  if (next === prologueIndex) return;
  prologueIndex = next;
  renderProloguePage();
}

function createPrologueDots() {
  const dots = $("prologueDots");
  dots.innerHTML = "";
  prologuePages.forEach((page, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "prologue-dot";
    button.setAttribute("aria-label", `第${numerals[index]}页：${page.title}`);
    button.addEventListener("click", () => { prologueIndex = index; renderProloguePage(); });
    dots.appendChild(button);
  });
}

function createChoicePetals() {
  const container = $("choicePetals");
  if (!container || container.children.length) return;
  for (let index = 0; index < 7; index += 1) {
    const petal = document.createElement("span");
    petal.className = "choice-petal";
    container.appendChild(petal);
  }
}

function updateChoicePetals(choiceId) {
  const petals = [...document.querySelectorAll(".choice-petal")];
  petals.forEach((petal, index) => {
    petal.classList.toggle("active", index === choiceId - 1);
    petal.classList.toggle("reached", index < choiceId - 1);
  });
  $("choiceProgressText").textContent = `${numerals[choiceId - 1]} / 七`;
}

function triggerGlaze() {
  const shell = $("gameShell");
  clearTimeout(glazeTimer);
  shell.classList.remove("glaze-flow");
  void shell.offsetWidth;
  shell.classList.add("glaze-flow");
  glazeTimer = setTimeout(() => shell.classList.remove("glaze-flow"), 900);
}

function continueJourney() {
  $("opening").hidden = true;
  showChoice(state.currentChoice || 1);
}

function playSegment(file, destination, title) {
  closeDrawers();
  $("choicePanel").hidden = true;
  $("endingPanel").hidden = true;
  $("loading").hidden = false;
  $("playerControls").hidden = false;
  $("watchStatus").hidden = false;
  $("watchTitle").textContent = title;
  $("chapterMark").textContent = title;
  $("routeDestination").textContent = segmentDestinations[file] || "下一驿";
  activeSegment = file;
  pendingDestination = destination;
  state.segment = file;
  saveState();
  video.dataset.fallbackTried = "0";
  clearTimeout(mediaLoadTimer);
  video.src = VIDEO_ROOT + file;
  video.poster = `${POSTER_ROOT}${file.replace(/\.mp4$/, ".jpg")}`;
  video.load();
  mediaLoadTimer = setTimeout(() => {
    if (activeSegment === file && video.readyState < 1 && video.dataset.fallbackTried !== "1") {
      video.dataset.fallbackTried = "1";
      video.src = VIDEO_FALLBACK_ROOT + file;
      video.load();
      const retry = video.play();
      if (retry) retry.catch(() => showToast("请点击画面继续播放"));
      showToast("正在切换备用线路");
    }
  }, 9000);
  const promise = video.play();
  if (promise) promise.catch(() => showToast("点击画面继续播放"));
}

function showChoice(id) {
  const data = choices[id];
  if (!data) return;
  pendingDestination = null;
  state.currentChoice = id;
  state.segment = null;
  saveState();
  $("loading").hidden = true;
  $("playerControls").hidden = true;
  $("watchStatus").hidden = true;
  $("endingPanel").hidden = true;
  $("chapterMark").textContent = chapterNames[id];
  video.poster = `${POSTER_ROOT}${id === 1 ? "intro" : `${id - 1}-b`}.jpg`;
  $("choiceIndex").textContent = `抉择${numerals[id - 1]}`;
  $("choiceLocation").textContent = data.location;
  $("choiceTitle").textContent = data.title;
  $("choicePrompt").textContent = data.prompt;
  $("choiceWisdom").textContent = choiceWisdom[id];
  updateChoicePetals(id);
  const list = $("choiceList");
  list.style.setProperty("--choice-count", data.options.length);
  list.innerHTML = "";
  data.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-option";
    button.innerHTML = `<span class="choice-letter">${option.letter}</span><strong>${option.text}</strong><small>${option.hint}</small>`;
    button.addEventListener("click", () => choose(id, option));
    list.appendChild(button);
  });
  $("choicePanel").hidden = false;
}

function choose(choiceId, option) {
  if ($("gameShell").classList.contains("glaze-flow")) return;
  state.history = state.history.filter((entry) => entry.choice < choiceId);
  state.history.push({ choice: choiceId, letter: option.letter, text: option.text });
  state.currentChoice = option.next || choiceId;
  saveState();
  const destination = option.ending ? { ending: option.ending } : { choice: option.next };
  document.querySelectorAll(".choice-option").forEach((button) => { button.disabled = true; });
  triggerGlaze();
  setTimeout(() => playSegment(option.video, destination, `${chapterNames[choiceId]} · 选择 ${option.letter}`), 360);
}

function showEnding(id) {
  const data = endings[id];
  if (!state.unlocked.includes(id)) state.unlocked.push(id);
  state.segment = null;
  saveState();
  $("loading").hidden = true;
  $("playerControls").hidden = true;
  $("watchStatus").hidden = true;
  $("choicePanel").hidden = true;
  $("chapterMark").textContent = `结局${numerals[id - 1]} · ${data.title}`;
  const lastEntry = state.history[state.history.length - 1];
  if (lastEntry) video.poster = `${POSTER_ROOT}${lastEntry.choice}-${lastEntry.letter.toLowerCase()}.jpg`;
  $("endingNumber").textContent = `结局${numerals[id - 1]} / 九`;
  $("endingStatus").textContent = data.trueEnding ? "莲心已明 · 和平之路" : "命运已落笔";
  const sealText = data.trueEnding ? "莲心" : data.title.slice(0, 2);
  $("endingSeal").innerHTML = sealText.split("").join("<br>");
  $("endingTitle").textContent = data.title;
  $("endingSummary").textContent = data.summary;
  $("endingQuote").innerHTML = `“${data.quote}”<small>—— ${data.source}</small>`;
  $("endingReflection").textContent = data.reflection;
  $("endingPanel").hidden = false;
  showToast(`已收录结局：${data.title}`);
}

function videoEnded() {
  if (!pendingDestination) return;
  const destination = pendingDestination;
  pendingDestination = null;
  if (destination.choice) showChoice(destination.choice);
  else if (destination.ending) showEnding(destination.ending);
}

function openTimeline() {
  renderTimeline();
  openDrawer("timelineDrawer");
}

function renderTimeline() {
  const list = $("timelineList");
  if (!state.history.length) {
    list.innerHTML = '<p class="timeline-empty">你还没有作出选择。故事从玉门关前开始。</p>';
    return;
  }
  list.innerHTML = "";
  state.history.forEach((entry) => {
    const data = choices[entry.choice];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "timeline-item";
    button.innerHTML = `<span>抉择${numerals[entry.choice - 1]} · ${data.location}</span><strong>${data.title}</strong><small>${entry.letter}. ${entry.text}</small>`;
    button.addEventListener("click", () => rewindTo(entry.choice));
    list.appendChild(button);
  });
}

function rewindTo(choiceId) {
  video.pause();
  state.history = state.history.filter((entry) => entry.choice < choiceId);
  state.currentChoice = choiceId;
  state.segment = null;
  saveState();
  closeDrawers();
  showChoice(choiceId);
  showToast(`已回到抉择${numerals[choiceId - 1]}`);
}

function renderGallery() {
  const grid = $("endingGrid");
  grid.innerHTML = "";
  Object.entries(endings).forEach(([id, ending]) => {
    const unlocked = state.unlocked.includes(Number(id));
    const card = document.createElement("article");
    card.className = `ending-card${unlocked ? "" : " locked"}${ending.trueEnding && unlocked ? " true-ending" : ""}`;
    card.innerHTML = `<span class="card-no">结局${numerals[Number(id) - 1]}</span><h3>${unlocked ? ending.title : "未解锁的命运"}</h3><p>${unlocked ? ending.reflection : "沿另一条水脉前行，或许会抵达这里。"}</p>`;
    grid.appendChild(card);
  });
  const percent = (state.unlocked.length / 9) * 100;
  $("galleryProgressText").textContent = `已解锁 ${state.unlocked.length} / 9`;
  $("galleryProgressBar").style.width = `${percent}%`;
}

function openGallery() { renderGallery(); openDrawer("galleryDrawer"); }
function openInfo() { openDrawer("infoDrawer"); }
function openDrawer(id) { $(id).hidden = false; $("modalBackdrop").hidden = false; }
function closeDrawers() { $("timelineDrawer").hidden = true; $("galleryDrawer").hidden = true; $("infoDrawer").hidden = true; $("modalBackdrop").hidden = true; }

function showHome() {
  video.pause();
  closeDrawers();
  $("prologue").hidden = true;
  $("choicePanel").hidden = true;
  $("endingPanel").hidden = true;
  $("playerControls").hidden = true;
  $("watchStatus").hidden = true;
  $("opening").hidden = false;
  updateCounters();
}

function formatTime(value) {
  if (!Number.isFinite(value)) return "00:00";
  const minutes = Math.floor(value / 60).toString().padStart(2, "0");
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateProgress() {
  const percent = video.duration ? (video.currentTime / video.duration) * 100 : 0;
  $("progressFill").style.width = `${percent}%`;
  $("progressTrack").style.setProperty("--route-progress", `${Math.min(93, percent)}%`);
  $("progressTrack").setAttribute("aria-valuenow", Math.round(percent));
  $("timeDisplay").textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
  if (video.buffered.length && video.duration) {
    $("progressBuffer").style.width = `${(video.buffered.end(video.buffered.length - 1) / video.duration) * 100}%`;
  }
}

function showToast(message) {
  clearTimeout(toastTimer);
  const toast = $("toast");
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = setTimeout(() => { toast.hidden = true; }, 2400);
}

video.addEventListener("loadedmetadata", () => { clearTimeout(mediaLoadTimer); updateProgress(); });
video.addEventListener("loadeddata", () => { $("loading").hidden = true; updateProgress(); });
video.addEventListener("canplay", () => { if (!video.paused) $("loading").hidden = true; });
video.addEventListener("waiting", () => { if (!video.paused) $("loading").hidden = false; });
video.addEventListener("stalled", () => { if (!video.paused) $("loading").hidden = false; });
video.addEventListener("playing", () => { $("loading").hidden = true; $("playButton").textContent = "Ⅱ"; });
video.addEventListener("pause", () => { $("playButton").textContent = "▶"; });
video.addEventListener("timeupdate", updateProgress);
video.addEventListener("progress", updateProgress);
video.addEventListener("ended", videoEnded);
video.addEventListener("click", () => video.paused ? video.play() : video.pause());
video.addEventListener("error", () => {
  clearTimeout(mediaLoadTimer);
  if (activeSegment && video.dataset.fallbackTried !== "1") {
    video.dataset.fallbackTried = "1";
    $("loading").hidden = false;
    video.src = VIDEO_FALLBACK_ROOT + activeSegment;
    video.load();
    const retry = video.play();
    if (retry) retry.catch(() => showToast("请点击画面继续播放"));
    showToast("正在切换备用线路");
    return;
  }
  $("loading").hidden = true;
  showToast("视频未能载入，请刷新页面重试");
});

$("startButton").addEventListener("click", startNewJourney);
$("continueButton").addEventListener("click", continueJourney);
$("prologueSkipButton").addEventListener("click", beginStory);
$("prologueEnterButton").addEventListener("click", beginStory);
$("prologuePrevButton").addEventListener("click", () => changeProloguePage(-1));
$("prologueNextButton").addEventListener("click", () => changeProloguePage(1));
$("homeButton").addEventListener("click", showHome);
$("infoButton").addEventListener("click", openInfo);
$("timelineButton").addEventListener("click", openTimeline);
$("galleryButton").addEventListener("click", openGallery);
$("endingGalleryButton").addEventListener("click", openGallery);
$("rewindButton").addEventListener("click", openTimeline);
$("restartButton").addEventListener("click", startNewJourney);
$("modalBackdrop").addEventListener("click", closeDrawers);
document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", closeDrawers));
$("playButton").addEventListener("click", () => video.paused ? video.play() : video.pause());
$("skipButton").addEventListener("click", () => { video.pause(); videoEnded(); });
$("loadingSkipButton").addEventListener("click", () => { video.pause(); videoEnded(); });
$("soundButton").addEventListener("click", () => { video.muted = !video.muted; $("soundButton").classList.toggle("muted", video.muted); showToast(video.muted ? "声音已关闭" : "声音已开启"); });
$("fullscreenButton").addEventListener("click", () => document.fullscreenElement ? document.exitFullscreen() : $("gameShell").requestFullscreen());
$("progressTrack").addEventListener("click", (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  video.currentTime = ((event.clientX - rect.left) / rect.width) * video.duration;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDrawers();
  if (!$("prologue").hidden && event.key === "ArrowRight") changeProloguePage(1);
  if (!$("prologue").hidden && event.key === "ArrowLeft") changeProloguePage(-1);
  if (event.code === "Space" && $("opening").hidden && $("prologue").hidden && $("choicePanel").hidden && $("endingPanel").hidden) { event.preventDefault(); video.paused ? video.play() : video.pause(); }
});

createPrologueDots();
createChoicePetals();
updateCounters();
renderGallery();

prologuePages.filter((page) => page.image).forEach((page) => { const image = new Image(); image.src = page.image; });
