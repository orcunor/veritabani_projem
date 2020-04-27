const Siparis = require('../model/Siparis');
const Musteri = require('../model/Musteri');

async function addNewSiparis(data) {
  return await Siparis.create({
   
    FATURA_TARIHI: data.FATURA_TARIHI,
    MIKTAR: data.MIKTAR,
    URUN_TUTARI: data.URUN_TUTARI,
    MusteriID: data.MusteriID,
    CREATED_BY: data.CREATED_BY,
  });
}


async function updateSiparis(data) {
 // const TITLE = data.TITLE;
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();
  const ID = data.ID;
  const FATURA_TARIHI = data.FATURA_TARIHI;
  const MIKTAR = data.MIKTAR;
  const URUN_TUTARI = data.URUN_TUTARI;
  const MusteriID = data.MusteriID;
  const CREATED_BY = data.CREATED_BY;
  return await Siparis.update(
    {
      FATURA_TARIHI,
      MIKTAR,
      URUN_TUTARI,
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

async function deleteSiparis(data) {
  const MODIFIED_BY = data.MODIFIED_BY;
  const MODIFIED_DATE = Date.now();

  return await Siparis.update(
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

async function getSiparisById(data) {
  const ID = data.ID;

  return await Siparis.findByPk(ID);
}

async function getSiparis() {
  return await Siparis.findAll({ 
    where: {
      IS_DELETED: 0 //yalnızca silinmemiş ürünleri getirmesi için
    },
    include: [
      { model: Musteri }
    ]
   

   // raw: true

  });
}

module.exports = { addNewSiparis, updateSiparis, deleteSiparis, getSiparisById, getSiparis };
