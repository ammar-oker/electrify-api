export class APIPagination {
  page: number;
  perPage: number;
  total: number;
}

export class APISort {
  by?: string;
  type?: 'asc' | 'desc';
}

export default class ApiResponseDto<T> {
  data: T[];
  pagination?: APIPagination;
  sort?: APISort;
}
