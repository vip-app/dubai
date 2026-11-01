/* =====================================================
   DUBAI DELIVERY — ДАННЫЕ МЕНЮ
   ===================================================== */

const CATEGORIES = [
  { id: 'company',   name: 'БЛЮДА НА КОМПАНИЮ НА МАНГАЛЕ', emoji: '🍖' },
  { id: 'steaks',    name: 'СТЕЙКИ НА МАНГАЛЕ',            emoji: '🥩' },
  { id: 'salads',    name: 'САЛАТЫ',                       emoji: '🥗' },
  { id: 'hot',       name: 'ГОРЯЧИЕ БЛЮДА',                emoji: '🍲' },
  { id: 'lemonades', name: 'ФИРМЕННЫЕ ЛИМОНАДЫ',           emoji: '🍹' },
  { id: 'shashlik',  name: 'ШАШЛЫКИ НА МАНГАЛЕ',           emoji: '🍢' },
  { id: 'pizza',     name: 'ПИЦЦЫ',                        emoji: '🍕' },
  { id: 'soups',     name: 'СУПЫ',                         emoji: '🍜' },
  { id: 'national',  name: 'НАЦИОНАЛЬНАЯ КУХНЯ',           emoji: '🥘' },
  { id: 'rolls',     name: 'РОЛЛЫ',                        emoji: '🍣' },
  { id: 'fastfood',  name: 'ФАСТ ФУД',                     emoji: '🍔' },
  { id: 'pasta',     name: 'ПАСТЫ',                        emoji: '🍝' },
  { id: 'sides',     name: 'ГАРНИРЫ',                      emoji: '🍟' },
  { id: 'sauces',    name: 'СОУСА',                        emoji: '🧄' },
  { id: 'bread',     name: 'ЛЕПЕШКА',                      emoji: '🫓' },
  { id: 'breakfast', name: 'ЗАВТРАКИ',                     emoji: '🍳' },
  { id: 'desserts',  name: 'ДЕСЕРТЫ',                      emoji: '🍰' },
  { id: 'drinks',    name: 'НАПИТКИ С ХОЛОДИЛЬНИКА',       emoji: '🥤' }
];

