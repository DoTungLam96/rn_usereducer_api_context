export interface DateOption {
  id: number;
  value?: string;
  isChoose?: boolean;
}
export const DATA_DATE: DateOption[] = [
  // {
  //     id: 1,
  //     value: "Tất cả",
  //     isChoose: true,
  // },
  {
    id: 2,
    value: '01/2022',
    isChoose: true,
  },
  {
    id: 3,
    value: '02/2022',
    isChoose: false,
  },
  {
    id: 4,
    value: '03/2022',
    isChoose: false,
  },
  {
    id: 5,
    value: '04/2020',
    isChoose: false,
  },
  {
    id: 6,
    value: '05/2022',
    isChoose: false,
  },
  {
    id: 7,
    value: '06/2022',
    isChoose: false,
  },
];
