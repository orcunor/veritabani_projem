const Musteri = require('../model/Musteri');
const Satistemsilcisi = require('../model/Satistemsilcisi');

async function addNewMusteri(data) {
  return await Musteri.create({
    //bburası eksik aq
    MUSTERI_ADI: data.MUSTERI_ADI,
    ADRES: data.ADRES,
    SatistemsilcisiID: data.SatistemsilcisiID,
    TELEFON_NO: data.TELEFON_NO,
    CREATED_BY: data.CREATED_BY,
  });
}


async function updateMusteri(data) {
 // const TITLE = data.TITLE;
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();
  const ID = data.ID;
  const MUSTERI_ADI = data.MUSTERI_ADI;
  const ADRES = data.ADRES;
  const SatistemsilcisiID = data.SatistemsilcisiID;
  const TELEFON_NO = data.TELEFON_NO;
  const CREATED_BY = data.CREATED_BY;
  return await Musteri.update(
    {
      MUSTERI_ADI,
      ADRES,
      SatistemsilcisiID,
      TELEFON_NO,
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

async function deleteMusteri(data) {
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Musteri.update(
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

async function getMusteriById(data) {
  const ID = data.ID;

  return await Musteri.findByPk(ID);
}

async function getMusteri() {
  return await Musteri.findAll({ 
    where: {
      IS_DELETED: 0 //yalnızca silinmemiş ürünleri getirmesi için
    },
    include: [
      { model: Satistemsilcisi }
    ]
   

   // raw: true

  });
}

module.exports = { addNewMusteri, updateMusteri, deleteMusteri, getMusteriById, getMusteri };
