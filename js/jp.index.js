// Menu data
const menuData = {
    lunch: [
        { name: 'ランチセット', description: '① サラダ<br>② ナンまたはライス<br>③ お好みのカレーを1種類選択<br>[キーマエッグカレー、野菜カレー、チキンカレー、バターチキンカレー、ポテトとほうれん草のカレー、豆カレー]', price: '¥850', image: '/Dishesh/Launch/lunch101.jpg' },
        { name: 'ナマステランチ', description: 'サラダ<br>ミニナン<br>ライス (小)<br>チキンティッカ<br>チキンカレー<br>豆とトマトのカレー (バター風味)', price: '¥980', image: '/Dishesh/Launch/lunch102.jpg' },
        { name: 'ハッピーランチセット', description: '① サラダ<br>② タンドリーチキン<br>③ ライス (小)<br>④ メインメニューからお好みのカレー1種類<br>⑤ メインメニューからお好みのナン1種類<br>⑥ マンゴーラッシー', price: '¥1500', image: '/Dishesh/Launch/lunch103.jpg' },
        { name: 'レディースランチ', description: '① サラダ<br>② ナンまたはライス<br>③ カレーリストからお好みのカレー1種類<br>④ デザート', price: '¥850', image: '/Dishesh/Launch/lunch104.jpg' },
        { name: 'ネパール・ヒマラヤスープカレーセット', description: '① サラダ<br>② 日本米またはバスマティライス<br>③ チキンミックススープカレー（チキンと様々な野菜をヒマラヤのハーブとスパイスで味付け）', price: '¥990', image: '/Dishesh/Launch/lunch105.jpg' },
        { name: 'ポークカツカレーライス', description: '① ポークカツカレーライス<br>② サラダ', price: '¥900', image: '/Dishesh/Launch/lunch106.jpg' },
        { name: 'マトンとほうれん草のカレーライス', description: '① マトンほうれん草カレーライス<br>② サラダ', price: '¥900', image: '/Dishesh/Launch/lunch107.jpg' },
        { name: 'タンドリーチキントッピング野菜カレー', description: '① 野菜カレータンドリーチキンカレーライス<br>② サラダ', price: '¥1300', image: '/Dishesh/Launch/lunch108.jpg' }
    ],
    // Simplified other categories, they can be expanded
    special: [
        { name: 'ヒマラヤスープカレーセット', description: 'ネパール定番のスープカレーセット。チキンと野菜のスープカレー、バスマティライスまたは日本米、サラダ', price: '¥1100', image: '/Dishesh/special/set_61.jpg' },
        { name: 'ナンカレーセット', description: 'お好みのカレー1種（チキン、キーマエッグ、野菜、豆）とナンまたはライスのセット', price: '¥990', image: '/Dishesh/special/set_62.jpg' }
    ],
    dessert: [
        { name: '本日のインドデザート', description: '', price: '¥380', image: '/Dishesh/dessert_1.jpg' },
        { name: 'アイスクリーム', description: '', price: '¥380', image: '/Dishesh/dessert_2.jpg' }
    ],
    'ala-carte': [
        { name: 'サモサ (2個)', description: '様々な野菜とカシューナッツを包んで揚げた、インドの代表的なスナック。', price: '¥550', image: '/Dishesh/carte/menu_02.jpg' },
        { name: 'タンドリーチキン', description: '骨付きチキンをヨーグルトとスパイスに漬け込み、土釜で焼き上げました。', price: '¥580', image: '/Dishesh/carte/menu_09.jpg' }
    ],
    curry: [
        { name: 'キーマエッグカレー', description: 'ひき肉とゆで卵のカレー', price: '¥870', image: '/Dishesh/curry/menu_35.jpg' },
        { name: 'バターチキンカレー', description: '様々なスパイス、生クリーム、バター、チキンを使用したコクのあるカレー', price: '¥980', image: '/Dishesh/curry/menu_39.jpg' }
    ]
};

const drinksData = [
    { name: "キングフィッシャー (インド)", price: "¥580", category: "beer", description: "インドで最もポピュラーなビール。キレのある味わい。" },
    { name: "エベレストビール (ネパール)", price: "¥580", category: "beer", description: "ヒマラヤの天然水を使用したプレミアムラガー。" },
    { name: "マンゴーラッシー", price: "¥480", category: "soft", description: "甘いマンゴーとヨーグルトのスムージー。" },
    { name: "チャイ (アイス/ホット)", price: "¥350", category: "soft", description: "伝統的なインドのスパイスティー。" }
];

const heroImages = [
    '/img/main-image.jpg',
    '/Dishesh/Launch/lunch101.jpg',
    '/Dishesh/Launch/lunch103.jpg',
    '/Dishesh/special_1.jpg',
    '/Dishesh/special_2.jpg',
    '/Dishesh/special_3.jpg',
    '/Dishesh/curry/menu_39.jpg',
    '/Dishesh/curry/menu_40.jpg',
    '/Dishesh/Launch/lunch105.jpg',
    '/Dishesh/dessert_1.jpg'
];

