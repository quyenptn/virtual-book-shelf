let uiLanguage = 'vi';
try {
  if (localStorage.getItem('literati-language') === 'en') uiLanguage = 'en';
} catch {}

const englishUI = {
  'Văn học': 'Literature',
  'Phát triển bản thân': 'Personal growth',
  'Nghệ thuật & sáng tạo': 'Art & creativity',
  'Đang đọc': 'Reading',
  'Đã đọc': 'Finished',
  'Sẽ đọc hoặc đọc lại': 'To Read or Reread',
  'Bật đèn đứng': 'Turn on floor lamp',
  'Tắt đèn đứng': 'Turn off floor lamp',
  'Muốn đọc': 'Want to read',
  'Muốn đọc và đang bỏ dở': 'Want to read & paused',
  'Những câu chuyện còn dang dở': 'Stories still unfolding',
  'Những thế giới đã ghé qua': 'Worlds you have visited',
  'Đã đọc trong năm nay': 'Finished this year',
  'Những cuộc hẹn trên trang giấy': 'Your next adventures',
  'cuốn sách': 'books',
  'Xem tất cả': 'View all',
  'Xem thêm': 'Show more',
  'Tất cả': 'All books',
  'Lọc theo kệ sách': 'Filter by reading shelf',
  'Xem': 'View',
  'Xem chi tiết': 'View details for',
  'Bìa sách': 'Book cover:',
  'Lưu': 'Save',
  'Bỏ lưu': 'Unsave',
  'Lưu sách': 'Save book',
  'Góc sách của riêng bạn.': 'Your own little bookshelf.',
  'Chọn một cuốn, mở một thế giới.': 'Pick a book. Open a world.',
  'NHỮNG CÂU CHUYỆN BẠN MUỐN GIỮ LẠI': 'STORIES YOU WANT TO KEEP',
  'NHỮNG NGƯỜI BẠN TRÊN KỆ': 'FRIENDS ON YOUR SHELVES',
  'Góc sách đang chờ bạn.': 'Your bookshelf is waiting.',
  'Chưa tìm thấy cuốn sách nào.': 'No books found just yet.',
  'Những cuốn bạn lưu sẽ ở đây, chờ lần ghé thăm tiếp theo.': 'Your saved books will be here for your next visit.',
  'Thử một tên sách hoặc tác giả khác nhé.': 'Try another book title or author.',
  'Đã cập nhật trong phiên này. Trình duyệt chưa cho phép lưu lâu dài.': 'Updated for this visit. Your browser does not allow permanent storage.',
  'Đã bỏ sách khỏi góc riêng của bạn.': 'Removed from your saved books.',
  'Đã lưu vào góc sách của bạn.': 'Added to your saved books.',
  'Đã lưu vào góc sách': 'Saved to your bookshelf',
  'Lưu vào góc sách': 'Save to your bookshelf',
  'Xuất bản lần đầu': 'First published',
  'Trường phái': 'Literary movement',
  'Chủ nghĩa siêu nghiệm': 'Transcendentalism',
  'Chủ nghĩa hiện thực': 'Realism',
  'Chủ nghĩa hiện đại': 'Modernism',
  'Gắn với truyền thống hiện thực': 'Associated with the realist tradition',
  'Chủ nghĩa hiện đại; gắn với văn học tân hiện thực Ý': 'Modernism; associated with Italian neorealist literature',
  'Chủ nghĩa lãng mạn và chủ nghĩa tình cảm': 'Romanticism and sentimentalism',
  'Chủ nghĩa hiện thực tâm lý': 'Psychological realism',
  'Văn học hậu thuộc địa; ảnh hưởng hiện thực huyền ảo': 'Postcolonial literature; influences of magical realism',
  'Không gắn với một trường phái cụ thể': 'Not associated with a specific literary movement',
  'Thể loại': 'Genres',
  'Tự truyện': 'Autobiography',
  'Hồi ký': 'Memoir',
  'Viết về thiên nhiên': 'Nature writing',
  'Tiểu luận triết học': 'Philosophical essays',
  'Tiểu thuyết': 'Novel',
  'Truyện vừa': 'Novella',
  'Du ký': 'Travel writing',
  'Tùy bút': 'Zuihitsu (miscellaneous essays)',
  'Ghi chép cá nhân': 'Personal writings',
  'Luận thuyết chính trị': 'Political treatise',
  'Phi hư cấu': 'Non-fiction',
  'Văn học thời Heian': 'Heian-period literature',
  'Biên soạn': 'Composed',
  'Khoảng năm 1000': 'Around 1000',
  'Đầu thế kỷ XI': 'Early 11th century',
  'Nhân học': 'Anthropology',
  'Lịch sử': 'History',
  'Nhật ký': 'Diaries',
  'Ngôn ngữ học': 'Linguistics',
  'Phê bình văn hóa': 'Cultural criticism',
  'trang': 'pages',
  'Câu chuyện bên trong': 'Inside the story',
  'Cuốn sách này dành cho bạn khi…': 'This book might be for you if…',
  'Kệ sách của bạn': 'Your reading shelf',
  'Tóm tắt biên soạn ngắn gọn, không thay thế tác phẩm. *Số trang theo một ấn bản tham khảo; bìa có thể là ấn bản tiếng Anh.': 'Brief editorial summaries are not a substitute for the book. *Page counts refer to a sample edition; covers may show an English edition.',
  'Mở cửa sổ đón nắng': 'Open the window for some sunshine',
  'Đóng cửa sổ': 'Close the window',
  'Miu đang nằm ngủ, bấm để vuốt ve': 'Miu is sleeping. Click to pet her.',
  'Miu đang ngủ · Bấm để vuốt ve': 'Miu is sleeping · Click to pet',
  'Miu đang cười, bấm để vuốt ve thêm': 'Miu is smiling. Click to pet her again.',
  'Miu vui quá · Meow meow!': 'Miu is happy · Meow meow!',
  'Miu thích được đọc sách cùng bạn.': 'Miu loves reading with you.',
  'Đã chuyển sách sang kệ': 'Moved to shelf:',
  'Đã chuyển kệ trong phiên này; trình duyệt không cho phép lưu lâu dài.': 'Shelf updated for this visit; your browser does not allow permanent storage.',
  'Chưa phát được tiếng Miu. Bạn thử bấm lại nhé.': 'Miu could not meow just yet. Please try again.',
  'Phát nhạc đọc sách': 'Play reading music',
  'Phát nhạc đọc sách ngẫu nhiên': 'Play random reading music',
  'Tạm dừng': 'Pause',
  'Tạm dừng nhạc': 'Pause music',
  'Tiếp tục phát nhạc': 'Resume music',
  'ĐANG PHÁT': 'NOW PLAYING',
  'ĐÃ TẠM DỪNG': 'PAUSED',
  'Chưa bật được âm thanh. Bạn thử bấm loa lại nhé.': 'Audio could not start. Please click the speaker again.',
  'Nắng trên trang sách': 'Sunlight on the pages',
  'Mưa bên cửa sổ': 'Rain by the window',
  'Chiều lặng cùng Miu': 'A quiet afternoon with Miu',
};

