iimport { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';

// Create a RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert a row and store the RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
