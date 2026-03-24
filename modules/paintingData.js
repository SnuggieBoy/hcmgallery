// Data pointing to locally downloaded Unsplash images
const sourceData = [
    // Front Wall (Items 0-3)
    {
        img: "family1.jpg",
        title: "Sự Gắn Kết Gia Đình",
        desc: "Bình đẳng giới bắt nguồn từ sự thấu hiểu, yêu thương và gắn kết. Một gia đình hạnh phúc là nơi mọi người cùng bước song hành."
    },
    {
        img: "cooking.jpg",
        title: "Chia Sẻ Bếp Núc",
        desc: "Trách nhiệm nội trợ không thuộc về riêng ai. Nam giới hiện đại luôn chủ động cùng bếp núc để chia sẻ gánh nặng với vợ."
    },
    {
        img: "woman_leader.jpg",
        title: "Phụ Nữ Lãnh Đạo",
        desc: "Người phụ nữ hiện đại có đầy đủ năng lực và cơ hội để phát triển sự nghiệp rực rỡ, độc lập tài chính và vươn tới thành công."
    },
    {
        img: "father_daughter.jpg",
        title: "Tình Phụ Tử",
        desc: "Đàn ông chăm con không phải là 'giúp vợ', đó là bản năng và trách nhiệm của người cha trong gia đình XHCN."
    },

    // Back Wall (Items 4-7)
    {
        img: "couple_budget.jpg",
        title: "Cùng Ra Quyết Định",
        desc: "Các vấn đề tài chính, định hướng gia đình đều được cả hai vợ chồng bàn bạc dân chủ, tôn trọng quyền quyết định của nhau."
    },
    {
        img: "loving.jpg",
        title: "Yêu Thương Công Bằng",
        desc: "Không có sự thiên vị giữa con trai và con gái. Mọi trẻ em đều được hưởng quyền như nhau."
    },
    {
        img: "painting.jpg",
        title: "Xây Dựng Không Gian",
        desc: "Việc nặng nhọc như sửa nhà không chỉ dành cho đàn ông. Phụ nữ cũng có thể tự tay tân trang tổ ấm cùng chồng."
    },
    {
        img: "hugging.jpg",
        title: "Sự Thấu Hiểu",
        desc: "Bình đẳng nhất là khi ta biết xoa dịu nỗi đau và chia sẻ mọi áp lực trong công việc cũng như cuộc sống của bạn đời."
    },

    // Left Wall (Items 8-11)
    {
        img: "family_40.jpg",
        title: "Gia Đình Thời Đại 4.0",
        desc: "Mô hình gia đình hạt nhân, nơi tiếng cười là chuẩn mực cao nhất đánh giá sự bình yên và công bằng giữa các thành viên."
    },
    {
        img: "dad_baby.jpg",
        title: "Chia Sẻ Trách Nhiệm",
        desc: "Không phải 'chức năng bẩm sinh', chăm sóc con mọn là chặng đường cả hai vợ chồng cùng đồng hành thức khuya dậy sớm."
    },
    {
        img: "mom_son.jpg",
        title: "Giáo Dục Tương Lai",
        desc: "Môi trường gia đình là lớp học đầu tiên. Cha mẹ bình đẳng là tấm gương sáng nhất giáo dục tư duy cởi mở cho thế hệ sau."
    },
    {
        img: "celebration.jpg",
        title: "Dòng Họ Văn Minh",
        desc: "Xóa bỏ định kiến 'trọng nam khinh nữ', loại trừ áp lực sinh con trai nối dõi là bước tiến lớn của gia đình Việt Nam."
    },

    // Right Wall (Items 12-15)
    {
        img: "women_conference.jpg",
        title: "Tiếng Nói Lãnh Đạo",
        desc: "Sự hiện diện của phụ nữ trên các bục diễn giả và hội nghị truyền cảm hứng tự tôn sâu sắc cho mọi độ tuổi."
    },
    {
        img: "equality.jpg",
        title: "Bình Đẳng Giới Khắp Nơi",
        desc: "Sự bình đẳng trong gia đình là hạt giống để lan tỏa một xã hội văn minh, tôn trọng tự do và loại bỏ hoàn toàn bạo lực."
    },
    {
        img: "woman_leader.jpg",
        title: "Giá Trị Đích Thực",
        desc: "Mọi vai trò trong gia đình đều vô giá. Không có việc nào là thấp kém, không có nghĩa vụ nào chỉ dành riêng cho ai."
    },
    {
        img: "cooking.jpg",
        title: "Hạnh Phúc Là San Sẻ",
        desc: "Chặng đường xây dựng tổ ấm không phải là cuộc thi xem ai hi sinh nhiều hơn, mà là hành trình cùng nhau gánh vác hạnh phúc."
    }
];

export const paintingData = [
  // Front Wall (Items 0-3)
  ...Array.from({ length: 4 }, (_, i) => {
    return {
      imgSrc: `images/${sourceData[i].img}`,
      width: 5,
      height: 3,
      position: { x: -15 + 10 * i, y: 2, z: -19.5 },
      rotationY: 0,
      info: {
        title: sourceData[i].title,
        artist: 'Trưng bày: Nghệ Thuật Đương Đại',
        description: sourceData[i].desc,
        year: 'Chủ đề: Tình Yêu & Sự San Sẻ',
      },
    };
  }),
  // Back Wall (Items 4-7)
  ...Array.from({ length: 4 }, (_, i) => {
    const dataIndex = i + 4;
    return {
      imgSrc: `images/${sourceData[dataIndex].img}`,
      width: 5,
      height: 3,
      position: { x: -15 + 10 * i, y: 2, z: 19.5 },
      rotationY: Math.PI,
      info: {
        title: sourceData[dataIndex].title,
        artist: 'Trưng bày: Nghệ Thuật Đương Đại',
        description: sourceData[dataIndex].desc,
        year: 'Chủ đề: Quyền & Cơ Hội',
      },
    };
  }),
  // Left Wall (Items 8-11)
  ...Array.from({ length: 4 }, (_, i) => {
    const dataIndex = i + 8;
    return {
      imgSrc: `images/${sourceData[dataIndex].img}`,
      width: 5,
      height: 3,
      position: { x: -19.5, y: 2, z: -15 + 10 * i },
      rotationY: Math.PI / 2,
      info: {
        title: sourceData[dataIndex].title,
        artist: 'Trưng bày: Nghệ Thuật Đương Đại',
        description: sourceData[dataIndex].desc,
        year: 'Chủ đề: Gia Đình Kiểu Mới',
      },
    };
  }),
  // Right Wall (Items 12-15)
  ...Array.from({ length: 4 }, (_, i) => {
    const dataIndex = i + 12;
    return {
      imgSrc: `images/${sourceData[dataIndex].img}`,
      width: 5,
      height: 3,
      position: { x: 19.5, y: 2, z: -15 + 10 * i },
      rotationY: -Math.PI / 2,
      info: {
        title: sourceData[dataIndex].title,
        artist: 'Trưng bày: Phụ Nữ Thời Đại Mới',
        description: sourceData[dataIndex].desc,
        year: 'Giá trị: Bình Đẳng',
      },
    };
  }),
];
