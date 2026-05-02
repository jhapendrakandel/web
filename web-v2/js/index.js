/* ============================================================
   index.js — English page controller
   Namaste Indian Restaurant
   ============================================================ */

/* ── Menu Data ── */
const menuData = {
  lunch: [
    { name: 'Lunch Set', description: 'Salad · Naan or rice · One curry of your choice [Keema egg curry, Vegetable curry, Chicken curry, Butter chicken curry, Potato & spinach curry, Bean curry]', price: '¥850', image: 'Dishesh/Launch/lunch101.jpg' },
    { name: 'Namaste Lunch', description: 'Salad · Mini naan · Rice (small) · Chicken tikka · Chicken curry · Bean and tomato curry (butter flavour)', price: '¥980', image: 'Dishesh/Launch/lunch102.jpg' },
    { name: 'Happy Lunch Set', description: 'Salad · Tandoori chicken · Rice (small) · Curry of your choice · Naan of your choice · Mango lassi', price: '¥1,500', image: 'Dishesh/Launch/lunch103.jpg' },
    { name: 'Ladies Lunch', description: 'Salad · Naan or rice · Curry of your choice · Dessert', price: '¥850', image: 'Dishesh/Launch/lunch104.jpg' },
    { name: 'Nepal Himalayan Soup Curry Set', description: 'Salad · Japanese or basmati rice · Chicken mixed soup curry (chicken & vegetables seasoned with Himalayan herbs & spices)', price: '¥990', image: 'Dishesh/Launch/lunch105.jpg' },
    { name: 'Pork Cutlet Curry Rice', description: 'Pork katsu curry rice · Salad', price: '¥900', image: 'Dishesh/Launch/lunch106.jpg' },
    { name: 'Mutton & Spinach Curry Rice', description: 'Mutton spinach curry rice · Salad', price: '¥900', image: 'Dishesh/Launch/lunch107.jpg' },
    { name: 'Veg Curry with Tandoori Chicken', description: 'Vegetable curry topped with tandoori chicken · Rice · Salad', price: '¥1,300', image: 'Dishesh/Launch/lunch108.jpg' },
    { name: 'Tandoori Mix', description: 'Tandoori chicken · Shish kebab · Chicken & spinach sausage', price: '¥980', image: 'Dishesh/Launch/lunch109.jpg' },
    { name: 'Lunchtime Drinks Add-on', description: 'Orange juice +¥100 · Mango juice +¥100 · Iced chai +¥100 · Lassi +¥100 · Mango lassi +¥150 · Draft beer +¥490 · Indian beer +¥600', price: 'From +¥100', image: 'Dishesh/Launch/drink.jpg' }
  ],

  special: [
    { name: '120-min Order Buffet (+¥1,500 for all-you-can-drink!)', description: 'For 2+ guests | ¥2,000/person. Includes: Green salad, Samosa, Mixed pakoda, Shish kebab, Boneless tandoori chicken, Prawn curry, Keema egg curry, Chickpea & spinach curry, Plain/Garlic/Onion naan, Rice, Vegetable biryani.', price: '¥2,000/person', image: 'Dishesh/special_1.jpg', badge: 'Popular' },
    { name: '2-Hour All-You-Can-Drink Course', description: 'For 2+ guests | ¥3,278/person. Salad, Papad, Samosa, Tandoori chicken, Shish kebab, Onion tempura, Momo, Chicken & eggplant curry, Chickpea curry, Cheese naan, Dessert + unlimited drinks.', price: '¥3,278/person', image: 'Dishesh/special_2.jpg' },
    { name: '150-min Premium Course — All-You-Can-Drink Included', description: 'For 2+ guests | ¥4,000/person. Full a-la-carte spread + choice of curry & naan from menu + unlimited drinks for 150 minutes.', price: '¥4,000/person', image: 'Dishesh/special_3.jpg', badge: 'Premium' },
    { name: 'Himalayan Soup Curry Set', description: 'Chicken & vegetable soup curry · Basmati or Japanese rice · Salad', price: '¥1,100', image: 'Dishesh/special/set_61.jpg' },
    { name: 'Naan Curry Set', description: 'Choose one curry (Chicken, Keema egg, Vegetable or Bean) · Naan or rice', price: '¥990', image: 'Dishesh/special/set_62.jpg' },
    { name: 'Star Set', description: 'Salad · Chicken tikka · Chicken & spinach sausage · Vegetable curry · Tandoori chicken curry · Naan or rice', price: '¥1,600', image: 'Dishesh/special/set_63.jpg' },
    { name: 'Maharaja Set', description: 'Salad · Tandoori chicken · Your choice of curry · Your choice of naan · Drink (draft beer or soft drink)', price: '¥1,991', image: 'Dishesh/special/set_64.jpg' },
    { name: 'Namaste Set', description: 'Salad · Samosa · Chicken tikka · Chicken & spinach sausage · Curry · Naan · Drink', price: '¥2,400', image: 'Dishesh/special/set_65.jpg' },
    { name: 'Classic Set (for 2)', description: 'Salad · Tandoori chicken (×2) · Dessert or ice cream · Two curries · Two naans · Two drinks', price: '¥4,400', image: 'Dishesh/special/set_66.jpg' }
  ],

  dessert: [
    { name: "Today's Indian Dessert", description: 'Ask our staff for today\'s selection', price: '¥380', image: 'Dishesh/dessert_1.jpg' },
    { name: 'Ice Cream', description: 'Chef\'s selection of ice cream', price: '¥380', image: 'Dishesh/dessert_2.jpg' }
  ],

  'ala-carte': [
    { name: 'Tomato Soup', description: 'Freshly made spiced tomato soup', price: '¥500', image: 'Dishesh/carte/menu_01.jpg' },
    { name: 'Samosa (2 pcs)', description: 'Deep-fried pastry with spiced vegetables and cashew nuts', price: '¥550', image: 'Dishesh/carte/menu_02.jpg' },
    { name: 'Onion Tempura', description: 'Crispy battered onion rings with spice', price: '¥580', image: 'Dishesh/carte/menu_03.jpg' },
    { name: 'Aloo Ko Achar', description: 'Nepalese spiced potato salad', price: '¥580', image: 'Dishesh/carte/menu_04.jpg' },
    { name: 'Papad', description: 'Crispy Indian bean crackers', price: '¥350', image: 'Dishesh/carte/menu_05.jpg' },
    { name: 'Momo (6 pcs)', description: 'Nepalese-style steamed dumplings', price: '¥680', image: 'Dishesh/carte/menu_06.jpg' },
    { name: 'Green Salad', description: 'Fresh seasonal green salad', price: '¥600', image: 'Dishesh/carte/menu_07.jpg' },
    { name: 'Tandoori Chicken', description: 'Bone-in chicken marinated in yogurt & spices, baked in a tandoor', price: '¥580', image: 'Dishesh/carte/menu_09.jpg' },
    { name: 'Chicken Tikka (2 pcs)', description: 'Tender boneless chicken tikka from the tandoor', price: '¥550', image: 'Dishesh/carte/menu_10.jpg' },
    { name: "Kids Set (up to age 8)", description: 'Rice · Naan · Choice of curry (Keema egg or Chicken) · Mango lassi', price: '¥500', image: 'Dishesh/carte/kids_00.jpg' }
  ],

  curry: [
    { name: 'Keema Egg Curry', description: 'Minced meat and boiled egg curry', price: '¥870', image: 'Dishesh/curry/menu_35.jpg' },
    { name: 'Keema Masala Curry', description: 'Semi-dry minced meat curry', price: '¥960', image: 'Dishesh/curry/menu_36.jpg' },
    { name: 'Chicken Curry', description: 'Slow-cooked chicken in aromatic spices', price: '¥880', image: 'Dishesh/curry/menu_37.jpg' },
    { name: 'Chicken & Eggplant Curry', description: 'Semi-dry curry with eggplant, tomato, onion, bell pepper & chicken', price: '¥950', image: 'Dishesh/curry/menu_38.jpg' },
    { name: 'Butter Chicken Curry', description: 'Chicken in a rich cream, butter & spice sauce', price: '¥980', image: 'Dishesh/curry/menu_39.jpg', badge: 'Favourite' },
    { name: 'Chicken & Spinach Curry', description: 'Thick curry with spinach, spices and chicken', price: '¥980', image: 'Dishesh/curry/menu_40.jpg' },
    { name: 'Chicken & Cashew Nut Curry', description: 'Chicken in a rich cashew-based sauce', price: '¥980', image: 'Dishesh/curry/menu_41.jpg' },
    { name: 'Kadai Chicken', description: 'Spicy stir-fried chicken in a wok', price: '¥970', image: 'Dishesh/curry/menu_42.jpg' },
    { name: 'Spicy Chicken Curry', description: 'Tandoori chicken in onion butter cream sauce', price: '¥970', image: 'Dishesh/curry/menu_43.jpg' },
    { name: 'Mutton Curry', description: 'Slow-cooked lamb in Indian spices', price: '¥980', image: 'Dishesh/curry/menu_44.jpg' },
    { name: 'Mutton & Spinach Curry', description: 'Spinach-based mutton curry', price: '¥990', image: 'Dishesh/curry/menu_45.jpg' },
    { name: 'Mutton & Cashew Nut Curry', description: 'Mutton in a creamy cashew sauce', price: '¥990', image: 'Dishesh/curry/menu_46.jpg' },
    { name: 'Chickpea & Spinach Curry', description: 'Hearty vegetarian chickpea and spinach curry', price: '¥900', image: 'Dishesh/curry/menu_47.jpg' },
    { name: 'Seafood & Eggplant Curry', description: 'Fresh seafood and eggplant in a spiced sauce', price: '¥960', image: 'Dishesh/curry/menu_48.jpg' },
    { name: 'Seafood Masala Curry', description: 'Creamy seafood curry with tomatoes and fresh cream', price: '¥990', image: 'Dishesh/curry/menu_49.jpg' },
    { name: 'Shrimp Curry', description: 'Spiced shrimp curry', price: '¥920', image: 'Dishesh/curry/menu_50.jpg' },
    { name: 'Mixed Vegetable Curry', description: 'Mild curry with a medley of seasonal vegetables', price: '¥850', image: 'Dishesh/curry/menu_51.jpg' },
    { name: 'Beans & Tomato Butter Curry', description: 'Bean and tomato curry with a butter finish', price: '¥850', image: 'Dishesh/curry/menu_52.jpg' },
    { name: 'Chickpea Curry', description: 'Chickpea curry made with 40+ spices', price: '¥930', image: 'Dishesh/curry/menu_53.jpg' },
    { name: 'Okra Curry', description: 'Okra curry made with 40+ spices', price: '¥930', image: 'Dishesh/curry/menu_55.jpg' },
    { name: 'Grilled Eggplant Curry', description: 'Tomato-based curry with chargrilled eggplant', price: '¥930', image: 'Dishesh/curry/menu_56.jpg' },
    { name: 'Potato & Eggplant Curry', description: 'Semi-dry potato and eggplant curry', price: '¥930', image: 'Dishesh/curry/menu_57.jpg' },
    { name: 'Homemade Cheese & Spinach Curry', description: 'Green curry with handmade paneer and spinach', price: '¥960', image: 'Dishesh/curry/menu_58.jpg' },
    { name: 'Homemade Cheese & Butter Curry', description: 'Rich paneer curry with 40+ spices', price: '¥980', image: 'Dishesh/curry/menu_59.jpg' }
  ]
};

