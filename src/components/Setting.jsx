import React, { useState } from 'react';

const Setting = ({ onUpdateShelfLife, initialShelfLife }) => {
  const [shelfLifeB2B, setShelfLifeB2B] = useState(initialShelfLife.shelfLifeB2B);
  const [shelfLifeMT, setShelfLifeMT] = useState(initialShelfLife.shelfLifeMT);
  const [shelfLifeChocolate, setShelfLifeChocolate] = useState(initialShelfLife.shelfLifeChocolate);

  const handleUpdateShelfLife = () => {
    onUpdateShelfLife({
      shelfLifeB2B,
      shelfLifeMT,
      shelfLifeChocolate
    });
    alert('Shelf Life berhasil diperbarui!');
  };

  return (
    <div id="setting" className="tabcontent">
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Setting</h2>
      <label htmlFor="shelflife-b2b">Shelf Life Fullcream B2B</label>
      <input
        type="number"
        id="shelflife-b2b"
        placeholder="masukan Shelf Life"
        value={shelfLifeB2B}
        onChange={(e) => setShelfLifeB2B(parseInt(e.target.value))}
      />
      
      <label htmlFor="shelflife-MT">Shelf Life ESL Fullcream MT dan Chocolate</label>
      <p style={{ fontSize: '10px' }}>untuk counter pack awal 1-90 atau counter carton 1-7.</p>
      <input
        type="number"
        id="shelflife-MT"
        placeholder="masukan Shelf Life"
        value={shelfLifeMT}
        onChange={(e) => setShelfLifeMT(parseInt(e.target.value))}
      />
      
      <p style={{ fontSize: '10px' }}>untuk counter pack 91 sampai selesai atau counter carton 8 sampai selesai.</p>
      <input
        type="number"
        id="shelflife-Chocolate"
        placeholder="masukan Shelf Life"
        value={shelfLifeChocolate}
        onChange={(e) => setShelfLifeChocolate(parseInt(e.target.value))}
      />
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><button onClick={handleUpdateShelfLife} >Simpan</button></div>

      {/* Menampilkan nilai shelf life yang disimpan */}
      <div className="showSelfLife">
        <h3>Shelf Life yang disimpan:</h3>
        <p>Shelf Life Fullcream B2B: {shelfLifeB2B}</p>
        <p>Shelf Life ESL Fullcream MT: {shelfLifeMT}</p>
        <p>Shelf Life ESL Chocolate: {shelfLifeChocolate}</p>
      </div>
    </div>
  );
};

export default Setting;