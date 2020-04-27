const Urun = require('../model/Urun');

const Satistemsilcisi = require('../model/Satistemsilcisi');

async function addNewUrun(data) {
  return await Urun.create({
    //bburası eksik aq
    ADI: data.ADI,
    BIRIM_FIYAT: data.BIRIM_FIYAT,
    BARKOD_NO: data.BARKOD_NO,
    SatistemsilcisiID: data.SatistemsilcisiID,
    CREATED_BY: data.CREATED_BY,
  });
}


async function updateUrun(data) {
  // const TITLE = data.TITLE;
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();
  const ID = data.ID;
  const ADI = data.ADI;
  const BIRIM_FIYAT = data.BIRIM_FIYAT;
  const BARKOD_NO = data.BARKOD_NO;
  const SatistemsilcisiID = data.SatistemsilcisiID;
  const CREATED_BY = data.CREATED_BY;
  return await Urun.update(
    {
      ADI,
      BIRIM_FIYAT,
      BARKOD_NO,
      SatistemsilcisiID,
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

async function deleteUrun(data) {
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Urun.update(
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

async function getUrunById(data) {
  const ID = data.ID;

  return await Urun.findByPk(ID);
}

async function getUrun() {
  return await Urun.findAll({
    where: {
      IS_DELETED: 0 //yalnızca silinmemiş ürünleri getirmesi için
    },
    include: [
      { model: Satistemsilcisi }
    ]
   

   // raw: true

  });
}

module.exports = { addNewUrun, updateUrun, deleteUrun, getUrunById, getUrun };