/* ── Drinks Data ── */
const drinksData = [
  { name: 'Kingfisher (India)', price: '¥580', category: 'beer', description: "India's most popular beer — crisp and refreshing" },
  { name: 'Everest Beer (Nepal) small bottle', price: '¥580', category: 'beer', description: 'Premium lager from the Himalayas' },
  { name: 'Gorkha Beer (Nepal) small bottle', price: '¥580', category: 'beer', description: 'Smooth and refreshing Nepalese brew' },
  { name: 'Nepalese Ice Beer (Nepal) small bottle', price: '¥580', category: 'beer', description: 'Cold-filtered for extra smoothness' },
  { name: 'Kirin Ichiban Draft (Japan) Medium mug', price: '¥480', category: 'beer', description: 'First-press Japanese premium beer' },
  { name: 'Kirin Classic Lager (Japan) Medium bottle', price: '¥500', category: 'beer', description: 'Classic Japanese lager' },
  { name: 'Kirin Super Dry (Japan) Medium bottle', price: '¥500', category: 'beer', description: "Japan's iconic dry beer" },
  { name: 'Kirin Free [Non-alcoholic] small bottle', price: '¥450', category: 'beer', description: 'Non-alcoholic alternative' },
  { name: 'Johnnie Walker Black (Water/Rocks)', price: '¥450', category: 'whiskey', description: 'Premium blended Scotch whisky' },
  { name: 'Whiskey Highball', price: '¥450', category: 'whiskey', description: 'Classic whisky and soda' },
  { name: 'Mangoyan Milk', price: '¥550', category: 'cocktail', description: 'Mango, milk and a hint of spice' },
  { name: 'Mango Yogurt Cocktail', price: '¥550', category: 'cocktail', description: 'Mango blended with creamy yogurt' },
  { name: 'Mango Orange', price: '¥550', category: 'cocktail', description: 'Mango and orange fusion' },
  { name: 'Gin & Tonic', price: '¥550', category: 'cocktail', description: 'Classic gin with tonic water' },
  { name: 'Cassis Soda', price: '¥550', category: 'cocktail', description: 'Blackcurrant liqueur with soda' },
  { name: 'Campari Soda', price: '¥550', category: 'cocktail', description: 'Bitter Italian aperitif with soda' },
  { name: 'Campari Yogurt', price: '¥550', category: 'cocktail', description: 'Unique blend of Campari and yogurt' },
  { name: 'Sauvignon Blanc (India) 750ml', price: '¥1,900', category: 'wine', description: 'Crisp Indian white wine' },
  { name: 'Cabernet Shiraz (India) 750ml', price: '¥1,300', category: 'wine', description: 'Robust Indian red blend' },
  { name: 'Concha y Toro Frontera (Red) 750ml', price: '¥1,800', category: 'wine', description: 'Chilean red wine' },
  { name: 'Santa Guerena Cabernet (Red) 750ml', price: '¥2,200', category: 'wine', description: 'Premium Cabernet Sauvignon' },
  { name: 'Listel Cabernet (Red) 750ml', price: '¥2,200', category: 'wine', description: 'French Cabernet from Languedoc' },
  { name: 'Santa Helena Cabernet (Red) 375ml', price: '¥1,300', category: 'wine', description: 'Chilean Cabernet half-bottle' },
  { name: 'Lisnar Chardonnay (White) 750ml', price: '¥2,200', category: 'wine', description: 'French Chardonnay' },
  { name: 'B&C Muscadet (White) 750ml', price: '¥2,600', category: 'wine', description: 'Premium French white' },
  { name: 'Santa Helena Chardonnay (White) 375ml', price: '¥1,300', category: 'wine', description: 'Chilean Chardonnay half-bottle' },
  { name: 'California (Red/White) Decanter 800ml', price: '¥1,300', category: 'wine', description: 'California house wine' },
  { name: 'California (Red/White) Glass', price: '¥400', category: 'wine', description: 'Glass of California wine' },
  { name: 'Light Plum Wine (Rocks/Soda) glass', price: '¥450', category: 'plum', description: 'Delicate and refreshing plum wine' },
  { name: 'Aged Plum Wine (Rocks/Soda) glass', price: '¥450', category: 'plum', description: 'Plum wine with a peppery hint' },
  { name: 'Risekiemon Plum Wine (Rocks/Soda) glass', price: '¥450', category: 'plum', description: 'Premium aged plum wine' },
  { name: 'Chai (Iced/Hot)', price: '¥350', category: 'soft', description: 'Traditional Indian spiced tea' },
  { name: 'Coffee (Hot/Iced)', price: '¥350', category: 'soft', description: 'Premium blend coffee' },
  { name: 'Cola', price: '¥300', category: 'soft', description: 'Refreshing cola' },
  { name: 'Ginger Ale', price: '¥300', category: 'soft', description: 'Sparkling ginger beverage' },
  { name: 'Oolong Tea', price: '¥300', category: 'soft', description: 'Traditional Chinese tea' },
  { name: 'Orange Juice', price: '¥350', category: 'soft', description: 'Fresh orange juice' },
  { name: 'Lassi', price: '¥400', category: 'soft', description: 'Traditional Indian yogurt drink' },
  { name: 'Mango Lassi', price: '¥480', category: 'soft', description: 'Sweet mango yogurt smoothie' },
  { name: 'Mango Juice', price: '¥480', category: 'soft', description: 'Pure mango nectar' }
];

