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
        icon: 'feather icon-arrow-right'
      }
    ]
  },
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
        icon: 'feather icon-box',
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
        icon: 'feather icon-box',
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
        icon: 'feather icon-arrow-right',
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
        icon: 'feather icon-arrow-right'
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
        icon: 'feather icon-arrow-right'
      },
      {
        id: 'จัดซื้อและสต็อกสินค้า',
        title: 'จัดซื้อและสต็อกสินค้า',
        type: 'item',
        url: '/tables',
        classes: 'nav-item',
        // icon: 'feather icon-server'
        icon: 'feather icon-arrow-right'
      },
      {
        id: 'ค่าใช้จ่าย/วัสดุสิ้นเปลือง',
        title: 'ค่าใช้จ่าย/วัสดุสิ้นเปลือง',
        type: 'item',
        url: '/component/tabs-pills',
        classes: 'nav-item',
        // icon: 'feather icon-server'
        icon: 'feather icon-arrow-right'
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
        icon: 'feather icon-arrow-right'
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
  //       icon: 'feather icon-menu',
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
