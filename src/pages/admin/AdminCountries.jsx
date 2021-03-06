import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Nom', field: 'name' },
      { title: 'Drapeaux', field: 'flag' }
    ],
    data: [
      { name: 'test', flag: 'flag' },
      { name: 'test', flag: 'flag2' },
      { name: 'Tunisie', flag: 'flag3' },
      { name: 'Sénégal', flag: 'flag4' }
    ]
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/country`)
      .then(response => response.data)
      .then(data => setState({ ...state, data: data }))
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(state);

  return (
    <MaterialTable
      title="Liste des Pays"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            axios
              .post(`${process.env.REACT_APP_API_URL}/api/country/new`, {
                name: newData.name,
                flag: newData.flag
              })
              .catch(function (error) {
                console.log(error);
              });
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            axios
              .put(`${process.env.REACT_APP_API_URL}/api/country/${newData.idcountry}`, {
                name: newData.name,
                flag: newData.flag
              })
              .then(function (response) {
                console.log(response.data);
              });
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
