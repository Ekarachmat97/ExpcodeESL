import React, { useState } from 'react';

const Generate = ({ onUpdateShelfLife, shelfLife }) => {
  const [productionDate, setProductionDate] = useState('');
  const [productVariant, setProductVariant] = useState('Fullcream B2B');
  const [expiredCodes, setExpiredCodes] = useState([]);

  const updateShelfLife = (event) => {
    event.preventDefault();
    let newExpiredCodes = generateExpiredCode(productionDate, productVariant, shelfLife.shelfLifeB2B, shelfLife.shelfLifeMT, shelfLife.shelfLifeChocolate);
    setExpiredCodes(newExpiredCodes);
  };

  const generateExpiredCode = (productionDate, productVariant, shelfLifeB2B, shelfLifeMT, shelfLifeChocolate) => {
    let codes = [];
    const date = new Date(productionDate);
    let expiredDate1, expiredDate2;

    if (productVariant === 'Fullcream B2B') {
      expiredDate1 = addDays(date, shelfLifeB2B);
      codes.push(`PFS EXP ${formatDate(expiredDate1)}`);
    } else if (productVariant === 'Fullcream MT') {
      expiredDate1 = addDays(date, shelfLifeMT);
      expiredDate2 = addDays(date, shelfLifeChocolate);
      codes.push(`PFF EXP ${formatDate(expiredDate1)}  dan  `);
      codes.push(`PFF EXP ${formatDate(expiredDate2)}`);
    } else if (productVariant === 'Chocolate') {
      expiredDate1 = addDays(date, shelfLifeMT);
      expiredDate2 = addDays(date, shelfLifeChocolate);
      codes.push(`PFC EXP ${formatDate(expiredDate1)}  dan  `);
      codes.push(`PFC EXP ${formatDate(expiredDate2)}`);
    }

    return codes;
  };

  const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthAbbreviation = monthNames[monthIndex];
    return `${day}/${monthAbbreviation}/${year}`;
  };

  return (
    <div id="generate" className="tabcontent">
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Generate Expired Code</h2>
      <form id="expired-code-form" onSubmit={updateShelfLife} >
        <label htmlFor="production-date">Tanggal Produksi:</label>
        <input type="date" id="production-date" name="production-date" value={productionDate} onChange={(e) => setProductionDate(e.target.value)} required /><br />
        
        <label htmlFor="product-variant">Varian Produk:</label>
        <select id="product-variant" name="product-variant" value={productVariant} onChange={(e) => setProductVariant(e.target.value)}>
          <option value="Fullcream B2B">Fullcream B2B</option>
          <option value="Fullcream MT">Fullcream MT</option>
          <option value="Chocolate">Chocolate</option>
        </select><br />
        
        <label htmlFor="expired-code" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Kode Expired:</label>
        <textarea id="expired-code" name="expired-code" placeholder="Tampilan tanggal kadaluarsa" readOnly value={expiredCodes.join('\n')} />
        <p style={{ fontSize: '10px' }}>Tanggal kadaluarsa sewaktu-waktu dapat berubah sesuai ketetapan perusahaan.</p>
        <br /><br />
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button className="submit" type="submit">Generate Code</button>
        </div>
      </form>

      {/* Menampilkan nilai shelf life yang disimpan */}
      <div className="showSelfLife">
        <h3>Shelf Life yang disimpan:</h3>
        <p>Shelf Life Fullcream B2B: {shelfLife.shelfLifeB2B}</p>
        <p>Shelf Life ESL Fullcream MT: {shelfLife.shelfLifeMT}</p>
        <p>Shelf Life ESL Chocolate: {shelfLife.shelfLifeChocolate}</p>
      </div>
    </div>
  );
};

export default Generate;