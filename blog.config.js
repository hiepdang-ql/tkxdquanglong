const BLOG = {
  // Cấu hình kết nối Notion
  API_BASE_URL:
    process.env.API_BASE_URL || 'https://www.notion.so/api/v3',

  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID || 'f3a7abca32d741229b5735eea2d3ecd9',

  // Giao diện và ngôn ngữ
  THEME: process.env.NEXT_PUBLIC_THEME || 'magzine',
  LANG: process.env.NEXT_PUBLIC_LANG || 'vi-VN',
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2016,

  // Tối ưu hiển thị và cache
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  NEXT_REVALIDATE_SECOND:
    process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60,
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto',
  APPEARANCE_DARK_TIME:
    process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],

  // Thông tin website
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Xây Dựng Quang Long',
  BIO:
    process.env.NEXT_PUBLIC_BIO ||
    'Chuyên xây nhà trọn gói, hỗ trợ trả góp 0%, khảo sát miễn phí',
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://xdquanglong.vercel.app',
  KEYWORDS:
    process.env.NEXT_PUBLIC_KEYWORD ||
    'xây dựng quang long,xây nhà trọn gói,xây nhà trả góp,thi công nhà ở,khảo sát miễn phí',
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',

  // Thông tin pháp lý
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '',
  BEI_AN_LINK:
    process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/',
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '',

  // RSS
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true,

  // Các file cấu hình mở rộng
  ...require('./conf/comment.config'),
  ...require('./conf/contact.config'),
  ...require('./conf/post.config'),
  ...require('./conf/analytics.config'),
  ...require('./conf/image.config'),
  ...require('./conf/font.config'),
  ...require('./conf/right-click-menu'),
  ...require('./conf/code.config'),
  ...require('./conf/animation.config'),
  ...require('./conf/widget.config'),
  ...require('./conf/ad.config'),
  ...require('./conf/plugin.config'),
  ...require('./conf/performance.config'),

  // Cấu hình nâng cao
  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  // Thêm script / css ngoài nếu cần
  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: [''],

  // Menu tùy chỉnh
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true,

  // Cho phép sao chép nội dung
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true,

  // Đảo vị trí sidebar nếu theme hỗ trợ
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // Câu chào chạy chữ
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Chào mừng đến với Xây Dựng Quang Long, Xây nhà trọn gói uy tín, Hỗ trợ trả góp 0%, Khảo sát miễn phí tận nơi',

  // Chuyển hướng từ uuid sang slug
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
