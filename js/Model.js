"use strict";

class Model 
{
  constructor(data) {
    this.data = JSON.parse(data);
  }

  set save(data) {
    window.sessionStorage.setItem('model-data', data);
  }

  get load() {
    return window.sessionStorage.getItem('model-data');
  }

  get size() {
    return this.data.length;
  }  

  INSERT(data) {
    this.data = [...this.data, data];
    let insertId = this.numRows - 1;
    return insertId;
  }

  SELECT(key, value) {
    return this.data.filter(arr => arr[key] == value);
  }

  UPDATE(key, value, array) {
    let affectedRows = 0;
    for (let k in this.data) {
      let arr = this.data[k];
      if (arr[key] == value) {
        this.data[k] = Object.assign({}, arr, array);
        affectedRows++;
      }
    }
    return affectedRows;
  }

  DELETE(key, value) {
    let i = this.data.length, j = 0, affectedRows = 0;
    this.data = this.data.filter(arr => arr[key] != value);
    j = this.data.length;
    affectedRows = i - j;
    return affectedRows;
  }
}

function testModel() {
  const m = new Model(db.user);
  tab(m.data);
  dir(
    m.INSERT({names: 'Jeff', ID: '7'}),
    m.SELECT(),
    m.SELECT('married', 1),
    m.UPDATE('names', 'Jeff', {STATUS: '0'}),
    m.UPDATE('ID', '7', {age: '29', lga: 'uhunmwode'}),
    m.DELETE('married', 1),
  );
  tab(m.data);
}
//testModel();