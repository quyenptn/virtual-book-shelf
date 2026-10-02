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
].filter(book => book.id === 'alchemist' || book.initialStatus).map(book => ({
  ...book,
  movement: book.movement || literaryMovements[book.id] || 'Không gắn với một trường phái cụ thể',
}));

const existingStatuses = { alchemist: 'finished', 'norwegian-wood': 'wishlist', 'little-women': 'reading', ikigai: 'wishlist', essentialism: 'reading', 'steal-artist': 'wishlist', 'creative-act': 'reading', 'show-work': 'wishlist' };
const defaultStatuses = Object.fromEntries(books.map(book => [book.id, book.initialStatus || existingStatuses[book.id]]));
const state = { category: 'all', query: '', savedOnly: false, saved: new Set(), currentBook: null, statuses: { ...defaultStatuses } };
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
  filters.setAttribute('aria-label', ui('Lọc theo kệ sách'));
  filters.innerHTML = [['all', { name: 'Tất cả' }], ...Object.entries(readingStatuses)].map(([status, info]) => {
    const count = status === 'all' ? books.length : books.filter(book => state.statuses[book.id] === status).length;
    return `<button class="shelf-filter" data-filter="${status}" aria-pressed="${!state.savedOnly && state.category === status}">${ui(info.name)}<span class="filter-count">${count}</span></button>`;
  }).join('');
  const visibleBooks = books.filter(book => (state.category === 'all' || state.statuses[book.id] === state.category) && (!state.savedOnly || state.saved.has(book.id)) && normalize(`${book.title} ${book.author} ${book.tags.join(' ')}`).includes(query));
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
  const summaryLanguage = uiLanguage === 'en' && book.summaryEn ? 'en' : 'vi';
  const summary = summaryLanguage === 'en' ? book.summaryEn : book.summary;
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
  const shelfTab = event.target.closest('[data-mobile-shelf]');
  if (shelfTab) {
    mobileShelf = shelfTab.dataset.mobileShelf;
    document.querySelector('.cover-room').dataset.mobileShelf = mobileShelf;
    document.querySelectorAll('[data-mobile-shelf]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mobileShelf === mobileShelf)));
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
document.querySelector('#clear-search').addEventListener('click', () => { state.query = ''; searchInput.value = ''; renderCollection(); searchInput.focus(); });
document.querySelector('#search-toggle').addEventListener('click', () => { document.querySelector('#collection').scrollIntoView({ behavior: 'smooth' }); searchInput.focus({ preventScroll: true }); });
document.querySelector('#saved-nav').addEventListener('click', () => { state.savedOnly = true; state.category = 'all'; state.query = ''; searchInput.value = ''; renderCollection(); document.querySelector('#collection').scrollIntoView({ behavior: 'smooth' }); });
document.querySelector('#room-nav').addEventListener('click', () => { selectCategory('all', false); window.scrollTo({ top: 0, behavior: 'smooth' }); });
document.querySelector('#reset-filters').addEventListener('click', () => selectCategory('all', false));
document.querySelector('#daily-book').addEventListener('click', () => openBook('alchemist'));
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
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
