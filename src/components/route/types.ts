export interface View {
  render(): any;
}

export type Route = {
  path: string;
  view: View;
};
