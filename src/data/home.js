import { asset } from "../utils/assets";

export const careItems = [
  {
    title: "Books",
    text: "本のある場所を通して、人と地域が出会うきっかけをつくる。",
  },
  {
    title: "Voice",
    text: "声や会話を通して、場の空気や人の思いを届ける。",
  },
  {
    title: "Clothes",
    text: "人の身体や記憶に寄り添い、長く使われるものをつくる。",
  },
];

export const skillItems = [
  {
    title: "UI/UX",
    tools: [{ label: "figma", icon: asset("assets/figma-icon.png"), alt: "Figma" }],
    descriptions: [
      "Figmaを使った画面設計・プロトタイピング。",
      "ユーザーの目的や使う場面を考えながら、画面構成や導線を設計すること",
    ],
  },
  {
    title: "Web programming",
    tools: [
      { label: "C" },
      { label: "HTML" },
      { label: "CSS" },
      { label: "JavaScript" },
      { label: "Github" },
    ],
    descriptions: ["HTML / CSS / JavaScriptを使ったWeb制作"],
  },
  {
    title: "Media operation",
    tools: [{ label: "Audition" }, { label: "Premiere pro" }],
    descriptions: ["Podcastや映像・音声コンテンツの企画・編集・運用"],
  },
  {
    title: "Planning",
    tools: [],
    descriptions: ["課題や目的を整理し、サービスやプロジェクトの方向性を考えること"],
  },
  {
    title: "Graphic / Visual Design",
    tools: [{ label: "Photoshop" }, { label: "Illustrator" }],
    descriptions: ["Photoshop・Illustratorを使ったビジュアル制作"],
  },
  {
    title: "3D Motion",
    tools: [{ label: "After Effects" }, { label: "Blender" }, { label: "Fusion" }],
    descriptions: ["BlenderやAfter Effectsを使った簡単な3D・モーション制作"],
  },
];

export const workFilters = [
  { id: "all", label: "All" },
  { id: "book", label: "Book" },
  { id: "uiux", label: "UI/UX" },
  { id: "media", label: "Media" },
  { id: "clothes", label: "Clothes" },
  { id: "product", label: "Product" },
];

export const workItems = [
  {
    className: "item-1",
    categories: ["book", "uiux"],
    href: "/honnova",
    numberImage: asset("assets/type-01.svg"),
    numberAlt: "01",
    title: "ホンノバ",
    thumbnail: asset("assets/honnova-thumb.jpg.png"),
    thumbnailAlt: "ホンノバの活動風景",
    description: "神山町に点在する「本のある場」と、そこにある本に出会えるWebアプリ。",
  },
  {
    className: "item-2",
    categories: ["uiux"],
    href: "/makeyou",
    numberImage: asset("assets/type-02.svg"),
    numberAlt: "02",
    title: "Make you",
    thumbnail: asset("assets/makeyou-logo.png"),
    thumbnailClassName: "logo-thumb",
    thumbnailAlt: "MAKE YOU",
    description: "SNSに散らばる健康・運動情報を、ToDoに変えるアプリUI。",
  },
  {
    className: "item-3",
    categories: ["media"],
    href: "/kamiyamacast",
    numberImage: asset("assets/type-03.svg"),
    numberAlt: "03",
    title: "KamiyamaCast",
    thumbnail: asset("assets/assets:kamiyamacast-thumb.JPG"),
    thumbnailAlt: "KamiyamaCastの収録風景",
    description: "高専生の声を届けるPodcastメディア。",
  },
  {
    className: "item-4",
    categories: ["clothes"],
    href: "/yousaikonkuru",
    numberImage: asset("assets/type-04.svg"),
    numberAlt: "04",
    title: "洋裁全国コンクール",
    thumbnail: asset("assets/aki-top.png"),
    thumbnailAlt: "洋裁全国コンクール",
    description: "中学生の頃に、洋裁の全国大会に参加し入賞しました。",
  },
  {
    className: "item-5",
    categories: ["clothes"],
    href: "/cospre2024",
    numberImage: asset("assets/05-black.svg"),
    numberAlt: "05",
    title: "ヲタクマーケット",
    thumbnail: asset("assets/wotama-top.jpg"),
    thumbnailAlt: "コスプレの様子",
    description: "1ヶ月でコスプレ衣装を9着製作しました。",
  },
  {
    className: "item-6",
    categories: ["product", "clothes"],
    href: "/miso",
    numberImage: asset("assets/06-black.png"),
    numberAlt: "06",
    title: "着物トートバッグ「みそ」",
    thumbnail: asset("assets/miso-top.jpg"),
    thumbnailAlt: "トートバッグ",
    description: "着物をリメイクした、カラフルなトートバッグを製作しました。",
  },
];
