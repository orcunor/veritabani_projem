const Siparisdetay = require('../model/Siparisdetay');
const Satistemsilcisi = require('../model/Satistemsilcisi');
const Musteri = require('../model/Musteri');
const Urun = require('../model/Urun');

async function addNewSiparisdetay(data) {
  return await Siparisdetay.create({
    //bburası eksik aq
    MusteriID: data.MusteriID,
    SatistemsilcisiID: data.SatistemsilcisiID,
    UrunID: data.UrunID,
    CREATED_BY: data.CREATED_BY,
  });
}


async function updateSiparisdetay(data) {
 // const TITLE = data.TITLE;
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();
  const ID = data.ID;
  const MusteriID = data.MusteriID;
  const SatistemsilcisiID = data.SatistemsilcisiID;
  const UrunID = data.UrunID;
  const CREATED_BY = data.CREATED_BY;

  return await Siparisdetay.update(
    {
      MusteriID,
      SatistemsilcisiID,
      UrunID,
      CREATED_BY,
      //TITLE,
     // MODIFIED_BY,
     // MODIFIED_DATE,
    },
    {
      where: {
        ID
      },
    },
  );
}

async function deleteSiparisdetay(data) {
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Siparisdetay.update(
    {
      IS_DELETED: 'true',
      MODIFIED_BY,
      MODIFIED_DATE,
    },
    {
      where: {
        id: data.ID,
      },
    },
  );
}

async function getSiparisdetayById(data) {
  const ID = data.ID;

  return await Siparisdetay.findByPk(ID);
}

async function getSiparisdetay() {
  return await Siparisdetay.findAll({ 
    where: {
      IS_DELETED: 0 //yalnızca silinmemiş ürünleri getirmesi için
    },
    include: [
      { model: Satistemsilcisi },
      {model : Musteri},
      {model:Urun}
    ]
   

   // raw: true

  });
}

module.exports = { addNewSiparisdetay, updateSiparisdetay, deleteSiparisdetay, getSiparisdetayById, getSiparisdetay };
