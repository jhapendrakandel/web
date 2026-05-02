/* ============================================================
   jp.index.js — Japanese page controller
   Namaste Indian Restaurant
   ============================================================ */

/* ── Menu Data (Japanese) ── */
const menuData = {
  lunch: [
    { name: 'ランチセット', description: 'サラダ · ナンまたはご飯 · お好みのカレー1種類 [キーマエッグカレー、野菜カレー、チキンカレー、バターチキンカレー、ポテトとほうれん草カレー、豆カレー]', price: '¥850', image: 'Dishesh/Launch/lunch101.jpg' },
    { name: 'ナマステランチ', description: 'サラダ · ミニナン · ご飯(小) · チキンティッカ · チキンカレー · 豆とトマトのカレー(バター風味)', price: '¥980', image: 'Dishesh/Launch/lunch102.jpg' },
    { name: 'ハッピーランチセット', description: 'サラダ · タンドリーチキン · ご飯(小) · お好みのカレー1種類 · お好みのナン1種類 · マンゴーラッシー', price: '¥1,500', image: 'Dishesh/Launch/lunch103.jpg' },
    { name: 'レディースランチ', description: 'サラダ · ナンまたはご飯 · お好みのカレー1種類 · デザート', price: '¥850', image: 'Dishesh/Launch/lunch104.jpg' },
    { name: 'ネパールヒマラヤンスープカレーセット', description: 'サラダ · 日本米またはバスマティライス · チキンミックススープカレー(鶏肉と各種野菜をヒマラヤンハーブとスパイスで味付け)', price: '¥990', image: 'Dishesh/Launch/lunch105.jpg' },
    { name: 'ポークカツカレーライス', description: 'ポークカツカレーライス · サラダ', price: '¥900', image: 'Dishesh/Launch/lunch106.jpg' },
    { name: 'マトンほうれん草カレーライス', description: 'マトンほうれん草カレーライス · サラダ', price: '¥900', image: 'Dishesh/Launch/lunch107.jpg' },
    { name: 'タンドリーチキン乗せ野菜カレー', description: '野菜カレータンドリーチキンカレーライス · サラダ', price: '¥1,300', image: 'Dishesh/Launch/lunch108.jpg' },
    { name: 'タンドリーミックス', description: 'タンドリーチキン · シシケバブ · チキンとほうれん草ソーセージ', price: '¥980', image: 'Dishesh/Launch/lunch109.jpg' },
    { name: 'ランチタイムドリンク追加', description: 'オレンジジュース +¥100 · マンゴージュース +¥100 · アイスチャイ +¥100 · ラッシー +¥100 · マンゴーラッシー +¥150 · 生ビール +¥490', price: '+¥100〜', image: 'Dishesh/Launch/drink.jpg' }
  ],

  special: [
    { name: '[120分]食べ放題 (+¥1,500で飲み放題!)', description: '2名様以上 · ¥2,000/人。グリーンサラダ、サモサ、ミックスパコダ、シシケバブ、骨なしタンドリーチキン、エビカレー、キーマエッグカレー、ひよこ豆とほうれん草カレー、ナン各種、ご飯、野菜ビリヤニ。', price: '¥2,000/人', image: 'Dishesh/special_1.jpg', badge: '人気' },
    { name: '2時間飲み放題コース', description: '2名様以上 · ¥3,278/人。サラダ、パパド、サモサ、タンドリーチキン、シシケバブ、オニオン天ぷら、モモ、チキンとナスカレー、ひよこ豆カレー、チーズナン、デザート＋飲み放題。', price: '¥3,278/人', image: 'Dishesh/special_2.jpg' },
    { name: '[150分飲み放題付き] ナマステプレミアムコース', description: '2名様以上 · ¥4,000/人。豊富なアラカルト料理＋お好みのカレー&ナン＋150分飲み放題。', price: '¥4,000/人', image: 'Dishesh/special_3.jpg', badge: 'プレミアム' },
    { name: 'ヒマラヤンスープカレーセット', description: 'チキンと野菜のスープカレー · バスマティライスまたは日本米 · サラダ', price: '¥1,100', image: 'Dishesh/special/set_61.jpg' },
    { name: 'ナンカレーセット', description: 'お好みのカレー1種類 (チキン、キーマエッグ、野菜、豆) · ナンまたはご飯', price: '¥990', image: 'Dishesh/special/set_62.jpg' },
    { name: 'スターセット', description: 'サラダ · チキンティッカ · チキンとほうれん草ソーセージ · 野菜カレー · タンドリーチキンカレー · ナンまたはご飯', price: '¥1,600', image: 'Dishesh/special/set_63.jpg' },
    { name: 'マハラジャセット', description: 'サラダ · タンドリーチキン · お好みのカレー · お好みのナン · ドリンク(生ビールまたはソフトドリンク)', price: '¥1,991', image: 'Dishesh/special/set_64.jpg' },
    { name: 'ナマステセット', description: 'サラダ · サモサ · チキンティッカ · チキンとほうれん草ソーセージ · カレー · ナン · ドリンク', price: '¥2,400', image: 'Dishesh/special/set_65.jpg' },
    { name: 'クラシックセット (2人前)', description: 'サラダ · タンドリーチキン(×2) · デザートまたはアイスクリーム · カレー2種類 · ナン2種類 · ドリンク2種類', price: '¥4,400', image: 'Dishesh/special/set_66.jpg' }
  ],

  dessert: [
    { name: '本日のインドデザート', description: '本日のデザートはスタッフにお尋ねください', price: '¥380', image: 'Dishesh/dessert_1.jpg' },
    { name: 'アイスクリーム', description: 'シェフ厳選のアイスクリーム', price: '¥380', image: 'Dishesh/dessert_2.jpg' }
  ],

  'ala-carte': [
    { name: 'トマトスープ', description: 'スパイスの効いたフレッシュトマトスープ', price: '¥500', image: 'Dishesh/carte/menu_01.jpg' },
    { name: 'サモサ (2個)', description: 'スパイス野菜とカシューナッツを包んで揚げた定番インド料理', price: '¥550', image: 'Dishesh/carte/menu_02.jpg' },
    { name: 'オニオン天ぷら', description: 'カリカリのスパイシーオニオン天ぷら', price: '¥580', image: 'Dishesh/carte/menu_03.jpg' },
    { name: 'アルコアチャール', description: 'ネパール風スパイスポテトサラダ', price: '¥580', image: 'Dishesh/carte/menu_04.jpg' },
    { name: 'パパド', description: 'カリカリのインド豆クラッカー', price: '¥350', image: 'Dishesh/carte/menu_05.jpg' },
    { name: 'モモ (6個)', description: 'ネパール風蒸し餃子', price: '¥680', image: 'Dishesh/carte/menu_06.jpg' },
    { name: 'グリーンサラダ', description: 'フレッシュな季節のグリーンサラダ', price: '¥600', image: 'Dishesh/carte/menu_07.jpg' },
    { name: 'タンドリーチキン', description: 'ヨーグルトとインドスパイスに漬け込んだ骨付きチキンをタンドールで焼き上げた料理', price: '¥580', image: 'Dishesh/carte/menu_09.jpg' },
    { name: 'チキンティッカ (2個)', description: 'タンドールで焼いた柔らかい骨なしチキンティッカ', price: '¥550', image: 'Dishesh/carte/menu_10.jpg' },
    { name: 'キッズセット (8歳以下)', description: 'ご飯 · ナン · お好みのカレー(キーマエッグまたはチキン) · マンゴーラッシー', price: '¥500', image: 'Dishesh/carte/kids_00.jpg' }
  ],

  curry: [
    { name: 'キーマエッグカレー', description: 'ひき肉とゆで卵のカレー', price: '¥870', image: 'Dishesh/curry/menu_35.jpg' },
    { name: 'キーママサラカレー', description: '半ドライのひき肉カレー', price: '¥960', image: 'Dishesh/curry/menu_36.jpg' },
    { name: 'チキンカレー', description: 'じっくり煮込んだチキンと芳醇なスパイスのカレー', price: '¥880', image: 'Dishesh/curry/menu_37.jpg' },
    { name: 'チキンとナスのカレー', description: 'ナス、トマト、玉ねぎ、ピーマン、チキンの半ドライカレー', price: '¥950', image: 'Dishesh/curry/menu_38.jpg' },
    { name: 'バターチキンカレー', description: 'クリーム、バター、スパイスで作る濃厚チキンカレー', price: '¥980', image: 'Dishesh/curry/menu_39.jpg', badge: '人気' },
    { name: 'チキンとほうれん草カレー', description: 'ほうれん草とスパイス、チキンで作る濃厚なカレー', price: '¥980', image: 'Dishesh/curry/menu_40.jpg' },
    { name: 'チキンとカシューナッツカレー', description: 'チキンとカシューナッツのクリーミーなカレー', price: '¥980', image: 'Dishesh/curry/menu_41.jpg' },
    { name: 'カダイチキン', description: 'スパイシーな炒めチキンカレー', price: '¥970', image: 'Dishesh/curry/menu_42.jpg' },
    { name: 'スパイシーチキンカレー', description: 'タンドリーチキンのオニオンバタークリームソースカレー', price: '¥970', image: 'Dishesh/curry/menu_43.jpg' },
    { name: 'マトンカレー', description: '羊肉をインドスパイスでじっくり煮込んだカレー', price: '¥980', image: 'Dishesh/curry/menu_44.jpg' },
    { name: 'マトンとほうれん草カレー', description: 'ほうれん草ベースのマトンカレー', price: '¥990', image: 'Dishesh/curry/menu_45.jpg' },
    { name: 'マトンとカシューナッツカレー', description: 'マトンとカシューナッツのクリーミーなカレー', price: '¥990', image: 'Dishesh/curry/menu_46.jpg' },
    { name: 'ひよこ豆とほうれん草カレー', description: 'ボリュームたっぷりのベジタリアンカレー', price: '¥900', image: 'Dishesh/curry/menu_47.jpg' },
    { name: 'シーフードとナスカレー', description: '新鮮なシーフードとナスのスパイスカレー', price: '¥960', image: 'Dishesh/curry/menu_48.jpg' },
    { name: 'シーフードマサラカレー', description: 'シーフード、トマト、フレッシュクリームを使ったクリーミーなカレー', price: '¥990', image: 'Dishesh/curry/menu_49.jpg' },
    { name: 'エビカレー', description: 'スパイスで味付けしたエビカレー', price: '¥920', image: 'Dishesh/curry/menu_50.jpg' },
    { name: 'ミックス野菜カレー', description: '様々な野菜を使ったマイルドなカレー', price: '¥850', image: 'Dishesh/curry/menu_51.jpg' },
    { name: '豆とトマトのバター風味カレー', description: '豆とトマトのバターフレーバーカレー', price: '¥850', image: 'Dishesh/curry/menu_52.jpg' },
    { name: 'ひよこ豆カレー', description: '40種類以上のスパイスで作るひよこ豆カレー', price: '¥930', image: 'Dishesh/curry/menu_53.jpg' },
    { name: 'オクラカレー', description: '40種類以上のスパイスで作るオクラカレー', price: '¥930', image: 'Dishesh/curry/menu_55.jpg' },
    { name: '焼きナスカレー', description: 'トマトベースの刻んだ焼きナスのカレー', price: '¥930', image: 'Dishesh/curry/menu_56.jpg' },
    { name: 'ポテトとナスカレー', description: 'ポテトとナスの半ドライカレー', price: '¥930', image: 'Dishesh/curry/menu_57.jpg' },
    { name: '手作りチーズとほうれん草カレー', description: '手作りパニールとほうれん草のグリーンカレー', price: '¥960', image: 'Dishesh/curry/menu_58.jpg' },
    { name: '手作りチーズとバターカレー', description: '40種類以上のスパイスで作る濃厚チーズカレー', price: '¥980', image: 'Dishesh/curry/menu_59.jpg' }
  ]
};

