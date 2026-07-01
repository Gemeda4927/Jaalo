'use client';

import { useState, useEffect, useRef } from "react";

// ===== TYPES =====
interface IconProps {
  name: string;
  size?: number;
  style?: React.CSSProperties;
}

interface SearchItem {
  query: string;
  time: string;
  tag: string;
  tc: string;
  count: number;
  ti: string;
  cat: string;
}

interface ColorSet {
  bg: string;
  text: string;
  border: string;
}

// ===== ICON COMPONENT =====
const Icon = ({ name, size = 16, style = {} }: IconProps) => (
  <i
    className={`ti ti-${name}`}
    aria-hidden="true"
    style={{ fontSize: size, lineHeight: 1, display: "inline-block", ...style }}
  />
);

// ===== ETHIOPIAN THEME CONSTANTS =====
const T = {
  // Ethiopian flag colors
  green:    "#078930",
  yellow:   "#FCDD09",
  red:      "#DA121A",
  blue:     "#0B47B3",
  
  // Ethiopian earth tones
  earth:    "#8B7D6B",
  earthLt:  "#D4C5A9",
  earthMd:  "#A89070",
  
  // Coffee ceremony colors
  coffee:   "#3D1F00",
  coffeeLt: "#6B3A1F",
  coffeeMd: "#8B5A3B",
  
  // Modern colors
  teal:     "#0F6E56",
  tealLt:   "#E1F5EE",
  tealMd:   "#9FE1CB",
  violet:   "#534AB7",
  violetLt: "#EEEDFE",
  amber:    "#BA7517",
  amberLt:  "#FAEEDA",
  coral:    "#993C1D",
  coralLt:  "#FAECE7",
  ink:      "#2C2C2A",
  slate:    "#5F5E5A",
  muted:    "#888780",
  hint:     "#B4B2A9",
  white:    "#FFFFFF",
  off:      "#F9F8F5",
  border:   "rgba(44,44,42,0.12)",
  border2:  "rgba(44,44,42,0.22)",
} as const;

const COLORS: Record<string, ColorSet> = {
  green:  { bg: "#E8F5E9", text: T.green,  border: "#A5D6A7" },
  yellow: { bg: "#FFF8E1", text: "#8D6E00", border: "#FFE082" },
  red:    { bg: "#FFEBEE", text: T.red,    border: "#EF9A9A" },
  blue:   { bg: "#E3F2FD", text: T.blue,   border: "#90CAF9" },
  amber:  { bg: T.amberLt,  text: T.amber,   border: "rgba(186,117,23,.3)" },
  coral:  { bg: T.coralLt,  text: T.coral,   border: "rgba(153,60,29,.25)" },
  violet: { bg: T.violetLt, text: T.violet,  border: "rgba(83,74,183,.22)" },
  teal:   { bg: T.tealLt,   text: T.teal,    border: T.tealMd },
  muted:  { bg: "#F1EFE8",  text: "#5F5E5A", border: "#D3D1C7" },
};

