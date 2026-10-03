const categories = {
  literature: { name: 'Văn học', subtitle: 'Những thế giới giữa trang giấy', background: '#f3e4e3' },
  growth: { name: 'Phát triển bản thân', subtitle: 'Mỗi ngày, một chút tốt hơn', background: '#e9ecdf' },
  art: { name: 'Nghệ thuật & sáng tạo', subtitle: 'Cho những ý tưởng nở hoa', background: '#e5ebee' },
};

const readingStatuses = {
  reading: { name: 'Đang đọc', subtitle: 'Những câu chuyện còn dang dở', color: 'pink' },
  finished: { name: 'Đã đọc', subtitle: 'Đã đọc trong năm nay', color: 'sage' },
  wishlist: { name: 'Sẽ đọc hoặc đọc lại', subtitle: 'Những cuộc hẹn trên trang giấy', color: 'blue' },
};

const literaryMovements = {
  'walk-woods': 'Chủ nghĩa hiện thực',
  'bell-jar': 'Bildungsroman',
  'little-women': 'Gắn với truyền thống hiện thực',
  'conversation-sicily': 'Chủ nghĩa hiện đại; gắn với văn học tân hiện thực Ý',
  'enchanted-april': 'Gắn với truyền thống hiện thực',
  'white-nights': 'Chủ nghĩa lãng mạn và chủ nghĩa tình cảm',
  'crime-punishment': 'Chủ nghĩa hiện thực tâm lý',
  'god-small-things': 'Văn học hậu thuộc địa; ảnh hưởng hiện thực huyền ảo',
};

const authorCountries = {
  'pillow-book': 'Nhật Bản', 'conversation-sicily': 'Ý', 'enchanted-april': 'Vương quốc Anh', 'walk-woods': 'Hoa Kỳ',
  'bell-jar': 'Hoa Kỳ', 'god-small-things': 'Ấn Độ', 'white-nights': 'Nga', 'crime-punishment': 'Nga',
  'on-earth': 'Hoa Kỳ', 'wedding-people': 'Hoa Kỳ', 'wretched-earth': 'Pháp', 'remarkably-bright-creatures': 'Hoa Kỳ',
  yellowface: 'Hoa Kỳ', 'convenience-store-woman': 'Nhật Bản', alchemist: 'Hoa Kỳ', 'portrait-artist': 'Ireland',
  'sweetness-power': 'Hoa Kỳ', 'tale-genji': 'Nhật Bản', 'nostalgie-heureuse': 'Bỉ', 'theo-golden': 'Hoa Kỳ',
  'new-grub-street': 'Vương quốc Anh', 'hyunam-bookshop': 'Hàn Quốc', 'martin-eden': 'Hoa Kỳ', 'kafka-diaries': 'Cộng hòa Séc',
  'history-drunkenness': 'Vương quốc Anh', 'salt-history': 'Hoa Kỳ', 'last-speakers': 'Hoa Kỳ', orientalism: 'Palestine',
  'purity-danger': 'Vương quốc Anh', 'madame-bovary': 'Pháp', stoner: 'Hoa Kỳ', 'remains-of-the-day': 'Vương quốc Anh',
  'book-of-disquiet': 'Bồ Đào Nha', 'master-and-margarita': 'Nga', 'the-door': 'Hungary',
  'small-things-like-these': 'Ireland', 'the-lonely-city': 'Vương quốc Anh', 'map-of-salt-and-stars': 'Hoa Kỳ',
};

