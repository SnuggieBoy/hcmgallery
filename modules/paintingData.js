// Source data from user's 2D website
const sourceData = [
  // Period 1930 - 1945
  {
        img: "phong-trao-xo-viet-nghe-tinh.jpg",
        title: "Cao trào Xô Viết Nghệ Tĩnh",
        desc: "Bức tranh tái hiện khí thế ngất trời của phong trào công nông 1930-1931, giáng đòn mạnh mẽ vào chính quyền thực dân phong kiến."
    },
    {
        img: "phong-trao-xo-viet-nghe-tinh-2.jpg",
        title: "Khẩu hiệu cốt lõi năm 1930",
        desc: "Phù điêu khắc họa hình ảnh quần chúng công nông với vũ khí thô sơ cùng khẩu hiệu 'Đả đảo phong kiến', 'Bớt giờ làm'."
    },
    {
        img: "chien-si-tu-ve-do-qdnd-vn.jpg",
        title: "Sự ra đời của Tự Vệ Đỏ",
        desc: "Lực lượng vũ trang quần chúng đầu tiên của cách mạng Việt Nam, được thành lập để bảo vệ chính quyền Xô Viết non trẻ."
    },
    {
        img: "bieu-tinh-cong-nong.jpg",
        title: "Công Nông thức tỉnh",
        desc: "Hình ảnh những người nông dân và công nhân nghèo khổ kề vai sát cánh trong các cuộc tuần hành chống lại ách áp bức."
    },
    {
        img: "bieu-tinh-cong-nong-1.jpg",
        title: "Làn sóng Cách mạng",
        desc: "Quần chúng nhân dân rợp cờ đỏ, rầm rộ biểu tình thị uy sức mạnh dưới sự lãnh đạo của Đảng."
    },
    {
        img: "phong-trao-xo-viet-nghe-tinh-1.jpg",
        title: "Tập hợp Lực lượng",
        desc: "Sự đoàn kết và quy tụ lực lượng đông đảo của nhân dân trong các buổi hội nghị, mít tinh thời kỳ đầu."
    },

    // --- GIAI ĐOẠN 1936 - 1939: ĐẤU TRANH CÔNG KHAI (Trọng tâm của Scene 3D) ---
    {
        img: "co-quan-dan-chu.webp",
        title: "Báo chí Cách mạng (1936-1939)",
        desc: "Trụ sở báo 'Tin Tức' - cơ quan ngôn luận của Mặt trận Dân chủ Đông Dương, vũ khí đấu tranh công khai hợp pháp cực kỳ sắc bén."
    },
    {
        img: "phong-trao-dan-chu.webp",
        title: "Mặt trận Dân chủ Đông Dương",
        desc: "Cuộc đấu tranh công khai của Đoàn Phụ nữ, xuống đường đòi quyền bình đẳng, dân sinh và dân chủ."
    },
    {
        img: "phong-trao-dan-chu-1.webp",
        title: "Mít tinh Khu Đấu xảo (1/5/1938)",
        desc: "Cuộc biểu dương lực lượng lớn nhất lịch sử lúc bấy giờ với hơn 2,5 vạn người tham gia tại Hà Nội, đòi quyền lợi thiết thực."
    },
    {
        img: "phong-trao-dan-chu-2.jpg",
        title: "Sức mạnh Quần chúng",
        desc: "Sự giác ngộ và tinh thần đoàn kết tuyệt vời của các tầng lớp nhân dân trong giai đoạn đấu tranh nửa công khai."
    },

    // --- GIAI ĐOẠN 1941 - 1945: TỔNG KHỞI NGHĨA GIÀNH CHÍNH QUYỀN ---
    {
        img: "mat-tran-viet-nam.jpg",
        title: "Chương trình Việt Minh (1941)",
        desc: "Văn kiện lịch sử gồm 10 chính sách lớn của Mặt trận Việt Minh nhằm đánh đuổi đế quốc, giải phóng dân tộc."
    },
    {
        img: "su-ra-doi-mat-tran-VM.webp", // Giữ nguyên đuôi .webp theo tên file ông đã cấu hình
        title: "Phát xít Nhật đầu hàng (1945)",
        desc: "Quân đội Nhật Bản giao nộp vũ khí, tạo ra 'thời cơ vàng' ngàn năm có một cho Tổng khởi nghĩa tháng Tám."
    },
    {
        img: "viet-minh-tuyen-truyen.jpg",
        title: "Tình đoàn kết Quân - Dân",
        desc: "Chủ tịch Hồ Chí Minh chung vui cùng nhân dân và chiến sĩ, biểu tượng cho sức mạnh gắn bó máu thịt của khối đại đoàn kết."
    },
    {
        img: "mat-tran-viet-nam-voi-CMVN.jpg",
        title: "Tuyên ngôn Độc lập (2/9/1945)",
        desc: "Lễ đài tại Quảng trường Ba Đình lịch sử, nơi khai sinh ra nước Việt Nam Dân chủ Cộng hòa."
    }
];