document.addEventListener('DOMContentLoaded', () => {
    const menuGrid = document.getElementById('menu-grid');
    const categoriesBtns = document.querySelectorAll('#menu-categories button');
    const drinksFilter = document.getElementById('drinks-filter');
    const heroSlider = document.getElementById('hero-slider');
    const loader = document.getElementById('loader');
    const loaderProgress = document.getElementById('loader-progress');

    // Page Loader Logic
    let progress = 0;
    const loaderInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;
        if (loaderProgress) loaderProgress.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(loaderInterval);
            setTimeout(() => {
                document.body.classList.add('loaded');
            }, 500);
        }
    }, 200);

    // Hero Slider Initialization
    if (heroSlider) {
        heroImages.forEach((src, index) => {
            const slide = document.createElement('div');
            slide.className = `slide ${index === 0 ? 'active' : ''}`;
            slide.style.backgroundImage = `url(${src})`;
            heroSlider.appendChild(slide);
        });

        let currentSlide = 0;
        setInterval(() => {
            const slides = document.querySelectorAll('.slide');
            if (slides.length > 0) {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }
        }, 5000);
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navList.classList.toggle('active');
            document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
        });

        // Close when clicking link
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navList.classList.remove('active');
            });
        });
    }

    // Branch Modal Logic
    const branchModal = document.getElementById('branch-modal');
    const closeBranchModal = document.getElementById('close-modal');
    const branchBtns = document.querySelectorAll('.branch-btn');
    const branchInfo = document.getElementById('branch-info');
    const branchPhone = document.getElementById('branch-phone');
    const platformLink = document.getElementById('platform-link');
    let selectedPlatform = '';

    const branchData = {
        dambara: {
            phone: '082-262-0004',
            ubereats: 'https://www.ubereats.com/jp/store/%E3%83%8A%E3%83%9E%E3%82%B9%E3%83%86-%E6%AE%B5%E5%8E%9F%E5%BA%97-namaste-danbara/m4g0uX98R5Wz31R9eY-OzA',
            wolt: 'https://wolt.com/ja/jpn/hiroshima/restaurant/namaste-danbara',
            takeaway: 'tel:0822620004'
        },
        hatchobori: {
            phone: '082-222-3240',
            ubereats: 'https://www.ubereats.com/jp/store/%E3%83%8A%E3%83%9E%E3%82%B9%E3%83%86-%E5%85%AB%E4%B8%81%E5%A0%80%E5%BA%97-namaste-hacchobori/zZ3W3R6_Rdy3d6R_R_R_R_A',
            wolt: 'https://wolt.com/ja/jpn/hiroshima/restaurant/namaste-hatchobori',
            takeaway: 'tel:0822223240'
        },
        otemachi: {
            phone: '082-241-6001',
            ubereats: 'https://www.ubereats.com/jp/store/%E3%83%8A%E3%83%9E%E3%82%B9%E3%83%86-%E5%A4%A7%E6%89%8B%E7%94%BA%E5%BA%97-namaste-otemachi/zZ3W3R6_Rdy3d6R_R_R_R_B',
            wolt: 'https://wolt.com/ja/jpn/hiroshima/restaurant/namaste-otemachi',
            takeaway: 'tel:0822416001'
        }
    };

    document.querySelectorAll('.online-order').forEach(orderBtn => {
        orderBtn.addEventListener('click', () => {
            selectedPlatform = orderBtn.dataset.platform;
            branchModal.classList.add('active');
            branchInfo.classList.remove('active');
            document.body.style.overflow = 'hidden';
            
            // Update modal text based on platform
            const title = document.getElementById('modal-title');
            if (selectedPlatform === 'ubereats') title.innerText = 'Uber Eats で注文';
            if (selectedPlatform === 'wolt') title.innerText = 'Wolt で注文';
            if (selectedPlatform === 'takeaway') title.innerText = 'お持ち帰りの予約';
        });
    });

    branchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const branch = btn.dataset.branch;
            const data = branchData[branch];
            
            branchPhone.innerText = `電話番号: ${data.phone}`;
            platformLink.href = data[selectedPlatform];
            
            if (selectedPlatform === 'takeaway') {
                platformLink.innerText = '電話で予約する';
            } else {
                platformLink.innerText = '注文画面へ進む';
            }
            
            branchInfo.classList.add('active');
        });
    });

    if (closeBranchModal) {
        closeBranchModal.addEventListener('click', () => {
            branchModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === branchModal) {
            branchModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    function renderMenu(category) {
        menuGrid.innerHTML = '';
        
        if (category === 'drinks') {
            drinksFilter.style.display = 'flex';
            renderDrinks('all');
            return;
        }

        if (drinksFilter) drinksFilter.style.display = 'none';
        const items = menuData[category] || [];
        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `all 0.6s ease ${index * 0.1}s`;
            
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="menu-item-content">
                    <h3>
                        <span class="price">${item.price}</span>
                        ${item.name}
                    </h3>
                    <p>${item.description}</p>
                </div>
            `;
            menuGrid.appendChild(card);
            observer.observe(card);
        });
    }

    function renderDrinks(subcat) {
        menuGrid.innerHTML = '';
        const items = subcat === 'all' ? drinksData : drinksData.filter(d => d.category === subcat);
        
        items.forEach((drink, index) => {
            const card = document.createElement('div');
            card.className = 'drink-card';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `all 0.6s ease ${index * 0.05}s`;
            
            card.innerHTML = `
                <div class="drink-header">
                    <h3 class="drink-name">${drink.name}</h3>
                    <span class="drink-price">${drink.price}</span>
                </div>
                <p class="drink-description">${drink.description}</p>
            `;
            menuGrid.appendChild(card);
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        });
    }

    categoriesBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoriesBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.category);
        });
    });

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderDrinks(btn.dataset.cat);
        });
    });

    // Load default
    renderMenu('lunch');
});
