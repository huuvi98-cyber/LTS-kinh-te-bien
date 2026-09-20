import { SeriesPart } from '../types';

export const EDITORIAL_RAW_TEXT = `LTS: Vươn ra biển lớn là khát vọng phát triển và khẳng định vị thế Việt Nam. Khát vọng ấy đòi hỏi năng lực tổ chức không gian biển, làm chủ công nghệ, kết nối thương mại toàn cầu, đồng thời gìn giữ tài nguyên và bảo vệ vững chắc chủ quyền biển, đảo. Nghị quyết 20-NQ/TW về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh xác lập tầm nhìn chiến lược; Nghị quyết 218/NQ-CP ban hành Chương trình hành động của Chính phủ để hiện thực hóa tầm nhìn ấy. Yêu cầu đặt ra là chuyển lợi thế biển thành sức mạnh kinh tế, tạo cơ hội để người dân và doanh nghiệp làm giàu bền vững. Tuyến bài: “Mạnh về biển, phát triển bền vững từ biển” (5 kỳ) tìm lời giải từ thực tiễn: nâng giá trị sản vật, hiện đại hóa nuôi biển, phát triển hệ sinh thái công nghiệp, cảng biển, năng lượng sạch và bảo tồn. Từ các địa phương ven biển đến triển vọng trung tâm hàng hải quốc tế tại TPHCM, tuyến bài gợi mở những lựa chọn về thể chế và quản trị để Việt Nam vươn tầm từ biển.`;

export const SERIES_PARTS: SeriesPart[] = [
  {
    id: 1,
    roman: 'Kỳ 1',
    title: 'Nâng giá trị sản vật biển',
    subtitle: 'Từ xuất thô đến chuỗi giá trị chế biến sâu đạt chuẩn quốc tế',
    summary: 'Chuyển dịch cơ cấu khai thác, chấm dứt đánh bắt tận diệt, gắn truy xuất nguồn gốc hải sản với thương hiệu quốc gia và công nghệ chế biến hiện đại.',
    highlights: ['Gỡ thẻ vàng IUU', 'Chuỗi cung ứng lạnh hiện đại', 'Thương hiệu hải sản Việt'],
    pillar: 'Khai thác & Chế biến',
    iconName: 'Fish'
  },
  {
    id: 2,
    roman: 'Kỳ 2',
    title: 'Hiện đại hóa nuôi biển',
    subtitle: 'Chuyển dịch từ ven bờ ra khơi xa bằng lồng HDPE công nghệ cao',
    summary: 'Phát triển công nghiệp nuôi trồng thủy sản xa bờ bền vững, giảm tải áp lực khai thác ven bờ, ứng dụng cảm biến IoT và giống kháng bệnh.',
    highlights: ['Lồng bè chịu bão cấp 12+', 'Hợp tác xã nuôi biển công nghệ cao', 'Giảm tải sinh thái ven bờ'],
    pillar: 'Nuôi trồng thông minh',
    iconName: 'Waves'
  },
  {
    id: 3,
    roman: 'Kỳ 3',
    title: 'Hệ sinh thái công nghiệp & Cảng biển',
    subtitle: 'Cụm liên kết cảng nước sâu, logistics và công nghiệp phụ trợ',
    summary: 'Xây dựng các tổ hợp logistics cảng biển cửa ngõ quốc tế (Cái Mép - Thị Vải, Lạch Huyện, Cần Giờ), kết nối mạch máu giao thương hàng hải toàn cầu.',
    highlights: ['Cảng xanh thông minh', 'Hành lang logistics Đông - Tây', 'Công nghiệp đóng tàu & phụ trợ'],
    pillar: 'Hạ tầng & Logistics',
    iconName: 'Anchor'
  },
  {
    id: 4,
    roman: 'Kỳ 4',
    title: 'Năng lượng sạch & Bảo tồn đại dương',
    subtitle: 'Khơi thông nguồn năng lượng gió ngoài khơi gắn với bảo tồn biển',
    summary: 'Hiện thực hóa tiềm năng hàng trăm GW điện gió ngoài khơi, bảo vệ rạn san hô, rừng ngập mặn và mở rộng các khu bảo tồn biển quốc gia.',
    highlights: ['Điện gió ngoài khơi Net Zero', 'Mạng lưới 16 khu bảo tồn biển', 'Kinh tế tuần hoàn đại dương'],
    pillar: 'Năng lượng & Sinh thái',
    iconName: 'Wind'
  },
  {
    id: 5,
    roman: 'Kỳ 5',
    title: 'Trung tâm hàng hải quốc tế TPHCM',
    subtitle: 'Đột phá thể chế và quản trị để Việt Nam vươn tầm từ biển',
    summary: 'Định hình vị thế siêu cảng trung chuyển quốc tế Cần Giờ, trung tâm dịch vụ tài chính, bảo hiểm và trọng tài hàng hải ngang tầm khu vực.',
    highlights: ['Đặc khu kinh tế hàng hải', 'Cơ chế thí điểm vượt trội', 'Tầm nhìn thế kỷ 2045'],
    pillar: 'Thể chế & Vươn tầm',
    iconName: 'Compass'
  }
];

export const KEY_POLICY_DOCUMENTS = [
  {
    code: 'Nghị quyết 20-NQ/TW',
    level: 'Ban Chấp hành Trung ương',
    title: 'Chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045',
    coreGoal: 'Đưa Việt Nam trở thành quốc gia biển mạnh, phát triển bền vững, thịnh vượng, an ninh, an toàn.'
  },
  {
    code: 'Nghị quyết 218/NQ-CP',
    level: 'Chính phủ',
    title: 'Chương trình hành động của Chính phủ thực hiện Nghị quyết số 20-NQ/TW',
    coreGoal: 'Cụ thể hóa 6 khâu đột phá, tổ chức không gian kinh tế biển, phân bổ nguồn lực và thể chế hành động.'
  }
];
