const Satistemsilcisi = require('../model/Satistemsilcisi');
const Urun = require('../model/Urun');

async function addNewSatistemsilcisi(data) {
  return await Satistemsilcisi.create({
    //bburası eksik aq
    ARAC_PLAKA_NO: data.ARAC_PLAKA_NO,
    SATIS_TEMSILCISI_ADI: data.SATIS_TEMSILCISI_ADI,
    UrunID: data.UrunID,
    CREATED_BY: data.CREATED_BY,
  });
}


async function updateSatistemsilcisi(data) {
 // const TITLE = data.TITLE;
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();
  const ID = data.ID;
  const ARAC_PLAKA_NO = data.ARAC_PLAKA_NO;
  const SATIS_TEMSILCISI_ADI = data.SATIS_TEMSILCISI_ADI;
  const UrunID = data.URUN_KODU;
  const CREATED_BY = data.CREATED_BY;

  return await Satistemsilcisi.update(
    {
      ARAC_PLAKA_NO,
      SATIS_TEMSILCISI_ADI,
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

async function deleteSatistemsilcisi(data) {
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Satistemsilcisi.update(
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

async function getSatistemsilcisiById(data) {
  const ID = data.ID;

  return await Satistemsilcisi.findByPk(ID);
}

async function getSatistemsilcisi() {
  return await Satistemsilcisi.findAll({ 
    where: {
      IS_DELETED: 0 //yalnızca silinmemiş ürünleri getirmesi için
    },
    include: [
      { model: Urun }
    ]
   

   // raw: true

  });
}

module.exports = { addNewSatistemsilcisi, updateSatistemsilcisi, deleteSatistemsilcisi, getSatistemsilcisiById, getSatistemsilcisi };
