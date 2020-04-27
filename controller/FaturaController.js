const Fatura = require('../model/Fatura');
const Musteri = require('../model/Musteri');

async function addNewFatura(data) {
  return await Fatura.create({
    //bburası eksik aq
    FATURA_TARIHI: data.FATURA_TARIHI,
    FATURA_TUTARI: data.FATURA_TUTARI,
    URUN: data.URUN,
    MIKTAR: data.MIKTAR,
    MusteriID : data.MusteriID,
    CREATED_BY: data.CREATED_BY,
  });
}


async function updateFatura(data) {
 // const TITLE = data.TITLE;
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();
  const ID = data.ID;
  const FATURA_TARIHI = data.FATURA_TARIHI;
  const FATURA_TUTARI = data.FATURA_TUTARI;
  const URUN = data.URUN;
  const MIKTAR = data.MIKTAR;
  const MusteriID = data.MusteriID;
  const CREATED_BY = data.CREATED_BY;
  return await Fatura.update(
    {
      FATURA_TARIHI,
      FATURA_TUTARI,
      URUN,
      MIKTAR,
      MusteriID,
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

async function deleteFatura(data) {
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Fatura.update(
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

async function getFaturaById(data) {
  const ID = data.ID;

  return await Fatura.findByPk(ID);
}

async function getFatura() {
  return await Fatura.findAll({ 
    where: {
      IS_DELETED: 0 //yalnızca silinmemiş ürünleri getirmesi için
    },
    include: [
      { model: Musteri }
    ]
   

   // raw: true

  });
}

module.exports = { addNewFatura, updateFatura, deleteFatura, getFaturaById, getFatura };
