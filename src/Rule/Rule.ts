export interface Rule {
  applies: (string: string) => boolean;
}