// ===== ETHIOPIAN SEARCH DATA =====
const ALL_SEARCHES: SearchItem[] = [
  // Ethiopian Tech & Code
  { query: "chapa payment integration ethiopia api docs",           time: "9:03 AM",  tag: "Fintech",     tc: "green", count: 47, ti: "credit-card",    cat: "code"     },
  { query: "telebirr merchant api documentation ethiopia",          time: "9:41 AM",  tag: "Mobile Money",tc: "blue",  count: 23, ti: "mobile",        cat: "code"     },
  { query: "ethio telecom vs safaricom ethiopia network",           time: "2:07 AM",  tag: "Connectivity",tc: "red",   count: 12, ti: "wifi",          cat: "code"     },
  { query: "react native app for ethiopian marketplace",            time: "8:12 AM",  tag: "Startup",     tc: "green", count: 6,  ti: "code",          cat: "code"     },
  { query: "ethiopian birr exchange rate api",                      time: "10:52 AM", tag: "Finance",     tc: "yellow",count: 34, ti: "currency-birr", cat: "code"     },
  { query: "deploy app on cloud in ethiopia",                       time: "11:05 AM", tag: "DevOps",      tc: "blue",  count: 4,  ti: "cloud",         cat: "code"     },
  { query: "ethiopian id card verification api",                    time: "12:04 PM", tag: "Identity",    tc: "red",   count: 19, ti: "id",            cat: "code"     },
  { query: "amharic text to speech api free",                       time: "7:22 AM",  tag: "NLP",         tc: "yellow",count: 8,  ti: "language",      cat: "code"     },
  { query: "ethiopian stock market esx news",                       time: "1:33 PM",  tag: "Investing",   tc: "green", count: 6,  ti: "chart-line",    cat: "code"     },
  { query: "telegram bot for ethiopian news",                       time: "8:55 AM",  tag: "Bots",        tc: "blue",  count: 5,  ti: "robot",         cat: "code"     },

  // Ethiopian Football (Premier League)
  { query: "ethiopian premier league standings 2024",               time: "2:18 PM",  tag: "EPL",         tc: "red",   count: 43, ti: "ball-football", cat: "football" },
  { query: "st george vs bahir dar kenema match result",            time: "6:45 AM",  tag: "Rivalry",     tc: "green", count: 11, ti: "trophy",        cat: "football" },
  { query: "ethiopia national team fifa ranking 2024",              time: "4:02 PM",  tag: "National",    tc: "yellow",count: 14, ti: "flag",          cat: "football" },
  { query: "abubeker nassir transfer news",                         time: "5:11 PM",  tag: "Transfer",    tc: "blue",  count: 23, ti: "run",           cat: "football" },
  { query: "ethiopian players abroad stats",                        time: "5:58 PM",  tag: "Scout",       tc: "red",   count: 31, ti: "star",          cat: "football" },
  { query: "yusuf mohammed goals this season",                      time: "2:30 PM",  tag: "Scoring",     tc: "green", count: 18, ti: "target",        cat: "football" },
  { query: "kedus giorgis vs mekelle 70 enderta",                   time: "10:15 AM", tag: "EPL",         tc: "yellow",count: 8,  ti: "ball",          cat: "football" },
  { query: "africa cup of nations ethiopia qualifiers",             time: "3:10 PM",  tag: "CAN",         tc: "blue",  count: 12, ti: "trophy",        cat: "football" },
  { query: "ethiopian football federation news",                    time: "9:50 AM",  tag: "EFF",         tc: "green", count: 7,  ti: "news",          cat: "football" },
  { query: "wolkite ketema vs awassa kenema prediction",            time: "4:30 PM",  tag: "Premier",     tc: "red",   count: 15, ti: "ball-football", cat: "football" },

  // Ethiopian Coffee (Buna ☕)
  { query: "yirgacheffe coffee bean roasting guide",                time: "9:03 AM",  tag: "Coffee",      tc: "yellow",count: 34, ti: "coffee",        cat: "coffee"   },
  { query: "Gujii coffee best brewing temperature",                time: "9:41 AM",  tag: "Brewing",     tc: "green", count: 12, ti: "droplet",       cat: "coffee"   },
  { query: "traditional ethiopian coffee ceremony steps",           time: "2:07 AM",  tag: "Culture",     tc: "red",   count: 45, ti: "moon",          cat: "coffee"   },
  { query: "jebena vs espresso machine which is better",            time: "8:12 AM",  tag: "Debate",      tc: "blue",  count: 6,  ti: "flask",         cat: "coffee"   },
  { query: "ethiopian coffee export market price 2024",             time: "10:52 AM", tag: "Business",    tc: "yellow",count: 22, ti: "chart-bar",     cat: "coffee"   },
  { query: "guji coffee flavor profile notes",                      time: "11:05 AM", tag: "Tasting",     tc: "green", count: 9,  ti: "cup",           cat: "coffee"   },
  { query: "best ethiopian coffee roasters online",                 time: "12:04 PM", tag: "Shopping",    tc: "blue",  count: 14, ti: "shopping-cart", cat: "coffee"   },
  { query: "buna bunna traditional coffee song",                    time: "7:22 AM",  tag: "Music",       tc: "red",   count: 6,  ti: "music",         cat: "coffee"   },
  { query: "limu vs djimmah coffee comparison",                     time: "1:33 PM",  tag: "Variety",     tc: "yellow",count: 8,  ti: "scale",         cat: "coffee"   },
  { query: "health benefits of ethiopian arabica coffee",           time: "8:55 AM",  tag: "Health",      tc: "green", count: 11, ti: "heart",         cat: "coffee"   },

  // Ethiopian Life & Culture
  { query: "ethiopian new year 2017 date and traditions",           time: "2:18 PM",  tag: "Culture",     tc: "yellow",count: 24, ti: "calendar",      cat: "life"     },
  { query: "best restaurants in addis ababa 2024",                  time: "6:45 AM",  tag: "Food",        tc: "red",   count: 33, ti: "restaurant",    cat: "life"     },
  { query: "ethiopian traditional clothing styles",                 time: "4:02 PM",  tag: "Fashion",     tc: "blue",  count: 15, ti: "clothes",       cat: "life"     },
  { query: "ethiopian music artists 2024 playlist",                 time: "5:11 PM",  tag: "Music",       tc: "green", count: 19, ti: "music",         cat: "life"     },
  { query: "ethiopian church fasting calendar 2024",                time: "5:58 PM",  tag: "Religion",    tc: "yellow",count: 8,  ti: "church",        cat: "life"     },
  { query: "famous ethiopian athletes olympic records",             time: "2:30 PM",  tag: "Sports",      tc: "red",   count: 11, ti: "run",           cat: "life"     },
  { query: "meskel celebration date and activities",                time: "10:15 AM", tag: "Festival",    tc: "green", count: 14, ti: "fire",          cat: "life"     },
  { query: "ethiopian cinema new movies 2024",                      time: "3:10 PM",  tag: "Entertainment",tc: "blue", count: 7,  ti: "movie",         cat: "life"     },
  { query: "ethiopian traditional dance eskista",                   time: "4:30 PM",  tag: "Culture",     tc: "red",   count: 5,  ti: "dance",         cat: "life"     },
  { query: "rent in addis ababa 2024 prices",                       time: "8:33 PM",  tag: "Living",      tc: "blue",  count: 27, ti: "home",          cat: "life"     },
  { query: "simien mountains trekking guide",                       time: "9:17 PM",  tag: "Travel",      tc: "green", count: 6,  ti: "mountain",      cat: "life"     },
  { query: "ethiopian injera recipe and teff flour",                time: "7:05 AM",  tag: "Food",        tc: "yellow",count: 13, ti: "bread",         cat: "life"     },
  { query: "ethiopian orthodox tewahedo church history",            time: "7:55 PM",  tag: "History",     tc: "red",   count: 4,  ti: "book",          cat: "life"     },
  { query: "nightlife in addis ababa best spots",                   time: "7:00 PM",  tag: "Nightlife",   tc: "blue",  count: 16, ti: "party",         cat: "life"     },
  { query: "ethiopian health insurance guide 2024",                 time: "12:49 AM", tag: "Health",      tc: "green", count: 5,  ti: "heart",         cat: "life"     },
];

const CATS = [
  { key: "code",     label: "Code & Tech",           ti: "code"          },
  { key: "football", label: "Football ⚽",            ti: "ball-football" },
  { key: "coffee",   label: "Coffee ☕",              ti: "coffee"        },
  { key: "life",     label: "Life & Culture",        ti: "leaf"          },
] as const;

// ===== UTILITY FUNCTIONS =====
function shuffle<T>(arr: T[]): T[] { 
  return [...arr].sort(() => Math.random() - 0.5); 
}

function pickSearches(): SearchItem[] {
  const g: Record<string, SearchItem[]> = {};
  CATS.forEach(c => { 
    g[c.key] = ALL_SEARCHES.filter(x => x.cat === c.key); 
  });
  return [
    ...shuffle(g.code).slice(0, 4),
    ...shuffle(g.football).slice(0, 3),
    ...shuffle(g.coffee).slice(0, 3),
    ...(g.life || []).slice(0, 2),
  ];
}