/* ── Drinks Data (Japanese) ── */
const drinksData = [
  { name: 'キングフィッシャー (インド)', price: '¥580', category: 'beer', description: 'インドで最も人気のさわやかなビール' },
  { name: 'エベレストビール (ネパール) 小瓶', price: '¥580', category: 'beer', description: 'ヒマラヤ産プレミアムラガービール' },
  { name: 'ゴルカビール (ネパール) 小瓶', price: '¥580', category: 'beer', description: 'スムースで爽やかなネパールビール' },
  { name: 'ネパールアイスビール (ネパール) 小瓶', price: '¥580', category: 'beer', description: 'コールドフィルターでさらにスムース' },
  { name: 'キリン一番搾り生ビール (日本) 中ジョッキ', price: '¥480', category: 'beer', description: '日本産プレミアムビール' },
  { name: 'キリンクラシックラガー (日本) 中瓶', price: '¥500', category: 'beer', description: 'クラシックな日本産ラガービール' },
  { name: 'キリンスーパードライ (日本) 中瓶', price: '¥500', category: 'beer', description: '日本の代表的なドライビール' },
  { name: 'キリンフリー [ノンアルコール] 小瓶', price: '¥450', category: 'beer', description: 'ノンアルコールビール' },
  { name: 'ジョニーウォーカーブラック (水/ロック)', price: '¥450', category: 'whiskey', description: 'プレミアムブレンデッドスコッチウイスキー' },
  { name: 'ウイスキーハイボール', price: '¥450', category: 'whiskey', description: 'クラシックなウイスキーとソーダ' },
  { name: 'マンゴーヤンミルク', price: '¥550', category: 'cocktail', description: 'マンゴーとミルク、スパイスの風味' },
  { name: 'マンゴーヤンヨーグルト', price: '¥550', category: 'cocktail', description: 'マンゴーとクリーミーなヨーグルト' },
  { name: 'マンゴーオレンジ', price: '¥550', category: 'cocktail', description: 'マンゴーとオレンジのフュージョン' },
  { name: 'ジントニック', price: '¥550', category: 'cocktail', description: 'クラシックなジンとトニックウォーター' },
  { name: 'カシスソーダ', price: '¥550', category: 'cocktail', description: 'ブラックカラントリキュールとソーダ' },
  { name: 'カンパリソーダ', price: '¥550', category: 'cocktail', description: 'イタリアのビターアペリティフとソーダ' },
  { name: 'カンパリヨーグルト', price: '¥550', category: 'cocktail', description: 'カンパリとヨーグルトのユニークなブレンド' },
  { name: 'ソーヴィニヨンブラン (インド) 750ml', price: '¥1,900', category: 'wine', description: 'さわやかなインド産白ワイン' },
  { name: 'カベルネシラーズ (インド) 750ml', price: '¥1,300', category: 'wine', description: '力強いインド産赤ワインブレンド' },
  { name: 'コンチャイトロフロステラ (赤) 750ml', price: '¥1,800', category: 'wine', description: 'チリ産赤ワイン' },
  { name: 'サンタグレナカベルネ (赤) 750ml', price: '¥2,200', category: 'wine', description: 'プレミアムカベルネソーヴィニヨン' },
  { name: 'リストルカベルネ (赤) 750ml', price: '¥2,200', category: 'wine', description: 'フランスラングドック産カベルネ' },
  { name: 'サンタヘレナカベルネ (赤) 375ml', price: '¥1,300', category: 'wine', description: 'チリ産カベルネハーフボトル' },
  { name: 'リスナールシャルドネ (白) 750ml', price: '¥2,200', category: 'wine', description: 'フランス産シャルドネ' },
  { name: 'B&Cミュスカデ (白) 750ml', price: '¥2,600', category: 'wine', description: 'プレミアムフランス産白ワイン' },
  { name: 'サンタヘレナシャルドネ (白) 375ml', price: '¥1,300', category: 'wine', description: 'チリ産シャルドネハーフボトル' },
  { name: 'カリフォルニア (赤・白) デカンター 800ml', price: '¥1,300', category: 'wine', description: 'カリフォルニア産ハウスワイン' },
  { name: 'カリフォルニア (赤/白) グラス', price: '¥400', category: 'wine', description: 'カリフォルニアワインのグラス' },
  { name: '淡麗梅酒 (ロック/ソーダ割り) グラス', price: '¥450', category: 'plum', description: '繊細で爽やかな梅酒' },
  { name: '古酒梅酒 (ロック/ソーダ割り) グラス', price: '¥450', category: 'plum', description: '胡椒の風味が効いた梅酒' },
  { name: '利関右衛門梅酒 (ロック/ソーダ割り) グラス', price: '¥450', category: 'plum', description: 'プレミアム熟成梅酒' },
  { name: 'チャイ (アイス/ホット)', price: '¥350', category: 'soft', description: '伝統的なインドのスパイスティー' },
  { name: 'コーヒー (ホット/アイス)', price: '¥350', category: 'soft', description: 'プレミアムブレンドコーヒー' },
  { name: 'コーラ', price: '¥300', category: 'soft', description: '爽やかなコーラ' },
  { name: 'ジンジャーエール', price: '¥300', category: 'soft', description: 'スパークリングジンジャードリンク' },
  { name: 'ウーロン茶', price: '¥300', category: 'soft', description: '伝統的な中国茶' },
  { name: 'オレンジジュース', price: '¥350', category: 'soft', description: 'フレッシュオレンジジュース' },
  { name: 'ラッシー', price: '¥400', category: 'soft', description: '伝統的なインドのヨーグルトドリンク' },
  { name: 'マンゴーラッシー', price: '¥480', category: 'soft', description: '甘いマンゴーヨーグルトスムージー' },
  { name: 'マンゴージュース', price: '¥480', category: 'soft', description: 'ピュアなマンゴーネクター' }
];

