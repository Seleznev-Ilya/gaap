const landingTheme = {
  spacing: {
    custom: {},
    unit: 0.25,
    get(size: number) {
      return `${(size * this.unit).toFixed(1)}rem`;
    },
    get "4px"() {
      return this.get(1); // 4px
    },
    get "6px"() {
      return this.get(1.5); // 6px
    },
    get "8px"() {
      return this.get(2); // 8px
    },
    get "12px"() {
      return this.get(3); // 12px
    },
    get "16px"() {
      return this.get(4); // 16px
    },
    get "24px"() {
      return this.get(6); // 24px
    },
    get "36px"() {
      return this.get(9); // 36px
    },
    get "48px"() {
      return this.get(12); // 48px
    },
    get "60px"() {
      return this.get(15); // 60px
    },
    get "72px"() {
      return this.get(18); // 72px
    },
    get "100px"() {
      return this.get(25); // 100px
    },
  },

  colors: {
    white: {
      default: "#FEFFF0",
      100: "#EEE8DF",
      75: "#f5deb3",
    },
    grey: {
      default: "#363739",
      100: "#171717",
      75: "#222324",
    },

    black: {
      default: "#000",
      deepDark: "#101419",
    },
    orange: "#FFA048",
  },

  borderRadius: {
    default: "0.8rem", // 12px
    large: "1.25rem", // 20px
  },

  shadow: {
    default: "0 4px 4px  0  #15141525",
    cards: "0 0 10px  0  #15141525",
  },

  text: {
    weight: {
      bold: 700,
      regular: 400,
    },

    sizeSmall: {
      "8px": "0.5rem", // 8px
      "9px": "0.5625rem", // 9px
      "10px": "0.625rem", // 10px
      "11px": "0.6875rem", // 11px
      "12px": "0.75rem", // 12px
      "14px": "0.875rem", // 14px
    },
    sizeRegular: {
      "16px": "1rem", // 16px
      "18px": "1.125rem", // 18px
      "21px": "1.3125rem", // 21px
      "24px": "1.5rem", // 24px
      "32px": "2rem", // 32px
      "36px": "2.25rem", // 36px
    },
    sizeBig: {
      "40px": "2.5rem", // 40px
      "48px": "3rem", // 48px
      "60px": "3.75rem", // 60px
      "64px": "4rem", // 64px
      "70px": "4.375rem", // 70px
      "100px": "6.25rem", // 100px
    },
    // fonts: {
    //   NotoSansBold: "NotoSansBold",
    //   NotoSansRegular: "NotoSansRegular",
    //   Nanum: "Nanum",
    // },
  },

  // media: {
  //   section: { maxWidth: "1520px" },
  //   breakpoints: {
  //     mobile: 360,
  //     tabletBreakPoint: 640,
  //     tabletLandscape: 1024,
  //     tablet: 1280,
  //     desktop: 1920,
  //   },
  //   get mobile() {
  //     return `@media (max-width: ${this.breakpoints.mobile}px)`;
  //   },
  //   get tabletBreakPoint() {
  //     return `@media (min-width: ${this.breakpoints.tabletBreakPoint}px)`;
  //   },
  //   get tabletLandscape() {
  //     return `@media (min-width: ${this.breakpoints.tabletLandscape}px)`;
  //   },
  //   get tablet() {
  //     return `@media (min-width: ${this.breakpoints.tablet}px)`;
  //   },
  //   get desktop() {
  //     return `@media (min-width: ${this.breakpoints.desktop}px)`;
  //   },
  // },
};

export default landingTheme;
