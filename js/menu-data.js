const menuData = {
    lunch: [
        { 
            en: { name: 'Lunch Set', description: '① Salad<br>② Naan or rice<br>③ One type of curry of your choice<br>[Keema egg curry, vegetable curry, chicken curry, butter chicken curry, potato and spinach curry, bean curry]' },
            jp: { name: 'ランチセット', description: '① サラダ<br>② ナンまたはライス<br>③ お好みのカレーを1種類選択<br>[キーマエッグカレー、野菜カレー、チキンカレー、バターチキンカレー、ポテトとほうれん草のカレー、豆カレー]' },
            price: '¥850', image: 'Dishesh/Launch/lunch101.jpg' 
        },
        { 
            en: { name: 'Namaste Lunch', description: 'Salad<br>Mini naan<br>Rice (small)<br>Chicken tikka<br>Chicken curry<br>Bean and tomato curry (butter flavor)' },
            jp: { name: 'ナマステランチ', description: 'サラダ<br>ミニナン<br>ライス (小)<br>チキンティッカ<br>チキンカレー<br>豆とトマトのカレー (バター風味)' },
            price: '¥980', image: 'Dishesh/Launch/lunch102.jpg' 
        },
        { 
            en: { name: 'Happy Lunch Set', description: '① Salad<br>② Tandoori Chicken<br>③ Rice (small)<br>④ One curry of your choice from the main menu<br>⑤ One naan of your choice from the main menu<br>⑥ Mango Lassi' },
            jp: { name: 'ハッピーランチセット', description: '① サラダ<br>② タンドリーチキン<br>③ ライス (小)<br>④ メインメニューからお好みのカレー1種類<br>⑤ メインメニューからお好みのナン1種類<br>⑥ マンゴーラッシー' },
            price: '¥1500', image: 'Dishesh/Launch/lunch103.jpg' 
        },
        { 
            en: { name: 'Ladies Lunch', description: '① Salad<br>② Naan or rice<br>③ One curry of your choice from the curry list<br>④ Dessert' },
            jp: { name: 'レディースランチ', description: '① サラダ<br>② ナンまたはライス<br>③ カレーリストからお好みのカレー1種類<br>④ デザート' },
            price: '¥850', image: 'Dishesh/Launch/lunch104.jpg' 
        },
        { 
            en: { name: 'Nepal Himalayan Soup Curry Set', description: '① Salad<br>② Japanese rice or basmati rice<br>③ Chicken mixed soup curry (chicken and various vegetables seasoned with Himalayan herbs and spices)' },
            jp: { name: 'ネパール・ヒマラヤスープカレーセット', description: '① サラダ<br>② 日本米またはバスマティライス<br>③ チキンミックススープカレー（チキンと様々な野菜をヒマラヤのハーブとスパイスで味付け）' },
            price: '¥990', image: 'Dishesh/Launch/lunch105.jpg' 
        },
        { 
            en: { name: 'Pork Cutlet Curry Rice', description: '① Pork cutlet curry rice<br>② Salad' },
            jp: { name: 'ポークカツカレーライス', description: '① ポークカツカレーライス<br>② サラダ' },
            price: '¥900', image: 'Dishesh/Launch/lunch106.jpg' 
        },
        { 
            en: { name: 'Mutton and Spinach Curry Rice', description: '① Mutton spinach curry rice<br>② Salad' },
            jp: { name: 'マトンとほうれん草のカレーライス', description: '① マトンほうれん草カレーライス<br>② サラダ' },
            price: '¥900', image: 'Dishesh/Launch/lunch107.jpg' 
        },
        { 
            en: { name: 'Vegetable Curry Topped with Tandoori Chicken', description: '① Vegetable curry tandoori chicken curry rice<br>② Salad' },
            jp: { name: 'タンドリーチキントッピング野菜カレー', description: '① 野菜カレータンドリーチキンカレーライス<br>② サラダ' },
            price: '¥1300', image: 'Dishesh/Launch/lunch108.jpg' 
        }
    ],

    special: [
        {
            en: { name: 'Himalayan Soup Curry Set', description: '[Nepalese classic soup curry set] Chicken and vegetable soup curry, basmati rice or Japanese rice, salad' },
            jp: { name: 'ヒマラヤスープカレーセット', description: 'ネパール定番のスープカレーセット。チキンと野菜のスープカレー、バスマティライスまたは日本米、サラダ' },
            price: '¥1100', image: 'Dishesh/special/set_61.jpg'
        },
        {
            en: { name: 'Nan Curry Set', description: 'Choose one curry of your choice [Chicken curry, Keema egg curry, Vegetable curry, Bean curry] with naan or rice' },
            jp: { name: 'ナンカレーセット', description: 'お好みのカレー1種（チキン、キーマエッグ、野菜、豆）とナンまたはライスのセット' },
            price: '¥990', image: 'Dishesh/special/set_62.jpg'
        },
        {
            en: { name: '[120 minutes] Order buffet (Additional 1,500 yen for all-you-can-drink!)', description: '[Available for 2 or more people] ¥2000 per person<br>[A la carte dishes] Green salad, Papad, Samosa, Mixed pakoda, Shish kebab, Boneless tandoori chicken, Prawn curry, Semi-dry chicken and eggplant curry, Mixed vegetable curry, Keema egg curry, Chickpea and spinach curry<br>[Naan and rice] Plain naan, Garlic naan, Onion naan, Rice, Vegetable biryani' },
            jp: { name: '[120分制] オーダーバイキング (プラス1,500円で飲み放題！)', description: '[2名様より] お一人様2000円<br>[アラカルト] グリーンサラダ、パパド、サモサ、ミックスパコダ、シシカバブ、タンドリーチキン(骨なし)、エビカレー、チキンとナスのセミドライカレー、ミックス野菜カレー、キーマエッグカレー、ひよこ豆とほうれん草のカレー<br>[ナンとライス] プレーン、ガーリック、オニオン、ライス、野菜ビリヤニ' },
            price: '¥2000 per person', image: 'Dishesh/special_1.jpg'
        }
    ],

    dessert: [
        {
            en: { name: 'Today\'s Indian Dessert', description: '' },
            jp: { name: '本日のインドデザート', description: '' },
            price: '¥380', image: 'Dishesh/dessert_1.jpg'
        },
        {
            en: { name: 'Ice Cream', description: '' },
            jp: { name: 'アイスクリーム', description: '' },
            price: '¥380', image: 'Dishesh/dessert_2.jpg'
        }
    ],

    'ala-carte': [
        {
            en: { name: 'Samosa (2 pieces)', description: 'Classic Indian snack with spiced vegetables and nuts.' },
            jp: { name: 'サモサ (2個)', description: '様々な野菜とカシューナッツを包んで揚げた、インドの代表的なスナック。' },
            price: '¥550', image: 'Dishesh/carte/menu_02.jpg'
        },
        {
            en: { name: 'Tandoori Chicken', description: 'Bone-in chicken marinated in yogurt and spices, baked in tandoor pot.' },
            jp: { name: 'タンドリーチキン', description: '骨付きチキンをヨーグルトとスパイスに漬け込み、土釜で焼き上げました。' },
            price: '¥580', image: 'Dishesh/carte/menu_09.jpg'
        }
    ],

    curry: [
        {
            en: { name: 'Keema Egg Curry', description: 'Minced meat curry with boiled egg.' },
            jp: { name: 'キーマエッグカレー', description: 'ひき肉とゆで卵のカレー' },
            price: '¥870', image: 'Dishesh/curry/menu_35.jpg'
        },
        {
            en: { name: 'Butter Chicken Curry', description: 'Rich tomato-based curry with cream, butter, and tender chicken.' },
            jp: { name: 'バターチキンカレー', description: '様々なスパイス、生クリーム、バター、チキンを使用したコクのあるカレー' },
            price: '¥980', image: 'Dishesh/curry/menu_39.jpg'
        }
    ]
};

const drinkData = [
    { 
        en: { name: "Kingfisher (India)", description: "India's most popular beer with a crisp taste" },
        jp: { name: "キングフィッシャー (インド)", description: "インドで最もポピュラーなビール。キレのある味わい。" },
        price: "¥580", category: "beer" 
    },
    { 
        en: { name: "Everest Beer (Nepal)", description: "Premium lager brewed with Himalayan spring water" },
        jp: { name: "エベレストビール (ネパール)", description: "ヒマラヤの天然水を使用したプレミアムラガー。" },
        price: "¥580", category: "beer" 
    },
    { 
        en: { name: "Mango Lassi", description: "Sweet mango and yogurt smoothie" },
        jp: { name: "マンゴーラッシー", description: "甘いマンゴーとヨーグルトのスムージー。" },
        price: "¥480", category: "soft" 
    }
];

export { menuData, drinkData };