// ===== COFFEE CUP COMPONENT =====
function CoffeeCup3D() {
  const ref = useRef<HTMLCanvasElement>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    
    cv.width = 260;
    cv.height = 260;
    const W = cv.width;
    const H = cv.height;
    const cx = W / 2;

    const steam = [
      { ox: -22, phase: 0.0, freq: 0.013, amp: 7 },
      { ox:   0, phase: 1.5, freq: 0.011, amp: 9 },
      { ox:  22, phase: 3.0, freq: 0.015, amp: 6 },
    ];

    function frame(ms: number) {
      const t = ms / 1000;
      const c = ctx!;
      c.clearRect(0, 0, W, H);
      const baseY = H * 0.72;
      const bob = Math.sin(t * 0.55) * 3;

      // Coffee cup base shadow
      for (let r = 80; r > 12; r -= 6) {
        const a = (80 - r) / 80;
        c.beginPath();
        c.arc(cx, baseY + bob, r, 0, Math.PI * 2);
        c.fillStyle = `rgba(200,130,20,${a * 0.07})`;
        c.fill();
      }

      // Shadow on surface
      c.beginPath();
      c.ellipse(cx + 3, baseY + bob + 9, 46, 7, 0, 0, Math.PI * 2);
      c.fillStyle = "rgba(0,0,0,0.15)";
      c.fill();

      const saY = baseY + bob;
      
      // Cup rim
      c.beginPath();
      c.ellipse(cx, saY, 48, 10, 0, 0, Math.PI * 2);
      const sg = c.createLinearGradient(cx - 48, 0, cx + 48, 0);
      sg.addColorStop(0, "#7a5010");
      sg.addColorStop(0.35, "#d4b888");
      sg.addColorStop(0.65, "#c8a060");
      sg.addColorStop(1, "#6a3a08");
      c.fillStyle = sg;
      c.fill();
      c.strokeStyle = "#6a3a08";
      c.lineWidth = 1.5;
      c.stroke();
      
      // Rim highlight
      c.beginPath();
      c.ellipse(cx - 6, saY - 2, 30, 4, 0, 0, Math.PI);
      c.strokeStyle = "rgba(255,255,255,0.3)";
      c.lineWidth = 1;
      c.stroke();

      const cupTop = H * 0.48 + bob;
      const cupBot = saY - 2;
      const TW = 30;
      const BW = 40;

      // Handle left side
      c.beginPath();
      c.moveTo(cx - TW, cupTop);
      c.lineTo(cx - TW - 11, cupTop + 7);
      c.lineTo(cx - BW - 11, cupBot + 5);
      c.lineTo(cx - BW, cupBot);
      c.closePath();
      c.fillStyle = "#3a1800";
      c.fill();
      c.strokeStyle = "#2a1000";
      c.lineWidth = 1;
      c.stroke();

      // Handle bottom
      c.beginPath();
      c.moveTo(cx - BW, cupBot);
      c.lineTo(cx - BW - 11, cupBot + 5);
      c.lineTo(cx + BW - 11, cupBot + 5);
      c.lineTo(cx + BW, cupBot);
      c.closePath();
      c.fillStyle = "#2a1000";
      c.fill();

      // Cup body
      c.beginPath();
      c.moveTo(cx - TW, cupTop);
      c.lineTo(cx + TW, cupTop);
      c.lineTo(cx + BW, cupBot);
      c.lineTo(cx - BW, cupBot);
      c.closePath();
      const fg = c.createLinearGradient(cx - BW, 0, cx + BW, 0);
      fg.addColorStop(0, "#8a5820");
      fg.addColorStop(0.22, "#e8d4a8");
      fg.addColorStop(0.55, "#d8c090");
      fg.addColorStop(0.82, "#b88840");
      fg.addColorStop(1, "#6a3808");
      c.fillStyle = fg;
      c.fill();
      c.strokeStyle = "#6a3808";
      c.lineWidth = 1.5;
      c.stroke();

      // Body highlight
      c.beginPath();
      c.moveTo(cx + TW * 0.3, cupTop);
      c.lineTo(cx + BW * 0.3, cupBot);
      c.strokeStyle = "rgba(255,255,255,0.1)";
      c.lineWidth = 2;
      c.stroke();

      // Coffee surface
      c.beginPath();
      c.ellipse(cx, cupTop, TW, 7, 0, 0, Math.PI * 2);
      c.fillStyle = "#1e0802";
      c.fill();
      c.strokeStyle = "#7a5010";
      c.lineWidth = 1.5;
      c.stroke();

      // Crema swirl
      const sw = t * 0.35;
      for (let i = 0; i < 3; i++) {
        const a = sw + i * 2.1;
        const rx = Math.cos(a) * 9;
        const ry = Math.sin(a) * 2.5;
        c.beginPath();
        c.ellipse(cx + rx, cupTop + ry, 7 + i * 1.5, 2, a * 0.5, 0, Math.PI * 2);
        c.fillStyle = `rgba(140,70,10,${0.25 - i * 0.06})`;
        c.fill();
      }
      
      // Crema highlight
      c.beginPath();
      c.ellipse(cx - 7, cupTop - 1, 9, 2, -0.5, 0, Math.PI * 2);
      c.fillStyle = "rgba(255,255,255,0.12)";
      c.fill();

      // Handle right side
      const hx = cx + BW;
      const hy1 = cupTop + 16 + bob;
      const hy2 = cupBot - 16 + bob;
      c.beginPath();
      c.moveTo(hx, hy1);
      c.bezierCurveTo(hx + 30, hy1, hx + 30, hy2, hx, hy2);
      c.strokeStyle = "#a06828";
      c.lineWidth = 5.5;
      c.lineCap = "round";
      c.stroke();
      c.beginPath();
      c.moveTo(hx, hy1 + 2);
      c.bezierCurveTo(hx + 18, hy1 + 2, hx + 18, hy2 - 2, hx, hy2 - 2);
      c.strokeStyle = "rgba(220,180,100,0.3)";
      c.lineWidth = 2;
      c.stroke();

      // Text labels - Ethiopian theme
      c.save();
      c.font = "700 7.5px 'Courier New', monospace";
      c.fillStyle = "rgba(50,25,0,0.55)";
      c.textAlign = "center";
      const midY = (cupTop + cupBot) / 2 + bob;
      c.fillText("ETHIOPIA", cx - 2, midY);
      c.font = "500 6px 'Courier New', monospace";
      c.fillStyle = "rgba(50,25,0,0.38)";
      c.fillText("Buna ☕", cx - 2, midY + 11);
      c.restore();

      // Steam
      steam.forEach(s => {
        for (let i = 0; i < 7; i++) {
          const cycle = (t * s.freq * 50 + s.phase + i * 0.55) % 1;
          const sx = cx + s.ox + Math.sin(cycle * Math.PI * 2.5 + s.phase) * s.amp;
          const sy = cupTop - 10 - cycle * 50;
          const alpha = cycle < 0.2 ? (cycle / 0.2) * 0.5 : (1 - cycle) * 0.5;
          const r = 4 + cycle * 12;
          c.beginPath();
          c.arc(sx, sy, r, 0, Math.PI * 2);
          c.fillStyle = `rgba(210,190,165,${alpha})`;
          c.fill();
        }
      });

      // Bottom glow
      c.beginPath();
      c.ellipse(cx, saY + 8, 38, 5, 0, 0, Math.PI * 2);
      c.strokeStyle = "rgba(220,140,20,0.18)";
      c.lineWidth = 4;
      c.stroke();

      raf.current = requestAnimationFrame(frame);
    }

    raf.current = requestAnimationFrame(frame);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return <canvas ref={ref} style={{ display: "block", margin: "0 auto" }} />;
}