const drinkCategoryNames = {
  beer: 'ビール', whiskey: 'ウィスキー', cocktail: 'カクテル',
  wine: 'ワイン', plum: '梅酒', soft: 'ソフトドリンク'
};

let drinksInitialized = false;

function initDrinks () {
  if (drinksInitialized) return;
  drinksInitialized = true;
  renderDrinks('all');

  document.querySelectorAll('#drinks-items .filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('#drinks-items .filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderDrinks(btn.dataset.cat);
    });
  });
}

function renderDrinks (cat) {
  var container = document.getElementById('drinksContainer');
  if (!container) return;
  container.innerHTML = '';
  var list = cat === 'all' ? drinksData : drinksData.filter(function (d) { return d.category === cat; });
  if (!list.length) { container.innerHTML = '<div class="no-results">該当するドリンクがありません。</div>'; return; }
  list.forEach(function (drink, i) {
    var card = document.createElement('div');
    card.className = 'drink-card';
    card.style.animationDelay = (i * 0.05) + 's';
    card.innerHTML =
      '<div class="drink-header">' +
        '<h3 class="drink-name">' + drink.name + '</h3>' +
        '<span class="drink-price">' + drink.price + '</span>' +
      '</div>' +
      '<p class="drink-description">' + drink.description + '</p>' +
      '<span class="drink-category">' + (drinkCategoryNames[drink.category] || drink.category) + '</span>';
    container.appendChild(card);
  });
}

