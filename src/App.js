import './App.css';
import Header from './components/Header';
import Checkboxes from './components/Checkboxes';
import ItemDetails from './components/ItemDetails';
import SupplierDetails from './components/SupplierDetails';
import React from 'react';
import Table from './components/Table';

function App() {

  const [itemChecked, setItemChecked] = React.useState(true);
  const [supplierChecked, setsupplierChecked] = React.useState(false);


  const handleCheckChange = (type) => {
    if (type === 'item') {
      setItemChecked(true);
      setsupplierChecked(false);
    } else if (type === 'supplier') {
      setsupplierChecked(true);
      setItemChecked(false);
    }
  }

  return (
    <>
      <Header />

      <div className='container'>
        <Checkboxes itemChecked={itemChecked} supplierChecked={supplierChecked} handleCheckChange={handleCheckChange} />


        {itemChecked && <ItemDetails />}
        {supplierChecked && <SupplierDetails />}


        <Table />

      </div>


    </>
  );
}

export default App;
