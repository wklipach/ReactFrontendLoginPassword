// src/components/tables/DataTable/index.tsx
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { type ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export interface DataTableProps {
  /** Данные для таблицы */
  rowData: any[];
  /** Определение колонок */
  columnDefs: ColDef[];
  /** Панель инструментов (опционально) */
  toolbar?: React.ReactNode;
  /** Количество строк на странице */
  /* paginationPageSize?: number; */
  /** Режим выделения: 'single' или 'multiple' */
  rowSelection?: 'single' | 'multiple';
  /** Колбек при изменении выделения */
  onSelectionChanged?: (selectedRows: any[]) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  rowData,
  columnDefs,
  toolbar,
 /* paginationPageSize = 20, */
  rowSelection = 'single',
  onSelectionChanged,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
      {toolbar && (
        <div style={{ padding: '8px 16px', background: '#fafafa', borderBottom: '1px solid #d9d9d9', flexShrink: 0 }}>
          {toolbar}
        </div>
      )}
      <div className="ag-theme-alpine" style={{ flex: 1, width: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          animateRows={true}
          defaultColDef={{
            resizable: true,
            sortable: true,
            filter: true,
          }}
          rowSelection={rowSelection}
          onSelectionChanged={(event) => {
            if (onSelectionChanged) {
              onSelectionChanged(event.api.getSelectedRows());
            }
          }}
        />
      </div>
    </div>
  );
};

export default DataTable;