function renderMenuItems (category) {
  var container = document.getElementById('menu-items');
  if (!container) return;
  container.innerHTML = '';
  var items = menuData[category] || [];
  if (!items.length) { container.innerHTML = '<div class="no-results">該当するメニューがありません。</div>'; return; }
  items.forEach(function (item, i) {
    var div = document.createElement('div');
    div.className = 'menu-item';
    div.style.animationDelay = (i * 0.06) + 's';
    div.innerHTML =
      '<div class="menu-item-img-wrap">' +
        (item.badge ? '<span class="menu-item-badge">' + item.badge + '</span>' : '') +
        '<img src="' + item.image + '" alt="' + item.name + '" loading="lazy">' +
      '</div>' +
      '<div class="menu-item-content">' +
        '<h3>' + item.name + '</h3>' +
        '<p>' + item.description + '</p>' +
        '<div class="menu-item-footer">' +
          '<span class="price">' + item.price + '</span>' +
        '</div>' +
      '</div>';
    container.appendChild(div);
  });
}

function showCategory (category) {
  document.getElementById('drinks-items').style.display = 'none';
  document.getElementById('menu-items').style.display = 'grid';
  document.querySelectorAll('.menu-categories button').forEach(function (b) { b.classList.remove('active'); });
  if (window.event && window.event.target) window.event.target.classList.add('active');
  renderMenuItems(category);
}