const drinkCategoryNames = {
  beer: 'Beer', whiskey: 'Whiskey', cocktail: 'Cocktail',
  wine: 'Wine', plum: 'Plum Wine', soft: 'Soft Drink'
};

/* ── Drinks: State ── */
let drinksInitialized = false;
let currentDrinkCat   = 'all';

function initDrinks () {
  if (drinksInitialized) return;
  drinksInitialized = true;
  renderDrinks('all');

  document.querySelectorAll('#drinks-items .filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('#drinks-items .filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentDrinkCat = btn.dataset.cat;
      renderDrinks(currentDrinkCat);
    });
  });
}

function renderDrinks (cat) {
  var container = document.getElementById('drinksContainer');
  if (!container) return;
  container.innerHTML = '';
  var list = cat === 'all' ? drinksData : drinksData.filter(function (d) { return d.category === cat; });
  if (!list.length) {
    container.innerHTML = '<div class="no-results">No drinks found.</div>';
    return;
  }
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

/* ── Menu: render ── */
function renderMenuItems (category) {
  var container = document.getElementById('menu-items');
  if (!container) return;
  container.innerHTML = '';
  var items = menuData[category] || [];
  if (!items.length) {
    container.innerHTML = '<div class="no-results">No items found.</div>';
    return;
  }
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

/* ── Category switching ── */
function showCategory (category) {
  document.getElementById('drinks-items').style.display = 'none';
  var grid = document.getElementById('menu-items');
  grid.style.display = 'grid';

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

/* ── Header scroll effect ── */
function initHeader () {
  var header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ── Parallax hero ── */
function initParallax () {
  var heroBg = document.getElementById('heroBg');
  if (!heroBg) return;
  window.addEventListener('scroll', function () {
    heroBg.style.transform = 'translateY(' + (window.scrollY * 0.35) + 'px)';
  }, { passive: true });
}

/* ── Back to Top ── */
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

/* ── Scroll reveal ── */
function initReveal () {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
}

/* ── Init on load ── */
window.addEventListener('load', function () {
  initHeader();
  initParallax();
  initPageTop();
  initReveal();

  /* Default: show lunch */
  document.getElementById('drinks-items').style.display = 'none';
  document.getElementById('menu-items').style.display = 'grid';
  renderMenuItems('lunch');

  var firstBtn = document.querySelector('.menu-categories button');
  if (firstBtn) firstBtn.classList.add('active');
});

/* ── Dish Carousel ── */
(function(){
  var dishes=[
    {img:'Dishesh/curry/menu_39.jpg',  name:'Butter Chicken Curry',     price:'¥980'},
    {img:'Dishesh/curry/menu_40.jpg',  name:'Chicken & Spinach Curry',  price:'¥980'},
    {img:'Dishesh/Launch/lunch103.jpg',name:'Happy Lunch Set',           price:'¥1,500'},
    {img:'Dishesh/carte/menu_09.jpg',  name:'Tandoori Chicken',         price:'¥580'},
    {img:'Dishesh/carte/menu_06.jpg',  name:'Momo (6 pcs)',             price:'¥680'},
    {img:'Dishesh/curry/menu_47.jpg',  name:'Chickpea & Spinach Curry', price:'¥900'},
    {img:'Dishesh/curry/menu_49.jpg',  name:'Seafood Masala Curry',     price:'¥990'},
    {img:'Dishesh/special_1.jpg',      name:'120-min Buffet',           price:'¥2,000/person'},
    {img:'Dishesh/dessert_1.jpg',      name:"Today's Indian Dessert",   price:'¥380'},
    {img:'Dishesh/carte/menu_02.jpg',  name:'Samosa',                   price:'¥550'}
  ];
  var track=document.getElementById('carouselTrack');
  if(!track)return;
  // Duplicate for seamless loop
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
  '📍 Nearest: <strong>' + nearest.branch.name + '</strong> (' + km + ' km) &nbsp;' +
  '<a href="' + nearest.branch.mapsUrl + '" target="_blank" style="' +
    'display:inline-flex;align-items:center;gap:6px;background:var(--charcoal);' +
    'color:var(--gold);padding:5px 12px;border-radius:20px;font-size:.75rem;' +
    'text-decoration:none;margin-left:6px;">' +
    '<i class="fas fa-diamond-turn-right"></i> Get Directions</a>';
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
/* ── Open/Closed Badge — ENGLISH (index.js) ── */
(function(){
  var jst  = new Date(Date.now() + 9*3600000);
  var mins = jst.getUTCHours()*60 + jst.getUTCMinutes();

  var L_OPEN=600, L_LO=870, L_CLOSE=900;   // 10:00 14:30 15:00
  var D_OPEN=1080, D_LO=1290, D_CLOSE=1320; // 18:00 21:30 22:00

  var label, bg, pulse;
  if      (mins < L_OPEN)               { label='◌ Closed · Opens 10:00';  bg='#dc2626'; pulse=false; }
  else if (mins < L_LO)                 { label='● Lunch Open';             bg='#16a34a'; pulse=true;  }
  else if (mins < L_CLOSE)              { label='⚡ Last Order 14:30';      bg='#d97706'; pulse=true;  }
  else if (mins < D_OPEN)               { label='◌ Break 15:00 – 17:59';   bg='#6b7280'; pulse=false; }
  else if (mins < D_LO)                 { label='● Dinner Open';            bg='#16a34a'; pulse=true;  }
  else if (mins < D_CLOSE)              { label='⚡ Last Order 21:30';      bg='#d97706'; pulse=true;  }
  else                                  { label='◌ Closed · Opens 10:00';  bg='#dc2626'; pulse=false; }

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