const PRODUCTS = [
  // ==================== БЛЮДА НА КОМПАНИЮ НА МАНГАЛЕ ====================
  { id: 1, cat: 'company', name: 'VIP АССОРТИ ЧАША', desc: '', price: 3000, image: 'imageswebp/vach3000.webp', emoji: '🍖', grad: 1 },
  { id: 2, cat: 'company', name: 'АССОРТИ ИЗ ГАЛУШЕК', desc: '', price: 3100, image: 'imageswebp/ag3100.webp', emoji: '🍖', grad: 2 },
  { id: 3, cat: 'company', name: 'МЯСНОЕ ПЛАТО', desc: '', price: 2900, image: 'imageswebp/mp2900.webp', emoji: '🍖', grad: 3 },
  { id: 4, cat: 'company', name: 'МЯСНОЕ АССОРТИ', desc: '', price: 2500, image: 'imageswebp/ma2500.webp', emoji: '🍖', grad: 4 },
  { id: 5, cat: 'company', name: 'САДЖ', desc: '', image: 'imageswebp/st800sk700sb830stv2000.webp', variants: [
    { name: 'Из телятины', price: 800 },
    { name: 'Из курицы', price: 700 },
    { name: 'Из баранины', price: 830 },
    { name: 'Три вида', price: 2000 }
  ], emoji: '🍖', grad: 5 },
  { id: 6, cat: 'company', name: 'СЕТ ШАШЛЫКОВ', desc: '', price: 1950, image: 'imageswebp/ssh1950.webp', emoji: '🍖', grad: 6 },
  { id: 7, cat: 'company', name: 'ШАШЛЫК ИЗ ТЕЛЯЧЕЙ ВЫРЕЗКИ', desc: '', price: 1400, image: 'imageswebp/shtv1400.webp', emoji: '🍖', grad: 7 },

  // ==================== СТЕЙКИ НА МАНГАЛЕ ====================
  { id: 8, cat: 'steaks', name: 'МАКС РИБАЙ', desc: '', price: 890, image: 'imageswebp/mr890.webp', emoji: '🥩', grad: 5 },
  { id: 9, cat: 'steaks', name: 'МЕДАЛЬОНЫ ИЗ ТЕЛЯТИНЫ С ОВОЩНЫМ САЛАТОМ', desc: '', price: 850, image: 'imageswebp/mtos850.webp', emoji: '🥩', grad: 2 },
  { id: 10, cat: 'steaks', name: 'МЕДАЛЬОНЫ СО СЛИВОЧНО-ГРИБНЫМ СОУСОМ', desc: '', price: 830, image: 'imageswebp/msgs830.webp', emoji: '🥩', grad: 1 },
  { id: 11, cat: 'steaks', name: 'РАДУЖНАЯ ФАРЕЛЬ С ОВОЩАМИ', desc: '', price: 650, image: 'imageswebp/rfo650.webp', emoji: '🥩', grad: 3 },
  { id: 12, cat: 'steaks', name: 'РЕЛАКС', desc: '', image: 'imageswebp/rgm890km890.webp', variants: [
    { name: 'С говяжьим мясом', price: 890 },
    { name: 'С куриным мясом', price: 890 }
  ], emoji: '🥩', grad: 4 },
  { id: 13, cat: 'steaks', name: 'СТЕЙК ДУБАЙ', desc: '', image: 'imageswebp/sdb890kr890.webp', variants: [
    { name: 'С белым соусом', price: 890 },
    { name: 'С красным соусом', price: 890 }
  ], emoji: '🥩', grad: 5 },
  { id: 14, cat: 'steaks', name: 'СТЕЙК ИЗ ЛОСОСЯ', desc: '', price: 950, image: 'imageswebp/sl950.webp', emoji: '🥩', grad: 6 },
  { id: 15, cat: 'steaks', name: 'СТЕЙК ИЗ ФИЛЕ КУРИЦЫ', desc: '', price: 650, image: 'imageswebp/sfk650.webp', emoji: '🥩', grad: 7 },
  { id: 16, cat: 'steaks', name: 'СТЕЙК ПОД ФИРМЕННЫМ СОУСОМ', desc: '', image: 'imageswebp/sfsr890d890f890.webp', variants: [
    { name: 'С рисом', price: 890 },
    { name: 'С деревенским', price: 890 },
    { name: 'С фри', price: 890 }
  ], emoji: '🥩', grad: 8 },
  { id: 17, cat: 'steaks', name: 'СТЕЙК РИБАЙ', desc: '', image: 'imageswebp/srb840kr840.webp', variants: [
    { name: 'С белым соусом', price: 840 },
    { name: 'С красным соусом', price: 840 }
  ], emoji: '🥩', grad: 1 },
  { id: 18, cat: 'steaks', name: 'СТЕЙК ТИ-БОН', desc: '', image: 'imageswebp/stbb840kr840.webp', variants: [
    { name: 'С белым соусом', price: 840 },
    { name: 'С красным соусом', price: 840 }
  ], emoji: '🥩', grad: 2 },
  { id: 19, cat: 'steaks', name: 'ТЕЛЯЧЬИ МЕДАЛЬОНЫ', desc: '', image: 'imageswebp/tmb850kr850.webp', variants: [
    { name: 'С белым соусом', price: 850 },
    { name: 'С красным соусом', price: 850 }
  ], emoji: '🥩', grad: 3 },

  // ==================== САЛАТЫ ====================
  { id: 20, cat: 'salads', name: 'САЛАТ АДЕЛАИДА', desc: '', price: 400, image: 'imageswebp/sa400.webp', emoji: '🥗', grad: 3 },
  { id: 21, cat: 'salads', name: 'САЛАТ ВЕСЕННИЙ', desc: '', image: 'imageswebp/svm330m330.webp', variants: [
    { name: 'С маслом', price: 330 },
    { name: 'Без масла', price: 330 }
  ], emoji: '🥗', grad: 2 },
  { id: 22, cat: 'salads', name: 'САЛАТ ГРЕЧЕСКИЙ', desc: '', price: 350, image: 'imageswebp/sg350.webp', emoji: '🥗', grad: 7 },
  { id: 23, cat: 'salads', name: 'САЛАТ ОТ ШЕФА', desc: '', price: 380, image: 'imageswebp/ssh380.webp', emoji: '🥗', grad: 4 },
  { id: 24, cat: 'salads', name: 'САЛАТ С РОСТБИФОМ', desc: '', price: 500, image: 'imageswebp/sr500.webp', emoji: '🥗', grad: 5 },
  { id: 25, cat: 'salads', name: 'САЛАТ С ХРУСТЯЩИМИ БАКЛАЖАНАМИ', desc: '', price: 400, image: 'imageswebp/shb400.webp', emoji: '🥗', grad: 6 },
  { id: 26, cat: 'salads', name: 'САЛАТ ФУДЗИЯМА', desc: '', price: 390, image: 'imageswebp/sf390.webp', emoji: '🥗', grad: 1 },
  { id: 27, cat: 'salads', name: 'САЛАТ ФУНЧОЗА', desc: '', price: 400, image: 'imageswebp/sf400.webp', emoji: '🥗', grad: 2 },
  { id: 28, cat: 'salads', name: 'САЛАТ ЦЕЗАРЬ С ТИГРОВЫМИ КРЕВЕТКАМИ', desc: '', price: 450, image: 'imageswebp/sctk450.webp', emoji: '🥗', grad: 3 },
  { id: 29, cat: 'salads', name: 'ТАРЕЛКА С СЫРОМ И ОВОЩАМИ', desc: '', price: 500, image: 'imageswebp/tso500.webp', emoji: '🥗', grad: 4 },
  { id: 30, cat: 'salads', name: 'ТАРЕЛКА С ФРУКТАМИ', desc: '', price: 700, image: 'imageswebp/tf700.webp', emoji: '🥗', grad: 5 },
  { id: 31, cat: 'salads', name: 'ТЕПЛЫЙ САЛАТ С ТЕЛЯТИНОЙ', desc: '', price: 420, image: 'imageswebp/tst420.webp', emoji: '🥗', grad: 6 },
  { id: 32, cat: 'salads', name: 'ЦЕЗАРЬ С ЦЫПЛЕНКОМ', desc: '', price: 400, image: 'imageswebp/cc400.webp', emoji: '🥗', grad: 7 },

  // ==================== ГОРЯЧИЕ БЛЮДА ====================
  { id: 33, cat: 'hot', name: 'БЕФСТРОГАНОВ ИЗ ТЕЛЯТИНЫ', desc: '', price: 500, image: 'imageswebp/bt500.webp', emoji: '🍲', grad: 1 },
  { id: 34, cat: 'hot', name: 'ВЕЗУНЧИК', desc: '', image: 'imageswebp/vbs850ks850.webp', variants: [
    { name: 'С белым соусом', price: 850 },
    { name: 'С красным соусом', price: 850 }
  ], emoji: '🍲', grad: 2 },
  { id: 35, cat: 'hot', name: 'ДУБАЙСКИЙ ОБЕД', desc: '', price: 890, image: 'imageswebp/do890.webp', emoji: '🍲', grad: 3 },
  { id: 36, cat: 'hot', name: 'ЖАРКОЕ ПО-ДОМАШНЕМУ', desc: '', price: 500, image: 'imageswebp/jpd500.webp', emoji: '🍲', grad: 4 },
  { id: 37, cat: 'hot', name: 'ЗАПЕКАНКА MAXX VELL', desc: '', price: 600, image: 'imageswebp/zmv600.webp', emoji: '🍲', grad: 5 },
  { id: 38, cat: 'hot', name: 'ЗАПЕКАНКА ПАРУС', desc: '', price: 660, image: 'imageswebp/zp660.webp', emoji: '🍲', grad: 6 },
  { id: 39, cat: 'hot', name: 'КОРОЛЕВСКИЙ СЮРПРИЗ', desc: '', price: 550, image: 'imageswebp/ks550.webp', emoji: '🍲', grad: 7 },
  { id: 40, cat: 'hot', name: 'КОТЛЕТЫ С ЖУЛЬЕНОМ', desc: '', image: 'imageswebp/kjr570f570d570.webp', variants: [
    { name: 'С рисом', price: 570 },
    { name: 'С фри', price: 570 },
    { name: 'С деревенским', price: 570 }
  ], emoji: '🍲', grad: 8 },
  { id: 41, cat: 'hot', name: 'КУРИНОЕ ФИЛЕ В ГРИБНОМ СОУСЕ', desc: '', price: 650, image: 'imageswebp/kfgs650.webp', emoji: '🍲', grad: 1 },
  { id: 42, cat: 'hot', name: 'КУРИНЫЕ КОТЛЕТЫ ПОД СЛИВОЧНЫМ СОУСОМ', desc: '', image: 'imageswebp/kkssr380p380.webp', variants: [
    { name: 'С рисом', price: 380 },
    { name: 'С пюре', price: 380 }
  ], emoji: '🍲', grad: 2 },
  { id: 43, cat: 'hot', name: 'КУРИНЫЙ СТЕЙК ДУБАЙ', desc: '', price: 580, image: 'imageswebp/ksd580.webp', emoji: '🍲', grad: 3 },
  { id: 44, cat: 'hot', name: 'КУРИЦА ПО-КИТАЙСКИ', desc: '', image: 'imageswebp/kkm550f550d550.webp', variants: [
    { name: 'С макаронами', price: 550 },
    { name: 'С фри', price: 550 },
    { name: 'С деревенским', price: 550 }
  ], emoji: '🍲', grad: 4 },
  { id: 45, cat: 'hot', name: 'КУРИЦА С ГРИБАМИ', desc: '', price: 450, image: 'imageswebp/kg450.webp', emoji: '🍲', grad: 5 },
  { id: 46, cat: 'hot', name: 'ЛЮЛЯ-КЕБАБ ПО-ТЕРЕЦКИ', desc: '', price: 580, image: 'imageswebp/lkt580.webp', emoji: '🍲', grad: 6 },
  { id: 47, cat: 'hot', name: 'МЭДЖИК ЛАЙФ', desc: '', price: 430, image: 'imageswebp/ml430.webp', emoji: '🍲', grad: 7 },
  { id: 48, cat: 'hot', name: 'РИС С ОВОЩАМИ С ТЕЛЯЧЬЕЙ ВЫРЕЗКОЙ', desc: '', price: 560, image: 'imageswebp/rotv560.webp', emoji: '🍲', grad: 8 },
  { id: 49, cat: 'hot', name: 'ТЕЛЯТИНА ПО-ФРАНЦУЗСКИ', desc: '', image: 'imageswebp/tfks580bs580.webp', variants: [
    { name: 'С красным соусом', price: 580 },
    { name: 'С белым соусом', price: 580 }
  ], emoji: '🍲', grad: 1 },
  { id: 50, cat: 'hot', name: 'УДОН С ФИЛЕ ЦЫПЛЕНКА', desc: '', price: 400, image: 'imageswebp/ufc400.webp', emoji: '🍲', grad: 2 },
  { id: 51, cat: 'hot', name: 'ФИРМЕННАЯ ЗАПЕКАНКА С КУРИЦЕЙ', desc: '', price: 650, image: 'imageswebp/fzk650.webp', emoji: '🍲', grad: 3 },
  { id: 52, cat: 'hot', name: 'ЭСКАЛАЙД', desc: '', price: 500, image: 'imageswebp/e500.webp', emoji: '🍲', grad: 4 },
  { id: 53, cat: 'hot', name: 'КОНФИ', desc: '', price: 580, image: 'imageswebp/k580.webp', emoji: '🍲', grad: 5 },

  // ==================== ФИРМЕННЫЕ ЛИМОНАДЫ ====================
  { id: 54, cat: 'lemonades', name: 'КОФЕ С УРБЕЧОМ', desc: '', price: 300, image: 'imageswebp/ku300.webp', emoji: '🍹', grad: 3 },
  { id: 55, cat: 'lemonades', name: 'МОХИТО АПЕЛЬСИНОВЫЙ', desc: '', price: 200, volume: 400, image: 'imageswebp/ma200.webp', emoji: '🍹', grad: 4 },
  { id: 56, cat: 'lemonades', name: 'КОКТЕЙЛЬ КЛУБНИЧНЫЙ', desc: '', price: 250, volume: 400, image: 'imageswebp/kk250.webp', emoji: '🍹', grad: 5 },
  { id: 57, cat: 'lemonades', name: 'МОХИТО МАЛИНОВЫЙ', desc: '', price: 200, volume: 400, image: 'imageswebp/mm200.webp', emoji: '🍹', grad: 6 },
  { id: 58, cat: 'lemonades', name: 'МОХИТО КЛУБНИЧНЫЙ', desc: '', price: 200, volume: 400, image: 'imageswebp/mk200.webp', emoji: '🍹', grad: 7 },
  { id: 59, cat: 'lemonades', name: 'КОКТЕЙЛЬ СНИКЕРС', desc: '', price: 300, volume: 400, image: 'imageswebp/ks300-2.webp', emoji: '🍹', grad: 8 }, // ⚠️ КОЛЛИЗИЯ с КУРИНЫЙ СУП (ks300) → суффикс -2
  { id: 60, cat: 'lemonades', name: 'ГРАНАТОВЫЙ ТОНИК НОВИНКА', desc: '', price: 350, image: 'imageswebp/gtn350.webp', emoji: '🍹', grad: 1 },
  { id: 61, cat: 'lemonades', name: 'МОХИТО КИВИ', desc: '', price: 200, volume: 400, image: 'imageswebp/mk200-2.webp', emoji: '🍹', grad: 2 }, // ⚠️ КОЛЛИЗИЯ с МОХИТО КЛУБНИЧНЫЙ → суффикс -2
  { id: 62, cat: 'lemonades', name: 'МАЛИНА МАРАКУЙЯ', desc: '', price: 450, volume: 1000, image: 'imageswebp/mm450.webp', emoji: '🍹', grad: 3 },
  { id: 63, cat: 'lemonades', name: 'МОХИТО ЯГОДНЫЙ', desc: '', price: 200, volume: 400, image: 'imageswebp/my200.webp', emoji: '🍹', grad: 4 },
  { id: 64, cat: 'lemonades', name: 'МОХИТО КЛАССИЧЕСКИЙ', desc: '', price: 200, volume: 400, image: 'imageswebp/mk200-3.webp', emoji: '🍹', grad: 5 }, // ⚠️ КОЛЛИЗИЯ с МОХИТО КЛУБНИЧНЫЙ и МОХИТО КИВИ → суффикс -3
  { id: 65, cat: 'lemonades', name: 'СВЕЖЕВЫЖАТЫЙ АПЕЛЬСИН', desc: '', price: 350, volume: 400, image: 'imageswebp/sa350.webp', emoji: '🍹', grad: 6 },
  { id: 66, cat: 'lemonades', name: 'СВЕЖЕВЫЖАТЫЙ ЯБЛОЧНЫЙ СОК', desc: '', price: 350, volume: 400, image: 'imageswebp/sys350.webp', emoji: '🍹', grad: 7 },
  { id: 67, cat: 'lemonades', name: 'СВЕЖЕВЫЖАТЫЙ АНАНАСОВЫЙ СОК', desc: '', price: 400, volume: 400, image: 'imageswebp/sas400.webp', emoji: '🍹', grad: 8 },
  { id: 68, cat: 'lemonades', name: 'КОКТЕЙЛЬ ШОКОЛАДНЫЙ', desc: '', price: 250, volume: 400, image: 'imageswebp/ksh250.webp', emoji: '🍹', grad: 1 },
  { id: 69, cat: 'lemonades', name: 'КОКТЕЙЛЬ ВАНИЛЬНЫЙ', desc: '', price: 250, volume: 400, image: 'imageswebp/kv250.webp', emoji: '🍹', grad: 2 },
  { id: 70, cat: 'lemonades', name: 'ЯБЛОЧНЫЙ', desc: '', price: 400, volume: 1000, image: 'imageswebp/y400.webp', emoji: '🍹', grad: 3 },
  { id: 71, cat: 'lemonades', name: 'АНАНАСОВЫЙ', desc: '', price: 400, volume: 1000, image: 'imageswebp/a400.webp', emoji: '🍹', grad: 4 },
  { id: 72, cat: 'lemonades', name: 'АНАНАСОВЫЙ МАРАКУЙЯ', desc: '', price: 450, volume: 1000, image: 'imageswebp/am450.webp', emoji: '🍹', grad: 5 },
  { id: 73, cat: 'lemonades', name: 'АПЕЛЬСИНОВЫЙ', desc: '', price: 400, volume: 1000, image: 'imageswebp/a400-2.webp', emoji: '🍹', grad: 6 }, // ⚠️ КОЛЛИЗИЯ с АНАНАСОВЫЙ → суффикс -2
  { id: 74, cat: 'lemonades', name: 'АССОРТИ', desc: '', price: 450, volume: 1000, image: 'imageswebp/a450.webp', emoji: '🍹', grad: 7 },
  { id: 75, cat: 'lemonades', name: 'ГРУШЕВЫЙ', desc: '', price: 400, volume: 1000, image: 'imageswebp/g400.webp', emoji: '🍹', grad: 8 },
  { id: 76, cat: 'lemonades', name: 'КОКТЕЙЛЬ БАНАНОВЫЙ', desc: '', price: 250, volume: 400, image: 'imageswebp/kb250.webp', emoji: '🍹', grad: 1 },
  { id: 77, cat: 'lemonades', name: 'КЛУБНИЧНЫЙ', desc: '', price: 400, volume: 1000, image: 'imageswebp/k400.webp', emoji: '🍹', grad: 2 },
  { id: 78, cat: 'lemonades', name: 'КЮРАСАО', desc: '', price: 400, volume: 1000, image: 'imageswebp/k400-2.webp', emoji: '🍹', grad: 3 }, // ⚠️ КОЛЛИЗИЯ с КЛУБНИЧНЫЙ → суффикс -2
  { id: 79, cat: 'lemonades', name: 'МАНГО МАРАКУЙЯ', desc: '', price: 450, volume: 1000, image: 'imageswebp/mm450-2.webp', emoji: '🍹', grad: 4 }, // ⚠️ КОЛЛИЗИЯ с МАЛИНА МАРАКУЙЯ → суффикс -2
  { id: 80, cat: 'lemonades', name: 'ЦИТРУСОВЫЙ', desc: '', price: 400, volume: 1000, image: 'imageswebp/c400.webp', emoji: '🍹', grad: 5 },
  { id: 81, cat: 'lemonades', name: 'ЯГОДНЫЙ', desc: '', price: 400, volume: 1000, image: 'imageswebp/ya400.webp', emoji: '🍹', grad: 6 },

  // ==================== ШАШЛЫКИ НА МАНГАЛЕ ====================
  { id: 82, cat: 'shashlik', name: 'КОРОЛЕВСКИЙ ШАШЛЫК', desc: '', weight: 300, image: 'imageswebp/kshks850bs850.webp', variants: [
    { name: 'С красным соусом', price: 850 },
    { name: 'С белым соусом', price: 850 }
  ], emoji: '🍢', grad: 1 },
  { id: 83, cat: 'shashlik', name: 'ЛЮЛЯ-КЕБАБ ИЗ БАРАНИНЫ', desc: '', weight: 300, image: 'imageswebp/lkbbs500ks500.webp', variants: [
    { name: 'С белым соусом', price: 500 },
    { name: 'С красным соусом', price: 500 }
  ], emoji: '🍢', grad: 2 },
  { id: 84, cat: 'shashlik', name: 'ЛЮЛЯ-КЕБАБ ПО-ДУБАЙСКИ', desc: '', weight: 250, image: 'imageswebp/lkpdbs570ks570.webp', variants: [
    { name: 'С белым соусом', price: 570 },
    { name: 'С красным соусом', price: 570 }
  ], emoji: '🍢', grad: 3 },
  { id: 85, cat: 'shashlik', name: 'ТЕЛЯЧИЙ ШАШЛЫК С ОВОЩАМИ', desc: '', weight: 350, image: 'imageswebp/tshsobs750ks750.webp', variants: [
    { name: 'С белым соусом', price: 750 },
    { name: 'С красным соусом', price: 750 }
  ], emoji: '🍢', grad: 4 },
  { id: 86, cat: 'shashlik', name: 'ШАШЛЫК ИЗ БАРАНИНЫ', desc: '', weight: 350, image: 'imageswebp/shbbs750ks750.webp', variants: [
    { name: 'С белым соусом', price: 750 },
    { name: 'С красным соусом', price: 750 }
  ], emoji: '🍢', grad: 5 },
  { id: 87, cat: 'shashlik', name: 'ШАШЛЫК ИЗ КУРИЦЫ', desc: '', weight: 350, image: 'imageswebp/shkbs550ks550.webp', variants: [
    { name: 'С белым соусом', price: 550 },
    { name: 'С красным соусом', price: 550 }
  ], emoji: '🍢', grad: 6 },
  { id: 88, cat: 'shashlik', name: 'ШАШЛЫК ИЗ ЛОСОСЯ', desc: '', price: 840, weight: 220, image: 'imageswebp/shl840.webp', emoji: '🍢', grad: 7 },
  { id: 89, cat: 'shashlik', name: 'ШАШЛЫК ИЗ ТЕЛЯТИНЫ', desc: '', weight: 300, image: 'imageswebp/shtbs750ks750.webp', variants: [
    { name: 'С белым соусом', price: 750 },
    { name: 'С красным соусом', price: 750 }
  ], emoji: '🍢', grad: 8 },
  { id: 90, cat: 'shashlik', name: 'ШАШЛЫК ИЗ ТРЕХ ВИДОВ МЯСА', desc: '', weight: 350, image: 'imageswebp/shtvmbs600ks600.webp', variants: [
    { name: 'С белым соусом', price: 600 },
    { name: 'С красным соусом', price: 600 }
  ], emoji: '🍢', grad: 1 },
  { id: 91, cat: 'shashlik', name: 'ШАШЛЫК ИЗ ФИЛЕ ЦЫПЛЕНКА С САЛАТОМ ШЕФА', desc: '', price: 550, image: 'imageswebp/shfcss550.webp', emoji: '🍢', grad: 2 },

  // ==================== ПИЦЦЫ ====================
  { id: 92, cat: 'pizza', name: 'ОСЕТИНСКИЙ ПИРОГ', desc: '', image: 'imageswebp/opsk430sm450ss430.webp', variants: [
    { name: 'С картофелем', price: 430 },
    { name: 'С мясом', price: 450 },
    { name: 'С сыром', price: 430 }
  ], emoji: '🍕', grad: 5 },
  { id: 93, cat: 'pizza', name: 'ПИЦЦА АССОРТИ', desc: '', image: 'imageswebp/pa470520.webp', variants: [
    { name: 'Средняя', price: 470 },
    { name: 'Большая', price: 520 }
  ], emoji: '🍕', grad: 2 },
  { id: 94, cat: 'pizza', name: 'ПИЦЦА ГРИБНАЯ', desc: '', image: 'imageswebp/pg470520.webp', variants: [
    { name: 'Средняя', price: 470 },
    { name: 'Большая', price: 520 }
  ], emoji: '🍕', grad: 6 },
  { id: 95, cat: 'pizza', name: 'ПИЦЦА МОРТАДЕЛЛА', desc: '', image: 'imageswebp/pm450500.webp', variants: [
    { name: 'Средняя', price: 450 },
    { name: 'Большая', price: 500 }
  ], emoji: '🍕', grad: 3 },
  { id: 96, cat: 'pizza', name: 'ПИЦЦА ПЕППЕРОНИ', desc: '', image: 'imageswebp/pp470470520520.webp', variants: [
    { name: 'Средняя острая', price: 470 },
    { name: 'Средняя не острая', price: 470 },
    { name: 'Большая острая', price: 520 },
    { name: 'Большая не острая', price: 520 }
  ], emoji: '🍕', grad: 1 },
  { id: 97, cat: 'pizza', name: 'ПИЦЦА ПИДЕ', desc: '', price: 500, image: 'imageswebp/pp500.webp', emoji: '🍕', grad: 3 },
  { id: 98, cat: 'pizza', name: 'ПИЦЦА СЫРНАЯ', desc: '', image: 'imageswebp/ps470520.webp', variants: [
    { name: 'Средняя', price: 470 },
    { name: 'Большая', price: 520 }
  ], emoji: '🧀', grad: 4 },
  { id: 99, cat: 'pizza', name: 'ПИЦЦА ФИЛАДЕЛЬФИЯ', desc: '', image: 'imageswebp/pf550600.webp', variants: [
    { name: 'Средняя', price: 550 },
    { name: 'Большая', price: 600 }
  ], emoji: '🍕', grad: 5 },
  { id: 100, cat: 'pizza', name: 'ПИЦЦА ЦЕЗАРЬ', desc: '', image: 'imageswebp/pc470520.webp', variants: [
    { name: 'Средняя', price: 470 },
    { name: 'Большая', price: 520 }
  ], emoji: '🍕', grad: 6 },
  { id: 101, cat: 'pizza', name: 'ПИЦЦА ЧИКЕН', desc: '', image: 'imageswebp/pch470520.webp', variants: [
    { name: 'Средняя', price: 470 },
    { name: 'Большая', price: 520 }
  ], emoji: '🍕', grad: 7 },
  { id: 102, cat: 'pizza', name: 'ХАЧАПУРИ ПО-АДЖАРСКИ', desc: '', price: 350, image: 'imageswebp/hpa350.webp', emoji: '🫓', grad: 8 },
  { id: 103, cat: 'pizza', name: 'МЯСНАЯ ПИЦЦА', desc: '', image: 'imageswebp/mp520470.webp', variants: [
    { name: 'Большая', price: 520 },
    { name: 'Средняя', price: 470 }
  ], emoji: '🍕', grad: 2 },
  { id: 104, cat: 'pizza', name: 'ПИЦЦА МАРГАРИТА', desc: '', image: 'imageswebp/pm470520.webp', variants: [
    { name: 'Средняя', price: 470 },
    { name: 'Большая', price: 520 }
  ], emoji: '🍕', grad: 3 },

  // ==================== СУПЫ ====================
  { id: 105, cat: 'soups', name: 'ГРИБНОЙ КРЕМ-СУП', desc: '', price: 300, image: 'imageswebp/gks300.webp', emoji: '🍜', grad: 5 },
  { id: 106, cat: 'soups', name: 'КУРИНЫЙ СУП', desc: '', price: 300, image: 'imageswebp/ks300.webp', emoji: '🍜', grad: 1 },
  { id: 107, cat: 'soups', name: 'СУП ДАРЫ МОРЯ', desc: '', price: 480, image: 'imageswebp/sdm480.webp', emoji: '🍜', grad: 2 },
  { id: 108, cat: 'soups', name: 'СУП ИЗ ПЕРСИДСКОЙ ЧЕЧЕВИЦЫ', desc: '', price: 300, image: 'imageswebp/sipch300.webp', emoji: '🍜', grad: 3 },
  { id: 109, cat: 'soups', name: 'СУП ТОМ ЯМ', desc: '', price: 550, image: 'imageswebp/sty550.webp', emoji: '🍜', grad: 4 },
  { id: 110, cat: 'soups', name: 'УКРАИНСКИЙ БОРЩ', desc: '', price: 300, image: 'imageswebp/ub300.webp', emoji: '🍲', grad: 5 },

  // ==================== НАЦИОНАЛЬНАЯ КУХНЯ ====================
  { id: 111, cat: 'national', name: 'БА1АР ГАЛНАШ', desc: '', weight: 400, image: 'imageswebp/bgagchs750agls750mgchs750mgls750kgchs750kgls750.webp', variants: [
    { name: 'Ассорти галушки + чесночный соус', price: 750 },
    { name: 'Ассорти галушки + луковый соус', price: 750 },
    { name: 'Мучные галушки + чесночный соус', price: 750 },
    { name: 'Мучные галушки + луковый соус', price: 750 },
    { name: 'Кукурузные галушки + чесночный соус', price: 750 },
    { name: 'Кукурузные галушки + луковый соус', price: 750 }
  ], emoji: '🥘', grad: 1 },
  { id: 112, cat: 'national', name: 'ГАЛНАШ С ГОВЯЖИМ МЯСОМ', desc: '', weight: 350, image: 'imageswebp/ggmagchs750agls750mgchs750mgls750kgchs750kgls750.webp', variants: [
    { name: 'Ассорти галушки + чесночный соус', price: 750 },
    { name: 'Ассорти галушки + луковый соус', price: 750 },
    { name: 'Мучные галушки + чесночный соус', price: 750 },
    { name: 'Мучные галушки + луковый соус', price: 750 },
    { name: 'Кукурузные галушки + чесночный соус', price: 750 },
    { name: 'Кукурузные галушки + луковый соус', price: 750 }
  ], emoji: '🥘', grad: 2 },
  { id: 113, cat: 'national', name: 'ГАЛНАШ С КУРИНЫМ МЯСОМ', desc: '', weight: 350, image: 'imageswebp/gkmagchs600agls600mgchs600mgls600kgchs600kgls600.webp', variants: [
    { name: 'Ассорти галушки + чесночный соус', price: 600 },
    { name: 'Ассорти галушки + луковый соус', price: 600 },
    { name: 'Мучные галушки + чесночный соус', price: 600 },
    { name: 'Мучные галушки + луковый соус', price: 600 },
    { name: 'Кукурузные галушки + чесночный соус', price: 600 },
    { name: 'Кукурузные галушки + луковый соус', price: 600 }
  ], emoji: '🥘', grad: 3 },
  { id: 114, cat: 'national', name: 'ГАЛНАШ С СУШЕНОЙ КОЛБАСОЙ', desc: '', weight: 300, image: 'imageswebp/gskagchs750agls750mgchs750mgls750kgchs750kgls750.webp', variants: [
    { name: 'Ассорти галушки + чесночный соус', price: 750 },
    { name: 'Ассорти галушки + луковый соус', price: 750 },
    { name: 'Мучные галушки + чесночный соус', price: 750 },
    { name: 'Мучные галушки + луковый соус', price: 750 },
    { name: 'Кукурузные галушки + чесночный соус', price: 750 },
    { name: 'Кукурузные галушки + луковый соус', price: 750 }
  ], emoji: '🥘', grad: 4 },
  { id: 115, cat: 'national', name: 'ГАЛНАШ С СУШЕНЫМ МЯСОМ', desc: '', weight: 250, image: 'imageswebp/gsmagchs850agls850mgchs850mgls850kgchs850kgls850.webp', variants: [
    { name: 'Ассорти галушки + чесночный соус', price: 850 },
    { name: 'Ассорти галушки + луковый соус', price: 850 },
    { name: 'Мучные галушки + чесночный соус', price: 850 },
    { name: 'Мучные галушки + луковый соус', price: 850 },
    { name: 'Кукурузные галушки + чесночный соус', price: 850 },
    { name: 'Кукурузные галушки + луковый соус', price: 850 }
  ], emoji: '🥘', grad: 5 },
  { id: 116, cat: 'national', name: 'СИСКАЛ Т1О БЕРАМ', desc: '', price: 300, image: 'imageswebp/stb300.webp', emoji: '🥘', grad: 6 },
  { id: 117, cat: 'national', name: 'ХЬОКАМ Т1О БЕРАМ', desc: '', price: 300, image: 'imageswebp/htb300.webp', emoji: '🥘', grad: 7 },

  // ==================== РОЛЛЫ ====================
  { id: 118, cat: 'rolls', name: 'СЕТ ПРЕМИУМ', desc: '', price: 2400, image: 'imageswebp/sp2400.webp', emoji: '🍣', grad: 1 },
  { id: 119, cat: 'rolls', name: 'СЕТ ДУБАЙ', desc: '', price: 1700, image: 'imageswebp/sd1700.webp', emoji: '🍣', grad: 2 },
  { id: 120, cat: 'rolls', name: 'СЕТ ГОРЯЧИЙ', desc: '', price: 1650, image: 'imageswebp/sg1650.webp', emoji: '🍣', grad: 3 },
  { id: 121, cat: 'rolls', name: 'БАНЗАЙ РОЛЛ NEW', desc: '', price: 580, image: 'imageswebp/brn580.webp', emoji: '🍣', grad: 4 },
  { id: 122, cat: 'rolls', name: 'ЗВЕЗДА ДУБАЯ', desc: '', price: 480, image: 'imageswebp/zd480.webp', emoji: '🍣', grad: 5 },
  { id: 123, cat: 'rolls', name: 'САМУРАЙ НОВИНКА', desc: '', price: 510, image: 'imageswebp/sn510.webp', emoji: '🍣', grad: 6 },
  { id: 124, cat: 'rolls', name: 'РОЛЛ КУЛЛИНАН', desc: '', price: 500, image: 'imageswebp/rk500.webp', emoji: '🍣', grad: 7 },
  { id: 125, cat: 'rolls', name: 'РОЛЛ КАНАДА', desc: '', price: 480, image: 'imageswebp/rk480.webp', emoji: '🍣', grad: 8 },
  { id: 126, cat: 'rolls', name: 'СЭНДВИЧ РОЛЛ', desc: '', price: 510, image: 'imageswebp/sr510.webp', emoji: '🍣', grad: 1 },
  { id: 127, cat: 'rolls', name: 'ПРИНЦ', desc: '', price: 490, image: 'imageswebp/p490-2.webp', emoji: '🍣', grad: 2 },
  { id: 128, cat: 'rolls', name: 'РАСУ ДРАКОН', desc: '', price: 470, image: 'imageswebp/rd470.webp', emoji: '🍣', grad: 3 },
  { id: 129, cat: 'rolls', name: 'БЕШЕННЫЙ ЛОСОСЬ', desc: '', price: 480, image: 'imageswebp/bl480.webp', emoji: '🍣', grad: 4 },
  { id: 130, cat: 'rolls', name: 'ГОРЯЧИЙ ДУБАЙ', desc: '', price: 490, image: 'imageswebp/gd490.webp', emoji: '🍣', grad: 5 },
  { id: 131, cat: 'rolls', name: 'ОКИ', desc: '', price: 480, image: 'imageswebp/o480.webp', emoji: '🍣', grad: 6 },
  { id: 132, cat: 'rolls', name: 'САКУРА', desc: '', price: 480, image: 'imageswebp/s480.webp', emoji: '🍣', grad: 7 },
  { id: 133, cat: 'rolls', name: 'ВУЛКАН', desc: '', price: 470, image: 'imageswebp/v470.webp', emoji: '🍣', grad: 8 },
  { id: 134, cat: 'rolls', name: 'ПРИНЦ РОЛЛЫ', desc: '', price: 490, image: 'imageswebp/pr490.webp', emoji: '🍣', grad: 1 },
  { id: 135, cat: 'rolls', name: 'ФИЛАДЕЛЬФИЯ РОЯЛЬ', desc: '', price: 480, image: 'imageswebp/fr480.webp', emoji: '🍣', grad: 2 },
  { id: 136, cat: 'rolls', name: 'ЦУНАМИ', desc: '', price: 480, image: 'imageswebp/c480.webp', emoji: '🍣', grad: 3 },
  { id: 137, cat: 'rolls', name: 'ГОРЯЧИЙ ЩИК', desc: '', price: 480, image: 'imageswebp/gsh480.webp', emoji: '🍣', grad: 4 },
  { id: 138, cat: 'rolls', name: 'ТИГРОВЫЕ КРЕВЕТКИ НА ШПАЖКАХ', desc: '', price: 550, image: 'imageswebp/tknsh550.webp', emoji: '🍣', grad: 5 },
  { id: 139, cat: 'rolls', name: 'РОЛЛ ЭЛЕГАНТС', desc: '', price: 510, image: 'imageswebp/re510.webp', emoji: '🍣', grad: 6 },
  { id: 140, cat: 'rolls', name: 'АКИТА МАКИ', desc: '', price: 480, image: 'imageswebp/am480.webp', emoji: '🍣', grad: 7 },
  { id: 141, cat: 'rolls', name: 'АМЕРИКАННО С КРЕВЕТКАМИ', desc: '', price: 480, image: 'imageswebp/ask480.webp', emoji: '🍣', grad: 8 },
  { id: 142, cat: 'rolls', name: 'АМЕРИКАННО С ЛОСОСЕМ', desc: '', price: 480, image: 'imageswebp/asl480.webp', emoji: '🍣', grad: 1 },
  { id: 143, cat: 'rolls', name: 'КАЛИФОРНИЯ С КРАБОМ', desc: '', price: 460, image: 'imageswebp/ksk460.webp', emoji: '🍣', grad: 2 },
  { id: 144, cat: 'rolls', name: 'КАЛИФОРНИЯ С КРЕВЕТКАМИ', desc: '', price: 460, image: 'imageswebp/ksk460-2.webp', emoji: '🍣', grad: 3 }, // ⚠️ КОЛЛИЗИЯ с КАЛИФОРНИЯ С КРАБОМ → суффикс -2
  { id: 145, cat: 'rolls', name: 'КАЛИФОРНИЯ С ЛОСОСЕМ', desc: '', price: 460, image: 'imageswebp/ksl460.webp', emoji: '🍣', grad: 4 },
  { id: 146, cat: 'rolls', name: 'ТЕМПУРА САЛМОН', desc: '', price: 470, image: 'imageswebp/ts470.webp', emoji: '🍣', grad: 5 },
  { id: 147, cat: 'rolls', name: 'ФИЛАДЕЛЬФИЯ', desc: '', price: 460, image: 'imageswebp/f460.webp', emoji: '🍣', grad: 6 },
  { id: 148, cat: 'rolls', name: 'РОЛЛ НОЧНОЕ НЕБО', desc: '', price: 490, image: 'imageswebp/rnn490.webp', emoji: '🍣', grad: 7 },
  { id: 149, cat: 'rolls', name: 'НАГГЕТСЫ ИЗ ЛОСОСЯ', desc: '', price: 430, image: 'imageswebp/nil430.webp', emoji: '🍣', grad: 8 },
  { id: 150, cat: 'rolls', name: 'ЦЕЗАРЬ СУШИ', desc: '', price: 460, image: 'imageswebp/cs460.webp', emoji: '🍣', grad: 1 },

  // ==================== ФАСТ ФУД ====================
  { id: 151, cat: 'fastfood', name: 'БЛЭК БУРГЕР', desc: '', price: 370, image: 'imageswebp/bb370.webp', emoji: '🍔', grad: 1 },
  { id: 152, cat: 'fastfood', name: 'БУРГЕР КЕБАБ', desc: '', price: 450, image: 'imageswebp/bk450.webp', emoji: '🍔', grad: 2 },
  { id: 153, cat: 'fastfood', name: 'ДЕРЕВЕНСКАЯ НА ТАРЕЛКЕ', desc: '', image: 'imageswebp/dntts230ss230.webp', variants: [
    { name: 'С томатным соусом', price: 230 },
    { name: 'С сырным соусом', price: 230 }
  ], emoji: '🌯', grad: 3 },
  { id: 154, cat: 'fastfood', name: 'КУРИНЫЕ КРЫЛЫШКИ', desc: '', price: 500, image: 'imageswebp/kk500.webp', emoji: '🍗', grad: 4 },
  { id: 155, cat: 'fastfood', name: 'КУРИНЫЕ НАГГЕТСЫ', desc: '', image: 'imageswebp/knss250ts250.webp', variants: [
    { name: 'С сырным соусом', price: 250 },
    { name: 'С томатным соусом', price: 250 }
  ], emoji: '🍗', grad: 5 },
  { id: 156, cat: 'fastfood', name: 'МИНЬОН БУРГЕР', desc: '', price: 450, image: 'imageswebp/mb450.webp', emoji: '🍔', grad: 6 },
  { id: 157, cat: 'fastfood', name: 'СЭНДВИЧ СО СТРИПСАМИ', desc: '', price: 450, image: 'imageswebp/sss450.webp', emoji: '🌯', grad: 7 },
  { id: 158, cat: 'fastfood', name: 'ФИРМЕННЫЙ БУРГЕР', desc: '', image: 'imageswebp/fbskk420sgk420.webp', variants: [
    { name: 'С куриной котлетой', price: 420 },
    { name: 'С говяжьей котлетой', price: 420 }
  ], emoji: '🍔', grad: 8 },
  { id: 159, cat: 'fastfood', name: 'ФРИ НА ТАРЕЛКЕ', desc: '', image: 'imageswebp/fntss230ts230.webp', variants: [
    { name: 'С сырным соусом', price: 230 },
    { name: 'С томатным соусом', price: 230 }
  ], emoji: '🍟', grad: 1 },

  // ==================== ПАСТЫ ====================
  { id: 160, cat: 'pasta', name: 'ПАСТА ЭКСКЛЮЗИВ', desc: '', price: 430, image: 'imageswebp/pe430.webp', emoji: '🍝', grad: 1 },
  { id: 161, cat: 'pasta', name: 'ПЕННЕ С ЛОСОСЕМ', desc: '', price: 520, image: 'imageswebp/psl520.webp', emoji: '🍝', grad: 2 },
  { id: 162, cat: 'pasta', name: 'ФЕТТУЧИНИ С КРЕВЕТКАМИ', desc: '', price: 500, image: 'imageswebp/fsk500.webp', emoji: '🍝', grad: 3 },
  { id: 163, cat: 'pasta', name: 'ФЕТТУЧИНИ С КУРИЦЕЙ', desc: '', price: 450, image: 'imageswebp/fsk450.webp', emoji: '🍝', grad: 4 },

  // ==================== ГАРНИРЫ ====================
  { id: 164, cat: 'sides', name: 'КАРТОФЕЛЬ ПО-ДЕРЕВЕНСКИ', desc: '', price: 180, image: 'imageswebp/kpd180.webp', emoji: '🍟', grad: 1 },
  { id: 165, cat: 'sides', name: 'КАРТОФЕЛЬ ФРИ', desc: '', price: 180, image: 'imageswebp/kf180.webp', emoji: '🍟', grad: 2 },
  { id: 166, cat: 'sides', name: 'ОВОЩИ ГРИЛЬ', desc: '', price: 300, image: 'imageswebp/og300.webp', emoji: '🥬', grad: 3 },
  { id: 167, cat: 'sides', name: 'РИС ПО ТУРЕЦКИ', desc: '', price: 230, image: 'imageswebp/rpt230.webp', emoji: '🍚', grad: 4 },
  { id: 168, cat: 'sides', name: 'ШАМПИНЬОНЫ НА МАНГАЛЕ', desc: '', price: 350, image: 'imageswebp/shnm350.webp', emoji: '🍄', grad: 5 },

  // ==================== СОУСА ====================
  { id: 169, cat: 'sauces', name: 'КРАСНЫЙ СОУС ШАУРМЫ', desc: '', price: 70, image: 'imageswebp/kss70.webp', emoji: '🥫', grad: 1 },
  { id: 170, cat: 'sauces', name: 'СЫРНЫЙ СОУС', desc: '', price: 70, image: 'imageswebp/ss70.webp', emoji: '🧀', grad: 2 },
  { id: 171, cat: 'sauces', name: 'ТОМАТНЫЙ СОУС', desc: '', price: 70, image: 'imageswebp/ts70.webp', emoji: '🥫', grad: 3 },
  { id: 172, cat: 'sauces', name: 'ШАУРМА СОУС', desc: '', price: 70, image: 'imageswebp/shs70.webp', emoji: '🥫', grad: 4 },
  { id: 173, cat: 'sauces', name: 'КИСЛОСЛАДКИЙ СОУС', desc: '', price: 70, image: 'imageswebp/ks70.webp', emoji: '🥫', grad: 5 },
  { id: 174, cat: 'sauces', name: 'СОЕВЫЙ СОУС', desc: '', price: 70, image: 'imageswebp/ss70-2.webp', emoji: '🥫', grad: 6 }, // ⚠️ КОЛЛИЗИЯ с СЫРНЫЙ СОУС → суффикс -2
  { id: 175, cat: 'sauces', name: 'БУЛЬОН В КРУЖКЕ', desc: '', price: 70, image: 'imageswebp/bvk70.webp', emoji: '🥣', grad: 7 },
  { id: 176, cat: 'sauces', name: 'СПАЙС СОУС', desc: '', price: 70, image: 'imageswebp/ss70-3.webp', emoji: '🥫', grad: 8 }, // ⚠️ КОЛЛИЗИЯ с СЫРНЫЙ и СОЕВЫЙ → суффикс -3
  { id: 177, cat: 'sauces', name: 'СОУС КИМЧИ', desc: '', price: 70, image: 'imageswebp/sk70.webp', emoji: '🥫', grad: 1 },
  { id: 178, cat: 'sauces', name: 'ДЖЕМ', desc: '', price: 70, image: 'imageswebp/d70.webp', emoji: '🍯', grad: 2 },
  { id: 179, cat: 'sauces', name: 'СМЕТАНА ДОМАШНЯЯ', desc: '', price: 70, image: 'imageswebp/sd70.webp', emoji: '🥛', grad: 3 },
  { id: 180, cat: 'sauces', name: 'АДЖИКА СОУС', desc: '', price: 70, image: 'imageswebp/as70.webp', emoji: '🌶️', grad: 4 },
  { id: 181, cat: 'sauces', name: 'РЕЛАКС СОУС', desc: '', price: 70, image: 'imageswebp/rs70.webp', emoji: '🥫', grad: 5 },
  { id: 182, cat: 'sauces', name: 'ЧЕСНОЧНЫЙ СОУС', desc: '', price: 70, image: 'imageswebp/chs70.webp', emoji: '🧄', grad: 6 },
  { id: 183, cat: 'sauces', name: 'ГРИБНОЙ СОУС', desc: '', price: 120, image: 'imageswebp/gs120.webp', emoji: '🍄', grad: 7 },
  { id: 184, cat: 'sauces', name: 'ИМБИРЬ', desc: '', price: 70, image: 'imageswebp/i70.webp', emoji: '🫚', grad: 8 },
  { id: 185, cat: 'sauces', name: 'ВАСАБИ', desc: '', price: 70, image: 'imageswebp/v70.webp', emoji: '🌿', grad: 1 },
  { id: 186, cat: 'sauces', name: 'ЧЕСНОЧНЫЙ БЕРАМ', desc: '', price: 70, image: 'imageswebp/chb70.webp', emoji: '🧄', grad: 2 },
  { id: 187, cat: 'sauces', name: 'ЛУКОВЫЙ БЕРАМ', desc: '', price: 70, image: 'imageswebp/lb70.webp', emoji: '🧅', grad: 3 },

  // ==================== ЛЕПЕШКА ====================
  { id: 188, cat: 'bread', name: 'ЛЕПЕШКА', desc: '', price: 50, image: 'imageswebp/l50.webp', emoji: '🫓', grad: 2 },

  // ==================== ЗАВТРАКИ ====================
  { id: 189, cat: 'breakfast', name: 'БЛИНЫ С МЯСОМ', desc: '', price: 270, image: 'imageswebp/bsm270.webp', emoji: '🥞', grad: 1 },
  { id: 190, cat: 'breakfast', name: 'БЛИНЫ С ТВОРОГОМ', desc: '', image: 'imageswebp/bstd250s250s250.webp', variants: [
    { name: 'С джемом', price: 250 },
    { name: 'С сметаной', price: 250 },
    { name: 'С сгущенкой', price: 250 }
  ], emoji: '🥞', grad: 2 },
  { id: 191, cat: 'breakfast', name: 'ДУБАЙСКИЙ ЗАВТРАК', desc: '', price: 300, image: 'imageswebp/dz300.webp', emoji: '🍳', grad: 3 },
  { id: 192, cat: 'breakfast', name: 'ЗАВТРАК БОН-БОН', desc: '', price: 280, image: 'imageswebp/zbb280.webp', emoji: '🍳', grad: 4 },
  { id: 193, cat: 'breakfast', name: 'КАША ОВСЯНАЯ С МАКОМ', desc: '', price: 260, image: 'imageswebp/kom260.webp', emoji: '🥣', grad: 5 },
  { id: 194, cat: 'breakfast', name: 'КАША РИСОВАЯ С АНАНАСОМ', desc: '', price: 260, image: 'imageswebp/kra260.webp', emoji: '🥣', grad: 6 },
  { id: 195, cat: 'breakfast', name: 'СЫРНИКИ С ДЖЕМОМ', desc: '', image: 'imageswebp/sdd270s270.webp', variants: [
    { name: 'С джемом', price: 270 },
    { name: 'С сгущенкой', price: 270 }
  ], emoji: '🥞', grad: 7 },

  // ==================== ДЕСЕРТЫ ====================
  { id: 196, cat: 'desserts', name: 'ШОКОЛАДНЫЙ РАЙ', desc: '', price: 370, image: 'imageswebp/shr370.webp', emoji: '🍰', grad: 4 },
  { id: 197, cat: 'desserts', name: 'БАНАН В ШОКОЛАДЕ', desc: '', price: 360, image: 'imageswebp/bsh360.webp', emoji: '🍌', grad: 5 },
  { id: 198, cat: 'desserts', name: 'ТИРАМИСУ', desc: '', price: 250, image: 'imageswebp/t250.webp', emoji: '🍮', grad: 6 },
  { id: 199, cat: 'desserts', name: 'ЧИЗКЕЙК ШОКОЛАДНЫЙ', desc: '', price: 250, image: 'imageswebp/chsh250.webp', emoji: '🍰', grad: 7 },
  { id: 200, cat: 'desserts', name: 'ЧИЗКЕЙК КЛАССИЧЕСКИЙ', desc: '', price: 250, image: 'imageswebp/chk250.webp', emoji: '🍰', grad: 8 },
  { id: 201, cat: 'desserts', name: 'МОРОЖЕННОЕ ВАНИЛЬНОЕ', desc: '', price: 250, image: 'imageswebp/mv250.webp', emoji: '🍨', grad: 1 },
  { id: 202, cat: 'desserts', name: 'МОРОЖЕННОЕ ШОКОЛАДНОЕ', desc: '', price: 250, image: 'imageswebp/msh250.webp', emoji: '🍨', grad: 2 },

  // ==================== НАПИТКИ С ХОЛОДИЛЬНИКА ====================
  { id: 203, cat: 'drinks', name: 'КОЛА СТЕКЛО', desc: '', price: 120, image: 'imageswebp/ks120.webp', emoji: '🥤', grad: 1 },
  { id: 204, cat: 'drinks', name: 'КОЛА СТЕКЛО ЗЕРО', desc: '', price: 120, image: 'imageswebp/ksz120.webp', emoji: '🥤', grad: 2 },
  { id: 205, cat: 'drinks', name: 'ПЕПСИ ЖБ', desc: '', price: 100, image: 'imageswebp/pzh100.webp', emoji: '🥤', grad: 3 },
  { id: 206, cat: 'drinks', name: 'КОЛА ЖБ', desc: '', price: 100, image: 'imageswebp/kzh100.webp', emoji: '🥤', grad: 4 },
  { id: 207, cat: 'drinks', name: 'ЛИПТОН ЗЕЛЕНЫЙ', desc: '', price: 100, image: 'imageswebp/lz100.webp', emoji: '🧃', grad: 5 },
  { id: 208, cat: 'drinks', name: 'ЛИПТОН ПЕРСИК', desc: '', price: 100, image: 'imageswebp/lp100.webp', emoji: '🧃', grad: 6 },
  { id: 209, cat: 'drinks', name: 'КИНЗА ВИШНЯ', desc: '', price: 130, image: 'imageswebp/kv130.webp', emoji: '🧃', grad: 7 },
  { id: 210, cat: 'drinks', name: 'КИНЗА ORANGE', desc: '', price: 130, image: 'imageswebp/ko130.webp', emoji: '🧃', grad: 8 },
  { id: 211, cat: 'drinks', name: 'МОХИТО ЛАЙМ ЖБ', desc: '', price: 120, image: 'imageswebp/mlzh120.webp', emoji: '🥤', grad: 1 },
  { id: 212, cat: 'drinks', name: 'СОК ВИКО', desc: '', image: 'imageswebp/svv200m200p200ya200.webp', variants: [
    { name: 'Вишня', price: 200 },
    { name: 'Мультифрукт', price: 200 },
    { name: 'Персик', price: 200 },
    { name: 'Яблоко', price: 200 }
  ], emoji: '🧃', grad: 2 },
  { id: 213, cat: 'drinks', name: 'ЧЕРНЫЙ ЧАЙ БУТЫЛКА', desc: '', price: 100, image: 'imageswebp/chchb100.webp', emoji: '🧊', grad: 3 },
  { id: 214, cat: 'drinks', name: 'ВОДА', desc: '', price: 40, image: 'imageswebp/v40.webp', emoji: '💧', grad: 4 },
  { id: 215, cat: 'drinks', name: 'ДЕТСКИЙ СОК', desc: '', price: 60, image: 'imageswebp/ds60.webp', emoji: '🧃', grad: 5 }
];