export const paintingData = [
  // Front Wall (Items 0-3)
  ...Array.from({ length: 4 }, (_, i) => {
    const titleParts = sourceData[i].title.split(':');
    const isYear = !isNaN(titleParts[0]) && titleParts[0].length === 4;
    return {
      imgSrc: `images/${sourceData[i].img}`,
      width: 5,
      height: 3,
      position: { x: -15 + 10 * i, y: 2, z: -19.5 },
      rotationY: 0,
      info: {
        title: sourceData[i].title,
        artist: 'Nguồn: Lịch Sử Việt Nam',
        description: sourceData[i].desc,
        year: isYear ? `Năm: ${titleParts[0]}` : 'Chủ đề: Tư Tưởng Hồ Chí Minh',
        
      },
    };
  }),
  // Back Wall (Items 4-7)
  ...Array.from({ length: 4 }, (_, i) => {
    const dataIndex = i + 4;
    const titleParts = sourceData[dataIndex].title.split(':');
    const isYear = !isNaN(titleParts[0].substring(0,4)); // Handle "1959-1975" case
    return {
      imgSrc: `images/${sourceData[dataIndex].img}`,
      width: 5,
      height: 3,
      position: { x: -15 + 10 * i, y: 2, z: 19.5 },
      rotationY: Math.PI,
      info: {
        title: sourceData[dataIndex].title,
        artist: 'Nguồn: Lịch Sử Việt Nam',
        description: sourceData[dataIndex].desc,
        year: isYear ? `Giai đoạn: ${titleParts[0]}` : 'Chủ đề: Tư Tưởng Hồ Chí Minh',
        
      },
    };
  }),
  // Left Wall (Items 8-11)
  ...Array.from({ length: 4 }, (_, i) => {
    const dataIndex = i + 8;
    const titleParts = sourceData[dataIndex].title.split(':');
    const isYear = !isNaN(titleParts[0]) && titleParts[0].length === 4;
    return {
      imgSrc: `images/${sourceData[dataIndex].img}`,
      width: 5,
      height: 3,
      position: { x: -19.5, y: 2, z: -15 + 10 * i },
      rotationY: Math.PI / 2,
      info: {
        title: sourceData[dataIndex].title,
        artist: 'Nguồn: Lịch Sử Việt Nam',
        description: sourceData[dataIndex].desc,
        year: isYear ? `Năm: ${titleParts[0]}` : 'Chủ đề: Đổi Mới & Hội Nhập',
      },
    };
  }),
  // Right Wall (Items 12-13)
  ...Array.from({ length: 2 }, (_, i) => {
    const dataIndex = i + 12;
    // For these abstract concepts, title usually doesn't have a year at start
    const titleParts = sourceData[dataIndex].title.split(':');
    const isYear = !isNaN(titleParts[0]) && titleParts[0].length === 4; 
    return {
      imgSrc: `images/${sourceData[dataIndex].img}`,
      width: 5,
      height: 3,
      position: { x: 19.5, y: 2, z: -15 + 10 * i },
      rotationY: -Math.PI / 2,
      info: {
        title: sourceData[dataIndex].title,
        artist: 'Nguồn: Lịch Sự Việt Nam',
        description: sourceData[dataIndex].desc,
        year: isYear ? `Năm: ${titleParts[0]}` : 'Giá trị: Đại Đoàn Kết',
      },
    };
  }),
];
