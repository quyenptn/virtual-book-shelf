const drinkNames = { vi: ['Bàn trà', 'Bàn cà phê', 'Bàn thư'], en: ['Tea table', 'Coffee table', 'Letter table'] };
const drinkTypes = ['tea', 'coffee', 'letter'];
const letterFormCopy = {
  vi: { intro: 'Để lại đôi lời nhắn, hoặc giới thiệu cho mình một cuốn sách nhé!', open: 'Mở biểu mẫu Google', note: 'Biểu mẫu sẽ mở trong thẻ mới.' },
  en: { intro: 'Leave a note or recommend a book!', open: 'Open Google Form', note: 'The form will open in a new tab.' },
};
const drinkStories = {
  vi: [
    `<h3>Lịch sử & nguồn gốc</h3><p>Trà có lịch sử lâu đời, bắt nguồn từ Trung Quốc từ hàng nghìn năm trước rồi dần lan sang Nhật Bản, Hàn Quốc, Đông Nam Á, Trung Đông và châu Âu qua giao thương. Phần lớn các loại trà truyền thống đều làm từ cây <em>Camellia sinensis</em>, nhưng khác nhau ở cách chế biến và mức độ oxy hóa.</p><h3>Các loại trà</h3><dl><dt>Trà xanh</dt><dd>Gần như không oxy hóa, phổ biến ở Trung Quốc và Nhật Bản.</dd><dt>Trà trắng</dt><dd>Chế biến tối giản, thường dùng búp và lá non.</dd><dt>Trà ô long</dt><dd>Được oxy hóa một phần, nằm giữa trà xanh và trà đen.</dd><dt>Trà đen</dt><dd>Oxy hóa hoàn toàn, trở nên đặc biệt phổ biến ở Anh và châu Âu từ thế kỷ XVII–XIX.</dd><dt>Trà Phổ Nhĩ (Pu-erh)</dt><dd>Của Vân Nam, trải qua quá trình lên men và ủ lâu.</dd><dt>Trà thảo mộc</dt><dd>Các loại như trà hoa cúc, bạc hà hay rooibos thường được gọi là “trà thảo mộc”, nhưng về mặt thực vật học không phải trà thật vì không làm từ <em>Camellia sinensis</em>.</dd></dl>`,
    `<h3>Giống cà phê & cách pha</h3><p>Cà phê chủ yếu có <strong>hai giống thương mại lớn là Arabica và Robusta</strong>. <strong>Arabica</strong> thường thơm, vị thanh, chua rõ và ít đắng hơn; <strong>Robusta</strong> nhiều caffeine hơn, đậm, đắng và có body nặng hơn. Ngoài ra còn có <strong>Liberica</strong> với hương gỗ/trái cây khá đặc biệt và <strong>Excelsa</strong>, thường được dùng để tạo thêm độ phức tạp khi phối trộn.</p><p>Về cách pha, những kiểu phổ biến gồm <strong>espresso, americano, cappuccino, latte, flat white, filter/pour-over, French press, cold brew</strong> và <strong>cà phê phin Việt Nam</strong>.</p><h3>Độ cao & hương vị</h3><p>Một fact quan trọng là <strong>độ cao nơi trồng ảnh hưởng rất mạnh đến hương vị</strong>. Ở vùng cao, nhiệt độ thấp khiến quả cà phê chín chậm hơn, hạt thường đặc hơn và có nhiều hợp chất hương phức tạp; vì vậy cà phê vùng cao, đặc biệt Arabica, thường có <strong>độ chua sáng (acidity), hương hoa và trái cây rõ hơn</strong>. Ví dụ, cà phê Ethiopia hoặc Kenya trồng ở khoảng <strong>1.500–2.200 m</strong> thường có acidity cao hơn cà phê trồng ở vùng thấp.</p><p>Tuy nhiên, <strong>vĩ độ và độ cao tương tác với nhau</strong>: càng gần xích đạo thì thường phải trồng ở độ cao lớn hơn để có khí hậu mát phù hợp cho Arabica; càng xa xích đạo thì có thể trồng ở độ cao thấp hơn.</p><h3>Sơ chế & rang</h3><p>Ngoài độ cao, hương vị còn phụ thuộc vào <strong>giống cây, đất, lượng mưa, nhiệt độ, cách sơ chế và rang</strong>. Sơ chế <strong>washed</strong> thường cho vị sạch và acidity rõ; <strong>natural/dry</strong> thường ngọt, nhiều hương trái cây và đôi khi có cảm giác lên men; <strong>honey process</strong> nằm giữa hai kiểu này.</p><p>Rang <strong>light roast</strong> giữ được acidity và đặc điểm nguồn gốc nhiều hơn, còn <strong>dark roast</strong> làm giảm cảm nhận acidity và tăng vị đắng, caramel, chocolate hoặc smoky.</p><h3>Acidity không chỉ là vị chua</h3><p>Một điều thú vị nữa là từ “<strong>acidity</strong>” trong cà phê không đơn giản có nghĩa là “chua khó chịu”: trong specialty coffee, nó thường chỉ cảm giác tươi sáng như <strong>cam, chanh, táo, berry hoặc rượu vang</strong>.</p>`,
  ],
  en: [
    `<h3>History & origins</h3><p>Tea originated in China thousands of years ago, spreading through trade to Japan, Korea, Southeast Asia, the Middle East and Europe. Most traditional teas come from <em>Camellia sinensis</em>, differing in processing and oxidation.</p><h3>Types of tea</h3><dl><dt>Green tea</dt><dd>Almost unoxidized; popular in China and Japan.</dd><dt>White tea</dt><dd>Minimally processed, often using buds and young leaves.</dd><dt>Oolong</dt><dd>Partially oxidized, between green and black tea.</dd><dt>Black tea</dt><dd>Fully oxidized; especially popular in Britain and Europe from the seventeenth to nineteenth centuries.</dd><dt>Pu-erh</dt><dd>From Yunnan, undergoing fermentation and extended aging.</dd><dt>Herbal infusions</dt><dd>Chamomile, mint and rooibos are not botanically true teas because they do not come from <em>Camellia sinensis</em>.</dd></dl>`,
    `<h3>Varieties & brewing</h3><p>The two major commercial varieties are <strong>Arabica and Robusta</strong>. Arabica is typically fragrant, lighter, more acidic and less bitter. Robusta has more caffeine, stronger bitterness and a heavier body. <strong>Liberica</strong> has distinctive woody/fruity aromas; <strong>Excelsa</strong> adds complexity to blends.</p><p>Popular preparations include <strong>espresso, americano, cappuccino, latte, flat white, filter/pour-over, French press, cold brew</strong> and the <strong>Vietnamese phin</strong>.</p><h3>Altitude & flavor</h3><p><strong>Growing altitude strongly influences flavor.</strong> Cooler temperatures at higher elevations slow ripening. Beans are often denser and develop more complex aromatic compounds. High-altitude coffee, especially Arabica, often has brighter acidity and clearer floral and fruity notes. Ethiopian or Kenyan coffees grown at approximately <strong>1,500–2,200 m</strong> often have more acidity than lower-altitude coffees.</p><p><strong>Latitude and altitude interact:</strong> near the equator, Arabica generally needs higher elevations for a suitably cool climate; farther away, it may grow at lower elevations.</p><h3>Processing & roasting</h3><p>Flavor also depends on <strong>variety, soil, rainfall, temperature, processing and roasting</strong>. <strong>Washed</strong> processing often produces clean flavors and clear acidity; <strong>natural/dry</strong> processing often brings sweetness, fruitiness and sometimes fermented notes; <strong>honey processing</strong> falls between these styles.</p><p><strong>Light roasting</strong> preserves more acidity and origin character. <strong>Dark roasting</strong> reduces perceived acidity and increases bitterness and caramel, chocolate or smoky notes.</p><h3>What acidity means</h3><p>In specialty coffee, acidity does not simply mean unpleasant sourness: it often describes a bright, fresh sensation reminiscent of <strong>oranges, lemons, apples, berries or wine</strong>.</p>`,
  ],
};
const coffeeDetails = {
  vi: [
    { name: 'Arabica', description: 'Một trong hai giống cà phê thương mại phổ biến nhất. Arabica thường có hương thơm thanh, độ chua sáng và vị đắng dịu hơn Robusta. Độ cao, giống cây và cách sơ chế tiếp tục tạo nên khác biệt giữa từng vùng trồng.' },
    { name: 'Robusta', description: 'Một giống cà phê thương mại quan trọng, thường có vị đậm, đắng rõ và body dày hơn Arabica. Hàm lượng caffeine của Robusta thường cao hơn. Giống này góp mặt trong nhiều loại cà phê pha trộn và espresso.' },
    { name: 'Liberica', description: 'Một giống cà phê ít phổ biến hơn Arabica và Robusta. Hạt Liberica lớn, không đều và thường được mô tả có hương gỗ cùng trái cây. Cây có khả năng thích nghi với điều kiện nóng ẩm.' },
    { name: 'Excelsa', description: 'Excelsa thường được xem là một nhóm thuộc loài Liberica. Hương vị của nó có thể tạo nét trái cây và độ phức hợp cho cà phê phối trộn. Sản lượng thương mại nhỏ hơn nhiều so với Arabica và Robusta.' },
  ],
  en: [
    { name: 'Arabica', description: 'One of the two most common commercial coffee varieties. Arabica is often fragrant, bright in acidity and less bitter than Robusta. Elevation, cultivar and processing create further differences between growing regions.' },
    { name: 'Robusta', description: 'A major commercial coffee variety, often fuller-bodied and more bitter than Arabica. Robusta typically contains more caffeine. It appears in many blends and espresso coffees.' },
    { name: 'Liberica', description: 'A less common coffee variety than Arabica or Robusta. Liberica beans are large and irregular, and are often described as woody and fruity. The plant can adapt to hot, humid conditions.' },
    { name: 'Excelsa', description: 'Excelsa is often treated as a group within the Liberica species. Its flavor can bring fruity character and complexity to blends. Commercial production is much smaller than that of Arabica and Robusta.' },
  ],
};
const drinkDialog = document.querySelector('#drink-dialog');
const teaDetails = Object.fromEntries(Object.entries(drinkStories).map(([language, stories]) => {
  const document = new DOMParser().parseFromString(stories[0], 'text/html');
  return [language, [...document.querySelectorAll('dt')].map(title => ({ name: title.textContent, description: title.nextElementSibling.innerHTML }))];
}));
const teaHistories = {
  vi: [
    'Trà xanh có nguồn gốc từ Trung Quốc, nơi văn hóa uống trà phát triển qua nhiều thế kỷ. Dưới thời Đường, trà thường được hấp và ép thành bánh, khác với nhiều dạng trà lá rời ngày nay. Các nhà sư góp phần đưa văn hóa trà từ Trung Quốc sang Nhật Bản. Lá được làm nóng sớm sau khi hái để hạn chế hoạt động của enzyme gây oxy hóa. Nhiều loại trà xanh Nhật Bản dùng phương pháp hấp, còn nhiều loại của Trung Quốc được sao trong chảo. Matcha là trà xanh nghiền mịn, nên người uống dùng cả phần bột lá thay vì chỉ nước ngâm.',
    'Trà trắng gắn liền với tỉnh Phúc Kiến của Trung Quốc, đặc biệt là những vùng như Phúc Đỉnh và Chính Hòa. Tên gọi thường liên quan đến lớp lông trắng bạc phủ trên búp non. Không phải mọi loại trà trắng đều chỉ gồm búp, vì một số loại dùng cả lá. Quy trình thường dựa vào làm héo và sấy khô, với ít công đoạn hơn nhiều nhóm trà khác. Trong lúc làm héo, lá vẫn có thể oxy hóa nhẹ, nên trà trắng không hoàn toàn không oxy hóa. Trà Ngân Châm nổi tiếng với những búp dài phủ lông bạc, còn Bạch Mẫu Đơn thường kết hợp búp và lá non.',
    'Trà ô long phát triển trong truyền thống làm trà của Phúc Kiến, Trung Quốc. Sau đó, kỹ thuật này lan đến những vùng khác và trở thành một nét nổi bật của văn hóa trà Đài Loan. Tên ô long thường được dịch là rồng đen. Người làm trà kiểm soát quá trình làm héo, đảo lá và oxy hóa trước khi dùng nhiệt để dừng biến đổi. Mức oxy hóa và cách rang rất khác nhau, nên ô long có thể mang hương hoa nhẹ hoặc hương rang sâu. Một số loại được cuộn thành viên, trong khi những loại khác giữ hình lá dài xoắn.',
    'Trà đen phát triển ở Trung Quốc rồi lan rộng qua các tuyến thương mại quốc tế. Tại Trung Quốc, nhóm này được gọi là hồng trà, theo màu nước pha chứ không phải màu lá khô. Trà trở nên quen thuộc ở Anh từ thế kỷ XVII và phổ biến rộng hơn trong những thế kỷ tiếp theo. Việc trồng trà quy mô lớn ở Ấn Độ và Sri Lanka trong thế kỷ XIX góp phần mở rộng nguồn cung. Lá thường được làm héo, vò, oxy hóa rồi sấy khô để tạo màu và hương đặc trưng. Assam, Darjeeling và Ceylon là những tên nguồn gốc nổi tiếng, nhưng hương vị còn thay đổi theo mùa hái và cách chế biến.',
    'Trà Phổ Nhĩ gắn với tỉnh Vân Nam, Trung Quốc, và lấy tên từ địa danh Phổ Nhĩ. Trà từ vùng này từng được vận chuyển qua những mạng lưới giao thương thường gọi là con đường Trà Mã. Ép trà thành bánh giúp việc đóng gói và vận chuyển thuận tiện hơn. Phổ Nhĩ sống biến đổi dần trong quá trình lưu trữ, với sự tham gia của các phản ứng hóa học và vi sinh vật. Phổ Nhĩ chín dùng kỹ thuật ủ đống ẩm được phát triển trong thập niên 1970 để thúc đẩy quá trình biến đổi. Tuổi trà không tự bảo đảm chất lượng, vì nguyên liệu và điều kiện bảo quản cũng rất quan trọng.',
    'Việc ngâm lá, hoa và rễ cây trong nước đã xuất hiện trong nhiều nền văn hóa từ lâu. Hoa cúc và bạc hà có lịch sử sử dụng lâu đời ở những vùng quanh Địa Trung Hải và Trung Đông. Rooibos gắn với vùng Cederberg của Nam Phi và được làm từ cây Aspalathus linearis. Rooibos đỏ trải qua oxy hóa trong chế biến, còn rooibos xanh được xử lý để hạn chế quá trình này. Hoa cúc, bạc hà và rooibos nguyên chất tự nhiên không có caffeine, nhưng hỗn hợp có trà thật có thể chứa caffeine. Tên gọi trà thảo mộc bao phủ rất nhiều loài cây, nên độ an toàn và cách dùng phải được xem xét theo từng thành phần.',
  ],
  en: [
    'Green tea originated in China, where tea culture developed over many centuries. During the Tang dynasty, tea was often steamed and pressed into cakes, unlike many loose-leaf forms today. Buddhist monks helped bring Chinese tea culture to Japan. Leaves are heated early after picking to limit the enzymes responsible for oxidation. Many Japanese green teas are steamed, while many Chinese varieties are pan-fired. Matcha is finely ground green tea, so the drinker consumes the powdered leaf rather than only an infusion.',
    'White tea is closely associated with Fujian province in China, particularly Fuding and Zhenghe. Its name often refers to the silvery hairs covering young buds. Not every white tea consists only of buds, as some varieties also contain leaves. Processing usually relies on withering and drying, with fewer steps than many other tea categories. Some oxidation can occur during withering, so white tea is not entirely unoxidized. Silver Needle is known for its long, downy buds, while White Peony usually combines buds and young leaves.',
    'Oolong developed within the tea-making traditions of Fujian in China. Its techniques later spread elsewhere and became an important part of Taiwanese tea culture. The name oolong is commonly translated as black dragon. Producers control withering, agitation and oxidation before applying heat to stop the changes. Oxidation levels and roasting styles vary widely, producing anything from light floral aromas to deeper roasted notes. Some varieties are rolled into balls, while others retain long, twisted leaves.',
    'Black tea developed in China and spread through international trade routes. In China it is called red tea, referring to the infusion rather than the dry leaves. Tea became familiar in Britain during the seventeenth century and more widespread in the following centuries. Large-scale cultivation in India and Sri Lanka during the nineteenth century expanded supplies. Leaves are usually withered, rolled, oxidized and dried to develop their characteristic color and aroma. Assam, Darjeeling and Ceylon are famous origin names, but flavor also varies with harvest season and processing.',
    'Pu-erh is associated with Yunnan province in China and takes its name from the place called Pu-erh. Tea from this region traveled along trade networks commonly known as the Tea Horse Road. Pressing tea into cakes made packing and transport more convenient. Raw pu-erh changes gradually during storage through chemical reactions and microbial activity. Ripe pu-erh uses a moist piling technique developed in the 1970s to accelerate these transformations. Age alone does not guarantee quality, because the raw material and storage conditions also matter.',
    'Infusing leaves, flowers and roots in water has a long history across many cultures. Chamomile and mint have longstanding traditions of use around the Mediterranean and the Middle East. Rooibos is associated with the Cederberg region of South Africa and comes from Aspalathus linearis. Red rooibos undergoes oxidation during processing, while green rooibos is processed to limit it. Pure chamomile, mint and rooibos are naturally caffeine-free, but blends containing true tea can contain caffeine. Herbal tea covers many different plants, so safety and appropriate use depend on the individual ingredients.',
  ],
};
const teaSources = [
  [{ name: 'Britannica', url: 'https://www.britannica.com/topic/tea-beverage' }],
  [{ name: 'Britannica', url: 'https://www.britannica.com/topic/tea-beverage' }],
  [{ name: 'Britannica', url: 'https://www.britannica.com/topic/tea-beverage' }],
  [{ name: 'Britannica', url: 'https://www.britannica.com/topic/tea-beverage' }],
  [{ name: 'Puer Tea (UW Press)', url: 'https://uwapress.uw.edu/book/9780295993232/puer-tea/' }],
  [
    { name: 'UKTIA', url: 'https://www.tea.co.uk/about/infusions' },
    { name: 'NIH: Chamomile', url: 'https://www.nccih.nih.gov/health/chamomile' },
    { name: 'NIH: Peppermint', url: 'https://www.nccih.nih.gov/health/peppermint-oil' },
  ],
];
let selectedDrink = null;
let selectedTea = null;
let selectedCoffee = null;
function renderDrink() {
  if (selectedCoffee !== null) {
    const coffee = coffeeDetails[uiLanguage][selectedCoffee];
    document.querySelector('#drink-content').innerHTML = `<h2 id="drink-title">${coffee.name}</h2><div class="drink-copy" lang="${uiLanguage}"><p>${coffee.description}</p><small class="drink-source">${uiLanguage === 'en' ? 'Reference' : 'Nguồn tham khảo'}: <a href="https://www.britannica.com/topic/coffee" target="_blank" rel="noopener noreferrer">Britannica</a></small></div>`;
    return;
  }
  if (selectedTea !== null) {
    const tea = teaDetails[uiLanguage][selectedTea];
    const sources = teaSources[selectedTea].map(source => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.name}</a>`).join(' · ');
    document.querySelector('#drink-content').innerHTML = `<h2 id="drink-title">${tea.name}</h2><div class="drink-copy" lang="${uiLanguage}"><p>${tea.description}</p><p>${teaHistories[uiLanguage][selectedTea]}</p><small class="drink-source">${uiLanguage === 'en' ? 'Reference' : 'Nguồn tham khảo'}: ${sources}</small></div>`;
    return;
  }
  if (selectedDrink === null) return;
  if (drinkTypes[selectedDrink] === 'letter') {
    const copy = letterFormCopy[uiLanguage];
    document.querySelector('#drink-content').innerHTML = `<h2 id="drink-title">${drinkNames[uiLanguage][selectedDrink]}</h2><div class="drink-copy" lang="${uiLanguage}"><p>${copy.intro}</p><a class="letter-form-link" href="https://forms.gle/GMP1oha2SUt8xXtg6" target="_blank" rel="noopener noreferrer">${copy.open}</a><small class="letter-note">${copy.note}</small></div>`;
    return;
  }
  document.querySelector('#drink-content').innerHTML = `<h2 id="drink-title">${drinkNames[uiLanguage][selectedDrink]}</h2><div class="drink-copy" lang="${uiLanguage}">${drinkStories[uiLanguage][selectedDrink]}</div>`;
}
function refreshDrinks() {
  const english = uiLanguage === 'en';
  document.querySelector('#room-nav').textContent = english ? 'The room' : 'Phòng đọc sách';
  document.querySelector('#drinks-nav').textContent = english ? 'Tea & coffee' : 'Phòng trà & cà phê';
  document.querySelector('#drinks-title').textContent = english ? 'Tea & coffee room' : 'Phòng trà & cà phê';
  document.querySelector('#drinks-eyebrow').textContent = english ? 'A SIP, A STORY' : 'MỘT NGỤM, MỘT CÂU CHUYỆN';
  document.querySelectorAll('[data-drink-label]').forEach(label => { label.textContent = drinkNames[uiLanguage][drinkTypes.indexOf(label.dataset.drinkLabel)]; });
  document.querySelectorAll('[data-tea]').forEach(button => {
    const name = teaDetails[uiLanguage][Number(button.dataset.tea)].name;
    button.title = name;
    button.querySelector('.tea-name').textContent = name;
  });
  document.querySelectorAll('[data-coffee]').forEach(button => {
    const name = coffeeDetails[uiLanguage][Number(button.dataset.coffee)].name;
    button.title = name;
    button.querySelector('.coffee-name').textContent = name;
  });
  const close = document.querySelector('#close-drink');
  close.title = english ? 'Close' : 'Đóng';
  close.setAttribute('aria-label', close.title);
  renderDrink();
}
document.querySelectorAll('[data-drink]').forEach(button => button.addEventListener('click', () => {
  selectedTea = null;
  selectedCoffee = null;
  selectedDrink = drinkTypes.indexOf(button.dataset.drink);
  renderDrink();
  drinkDialog.showModal();
  document.body.style.overflow = 'hidden';
}));
document.querySelectorAll('[data-tea]').forEach(button => button.addEventListener('click', () => {
  selectedDrink = null;
  selectedCoffee = null;
  selectedTea = Number(button.dataset.tea);
  renderDrink();
  drinkDialog.showModal();
  document.body.style.overflow = 'hidden';
}));
document.querySelectorAll('[data-coffee]').forEach(button => button.addEventListener('click', () => {
  selectedDrink = null;
  selectedTea = null;
  selectedCoffee = Number(button.dataset.coffee);
  renderDrink();
  drinkDialog.showModal();
  document.body.style.overflow = 'hidden';
}));
document.querySelector('#close-drink').addEventListener('click', () => drinkDialog.close());
drinkDialog.addEventListener('close', () => { selectedDrink = null; selectedTea = null; selectedCoffee = null; document.body.style.overflow = ''; });
drinkDialog.addEventListener('click', event => {
  if (event.target !== drinkDialog) return;
  const bounds = drinkDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) drinkDialog.close();
});
document.addEventListener('languagechange', refreshDrinks);
refreshDrinks();