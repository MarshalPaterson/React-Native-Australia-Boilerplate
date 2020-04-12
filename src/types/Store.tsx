export interface Store extends React.Props<any>  {
    id: number;
    title: string;
    description: string;
    about: string;
    giturl: string;
    url: string;
    version: string;
    license: string;
  }