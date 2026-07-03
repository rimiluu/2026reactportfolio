export const caseStudies = {
  honnova: {
    bodyClass: "",
    title: "ホンノバ | いとう りみ Portfolio",
    sectionClassName: "honnova-case",
    logo: {
      className: "honnova-logo-img",
      src: "/assets/honnova-logo.png",
      alt: "まちの本棚アプリ ホンノバ",
    },
    overviewPanels: [
      [
        ["いつから", "2024年ーいままで"],
        ["役割", <>企画 / 要件整理 / UI・UX設計 / Web制作<br />/ リサーチ / 運用改善</>],
        [
          "Overview",
          "神山町に点在する「本のある場」と、そこにある本を紹介し、町民や来訪者がホンノバをきっかけに、本と本のある場所に出会えるようにするWebアプリを制作。",
        ],
        ["アプリのリンク", <a href="https://kamiyama.honnoba.jp/" target="_blank">https://kamiyama.honnoba.jp/</a>],
      ],
      [
        [
          "読んだほうがさらに伝わる背景",
          "神山町には公共図書館がありません。図書館を新しく設置・維持するには大きな費用がかかるため、小さな町にとって公共図書館を持ち続けることは簡単ではないからです。 一方で、町内を見渡すと、私設の本棚や古本を共有する場所など、本に触れられる小さな場が点在しています。つまり「本がない」のではなく、「本のある場所が見えにくい」ことが課題なのではないかと考えました。(実際に住民からは「どこにどんな本があるのか分からない」という声があり、場の管理者側も、蔵書管理や情報発信に手間がかかり、住民への周知まで十分に手が回らない状況がありました。)そこで、町内に点在する“本のある場”を可視化し、本と場所、人が出会うきっかけをつくるWebアプリとして、ホンノバを制作しました。",
        ],
      ],
    ],
    mockImages: ["/assets/honnnoba-top-1.png", "/assets/honnoba-top-3.png", "/assets/honnnoba-top-7.png"],
    problems: [
      ["ユーザー(町民)", "本のある場所や、まちの中の本棚を探しづらい。"],
      ["本のある場の管理者", "本棚の存在や、置いている本の魅力を届けにくい。"],
      ["自治体", "既にある地域資源が十分に活かされていない。"],
    ],
    concept: {
      className: "honnova-concept",
      heading: <>ちいさなまちの<br />本のある場をつなぐ</>,
      lines: [
        "ホンノバでは、本を「借りるもの」だけではなく、",
        "場所や人と出会うきっかけとして捉えています。",
        "町の中に点在する小さな本棚や本のある場所をつなぐことで、",
        "図書館がない町でも、本に触れる機会を増やすことができる。",
        "本を探すことが、町を歩く理由になる。",
        "本棚を知ることが、新しい場所を訪れるきっかけになる。",
        "そんな体験をつくることを目指しています。",
      ],
    },
    service: {
      eyebrow: "Service Design",
      className: "honnova-service-design",
      screens: [
        { id: "1", src: "/assets/honnoba-detail-1.png" },
        { id: "2", src: "/assets/honnoba-detail-2.png" },
        { id: "3", src: "/assets/honnoba-detail-3.png" },
        { id: "4", src: "/assets/honnoba-detail-4.jpg", className: "service-screen--landscape" },
        { id: "5", src: "/assets/honnova-thumb.jpg.png", className: "service-screen--landscape" },
      ],
      steps: [
        ["1", "/assets/01-img.png", "01", "知る", "まちにある本棚や、本棚に置かれている本の存在を知る。"],
        ["2", "/assets/2-img.png", "02", "探す", "気になる本棚や本を探し、行きたい場所を見つける。"],
        ["3", "/assets/3-img.png", "03", "見る", "本棚の情報、置かれている本、場所の雰囲気を見る。"],
        ["4", "/assets/4-img.png", "04", "行く", "実際にその場所へ行き、本や本棚に触れる。"],
        ["5", "/assets/5-img.svg", "05", "出会う", "本をきっかけに、場所や人との新しい接点を見つける。"],
      ],
    },
    field: {
      heading: "Field Test",
      image: "/assets/honnoaruba-img.png",
      imageAlt: "ホンノバで導入した本のある場の地図",
      stats: [
        ["登録場数", "4"],
        ["登録冊数", "5600"],
        ["月間アクセス数", "500"],
      ],
    },
    timeline: [
      ["2024", "神山町にある本のある場を調査し、Webアプリの構想を立てました。"],
      ["2025", "Webアプリ「ホンノバ」をリリース。AWSコンテスト、U-22プロコンなどで賞をもらう。"],
      ["2026", "UI/UXを大幅に改善。本に関するイベントを定期的に開催。"],
    ],
    roles: [
      ["企画 / 課題整理", "神山町に公共図書館がないことや、町内に本のある場が点在していることから、何を課題として捉えるべきかを整理しました。"],
      ["要件整理", "利用者が本のある場を探すために必要な情報や、運営者が無理なく更新するために必要な情報を洗い出しました。"],
      ["UI/UX設計", "初めて使う人がサービスの目的を理解し、地図や一覧から自然に場所を探せるよう、情報設計や画面構成を検討しています。"],
      ["Web制作", "Webアプリの画面制作や、掲載情報の整理に関わりました。"],
      [<>リサーチ <br /> コミュニケーション</>, "町内の本のある場を調査し、掲載情報や実証実験に向けた調整を行っています。"],
      ["運用改善", "実証実験に向けて、情報更新の仕組みや、継続的に使われるための運用方法を検討しています。"],
    ],
    finalGrid: [
      ["Learning", "この制作を通して、サービスは画面だけでなく、実際の場所や人の行動とつながっていることを学びました。フィールドで得た声をUIに反映することで、より使いやすい体験に近づけられると感じました。"],
      ["Next Step", "今後は、本棚の情報をより見つけやすくし、まちの中で本をきっかけにした出会いが生まれるよう、検索機能や投稿機能、イベントとの連携をさらに改善していきたいです。また、活動を継続的に運営していくために、NPOの立ち上げも検討しています。"],
    ],
  },
  makeyou: {
    bodyClass: "",
    title: "MAKE YOU | いとう りみ Portfolio",
    sectionClassName: "honnova-case",
    logo: {
      className: "makeyou-logo-img",
      src: "/assets/makeyou-logo.png",
      alt: "MAKE YOU",
    },
    overviewPanels: [
      [
        ["カテゴリー", "UI Design / App Design"],
        ["役割", "リサーチ / UI設計 / 画面設計 / テスト"],
        [
          "Overview",
          "授業テーマ「ToDo × 〇〇」に沿って制作した、健康習慣や運動習慣を続けるためのアプリUIです。SNS上の食事改善、自宅トレーニング、エクササイズ動画などを保存し、自分用のフォルダやToDoとして組み合わせられるようにしました。",
        ],
      ],
      [
        [
          "Background",
          "健康のために運動や食事改善を始めようとしても、継続することは簡単ではありません。10〜30代のユーザーがSNSで健康や運動に関する情報を集めていることに注目し、情報を見るだけで終わらせず、行動につなげる体験を考えました。",
        ],
      ],
    ],
    mockImages: ["/assets/makeyou-top-1.png", "/assets/makeyou-top-2.png", "/assets/makeyou-top-3.png"],
    problems: [
      ["情報が散らばる", "健康や運動に関する情報が複数のSNSに分かれている。"],
      ["保存しても活用しにくい", "あとから見返しづらく、実際の行動につながりにくい。"],
      ["続ける仕組みがない", "運動や食事改善を習慣として続けるきっかけが不足している。"],
    ],
    concept: {
      className: "make-concept",
      heading: <>見るだけで終わらせず<br />行動につなげる。</>,
      text: "MAKE YOUでは、SNSで見つけた健康・運動情報をただ保存するだけでなく、自分のToDoとして組み合わせられるようにしました。情報収集から実践までの距離を短くすることで、ユーザーが自分のペースで健康習慣を続けられる体験を目指しました。",
    },
    service: {
      eyebrow: "Service Design",
      className: "make-service-design",
      screens: [
        { id: "1", src: "/assets/makeyou-detail-1.png" },
        { id: "2", src: "/assets/makeyou-detail-2.png" },
        { id: "3", src: "/assets/makeyou-detail-3.png" },
      ],
      steps: [
        ["1", "/assets/01-img.png", "01", "SNS型の投稿閲覧", "健康・運動に関する投稿だけを見られるSNS型の画面"],
        ["2", "/assets/2-img.png", "02", "保存フォルダ", "気になった投稿や動画を、自分のフォルダに保存できる機能"],
        ["3", "/assets/3-img.png", "03", "動画ToDo化", "保存したエクササイズ動画を組み合わせ、自分用のToDoリストとして管理する"],
      ],
    },
    feedback: [
      <>複数のSNSに散らばっていた健康・運動情報を<br />一箇所にまとめられる点が便利そう。</>,
      "保存した動画をそのままToDoリストに入れられると、見るだけで終わらず行動につながりそう。",
      "継続するためには、リマインド機能やクエストのような仕組みがあると良さそう。",
    ],
    finalGrid: [
      ["Learning", "UIは見た目を整えるだけではなく、ユーザーの行動の流れを設計するものだと学びました。"],
      ["Next Step", "今後は、リマインド機能やクエスト機能など、習慣化を支える仕組みをさらに検討したいです。"],
    ],
  },
  kamiyamacast: {
    bodyClass: "",
    title: "KamiyamaCast | いとう りみ Portfolio",
    sectionClassName: "honnova-case",
    logo: {
      className: "honnova-logo-img",
      src: "/assets/kamiyamacast-logo.png",
      alt: "KamiyamaCast",
    },
    overviewPanels: [
      [
        ["いつから", "2023年ーいままで"],
        ["役割", "企画 / 収録 / 編集 / 配信 / Web運用"],
        [
          "Overview",
          "神山まるごと高専の学生が、自分たちの声で学校の日常や活動を届けるPodcastメディアです。15〜20歳の学生が、飾らない言葉で今考えていることや取り組んでいることを発信し、学校の雰囲気や学生のリアルな姿を伝えています。",
        ],
        ["サイトリンク", <a href="https://kamiyamacast.jp/" target="_blank">https://kamiyamacast.jp/</a>],
      ],
    ],
    mockImages: ["/assets/kamiyamacast-top-1.png", "/assets/kamiyamacast-top-2.jpg", "/assets/kamiyamacast-top-3.jpg"],
    concept: {
      className: "cast-concept",
      heading: <>飾らない声で<br />高専の今を届ける。</>,
      text: "KamiyamaCastでは、学生の活動をきれいにまとめすぎるのではなく、会話の中にある迷いや楽しさ、挑戦の途中にあるリアルな声を大切にしています。Podcastを通して、文章や写真だけでは伝わりにくい声、間、空気感を届けます。",
    },
    service: {
      eyebrow: "Media Operation",
      className: "cast-service-design",
      stackClassName: "service-screen-stack--media",
      screenClassName: "media-service-screen cast-service-screen",
      screens: [
        { id: "1", src: "/assets/kamiyamacast-detail-1.png" },
        { id: "2", src: "/assets/assets:kamiyamacast-thumb.JPG" },
        { id: "3", src: "/assets/kamiyamacast-detail-3.png" },
        { id: "4", src: "/assets/kamiyamacast-detail-4.png" },
        { id: "5", src: "/assets/kamiyamacast-detail-5.png" },
      ],
      steps: [
        ["1", "/assets/01-img.png", "01", "企画", "話すテーマやゲスト、届けたい相手を考える"],
        ["2", "/assets/2-img.png", "02", "収録", "学生同士の自然な会話を大切にしながら収録する"],
        ["3", "/assets/3-img.png", "03", "編集", "聞きやすさを意識して音声を整え、必要に応じて構成を調整する"],
        ["4", "/assets/4-img.png", "04", "配信", "Podcastプラットフォームで公開し、サイトやSNSからアクセスできるようにする"],
        ["5", "/assets/5-img.svg", "05", "広報・配信", "公開したエピソードをサイトやSNSで発信し、より多くの人にKamiyamaCastを届ける"],
      ],
    },
    audio: {
      heading: "Original Program：夢みる朗読",
      text: "KamiyamaCast内で、朗読をテーマにした番組「夢みる朗読」を企画・配信しています。本や文章をただ読むのではなく、声のトーンや間の取り方を通して、言葉の持つ雰囲気や余韻を届けることを大切にしています。",
      link: "https://open.spotify.com/show/3ynk362HYdAc1V2ldlR4nY",
      embed: "https://open.spotify.com/embed/episode/2UDpvuq75RHsMF46gYDUzr?utm_source=generator",
    },
    field: {
      heading: "Web / Information Design",
      image: "/assets/kamiyamacast-detail-6.png",
      imageAlt: "KamiyamaCastのWebサイト設計イメージ",
      text: "番組一覧、Spotifyの埋め込み、お便り募集などの導線を整理し、初めて訪れた人でも聴きたい番組にたどり着けるWebサイトの設計にも取り組んでいます。",
    },
    finalGrid: [
      ["Learning", "コンテンツは作って終わりではなく、継続的に届けるための運用設計が大切だと学びました。"],
      ["Next Step", "番組情報や過去のエピソードをより見つけやすく整理し、聴き手と番組がつながる導線も整えていきたいです。"],
    ],
  },
};