const books = [
  { id: 'pillow-book', title: 'The Pillow Book', author: 'Sei Shōnagon', category: 'literature', initialStatus: 'finished', year: 'Khoảng năm 1000', yearLabel: 'Biên soạn', isbn: '9780140448061', color: '#a7b5be', genres: ['Tùy bút', 'Ghi chép cá nhân'], movement: 'Văn học thời Heian', tags: ['Nhật Bản', 'Quan sát', 'Cung đình'], summary: 'Sei Shōnagon ghi lại những quan sát, kỷ niệm và suy nghĩ về đời sống cung đình Nhật Bản thời Heian. Qua các câu chuyện ngắn và danh sách những điều đẹp đẽ, thú vị hay khó chịu, tác phẩm mang đến một góc nhìn sắc sảo, hóm hỉnh về thiên nhiên, con người và những chi tiết nhỏ của đời sống.', summaryEn: 'Sei Shōnagon records observations, memories, and reflections on life at the Japanese imperial court during the Heian period. Through brief anecdotes and lists of things she finds beautiful, delightful, or irritating, she offers a witty, perceptive view of nature, people, and the small details of everyday life.' },
  { id: 'little-prince', title: 'Hoàng tử bé', author: 'Antoine de Saint-Exupéry', category: 'literature', year: 1943, pages: 96, isbn: '9780156012195', color: '#a7b5be', tags: ['Tình bạn', 'Tuổi thơ', 'Yêu thương'], summary: 'Một phi công gặp hoàng tử bé giữa sa mạc. Qua những câu chuyện về các hành tinh, một bông hồng và một con cáo, cậu bé giúp người lớn nhìn lại tình yêu, tình bạn và những điều tưởng chừng rất nhỏ nhưng vô cùng quan trọng.', detail: 'Câu chuyện có thể đọc ở mọi lứa tuổi, mỗi lần lại gợi một suy nghĩ mới. Lối kể trong trẻo kết hợp những hình minh họa của tác giả tạo nên một tác phẩm vừa dịu dàng, vừa có chiều sâu.' },
  { id: 'norwegian-wood', title: 'Rừng Na Uy', author: 'Haruki Murakami', category: 'literature', year: 1987, pages: 296, isbn: '9780375704024', color: '#ad6e73', tags: ['Tuổi trẻ', 'Ký ức', 'Tình yêu'], summary: 'Một giai điệu đưa Toru Watanabe trở về những năm tháng sinh viên ở Tokyo. Giữa tình cảm dành cho Naoko và sự xuất hiện của Midori, anh đi qua những mất mát và lựa chọn để tìm cách tiếp tục sống.', detail: 'Tiểu thuyết mang giọng kể trầm lắng, tập trung vào cô đơn, tình yêu và những tổn thương của tuổi trẻ. Tác phẩm có chủ đề nhạy cảm về sức khỏe tinh thần và mất mát, phù hợp với độc giả trưởng thành.' },
  { id: 'little-women', title: 'Những người phụ nữ nhỏ bé', author: 'Louisa May Alcott', category: 'literature', year: 1868, pages: 449, isbn: '9780147514011', color: '#95a28b', tags: ['Gia đình', 'Trưởng thành', 'Kinh điển'], summary: 'Bốn chị em nhà March — Meg, Jo, Beth và Amy — lớn lên trong một gia đình không dư dả nhưng đầy yêu thương. Mỗi người có một tính cách, một ước mơ và một cách riêng để bước vào đời.', detail: 'Một tác phẩm kinh điển về tình thân, sự độc lập và việc tìm tiếng nói của chính mình. Những câu chuyện đời thường được kể với sự ấm áp, hóm hỉnh và thấu hiểu.' },
  { id: 'atomic-habits', title: 'Thói quen nguyên tử', author: 'James Clear', category: 'growth', year: 2018, pages: 320, isbn: '9780735211292', color: '#d2be95', tags: ['Thói quen', 'Thay đổi nhỏ', 'Thực hành'], summary: 'James Clear giải thích cách những hành động nhỏ, được lặp lại đều đặn, có thể tạo ra thay đổi lớn. Thay vì chỉ đặt mục tiêu, cuốn sách hướng người đọc đến việc thiết kế môi trường và hệ thống giúp thói quen tốt trở nên dễ thực hiện.', detail: 'Nội dung được tổ chức quanh bốn quy luật hình thành thói quen: làm cho nó rõ ràng, hấp dẫn, dễ dàng và thỏa mãn. Phù hợp với người muốn bắt đầu một nếp sống mới bằng những bước cụ thể.' },
  { id: 'ikigai', title: 'Ikigai', author: 'Héctor García & Francesc Miralles', category: 'growth', year: 2016, pages: 208, isbn: '9780143130727', color: '#8caeab', tags: ['Sống chậm', 'Ý nghĩa', 'Cân bằng'], summary: 'Từ những cuộc trò chuyện với người dân Okinawa, hai tác giả khám phá ikigai — lý do khiến mỗi người muốn thức dậy vào buổi sáng. Cuốn sách kết nối sự gắn bó với cộng đồng, vận động nhẹ nhàng và niềm vui trong những việc thường ngày.', detail: 'Một lời gợi mở về nhịp sống có ý nghĩa hơn, không phải công thức chắc chắn cho tuổi thọ. Phù hợp để đọc chậm, suy ngẫm và tìm ra những điều giản dị nuôi dưỡng mình.' },
  { id: 'essentialism', title: 'Nghệ thuật theo đuổi sự tối giản', author: 'Greg McKeown', category: 'growth', year: 2014, pages: 272, isbn: '9780804137386', color: '#b2ad98', tags: ['Ưu tiên', 'Tập trung', 'Lựa chọn'], summary: 'Không phải làm được nhiều việc hơn, mà là làm đúng những việc quan trọng. Greg McKeown đề xuất một cách tiếp cận giúp người đọc phân biệt điều thiết yếu, từ chối những cam kết không cần thiết và dành năng lượng cho điều thực sự có giá trị.', detail: 'Sách kết hợp các câu chuyện với những gợi ý thực hành trong công việc và đời sống. Đặc biệt phù hợp khi lịch trình của bạn đang quá đầy, nhưng cảm giác tiến bộ lại quá ít.' },
  { id: 'mindset', title: 'Tâm lý học thành công', author: 'Carol S. Dweck', category: 'growth', year: 2006, pages: 320, isbn: '9780345472328', color: '#839373', tags: ['Tư duy', 'Học hỏi', 'Phát triển'], summary: 'Carol Dweck trình bày sự khác biệt giữa tư duy cố định và tư duy phát triển. Cách ta nhìn nhận năng lực có thể ảnh hưởng đến việc đón nhận thử thách, phản hồi và những thất bại trong quá trình học hỏi.', detail: 'Dựa trên nghiên cứu tâm lý học, cuốn sách mang đến một khung suy nghĩ hữu ích cho học tập, công việc và giáo dục. Tư duy phát triển không chỉ là cố gắng hơn, mà còn là thay đổi chiến lược và tìm sự hỗ trợ phù hợp.' },
  { id: 'steal-artist', title: 'Nghệ thuật đánh cắp ý tưởng', author: 'Austin Kleon', category: 'art', year: 2012, pages: 160, isbn: '9780761169253', color: '#777d7b', tags: ['Ý tưởng', 'Sáng tạo', 'Thực hành'], summary: 'Sáng tạo không bắt đầu từ một khoảng trống. Austin Kleon khuyến khích người đọc tìm cảm hứng từ những điều mình yêu, kết nối chúng theo cách riêng và phát triển tiếng nói cá nhân thông qua việc làm đều đặn.', detail: 'Mười nguyên tắc ngắn gọn, nhiều minh họa và dễ áp dụng. “Đánh cắp” ở đây là học hỏi và biến đổi ảnh hưởng, không phải sao chép tác phẩm hay bỏ qua quyền tác giả.' },
  { id: 'creative-act', title: 'Một cách sống sáng tạo', author: 'Rick Rubin', category: 'art', year: 2023, pages: 432, isbn: '9780593652886', color: '#c9bea7', tags: ['Quan sát', 'Trực giác', 'Cảm hứng'], summary: 'Rick Rubin nhìn sáng tạo như một cách hiện diện trong thế giới: chú ý hơn, cởi mở hơn và lắng nghe sâu hơn. Những suy ngẫm trong sách đi từ việc đón nhận ý tưởng đến quá trình hoàn thiện và buông tay khỏi một tác phẩm.', detail: 'Không phải một hướng dẫn kỹ thuật về âm nhạc, mà là tập hợp những gợi ý về đời sống sáng tạo. Có thể đọc từng phần riêng lẻ và dành thời gian thử nghiệm với điều khiến bạn đồng cảm.' },
  { id: 'ways-seeing', title: 'Những cách thấy', author: 'John Berger', category: 'art', year: 1972, pages: 176, isbn: '9780140135152', color: '#9aabad', tags: ['Hội họa', 'Văn hóa', 'Góc nhìn'], summary: 'John Berger đặt câu hỏi về cách ta nhìn tranh, hình ảnh và quảng cáo. Những điều tưởng như hiển nhiên khi nhìn một tác phẩm thường chịu ảnh hưởng của bối cảnh xã hội, lịch sử và cách hình ảnh được tái hiện.', detail: 'Một cuốn sách nền tảng về văn hóa thị giác, phát triển từ chương trình truyền hình cùng tên. Phù hợp với người muốn quan sát nghệ thuật và những hình ảnh thường ngày một cách chủ động hơn.' },
  { id: 'show-work', title: 'Cho mọi người thấy tác phẩm của bạn', author: 'Austin Kleon', category: 'art', year: 2014, pages: 224, isbn: '9780761178972', color: '#b49a76', tags: ['Chia sẻ', 'Quá trình', 'Kết nối'], summary: 'Thay vì chờ đến khi có một tác phẩm hoàn hảo, Austin Kleon khuyên người sáng tạo chia sẻ những gì mình đang học và đang làm. Việc mở ra quá trình có thể giúp tìm được cộng đồng, phản hồi và những cơ hội kết nối.', detail: 'Một cuốn sách ngắn dành cho người làm công việc sáng tạo và còn ngần ngại đưa sản phẩm ra thế giới. Những gợi ý nhấn mạnh sự chân thành, tính đều đặn và việc chia sẻ có chọn lọc.' },
  { id: 'conversation-sicily', title: 'Conversation in Sicily', author: 'Elio Vittorini', category: 'literature', cover: './sicily.png', initialStatus: 'finished', year: 1941, isbn: '9780811214575', color: '#8caeab', genres: ['Tiểu thuyết'], tags: ['Sicily', 'Quê hương'], summary: 'Silvestro trở về Sicily và gặp lại mẹ sau nhiều năm xa cách. Qua những cuộc trò chuyện trên đường đi và tại quê nhà, anh suy ngẫm về đau khổ, phẩm giá con người và sự thờ ơ trước bất công.', summaryEn: 'Silvestro returns to Sicily and reunites with his mother after years away. Conversations along the journey and at home lead him to reflect on suffering, human dignity, and indifference to injustice.' },
  { id: 'enchanted-april', title: 'The Enchanted April', author: 'Elizabeth von Arnim', category: 'literature', initialStatus: 'finished', year: 1922, isbn: '9780141191829', color: '#95a28b', genres: ['Tiểu thuyết'], tags: ['Italy', 'Tình bạn'], summary: 'Bốn phụ nữ người Anh thuê chung một lâu đài ở Italy trong tháng Tư để rời xa những mệt mỏi thường ngày. Giữa khu vườn và ánh nắng Địa Trung Hải, họ dần tìm lại niềm vui, tình bạn và khả năng yêu thương.', summaryEn: 'Four English women rent an Italian castle for April to escape their everyday frustrations. Surrounded by gardens and Mediterranean sunshine, they rediscover joy, friendship, and the possibility of love.' },
  { id: 'walk-woods', title: 'A Walk in the Woods', author: 'Bill Bryson', category: 'literature', initialStatus: 'finished', year: 1998, isbn: '9780307279460', color: '#839373', genres: ['Hồi ký', 'Du ký'], tags: ['Thiên nhiên', 'Đi bộ'], summary: 'Bill Bryson cùng người bạn Stephen Katz thử đi bộ trên đường mòn Appalachian. Những trải nghiệm hài hước và thử thách trên đường được đan xen với câu chuyện về lịch sử, sinh thái và việc bảo vệ thiên nhiên nước Mỹ.', summaryEn: 'Bill Bryson and his friend Stephen Katz attempt to hike the Appalachian Trail. Their comic mishaps and challenges are woven together with reflections on American history, ecology, and the preservation of wilderness.' },
  { id: 'bell-jar', title: 'The Bell Jar', author: 'Sylvia Plath', category: 'literature', initialStatus: 'finished', year: 1963, isbn: '9780060837020', color: '#a7b5be', genres: ['Tiểu thuyết'], tags: ['Bản sắc', 'Sức khỏe tinh thần'], summary: 'Esther Greenwood, một cô gái trẻ có nhiều triển vọng, dần cảm thấy xa lạ với cuộc sống và những kỳ vọng dành cho phụ nữ. Tiểu thuyết theo sát cuộc khủng hoảng tinh thần của cô và hành trình tìm kiếm tiếng nói riêng.', summaryEn: 'Esther Greenwood, a promising young woman, becomes increasingly alienated from her life and the expectations placed on women. The novel follows her mental health crisis and her struggle to find a voice of her own.' },
  { id: 'god-small-things', title: 'The God of Small Things', author: 'Arundhati Roy', category: 'literature', initialStatus: 'finished', year: 1997, isbn: '9780679457312', color: '#95a28b', genres: ['Tiểu thuyết'], tags: ['Gia đình', 'Ấn Độ'], summary: 'Câu chuyện về hai anh em sinh đôi Estha và Rahel ở Kerala đan xen ký ức tuổi thơ với những biến cố làm tan vỡ gia đình. Tác phẩm khám phá tình yêu, đẳng cấp xã hội và cách những điều nhỏ bé có thể thay đổi cả một đời người.', summaryEn: 'The story of twins Estha and Rahel in Kerala intertwines childhood memories with events that fracture their family. It explores love, caste, and the ways seemingly small things can reshape an entire life.' },
  { id: 'white-nights', title: 'White Nights', author: 'Fyodor Dostoevsky', category: 'literature', initialStatus: 'finished', year: 1848, isbn: '9780241252086', color: '#a7b5be', genres: ['Truyện vừa'], tags: ['Cô đơn', 'Tình yêu'], summary: 'Một chàng trai mộng mơ, cô độc ở Saint Petersburg gặp Nastenka trong những đêm mùa hè sáng trắng. Cuộc gặp gỡ ngắn ngủi mở ra hy vọng về tình yêu và sự kết nối, nhưng cũng phơi bày khoảng cách giữa mơ ước và thực tại.', summaryEn: 'A lonely dreamer in Saint Petersburg meets Nastenka during the luminous summer nights. Their brief connection offers hope of love and companionship while revealing the distance between dreams and reality.' },
  { id: 'crime-punishment', title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', category: 'literature', initialStatus: 'finished', year: 1866, isbn: '9780143058144', color: '#ad6e73', genres: ['Tiểu thuyết'], tags: ['Tội lỗi', 'Đạo đức'], summary: 'Sinh viên nghèo Raskolnikov gây ra một vụ giết người rồi bị giằng xé bởi tội lỗi và những lập luận tự biện hộ. Qua cuộc đấu tranh nội tâm và các mối quan hệ của anh, tiểu thuyết đặt câu hỏi về đạo đức, trách nhiệm và khả năng cứu chuộc.', summaryEn: 'An impoverished student, Raskolnikov, commits murder and becomes consumed by guilt and self-justification. His inner struggle and relationships raise questions about morality, responsibility, and the possibility of redemption.' },
  { id: 'on-earth', title: "On Earth We're Briefly Gorgeous", author: 'Ocean Vuong', category: 'literature', initialStatus: 'finished', year: 2019, isbn: '9780525562047', color: '#ad6e73', genres: ['Tiểu thuyết'], tags: ['Gia đình', 'Ký ức'], summary: 'Dưới hình thức một lá thư gửi người mẹ không biết đọc, Little Dog kể lại tuổi thơ trong một gia đình Việt Nam nhập cư ở Mỹ. Tiểu thuyết khám phá ký ức chiến tranh, tình mẫu tử, tình yêu và những giới hạn của ngôn ngữ.', summaryEn: 'In a letter to a mother who cannot read, Little Dog revisits his childhood in a Vietnamese immigrant family in America. The novel explores inherited memories of war, motherly love, desire, and the limits of language.' },
  { id: 'wedding-people', title: 'The Wedding People', author: 'Alison Espach', category: 'literature', initialStatus: 'finished', year: 2024, isbn: '9781250899576', color: '#b49a76', genres: ['Tiểu thuyết'], tags: ['Khởi đầu mới', 'Kết nối'], summary: 'Phoebe đến một khách sạn ở Newport khi cuộc sống rơi vào khủng hoảng và vô tình bước vào không gian của một đám cưới. Những cuộc gặp ngoài dự tính, đặc biệt với cô dâu, khiến cô nhìn lại mất mát và khả năng bắt đầu lại.', summaryEn: 'Phoebe arrives at a Newport hotel in the midst of a personal crisis and unexpectedly finds herself among wedding guests. Unplanned encounters, especially with the bride, lead her to reconsider loss and the possibility of starting again.' },
  { id: 'wretched-earth', title: 'The Wretched of the Earth', author: 'Frantz Fanon', category: 'literature', initialStatus: 'finished', year: 1961, isbn: '9780802141323', color: '#ad6e73', genres: ['Luận thuyết chính trị', 'Phi hư cấu'], tags: ['Chủ nghĩa thực dân', 'Giải phóng', 'Văn hóa'], summary: 'Frantz Fanon phân tích những tác động chính trị, văn hóa và tâm lý của chế độ thực dân đối với người bị trị. Từ cuộc đấu tranh giành độc lập, ông đặt câu hỏi về bạo lực, ý thức dân tộc, vai trò của giới tinh hoa và những khó khăn trong việc xây dựng một xã hội sau thuộc địa.', summaryEn: 'Frantz Fanon examines the political, cultural, and psychological effects of colonial rule on colonized people. Reflecting on struggles for independence, he explores violence, national consciousness, the role of elites, and the challenges of building a postcolonial society.' },
  { id: 'remarkably-bright-creatures', title: 'Remarkably Bright Creatures', author: 'Shelby Van Pelt', category: 'literature', initialStatus: 'finished', year: 2022, isbn: '9780063204157', color: '#8caeab', genres: ['Tiểu thuyết'], tags: ['Mất mát', 'Kết nối', 'Gia đình'], summary: 'Tova Sullivan làm ca đêm tại một thủy cung và hình thành mối gắn bó đặc biệt với Marcellus, một con bạch tuộc thông minh. Khi cuộc đời cô giao nhau với Cameron, một chàng trai đi tìm gia đình mình, những bí mật cũ dần được hé lộ trong câu chuyện về mất mát, tình bạn và cơ hội tìm lại sự kết nối.', summaryEn: 'Tova Sullivan works night shifts at an aquarium and forms an unusual bond with Marcellus, a remarkably intelligent octopus. When her life intersects with Cameron, a young man searching for his family, old secrets emerge in a story about grief, friendship, and the possibility of renewed connection.' },
  { id: 'yellowface', title: 'Yellowface', author: 'R. F. Kuang', category: 'literature', initialStatus: 'finished', year: 2023, isbn: '9780063250833', color: '#d2be95', genres: ['Tiểu thuyết'], tags: ['Xuất bản', 'Bản sắc'], summary: 'Sau cái chết của nhà văn Athena Liu, June Hayward chiếm lấy bản thảo của người bạn và xuất bản dưới tên mình. Thành công kéo theo những lời nghi ngờ, phơi bày tham vọng, sự chiếm dụng văn hóa và những bất công trong ngành xuất bản.', summaryEn: 'After author Athena Liu dies, June Hayward takes her manuscript and publishes it as her own. Success brings scrutiny, exposing ambition, cultural appropriation, and inequities within the publishing industry.' },
  { id: 'convenience-store-woman', title: 'Convenience Store Woman', author: 'Sayaka Murata', category: 'literature', cover: 'https://m.media-amazon.com/images/I/81SsLYe8ZRL._SL1000_.jpg', initialStatus: 'finished', year: 2016, isbn: '9780802128256', color: '#a7b5be', genres: ['Tiểu thuyết'], tags: ['Nhật Bản', 'Bản sắc', 'Chuẩn mực xã hội'], summary: 'Keiko Furukura tìm thấy nhịp sống và cảm giác thuộc về trong công việc tại một cửa hàng tiện lợi ở Tokyo. Khi gia đình và những người quanh cô liên tục đặt câu hỏi về công việc và tình trạng độc thân, cô phải đối diện với những kỳ vọng về một cuộc sống được xem là bình thường. Tiểu thuyết khám phá bản sắc cá nhân, áp lực hòa nhập và quyền lựa chọn cách sống của chính mình.', summaryEn: 'Keiko Furukura finds routine and a sense of belonging in her job at a Tokyo convenience store. As her family and acquaintances question her work and single life, she confronts their expectations of what a normal life should look like. The novel explores identity, conformity, and the freedom to choose a life on one’s own terms.' },
  { id: 'alchemist', title: 'Walden; or, Life in the Woods', author: 'Henry David Thoreau', category: 'literature', cover: 'https://m.media-amazon.com/images/I/91coVsPbSVL._AC_UF1000,1000_QL80_.jpg', genres: ['Tự truyện', 'Hồi ký', 'Viết về thiên nhiên', 'Tiểu luận triết học'], movement: 'Chủ nghĩa siêu nghiệm', year: 1854, isbn: '9780141439679', color: '#95a28b', tags: ['Thiên nhiên', 'Sống giản dị', 'Tự lập'], summary: 'Henry David Thoreau ghi lại trải nghiệm sống trong một căn nhà nhỏ bên hồ Walden ở Massachusetts trong hơn hai năm. Qua việc tự xây nhà, trồng trọt và quan sát thiên nhiên qua các mùa, ông suy ngẫm về đời sống giản dị, sự tự lập, mối quan hệ giữa con người với thiên nhiên và những điều thực sự cần thiết để sống có ý nghĩa.', summaryEn: 'Henry David Thoreau reflects on more than two years spent living in a small cabin beside Walden Pond in Massachusetts. Through building his own home, growing food, and observing nature across the seasons, he explores simplicity, self-reliance, and the relationship between people and the natural world. Part personal account and part philosophical reflection, Walden asks what we truly need to live deliberately and meaningfully.' },
  { id: 'portrait-artist', title: 'A Portrait of the Artist as a Young Man', author: 'James Joyce', category: 'literature', initialStatus: 'reading', year: 1916, isbn: '9780142437346', color: '#ad6e73', movement: 'Chủ nghĩa hiện đại', genres: ['Tiểu thuyết', 'Bildungsroman'], tags: ['Nghệ thuật', 'Ireland'], summary: 'Stephen Dedalus lớn lên ở Ireland và đối diện với những ràng buộc của gia đình, tôn giáo và dân tộc. Hành trình trưởng thành dẫn anh đến việc tìm tiếng nói riêng và lựa chọn trở thành nghệ sĩ.', summaryEn: 'Stephen Dedalus grows up in Ireland, confronting the demands of family, religion, and nation. His coming of age leads him toward an independent voice and a commitment to becoming an artist.' },
  { id: 'sweetness-power', title: 'Sweetness and Power', author: 'Sidney W. Mintz', category: 'literature', initialStatus: 'reading', year: 1985, isbn: '9780140092332', color: '#b49a76', genres: ['Phi hư cấu', 'Nhân học', 'Lịch sử'], tags: ['Đường', 'Quyền lực'], summary: 'Sidney Mintz theo dõi cách đường từ một món xa xỉ trở thành thực phẩm thường ngày ở Anh. Lịch sử của đường hé lộ những liên hệ giữa tiêu dùng, lao động, chế độ nô lệ và quyền lực thuộc địa.', summaryEn: 'Sidney Mintz traces how sugar changed from a luxury into an everyday staple in Britain. Its history reveals connections between consumption, labor, slavery, and colonial power.' },
  { id: 'tale-genji', title: 'The Tale of Genji', author: 'Murasaki Shikibu', category: 'literature', initialStatus: 'reading', year: 'Đầu thế kỷ XI', yearLabel: 'Biên soạn', isbn: '9780142437148', color: '#a7b5be', movement: 'Văn học thời Heian', genres: ['Tiểu thuyết'], tags: ['Nhật Bản', 'Cung đình'], summary: 'Tác phẩm theo chân Hikaru Genji và những người quanh ông trong đời sống cung đình Nhật Bản thời Heian. Những mối tình, tham vọng và mất mát mở ra suy ngẫm về địa vị, cảm xúc và tính vô thường của cuộc sống.', summaryEn: 'The tale follows Hikaru Genji and those around him at the Japanese imperial court during the Heian period. Love, ambition, and loss reveal the complexity of social rank, emotion, and the impermanence of life.' },
  { id: 'nostalgie-heureuse', title: 'La Nostalgie heureuse', author: 'Amélie Nothomb', category: 'literature', initialStatus: 'reading', year: 2013, isbn: '9782253194387', color: '#95a28b', genres: ['Tự truyện'], tags: ['Nhật Bản', 'Ký ức'], summary: 'Amélie Nothomb trở lại Nhật Bản, nơi gắn với tuổi thơ và những năm tháng quan trọng của mình. Những cuộc gặp và ký ức khiến bà suy ngẫm về sự thuộc về, thay đổi và niềm vui lẫn nỗi buồn của việc trở lại một nơi từng yêu.', summaryEn: 'Amélie Nothomb returns to Japan, a place closely tied to her childhood and formative years. Encounters and memories prompt reflections on belonging, change, and the bittersweet experience of returning to a beloved place.' },
  { id: 'theo-golden', title: 'Theo of Golden', author: 'Allen Levi', category: 'literature', cover: 'https://www.myhobby.vn/cdn/shop/files/9781668236512_p0_v6_s600x595.jpg?v=1766746217', initialStatus: 'wishlist', year: 2023, isbn: '9780989628796', color: '#d2be95', genres: ['Tiểu thuyết'], tags: ['Lòng tốt', 'Cộng đồng'], summary: 'Một người đàn ông bí ẩn tên Theo đến thị trấn Golden và chú ý đến những bức chân dung trong một quán cà phê. Những hành động hào phóng của ông dần kết nối người dân, mở ra câu chuyện về lòng tốt, phẩm giá và ý nghĩa của việc được nhìn thấy.', summaryEn: 'A mysterious man named Theo arrives in Golden and notices portraits displayed in a coffee shop. His acts of generosity gradually connect the townspeople in a story about kindness, dignity, and what it means to be seen.' },
  { id: 'new-grub-street', title: 'New Grub Street', author: 'George Gissing', category: 'literature', cover: './grub.png', initialStatus: 'wishlist', year: 1891, isbn: '9780140430324', color: '#a7b5be', movement: 'Gắn với truyền thống hiện thực', genres: ['Tiểu thuyết'], tags: ['Viết lách', 'Xuất bản'], summary: 'Các nhà văn và nhà báo ở London phải lựa chọn giữa lý tưởng nghệ thuật và nhu cầu kiếm sống. Qua những con đường khác nhau của họ, tiểu thuyết khám phá áp lực thương mại, nghèo khó và tham vọng trong đời sống văn chương.', summaryEn: 'Writers and journalists in London struggle between artistic ideals and the need to earn a living. Their contrasting paths reveal commercial pressure, poverty, and ambition within the literary world.' },
  { id: 'hyunam-bookshop', title: 'Welcome to the Hyunam-dong Bookshop', author: 'Hwang Bo-reum', category: 'literature', initialStatus: 'wishlist', year: 2022, isbn: '9781639732425', color: '#8caeab', genres: ['Tiểu thuyết'], tags: ['Sách', 'Khởi đầu mới'], summary: 'Yeongju rời cuộc sống cũ để mở một hiệu sách nhỏ tại Seoul. Những cuộc trò chuyện với nhân viên và khách hàng giúp cô cùng những người ghé tiệm suy ngẫm về công việc, hạnh phúc và cách bắt đầu lại.', summaryEn: 'Yeongju leaves her old life behind to open a small bookshop in Seoul. Conversations with staff and customers invite her and the people who visit to reconsider work, happiness, and the possibility of starting over.' },
  { id: 'martin-eden', title: 'Martin Eden', author: 'Jack London', category: 'literature', initialStatus: 'wishlist', year: 1909, isbn: '9780140187724', color: '#ad6e73', movement: 'Gắn với truyền thống hiện thực', genres: ['Tiểu thuyết', 'Bildungsroman'], tags: ['Viết lách', 'Giai cấp'], summary: 'Một thủy thủ trẻ tự học và quyết tâm trở thành nhà văn sau khi bước vào thế giới của tầng lớp giàu có. Hành trình vươn lên của Martin Eden phơi bày những mâu thuẫn giữa tình yêu, danh tiếng, giai cấp và lý tưởng cá nhân.', summaryEn: 'A young sailor educates himself and strives to become a writer after entering the world of the wealthy. Martin Eden pursues recognition while confronting conflicts between love, fame, class, and personal ideals.' },
  { id: 'kafka-diaries', title: 'The Diaries', author: 'Franz Kafka', category: 'literature', cover: './kafka.png', initialStatus: 'wishlist', year: 1948, isbn: '9780805243552', color: '#b2ad98', movement: 'Chủ nghĩa hiện đại', genres: ['Nhật ký'], tags: ['Viết lách', 'Nội tâm'], summary: 'Những ghi chép của Kafka từ năm 1909 đến 1923 kết hợp đời sống cá nhân, giấc mơ, suy nghĩ và các phác thảo văn chương. Tập nhật ký cho thấy một đời sống nội tâm nhiều giằng co và quá trình tìm kiếm hình thức cho việc viết.', summaryEn: 'Kafka’s notebooks from 1909 to 1923 combine personal observations, dreams, reflections, and literary sketches. They reveal a conflicted inner life and his continuing search for forms of expression.' },
  { id: 'history-drunkenness', title: 'A Short History of Drunkenness', author: 'Mark Forsyth', category: 'literature', initialStatus: 'wishlist', year: 2017, isbn: '9780241297681', color: '#b49a76', genres: ['Phi hư cấu', 'Lịch sử'], tags: ['Rượu', 'Văn hóa'], summary: 'Mark Forsyth khảo sát thói quen uống rượu của con người qua nhiều thời đại và nền văn hóa. Với giọng kể hóm hỉnh, cuốn sách xem xét vai trò của rượu trong nghi lễ, đời sống xã hội và các quy tắc ứng xử.', summaryEn: 'Mark Forsyth explores drinking customs across different periods and cultures. With a humorous voice, he examines alcohol’s place in ritual, social life, and the rules governing human behavior.' },
  { id: 'salt-history', title: 'Salt: A World History', author: 'Mark Kurlansky', category: 'literature', initialStatus: 'wishlist', year: 2002, isbn: '9780142001615', color: '#95a28b', genres: ['Phi hư cấu', 'Lịch sử'], tags: ['Muối', 'Thương mại'], summary: 'Từ việc bảo quản thực phẩm đến thương mại và thuế khóa, muối từng có vai trò quan trọng trong lịch sử loài người. Mark Kurlansky kết nối câu chuyện về nguyên liệu quen thuộc này với quyền lực, kỹ thuật và văn hóa ẩm thực.', summaryEn: 'From preserving food to trade and taxation, salt has played a major role in human history. Mark Kurlansky connects this familiar ingredient to power, technology, and culinary culture.' },
  { id: 'last-speakers', title: 'The Last Speakers', author: 'K. David Harrison', category: 'literature', initialStatus: 'wishlist', year: 2010, isbn: '9781426204616', color: '#a7b5be', genres: ['Phi hư cấu', 'Ngôn ngữ học'], tags: ['Ngôn ngữ', 'Văn hóa'], summary: 'K. David Harrison gặp gỡ những người nói cuối cùng của các ngôn ngữ đang biến mất. Qua những câu chuyện của họ, ông khám phá tri thức, ký ức và những cách nhìn thế giới có nguy cơ mất đi cùng ngôn ngữ.', summaryEn: 'K. David Harrison meets some of the last speakers of endangered languages. Their stories reveal the knowledge, memories, and ways of understanding the world that may disappear alongside a language.' },
  { id: 'orientalism', title: 'Orientalism', author: 'Edward W. Said', category: 'literature', initialStatus: 'wishlist', year: 1978, isbn: '9780394740676', color: '#ad6e73', genres: ['Phi hư cấu', 'Phê bình văn hóa'], tags: ['Quyền lực', 'Thuộc địa'], summary: 'Edward Said phân tích cách phương Tây xây dựng hình ảnh về phương Đông trong học thuật, văn chương và chính trị. Ông lập luận rằng những biểu hiện này gắn với quyền lực và lịch sử thống trị thuộc địa.', summaryEn: 'Edward Said examines how the West constructs representations of the East in scholarship, literature, and politics. He argues that these representations are bound up with power and the history of colonial domination.' },
  { id: 'purity-danger', title: 'Purity and Danger', author: 'Mary Douglas', category: 'literature', initialStatus: 'wishlist', year: 1966, isbn: '9780415289955', color: '#8caeab', genres: ['Phi hư cấu', 'Nhân học'], tags: ['Nghi lễ', 'Phân loại'], summary: 'Mary Douglas khảo sát quan niệm về sự sạch sẽ, ô uế và cấm kỵ trong các xã hội. Cuốn sách cho thấy những quy tắc này liên quan đến cách con người phân loại thế giới và duy trì trật tự xã hội.', summaryEn: 'Mary Douglas investigates ideas of cleanliness, pollution, and taboo across societies. She shows how these rules relate to the ways people classify the world and maintain social order.' },
  { id: 'madame-bovary', title: 'Madame Bovary', author: 'Gustave Flaubert', category: 'literature', initialStatus: 'wishlist', year: 1857, isbn: '9780140449129', color: '#b49a76', movement: 'Chủ nghĩa hiện thực', genres: ['Tiểu thuyết'], tags: ['Khát vọng', 'Hôn nhân'], summary: 'Emma Bovary cảm thấy ngột ngạt trong cuộc hôn nhân và đời sống tỉnh lẻ, rồi tìm kiếm tình yêu và sự xa hoa như trong những câu chuyện lãng mạn. Những lựa chọn của cô dẫn đến sự đổ vỡ, đồng thời phơi bày khoảng cách giữa mộng tưởng và thực tế.', summaryEn: 'Dissatisfied with marriage and provincial life, Emma Bovary seeks the passion and luxury of romantic fantasies. Her choices lead toward ruin while exposing the distance between imagined lives and reality.' },
  { id: 'stoner', title: 'Stoner', author: 'John Williams', category: 'literature', cover: 'https://covers.openlibrary.org/b/id/8310729-M.jpg?default=false', initialStatus: 'wishlist', year: 1965, color: '#a7b5be', genres: ['Tiểu thuyết'], tags: ['Đời sống đại học', 'Văn học'], summary: 'William Stoner sinh ra trong một gia đình nông dân Missouri, theo học rồi giảng dạy văn học tại đại học. Tiểu thuyết lặng lẽ theo dõi công việc, hôn nhân và những lựa chọn riêng tư trong cuộc đời ông.', summaryEn: 'William Stoner, the son of Missouri farmers, studies and teaches literature at a university. The novel quietly follows his work, marriage, and private choices.' },
  { id: 'remains-of-the-day', title: 'The Remains of the Day', author: 'Kazuo Ishiguro', category: 'literature', cover: 'https://covers.openlibrary.org/b/id/95742-M.jpg?default=false', initialStatus: 'wishlist', year: 1989, color: '#b49a76', genres: ['Tiểu thuyết'], tags: ['Nước Anh', 'Ký ức', 'Bổn phận'], summary: 'Quản gia Stevens thực hiện chuyến đi qua miền quê nước Anh và nhớ lại nhiều thập kỷ phục vụ tại Darlington Hall. Chuyến đi khiến ông nhìn lại bổn phận, lòng trung thành và những điều đã bỏ lỡ.', summaryEn: 'Butler Stevens travels through the English countryside and recalls decades of service at Darlington Hall. The journey leads him to reconsider duty, loyalty, and the things he may have missed.' },
  { id: 'book-of-disquiet', title: 'The Book of Disquiet', author: 'Fernando Pessoa', category: 'literature', cover: 'https://covers.openlibrary.org/b/id/900685-M.jpg?default=false', initialStatus: 'wishlist', year: 1982, color: '#b2ad98', genres: ['Tùy bút', 'Văn xuôi'], tags: ['Lisbon', 'Cô đơn', 'Suy tưởng'], summary: 'Tập hợp những mảnh ghi chép gắn với Bernardo Soares, một nhân viên kế toán sống ở Lisbon. Những suy tưởng về công việc thường ngày, cô đơn và trí tưởng tượng tạo nên một bức chân dung nội tâm không theo lối tự sự tuyến tính.', summaryEn: 'A collection of fragments attributed to Bernardo Soares, an assistant bookkeeper in Lisbon. Reflections on routine, solitude, and imagination form an inward portrait rather than a linear narrative.' },
  { id: 'master-and-margarita', title: 'The Master and Margarita', author: 'Mikhail Bulgakov', category: 'literature', cover: 'https://covers.openlibrary.org/b/id/15013644-M.jpg?default=false', initialStatus: 'wishlist', year: 1967, color: '#ad6e73', genres: ['Tiểu thuyết', 'Châm biếm'], tags: ['Moscow', 'Tình yêu', 'Kỳ ảo'], summary: 'Một vị khách bí ẩn cùng đoàn tùy tùng kỳ quái xuất hiện ở Moscow, mở ra câu chuyện đan xen giữa châm biếm xã hội, tình yêu của Margarita và số phận của một nhà văn.', summaryEn: 'A mysterious visitor and his strange entourage arrive in Moscow, setting off a story that weaves together social satire, Margarita’s love, and a writer’s fate.' },
  { id: 'the-door', title: 'The Door', author: 'Magda Szabó', category: 'literature', cover: 'https://covers.openlibrary.org/b/id/1635484-M.jpg?default=false', initialStatus: 'wishlist', year: 1987, color: '#8caeab', genres: ['Tiểu thuyết'], tags: ['Hungary', 'Tình bạn', 'Bí mật'], summary: 'Một nhà văn và Emerence, người giúp việc lớn tuổi, xây dựng mối quan hệ gần gũi nhưng nhiều căng thẳng. Cánh cửa khép kín của Emerence trở thành trung tâm cho những suy ngẫm về tin cậy, riêng tư và lòng biết ơn.', summaryEn: 'A writer and Emerence, her older housekeeper, form a close but fraught relationship. Emerence’s closed door anchors reflections on trust, privacy, and gratitude.' },
  { id: 'small-things-like-these', title: 'Small Things Like These', author: 'Claire Keegan', category: 'literature', cover: 'https://covers.openlibrary.org/b/id/10507091-M.jpg?default=false', initialStatus: 'wishlist', year: 2021, color: '#95a28b', genres: ['Truyện vừa'], tags: ['Ireland', 'Lòng can đảm', 'Cộng đồng'], summary: 'Vào mùa Giáng sinh năm 1985, người buôn than Bill Furlong phát hiện điều khiến anh không thể làm ngơ tại một tu viện địa phương. Một câu chuyện ngắn về lương tâm, lòng can đảm và sự im lặng của cộng đồng.', summaryEn: 'At Christmas in 1985, coal merchant Bill Furlong discovers something at a local convent that he cannot ignore. A short novel about conscience, courage, and a community’s silence.' },
  { id: 'the-lonely-city', title: 'The Lonely City', author: 'Olivia Laing', category: 'literature', cover: 'https://covers.openlibrary.org/b/id/12672997-M.jpg?default=false', initialStatus: 'wishlist', year: 2016, color: '#a7b5be', genres: ['Phi hư cấu', 'Phê bình nghệ thuật'], tags: ['New York', 'Cô đơn', 'Nghệ thuật'], summary: 'Olivia Laing suy ngẫm về trải nghiệm sống cô độc ở New York và tìm đến nghệ thuật để khám phá cách con người sống cùng cô đơn, khao khát kết nối và cảm giác thuộc về.', summaryEn: 'Olivia Laing reflects on living alone in New York and turns to art to explore how people experience loneliness, the desire for connection, and the search for belonging.' },
  { id: 'map-of-salt-and-stars', title: 'The Map of Salt and Stars', author: 'Zeyn Joukhadar', category: 'literature', cover: 'https://covers.openlibrary.org/b/id/9227917-M.jpg?default=false', initialStatus: 'wishlist', year: 2018, color: '#8caeab', genres: ['Tiểu thuyết'], tags: ['Syria', 'Di cư', 'Bản đồ'], summary: 'Nour cùng gia đình rời khỏi Syria trong chiến tranh; hành trình của cô đan xen với câu chuyện về Rawiya, cô gái tập sự vẽ bản đồ ở thế kỷ XII. Hai tuyến truyện gặp nhau qua lưu lạc, bản đồ và những câu chuyện được truyền lại.', summaryEn: 'Nour and her family flee war in Syria in a story interwoven with Rawiya, a twelfth-century girl apprenticed to a mapmaker. Their journeys meet through displacement, maps, and stories passed down.' },
].filter(book => book.id === 'alchemist' || book.initialStatus).map(book => ({
  ...book,
  authorCountry: authorCountries[book.id],
  movement: book.movement || literaryMovements[book.id] || 'Không gắn với một trường phái cụ thể',
}));

const expandedBookSummaries = {
  'pillow-book': {
    vi: '<em>The Pillow Book</em> của Sei Shōnagon không giống một cuốn sách có cốt truyện rõ ràng mà giống như được bước vào bên trong suy nghĩ của một người. Sách gồm những ghi chép ngắn, danh sách, ký ức, lời than phiền và những khoảnh khắc nhỏ trong đời sống cung đình thời Heian. Điều mình thích nhất là giọng văn của Shōnagon rất cá nhân và có cảm giác hiện đại một cách bất ngờ. Có lúc bà viết rất thanh nhã, giàu chất thơ, nhưng ngay sau đó lại có thể sắc sảo, hài hước và hơi “judgmental”. Những danh sách về các thứ đẹp, khó chịu hay đáng xấu hổ khiến mình liên tưởng đến nhật ký cá nhân hoặc thậm chí là những post ngắn trên mạng xã hội. Vì không có cốt truyện xuyên suốt, đây không phải cuốn mình muốn đọc thật nhanh từ đầu đến cuối. Mình thấy đọc vài trang mỗi lần lại hợp hơn, vì có thời gian để nhớ những chi tiết nhỏ. Đằng sau những mô tả về quần áo, mùa, thư từ hay nghi lễ cung đình còn có một cảm giác rất rõ rằng cái đẹp luôn mong manh và ngắn ngủi. Nhiều đoạn khiến mình tự nhiên chú ý hơn đến những thứ rất bình thường xung quanh. Tất nhiên một số chi tiết về văn hóa cung đình khá xa lạ nếu mình không biết nhiều về thời kỳ này. Nhưng chính khoảng cách đó lại tạo nên sức hút, vì cuốn sách cho mình một cái nhìn rất riêng tư vào một thế giới đã cách chúng ta hơn một nghìn năm. Đây là một cuốn sách nhẹ, tinh tế, dí dỏm và sống động hơn mình tưởng.',
    en: '<em>The Pillow Book</em> by Sei Shōnagon feels less like a traditional book and more like spending time inside someone’s mind. It is made up of short observations, lists, memories, complaints, and small moments from court life in Heian Japan. What I liked most is how personal and surprisingly modern her voice feels. She can be elegant and poetic in one passage, then sharp, funny, and even a little judgmental in the next. Some of her lists, especially about things she finds beautiful, annoying, or embarrassing, feel almost like ancient diary entries or social media posts. There is no strong plot, so this is not the kind of book I would read quickly from beginning to end. I enjoyed it more when I read a few pages at a time and let the details stay with me. Behind all the descriptions of clothes, seasons, letters, and court rituals, there is also a strong sense that beauty is temporary. Many passages made me notice ordinary things more carefully. At the same time, some references to court culture can feel distant if you do not know much about the period. Still, that distance is part of the charm because the book gives such an intimate glimpse into a world that is otherwise very far away. It is quiet, witty, delicate, and much more alive than I expected.',
  },
  'little-prince': {
    vi: 'Một phi công gặp hoàng tử bé giữa sa mạc sau khi máy bay gặp nạn. Cậu bé kể về hành trình rời tiểu tinh cầu và những nơi mình đã ghé qua. Trên đường đi, cậu gặp những người lớn bị cuốn vào quyền lực, thói quen hoặc sự tự mãn. Cuộc gặp với một bông hồng khiến cậu suy nghĩ về tình yêu và trách nhiệm. Một con cáo giúp cậu hiểu giá trị của sự gắn bó và thời gian dành cho nhau. Câu chuyện dùng trí tưởng tượng trẻ thơ để đặt câu hỏi về cách người lớn nhìn thế giới. Lối kể giản dị cùng hình vẽ của tác giả khiến cuốn sách vừa nhẹ nhàng vừa gợi nhiều suy ngẫm.',
    en: 'A pilot meets the Little Prince in the desert after his plane crashes. The boy tells him about leaving his tiny asteroid and visiting other worlds. Along the way, he encounters adults absorbed in power, routine, or vanity. His relationship with a rose makes him think about love and responsibility. A fox helps him understand the value of attachment and time shared with another. The story uses a child’s imagination to question how adults see the world. Its simple prose and the author’s illustrations make the book gentle yet thought-provoking.',
  },
  'norwegian-wood': {
    vi: 'Một giai điệu đưa Toru Watanabe trở về những năm tháng sinh viên ở Tokyo. Anh nhớ lại mối quan hệ với Naoko sau cái chết của người bạn thân chung. Sự xuất hiện của Midori mở ra một kiểu gắn kết khác, nhiều sinh khí nhưng cũng không ít bối rối. Các nhân vật phải đối diện với mất mát, cô đơn và những giới hạn của khả năng giúp đỡ nhau. Bối cảnh tuổi trẻ được kể qua ký ức của một người trưởng thành nhìn lại. Giọng văn tiết chế tạo nên không khí trầm lắng, tập trung vào cảm xúc hơn là biến cố lớn. Cuốn tiểu thuyết phù hợp với độc giả trưởng thành và có những chủ đề nhạy cảm về sức khỏe tinh thần, tình dục và tự tử.',
    en: 'A song takes Toru Watanabe back to his student years in Tokyo. He remembers his relationship with Naoko after the death of their mutual friend. The arrival of Midori offers a different kind of connection, lively but not without uncertainty. The characters face grief, loneliness, and the limits of how much one person can help another. Youth is presented through the memories of an adult looking back. Murakami’s restrained prose creates a quiet mood focused more on feeling than on major events. The novel is for adult readers and includes sensitive themes involving mental health, sexuality, and suicide.',
  },
  'little-women': {
    vi: 'Bốn chị em nhà March lớn lên cùng mẹ trong những năm tháng gia đình phải sống tiết kiệm. Meg, Jo, Beth và Amy có tính cách, năng lực và ước mơ rất khác nhau. Những việc nhỏ trong gia đình đặt họ trước lựa chọn về lòng tốt, sự tự lập và trách nhiệm. Jo khao khát viết lách, còn các chị em tìm cách theo đuổi con đường riêng. Câu chuyện quan sát quá trình trưởng thành qua tình thân, tình bạn và những thử thách thường ngày. Tác phẩm vừa ấm áp vừa hài hước, nhưng cũng đề cập đến giới hạn mà phụ nữ phải đối mặt trong xã hội thế kỷ XIX. Đây là tiểu thuyết nhiều tập truyện ngắn kết nối thành bức tranh về gia đình và tuổi trẻ.',
    en: 'The four March sisters grow up with their mother while the family lives carefully within its means. Meg, Jo, Beth, and Amy have distinct personalities, talents, and ambitions. Everyday family events test their kindness, independence, and sense of responsibility. Jo longs to write, while each sister seeks a path of her own. The story follows growing up through family bonds, friendship, and ordinary challenges. It is warm and humorous while also examining the limits women faced in nineteenth-century society. A series of connected episodes builds a portrait of family life and youth.',
  },
  'atomic-habits': {
    vi: 'James Clear cho rằng những thay đổi nhỏ, lặp lại đều đặn, có thể tích lũy thành kết quả đáng kể. Cuốn sách chuyển trọng tâm từ mục tiêu sang hệ thống giúp hành vi mong muốn xảy ra thường xuyên hơn. Tác giả trình bày bốn nguyên tắc: làm cho thói quen rõ ràng, hấp dẫn, dễ thực hiện và đem lại cảm giác thỏa mãn. Các ví dụ cho thấy môi trường xung quanh có thể hỗ trợ hoặc cản trở lựa chọn của ta. Người đọc được khuyến khích bắt đầu bằng bước nhỏ và theo dõi tiến trình. Sách cũng bàn về cách nhận diện trở ngại và quay lại sau khi đứt quãng. Đây là cẩm nang thực hành, không phải lời hứa rằng một công thức phù hợp với tất cả mọi người.',
    en: 'James Clear argues that small, repeated changes can accumulate into meaningful results. The book shifts attention from goals to systems that make desired behaviors more likely. He presents four principles: make a habit obvious, attractive, easy, and satisfying. Examples show how surroundings can support or hinder everyday choices. Readers are encouraged to begin with small steps and track their progress. The book also considers how to recognize obstacles and resume after a lapse. It is a practical guide, not a promise that one formula works for everyone.',
  },
  ikigai: {
    vi: 'Héctor García và Francesc Miralles tìm hiểu khái niệm ikigai qua các cuộc trò chuyện và câu chuyện đời sống ở Okinawa. Từ này thường được diễn giải là lý do khiến một người muốn thức dậy mỗi ngày. Cuốn sách kết nối ý nghĩa cá nhân với cộng đồng, công việc và những niềm vui giản dị. Các chương cũng nhắc đến vận động, ăn uống, nghỉ ngơi và việc duy trì quan hệ xã hội. Thay vì đưa ra một định nghĩa duy nhất, sách gợi người đọc quan sát điều gì khiến cuộc sống của mình có ý nghĩa. Một số kết luận về tuổi thọ nên được xem như góc nhìn phổ thông, không phải lời khuyên y khoa hay bằng chứng rằng một lối sống bảo đảm sống lâu. Giọng kể nhẹ nhàng khiến sách phù hợp để đọc chậm và suy ngẫm.',
    en: 'Héctor García and Francesc Miralles explore ikigai through conversations and stories of life in Okinawa. The term is often described as a reason to get up each day. The book connects personal meaning with community, work, and simple pleasures. Its chapters also touch on movement, food, rest, and maintaining social ties. Rather than offering one definitive formula, it invites readers to notice what gives their own lives meaning. Claims about longevity are best treated as popular perspectives, not medical advice or proof that one lifestyle guarantees a long life. Its gentle tone makes the book suited to slow reading and reflection.',
  },
  essentialism: {
    vi: 'Greg McKeown phân biệt việc làm nhiều với việc tập trung vào đúng việc quan trọng. Ông gọi cách tiếp cận thứ hai là chủ nghĩa thiết yếu, một quá trình lựa chọn có chủ đích thay vì phản ứng với mọi yêu cầu. Sách khuyến khích người đọc xác định ưu tiên, cân nhắc đánh đổi và học cách từ chối việc không phù hợp. Những câu chuyện trong sách minh họa cái giá của lịch trình quá tải và sự phân tán chú ý. Các chương tiếp theo gợi ý cách tạo khoảng trống để suy nghĩ, nghỉ ngơi và chuẩn bị. Trọng tâm không phải năng suất tối đa mà là dành nguồn lực cho điều tạo ra giá trị. Đây là lời mời thiết kế lại công việc và đời sống quanh ít cam kết hơn nhưng có ý nghĩa hơn.',
    en: 'Greg McKeown distinguishes doing more from focusing on the right things. He calls the second approach essentialism: deliberate choice rather than reacting to every request. The book encourages readers to identify priorities, consider trade-offs, and decline commitments that do not fit. Its examples show the costs of overloaded schedules and divided attention. Later chapters suggest creating room to think, rest, and prepare. The aim is not maximum productivity but directing resources toward what matters. It invites readers to shape work and life around fewer, more meaningful commitments.',
  },
  mindset: {
    vi: 'Carol S. Dweck trình bày hai cách nhìn về năng lực: tư duy cố định và tư duy phát triển. Người có tư duy cố định dễ xem khả năng là thứ khó thay đổi, còn tư duy phát triển coi kỹ năng có thể được bồi đắp qua học tập. Sách xem xét cách những niềm tin này ảnh hưởng đến việc đón nhận thử thách và phản hồi. Tác giả đưa các ví dụ từ trường học, thể thao, công việc và gia đình. Một điểm quan trọng là tư duy phát triển không đồng nghĩa với chỉ cố gắng nhiều hơn. Người học còn cần chiến lược phù hợp, phản hồi hữu ích và sự hỗ trợ đúng lúc. Cuốn sách giúp người đọc nhận diện ngôn ngữ và thói quen có thể khuyến khích việc học hỏi lâu dài.',
    en: 'Carol S. Dweck describes two ways of viewing ability: a fixed mindset and a growth mindset. A fixed mindset treats ability as difficult to change, while a growth mindset sees skills as developable through learning. The book examines how these beliefs affect responses to challenge and feedback. Examples come from school, sports, work, and family life. A key point is that a growth mindset does not mean simply trying harder. Learners also need useful strategies, constructive feedback, and appropriate support. The book helps readers notice language and habits that can encourage ongoing learning.',
  },
  'conversation-sicily': {
    vi: 'Silvestro rời miền Bắc nước Ý để trở về Sicily sau nhiều năm xa nhà. Tại quê cũ, anh gặp lại mẹ và trò chuyện với những người mình gặp trên đường. Các cuộc đối thoại ngắn dần chuyển từ chuyện riêng sang những câu hỏi rộng hơn về đau khổ và phẩm giá. Cấu trúc sách có vẻ giản dị nhưng giàu tính biểu tượng. Sicily hiện lên vừa thân thuộc vừa xa cách qua ký ức của người trở về. Tác phẩm đặt sự thờ ơ trước bất công bên cạnh khát vọng được sống tử tế. Đây là tiểu thuyết ngắn, giàu chất suy tưởng và không kể chuyện theo nhịp phiêu lưu thông thường.',
    en: 'Silvestro leaves northern Italy and returns to Sicily after many years away. At home, he reunites with his mother and speaks with people he meets along the way. These brief conversations move from personal matters toward questions of suffering and human dignity. The book’s simple structure carries a strong symbolic quality. Sicily feels both familiar and distant through the memories of someone returning. The novel places indifference to injustice beside the desire to live decently. It is a short, reflective work rather than a conventional adventure narrative.',
  },
  'enchanted-april': {
    vi: 'Bốn phụ nữ người Anh cùng thuê một lâu đài ven biển Italy trong tháng Tư. Họ muốn tạm rời những bổn phận và bất mãn của cuộc sống thường ngày. Không gian mới khiến mỗi người có dịp quan sát lại chính mình và những người đồng hành. Tính cách khác biệt tạo nên những va chạm nhẹ nhàng lẫn khoảnh khắc gần gũi. Ánh nắng, khu vườn và nhịp sống chậm góp phần làm dịu bầu không khí. Câu chuyện theo dõi cách tình bạn và lòng cởi mở có thể nảy nở ngoài dự tính. Đây là tiểu thuyết duyên dáng, giàu không khí nghỉ ngơi và niềm vui hồi phục.',
    en: 'Four English women share the rent on a seaside castle in Italy for the month of April. They hope to step away from the duties and frustrations of ordinary life. A new setting gives each woman room to reconsider herself and her companions. Their different temperaments bring both gentle friction and unexpected closeness. Sunshine, gardens, and a slower pace soften the atmosphere. The story follows friendship and openness taking root in surprising ways. It is a graceful novel about rest, renewal, and rediscovered pleasure.',
  },
  'walk-woods': {
    vi: 'Bill Bryson quyết định đi bộ trên đường mòn Appalachian cùng người bạn Stephen Katz. Chuyến đi đưa họ qua rừng núi, thời tiết thất thường và những thử thách thực tế của việc đi bộ đường dài. Hai người bạn có năng lực và tính khí khác nhau, tạo nên nhiều tình huống hài hước. Bryson xen trải nghiệm cá nhân với lịch sử hình thành con đường và vùng đất quanh nó. Sách cũng giải thích hệ sinh thái rừng cùng những áp lực lên thiên nhiên hoang dã. Nhịp kể cân bằng giữa phiêu lưu, thông tin và tự trào. Đây là du ký phi hư cấu dành cho người thích thiên nhiên nhưng không cần là dân đi bộ chuyên nghiệp.',
    en: 'Bill Bryson sets out to hike the Appalachian Trail with his friend Stephen Katz. The journey takes them through forests, changing weather, and the practical demands of long-distance walking. Their different temperaments and abilities lead to comic situations. Bryson combines personal experience with the history of the trail and the surrounding landscape. He also explains forest ecology and pressures on wilderness areas. The narrative balances adventure, information, and self-deprecating humor. It is nonfiction travel writing for nature lovers, not only experienced hikers.',
  },
  'bell-jar': {
    vi: 'Esther Greenwood là một sinh viên tài năng nhận được cơ hội thực tập tại New York. Dù bề ngoài đang tiến gần đến những cánh cửa nghề nghiệp, cô ngày càng thấy xa lạ với các kỳ vọng đặt lên mình. Khi trở về nhà, sức khỏe tinh thần của Esther tiếp tục sa sút và ảnh hưởng đến khả năng học tập, sinh hoạt. Tiểu thuyết theo sát trải nghiệm chủ quan của cô thay vì đưa ra một câu trả lời đơn giản. Hình ảnh chiếc chuông thủy tinh gợi cảm giác ngột ngạt và bị tách khỏi thế giới. Tác phẩm cũng chất vấn những giới hạn xã hội dành cho phụ nữ trẻ ở giữa thế kỷ XX. Sách đề cập trực tiếp đến trầm cảm và ý nghĩ tự tử, nên có thể không phù hợp với mọi độc giả.',
    en: 'Esther Greenwood is a talented student offered an internship in New York. Although professional opportunities seem to be opening before her, she feels increasingly alienated from the expectations placed upon her. After returning home, her mental health declines and disrupts her studies and daily life. The novel stays close to Esther’s perspective rather than offering a simple explanation. The image of a bell jar suggests suffocation and separation from the world. The book also questions the limits imposed on young women in the mid-twentieth century. It addresses depression and suicidal thoughts directly, so it may not suit every reader.',
  },
  'god-small-things': {
    vi: 'Cặp song sinh Estha và Rahel lớn lên tại Kerala trong một gia đình nhiều yêu thương nhưng cũng nhiều tổn thương. Câu chuyện đan xen ký ức tuổi thơ với những biến cố làm thay đổi cuộc đời họ. Các mảnh thời gian được hé lộ dần, khiến những chi tiết nhỏ ban đầu có thêm ý nghĩa. Tác phẩm quan sát cách đẳng cấp, giới tính và quy tắc xã hội chi phối những lựa chọn riêng tư. Ngôn ngữ giàu nhịp điệu kết hợp hình ảnh thiên nhiên với những đồ vật rất đời thường. Bầu không khí vừa đẹp vừa bất an, có lúc mang sắc thái hài hước và có lúc đau buồn. Đây là tiểu thuyết giàu phong cách, đòi hỏi người đọc chú ý đến cấu trúc phi tuyến tính.',
    en: 'Twins Estha and Rahel grow up in Kerala in a family marked by both affection and hurt. Their childhood memories intertwine with events that alter the course of their lives. Time is revealed in fragments, giving early details new meaning as the story unfolds. The novel examines how caste, gender, and social rules shape private choices. Lyrical language brings natural imagery together with ordinary objects. The mood is beautiful yet uneasy, moving between humor and grief. Its nonlinear structure rewards readers who pay close attention to recurring details.',
  },
  'white-nights': {
    vi: 'Một người kể chuyện cô độc lang thang trên những con phố Saint Petersburg trong các đêm mùa hè sáng trắng. Anh gặp Nastenka và hai người dần kể cho nhau nghe về cuộc đời mình. Những cuộc trò chuyện tạo nên sự thân mật nhanh chóng giữa hai con người vốn ít có kết nối. Chàng trai mơ mộng hy vọng tình bạn ấy sẽ trở thành tình yêu. Nastenka lại đang chờ đợi một người khác, khiến hy vọng của anh trở nên bấp bênh. Truyện vừa khám phá sự khác nhau giữa tưởng tượng lãng mạn và đời sống thực. Tác phẩm ngắn, giàu cảm xúc và tập trung vào nỗi cô đơn hơn là các biến cố lớn.',
    en: 'A solitary narrator wanders the streets of Saint Petersburg during its bright summer nights. He meets Nastenka, and they gradually share stories about their lives. Their conversations create swift intimacy between two people who have felt disconnected. The dreamer hopes their friendship might become love. Nastenka, however, is waiting for someone else, leaving his hope uncertain. The novella explores the gap between romantic imagination and ordinary life. It is brief and emotionally focused, centering loneliness more than dramatic events.',
  },
  'crime-punishment': {
    vi: 'Raskolnikov là một cựu sinh viên nghèo sống trong thành phố Saint Petersburg ngột ngạt. Anh tự thuyết phục mình rằng một số người có thể vượt lên trên những quy tắc đạo đức thông thường. Sau khi phạm tội, anh bị cuốn vào nỗi sợ, cảm giác tội lỗi và những lời biện hộ cho hành động của mình. Những cuộc gặp với Sonia, gia đình và điều tra viên làm lung lay thế giới quan ấy. Tiểu thuyết đi sâu vào mối quan hệ giữa ý tưởng, lựa chọn và hậu quả. Không khí căng thẳng được tạo nên chủ yếu từ cuộc đấu tranh tâm lý của nhân vật. Tác phẩm đặt câu hỏi về trách nhiệm, lòng trắc ẩn và khả năng chuộc lỗi.',
    en: 'Raskolnikov is an impoverished former student living in the oppressive city of Saint Petersburg. He convinces himself that certain people may rise above ordinary moral rules. After committing a crime, he is consumed by fear, guilt, and attempts to justify his actions. Encounters with Sonia, his family, and an investigator challenge that worldview. The novel examines the relationship between ideas, choices, and consequences. Much of its tension comes from the protagonist’s psychological struggle. It asks difficult questions about responsibility, compassion, and the possibility of redemption.',
  },
  'on-earth': {
    vi: 'Little Dog viết một lá thư gửi người mẹ không biết đọc của mình. Từ điểm nhìn ấy, anh lần về tuổi thơ trong một gia đình Việt Nam nhập cư tại Hoa Kỳ. Ký ức về mẹ và bà ngoại cho thấy tình thương gắn liền với những tổn thương được truyền qua nhiều thế hệ. Khi lớn lên, Little Dog cũng khám phá tình yêu, ham muốn và cách mình hiểu về bản thân. Những đoạn hồi tưởng riêng tư mở rộng thành suy ngẫm về chiến tranh, lao động và ngôn ngữ. Văn xuôi giàu hình ảnh khiến cuốn sách nằm giữa tiểu thuyết và lời tự sự trữ tình. Đây là tác phẩm giàu cảm xúc về gia đình, di cư và nỗ lực tìm cách được lắng nghe.',
    en: 'Little Dog writes a letter to his mother, who cannot read it. From this intimate perspective, he revisits his childhood in a Vietnamese immigrant family in the United States. Memories of his mother and grandmother show how love can coexist with pain passed across generations. As he grows older, Little Dog explores desire, intimacy, and his understanding of himself. Personal recollections widen into reflections on war, labor, and language. Lyrical prose places the book between a novel and a poetic act of testimony. It is an emotionally rich work about family, migration, and the effort to be heard.',
  },
  'wedding-people': {
    vi: 'Phoebe đến một khách sạn ở Newport khi đang trải qua khủng hoảng cá nhân. Tại đó, cô bất ngờ trở thành vị khách duy nhất không thuộc đoàn dự đám cưới. Cô dâu Lila nhận ra Phoebe và kéo cô vào những cuộc trò chuyện ngoài dự tính. Sự khác biệt giữa hai người tạo nên những tình huống vừa hài hước vừa chân thành. Kỳ nghỉ xa lạ buộc Phoebe nhìn thẳng vào mất mát và những lựa chọn của mình. Cuốn sách kết hợp không khí xã hội náo nhiệt với những khoảnh khắc trầm lắng về nỗi đau. Đây là tiểu thuyết đương đại về sự kết nối và khả năng bắt đầu lại khi đời sống chưa có lời giải rõ ràng.',
    en: 'Phoebe arrives at a Newport hotel while facing a personal crisis. There, she unexpectedly becomes the only guest who is not part of a wedding party. The bride, Lila, notices Phoebe and draws her into conversations neither woman planned. Their differences create moments that are both funny and sincere. The unfamiliar setting pushes Phoebe to face loss and the choices before her. The novel pairs a lively social backdrop with quieter reflections on grief. It is a contemporary story about connection and starting over before life has an easy answer.',
  },
  'wretched-earth': {
    vi: 'Frantz Fanon viết về những hệ quả của chủ nghĩa thực dân đối với chính trị, văn hóa và tâm lý. Ông phân tích cách chế độ thuộc địa tổ chức quyền lực và tác động đến cảm nhận về bản thân của người bị trị. Cuốn sách bàn về phong trào giải phóng dân tộc và những lựa chọn trong cuộc đấu tranh chống áp bức. Fanon cũng cảnh báo rằng độc lập chính trị không tự động tạo ra một xã hội công bằng. Ông đặt câu hỏi về vai trò của giới tinh hoa và sự hình thành ý thức dân tộc. Đây là văn bản lý luận có ảnh hưởng lớn trong các cuộc tranh luận về giải thực dân. Lập luận trực diện và bối cảnh lịch sử khiến sách phù hợp với người đọc muốn tiếp cận tư tưởng chính trị nghiêm túc.',
    en: 'Frantz Fanon examines the political, cultural, and psychological consequences of colonialism. He analyzes how colonial rule organizes power and shapes the self-understanding of those it subjugates. The book discusses national liberation movements and choices in struggles against oppression. Fanon also warns that political independence does not automatically produce a just society. He questions the role of elites and the formation of national consciousness. This is an influential work in debates about decolonization. Its direct argument and historical context suit readers seeking a serious encounter with political thought.',
  },
  'remarkably-bright-creatures': {
    vi: 'Tova Sullivan làm ca đêm tại một thủy cung ở thị trấn ven biển. Trong những giờ yên tĩnh, cô hình thành mối gắn bó khác thường với Marcellus, một con bạch tuộc thông minh. Cameron, một chàng trai đang tìm kiếm gia đình, cũng bước vào cuộc sống của Tova. Những tuyến nhân vật dần giao nhau quanh các câu hỏi về mất mát và nguồn cội. Marcellus quan sát con người bằng sự tò mò cùng một chút tinh quái. Câu chuyện pha trộn bí ẩn nhẹ nhàng, tình bạn và những khoảnh khắc hài hước. Đây là tiểu thuyết ấm áp về sự kết nối có thể xuất hiện ở những nơi không ngờ tới.',
    en: 'Tova Sullivan works the night shift at an aquarium in a coastal town. During the quiet hours, she forms an unusual bond with Marcellus, a remarkably intelligent octopus. Cameron, a young man searching for his family, also enters Tova’s life. Their stories gradually converge around questions of grief and belonging. Marcellus observes people with curiosity and a mischievous edge. The novel blends a gentle mystery with friendship and moments of humor. It is a warm story about connection emerging in unexpected places.',
  },
  yellowface: {
    vi: 'June Hayward là một nhà văn chưa đạt được thành công mà cô mong muốn. Sau khi người bạn Athena Liu qua đời, June lấy bản thảo của Athena và xuất bản nó dưới tên mình. Thành công đến nhanh nhưng kéo theo những câu hỏi về nguồn gốc tác phẩm và quyền kể câu chuyện của ai. June ngày càng bị cuốn vào việc kiểm soát hình ảnh công chúng của mình. Cuốn sách dùng giọng kể châm biếm để soi vào tham vọng, phân biệt chủng tộc và quyền lực trong ngành xuất bản. Nó cũng đặt vấn đề về cách văn hóa được đại diện và tiếp thị. Đây là tiểu thuyết gây tranh luận, có nhịp nhanh và góc nhìn cố ý không đáng tin cậy.',
    en: 'June Hayward is a writer who has not found the success she wants. After her friend Athena Liu dies, June takes Athena’s manuscript and publishes it under her own name. Success arrives quickly but brings questions about the book’s origins and who has the right to tell a story. June becomes increasingly absorbed in controlling her public image. The novel uses satire to examine ambition, racism, and power in publishing. It also questions how culture is represented and marketed. This brisk, provocative story is narrated by someone whose account cannot always be trusted.',
  },
  'convenience-store-woman': {
    vi: 'Keiko Furukura làm việc tại một cửa hàng tiện lợi ở Tokyo và cảm thấy mình thuộc về nơi đó. Cô học các quy trình, âm thanh và cách ứng xử của đồng nghiệp để hòa vào nhịp vận hành của cửa hàng. Người thân và người quen lại xem công việc cùng cuộc sống độc thân của cô là bất thường. Khi một người đàn ông mới xuất hiện, Keiko phải cân nhắc sức ép phải thay đổi để được chấp nhận. Giọng kể tỉnh táo tạo nên sự hài hước khô và làm nổi bật những quy tắc xã hội vô hình. Tiểu thuyết đặt câu hỏi ai có quyền định nghĩa một cuộc đời bình thường. Đây là tác phẩm ngắn, sắc sảo về bản sắc và quyền lựa chọn cách sống.',
    en: 'Keiko Furukura works at a Tokyo convenience store and feels that she belongs there. She learns its routines, sounds, and social cues to fit into the store’s rhythm. Her family and acquaintances regard her job and single life as abnormal. When a new man enters her life, Keiko must consider the pressure to change in order to be accepted. The cool narration creates dry humor and highlights invisible social rules. The novel asks who gets to define a normal life. It is a sharp, compact story about identity and the freedom to choose how to live.',
  },
  alchemist: {
    vi: 'Henry David Thoreau sống trong một căn nhà nhỏ bên hồ Walden ở Massachusetts trong hơn hai năm. Ông tự dựng nơi ở, trồng thực phẩm và ghi chép những biến đổi của cảnh vật quanh hồ. Trải nghiệm ấy trở thành cơ hội để thử nghiệm một đời sống ít phụ thuộc vào tiện nghi vật chất. Sách kết hợp hồi ký với những suy tưởng về lao động, thời gian và sự tự lập. Thoreau quan sát các mùa và các loài vật bằng sự chú ý gần gũi. Ông cũng phê bình nhịp sống xã hội khiến con người bận rộn mà ít suy nghĩ về điều mình thật sự cần. Đây là tác phẩm kinh điển về thiên nhiên và sống có chủ đích, không phải hướng dẫn sinh tồn thực hành.',
    en: 'Henry David Thoreau lives in a small cabin beside Walden Pond in Massachusetts for more than two years. He builds his home, grows food, and records changes in the landscape around the pond. The experience becomes an experiment in living with less dependence on material comforts. The book combines memoir with reflections on work, time, and self-reliance. Thoreau observes the seasons and wildlife with close attention. He also criticizes a social pace that keeps people busy without asking what they truly need. It is a classic of nature writing and deliberate living, not a practical survival manual.',
  },
  'portrait-artist': {
    vi: '<em>A Portrait of the Artist as a Young Man</em> cho mình cảm giác như đang trải qua quá trình trưởng thành từ bên trong đầu của một người, hơn là chỉ đọc câu chuyện về một người lớn lên. Joyce theo Stephen Dedalus từ thời thơ ấu đến lúc trưởng thành, nhưng điều thú vị nhất là ngôn ngữ của cuốn sách cũng thay đổi cùng nhân vật. Ban đầu, mọi thứ khá đơn giản, cảm tính và gần như trẻ con, rồi văn phong dần trở nên phức tạp hơn khi Stephen ý thức rõ hơn về bản thân. Cuốn sách xoay quanh rất nhiều xung đột: tôn giáo, gia đình, dân tộc, cảm giác tội lỗi, tham vọng và mong muốn trở thành nghệ sĩ. Stephen không phải kiểu nhân vật dễ mến, nhưng chính điều đó lại khiến cậu khá thật. Cậu kiêu hãnh, nhạy cảm, bối rối và luôn cố định nghĩa bản thân bằng cách chống lại những kỳ vọng xung quanh. Một số đoạn, đặc biệt là những phần liên quan đến tôn giáo, khá nặng và ngột ngạt, nhưng chúng cho thấy nỗi sợ và cảm giác tội lỗi đã định hình tâm trí Stephen sâu đến mức nào. Điều mình thích nhất là sự giằng co giữa nhu cầu thuộc về một nơi nào đó và mong muốn trốn khỏi nó. Stephen muốn thoát khỏi tất cả những gì đã tạo nên mình, nhưng lại không bao giờ hoàn toàn cắt đứt được với chúng. Đây không phải cuốn dễ đọc, và đôi lúc nó thiên về ý tưởng hơn là cảm xúc. Tuy vậy, vẫn có những đoạn rất đẹp khi Joyce diễn tả cảm giác nhận ra một phiên bản mới của chính mình. Với mình, đây không chỉ là tiểu thuyết về việc trở thành nghệ sĩ, mà còn là câu chuyện về quá trình đau đớn để trở thành một con người độc lập.',
    en: '<em>A Portrait of the Artist as a Young Man</em> feels like growing up from the inside rather than simply reading about someone growing up. Joyce follows Stephen Dedalus from childhood into early adulthood, but the most interesting part is how the language itself changes with him. At the beginning, everything feels simple, sensory, and almost childlike, then the prose becomes more complex as Stephen becomes more self-aware. The novel is full of conflict: religion, family, nationality, guilt, ambition, and the desire to become an artist. Stephen can be difficult to like, but that is also what makes him feel real. He is proud, sensitive, confused, and constantly trying to define himself against the expectations around him. Some parts, especially the religious passages, can feel intense and heavy, but they show how deeply fear and guilt shape his mind. What I liked most is the tension between belonging and escaping. Stephen wants to leave behind the forces that formed him, but he can never completely separate himself from them. The book is not always easy, and at times it feels more intellectual than emotional. Still, there are moments of real beauty when Joyce captures the feeling of discovering a new version of yourself. For me, it is less a novel about becoming an artist than about the painful process of becoming your own person.',
  },
  'sweetness-power': {
    vi: 'Sidney Mintz kể lại cách đường thay đổi từ một mặt hàng xa xỉ thành thực phẩm phổ biến ở Anh. Ông lần theo mối liên hệ giữa việc tiêu thụ đường với thương mại xuyên Đại Tây Dương. Lịch sử ấy gắn chặt với lao động đồn điền và chế độ nô lệ. Cuốn sách cũng xem xét cách đường đi vào thói quen ăn uống và đời sống của các tầng lớp khác nhau. Mintz kết nối lịch sử ẩm thực với kinh tế, quyền lực và chủ nghĩa thực dân. Lập luận dựa trên tư liệu nhân học và lịch sử thay vì chỉ kể về một nguyên liệu. Đây là nghiên cứu dễ tiếp cận cho người muốn hiểu một món ăn quen thuộc trong bối cảnh toàn cầu.',
    en: 'Sidney Mintz traces sugar’s transformation from a luxury commodity into a common food in Britain. He follows the connection between sugar consumption and Atlantic trade. That history is inseparable from plantation labor and slavery. The book also examines how sugar entered eating habits and the lives of different social classes. Mintz links food history to economics, power, and colonialism. His argument draws on anthropology and history rather than simply chronicling an ingredient. It is an accessible study for readers curious about familiar foods in a global context.',
  },
  'tale-genji': {
    vi: '<em>The Tale of Genji</em> với mình không hẳn giống một câu chuyện duy nhất, mà giống như nhìn cả một thế giới từ từ thay đổi rồi biến mất. Murasaki Shikibu viết về đời sống cung đình, tình yêu, ghen tuông, cái đẹp và mất mát với sự chú ý rất tinh tế đến những cảm xúc nhỏ. Genji có sức hấp dẫn và khá nhạy cảm, nhưng đồng thời cũng là một nhân vật đầy khiếm khuyết, và nhiều mối quan hệ của chàng khá khó chấp nhận nếu nhìn bằng góc nhìn hiện đại. Điều khiến mình thích nhất không thực sự là những chuyện tình, mà là cảm giác xuyên suốt rằng không có thứ gì đẹp đẽ tồn tại mãi mãi. Mùa thay đổi, con người già đi, các mối quan hệ nhạt dần, và ngay cả những cảm xúc mãnh liệt nhất cuối cùng cũng trở thành ký ức. Cuốn sách có thể khá chậm vì phần lớn mọi chuyện diễn ra qua đối thoại, thư từ, thơ và những cử chỉ rất nhỏ thay vì những biến cố lớn. Nhưng khi quen với nhịp đó, mình lại thấy chính sự chậm rãi làm nên vẻ đẹp của tác phẩm. Có một nét buồn gần như luôn hiện diện, vì các nhân vật dường như lúc nào cũng nhận thức được thời gian đang trôi qua. Những miêu tả về trang phục, khu vườn, âm nhạc, hương thơm và thời tiết khiến thế giới trong truyện vừa tinh tế vừa xa xôi. Tuy vậy, những cảm xúc như cô đơn, ham muốn, bất an hay hối tiếc lại rất quen thuộc. Mình đặc biệt thích cách cái đẹp trong cuốn sách gần như lúc nào cũng đi cùng nỗi buồn. Đọc nó đôi khi giống như đang ngắm một thứ rất đẹp nhưng đồng thời đã biết rằng rồi mình sẽ mất nó. Đây là một cuốn dài và không dễ đọc, nhưng cái buồn rất nhẹ và rất đẹp của <em>The Tale of Genji</em> thực sự ở lại khá lâu sau khi đọc xong.',
    en: '<em>The Tale of Genji</em> feels less like a single story and more like watching an entire world slowly change and disappear. Murasaki Shikibu writes about court life, love, jealousy, beauty, and loss with an incredible attention to small emotional details. Genji himself is charming and sensitive, but he is also deeply flawed, and many of his relationships are uncomfortable to read from a modern perspective. What interested me most was not the romance itself, but the constant feeling that nothing beautiful can last. Seasons change, people grow older, relationships fade, and even the most intense emotions eventually become memories. The novel can feel slow because so much happens through conversations, letters, poems, and subtle gestures rather than dramatic action. But once I got used to that rhythm, the slowness became part of what made it beautiful. There is something almost melancholic in the way characters are always aware of time passing. The descriptions of clothing, gardens, music, incense, and weather create a world that feels extremely delicate and distant. At the same time, the emotions—loneliness, desire, insecurity, regret—still feel surprisingly familiar. I especially liked how beauty in this book is almost always connected to sadness. Reading it sometimes feels like looking at something beautiful while already knowing that you are going to lose it. It is long and demanding, but there is a quiet sadness in <em>The Tale of Genji</em> that stayed with me after I stopped reading.',
  },
  'nostalgie-heureuse': {
    vi: 'Amélie Nothomb trở lại Nhật Bản, nơi gắn với tuổi thơ và những năm tháng đầu đời của bà. Chuyến đi đưa bà đến những địa điểm quen thuộc và gặp lại những người từng quan trọng. Hiện tại liên tục đối thoại với ký ức, khiến việc trở về không chỉ là tìm lại một nơi chốn. Tác giả quan sát cách thời gian làm thay đổi cả con người lẫn cảm giác thuộc về. Cuốn sách pha trộn du ký, hồi ức và tự truyện ngắn. Nhan đề gợi một nỗi hoài niệm vừa vui vừa man mác buồn. Đây là tác phẩm cô đọng dành cho người thích văn chương về ký ức và những cuộc trở lại.',
    en: 'Amélie Nothomb returns to Japan, a place tied to her childhood and formative years. The journey takes her to familiar locations and reunites her with people who once mattered. The present continually meets memory, making the return more than a search for a place. Nothomb observes how time changes both people and their sense of belonging. The book blends travel writing, recollection, and brief autobiography. Its title suggests nostalgia that is joyful yet touched by sadness. It is a concise work for readers drawn to memory and the experience of returning.',
  },
  'theo-golden': {
    vi: 'Theo, một người đàn ông ít nói, đến thị trấn Golden và lưu trú tại một nhà trọ địa phương. Trong quán cà phê, ông chú ý đến những bức chân dung của cư dân được treo trên tường. Ông bắt đầu tìm hiểu các câu chuyện phía sau từng gương mặt. Những hành động quan tâm của Theo dần tạo ra các mối liên hệ giữa người dân. Tiểu thuyết chuyển sự chú ý từ nhân vật bí ẩn sang những con người bình thường quanh ông. Lòng tốt và cảm giác được nhìn nhận trở thành những chủ đề trung tâm. Đây là câu chuyện nhẹ nhàng về cộng đồng, phẩm giá và những cử chỉ nhỏ có thể làm người khác thấy mình thuộc về.',
    en: 'Theo, a quiet man, arrives in the town of Golden and stays at a local inn. At a coffee shop, he notices portraits of residents displayed on the wall. He begins learning the stories behind the faces. Theo’s acts of attention gradually create connections among the townspeople. The novel shifts focus from its mysterious visitor to the ordinary people around him. Kindness and the feeling of being seen become central themes. It is a gentle story about community, dignity, and small gestures that help people feel they belong.',
  },
  'new-grub-street': {
    vi: 'George Gissing đặt câu chuyện giữa những nhà văn và nhà báo ở London cuối thế kỷ XIX. Họ phải tìm cách kiếm sống trong một thị trường xuất bản đang thay đổi. Edwin Reardon theo đuổi tham vọng văn chương nhưng gặp khó khăn về tài chính. Jasper Milvain chọn một con đường thực dụng hơn để tiến thân. Những lựa chọn đối lập cho thấy lý tưởng nghệ thuật va chạm với nhu cầu sinh tồn. Cuốn tiểu thuyết quan sát giai cấp, hôn nhân và quyền lực của thị hiếu độc giả. Đây là bức tranh hiện thực về lao động sáng tạo, phù hợp với người tò mò về đời sống văn chương và xuất bản.',
    en: 'George Gissing sets the novel among writers and journalists in late nineteenth-century London. They must earn a living in a changing publishing market. Edwin Reardon pursues literary ambition but struggles financially. Jasper Milvain chooses a more pragmatic route to advancement. Their contrasting paths show artistic ideals colliding with the need to survive. The novel examines class, marriage, and the power of readers’ tastes. It is a realist portrait of creative labor for anyone curious about literary and publishing life.',
  },
  'hyunam-bookshop': {
    vi: 'Yeongju rời bỏ công việc và cuộc sống cũ để mở một hiệu sách nhỏ ở Seoul. Việc điều hành cửa tiệm đưa cô đến với những nhân viên và khách hàng đang tìm cách sắp xếp lại cuộc sống. Các cuộc trò chuyện thường xoay quanh công việc, mệt mỏi và điều khiến mỗi người cảm thấy bình yên. Những nhân vật không thay đổi chỉ sau một đêm mà dần tìm được nhịp sống phù hợp hơn. Không khí hiệu sách tạo nên một điểm gặp gỡ ấm áp giữa những người xa lạ. Tiểu thuyết ưu tiên sự suy ngẫm và những bước ngoặt nhỏ hơn là kịch tính lớn. Đây là lựa chọn êm dịu cho người thích sách, quán xá và câu chuyện về việc bắt đầu lại.',
    en: 'Yeongju leaves her job and former life to open a small bookshop in Seoul. Running the shop brings her together with employees and customers trying to reorganize their lives. Their conversations often turn to work, exhaustion, and what gives each person peace. The characters do not change overnight but gradually seek a pace that suits them better. The bookshop becomes a welcoming meeting place for strangers. The novel favors reflection and small turning points over high drama. It is a gentle choice for readers drawn to books, cafés, and stories of beginning again.',
  },
  'martin-eden': {
    vi: 'Martin Eden là một thủy thủ trẻ tự học sau khi bước vào một gia đình thuộc tầng lớp khá giả. Anh quyết tâm trở thành nhà văn và dành nhiều năm đọc, viết, sửa bản thảo. Tình yêu dành cho Ruth thúc đẩy anh hướng đến một đời sống mà trước đó anh chưa từng biết. Những khác biệt về giai cấp ảnh hưởng đến cách hai người hiểu nhau. Khi thành công và danh tiếng đến, Martin phải đối diện với khoảng cách giữa hình ảnh anh theo đuổi và thực tế. Jack London dùng hành trình cá nhân để xem xét tham vọng, lao động và niềm tin vào thành công. Đây là tiểu thuyết trưởng thành giàu chất phê phán, không chỉ là câu chuyện vươn lên.',
    en: 'Martin Eden is a young sailor who begins educating himself after entering the home of a wealthier family. He resolves to become a writer and spends years reading, drafting, and revising. His love for Ruth draws him toward a life he has never known. Class differences shape how the two understand one another. When recognition and success arrive, Martin confronts the gap between the image he pursued and reality. Jack London uses one man’s ambition to examine labor, aspiration, and belief in success. It is a critical coming-of-age novel, not simply an upward-mobility story.',
  },
  'kafka-diaries': {
    vi: 'Những cuốn nhật ký của Franz Kafka ghi lại nhiều năm đời sống và sáng tác của ông. Các trang viết xen kẽ quan sát thường ngày, giấc mơ, ghi chú về sức khỏe và suy nghĩ về các mối quan hệ. Nhiều đoạn là phác thảo hoặc thử nghiệm văn chương chưa hoàn chỉnh. Người đọc thấy một người viết vừa tự nghi ngờ vừa kiên trì tìm kiếm cách diễn đạt. Bối cảnh Prague và công việc văn phòng xuất hiện bên cạnh những trăn trở riêng tư. Tập sách không tạo thành một tự truyện có cốt truyện liên tục. Nó phù hợp với người muốn quan sát trực tiếp quá trình sáng tác và thế giới nội tâm của Kafka.',
    en: 'Franz Kafka’s diaries record years of his life and writing. The pages move among everyday observations, dreams, notes on health, and thoughts about relationships. Many entries are unfinished sketches or literary experiments. Readers encounter a writer who doubts himself while persistently searching for forms of expression. Prague and office work appear beside intensely private concerns. The collection does not form a continuous, plotted autobiography. It suits readers interested in the process of writing and Kafka’s inner world.',
  },
  'history-drunkenness': {
    vi: 'Mark Forsyth khảo sát cách con người uống rượu trong nhiều thời đại và nền văn hóa. Ông sắp xếp lịch sử theo những thay đổi trong tập quán và quan niệm về sự say xỉn. Các câu chuyện nối việc uống rượu với nghi lễ, giao tiếp xã hội và quyền lực. Giọng kể dí dỏm giúp những tư liệu lịch sử trở nên nhẹ nhàng, dễ đọc. Cuốn sách cũng cho thấy chuẩn mực về đồ uống thay đổi theo thời gian và địa điểm. Đây là một khảo cứu phổ thông chứ không phải hướng dẫn uống rượu hay khuyến khích sử dụng đồ uống có cồn. Người thích lịch sử đời sống thường ngày sẽ tìm thấy nhiều chi tiết thú vị.',
    en: 'Mark Forsyth surveys drinking customs across many periods and cultures. He organizes the history around changing habits and ideas about intoxication. The stories connect alcohol with ritual, social life, and power. A witty voice makes historical material approachable. The book also shows how norms around drink vary across time and place. This is popular history, not advice about drinking or an endorsement of alcohol use. Readers interested in the history of everyday life will find plenty of curious details.',
  },
  'salt-history': {
    vi: 'Mark Kurlansky theo dấu muối từ các kỹ thuật bảo quản thực phẩm đến thương mại và chính trị. Cuốn sách cho thấy một nguyên liệu phổ biến từng có ảnh hưởng lớn đến các nền kinh tế. Những tuyến buôn bán muối kết nối nhiều vùng và cộng đồng. Tác giả cũng kể về khai thác, thuế khóa và các xung đột liên quan đến nguồn cung. Các chi tiết ẩm thực giúp lịch sử kinh tế trở nên gần gũi hơn. Nội dung đi qua nhiều thời kỳ và địa điểm thay vì chỉ kể một câu chuyện tuyến tính. Đây là sách phi hư cấu giàu thông tin cho người tò mò về những vật dụng quen thuộc định hình lịch sử.',
    en: 'Mark Kurlansky follows salt from food preservation to trade and politics. The book shows how an ordinary substance once shaped economies. Salt routes connected regions and communities. The author also recounts extraction, taxation, and conflicts over supply. Culinary details make economic history feel immediate. The narrative moves across periods and places rather than following one simple storyline. It is an informative work of nonfiction for readers curious about how familiar things shape history.',
  },
  'last-speakers': {
    vi: 'Nhà ngôn ngữ học K. David Harrison gặp những người nói các ngôn ngữ đang có nguy cơ biến mất. Những chuyến đi đưa ông đến nhiều cộng đồng có lịch sử và hoàn cảnh khác nhau. Người kể chuyện ghi lại cách ngôn ngữ gắn với tri thức địa phương, ký ức và quan hệ cộng đồng. Mỗi ngôn ngữ mở ra những cách phân loại và diễn đạt thế giới riêng. Sách giải thích vì sao việc truyền ngôn ngữ giữa các thế hệ có thể bị gián đoạn. Tác giả cũng quan tâm đến nỗ lực lưu giữ và phục hồi tiếng nói bản địa. Đây là tác phẩm phi hư cấu kết hợp du ký với ngôn ngữ học, hướng đến sự tôn trọng hơn là sự tò mò đơn thuần.',
    en: 'Linguist K. David Harrison meets speakers of languages at risk of disappearing. His travels bring him to communities with distinct histories and circumstances. He records how language carries local knowledge, memory, and community relationships. Each language offers particular ways to classify and describe the world. The book explains why transmission between generations can break down. Harrison also attends to efforts to document and revitalize Indigenous languages. This nonfiction work combines travel writing with linguistics and encourages respect rather than mere curiosity.',
  },
  orientalism: {
    vi: 'Edward Said khảo sát cách các học giả, nhà văn và chính quyền phương Tây mô tả phương Đông. Ông cho rằng những hình ảnh này không chỉ là quan sát trung lập về các nền văn hóa khác. Chúng có lịch sử gắn với quyền lực và sự thống trị thuộc địa. Cuốn sách xem xét cách tri thức được tạo ra, lưu truyền và dùng để định hình chính sách. Said cũng chất vấn ranh giới giữa người quan sát và đối tượng bị mô tả. Tác phẩm có ảnh hưởng sâu rộng đến nghiên cứu văn hóa và hậu thuộc địa. Đây là công trình lý luận nhiều lập luận, thích hợp để đọc cùng hiểu biết về bối cảnh lịch sử của nó.',
    en: 'Edward Said examines how Western scholars, writers, and governments have represented the East. He argues that these images are not simply neutral observations of other cultures. They have a history bound up with power and colonial domination. The book considers how knowledge is produced, circulated, and used to shape policy. Said also questions the boundary between the observer and the people being described. The work has had a broad influence on cultural and postcolonial studies. It is a theory-rich book best read with attention to its historical context.',
  },
  'purity-danger': {
    vi: 'Mary Douglas nghiên cứu những quan niệm về sạch sẽ, ô uế và cấm kỵ trong các xã hội. Bà cho rằng điều bị xem là bẩn thường phụ thuộc vào hệ thống phân loại của một cộng đồng. Những quy tắc vệ sinh và nghi lễ giúp con người sắp xếp thế giới quanh mình. Qua đó, cuốn sách nối biểu tượng văn hóa với trật tự xã hội. Douglas so sánh nhiều ví dụ nhân học để phát triển lập luận của mình. Tác phẩm mời người đọc xem xét những điều tưởng là tự nhiên hoặc phổ quát có thể bắt nguồn từ quy ước. Đây là nghiên cứu nền tảng, giàu khái niệm cho người quan tâm đến nhân học và văn hóa.',
    en: 'Mary Douglas studies ideas of cleanliness, pollution, and taboo across societies. She argues that what counts as dirty often depends on a community’s system of classification. Rules of hygiene and ritual help people organize the world around them. The book connects cultural symbols with social order. Douglas compares anthropological examples to develop her argument. The work invites readers to question whether things that seem natural or universal may arise from convention. It is a foundational, concept-rich study for readers interested in anthropology and culture.',
  },
  'madame-bovary': {
    vi: 'Emma Bovary kết hôn với một bác sĩ ở tỉnh lẻ nhưng không tìm thấy cuộc sống như mình tưởng tượng. Những cuốn tiểu thuyết lãng mạn nuôi dưỡng khát vọng về tình yêu mãnh liệt và sự xa hoa. Emma tìm cách thoát khỏi sự buồn chán bằng những mối quan hệ và khoản chi tiêu vượt quá khả năng. Các lựa chọn ấy kéo theo hậu quả cho cô và những người quanh mình. Flaubert khắc họa khoảng cách giữa đời sống thường ngày với những giấc mơ vay mượn. Lối văn quan sát lạnh và chính xác khiến tiểu thuyết vừa châm biếm vừa giàu cảm thông. Đây là tác phẩm kinh điển về ham muốn, hôn nhân và sức mạnh của những kỳ vọng không thể đạt tới.',
    en: 'Emma Bovary marries a country doctor but finds little of the life she imagined. Romantic novels feed her longing for passionate love and luxury. She tries to escape boredom through relationships and spending beyond her means. Those choices carry consequences for her and the people around her. Flaubert portrays the gap between ordinary life and borrowed dreams. His precise, coolly observant prose makes the novel both satirical and compassionate. It is a classic about desire, marriage, and the force of unattainable expectations.',
  },
  stoner: {
    vi: 'William Stoner lớn lên trong một gia đình nông dân ở Missouri và được gửi đi học nông nghiệp. Một khóa học văn chương khiến anh chọn gắn bó với việc nghiên cứu và giảng dạy tại đại học. Cuộc đời của Stoner diễn ra qua những năm tháng công việc, hôn nhân và quan hệ đồng nghiệp. Anh đối diện với thất vọng mà không biến mình thành một anh hùng phi thường. Tiểu thuyết chú ý đến những lựa chọn nhỏ và cách chúng tích lũy thành một đời người. Giọng kể điềm tĩnh khiến những biến cố riêng tư trở nên thấm thía. Đây là tác phẩm lặng lẽ về lao động trí óc, tình yêu và phẩm giá trong một cuộc sống bình thường.',
    en: 'William Stoner grows up on a Missouri farm and is sent to study agriculture. A literature course changes his direction, leading him to scholarship and university teaching. His life unfolds through work, marriage, and relationships with colleagues. He faces disappointment without becoming an extraordinary hero. The novel attends to small choices and the way they accumulate across a lifetime. Its quiet narration gives private setbacks lasting weight. It is a restrained story about intellectual work, love, and dignity in an ordinary life.',
  },
  'remains-of-the-day': {
    vi: 'Quản gia Stevens thực hiện một chuyến đi ngắn qua miền quê nước Anh sau nhiều năm làm việc tại Darlington Hall. Cảnh vật trên đường khiến ông nhớ lại những ngày phục vụ vị chủ cũ. Ông suy ngẫm về lòng trung thành, sự chuyên nghiệp và ý nghĩa của danh dự. Những hồi tưởng cũng hé lộ mối quan hệ với cô Kenton, người từng làm việc cùng ông. Stevens thường dùng bổn phận để tránh đối diện với cảm xúc của mình. Qua giọng kể tiết chế, cuốn sách đặt câu hỏi về những điều ta hy sinh cho công việc và niềm tin. Đây là tiểu thuyết tinh tế về ký ức, hối tiếc và khả năng nhìn lại cuộc đời.',
    en: 'Butler Stevens takes a short journey through the English countryside after years of service at Darlington Hall. The landscape prompts memories of his time working for the former lord of the house. He reflects on loyalty, professionalism, and the meaning of dignity. His recollections also reveal his relationship with Miss Kenton, a former colleague. Stevens often uses duty to avoid facing his feelings. Through his restrained narration, the book questions what people sacrifice for work and belief. It is a subtle novel about memory, regret, and looking back on a life.',
  },
  'book-of-disquiet': {
    vi: 'Cuốn sách tập hợp những mảnh ghi chép gắn với Bernardo Soares, một nhân viên kế toán ở Lisbon. Các đoạn văn không tạo thành cốt truyện liên tục mà chuyển giữa suy tưởng, hồi ức và quan sát. Công việc văn phòng và đường phố thành phố thường ngày trở thành điểm khởi đầu cho những câu hỏi nội tâm. Người viết suy ngẫm về cô đơn, trí tưởng tượng và cảm giác xa lạ với chính đời sống. Những mâu thuẫn trong suy nghĩ không được giải quyết thành một kết luận duy nhất. Hình thức rời rạc khiến cuốn sách có thể được đọc từng đoạn riêng. Đây là tác phẩm văn xuôi trữ tình dành cho người thích suy tưởng hơn là cốt truyện tuyến tính.',
    en: 'The book gathers fragments attributed to Bernardo Soares, an assistant bookkeeper in Lisbon. Its passages do not form a continuous plot but move among reflection, memory, and observation. Office work and city streets become starting points for inward questions. The narrator considers solitude, imagination, and estrangement from ordinary life. Contradictions in thought are not resolved into one final conclusion. Its fragmentary form allows the book to be read in separate sections. It is lyrical prose for readers drawn to reflection more than linear storytelling.',
  },
  'master-and-margarita': {
    vi: 'Một vị khách bí ẩn cùng đoàn tùy tùng kỳ quái xuất hiện ở Moscow thời Xô Viết. Sự có mặt của họ làm đảo lộn những quy tắc và thói quen của giới văn chương thành phố. Câu chuyện đan xen tuyến truyện ở Moscow với một câu chuyện khác về Jerusalem cổ đại. Margarita bước vào mạch truyện cùng tình yêu dành cho một nhà văn bị gạt ra ngoài lề. Yếu tố kỳ ảo tạo cơ hội để Bulgakov châm biếm kiểm duyệt, quan liêu và thói đạo đức giả. Tác phẩm kết hợp hài hước, huyền bí và suy tư về tự do sáng tạo. Đây là tiểu thuyết nhiều lớp, giàu trí tưởng tượng và thường có những chuyển cảnh bất ngờ.',
    en: 'A mysterious visitor and his strange entourage arrive in Soviet-era Moscow. Their presence disrupts the city’s literary circles and everyday routines. The narrative intertwines events in Moscow with another story set in ancient Jerusalem. Margarita enters the plot through her love for a writer pushed to the margins. Fantasy gives Bulgakov a way to satirize censorship, bureaucracy, and hypocrisy. The novel combines humor, the supernatural, and questions about creative freedom. It is an imaginative, layered work with frequent shifts in setting and tone.',
  },
  'the-door': {
    vi: 'Một nhà văn ở Budapest thuê Emerence làm công việc nhà và dần trở nên thân thiết với bà. Emerence có tính cách mạnh mẽ, giữ kín quá khứ và không cho người khác bước qua cánh cửa nhà mình. Mối quan hệ giữa hai người chứa đựng lòng biết ơn, sự lệ thuộc và những căng thẳng khó nói. Người kể chuyện nhìn lại tình bạn ấy từ nhiều năm sau. Cánh cửa trở thành biểu tượng cho quyền riêng tư và giới hạn của sự hiểu biết. Tiểu thuyết đặt câu hỏi về lòng tốt khi nó đi cùng nhu cầu kiểm soát người khác. Đây là câu chuyện sâu sắc, đôi khi nặng nề, về tình bạn và trách nhiệm đạo đức.',
    en: 'A writer in Budapest hires Emerence to help with household work, and the two gradually grow close. Emerence is strong-willed, guards her past, and keeps others from entering her home. Their relationship holds gratitude, dependence, and difficult tensions. The narrator looks back on the friendship years later. The door becomes a symbol of privacy and the limits of understanding another person. The novel asks what kindness means when it is mixed with a desire to control. It is a searching, sometimes heavy story about friendship and moral responsibility.',
  },
  'small-things-like-these': {
    vi: 'Bill Furlong là người buôn than ở một thị trấn Ireland vào mùa Giáng sinh năm 1985. Trong một chuyến giao hàng đến tu viện địa phương, anh chứng kiến điều khiến mình không thể làm ngơ. Trải nghiệm ấy gợi lại những ký ức về tuổi thơ và sự giúp đỡ anh từng nhận được. Bill phải cân nhắc giữa an toàn của gia đình với tiếng nói lương tâm. Câu chuyện diễn ra trong một khoảng thời gian ngắn nhưng mở ra vấn đề rộng về trách nhiệm cộng đồng. Văn xuôi tiết chế làm nổi bật những cử chỉ và khoảng lặng. Đây là tiểu thuyết ngắn về lòng can đảm và sự im lặng trước bất công, với chủ đề bạo hành có thể gây khó chịu cho một số độc giả.',
    en: 'Bill Furlong is a coal merchant in an Irish town at Christmas in 1985. During a delivery to a local convent, he witnesses something he cannot ignore. The experience recalls his own childhood and the help he once received. Bill must weigh his family’s security against his conscience. The story covers a brief period while opening onto questions of communal responsibility. Restrained prose makes gestures and silences especially important. It is a short novel about courage and silence in the face of injustice, with abuse-related themes that may distress some readers.',
  },
  'the-lonely-city': {
    vi: 'Olivia Laing viết về quãng thời gian sống một mình ở New York và cảm giác cô đơn đi cùng nó. Bà tìm đến các nghệ sĩ từng thể hiện sự cô lập và khao khát kết nối trong tác phẩm. Những cuộc đời và tác phẩm ấy trở thành lăng kính để đọc lại trải nghiệm cá nhân. Cuốn sách kết hợp hồi ký với phê bình nghệ thuật và lịch sử văn hóa. Laing cho thấy cô đơn không chỉ là trạng thái riêng tư mà còn chịu ảnh hưởng của xã hội. Việc nhìn thấy câu chuyện của người khác có thể mở ra một hình thức đồng cảm. Đây là sách phi hư cấu giàu suy tưởng dành cho người quan tâm đến nghệ thuật và đời sống đô thị.',
    en: 'Olivia Laing writes about living alone in New York and the loneliness that accompanied it. She turns to artists whose work expresses isolation and the desire for connection. Their lives and art become lenses through which she reconsiders her own experience. The book combines memoir with art criticism and cultural history. Laing presents loneliness as more than a private feeling, showing its social dimensions. Encountering other people’s stories can open a form of empathy. It is reflective nonfiction for readers interested in art and urban life.',
  },
  'map-of-salt-and-stars': {
    vi: 'Nour cùng gia đình rời khỏi Syria khi chiến tranh làm cuộc sống của họ trở nên nguy hiểm. Hành trình đương đại của cô được kể xen với câu chuyện về Rawiya, cô gái sống ở thế kỷ XII. Rawiya học vẽ bản đồ và lên đường cùng một nhà địa lý. Những cuộc hành trình cách nhau nhiều thế kỷ gặp nhau qua địa lý, tưởng tượng và ký ức. Cuốn sách đặt câu hỏi về quê hương khi con người buộc phải rời khỏi nơi mình thuộc về. Bản đồ và chuyện kể trở thành cách lưu giữ những nơi chốn đã mất hoặc chưa từng thấy. Đây là tiểu thuyết giàu hình ảnh về di cư, lòng can đảm và sức mạnh của việc kể chuyện.',
    en: 'Nour and her family leave Syria as war makes their lives unsafe. Her contemporary journey is interwoven with the story of Rawiya, a girl living in the twelfth century. Rawiya learns mapmaking and sets out with a geographer. The journeys, separated by centuries, meet through geography, imagination, and memory. The novel asks what home means when people are forced to leave the place where they belong. Maps and stories become ways to preserve places lost or never seen. It is an evocative novel about migration, courage, and the power of storytelling.',
  },
};

const existingStatuses = { alchemist: 'finished', 'norwegian-wood': 'wishlist', 'little-women': 'reading', ikigai: 'wishlist', essentialism: 'reading', 'steal-artist': 'wishlist', 'creative-act': 'reading', 'show-work': 'wishlist' };
const defaultStatuses = Object.fromEntries(books.map(book => [book.id, book.initialStatus || existingStatuses[book.id]]));
const state = { category: 'all', genre: 'all', country: 'all', query: '', savedOnly: false, saved: new Set(), currentBook: null, statuses: { ...defaultStatuses } };
try {
  const stored = JSON.parse(localStorage.getItem('mot-goc-sach-saved') || '[]');
  if (Array.isArray(stored)) state.saved = new Set(stored.filter(id => books.some(book => book.id === id)));
} catch {}
try {
  const stored = JSON.parse(localStorage.getItem('mot-goc-sach-statuses') || '{}');
  for (const book of books) {
    if (stored && Object.hasOwn(readingStatuses, stored[book.id])) state.statuses[book.id] = stored[book.id];
  }
} catch {}

const grid = document.querySelector('#book-grid');
try {
  if (!localStorage.getItem('literati-finished-list-2026')) {
    state.statuses.alchemist = 'finished';
    localStorage.setItem('mot-goc-sach-statuses', JSON.stringify(state.statuses));
    localStorage.setItem('literati-finished-list-2026', '1');
  }
} catch { state.statuses.alchemist = 'finished'; }
const searchInput = document.querySelector('#search-input');
const dialog = document.querySelector('#book-dialog');
let toastTimer;

function icons() { if (globalThis.lucide) globalThis.lucide.createIcons(); }
function normalize(value) { return value.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd'); }
function coverMarkup(book) {
  const cover = book.cover || `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg?default=false`;
  return `<div class="book-cover" style="--book-color:${book.color}"><div class="fallback-cover" lang="vi"><strong>${book.title}</strong><i></i><small>${book.author}</small></div><img src="${cover}" alt="${ui('Bìa sách')} ${book.title}" loading="lazy" /></div>`;
}
function handleCoverErrors(container) {
  container.querySelectorAll('.book-cover img').forEach(image => {
    image.addEventListener('error', () => image.remove(), { once: true });
    if (image.complete && !image.naturalWidth) image.remove();
  });
}
function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = ui(message);
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
}
function toggleSave(id) {
  const wasSaved = state.saved.has(id);
  if (wasSaved) state.saved.delete(id); else state.saved.add(id);
  try { localStorage.setItem('mot-goc-sach-saved', JSON.stringify([...state.saved])); }
  catch { showToast('Đã cập nhật trong phiên này. Trình duyệt chưa cho phép lưu lâu dài.'); }
  renderCollection();
  if (dialog.open) updateDialogSave();
  showToast(wasSaved ? 'Đã bỏ sách khỏi góc riêng của bạn.' : 'Đã lưu vào góc sách của bạn.');
}
let mobileShelf = 'reading';
const flowerPrint = document.querySelector('#flower-print');
flowerPrint.addEventListener('click', () => {
  flowerPrint.classList.remove('flower-swaying');
  void flowerPrint.offsetWidth;
  flowerPrint.classList.add('flower-swaying');
});
flowerPrint.addEventListener('animationend', () => flowerPrint.classList.remove('flower-swaying'));
const shelfPages = {};
function renderRoom() {
  const container = document.querySelector('#room-shelves');
  document.querySelector('#mobile-shelf-tabs').innerHTML = Object.keys(readingStatuses).map(status => `<button type="button" data-mobile-shelf="${status}" aria-pressed="${status === mobileShelf}">${ui(status === 'wishlist' ? 'Muốn đọc' : readingStatuses[status].name)}</button>`).join('');
  document.querySelector('.cover-room').dataset.mobileShelf = mobileShelf;
  container.innerHTML = Object.entries(readingStatuses).map(([status, info], index) => {
    const shelfBooks = books.filter(book => state.statuses[book.id] === status);
    const paged = shelfBooks.length >= 9;
    const pageCount = Math.ceil(shelfBooks.length / 4);
    const pageIndex = Math.min(shelfPages[status] || 0, Math.max(0, pageCount - 1));
    shelfPages[status] = pageIndex;
    const previewBooks = paged ? shelfBooks.slice(pageIndex * 4, pageIndex * 4 + 4) : shelfBooks.slice(0, 6);
    const hasMore = shelfBooks.length > previewBooks.length;
    const dense = !paged && shelfBooks.length > 4;
    const columns = dense ? 3 : 2;
    const rowCount = 2;
    const rows = Array.from({ length: rowCount }, (_, rowIndex) => `<div class="shelf-row cover-row">${previewBooks.slice(rowIndex * columns, (rowIndex + 1) * columns).map(book => `<button class="shelf-book" data-book="${book.id}" title="${book.title} · ${book.author}" aria-label="${ui('Xem')} ${book.title}">${coverMarkup(book)}</button>`).join('')}</div>`).join('');
    const decor = dense || paged ? '' : '<div class="shelf-row decor-row" aria-hidden="true"><div class="stack"><span></span><span></span><span></span></div><div class="little-vase"><span></span></div></div>';
    const more = hasMore && !paged ? `<button class="shelf-more" data-filter="${status}">${ui('Xem thêm')} (${shelfBooks.length - previewBooks.length})<i data-lucide="arrow-right"></i></button>` : '';
    const previousLabel = uiLanguage === 'en' ? 'Previous group' : 'Nhóm trước';
    const nextLabel = uiLanguage === 'en' ? 'Next group' : 'Nhóm sau';
    const pager = paged ? `<div class="shelf-pager"><button data-shelf-page="-1" aria-label="${previousLabel}" title="${previousLabel}" ${pageIndex === 0 ? 'disabled' : ''}><i data-lucide="chevron-left"></i></button><span class="shelf-page-paper"><span aria-live="polite">${pageIndex + 1} / ${pageCount}</span><span class="shelf-page-dots" aria-hidden="true">${Array.from({ length: pageCount }, (_, dotIndex) => `<i class="${dotIndex === pageIndex ? 'current' : ''}"></i>`).join('')}</span></span><button data-shelf-page="1" aria-label="${nextLabel}" title="${nextLabel}" ${pageIndex === pageCount - 1 ? 'disabled' : ''}><i data-lucide="chevron-right"></i></button></div>` : '';
    const lights = `<div class="shelf-lights" aria-hidden="true"><span class="light-wire"></span>${[9, 18, 23, 25, 23, 18, 9].map((drop, bulbIndex) => `<span class="shelf-bulb" style="--bulb-left:${8 + bulbIndex * 14}%;--bulb-drop:${drop}px"></span>`).join('')}</div>`;
    return `<div class="bookcase bookcase-${info.color}${dense ? ' dense-shelf' : ''}${hasMore ? ' has-more' : ''}${paged ? ' paged-shelf' : ''}" style="--shelf-rows:${rowCount}" data-category="${status}"><div class="case-top"></div><div class="case-side"></div>${lights}<div class="case-content">${rows}${decor}${more}${pager}</div><button class="shelf-label" data-filter="${status}"><span class="shelf-number">0${index + 1}</span><span>${ui(info.name)}<small>${uiBookCount(shelfBooks.length)}</small></span><i data-lucide="arrow-up-right"></i></button><div class="case-feet"></div></div>`;
  }).join('');
  handleCoverErrors(container);
  icons();
}
function changeShelfPage(status, direction) {
  const count = books.filter(book => state.statuses[book.id] === status).length;
  if (count < 9) return;
  const next = Math.max(0, Math.min(Math.ceil(count / 4) - 1, (shelfPages[status] || 0) + direction));
  if (next === shelfPages[status]) return;
  shelfPages[status] = next;
  renderRoom();
}
let shelfTouch = null;
document.querySelector('#room-shelves').addEventListener('touchstart', event => {
  const shelf = event.target.closest('.paged-shelf');
  shelfTouch = shelf && event.touches.length === 1 ? { status: shelf.dataset.category, horizontal: event.touches[0].clientX, vertical: event.touches[0].clientY } : null;
}, { passive: true });
document.querySelector('#room-shelves').addEventListener('touchend', event => {
  if (!shelfTouch) return;
  const horizontal = event.changedTouches[0].clientX - shelfTouch.horizontal;
  const vertical = event.changedTouches[0].clientY - shelfTouch.vertical;
  if (Math.abs(horizontal) > 50 && Math.abs(horizontal) > Math.abs(vertical)) {
    if (event.cancelable) event.preventDefault();
    changeShelfPage(shelfTouch.status, horizontal < 0 ? 1 : -1);
  }
  shelfTouch = null;
}, { passive: false });
document.querySelector('#room-shelves').addEventListener('touchcancel', () => { shelfTouch = null; });
function renderCollection() {
  const query = normalize(state.query.trim());
  const filters = document.querySelector('#shelf-filters');
  const genreFilter = document.querySelector('#genre-filter');
  const countryFilter = document.querySelector('#country-filter');
  filters.setAttribute('aria-label', ui('Lọc theo kệ sách'));
  filters.innerHTML = [['all', { name: 'Tất cả' }], ...Object.entries(readingStatuses)].map(([status, info]) => {
    const count = status === 'all' ? books.length : books.filter(book => state.statuses[book.id] === status).length;
    return `<button class="shelf-filter" data-filter="${status}" aria-pressed="${!state.savedOnly && state.category === status}">${ui(info.name)}<span class="filter-count">${count}</span></button>`;
  }).join('');
  const genres = [...new Set(books.flatMap(book => book.genres || []))].sort((left, right) => ui(left).localeCompare(ui(right), uiLanguage));
  const countries = [...new Set(books.map(book => book.authorCountry))].sort((left, right) => ui(left).localeCompare(ui(right), uiLanguage));
  genreFilter.setAttribute('aria-label', ui('Lọc theo thể loại'));
  genreFilter.innerHTML = `<option value="all">${ui('Mọi thể loại')}</option>${genres.map(genre => `<option value="${genre}">${ui(genre)}</option>`).join('')}`;
  genreFilter.value = state.genre;
  countryFilter.setAttribute('aria-label', ui('Lọc theo quốc gia của tác giả'));
  countryFilter.innerHTML = `<option value="all">${ui('Mọi quốc gia')}</option>${countries.map(country => `<option value="${country}">${ui(country)}</option>`).join('')}`;
  countryFilter.value = state.country;
  const visibleBooks = books.filter(book => (state.category === 'all' || state.statuses[book.id] === state.category) && (!state.savedOnly || state.saved.has(book.id)) && (state.genre === 'all' || book.genres?.includes(state.genre)) && (state.country === 'all' || book.authorCountry === state.country) && normalize(`${book.title} ${book.author} ${book.tags.join(' ')} ${(book.genres || []).join(' ')} ${book.authorCountry}`).includes(query));
  document.querySelector('#saved-count').textContent = state.saved.size;
  document.querySelector('#result-count').textContent = uiBookCount(visibleBooks.length);
  document.querySelector('#collection-title').textContent = ui(state.savedOnly ? 'Góc sách của riêng bạn.' : state.category === 'all' ? 'Chọn một cuốn, mở một thế giới.' : readingStatuses[state.category].name);
  document.querySelector('#collection-eyebrow').textContent = ui(state.savedOnly ? 'NHỮNG CÂU CHUYỆN BẠN MUỐN GIỮ LẠI' : state.category === 'all' ? 'NHỮNG NGƯỜI BẠN TRÊN KỆ' : readingStatuses[state.category].subtitle).toLocaleUpperCase(uiLanguage);
  document.querySelector('#room-nav').classList.toggle('active', !state.savedOnly);
  document.querySelector('#saved-nav').classList.toggle('active', state.savedOnly);
  document.querySelector('#clear-search').hidden = !state.query;
  document.querySelectorAll('.category-tab').forEach(tab => {
    const selected = tab.dataset.filter === state.category;
    tab.classList.toggle('selected', selected);
    tab.setAttribute('aria-pressed', String(selected));
  });
  grid.innerHTML = visibleBooks.map(book => `<article class="book-card"><button class="book-open" data-book="${book.id}" aria-label="${ui('Xem chi tiết')} ${book.title}"><div class="cover-stage" style="--cover-bg:${categories[book.category].background}">${coverMarkup(book)}</div><p class="category-name">${ui(categories[book.category].name)}</p><h3 lang="vi">${book.title}</h3><p class="book-author">${book.author}</p></button><button class="icon-button save-book ${state.saved.has(book.id) ? 'saved' : ''}" data-save="${book.id}" aria-label="${ui(state.saved.has(book.id) ? 'Bỏ lưu' : 'Lưu')} ${book.title}" aria-pressed="${state.saved.has(book.id)}" title="${ui(state.saved.has(book.id) ? 'Bỏ lưu' : 'Lưu sách')}"><i data-lucide="bookmark"></i></button></article>`).join('');
  document.querySelector('#empty-state').hidden = visibleBooks.length > 0;
  const emptySaved = state.savedOnly && !state.query;
  document.querySelector('#empty-title').textContent = ui(emptySaved ? 'Góc sách đang chờ bạn.' : 'Chưa tìm thấy cuốn sách nào.');
  document.querySelector('#empty-copy').textContent = ui(emptySaved ? 'Những cuốn bạn lưu sẽ ở đây, chờ lần ghé thăm tiếp theo.' : 'Thử một tên sách hoặc tác giả khác nhé.');
  handleCoverErrors(grid);
  icons();
}
function selectCategory(category, scroll = true) {
  state.category = category;
  state.genre = 'all';
  state.country = 'all';
  state.savedOnly = false;
  state.query = '';
  searchInput.value = '';
  renderCollection();
  if (scroll) document.querySelector('#collection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function updateDialogSave() {
  const saved = state.saved.has(state.currentBook);
  const button = document.querySelector('#dialog-save');
  button.classList.toggle('saved', saved);
  button.setAttribute('aria-pressed', String(saved));
  button.innerHTML = `<i data-lucide="${saved ? 'bookmark-check' : 'bookmark'}"></i> ${ui(saved ? 'Đã lưu vào góc sách' : 'Lưu vào góc sách')}`;
  icons();
}
function openBook(id) {
  const book = books.find(item => item.id === id);
  if (!book) return;
  state.currentBook = id;
  const expandedSummary = expandedBookSummaries[book.id];
  const summaryLanguage = uiLanguage === 'en' && (expandedSummary?.en || book.summaryEn) ? 'en' : 'vi';
  const summary = summaryLanguage === 'en' ? expandedSummary?.en || book.summaryEn : expandedSummary?.vi || book.summary;
  document.querySelector('#dialog-content').innerHTML = `<div class="dialog-top"><div class="dialog-cover" style="--cover-bg:${categories[book.category].background}">${coverMarkup(book)}</div><div class="dialog-info"><p class="category-name">${ui(categories[book.category].name)}</p><h2 id="dialog-title">${book.title}</h2><p class="book-author">${book.author}</p><div class="metadata"><span>${ui('Xuất bản lần đầu')}: ${book.year}</span></div><button class="primary-button" id="dialog-save" data-save="${id}"></button></div></div><div class="dialog-section"><h3>${ui('Câu chuyện bên trong')}</h3><p lang="${summaryLanguage}">${summary}</p></div>`;
  if (book.yearLabel) document.querySelector('.metadata span').textContent = `${ui(book.yearLabel)}: ${ui(book.year)}`;
  if (book.genres?.length) document.querySelector('.metadata').insertAdjacentHTML('beforeend', `<span>${ui('Thể loại')}: ${book.genres.map(genre => ui(genre)).join(' · ')}</span>`);
  if (book.movement) document.querySelector('.metadata').insertAdjacentHTML('beforeend', `<span>${ui('Trường phái')}: ${ui(book.movement)}</span>`);
  document.querySelector('.dialog-info').insertAdjacentHTML('beforeend', `<label class="reading-status-field" for="reading-status">${ui('Kệ sách của bạn')}<select id="reading-status">${Object.entries(readingStatuses).map(([status, info]) => `<option value="${status}" ${state.statuses[id] === status ? 'selected' : ''}>${ui(info.name)}</option>`).join('')}</select></label>`);
  handleCoverErrors(document.querySelector('#dialog-content'));
  updateDialogSave();
  if (!dialog.open) dialog.showModal();
  document.body.style.overflow = 'hidden';
}
document.addEventListener('click', event => {
  const pageButton = event.target.closest('[data-shelf-page]');
  if (pageButton) {
    const status = pageButton.closest('.bookcase').dataset.category;
    const direction = pageButton.dataset.shelfPage;
    changeShelfPage(status, Number(direction));
    const replacement = document.querySelector(`.bookcase[data-category="${status}"] [data-shelf-page="${direction}"]`);
    if (replacement && !replacement.disabled) replacement.focus({ preventScroll: true });
    else document.querySelector(`.bookcase[data-category="${status}"] [data-shelf-page="${-Number(direction)}"]`)?.focus({ preventScroll: true });
    return;
  }
  const shelfTab = event.target.closest('button[data-mobile-shelf]');
  if (shelfTab) {
    mobileShelf = shelfTab.dataset.mobileShelf;
    document.querySelector('.cover-room').dataset.mobileShelf = mobileShelf;
    document.querySelectorAll('button[data-mobile-shelf]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mobileShelf === mobileShelf)));
    return;
  }
  const bookButton = event.target.closest('[data-book]');
  const saveButton = event.target.closest('[data-save]');
  const categoryButton = event.target.closest('[data-filter]');
  if (bookButton) openBook(bookButton.dataset.book);
  else if (saveButton) toggleSave(saveButton.dataset.save);
  else if (categoryButton) {
    if (categoryButton.classList.contains('shelf-filter')) {
      state.category = categoryButton.dataset.filter;
      state.savedOnly = false;
      renderCollection();
    } else selectCategory(categoryButton.dataset.filter);
  }
});
searchInput.addEventListener('input', () => { state.query = searchInput.value; renderCollection(); });
document.querySelector('#genre-filter').addEventListener('change', event => { state.genre = event.target.value; state.savedOnly = false; renderCollection(); });
document.querySelector('#country-filter').addEventListener('change', event => { state.country = event.target.value; state.savedOnly = false; renderCollection(); });
document.querySelector('#clear-search').addEventListener('click', () => { state.query = ''; searchInput.value = ''; renderCollection(); searchInput.focus(); });
document.querySelector('#search-toggle').addEventListener('click', () => { document.querySelector('#collection').scrollIntoView({ behavior: 'smooth' }); searchInput.focus({ preventScroll: true }); });
document.querySelector('#saved-nav').addEventListener('click', () => { state.savedOnly = true; state.category = 'all'; state.query = ''; searchInput.value = ''; renderCollection(); document.querySelector('#collection').scrollIntoView({ behavior: 'smooth' }); });
document.querySelector('#room-nav').addEventListener('click', () => { selectCategory('all', false); window.scrollTo({ top: 0, behavior: 'smooth' }); });
document.querySelector('#reset-filters').addEventListener('click', () => selectCategory('all', false));
document.querySelector('#daily-book').addEventListener('click', () => openBook('alchemist'));
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
document.querySelector('#room-lamp').addEventListener('click', event => {
  event.currentTarget.closest('.reading-room').classList.toggle('lamp-on');
  updateRoomLabels();
});
document.querySelector('#room-window').addEventListener('click', event => {
  const windowButton = event.currentTarget;
  windowButton.closest('.reading-room').classList.toggle('window-open');
  updateRoomLabels();
});
document.querySelector('#room-cat').addEventListener('click', () => {
  const cat = document.querySelector('#room-cat');
  cat.classList.remove('sleeping');
  cat.classList.remove('petted');
  void cat.offsetWidth;
  cat.classList.add('petted');
  updateRoomLabels();
  playCatMeow();
  showToast('Miu thích được đọc sách cùng bạn.');
});
document.querySelector('#dialog-content').addEventListener('change', event => {
  if (event.target.id !== 'reading-status' || !state.currentBook) return;
  state.statuses[state.currentBook] = event.target.value;
  let persisted = true;
  try { localStorage.setItem('mot-goc-sach-statuses', JSON.stringify(state.statuses)); } catch { persisted = false; }
  renderRoom();
  renderCollection();
  showToast(persisted ? `${ui('Đã chuyển sách sang kệ')} ${ui(readingStatuses[event.target.value].name).toLocaleLowerCase(uiLanguage)}.` : 'Đã chuyển kệ trong phiên này; trình duyệt không cho phép lưu lâu dài.');
});
dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; state.currentBook = null; });

const chillTracks = [
  { title: 'Nắng trên trang sách', bpm: 64, chords: [[48, 55, 59, 64], [45, 52, 55, 60], [41, 48, 52, 57], [43, 50, 53, 59]], melody: [72, 76, 79, 76, 74, 72, 71, 67, 69, 72, 76, 72, 71, 69, 67, null] },
  { title: 'Mưa bên cửa sổ', bpm: 58, chords: [[50, 57, 60, 65], [43, 50, 53, 57], [48, 55, 59, 64], [45, 52, 55, 60]], melody: [77, 76, 72, null, 74, 72, 69, 67, 76, 74, 71, null, 72, 71, 69, null] },
  { title: 'Chiều lặng cùng Miu', bpm: 68, chords: [[53, 60, 64, 69], [48, 55, 59, 64], [50, 57, 60, 65], [43, 50, 53, 59]], melody: [69, 72, 76, 79, 76, null, 72, 71, 74, 77, 76, 72, 71, 69, 67, null] },
];
const music = { context: null, gain: null, voices: new Set(), timer: null, track: -1, step: 0, nextTime: 0, playing: false, busy: false };
const catMeow = new Audio('./cat-meow.mp3');
catMeow.preload = 'auto';
catMeow.volume = 0.65;

async function playCatMeow() {
  try {
    catMeow.pause();
    catMeow.currentTime = 0;
    await catMeow.play();
  } catch (error) {
    if (error.name === 'AbortError') return;
    showToast('Chưa phát được tiếng Miu. Bạn thử bấm lại nhé.');
  }
}

function createMusicContext() {
  if (music.context) return;
  const AudioContextClass = globalThis.AudioContext || globalThis.webkitAudioContext;
  if (!AudioContextClass) throw new Error('Audio not supported');
  music.context = new AudioContextClass();
  music.gain = music.context.createGain();
  music.gain.gain.value = Number(document.querySelector('#music-volume').value) / 100 * 0.5;
  const compressor = music.context.createDynamicsCompressor();
  compressor.threshold.value = -20;
  compressor.ratio.value = 4;
  music.gain.connect(compressor);
  compressor.connect(music.context.destination);
}

function playSoftNote(note, start, duration, strength, type = 'sine') {
  const oscillator = music.context.createOscillator();
  const envelope = music.context.createGain();
  oscillator.type = type;
  oscillator.frequency.value = 440 * 2 ** ((note - 69) / 12);
  envelope.gain.setValueAtTime(0, start);
  envelope.gain.linearRampToValueAtTime(strength, start + 0.06);
  envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(envelope);
  envelope.connect(music.gain);
  music.voices.add(oscillator);
  oscillator.onended = () => { music.voices.delete(oscillator); oscillator.disconnect(); envelope.disconnect(); };
  oscillator.start(start);
  oscillator.stop(start + duration + 0.05);
}

function scheduleMusic() {
  if (!music.playing || music.context.state !== 'running') return;
  const track = chillTracks[music.track];
  const beat = 60 / track.bpm;
  if (music.nextTime < music.context.currentTime) music.nextTime = music.context.currentTime + 0.05;
  while (music.nextTime < music.context.currentTime + 0.4) {
    const chord = track.chords[Math.floor(music.step / 8) % track.chords.length];
    if (music.step % 8 === 0) chord.forEach((note, index) => playSoftNote(note, music.nextTime + index * 0.035, beat * 4.8, 0.055));
    if (music.step % 2 === 0) playSoftNote(chord[(music.step / 2) % chord.length] + 12, music.nextTime, beat * 1.7, 0.065, 'triangle');
    if (music.step % 2 === 1) {
      const melody = track.melody[Math.floor(music.step / 2) % track.melody.length];
      if (melody !== null) playSoftNote(melody, music.nextTime, beat * 2, 0.085);
    }
    music.nextTime += beat / 2;
    music.step = (music.step + 1) % 64;
  }
}

function stopMusicVoices() {
  clearInterval(music.timer);
  music.timer = null;
  for (const voice of music.voices) voice.stop();
}

function updateMusicUI() {
  const title = music.track >= 0 ? ui(chillTracks[music.track].title) : '';
  const speaker = document.querySelector('#room-speaker');
  speaker.classList.toggle('playing', music.playing);
  speaker.setAttribute('aria-pressed', String(music.playing));
  speaker.setAttribute('aria-label', music.playing ? `${ui('Tạm dừng')} ${title}` : ui('Phát nhạc đọc sách'));
  speaker.title = ui(music.playing ? 'Tạm dừng nhạc' : 'Phát nhạc đọc sách');
  speaker.querySelector('.speaker-control').innerHTML = `<i data-lucide="${music.playing ? 'pause' : 'play'}"></i>`;
  document.querySelector('#music-title').textContent = title;
  document.querySelector('#music-state').textContent = ui(music.playing ? 'ĐANG PHÁT' : 'ĐÃ TẠM DỪNG');
  const toggle = document.querySelector('#music-toggle');
  toggle.innerHTML = `<i data-lucide="${music.playing ? 'pause' : 'play'}"></i>`;
  toggle.setAttribute('aria-label', ui(music.playing ? 'Tạm dừng nhạc' : 'Tiếp tục phát nhạc'));
  toggle.title = ui(music.playing ? 'Tạm dừng nhạc' : 'Tiếp tục phát nhạc');
  document.querySelector('#music-player').hidden = music.track < 0;
  icons();
}

async function startMusic(random = false) {
  if (music.busy) return;
  music.busy = true;
  try {
    createMusicContext();
    await music.context.resume();
    if (music.context.state !== 'running') throw new Error('Audio could not start');
    stopMusicVoices();
    if (random || music.track < 0) {
      const choices = chillTracks.map((track, index) => index).filter(index => index !== music.track);
      music.track = choices[Math.floor(Math.random() * choices.length)];
      music.step = 0;
    }
    music.nextTime = music.context.currentTime + 0.08;
    music.playing = true;
    scheduleMusic();
    music.timer = setInterval(scheduleMusic, 120);
    updateMusicUI();
  } catch {
    music.playing = false;
    stopMusicVoices();
    updateMusicUI();
    showToast('Chưa bật được âm thanh. Bạn thử bấm loa lại nhé.');
  } finally { music.busy = false; }
}

function toggleMusic() {
  if (music.busy) return;
  if (!music.playing) { startMusic(); return; }
  music.playing = false;
  stopMusicVoices();
  updateMusicUI();
}
document.querySelector('#room-speaker').addEventListener('click', toggleMusic);
document.querySelector('#music-toggle').addEventListener('click', toggleMusic);
document.querySelector('#music-next').addEventListener('click', () => startMusic(true));
document.querySelector('#music-volume').addEventListener('input', event => {
  if (music.gain) music.gain.gain.setTargetAtTime(Number(event.target.value) / 100 * 0.5, music.context.currentTime, 0.05);
});

function updateRoomLabels() {
  const windowButton = document.querySelector('#room-window');
  const isOpen = windowButton.closest('.reading-room').classList.contains('window-open');
  windowButton.setAttribute('aria-pressed', String(isOpen));
  const windowLabel = ui(isOpen ? 'Đóng cửa sổ' : 'Mở cửa sổ đón nắng');
  windowButton.setAttribute('aria-label', windowLabel);
  windowButton.title = windowLabel;
  const lamp = document.querySelector('#room-lamp');
  const lampOn = lamp.closest('.reading-room').classList.contains('lamp-on');
  const lampLabel = ui(lampOn ? 'Tắt đèn đứng' : 'Bật đèn đứng');
  lamp.setAttribute('aria-pressed', String(lampOn));
  lamp.setAttribute('aria-label', lampLabel);
  lamp.title = lampLabel;
  const cat = document.querySelector('#room-cat');
  const sleeping = cat.classList.contains('sleeping');
  cat.setAttribute('aria-label', ui(sleeping ? 'Miu đang nằm ngủ, bấm để vuốt ve' : 'Miu đang cười, bấm để vuốt ve thêm'));
  cat.title = ui(sleeping ? 'Miu đang ngủ · Bấm để vuốt ve' : 'Miu vui quá · Meow meow!');
}

function refreshLanguage() {
  renderRoom();
  renderCollection();
  updateRoomLabels();
  updateMusicUI();
  if (dialog.open && state.currentBook) openBook(state.currentBook);
}
document.addEventListener('languagechange', refreshLanguage);
refreshLanguage();
