export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  // {
  //   id: 'ui-component',
  //   title: 'Ui Component',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'basic',
  //       title: 'Component',
  //       type: 'collapse',
  //       icon: 'feather icon-box',
  //       children: [
  //         {
  //           id: 'button',
  //           title: 'Button',
  //           type: 'item',
  //           url: '/component/button'
  //         },
  //         {
  //           id: 'badges',
  //           title: 'Badges',
  //           type: 'item',
  //           url: '/component/badges'
  //         },
  //         {
  //           id: 'breadcrumb-pagination',
  //           title: 'Breadcrumb & Pagination',
  //           type: 'item',
  //           url: '/component/breadcrumb-paging'
  //         },
  //         {
  //           id: 'collapse',
  //           title: 'Collapse',
  //           type: 'item',
  //           url: '/component/collapse'
  //         },
  //         {
  //           id: 'tabs-pills',
  //           title: 'Tabs & Pills',
  //           type: 'item',
  //           url: '/component/tabs-pills'
  //         },
  //         {
  //           id: 'typography',
  //           title: 'Typography',
  //           type: 'item',
  //           url: '/component/typography'
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    id: 'หนี้และภาษี',
    title: 'หนี้และภาษี',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'ลูกหนี้',
        title: 'ลูกหนี้',
        type: 'collapse',
        // icon: 'feather icon-at-sign',
        icon: 'bi bi-grid-3x2-gap-fill',
        children: [
          {
            id: 'ใบชำระหนี้',
            title: 'ใบชำระหนี้',
            type: 'item',
            url: '/component/badges'
          },
          {
            id: 'ใบลดหนี้ลูกหนี้',
            title: 'ใบลดหนี้ลูกหนี้',
            type: 'item',
            url: '/component/badges'
          },
          {
            id: 'ใบวางบิล',
            title: 'ใบวางบิล',
            type: 'item',
            url: '/component/badges'
          },
        ]
      },
      {
        id: 'เจ้าหนี้',
        title: 'เจ้าหนี้',
        type: 'collapse',
        // icon: 'feather icon-log-in',
        icon: 'bi bi-grid-3x2-gap-fill',
        children: [
          {
            id: 'ใบชำระหนี้',
            title: 'ใบชำระหนี้',
            type: 'item',
            url: '/component/button',
          },
          {
            id: 'ใบลดหนี้',
            title: 'ใบลดหนี้',
            type: 'item',
            url: '/component/button',
          },
          {
            id: 'ใบรับวางบิล',
            title: 'ใบรับวางบิล',
            type: 'item',
            url: '/component/button',
          },
        ]
      },
      {
        id: 'หักภาษี ณ ที่จ่าย',
        title: 'หักภาษี ณ ที่จ่าย',
        type: 'item',
        url: '/component/breadcrumb-paging',
        // icon: 'feather icon-log-in',
        icon: 'bi bi-grid-3x2-gap-fill',
      }
    ]
  },
  {
    id: 'การขายและการจัดซื้อ',
    title: 'การขายและการจัดซื้อ',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'ขายปลีก',
        title: 'ขายปลีก',
        type: 'item',
        url: '/forms',
        classes: 'nav-item',
        // icon: 'feather icon-file-text'
        icon: 'bi bi-grid-3x2-gap-fill'
      },
      {
        id: 'จัดซื้อและสต็อกสินค้า',
        title: 'จัดซื้อและสต็อกสินค้า',
        type: 'item',
        url: '/tables',
        classes: 'nav-item',
        // icon: 'feather icon-server'
        icon: 'bi bi-grid-3x2-gap-fill'
      },
      {
        id: 'ค่าใช้จ่าย/วัสดุสิ้นเปลือง',
        title: 'ค่าใช้จ่าย/วัสดุสิ้นเปลือง',
        type: 'item',
        url: '/component/tabs-pills',
        classes: 'nav-item',
        // icon: 'feather icon-server'
        icon: 'bi bi-grid-3x2-gap-fill'
      }
    ]
  },
  {
    id: 'ตารางนัดลูกค้า',
    title: 'ตารางนัดลูกค้า',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'การนัดหมาย',
        title: 'การนัดหมาย',
        type: 'item',
        url: '/component/collapse',
        classes: 'nav-item',
        // icon: 'feather icon-file-text'
        // icon: 'feather icon-activity'
        icon: 'bi bi-bookmarks-fill'
      },
    ]
  },
  {
    id: 'สอบถามข้อมูล',
    title: 'สอบถามข้อมูล',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'สอบถามรายละเอียด',
        title: 'สอบถามรายละเอียด',
        type: 'item',
        url: '/analytics',
        // icon: 'feather icon-help-circle'
        icon: 'bi bi-question-square-fill'
      }
    ]
  },
  {
    id: 'รายงาน',
    title: 'รายงาน',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'รายงานสรุปผล',
        title: 'รายงานสรุปผล',
        type: 'item',
        url: '/chart',
        classes: 'nav-item',
        // icon: 'feather icon-pie-chart'
        icon: 'bi bi-bar-chart-fill'
        // icon: 'bi bi-grid-3x2-gap-fill'
      }
    ]
  },
  {
    id: 'ข้อมูลตั้งค่าระบบ',
    title: 'ข้อมูลตั้งค่าระบบ',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'ข้อมูลบริษัท',
        title: 'ข้อมูลบริษัท',
        type: 'item',
        url: '/chart',
        classes: 'nav-item',
        // icon: 'feather icon-pie-chart'
        icon: 'bi bi-file-earmark-text-fill'
        // icon: 'bi bi-grid-3x2-gap-fill'
      },
      {
        id: 'ข้อมูลรถยนต์',
        title: 'ข้อมูลรถยนต์',
        type: 'item',
        url: '/chart',
        classes: 'nav-item',
        // icon: 'feather icon-pie-chart'
        icon: 'bi bi-file-medical-fill'
        // icon: 'bi bi-grid-3x2-gap-fill'
      },
      {
        id: 'ข้อมูลอะไหล่',
        title: 'ข้อมูลอะไหล่',
        type: 'item',
        url: '/chart',
        classes: 'nav-item',
        // icon: 'feather icon-pie-chart'
        icon: 'bi bi-file-richtext-fill'
        // icon: 'bi bi-grid-3x2-gap-fill'
      },
      {
        id: 'ข้อมูลลูกค้า',
        title: 'ข้อมูลลูกค้า',
        type: 'item',
        url: '/chart',
        classes: 'nav-item',
        // icon: 'feather icon-pie-chart'
        icon: 'bi bi-file-spreadsheet-fill'
        // icon: 'bi bi-grid-3x2-gap-fill'
      },
    ]
  },
  
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     },
  //     {
  //       id: 'menu-level',
  //       title: 'Menu Levels',
  //       type: 'collapse',
  //       icon: 'bi bi-grid-3x2-gap-fill',
  //       children: [
  //         {
  //           id: 'menu-level-2.1',
  //           title: 'Menu Level 2.1',
  //           type: 'item',
  //           url: 'javascript:',
  //           external: true
  //         },
  //         {
  //           id: 'menu-level-2.2',
  //           title: 'Menu Level 2.2',
  //           type: 'collapse',
  //           children: [
  //             {
  //               id: 'menu-level-2.2.1',
  //               title: 'Menu Level 2.2.1',
  //               type: 'item',
  //               url: 'javascript:',
  //               external: true
  //             },
  //             {
  //               id: 'menu-level-2.2.2',
  //               title: 'Menu Level 2.2.2',
  //               type: 'item',
  //               url: 'javascript:',
  //               external: true
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }
];
