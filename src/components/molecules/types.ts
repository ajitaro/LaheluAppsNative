export enum BadRatio {
  None,
  Vertical,
  Horizontal,
}

export type BadRatioProps = {
  type: BadRatio;
  width?: number;
  height?: number;
};

export type FullContentBodyProps = {
  imageUrl: string;
  badRatio: BadRatioProps;
  visible: boolean;
  onClose: () => void;
};
