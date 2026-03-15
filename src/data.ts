import { Train, Utensils, Landmark, Bath, Building2, Footprints, Trash2, Church } from 'lucide-react';

import { Language } from './i18n';

export interface LocalizedEtiquetteContent {
  title: string;
  quickView: string;
  whatToDo: string[];
  whatNotToDo: string[];
  whyItMatters: string;
  commonMistakes: string[];
  readMore: string;
}

export interface EtiquetteItem extends LocalizedEtiquetteContent {
  id: string;
  icon: any;
  image: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  tags: string[];
  isPremium: boolean;
  translations?: Partial<Record<Language, Partial<LocalizedEtiquetteContent>>>;
}

export const ETIQUETTE_DATA: EtiquetteItem[] = [
  {
    id: 'train',
    title: 'Train',
    icon: Train,
    image: 'https://picsum.photos/seed/japan-train/800/600',
    riskLevel: 'High',
    tags: ['Essential', 'Public'],
    quickView: 'Keep it quiet and orderly. No phone calls, no eating (except long-distance), and wait in line.',
    whatToDo: [
      'Set your phone to silent (Manner Mode).',
      'Wait in designated lines on the platform.',
      'Let passengers off before boarding.',
      'Keep your voice low when talking.',
      'Carry your backpack in front or put it on the overhead rack.'
    ],
    whatNotToDo: [
      'Do not talk on the phone.',
      'Do not eat or drink on local trains.',
      'Do not rush onto the train as doors are closing.',
      'Do not take up more than one seat space.'
    ],
    whyItMatters: 'Japanese trains are shared public spaces where silence and efficiency are highly valued to ensure a comfortable commute for everyone.',
    commonMistakes: [
      'Talking loudly with friends.',
      'Eating a snack on a busy subway.',
      'Blocking the door when others are trying to get off.'
    ],
    readMore: 'Priority seats are for the elderly, injured, or pregnant. Even if they are empty, it is polite to leave them for those who need them. On some lines, there are women-only cars during rush hour.',
    isPremium: false,
    translations: {
      ja: {
        title: '電車',
        quickView: '静かに、秩序を守りましょう。通話は控え、飲食は避け（長距離を除く）、列に並んで待ちます。',
        whatToDo: [
          '携帯電話をマナーモードに設定する。',
          'ホームの指定された列で待つ。',
          '乗る前に降りる人を優先する。',
          '会話は控えめな声でする。',
          'リュックは前に抱えるか、網棚に置く。'
        ],
        whatNotToDo: [
          '車内で通話をしない。',
          '各駅停車などの車内で飲食をしない。',
          '閉まりかけのドアに駆け込まない。',
          '一人分以上の座席を占領しない。'
        ],
        whyItMatters: '日本の電車は公共の場であり、誰もが快適に利用できるよう、静寂と効率が非常に重視されています。',
        commonMistakes: [
          '友達と大きな声で話す。',
          '混雑した地下鉄で軽食を食べる。',
          '降りようとしている人の邪魔になる場所に立つ。'
        ],
        readMore: '優先席は高齢者、怪我人、妊婦などのための席です。空いていても、必要としている人のために空けておくのがマナーです。一部の路線には、ラッシュ時に女性専用車両があります。'
      },
      ko: {
        title: '기차/전철',
        quickView: '조용하고 질서 있게 행동하세요. 통화 금지, 음식 섭취 자제(장거리 제외), 줄 서서 기다리기.',
        whatToDo: [
          '휴대폰을 매너 모드로 설정하세요.',
          '승강장의 지정된 줄에서 기다리세요.',
          '승차 전 하차 승객을 먼저 보내세요.',
          '대화는 낮은 목소리로 하세요.',
          '배낭은 앞으로 메거나 선반에 올리세요.'
        ],
        whatNotToDo: [
          '차내에서 통화하지 마세요.',
          '일반 전철 내에서 음식을 먹지 마세요.',
          '문이 닫힐 때 무리하게 타지 마세요.',
          '좌석을 한 칸 이상 차지하지 마세요.'
        ],
        whyItMatters: '일본의 기차는 공공장소로, 모든 승객의 편안한 이동을 위해 정숙과 효율성을 매우 중요하게 생각합니다.',
        commonMistakes: [
          '친구와 큰 소리로 대화하기.',
          '붐비는 지하철에서 간식 먹기.',
          '내리려는 사람들의 길을 막기.'
        ],
        readMore: '우선석은 노약자, 부상자, 임산부를 위한 자리입니다. 비어 있더라도 필요한 분들을 위해 비워두는 것이 예의입니다. 일부 노선에는 출퇴근 시간에 여성 전용 칸이 있습니다.'
      }
    }
  },
  {
    id: 'restaurant',
    title: 'Restaurant',
    icon: Utensils,
    image: 'https://picsum.photos/seed/japan-food/800/600',
    riskLevel: 'Medium',
    tags: ['Essential', 'Dining'],
    quickView: 'Say "Itadakimasu" before eating. Do not tip. Use chopsticks correctly.',
    whatToDo: [
      'Say "Itadakimasu" before you start eating.',
      'Use the wet towel (oshibori) to wipe your hands only.',
      'Lift small bowls to your mouth when eating rice or soup.',
      'Say "Gochisousama-deshita" after finishing.',
      'Pay at the register, not at the table (usually).'
    ],
    whatNotToDo: [
      'Do not leave a tip (it can be seen as confusing or rude).',
      'Do not pass food directly from your chopsticks to another person\'s.',
      'Do not stick your chopsticks vertically into a bowl of rice.',
      'Do not blow your nose loudly at the table.'
    ],
    whyItMatters: 'Dining etiquette shows respect for the chef and the ingredients. Tipping is not part of the culture and service is included in the price.',
    commonMistakes: [
      'Trying to leave a tip on the table.',
      'Rubbing disposable chopsticks together (implies they are cheap).',
      'Wiping your face or neck with the oshibori.'
    ],
    readMore: 'Slurping noodles is actually a sign that you are enjoying the meal and helps cool the noodles down. It is not considered rude in Japan.',
    isPremium: false,
    translations: {
      ja: {
        title: 'レストラン',
        quickView: '食べる前に「いただきます」と言いましょう。チップは不要です。箸を正しく使いましょう。',
        whatToDo: [
          '食べ始める前に「いただきます」と言う。',
          'おしぼりは手だけを拭くために使う。',
          'ご飯や汁物を食べる時は、小さな器を口元まで持ち上げる。',
          '食べ終わったら「ごちそうさまでした」と言う。',
          '通常、テーブルではなくレジで会計をする。'
        ],
        whatNotToDo: [
          'チップを置かない（混乱を招いたり、失礼にあたることがあります）。',
          '箸から箸へ食べ物を直接渡さない。',
          '箸をご飯に垂直に突き立てない。',
          'テーブルで大きな音を立てて鼻をかまない。'
        ],
        whyItMatters: '食事のマナーは、料理人や食材への敬意を表します。チップの習慣はなく、サービス料は価格に含まれています。',
        commonMistakes: [
          'テーブルにチップを残そうとする。',
          '割り箸をこすり合わせる（安物であることを示唆します）。',
          'おしぼりで顔や首を拭く。'
        ],
        readMore: '麺をすする音を立てるのは、実は食事を楽しんでいる証拠であり、麺を冷ますのにも役立ちます。日本では失礼とはみなされません。'
      },
      ko: {
        title: '레스토랑',
        quickView: '먹기 전에 "이타다키마스"라고 말하세요. 팁은 필요 없습니다. 젓가락을 올바르게 사용하세요.',
        whatToDo: [
          '식사를 시작하기 전에 "이타다키마스"라고 말하기.',
          '물수건(오시보리)은 손만 닦는 데 사용하기.',
          '밥이나 국을 먹을 때는 작은 그릇을 입가로 들어 올리기.',
          '식사를 마친 후에는 "고치소사마 데시타"라고 말하기.',
          '보통 테이블이 아닌 계산대에서 계산하기.'
        ],
        whatNotToDo: [
          '팁을 남기지 않기 (혼란을 주거나 무례하게 보일 수 있음).',
          '젓가락에서 젓가락으로 음식을 직접 전달하지 않기.',
          '젓가락을 밥그릇에 수직으로 꽂지 않기.',
          '테이블에서 코를 크게 풀지 않기.'
        ],
        whyItMatters: '식사 에티켓은 요리사와 식재료에 대한 존중을 나타냅니다. 팁 문화가 없으며 서비스 요금은 가격에 포함되어 있습니다.',
        commonMistakes: [
          '테이블에 팁을 남기려고 하는 것.',
          '일회용 젓가락을 서로 비비는 것 (저렴하다는 것을 암시함).',
          '물수건으로 얼굴이나 목을 닦는 것.'
        ],
        readMore: '면을 소리 내어 먹는 것은 사실 식사를 즐기고 있다는 신호이며 면을 식히는 데 도움이 됩니다. 일본에서는 무례한 것으로 간주되지 않습니다.'
      },
      'zh-TW': {
        title: '餐廳',
        quickView: '用餐前說「我要開動了」。不收小費。正確使用筷子。',
        whatToDo: [
          '開始用餐前說「我要開動了」（Itadakimasu）。',
          '濕巾（oshibori）僅用於擦手。',
          '喝湯或吃米飯時，將小碗舉至嘴邊。',
          '用餐完畢後說「謝謝款待」（Gochisousama-deshita）。',
          '通常在收銀台結帳，而不是在餐桌結帳。'
        ],
        whatNotToDo: [
          '不要留小費（這可能被視為令人困惑或失禮）。',
          '不要用筷子直接將食物傳遞給另一人的筷子。',
          '不要將筷子垂直插在飯碗中。',
          '不要在餐桌上大聲擤鼻涕。'
        ],
        whyItMatters: '用餐禮儀展現了對廚師和食材的尊重。日本沒有小費文化，服務費已包含在價格中。',
        commonMistakes: [
          '試圖在桌上留小費。',
          '將一次性筷子互相摩擦（暗示它們很廉價）。',
          '用濕巾擦臉或脖子。'
        ],
        readMore: '吸食麵條發出聲音實際上是享受美食的表現，並有助於讓麵條降溫。在日本這不被視為失禮。'
      },
      'zh-CN': {
        title: '餐厅',
        quickView: '用餐前说“我要开动了”。不收小费。正确使用筷子。',
        whatToDo: [
          '开始用餐前说“我要开动了”（Itadakimasu）。',
          '湿巾（oshibori）仅用于擦手。',
          '喝汤或吃米饭时，将小碗举至嘴边。',
          '用餐完毕后说“谢谢款待”（Gochisousama-deshita）。',
          '通常在收银台结账，而不是在餐桌结账。'
        ],
        whatNotToDo: [
          '不要留小费（这可能被视为令人困惑或失礼）。',
          '不要用筷子直接将食物传递给另一人的筷子。',
          '不要将筷子垂直插在饭碗中。',
          '不要在餐桌上大声擤鼻涕。'
        ],
        whyItMatters: '用餐礼仪展现了对厨师和食材的尊重。日本没有小费文化，服务费已包含在价格中。',
        commonMistakes: [
          '试图在桌上留小费。',
          '将一次性筷子互相摩擦（暗示它们很廉价）。',
          '用湿巾擦脸或脖子。'
        ],
        readMore: '吸食面条发出声音实际上是享受美食的表现，并有助于让面条降温。在日本这不被视为失礼。'
      }
    }
  },
  {
    id: 'shrine',
    title: 'Shrine',
    icon: Landmark,
    image: 'https://picsum.photos/seed/japan-shrine/800/600',
    riskLevel: 'Medium',
    tags: ['Culture', 'Sacred'],
    quickView: 'Bow at the gate. Wash hands at the fountain. Bow twice, clap twice, pray, bow once.',
    whatToDo: [
      'Bow once before entering the Torii gate.',
      'Walk on the sides of the path, not the center (the center is for the deity).',
      'Purify your hands and mouth at the chozuya (water pavilion).',
      'Bow twice, clap twice, pray, and bow once at the altar.',
      'Throw a small coin (5 yen is lucky) into the offering box.'
    ],
    whatNotToDo: [
      'Do not take photos of the inner sanctum if signs forbid it.',
      'Do not be loud or disruptive.',
      'Do not drink directly from the ladle at the purification fountain.'
    ],
    whyItMatters: 'Shrines are sacred Shinto spaces. Following the rituals shows respect for the local spirits and traditions.',
    commonMistakes: [
      'Walking right down the middle of the path.',
      'Forgetting to bow at the gate.',
      'Clapping at a temple (clapping is for shrines only).'
    ],
    readMore: 'The purification ritual: Wash left hand, then right hand, then rinse mouth with water in your left hand, then wash left hand again, and finally tilt the ladle to wash the handle.',
    isPremium: true,
    translations: {
      ja: {
        title: '神社',
        quickView: '鳥居で一礼し、手水舎で手を清めます。二礼二拍手一礼の作法で参拝しましょう。',
        whatToDo: [
          '鳥居をくぐる前に一礼する。',
          '参道の真ん中（正中）は神様の通り道なので、端を歩く。',
          '手水舎で手と口を清める。',
          '祭壇の前で二礼二拍手一礼をする。',
          'お賽銭箱に小銭（5円玉は縁起が良いとされる）を入れる。'
        ],
        whatNotToDo: [
          '禁止されている場所で本殿内部の写真を撮らない。',
          '大声を出したり、騒いだりしない。',
          '手水舎の柄杓に直接口をつけない。'
        ],
        whyItMatters: '神社は神道の聖なる場所です。作法を守ることは、その土地の神様や伝統への敬意を表します。',
        commonMistakes: [
          '参道の真ん中を歩く。',
          '鳥居で一礼するのを忘れる。',
          'お寺で拍手をする（拍手は神社のみの作法です）。'
        ],
        readMore: '手水の作法：左手を洗い、次に右手を洗い、左手に水を受けて口をすすぎ、もう一度左手を洗い、最後に柄杓を立てて柄を洗います。'
      }
    }
  },
  {
    id: 'onsen',
    title: 'Onsen',
    icon: Bath,
    image: 'https://picsum.photos/seed/japan-onsen/800/600',
    riskLevel: 'High',
    tags: ['Essential', 'Bathing'],
    quickView: 'Wash thoroughly before entering. No swimsuits. Keep towels out of the water.',
    whatToDo: [
      'Wash your entire body at the washing station before entering the bath.',
      'Tie up long hair so it doesn\'t touch the water.',
      'Sit on the provided stool while washing.',
      'Dry yourself off slightly before returning to the locker room.'
    ],
    whatNotToDo: [
      'Do not wear swimsuits (unless it\'s a rare mixed-gender "konyoku" that allows it).',
      'Do not put your towel in the bath water.',
      'Do not run or splash.',
      'Do not wash your clothes in the onsen.'
    ],
    whyItMatters: 'Onsens are for soaking and relaxing, not for cleaning your body. Keeping the water pure is the highest priority.',
    commonMistakes: [
      'Entering the water without rinsing off first.',
      'Bringing a large towel into the bath area.',
      'Having visible tattoos (though many places are becoming more "tattoo-friendly").'
    ],
    readMore: 'If you have tattoos, check the facility\'s policy beforehand. Some places provide covers, while others may refuse entry. Private baths (kashikiri) are a great alternative.',
    isPremium: true,
    translations: {
      ja: {
        title: '温泉',
        quickView: '入る前に体をよく洗いましょう。水着は着用禁止です。タオルを湯船に入れないでください。',
        whatToDo: [
          '湯船に入る前に、洗い場で全身を洗う。',
          '長い髪は湯船につかないよう結ぶ。',
          '体を洗う時は備え付けの椅子に座る。',
          '脱衣所に戻る前に、体を軽く拭く。'
        ],
        whatNotToDo: [
          '水着を着用しない（混浴などで許可されている場合を除く）。',
          'タオルを湯船に入れない。',
          '走ったり、お湯を跳ねさせたりしない。',
          '温泉で洗濯をしない。'
        ],
        whyItMatters: '温泉は体を洗う場所ではなく、お湯に浸かってリラックスするための場所です。お湯を清潔に保つことが最も重要です。',
        commonMistakes: [
          '体を流さずにお湯に入る。',
          '大きなタオルを浴場に持ち込む。',
          'タトゥーが見える状態で入る（最近はタトゥーOKの場所も増えています）。'
        ],
        readMore: 'タトゥーがある場合は、事前に施設のポリシーを確認してください。カバーシールを提供している場所もあれば、入浴を断られる場所もあります。貸切風呂（家族風呂）は良い選択肢です。'
      }
    }
  },
  {
    id: 'temple',
    title: 'Temple',
    icon: Church,
    image: 'https://picsum.photos/seed/japan-temple/800/600',
    riskLevel: 'Medium',
    tags: ['Culture', 'Sacred'],
    quickView: 'Quiet respect. No clapping. Burn incense if available.',
    whatToDo: [
      'Bow quietly before the main altar.',
      'If there is incense, waft the smoke toward yourself for healing/luck.',
      'Take off your shoes if entering temple buildings.',
      'Keep your voice low.'
    ],
    whatNotToDo: [
      'Do not clap (unlike at a Shinto shrine).',
      'Do not step on the wooden thresholds of doors.',
      'Do not take photos where prohibited.'
    ],
    whyItMatters: 'Temples are Buddhist places of worship and often house precious historical artifacts and graves.',
    commonMistakes: [
      'Clapping your hands to pray (this is for Shinto shrines).',
      'Walking on the tatami mats with shoes or slippers.'
    ],
    readMore: 'Many temples offer "Goshuin" (temple seals) which are beautiful calligraphic stamps you can collect in a special book called a Goshuincho.',
    isPremium: true,
    translations: {
      ja: {
        title: 'お寺',
        quickView: '静かに敬意を払いましょう。拍手はしません。線香があれば供えましょう。',
        whatToDo: [
          '本尊の前で静かに一礼する。',
          '線香がある場合は、煙を自分の方へ手で仰ぎ、無病息災などを祈る。',
          'お堂に入る時は靴を脱ぐ。',
          '控えめな声で話す。'
        ],
        whatNotToDo: [
          '拍手をしない（神社の作法とは異なります）。',
          '敷居（ドアの下の木の部分）を踏まない。',
          '撮影禁止の場所で写真を撮らない。'
        ],
        whyItMatters: 'お寺は仏教の礼拝の場であり、貴重な歴史的遺物や墓地があることも多いです。',
        commonMistakes: [
          'お参りの時に拍手をする（拍手は神社の作法です）。',
          '畳の上を靴やスリッパで歩く。'
        ],
        readMore: '多くの寺院では「御朱印」をいただくことができます。これは御朱印帳という専用の帳面に、美しい墨書きと印をいただくものです。'
      }
    }
  },
  {
    id: 'ryokan',
    title: 'Ryokan / Hotel',
    icon: Building2,
    image: 'https://picsum.photos/seed/japan-ryokan/800/600',
    riskLevel: 'High',
    tags: ['Essential', 'Stay'],
    quickView: 'Shoes off at the entrance. Respect meal times. Wear the yukata correctly.',
    whatToDo: [
      'Take off your shoes at the "genkan" (entrance).',
      'Wear the provided slippers inside, but remove them before stepping on tatami.',
      'Be punctual for dinner and breakfast times.',
      'Fold your yukata with the left side over the right.'
    ],
    whatNotToDo: [
      'Do not wear slippers on tatami mats.',
      'Do not fold your yukata right over left (this is for burials).',
      'Do not move the furniture in the room.'
    ],
    whyItMatters: 'Ryokans are traditional inns where the experience is about harmony, season, and hospitality (omotenashi).',
    commonMistakes: [
      'Wearing slippers into the tatami room.',
      'Being late for the carefully prepared kaiseki dinner.',
      'Folding the yukata the wrong way.'
    ],
    readMore: 'Staff will usually come to your room to set up your futon while you are at dinner or at the bath. Don\'t be surprised if your room is different when you return!',
    isPremium: true,
    translations: {
      ja: {
        title: '旅館・ホテル',
        quickView: '玄関で靴を脱ぎましょう。食事の時間を守り、浴衣を正しく着用しましょう。',
        whatToDo: [
          '玄関（げんかん）で靴を脱ぐ。',
          '館内では備え付けのスリッパを履くが、畳の上では脱ぐ。',
          '夕食と朝食の時間を厳守する。',
          '浴衣は左側を右側の上に重ねて着る（左前）。'
        ],
        whatNotToDo: [
          '畳の上でスリッパを履かない。',
          '浴衣を右前（右側を左側の上に重ねる）に着ない（これは亡くなった方の着せ方です）。',
          '部屋の家具を勝手に動かさない。'
        ],
        whyItMatters: '旅館は日本の伝統的な宿泊施設であり、調和、季節感、そして「おもてなし」の心を体験する場所です。',
        commonMistakes: [
          'スリッパを履いたまま畳の部屋に入る。',
          '丁寧に用意された懐石料理の夕食に遅れる。',
          '浴衣の合わせを逆にする。'
        ],
        readMore: '通常、夕食中や入浴中にスタッフが部屋に来て布団を敷いてくれます。戻った時に部屋の様子が変わっていても驚かないでくださいね！'
      }
    }
  },
  {
    id: 'shoes',
    title: 'Shoes Indoors',
    icon: Footprints,
    image: 'https://picsum.photos/seed/japan-shoes/800/600',
    riskLevel: 'High',
    tags: ['Essential', 'Home'],
    quickView: 'The most important rule: If there is a raised floor or a lowered entrance, shoes come off.',
    whatToDo: [
      'Look for a "genkan" (sunken entrance) or a row of shoes.',
      'Point your shoes toward the door after taking them off.',
      'Use the provided slippers for hallways.',
      'Use the specific "toilet slippers" when entering the restroom.'
    ],
    whatNotToDo: [
      'Do not step on the raised floor with your shoes still on.',
      'Do not step on the lower entrance floor with your socks.',
      'Do not forget to switch back from toilet slippers to house slippers.'
    ],
    whyItMatters: 'Japanese homes and many traditional buildings are kept clean by strictly separating "outside" and "inside" zones.',
    commonMistakes: [
      'Walking into a house with shoes on.',
      'Wearing house slippers into the bathroom.',
      'Wearing toilet slippers back into the living room (a very common "oops").'
    ],
    readMore: 'Even in some modern fitting rooms in clothing stores, you are expected to take off your shoes before stepping onto the carpeted area.',
    isPremium: false,
    translations: {
      ja: {
        title: '土足厳禁',
        quickView: '最も重要なルール：床が高くなっている場所や、一段下がった玄関では靴を脱ぎます。',
        whatToDo: [
          '玄関（一段下がった場所）や、並んでいる靴を探す。',
          '靴を脱いだら、つま先をドアの方に向けて揃える。',
          '廊下では備え付けのスリッパを履く。',
          'トイレに入る時は、専用の「トイレスリッパ」に履き替える。'
        ],
        whatNotToDo: [
          '靴を履いたまま、一段高い床の上に上がらない。',
          '靴下のまま、一段低い玄関の床に降りない。',
          'トイレスリッパから館内スリッパに履き替えるのを忘れない。'
        ],
        whyItMatters: '日本の住宅や多くの伝統的な建物は、「外」と「内」を厳格に分けることで清潔に保たれています。',
        commonMistakes: [
          '靴を履いたまま家の中に入る。',
          '館内スリッパのままトイレに入る。',
          'トイレスリッパを履いたままリビングに戻る（非常によくある失敗です）。'
        ],
        readMore: '衣料品店の現代的な試着室でも、カーペットのエリアに上がる前に靴を脱ぐことが求められる場合があります。'
      }
    }
  },
  {
    id: 'trash',
    title: 'Trash & Public',
    icon: Trash2,
    image: 'https://picsum.photos/seed/japan-trash/800/600',
    riskLevel: 'Medium',
    tags: ['Public', 'Order'],
    quickView: 'Take your trash home. No eating while walking. Be mindful of space.',
    whatToDo: [
      'Carry a small bag for your own trash.',
      'Sort your trash carefully at convenience stores or stations.',
      'Stand on the correct side of the escalator (left in Tokyo, right in Osaka).',
      'Keep to the left (usually) when walking on sidewalks.'
    ],
    whatNotToDo: [
      'Do not litter. Public trash cans are rare.',
      'Do not eat or drink while walking (it\'s considered messy).',
      'Do not smoke while walking (use designated smoking areas).'
    ],
    whyItMatters: 'Public order and cleanliness are maintained by everyone taking individual responsibility for their own impact on the environment.',
    commonMistakes: [
      'Searching for a trash can for 20 minutes instead of just carrying it.',
      'Walking and eating a slice of pizza.',
      'Smoking on a busy street corner.'
    ],
    readMore: 'Since the 1995 subway attacks, public trash cans have been removed from many streets for security. Convenience stores (konbini) are often the only reliable place to find bins.',
    isPremium: false,
    translations: {
      ja: {
        title: 'ゴミと公共マナー',
        quickView: 'ゴミは持ち帰りましょう。歩き食べは控え、周囲に配慮しましょう。',
        whatToDo: [
          '自分のゴミを入れるための小さな袋を持ち歩く。',
          'コンビニや駅では、ゴミを細かく分別して捨てる。',
          'エスカレーターでは正しい側に立つ（東京は左、大阪は右）。',
          '歩道を歩く時は（通常）左側を通る。'
        ],
        whatNotToDo: [
          'ポイ捨てをしない。公共のゴミ箱は滅多にありません。',
          '歩きながら飲食をしない（行儀が悪いとみなされます）。',
          '歩きタバコをしない（指定の喫煙所を利用する）。'
        ],
        whyItMatters: '公共の秩序と清潔さは、一人ひとりが自分の環境への影響に責任を持つことで維持されています。',
        commonMistakes: [
          'ゴミ箱を20分も探し回る代わりに、自分で持ち歩かない。',
          'ピザを食べながら歩く。',
          '混雑した街角でタバコを吸う。'
        ],
        readMore: '1995年の地下鉄サリン事件以来、セキュリティのために多くの通りから公共のゴミ箱が撤去されました。コンビニエンスストアは、ゴミ箱を見つけられる数少ない場所の一つです。'
      }
    }
  },
  {
    id: 'bowing',
    title: 'Bowing',
    icon: Footprints,
    image: 'https://picsum.photos/seed/japan-bow/800/600',
    riskLevel: 'Low',
    tags: ['Culture', 'Essential'],
    quickView: 'A simple nod is often enough for tourists, but a deeper bow shows more respect.',
    whatToDo: [
      'Keep your back straight when bowing.',
      'Place your hands at your sides (men) or clasped in front (women).',
      'A 15-degree bow is for casual greetings.',
      'A 30-degree bow is for more formal situations or showing respect.'
    ],
    whatNotToDo: [
      'Do not bow while walking.',
      'Do not maintain eye contact while bowing (look down).',
      'Do not bow too many times (it can become awkward).'
    ],
    whyItMatters: 'Bowing is the fundamental way to show respect, gratitude, and apology in Japanese culture.',
    commonMistakes: [
      'Bowing while shaking hands (pick one or the other).',
      'Bowing too deeply for a casual situation.'
    ],
    readMore: 'As a visitor, a polite nod and a smile are usually perfectly acceptable. Japanese people don\'t expect foreigners to master the nuances of bowing immediately.',
    isPremium: false,
    translations: {
      ja: {
        title: 'お辞儀',
        quickView: '観光客なら軽い会釈で十分なことが多いですが、深いお辞儀はより深い敬意を表します。',
        whatToDo: [
          'お辞儀をする時は背筋を伸ばす。',
          '手は横に置く（男性）か、前で重ねる（女性）。',
          '15度の会釈は軽い挨拶用。',
          '30度の敬礼は、よりフォーマルな場面や敬意を表す時用。'
        ],
        whatNotToDo: [
          '歩きながらお辞儀をしない。',
          'お辞儀をしながら相手の目を見ない（視線を下に落とす）。',
          '何度も繰り返してお辞儀をしない（不自然になることがあります）。'
        ],
        whyItMatters: 'お辞儀は、日本文化における敬意、感謝、謝罪を表す基本的な方法です。',
        commonMistakes: [
          '握手をしながらお辞儀をする（どちらか一方にしましょう）。',
          'カジュアルな場面で深すぎるお辞儀をする。'
        ],
        readMore: '訪問者としては、丁寧な会釈と笑顔があれば通常は全く問題ありません。日本人は、外国人がすぐにお辞儀の微妙なニュアンスをマスターできるとは期待していません。'
      }
    }
  },
  {
    id: 'escalators',
    title: 'Escalators',
    icon: Footprints,
    image: 'https://picsum.photos/seed/japan-escalator/800/600',
    riskLevel: 'Medium',
    tags: ['Essential', 'Public'],
    quickView: 'Stand on one side, walk on the other. The side changes depending on where you are.',
    whatToDo: [
      'Stand on the LEFT in Tokyo and most of Japan.',
      'Stand on the RIGHT in Osaka and the surrounding Kansai region.',
      'Leave the other side open for people who are in a hurry.',
      'Hold the handrail for safety.'
    ],
    whatNotToDo: [
      'Do not stand in the middle of the escalator.',
      'Do not block the path with large luggage.',
      'Do not walk up the "standing" side.'
    ],
    whyItMatters: 'Japanese cities are crowded and efficient. Keeping one side of the escalator clear allows for smooth flow of people.',
    commonMistakes: [
      'Standing on the wrong side in Osaka (or Tokyo).',
      'Blocking the path with a large suitcase.'
    ],
    readMore: 'If you are unsure, just look at what the person in front of you is doing. It\'s the easiest way to avoid confusion!',
    isPremium: false,
    translations: {
      ja: {
        title: 'エスカレーター',
        quickView: '片側に立ち、もう片側を空けます。場所によって立つ側が異なります。',
        whatToDo: [
          '東京や日本の大部分では左側に立つ。',
          '大阪や関西地方では右側に立つ。',
          '急いでいる人のために、反対側を空けておく。',
          '安全のため手すりにつかまる。'
        ],
        whatNotToDo: [
          'エスカレーターの真ん中に立たない。',
          '大きな荷物で道をふさがない。',
          '「立つ側」を歩いて登らない。'
        ],
        whyItMatters: '日本の都市は混雑しており、効率的です。エスカレーターの片側を空けることで、人の流れをスムーズにします。',
        commonMistakes: [
          '大阪（または東京）で間違った側に立つ。',
          '大きなスーツケースで道をふさぐ。'
        ],
        readMore: '迷ったら、前の人がどうしているか見てみましょう。それが混乱を避ける一番簡単な方法です！'
      }
    }
  },
  {
    id: 'tattoos',
    title: 'Tattoos',
    icon: Footprints,
    image: 'https://picsum.photos/seed/japan-tattoo/800/600',
    riskLevel: 'Medium',
    tags: ['Culture', 'Public'],
    quickView: 'Tattoos are still associated with organized crime in Japan. Many public baths and gyms may refuse entry.',
    whatToDo: [
      'Check the "Tattoo Policy" before visiting an onsen, gym, or pool.',
      'Use waterproof bandages or "rash guards" to cover small tattoos.',
      'Look for "Tattoo Friendly" signs or websites.',
      'Consider booking a private bath (kashikiri) if you have large tattoos.'
    ],
    whatNotToDo: [
      'Do not assume all places are tattoo-friendly.',
      'Do not get upset if you are asked to cover up or leave; it is a cultural policy, not a personal one.'
    ],
    whyItMatters: 'Historically, tattoos were used by the Yakuza (Japanese mafia). While this is changing among younger generations, many businesses maintain strict no-tattoo policies to ensure a "safe" environment for all customers.',
    commonMistakes: [
      'Entering a public bath with visible tattoos without checking.',
      'Assuming that being a foreigner makes the rule not apply.'
    ],
    readMore: 'The website "Tattoo-Friendly Japan" is an excellent resource for finding places that welcome tattooed guests.',
    isPremium: true,
    translations: {
      ja: {
        title: 'タトゥー（刺青）',
        quickView: '日本ではタトゥーは依然として反社会的勢力と結びつけられることがあります。多くの公衆浴場やジムで入場を断られる場合があります。',
        whatToDo: [
          '温泉、ジム、プールを訪れる前に「タトゥーポリシー」を確認する。',
          '小さなタトゥーは防水のカバーシールやラッシュガードで隠す。',
          '「タトゥーフレンドリー」な看板やウェブサイトを探す。',
          '大きなタトゥーがある場合は、貸切風呂（家族風呂）の利用を検討する。'
        ],
        whatNotToDo: [
          'すべての場所がタトゥーOKだと思い込まない。',
          'カバーを求められたり退場を促されたりしても、怒らない。これは個人的なものではなく、文化的なポリシーです。'
        ],
        whyItMatters: '歴史的に、タトゥーはヤクザ（日本のマフィア）によって使われてきました。若い世代では認識が変わりつつありますが、多くの企業はすべての顧客に「安心」を提供するために、厳格な入店制限を維持しています。',
        commonMistakes: [
          '確認せずにタトゥーが見える状態で公衆浴場に入る。',
          '外国人だからルールが適用されないと思い込む。'
        ],
        readMore: '「Tattoo-Friendly Japan」というウェブサイトは、タトゥーのある客を歓迎する場所を探すのに非常に役立つリソースです。'
      }
    }
  },
  {
    id: 'dining-deep-dive',
    title: 'Dining Deep Dive',
    icon: Utensils,
    image: 'https://picsum.photos/seed/japan-dining-pro/800/600',
    riskLevel: 'High',
    tags: ['Premium', 'Dining'],
    quickView: 'Master the nuances of formal dining, from seating order to complex chopstick rules.',
    whatToDo: [
      'Wait for the host to indicate your seat (Kamiza vs. Shimoza).',
      'Hold your rice bowl with four fingers on the bottom and your thumb on the rim.',
      'Use the back ends of communal chopsticks if no serving utensils are provided.',
      'Finish every grain of rice to show respect for the farmer.'
    ],
    whatNotToDo: [
      'Do not hover your chopsticks over dishes (mayoi-bashi).',
      'Do not pull dishes toward you using chopsticks (yose-bashi).',
      'Do not rest your chopsticks across the top of a bowl (watashi-bashi).',
      'Do not start eating until the most senior person has begun.'
    ],
    whyItMatters: 'Formal dining in Japan is a choreographed dance of respect. Mastering these details shows a deep appreciation for Japanese social harmony.',
    commonMistakes: [
      'Sitting in the "honored seat" (furthest from the door) by accident.',
      'Using chopsticks to spear food like a fork.',
      'Leaving a mess of small plates at the end of the meal.'
    ],
    readMore: 'The "Kamiza" (top seat) is usually the one furthest from the entrance, often in front of an alcove (tokonoma). The "Shimoza" (bottom seat) is closest to the door, reserved for the youngest or lowest-ranking person.',
    isPremium: true,
    translations: {
      ja: {
        title: '食事マナー上級編',
        quickView: '席次から複雑な箸の作法まで、フォーマルな食事のニュアンスをマスターしましょう。',
        whatToDo: [
          'ホストが席（上座と下座）を案内するのを待つ。',
          'ご飯茶碗は、底を4本の指で支え、親指を縁にかけて持つ。',
          '取り箸がない場合は、自分の箸の反対側を使って大皿から取る。',
          '農家の方への敬意を表し、米粒一つ残さず食べる。'
        ],
        whatNotToDo: [
          'どの料理を食べるか迷って箸を動かさない（迷い箸）。',
          '箸を使って器を自分の方へ引き寄せない（寄せ箸）。',
          '箸を器の上に渡して置かない（渡し箸）。',
          '目上の人が食べ始めるまで、食べ始めない。'
        ],
        whyItMatters: '日本のフォーマルな食事は、敬意を表すための洗練された儀式のようなものです。これらの詳細をマスターすることは、日本の社会的な調和に対する深い理解を示します。',
        commonMistakes: [
          '間違えて「上座」（入り口から最も遠い席）に座ってしまう。',
          '箸をフォークのように食べ物に突き刺す。',
          '食後に小皿を散らかしたままにする。'
        ],
        readMore: '「上座」は通常、入り口から最も遠い席で、床の間がある場合はその前になります。「下座」は入り口に最も近い席で、若手や目下の人が座ります。'
      }
    }
  }
];
