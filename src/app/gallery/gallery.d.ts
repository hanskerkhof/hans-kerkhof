export interface Gallery {
  name: string;
  date: Date;
  preview_xxs: PreviewXxs;
  preview_xs: PreviewXs;
  preview_s: PreviewS;
  preview_m: PreviewM;
  preview_l: PreviewL;
  preview_xl: PreviewXl;
  raw: Raw;
  dominantColor: string;
}

export interface PreviewXxs {
  path: string;
  width: number;
  height: number;
}

export interface PreviewXs {
  path: string;
  width: number;
  height: number;
}

export interface PreviewS {
  path: string;
  width: number;
  height: number;
}

export interface PreviewM {
  path: string;
  width: number;
  height: number;
}

export interface PreviewL {
  path: string;
  width: number;
  height: number;
}

export interface PreviewXl {
  path: string;
  width: number;
  height: number;
}

export interface Raw {
  path: string;
  width: number;
  height: number;
}
