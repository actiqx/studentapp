export interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  phone: number;
  address: string;
  subject: {
    name: string;
    marks: number;
  };
  total?: number;
}
