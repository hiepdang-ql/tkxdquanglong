const CONFIG = {
  // Nút hiển thị ở banner trang chủ
  MAGZINE_HOME_BANNER_ENABLE: true,
  MAGZINE_HOME_BUTTON: true,
  MAGZINE_HOME_BUTTON_URL: '/about',
  MAGZINE_HOME_BUTTON_TEXT: 'Xem thêm',

  // Ẩn danh mục không muốn hiển thị ở trang chủ
  MAGZINE_HOME_HIDDEN_CATEGORY: 'Chia sẻ',

  // Nội dung banner trang chủ
  MAGZINE_HOME_TITLE: 'Xây Dựng Quang Long',
  MAGZINE_HOME_DESCRIPTION:
    'Chuyên xây nhà trọn gói, thiết kế và thi công nhà ở uy tín, hỗ trợ trả góp 0% và khảo sát miễn phí.',
  MAGZINE_HOME_TIPS:
    'Thi công nhanh – Minh bạch chi phí – Bảo hành dài hạn',

  // Bài viết đề xuất ở cuối trang
  MAGZINE_RECOMMEND_POST_TAG: 'noi-bat',
  MAGZINE_RECOMMEND_POST_COUNT: 6,
  MAGZINE_RECOMMEND_POST_TITLE: 'Bài viết nổi bật',
  MAGZINE_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false,

  // Giao diện
  MAGZINE_RIGHT_PANEL_DARK:
    process.env.NEXT_PUBLIC_MAGZINE_RIGHT_DARK || false,

  MAGZINE_POST_LIST_COVER: true,
  MAGZINE_POST_LIST_PREVIEW: true,
  MAGZINE_POST_LIST_CATEGORY: true,
  MAGZINE_POST_LIST_TAG: true,

  MAGZINE_POST_DETAIL_CATEGORY: true,
  MAGZINE_POST_DETAIL_TAG: true,

  // Thẻ liên hệ bên phải
  MAGZINE_SOCIAL_CARD: true,
  MAGZINE_SOCIAL_CARD_TITLE_1: 'Tư vấn xây dựng',
  MAGZINE_SOCIAL_CARD_TITLE_2: 'Liên hệ để được tư vấn miễn phí',
  MAGZINE_SOCIAL_CARD_TITLE_3: 'Liên hệ ngay',
  MAGZINE_SOCIAL_CARD_URL: '/lien-he',

  // Menu footer
  MAGZINE_FOOTER_LINKS: [
    {
      name: 'Công ty',
      menus: [
        {
          title: 'Giới thiệu',
          href: '/about'
        },
        {
          title: 'Công trình đã thi công',
          href: '/cong-trinh'
        }
      ]
    },
    {
      name: 'Dịch vụ',
      menus: [
        {
          title: 'Xây nhà trọn gói',
          href: '/xay-nha-tron-goi'
        },
        {
          title: 'Thiết kế nhà',
          href: '/thiet-ke'
        },
        {
          title: 'Sửa chữa nhà',
          href: '/sua-chua-nha'
        }
      ]
    },
    {
      name: 'Liên hệ',
      menus: [
        {
          title: 'Facebook',
          href: '#'
        },
        {
          title: 'Zalo',
          href: '#'
        },
        {
          title: 'Hotline',
          href: 'tel:0900000000'
        }
      ]
    },
    {
      name: 'Hỗ trợ',
      menus: [
        {
          title: 'Báo giá xây dựng',
          href: '/bao-gia'
        },
        {
          title: 'Tư vấn xây nhà',
          href: '/tu-van'
        }
      ]
    }
  ],

  // Menu trên header
  MAGZINE_MENU_CATEGORY: true,
  MAGZINE_MENU_TAG: true,
  MAGZINE_MENU_ARCHIVE: true,
  MAGZINE_MENU_SEARCH: true,

  // Nút quay lên đầu trang
  MAGZINE_WIDGET_TO_TOP: true
}

export default CONFIG