// ===== CHESS GAME COMPONENT =====
type Piece = string | null;
type Board = Piece[][];

const INIT: Board = [
  ["r","n","b","q","k","b","n","r"],
  ["p","p","p","p","p","p","p","p"],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  ["P","P","P","P","P","P","P","P"],
  ["R","N","B","Q","K","B","N","R"],
];

const UNI: Record<string, string> = { 
  K:"♔",Q:"♕",R:"♖",B:"♗",N:"♘",P:"♙", 
  k:"♚",q:"♛",r:"♜",b:"♝",n:"♞",p:"♟" 
};

const AI_LINES = [
  "Trained on thousands of games. Beat me if you can.",
  "Calculating 47 moves ahead. (Just kidding - it's random.)",
  "My training set had 4 billion games. This one is hard.",
  "Error 404: Mercy not found.",
  "I evaluated 1.2M positions. Still moved a pawn.",
  "The algorithm has spoken. Suffer.",
  "Chess.exe is thinking... done. Your move.",
  "Cold calculation. No feelings. (Shaking internally.)",
];

const YOU_LINES = [
  "Wait wait wait. Let me think.",
  "Did NOT see that coming.",
  "My coffee is going cold because of this.",
  "I googled this opening, I promise.",
  "Stack Overflow cannot help me here.",
  "Is that even legal? Asking seriously.",
  "Okay. Okay. I got this. Maybe.",
  "This is fine. Everything is totally fine.",
];

const cpB = (b: Board): Board => b.map(r => [...r]);
const isW = (p: Piece): boolean => p !== null && p === p.toUpperCase();
const isB = (p: Piece): boolean => p !== null && p === p.toLowerCase();

function legalMoves(board: Board, r: number, c: number): [number, number][] {
  const p = board[r][c]; 
  if (!p) return [];
  
  const moves: [number, number][] = [];
  const w = isW(p);
  const t = p.toLowerCase();
  
  const ok = (nr: number, nc: number): boolean => {
    if (nr < 0 || nr > 7 || nc < 0 || nc > 7) return false;
    if (w ? isW(board[nr][nc]) : isB(board[nr][nc])) return false;
    moves.push([nr, nc]);
    return !board[nr][nc];
  };
  
  if (t === "p") {
    const d = w ? -1 : 1;
    const sr = w ? 6 : 1;
    if (!board[r+d]?.[c]) { 
      moves.push([r+d, c]); 
      if (r === sr && !board[r+d*2]?.[c]) moves.push([r+d*2, c]); 
    }
    for (const dc of [-1, 1]) { 
      const nr = r + d, nc = c + dc; 
      if (nr >= 0 && nr <= 7 && nc >= 0 && nc <= 7 && 
          (w ? isB(board[nr][nc]) : isW(board[nr][nc]))) moves.push([nr, nc]); 
    }
  } else if (t === "n") { 
    for (const [dr, dc] of [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]) 
      ok(r+dr, c+dc); 
  } else if (t === "k") { 
    for (const [dr, dc] of [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]) 
      ok(r+dr, c+dc); 
  } else if (t === "r") { 
    for (const [dr, dc] of [[0,1],[0,-1],[1,0],[-1,0]]) { 
      let nr = r+dr, nc = c+dc; 
      while (ok(nr, nc)) { nr += dr; nc += dc; } 
    } 
  } else if (t === "b") { 
    for (const [dr, dc] of [[1,1],[1,-1],[-1,1],[-1,-1]]) { 
      let nr = r+dr, nc = c+dc; 
      while (ok(nr, nc)) { nr += dr; nc += dc; } 
    } 
  } else if (t === "q") { 
    for (const [dr, dc] of [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]) { 
      let nr = r+dr, nc = c+dc; 
      while (ok(nr, nc)) { nr += dr; nc += dc; } 
    } 
  }
  return moves;
}

function aiPick(board: Board) {
  const all: any[] = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (isB(board[r][c])) {
        legalMoves(board, r, c).forEach(([tr, tc]) => {
          all.push({ fr: r, fc: c, tr, tc, cap: !!board[tr][tc] });
        });
      }
    }
  }
  if (!all.length) return null;
  const caps = all.filter((m: any) => m.cap);
  return (caps.length ? caps : all)[Math.floor(Math.random() * (caps.length || all.length))];
}

