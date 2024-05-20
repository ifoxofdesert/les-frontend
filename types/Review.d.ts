export interface Ireview {
  text: string;
  name: string;
  stars: number;
}

export interface IreviewSlider {
  title?: string;
  description?: string;
  slides?: Ireview[];
}
