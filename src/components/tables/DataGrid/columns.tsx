// src/components/tables/DataGrid/columns.tsx
import { type ColDef } from 'ag-grid-community';

export const getColumns = (): ColDef[] => [
  { field: 'id', headerName: '№', width: 70, sortable: true, filter: true, pinned: 'left' },
  { field: 'shortName', headerName: 'Краткое наименование', width: 150, sortable: true, filter: true, pinned: 'left' },
  { field: 'fullName', headerName: 'Наименование', width: 200, sortable: true, filter: true },
  {
    field: 'price',
    headerName: 'Цена',
    width: 120,
    sortable: true,
    filter: 'agNumberColumnFilter',
    valueFormatter: (params) => params.value?.toFixed(2) ?? '',
  },
  {
    field: 'quantity',
    headerName: 'Количество',
    width: 120,
    sortable: true,
    filter: 'agNumberColumnFilter',
    valueFormatter: (params) => params.value?.toFixed(2) ?? '',
  },
  {
    field: 'date',
    headerName: 'Дата',
    width: 130,
    sortable: true,
    filter: 'agDateColumnFilter',
    valueFormatter: (params) => params.value?.toLocaleDateString('ru-RU') ?? '',
  },
  // 10 полей комментариев
  { 
  field: 'comment1', 
  headerName: 'Комментарий 1', 
  width: 160, 
  sortable: true, 
  filter: true,
  cellStyle: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  tooltipField: 'comment1', // показывает полный текст при наведении
},

{ 
  field: 'comment2', 
  headerName: 'Комментарий 2', 
  width: 160, 
  sortable: true, 
  filter: true,
  cellStyle: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  tooltipField: 'comment2', // показывает полный текст при наведении
},

{ 
  field: 'comment3', 
  headerName: 'Комментарий 3', 
  width: 160, 
  sortable: true, 
  filter: true,
  cellStyle: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  tooltipField: 'comment3', // показывает полный текст при наведении
},

{ 
  field: 'comment4', 
  headerName: 'Комментарий 4', 
  width: 160, 
  sortable: true, 
  filter: true,
  cellStyle: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  tooltipField: 'comment4', // показывает полный текст при наведении
},

{ 
  field: 'comment5', 
  headerName: 'Комментарий 5', 
  width: 160, 
  sortable: true, 
  filter: true,
  cellStyle: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  tooltipField: 'comment5', // показывает полный текст при наведении
},

{ 
  field: 'comment5', 
  headerName: 'Комментарий 5', 
  width: 160, 
  sortable: true, 
  filter: true,
  cellStyle: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  tooltipField: 'comment5', // показывает полный текст при наведении
},

{ 
  field: 'comment6', 
  headerName: 'Комментарий 6', 
  width: 160, 
  sortable: true, 
  filter: true,
  cellStyle: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  tooltipField: 'comment6', // показывает полный текст при наведении
},

{ 
  field: 'comment7', 
  headerName: 'Комментарий 7', 
  width: 160, 
  sortable: true, 
  filter: true,
  cellStyle: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  tooltipField: 'comment7', // показывает полный текст при наведении
},

{ 
  field: 'comment8', 
  headerName: 'Комментарий 8', 
  width: 160, 
  sortable: true, 
  filter: true,
  cellStyle: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  tooltipField: 'comment8', // показывает полный текст при наведении
},

{ 
  field: 'comment9', 
  headerName: 'Комментарий 9', 
  width: 160, 
  sortable: true, 
  filter: true,
  cellStyle: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  tooltipField: 'comment9', // показывает полный текст при наведении
},

{ 
  field: 'comment10', 
  headerName: 'Комментарий 10', 
  width: 160, 
  sortable: true, 
  filter: true,
  cellStyle: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  tooltipField: 'comment10', // показывает полный текст при наведении
}

];