function ChessGame() {
  const [board, setBoard] = useState<Board>(() => cpB(INIT));
  const [sel, setSel] = useState<[number, number] | null>(null);
  const [legal, setLegal] = useState<[number, number][]>([]);
  const [turn, setTurn] = useState<"w" | "b">("w");
  const [last, setLast] = useState<{fr: number; fc: number; tr: number; tc: number} | null>(null);
  const [log, setLog] = useState<{who: string; text: string}[]>([
    { who: "ai",   text: "Trained on thousands of games. Beat me if you can." },
    { who: "user", text: 'I literally googled "chess openings for beginners" this morning.' },
  ]);
  const [thinking, setThinking] = useState(false);
  const [status, setStatus] = useState("Your move, human.");
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => { 
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight; 
  }, [log]);

  const push = (who: string, text: string) => setLog(l => [...l.slice(-28), { who, text }]);

  const click = (r: number, c: number) => {
    if (turn !== "w" || thinking) return;
    const p = board[r][c];
    if (sel) {
      if (legal.some(([lr, lc]) => lr === r && lc === c)) {
        const nb = cpB(board);
        nb[r][c] = nb[sel[0]][sel[1]];
        nb[sel[0]][sel[1]] = null;
        if (nb[r][c] === "P" && r === 0) nb[r][c] = "Q";
        setBoard(nb);
        setLast({ fr: sel[0], fc: sel[1], tr: r, tc: c });
        setSel(null);
        setLegal([]);
        push("user", YOU_LINES[Math.floor(Math.random() * YOU_LINES.length)]);
        setTurn("b");
        setStatus("Algorithm is thinking...");
        setThinking(true);
        setTimeout(() => {
          const mv = aiPick(nb);
          if (mv) {
            const nb2 = cpB(nb);
            nb2[mv.tr][mv.tc] = nb2[mv.fr][mv.fc];
            nb2[mv.fr][mv.fc] = null;
            if (nb2[mv.tr][mv.tc] === "p" && mv.tr === 7) nb2[mv.tr][mv.tc] = "q";
            setBoard(nb2);
            setLast({ fr: mv.fr, fc: mv.fc, tr: mv.tr, tc: mv.tc });
            push("ai", AI_LINES[Math.floor(Math.random() * AI_LINES.length)]);
          }
          setTurn("w");
          setStatus("Your move, human.");
          setThinking(false);
        }, 800 + Math.random() * 700);
        return;
      }
      if (isW(p)) { setSel([r, c]); setLegal(legalMoves(board, r, c)); return; }
      setSel(null);
      setLegal([]);
      return;
    }
    if (isW(p)) { setSel([r, c]); setLegal(legalMoves(board, r, c)); }
  };

  const reset = () => {
    setBoard(cpB(INIT));
    setSel(null);
    setLegal([]);
    setTurn("w");
    setLast(null);
    setStatus("Your move, human.");
    setThinking(false);
    setLog([
      { who: "ai",   text: "New game. Algorithms refreshed. You still have no chance." },
      { who: "user", text: "I googled a new opening. Watch yourself." },
    ]);
  };

  const CS = 44;
  return (
    <div style={{ fontFamily: "var(--font-sans, sans-serif)" }}>
      <div style={{
        display:"flex",alignItems:"center",justifyContent:"center",gap:8,
        height:32,marginBottom:16,fontSize:13,
        color: thinking ? T.violet : T.green, fontWeight:500,
      }}>
        {thinking && (
          <span style={{ animation:"spin 1.2s linear infinite", display:"inline-block" }}>
            <Icon name="settings" size={14} />
          </span>
        )}
        {status}
      </div>

      <div style={{ display:"flex",gap:18,alignItems:"flex-start",justifyContent:"center",flexWrap:"wrap" }}>
        <div>
          <div style={{ display:"flex",marginLeft:22,marginBottom:3 }}>
            {"abcdefgh".split("").map(l => (
              <div key={l} style={{ width:CS,textAlign:"center",fontSize:10,color:T.hint,fontWeight:500 }}>{l}</div>
            ))}
          </div>
          <div style={{ display:"flex",gap:0 }}>
            <div style={{ display:"flex",flexDirection:"column" }}>
              {[8,7,6,5,4,3,2,1].map(n => (
                <div key={n} style={{ height:CS,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:T.hint,width:20,fontWeight:500 }}>{n}</div>
              ))}
            </div>
            <div style={{
              display:"grid",gridTemplateColumns:`repeat(8,${CS}px)`,
              border:"2.5px solid #7a5a28",borderRadius:6,overflow:"hidden",
            }}>
              {board.map((row, r) => row.map((piece, c) => {
                const light = (r+c)%2===0;
                const isSel  = sel && sel[0]===r && sel[1]===c;
                const isLeg  = legal.some(([lr,lc]) => lr===r && lc===c);
                const isLast = last && ((last.fr===r&&last.fc===c)||(last.tr===r&&last.tc===c));
                const isCap  = isLeg && !!piece;
                let bg = light ? "#F0D9B5" : "#B58863";
                if (isSel)       bg = "#E8E854";
                else if (isLast) bg = light ? "#CDD16E" : "#AAAA33";
                else if (isLeg)  bg = light ? "#CDD26A" : "#AAAA33";
                return (
                  <div key={`${r}-${c}`} onClick={() => click(r,c)} style={{
                    width:CS,height:CS,background:bg,position:"relative",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    cursor: (isW(piece)&&turn==="w"&&!thinking)||isLeg ? "pointer" : "default",
                    transition:"background 0.12s",userSelect:"none",
                  }}>
                    {isLeg && !piece && (
                      <div style={{ width:13,height:13,borderRadius:"50%",background:"rgba(0,0,0,0.18)" }} />
                    )}
                    {isCap && (
                      <div style={{ position:"absolute",inset:2,borderRadius:"50%",border:"3px solid rgba(0,0,0,0.2)",pointerEvents:"none" }} />
                    )}
                    {piece && (
                      <span style={{
                        fontSize:26,lineHeight:1,
                        color: isW(piece) ? "#fff" : "#2C2C2A",
                        textShadow: isW(piece)
                          ? "0 0 1px #555, 0 1px 0 rgba(0,0,0,0.5)"
                          : "0 1px 0 rgba(255,255,255,0.25)",
                      }}>
                        {UNI[piece]}
                      </span>
                    )}
                  </div>
                );
              }))}
            </div>
          </div>
          <div style={{ textAlign:"center",marginTop:12 }}>
            <button onClick={reset} style={{
              background:T.green + "22",
              border:`1px solid ${T.green}`,
              color:T.green,
              borderRadius:8,padding:"7px 22px",
              cursor:"pointer",fontSize:12,fontWeight:500,
              display:"inline-flex",alignItems:"center",gap:6,fontFamily:"inherit",
            }}>
              <Icon name="refresh" size={13} /> New game
            </button>
          </div>
        </div>

        <div style={{
          width:236,background:T.off,border:`1px solid ${T.border}`,
          borderRadius:16,overflow:"hidden",display:"flex",flexDirection:"column",
        }}>
          <div style={{
            padding:"11px 14px",borderBottom:`1px solid ${T.border}`,
            fontSize:11,fontWeight:600,color:T.muted,
            display:"flex",alignItems:"center",gap:7,
          }}>
            <Icon name="message-circle-2" size={14} style={{ color: T.green }} />
            Battle commentary
          </div>
          <div ref={logRef} style={{
            flex:1,overflowY:"auto",padding:10,maxHeight:352,
            display:"flex",flexDirection:"column",gap:8,
          }}>
            {log.map((e, i) => (
              <div key={i} style={{ alignSelf: e.who==="user" ? "flex-end" : "flex-start", maxWidth:"90%" }}>
                <div style={{
                  fontSize:9,color:T.hint,marginBottom:2,
                  display:"flex",alignItems:"center",gap:4,
                  justifyContent: e.who==="user" ? "flex-end" : "flex-start",
                }}>
                  <Icon name={e.who==="user" ? "user" : "cpu"} size={10} />
                  {e.who==="user" ? "You" : "Algorithm"}
                </div>
                <div style={{
                  padding:"7px 11px",
                  borderRadius: e.who==="user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                  background: e.who==="user" ? T.green : T.white,
                  color: e.who==="user" ? "#fff" : T.slate,
                  fontSize:11,lineHeight:1.5,
                  border: e.who==="ai" ? `1px solid ${T.border}` : "none",
                }}>
                  {e.text}
                </div>
              </div>
            ))}
            {thinking && (
              <div style={{ alignSelf:"flex-start" }}>
                <div style={{ fontSize:9,color:T.hint,marginBottom:2,display:"flex",alignItems:"center",gap:4 }}>
                  <Icon name="cpu" size={10} /> Algorithm
                </div>
                <div style={{
                  padding:"9px 14px",borderRadius:"12px 12px 12px 2px",
                  background:T.white,border:`1px solid ${T.border}`,
                  display:"flex",gap:4,alignItems:"center",
                }}>
                  {[0,0.3,0.6].map(d => (
                    <span key={d} style={{
                      width:6,height:6,borderRadius:"50%",background:T.hint,display:"inline-block",
                      animation:`pulse 1s ease-in-out ${d}s infinite`,
                    }} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div style={{
            padding:"9px 14px",borderTop:`1px solid ${T.border}`,
            fontSize:10,color:T.hint,
            display:"flex",alignItems:"center",gap:5,
          }}>
            <Icon name="chess-knight" size={11} />
            You play white · AI plays dark
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== SEARCH ROW COMPONENT =====
interface SearchRowProps {
  item: SearchItem;
  delay: number;
}

function SearchRow({ item, delay }: SearchRowProps) {
  const [vis, setVis] = useState(false);
  const [hov, setHov] = useState(false);
  useEffect(() => { 
    const id = setTimeout(() => setVis(true), delay); 
    return () => clearTimeout(id); 
  }, [delay]);
  
  const col = COLORS[item.tc] || COLORS.muted;
  
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:"flex",alignItems:"center",gap:10,padding:"9px 12px",
        borderRadius:10,
        background: hov ? T.off : "transparent",
        border: `1px solid ${hov ? T.border : "transparent"}`,
        cursor:"default",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(8px)",
        transition: `opacity 0.3s ease ${delay}ms, transform 0.3s ease ${delay}ms, background 0.15s`,
      }}
    >
      <div style={{
        width:30,height:30,borderRadius:8,background:T.off,border:`1px solid ${T.border}`,
        display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,
        color:T.muted,
      }}>
        <Icon name={item.ti} size={14} />
      </div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontSize:13,color:T.slate,fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>
          {item.query}
        </div>
        <div style={{ fontSize:11,color:T.hint,marginTop:2,display:"flex",alignItems:"center",gap:5 }}>
          <Icon name="clock" size={10} />
          {item.time}
          {item.count > 10 && (
            <span style={{ marginLeft:4,color:T.coral,fontWeight:600,display:"flex",alignItems:"center",gap:3 }}>
              <Icon name="repeat" size={10} /> {item.count}x this month
            </span>
          )}
        </div>
      </div>
      <span style={{
        fontSize:10,fontWeight:600,padding:"3px 9px",borderRadius:6,
        background: col.bg,
        color: col.text,
        border: `1px solid ${col.border}`,
        flexShrink:0,whiteSpace:"nowrap",
      }}>
        {item.tag}
      </span>
    </div>
  );
}

// ===== MAIN COMPONENT =====
interface TabType {
  id: string;
  icon: string;
  label: string;
}

export default function GoogledToday() {
  const [searches, setSearches] = useState<SearchItem[]>([]);
  const [rk, setRk] = useState(0);
  const [spin, setSpin] = useState(false);
  const [tab, setTab] = useState("searches");

  useEffect(() => { 
    setSearches(pickSearches()); 
  }, [rk]);

  const refresh = () => {
    setSpin(true);
    setTimeout(() => { 
      setRk(k => k + 1); 
      setSpin(false); 
    }, 420);
  };

  const shameCount = searches.filter(s => s.count > 10).length;
  
  const byCat: Record<string, SearchItem[]> = {};
  CATS.forEach(c => { 
    byCat[c.key] = searches.filter(s => s.cat === c.key); 
  });

  const TABS: TabType[] = [
    { id: "searches", icon: "search",      label: "Search History" },
    { id: "coffee",   icon: "coffee",      label: "3D Coffee Cup"  },
    { id: "chess",    icon: "chess-knight", label: "Chess vs AI"   },
  ];

  return (
    <section style={{ padding:"80px 20px", background:T.white, fontFamily:"var(--font-sans, sans-serif)" }}>
      <style>{`
        @keyframes spin  { to { transform: rotate(360deg); } }
        @keyframes pulse {
          0%,100% { opacity:.3; transform:scale(0.85); }
          50%     { opacity:1;  transform:scale(1.15); }
        }
        .gtab {
          display:inline-flex;align-items:center;gap:7px;
          padding:9px 22px;border-radius:99px;cursor:pointer;
          font-size:13px;font-weight:500;font-family:inherit;
          transition:all 0.2s;border:1px solid;
        }
        .gtab:hover { filter:brightness(0.95); }
      `}</style>

      <div style={{ maxWidth:820, margin:"0 auto" }}>
        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:36 }}>
          <div style={{
            display:"inline-flex",alignItems:"center",gap:7,
            padding:"5px 16px",borderRadius:99,
            background:`${T.green}22`,
            border:`1px solid ${T.green}`,
            fontSize:11,fontWeight:600,color:T.green,
            letterSpacing:".07em",textTransform:"uppercase",marginBottom:18,
          }}>
            <Icon name="eye" size={12} /> Ethiopian Transparency
          </div>
          <h2 style={{
            fontSize:"clamp(28px,5vw,38px)",fontWeight:500,color:T.ink,
            margin:"0 0 12px",letterSpacing:"-0.035em",lineHeight:1.15,
          }}>
            Things I Googled{" "}
            <span style={{
              color:T.green,
              textDecoration:"underline dashed",
              textDecorationColor:T.green,
              textDecorationThickness:3,
              textUnderlineOffset:7,
            }}>Today 🇪🇹</span>
          </h2>
          <p style={{ fontSize:14, color:T.muted, lineHeight:1.75, maxWidth:460, margin:"0 auto" }}>
            Tech, football, coffee, and life in Ethiopia. 
            From Chapa APIs to Yirgacheffe brewing guides — this is what I search for.
          </p>
        </div>

        {/* Stat chips */}
        <div style={{ display:"flex",justifyContent:"center",gap:8,marginBottom:32,flexWrap:"wrap" }}>
          {[
            { icon:"repeat",          label:`${shameCount} shameful repeats`,      bg:T.coralLt,  tc:T.coral,   br:"rgba(153,60,29,.2)"    },
            { icon:"coffee",          label:"4 espressos today",                   bg:T.amberLt,  tc:T.amber,   br:"rgba(186,117,23,.2)"   },
            { icon:"ball-football",   label:"EPL standings always open",            bg:`${T.green}22`,   tc:T.green,  br:T.green               },
            { icon:"brand-stackoverflow", label:"Stack Overflow: daily pilgrim",   bg:T.violetLt, tc:T.violet,  br:"rgba(83,74,183,.2)"    },
          ].map((s, i) => (
            <span key={i} style={{
              fontSize:11,fontWeight:600,padding:"5px 13px",borderRadius:99,
              background:s.bg,color:s.tc,border:`1px solid ${s.br}`,
              display:"inline-flex",alignItems:"center",gap:5,
            }}>
              <Icon name={s.icon} size={11} /> {s.label}
            </span>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display:"flex",justifyContent:"center",gap:8,marginBottom:34,flexWrap:"wrap" }}>
          {TABS.map(t => (
            <button key={t.id} className="gtab" onClick={() => setTab(t.id)} style={{
              background:   tab===t.id ? T.green        : "transparent",
              color:        tab===t.id ? "#fff"         : T.muted,
              borderColor:  tab===t.id ? T.green        : T.border2,
            }}>
              <Icon name={t.icon} size={14} /> {t.label}
            </button>
          ))}
        </div>

        {/* ── SEARCH HISTORY ── */}
        {tab === "searches" && (
          <div style={{
            background:T.white,border:`1px solid ${T.border}`,borderRadius:20,
            overflow:"hidden",boxShadow:"0 2px 20px rgba(44,44,42,0.04)",
          }}>
            <div style={{
              padding:"12px 16px",borderBottom:`1px solid ${T.border}`,
              display:"flex",alignItems:"center",gap:10,background:T.off,
            }}>
              <div style={{ display:"flex",gap:5 }}>
                {["#f87171","#facc15","#4ade80"].map(c => (
                  <div key={c} style={{ width:9,height:9,borderRadius:"50%",background:c }} />
                ))}
              </div>
              <div style={{
                flex:1,height:30,borderRadius:99,background:T.white,
                border:`1px solid ${T.border}`,display:"flex",alignItems:"center",
                padding:"0 12px",gap:7,fontSize:11,color:T.hint,
              }}>
                <Icon name="search" size={11} style={{ color:T.hint }} />
                google.com — Ethiopian search history
              </div>
              <button onClick={refresh} title="Shuffle" style={{
                width:30,height:30,borderRadius:8,background:`${T.green}22`,
                border:`1px solid ${T.green}`,display:"flex",alignItems:"center",
                justifyContent:"center",cursor:"pointer",color:T.green,
              }}>
                <span style={{
                  display:"inline-block",
                  transform: spin ? "rotate(360deg)" : "none",
                  transition:"transform 0.42s ease",
                }}>
                  <Icon name="refresh" size={14} />
                </span>
              </button>
            </div>

            <div style={{ padding:"8px 8px" }}>
              {CATS.map(cat => {
                const items = byCat[cat.key];
                if (!items?.length) return null;
                return (
                  <div key={cat.key} style={{ padding:"8px 12px 4px" }}>
                    <div style={{
                      fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".08em",
                      color:T.hint,marginBottom:5,
                      display:"flex",alignItems:"center",gap:5,
                    }}>
                      <Icon name={cat.ti} size={11} /> {cat.label}
                    </div>
                    {items.map((item, i) => (
                      <SearchRow key={`${rk}-${cat.key}-${i}`} item={item} delay={i * 55} />
                    ))}
                  </div>
                );
              })}
            </div>

            <div style={{
              padding:"12px 22px",borderTop:`1px solid ${T.border}`,background:T.off,
              display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8,
            }}>
              <span style={{ fontSize:11,color:T.muted,fontWeight:500,display:"flex",alignItems:"center",gap:5 }}>
                <Icon name="trending-up" size={12} style={{ color: T.green }} />
                Showing {searches.length} of {ALL_SEARCHES.length} searches today
              </span>
              <span style={{ fontSize:11,color:T.hint,fontStyle:"italic" }}>
                * Stack Overflow visits not counted (too many)
              </span>
            </div>
          </div>
        )}

        {/* ── 3D COFFEE ── */}
        {tab === "coffee" && (
          <div style={{
            background:"#160e04",borderRadius:22,padding:"48px 24px 40px",
            border:"1px solid #2e1800",textAlign:"center",
          }}>
            <div style={{ marginBottom:20 }}>
              <div style={{
                display:"inline-flex",alignItems:"center",gap:7,
                fontSize:10,fontWeight:600,letterSpacing:".09em",textTransform:"uppercase",
                color:"#f59e0b",padding:"5px 16px",
                background:"rgba(245,158,11,0.12)",borderRadius:99,
                border:"1px solid rgba(245,158,11,0.28)",marginBottom:10,
              }}>
                <Icon name="player-play" size={10} /> Live animated · 60fps canvas
              </div>
              <div style={{ fontSize:11,color:"#6b3a10",letterSpacing:".04em" }}>
                — Ethiopian Buna · steam, crema, amber glow —
              </div>
            </div>

            <CoffeeCup3D />

            <div style={{ marginTop:28 }}>
              <div style={{ fontSize:26,fontWeight:500,color:"#f5e6d0",letterSpacing:"-.025em",lineHeight:1.1 }}>
                Ethiopian Daily Fuel ☕
              </div>
              <div style={{ fontSize:13,color:"#9a6030",marginTop:8,lineHeight:1.75,display:"flex",alignItems:"center",justifyContent:"center",gap:6 }}>
                <Icon name="coffee" size={13} style={{ color:"#f59e0b" }} />
                2 cups consumed · Ethiopian Arabica · No sugar · No regrets
              </div>

              <div style={{ display:"flex",justifyContent:"center",gap:14,marginTop:28,flexWrap:"wrap" }}>
                {[
                  { icon:"coffee",   label:"Cups today",  val:"2"    },
                  { icon:"code",     label:"Lines coded", val:"~847" },
                  { icon:"bug-off",  label:"Bugs fixed",  val:"3"    },
                  { icon:"bug",      label:"Bugs added",  val:"5"    },
                ].map(s => (
                  <div key={s.label} style={{
                    textAlign:"center",padding:"16px 24px",minWidth:90,
                    background:"rgba(255,255,255,0.05)",borderRadius:16,
                    border:"1px solid rgba(255,255,255,0.07)",
                  }}>
                    <div style={{ marginBottom:6 }}>
                      <Icon name={s.icon} size={16} style={{ color:"#f59e0b" }} />
                    </div>
                    <div style={{ fontSize:26,fontWeight:500,color:"#fbbf24",lineHeight:1 }}>{s.val}</div>
                    <div style={{ fontSize:10,color:"#8a5020",marginTop:5,textTransform:"uppercase",letterSpacing:".07em" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop:32,fontSize:12,color:"#7a5030",fontStyle:"italic",
                maxWidth:400,margin:"32px auto 0",lineHeight:1.7,
                borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:24,
              }}>
                "I googled <em>is 4 espressos a day too much</em> at 2pm
                and then immediately brewed a 5th. The results were inconclusive."
              </div>
            </div>
          </div>
        )}

        {/* ── CHESS ── */}
        {tab === "chess" && (
          <div style={{
            background:T.white,border:`1px solid ${T.border}`,borderRadius:22,overflow:"hidden",
          }}>
            <div style={{
              padding:"18px 26px",borderBottom:`1px solid ${T.border}`,background:T.off,
              display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10,
            }}>
              <div>
                <div style={{ fontSize:16,fontWeight:500,color:T.ink,display:"flex",alignItems:"center",gap:8 }}>
                  <Icon name="chess-knight" size={18} style={{ color: T.green }} />
                  You vs The Algorithm
                </div>
                <div style={{ fontSize:12,color:T.muted,marginTop:3,display:"flex",alignItems:"center",gap:5 }}>
                  <Icon name="info-circle" size={11} />
                  You are white — click a piece to see legal moves
                </div>
              </div>
              <div style={{ display:"flex",gap:8 }}>
                <span style={{
                  fontSize:11,padding:"5px 12px",borderRadius:99,
                  background:`${T.green}22`,color:T.green,
                  border:`1px solid ${T.green}`,fontWeight:600,
                  display:"inline-flex",alignItems:"center",gap:5,
                }}>
                  <Icon name="user" size={11} /> You (white)
                </span>
                <span style={{
                  fontSize:11,padding:"5px 12px",borderRadius:99,
                  background:T.violetLt,color:T.violet,
                  border:"1px solid rgba(83,74,183,.2)",fontWeight:600,
                  display:"inline-flex",alignItems:"center",gap:5,
                }}>
                  <Icon name="cpu" size={11} /> AI (dark)
                </span>
              </div>
            </div>
            <div style={{ padding:"28px 22px" }}>
              <ChessGame />
            </div>
          </div>
        )}

        {/* Footer */}
        <p style={{ textAlign:"center",fontSize:12,color:T.hint,marginTop:30,lineHeight:1.8 }}>
          If you also google &quot;how to exit vim,&quot; debate EPL standings,
          brew a 5th espresso before fixing the bug, and still lose to an algorithm at chess —
          <br />
          <span style={{ color: T.green, fontWeight:600 }}>we should definitely work together. 🇪🇹</span>
        </p>
      </div>
    </section>
  );
}