window.showDrinksCategory = function (btn) {
  document.getElementById('menu-items').style.display = 'none';
  document.getElementById('drinks-items').style.display = 'block';
  document.querySelectorAll('.menu-categories button').forEach(function (b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  initDrinks();
};

window.showCategory = showCategory;

function initHeader () {
  var header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

function initParallax () {
  var heroBg = document.getElementById('heroBg');
  if (!heroBg) return;
  window.addEventListener('scroll', function () {
    heroBg.style.transform = 'translateY(' + (window.scrollY * 0.35) + 'px)';
  }, { passive: true });
}

function initPageTop () {
  var btn = document.getElementById('page-top');
  if (!btn) return;
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initReveal () {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
}

window.addEventListener('load', function () {
  initHeader();
  initParallax();
  initPageTop();
  initReveal();

  document.getElementById('drinks-items').style.display = 'none';
  document.getElementById('menu-items').style.display = 'grid';
  renderMenuItems('lunch');

  var firstBtn = document.querySelector('.menu-categories button');
  if (firstBtn) firstBtn.classList.add('active');
});

/* ── ディッシュカルーセル ── */
(function(){
  var dishes=[
    {img:'Dishesh/curry/menu_39.jpg',  name:'バターチキンカレー',     price:'¥980'},
    {img:'Dishesh/curry/menu_40.jpg',  name:'チキンとほうれん草カレー', price:'¥980'},
    {img:'Dishesh/Launch/lunch103.jpg',name:'ハッピーランチセット',    price:'¥1,500'},
    {img:'Dishesh/carte/menu_09.jpg',  name:'タンドリーチキン',        price:'¥580'},
    {img:'Dishesh/carte/menu_06.jpg',  name:'モモ (6個)',              price:'¥680'},
    {img:'Dishesh/curry/menu_47.jpg',  name:'ひよこ豆とほうれん草カレー',price:'¥900'},
    {img:'Dishesh/curry/menu_49.jpg',  name:'シーフードマサラカレー',  price:'¥990'},
    {img:'Dishesh/special_1.jpg',      name:'120分食べ放題',           price:'¥2,000/人'},
    {img:'Dishesh/dessert_1.jpg',      name:'本日のインドデザート',    price:'¥380'},
    {img:'Dishesh/carte/menu_02.jpg',  name:'サモサ',                  price:'¥550'}
  ];
  var track=document.getElementById('carouselTrack');
  if(!track)return;
  var all=dishes.concat(dishes);
  all.forEach(function(d){
    var c=document.createElement('div');
    c.className='carousel-card';
    c.innerHTML='<img src="'+d.img+'" alt="'+d.name+'" loading="lazy"><div class="carousel-card-label">'+d.name+'<span class="carousel-card-price">'+d.price+'</span></div>';
    track.appendChild(c);
  });
})();

/* ── Nearest Branch Detector ── */
var BRANCHES = [
  { 
    id: 'branch-dambara',
    name: 'Dambara',
    lat: 34.384575,
    lng: 132.477607,
    tel: '082-262-0004',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=34.384575,132.477607'
  },
  { 
    id: 'branch-hatchobori',
    name: 'Hatchobori',
    lat: 34.394902,
    lng: 132.462354,
    tel: '082-222-3240',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=34.394902,132.462354'
  },
  { 
    id: 'branch-otemachi',
    name: 'Otemachi',
    lat: 34.386130,
    lng: 132.453878,
    tel: '082-236-3339',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=34.386130,132.453878'
  }
];

// JP labels — in jp.index.js swap these:
// Dambara→'段原店', Hatchobori→'八丁堀店', Otemachi→'大手町店'

function haversine(lat1,lng1,lat2,lng2){
  var R=6371,dLat=(lat2-lat1)*Math.PI/180,dLng=(lng2-lng1)*Math.PI/180;
  var a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)*Math.sin(dLng/2);
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

window.findNearest = function() {
  var btn = document.getElementById('geoBtn');
  var banner = document.getElementById('nearestBanner');
  var text = document.getElementById('nearestText');
  if (!navigator.geolocation) {
    text.textContent = 'Geolocation not supported on this device.';
    banner.classList.add('show'); return;
  }
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Locating…';
  btn.disabled = true;

  navigator.geolocation.getCurrentPosition(function(pos) {
    var lat = pos.coords.latitude, lng = pos.coords.longitude;
    var nearest = BRANCHES.reduce(function(best, b) {
      var d = haversine(lat, lng, b.lat, b.lng);
      return d < best.dist ? { branch: b, dist: d } : best;
    }, { branch: BRANCHES[0], dist: Infinity });

    var km = nearest.dist.toFixed(1);
    text.innerHTML =
  '📍 最寄り店舗: <strong>' + nearest.branch.name + '</strong>（' + km + ' km）&nbsp;' +
  '<a href="' + nearest.branch.mapsUrl + '" target="_blank" style="' +
    'display:inline-flex;align-items:center;gap:6px;background:var(--charcoal);' +
    'color:var(--gold);padding:5px 12px;border-radius:20px;font-size:.75rem;' +
    'text-decoration:none;margin-left:6px;">' +
    '<i class="fas fa-diamond-turn-right"></i> 経路案内</a>';
    banner.classList.add('show');

    // Highlight the card
    document.querySelectorAll('.branch-card').forEach(function(c){ c.classList.remove('nearest'); });
    // Match by heading text
    document.querySelectorAll('.branch-card h3').forEach(function(h) {
      if (h.textContent.indexOf(nearest.branch.name) !== -1) {
        h.closest('.branch-card').classList.add('nearest');
        h.closest('.branch-card').scrollIntoView({ behavior:'smooth', block:'center' });
      }
    });

    btn.innerHTML = '<i class="fas fa-check"></i> Found!';
  }, function() {
    text.textContent = 'Could not get location — please enable GPS.';
    banner.classList.add('show');
    btn.innerHTML = '<i class="fas fa-location-crosshairs"></i> Find My Nearest Branch';
    btn.disabled = false;
  });
};

/* ── Menu Lightbox ── */
(function(){
  // Allergy data (reuse/extend as needed)
  var ALLERGIES = {
    'Butter Chicken Curry':           ['🥛 Dairy','🌰 Cashew'],
    'Chicken & Spinach Curry':        ['🌶️ Spicy'],
    'Chicken Curry':                  [],
    'Keema Egg Curry':                ['🥚 Egg'],
    'Samosa (2 pcs)':                 ['🌾 Wheat','🌰 Cashew'],
    'Momo (6 pcs)':                   ['🌾 Wheat'],
    'Tandoori Chicken':               ['🥛 Dairy'],
    'Butter Chicken Curry':           ['🥛 Dairy','🌰 Cashew'],
    'Homemade Cheese & Spinach Curry':['🥛 Dairy'],
    'Happy Lunch Set':                ['🥛 Dairy','🌾 Wheat','🥚 Egg'],
  };

  // Build overlay once
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<div class="lightbox-box" id="lbBox">' +
      '<div class="lightbox-img">' +
        '<button class="lightbox-close" id="lbClose" aria-label="Close"><i class="fas fa-times"></i></button>' +
        '<img id="lbImg" src="" alt="">' +
      '</div>' +
      '<div class="lightbox-body">' +
        '<p class="lightbox-section-label" id="lbCategory"></p>' +
        '<h2 id="lbName"></h2>' +
        '<div class="lightbox-price" id="lbPrice"></div>' +
        '<p class="lightbox-desc" id="lbDesc"></p>' +
        '<p class="lightbox-section-label" id="lbAllergyLabel"></p>' +
        '<div class="lightbox-allergy-row" id="lbAllergy"></div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  function openLightbox(item, category) {
    document.getElementById('lbImg').src = item.image;
    document.getElementById('lbImg').alt = item.name;
    document.getElementById('lbName').textContent = item.name;
    document.getElementById('lbPrice').textContent = item.price;
    document.getElementById('lbDesc').textContent = item.description.replace(/<br\s*\/?>/gi, ' · ').replace(/<[^>]+>/g,'');
    document.getElementById('lbCategory').textContent = category.toUpperCase();

    var tags = ALLERGIES[item.name];
    var allergyRow = document.getElementById('lbAllergy');
    var allergyLabel = document.getElementById('lbAllergyLabel');
    allergyRow.innerHTML = '';
    if (tags === undefined) {
      allergyLabel.textContent = 'Allergens';
      allergyRow.innerHTML = '<span class="lightbox-allergy-tag">⚠️ Ask staff</span>';
    } else if (tags.length) {
      allergyLabel.textContent = 'Contains';
      allergyRow.innerHTML = tags.map(function(t){ return '<span class="lightbox-allergy-tag">'+t+'</span>'; }).join('');
    } else {
      allergyLabel.textContent = '';
    }

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  overlay.addEventListener('click', function(e){ if(e.target === overlay) closeLightbox(); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeLightbox(); });

  // Hook into renderMenuItems — add click listener after cards are built
  var _orig = window.renderMenuItems || renderMenuItems;
  function renderMenuItemsWithLightbox(category) {
    _orig(category);
    var items = menuData[category] || [];
    document.querySelectorAll('#menu-items .menu-item').forEach(function(card, i) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function(){ openLightbox(items[i], category); });
    });
  }
  window.renderMenuItems = renderMenuItemsWithLightbox;
  // Also expose for initial call
  if(typeof showCategory==='function'){
    var _origShow = showCategory;
    window.showCategory = function(cat){
      _origShow(cat);
      // re-hook after render
    };
  }
})();

//Pop Up for uber worlt and takeaway */
/* ── Order Popup ── */
(function(){
  // ⬇️ REPLACE # with your real Uber Eats / Wolt store URLs
  var ORDER_LINKS = {
    uber: {
      label: 'Uber Eats',
      icon:  'img/ubber_eats.png',
      note:  'Tap a branch to open in Uber Eats',
      branches: [
        { name:'Dambara',    url:'#', sub:'Delivery available' },
        { name:'Hatchobori', url:'#', sub:'Delivery available' },
        { name:'Otemachi',   url:'#', sub:'Delivery available' }
      ]
    },
    wolt: {
      label: 'Wolt',
      icon:  'img/wolt.png',
      note:  'Tap a branch to open in Wolt',
      branches: [
        { name:'Dambara',    url:'#', sub:'Delivery available' },
        { name:'Hatchobori', url:'#', sub:'Delivery available' },
        { name:'Otemachi',   url:'#', sub:'Delivery available' }
      ]
    },
    takeaway: {
      label: 'In-Store Pickup',
      icon:  'img/take_away.png',
      note:  'Call your preferred branch to place a pickup order',
      branches: [
        { name:'Dambara',    url:'tel:0822620004', sub:'082-262-0004' },
        { name:'Hatchobori', url:'tel:0822223240', sub:'082-222-3240' },
        { name:'Otemachi',   url:'tel:0822363339', sub:'082-236-3339' }
      ]
    }
  };

  var overlay = document.createElement('div');
  overlay.className = 'order-overlay';
  overlay.innerHTML =
    '<div class="order-popup">' +
      '<div class="order-popup-header">' +
        '<h3 id="opTitle">Order Online</h3>' +
        '<button class="order-popup-close" id="opClose"><i class="fas fa-times"></i></button>' +
      '</div>' +
      '<p id="opNote"></p>' +
      '<div class="order-branch-list" id="opList"></div>' +
    '</div>';
  document.body.appendChild(overlay);

  function openOrderPopup(type) {
    var data = ORDER_LINKS[type];
    if (!data) return;
    document.getElementById('opTitle').textContent = data.label;
    document.getElementById('opNote').textContent = data.note;
    var list = document.getElementById('opList');
    list.innerHTML = data.branches.map(function(b){
      var tag = type === 'takeaway' ? 'a href="'+b.url+'"' : 'a href="'+b.url+'" target="_blank"';
      return '<'+tag+' class="order-branch-btn">'+
        '<div><strong>'+b.name+'</strong><br><span>'+b.sub+'</span></div>'+
        '<i class="fas fa-'+(type==='takeaway'?'phone':'arrow-right')+'"></i>'+
        '</a>';
    }).join('');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeOrderPopup(){
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('opClose').addEventListener('click', closeOrderPopup);
  overlay.addEventListener('click', function(e){ if(e.target===overlay) closeOrderPopup(); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeOrderPopup(); });

  window.openOrderPopup = openOrderPopup;
})();

// OPening hours and time labeling and status 
/* ── Open/Closed Badge — JAPANESE (jp.index.js) ── */
(function(){
  var jst  = new Date(Date.now() + 9*3600000); // fixed JST
  var mins = jst.getUTCHours()*60 + jst.getUTCMinutes();

  var L_OPEN=600, L_LO=870, L_CLOSE=900;
  var D_OPEN=1080, D_LO=1290, D_CLOSE=1320;

  var label, bg, pulse;
  if      (mins < L_OPEN)  { label='◌ 閉店 · 10:00オープン';    bg='#dc2626'; pulse=false; }
  else if (mins < L_LO)    { label='● ランチ営業中';              bg='#16a34a'; pulse=true;  }
  else if (mins < L_CLOSE) { label='⚡ ラストオーダー 14:30';    bg='#d97706'; pulse=true;  }
  else if (mins < D_OPEN)  { label='◌ 休憩 15:00 – 17:59';      bg='#6b7280'; pulse=false; }
  else if (mins < D_LO)    { label='● ディナー営業中';            bg='#16a34a'; pulse=true;  }
  else if (mins < D_CLOSE) { label='⚡ ラストオーダー 21:30';    bg='#d97706'; pulse=true;  }
  else                     { label='◌ 閉店 · 10:00オープン';    bg='#dc2626'; pulse=false; }

  var badge = document.createElement('div');
  badge.id = 'hours-badge';
  badge.textContent = label;
  badge.style.cssText =
    'position:fixed;top:68px;right:10px;z-index:998;font-size:.62rem;font-weight:700;'+
    'letter-spacing:.08em;padding:5px 11px;border-radius:20px;color:#fff;'+
    'background:'+bg+';box-shadow:0 2px 10px rgba(0,0,0,.25);'+
    'text-transform:uppercase;white-space:nowrap;';
  if(pulse){
    var s=document.createElement('style');
    s.textContent='@keyframes bP{0%,100%{box-shadow:0 0 0 0 '+bg+'55}70%{box-shadow:0 0 0 7px transparent}}#hours-badge{animation:bP 2s infinite}';
    document.head.appendChild(s);
  }
  document.body.appendChild(badge);
})();

/* ── Review Carousel ── */
(function(){
  var REVIEWS=[
    {branch:'Danbara',name:'Simon K',rating:5,review:'We had a fantastic dinner at Namaste. The staff was extremely friendly and the food was super tasty at very fair prices. The interior of the restaurant is nice and toilet is clean. I can\'t ask for more.'},
    {branch:'Danbara',name:'Jace',rating:5,review:'Even without meat, the flavors are explosive. The Vegetable Biryani was fragrant and full of fresh veggies. Incredible vegetarian options.'},
    {branch:'Danbara',name:'Lio Sakai',rating:5,review:'Their Chicken Biryani is my ultimate comfort food. Fragrant rice and tender chicken. Always hits the spot.'},
    {branch:'Danbara',name:'Wenjie Wang',rating:4.5,review:'Surprised by the big naan. Chose spicy level and it was more delicious than expected.'},
    {branch:'Danbara',name:'T Crunchy',rating:5,review:'Delicious food, great service, and friendly staff. Lassi was perfect too.'},
    {branch:'Danbara',name:'Damien Cordova',rating:5,review:'Hands down the best Indian in Hiroshima. Consistently high quality, friendly, and fast service.'},
    {branch:'Danbara',name:'Dwi Robbiardy Eksa',rating:5,review:'The mutton biryani was very tasty and the staff was very friendly. They can speak multiple languages.'},
    {branch:'Danbara',name:'Hemant Kumar',rating:5,review:'Chicken Tikka Masala and Garlic Naan combination is awesome. Great service.'},
    {branch:'Danbara',name:'Cole Sullivan',rating:5,review:'I have eaten at most Indian and Nepali restaurants in Hiroshima, and this is the best one.'},
    {branch:'Danbara',name:'Amrita Iyen',rating:4.5,review:'The vegetarian biryani is great with a good portion size. Great option for vegetarians.'},
    {branch:'Danbara',name:'Joseph Scott',rating:5,review:'Best Indian curry I\'ve had in all of Japan.'},
    {branch:'Hatchobori',name:'Gyanjit Mahapatra',rating:5,review:'Hands down the best Indian food I\'ve had in Japan. Great service and amazing food.'},
    {branch:'Hatchobori',name:'Sagi Yulevich',rating:5,review:'Amazing food, very tasty and vegan friendly. Service is polite and authentic.'},
    {branch:'Hatchobori',name:'Cecilia Abrera',rating:5,review:'Butter curry was fantastic. Garlic naan was great. Excellent customer service and well priced.'},
    {branch:'Hatchobori',name:'Christal Thomas',rating:5,review:'The food was amazing. Best Indian food during our Japan trip. Very kind owner.'},
    {branch:'Hatchobori',name:'Vasuki Malugodu',rating:5,review:'Vegetarian food options are very good and tasty. Loved the place.'},
    {branch:'Hatchobori',name:'Mikyla Acosta',rating:5,review:'Great Indian food with many vegetarian options. Kind service and clean space.'},
    {branch:'Hatchobori',name:'Lior Tansky',rating:5,review:'Absolutely amazing. Rich flavors, fast service, and very friendly staff.'},
    {branch:'Hatchobori',name:'Ed Pitts',rating:5,review:'One of the most incredible meals I\'ve had. Butter chicken and garlic naan were perfect.'},
    {branch:'Hatchobori',name:'Shawn',rating:5,review:'Fantastic experience. Chicken tandoori and naan were perfectly cooked. Highly recommend.'},
    {branch:'Hatchobori',name:'Christi Jordan',rating:5,review:'Amazing service for large groups. Delicious food and highly recommend.'},
    {branch:'Hatchobori',name:'Da Fran',rating:5,review:'Delicious meal with great value. Cheese naan was the highlight.'},
    {branch:'Hatchobori',name:'Phillipa Angel',rating:5,review:'Absolutely delightful dinner. Naan and curries were amazing. Best service experience.'},
    {branch:'Otemachi',name:'Ian Robertshaw',rating:5,review:'Fantastic meal with high quality flavors. Service was attentive and excellent.'},
    {branch:'Otemachi',name:'Tereza Šolcová',rating:5,review:'Kind service and comforting food after a long day. Mango lassi was excellent.'},
    {branch:'Otemachi',name:'Bishal Khadka',rating:5,review:'Great place for the best Indian and Nepali food. Highly recommended.'},
    {branch:'Otemachi',name:'Gautam',rating:5,review:'Amazing food with real Indian taste. Hidden gem in Hiroshima.'},
    {branch:'Otemachi',name:'Conor Grealy',rating:5,review:'Hidden gem with huge naan and beautifully spiced curry. Great service.'},
    {branch:'Otemachi',name:'Melita Geaghan',rating:5,review:'Great tasting Indian food. Highly recommend this place.'},
    {branch:'Otemachi',name:'Sophie Stimson',rating:5,review:'Delicious meals, great pricing, and very kind staff.'},
    {branch:'Otemachi',name:'Raffaella Ravinetto',rating:5,review:'Excellent food, great value, and very friendly service.'},
    {branch:'Otemachi',name:'Vijaya Prakash Kandel',rating:5,review:'Authentic Indian flavors with excellent service. One of the best in Hiroshima.'},
    {branch:'Otemachi',name:'Emil Jønsrud',rating:5,review:'Exceptional service and wonderful food. Very welcoming atmosphere.'},
    {branch:'Otemachi',name:'Laia Gomez Meldahl',rating:5,review:'Lovely restaurant with kind staff and flavorful food for everyone.'},
    {branch:'Otemachi',name:'Dylan Cline',rating:4.5,review:'Great food, especially the chicken curry.'},
    {branch:'Otemachi',name:'Michal Prehoda',rating:5,review:'Amazing food and mango lassi with very friendly staff.'},
    {branch:'Otemachi',name:'Eugenie Kortenhorst',rating:5,review:'Fantastic Indian curry that tastes like India.'},
    {branch:'Otemachi',name:'George Christian De Leon',rating:5,review:'Delicious food and definitely worth the money.'},
    {branch:'Otemachi',name:'Babu Gautam',rating:5,review:'Best Indian food in Hiroshima.'},
    {branch:'Otemachi',name:'Chaitee Biswas',rating:5,review:'Best biryani in Japan.'},
    {branch:'Otemachi',name:'Kanaad Bhardwaj',rating:5,review:'Biryani is a must-try.'}
  ];

  var TRUNCATE = 100; // chars before "See more"
  var branchColors = {Danbara:'#8B1A1A', Hatchobori:'#1A4A8B', Otemachi:'#1A6B3A'};
  var current = 0;
  var autoTimer;

  var track = document.getElementById('reviewsCarousel');
  var dotsWrap = document.getElementById('reviewsDots');
  if(!track) return;

  // Shuffle slightly — interleave branches
  var shuffled = [];
  ['Danbara','Hatchobori','Otemachi'].forEach(function(b,bi){
    REVIEWS.filter(function(r){ return r.branch===b; }).forEach(function(r,i){
      shuffled[bi + i*3] = r;
    });
  });
  shuffled = shuffled.filter(Boolean);

  // Build cards
  shuffled.forEach(function(r, i){
    var stars = '';
    var full = Math.floor(r.rating);
    var half = r.rating % 1 >= 0.5;
    for(var s=0;s<full;s++) stars+='★';
    if(half) stars+='½';

    var short = r.review.length > TRUNCATE
      ? r.review.slice(0, TRUNCATE).trimEnd() + '…'
      : r.review;
    var hasMore = r.review.length > TRUNCATE;
    var initials = r.name.split(' ').map(function(w){ return w[0]; }).join('').slice(0,2).toUpperCase();
    var bg = branchColors[r.branch] || '#8B1A1A';

    var card = document.createElement('div');
    card.className = 'review-card';
    card.dataset.index = i;
    card.innerHTML =
      '<span class="review-branch-tag" style="background:'+bg+'">'+r.branch+'</span>'+
      '<div class="review-stars">'+stars+'</div>'+
      '<div class="review-quote">'+
        '<span class="review-short">'+short+'</span>'+
        (hasMore
          ? '<span class="review-full">'+r.review+'</span>'+
            '<button class="review-seemore" onclick="rToggle(this,event)">See more ▾</button>'
          : '')+
      '</div>'+
      '<div class="review-author">'+
        '<div class="review-avatar" style="background:'+bg+'">'+initials+'</div>'+
        '<div>'+
          '<div class="review-meta-name">'+r.name+'</div>'+
          '<div class="review-meta-src"><i class="fab fa-google" style="color:#4285F4;font-size:.65rem;margin-right:3px;"></i>Google Review</div>'+
        '</div>'+
      '</div>';
    track.appendChild(card);

    // Dot every 5
    if(i % 5 === 0){
      var dot = document.createElement('button');
      dot.className = 'rdot' + (i===0?' active':'');
      dot.setAttribute('aria-label','Go to slide '+(Math.floor(i/5)+1));
      dot.onclick = function(){ goTo(i); };
      dotsWrap.appendChild(dot);
    }
  });

  function updateCards(){
    var cards = track.querySelectorAll('.review-card');
    cards.forEach(function(c, i){
      c.classList.remove('active','active-adj');
      var diff = Math.abs(i - current);
      if(i===current) c.classList.add('active');
      else if(diff===1) c.classList.add('active-adj');
    });
    // Scroll track
    var card = cards[current];
    if(!card) return;
    var sceneW = track.parentElement.offsetWidth;
    var cardW  = card.offsetWidth + 20;
    var offset = card.offsetLeft - (sceneW/2) + (cardW/2);
    track.style.transform = 'translateX(-'+Math.max(0,offset)+'px)';
    // Dots
    var dots = dotsWrap.querySelectorAll('.rdot');
    dots.forEach(function(d,di){ d.classList.toggle('active', di===Math.floor(current/5)); });
  }

  function goTo(i){
    current = Math.max(0, Math.min(i, shuffled.length-1));
    updateCards();
    resetAuto();
  }

  window.rMove = function(dir){
    goTo((current + dir + shuffled.length) % shuffled.length);
  };

  window.rToggle = function(btn, e){
    e.stopPropagation();
    var card  = btn.closest('.review-card');
    var sh    = card.querySelector('.review-short');
    var fl    = card.querySelector('.review-full');
    var open  = fl.style.display === 'block';
    sh.style.display = open ? 'block' : 'none';
    fl.style.display = open ? 'none'  : 'block';
    btn.textContent  = open ? 'See more ▾' : 'See less ▴';
  };

  function resetAuto(){
    clearInterval(autoTimer);
    autoTimer = setInterval(function(){ rMove(1); }, 1200); // change value to get high or slow spped
  }

  // Touch swipe
  var tx = 0;
  track.addEventListener('touchstart', function(e){ tx = e.touches[0].clientX; }, {passive:true});
  track.addEventListener('touchend', function(e){
    var dx = e.changedTouches[0].clientX - tx;
    if(Math.abs(dx)>40) rMove(dx<0?1:-1);
  }, {passive:true});

  // Pause on hover
  track.addEventListener('mouseenter', function(){ clearInterval(autoTimer); });
  track.addEventListener('mouseleave', resetAuto);

  // Google popup
  window.openGmap = function(){
    document.getElementById('gmapOverlay').classList.add('open');
    document.body.style.overflow='hidden';
  };
  window.closeGmap = function(){
    document.getElementById('gmapOverlay').classList.remove('open');
    document.body.style.overflow='';
  };
  document.getElementById('gmapOverlay').addEventListener('click', function(e){
    if(e.target===this) closeGmap();
  });

  updateCards();
  resetAuto();
})();