function ui(text) {
  return uiLanguage === 'en' ? englishUI[text] ?? text : text;
}

function uiBookCount(count) {
  return uiLanguage === 'en' ? `${count} ${count === 1 ? 'book' : 'books'}` : `${count} cuốn sách`;
}

const staticUI = [
  ['title', document.querySelector('#drinks-room') ? 'Literati — Tea & coffee room' : 'Literati — A room of stories', 'textContent'],
  ['meta[name="description"]', 'Literati: a cozy room to discover books, save favorites, and keep track of your reading.', 'content'],
  ['.site-header .brand', 'Literati, home', 'aria-label'],
  ['.site-header nav', 'Main navigation', 'aria-label'],
  ['#room-nav', 'The room', 'textContent'],
  ['#drinks-nav', 'Tea & coffee', 'textContent'],
  ['#drinks-intro', 'Slow down with a cup of tea or coffee and explore the flavors and places behind each one. A little corner for a few stories, and for lingering a little longer.', 'textContent'],
  ['#flower-print', 'Touch the flower in the picture', 'aria-label'],
  ['#flower-print', 'Touch the flower in the picture', 'title'],
  ['#saved-label', 'Saved books', 'textContent'],
  ['#search-toggle', 'Find a book', 'aria-label'],
  ['#search-toggle', 'Find a book', 'title'],
  ['.intro .eyebrow', '<span></span> A QUIET MOMENT JUST FOR YOU', 'innerHTML'],
  ['#page-title', 'Welcome to <em>Literati</em>! <br />', 'innerHTML'],
  ['.intro-copy', '<br class="mobile-break" /> Which shelf will you visit today?', 'innerHTML'],
  ['.reading-room', 'A room with currently reading, finished, and want-to-read shelves', 'aria-label'],
  ['#cat-message', 'Pet me, meow meow!', 'textContent'],
  ['#music-player', 'Reading music', 'aria-label'],
  ['.music-track small', 'Original ambient melodies · Literati', 'textContent'],
  ['#music-next', 'Play another random track', 'aria-label'],
  ['#music-next', 'Play another random track', 'title'],
  ['.music-volume', 'Volume', 'title'],
  ['#music-volume', 'Music volume', 'aria-label'],
  ['.daily-note', 'Today’s quote', 'aria-label'],
  ['.daily-note .eyebrow', 'QUOTE OF THE DAY', 'textContent'],
  ['.daily-note .quote', '“Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth.”', 'textContent'],
  ['#daily-book', 'Meet this book <i data-lucide="arrow-right"></i>', 'innerHTML'],
  ['#search-input', 'A book, an author, or something on your mind…', 'placeholder'],
  ['#search-input', 'Search by book title or author', 'aria-label'],
  ['#clear-search', 'Clear search', 'aria-label'],
  ['#clear-search', 'Clear search', 'title'],
  ['#reset-filters', 'Back to all books <i data-lucide="arrow-right"></i>', 'innerHTML'],
  ['footer p', 'A little place. Big stories.', 'textContent'],
  ['footer > span', 'Slow down, and read a little.', 'textContent'],
  ['#close-dialog', 'Close details', 'aria-label'],
  ['#close-dialog', 'Close', 'title'],
].flatMap(([selector, english, field]) => {
  const element = document.querySelector(selector);
  if (!element) return [];
  const property = ['innerHTML', 'textContent'].includes(field);
  return [{ element, english, field, property, vietnamese: property ? element[field] : element.getAttribute(field) }];
});

function applyStaticLanguage() {
  document.documentElement.lang = uiLanguage;
  for (const item of staticUI) {
    const value = uiLanguage === 'en' ? item.english : item.vietnamese;
    if (item.property) item.element[item.field] = value;
    else item.element.setAttribute(item.field, value);
  }
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === uiLanguage));
  });
  if (globalThis.lucide) globalThis.lucide.createIcons();
}

document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
  if (button.dataset.language === uiLanguage) return;
  uiLanguage = button.dataset.language;
  try { localStorage.setItem('literati-language', uiLanguage); } catch {}
  applyStaticLanguage();
  document.dispatchEvent(new Event('languagechange'));
}));
applyStaticLanguage();