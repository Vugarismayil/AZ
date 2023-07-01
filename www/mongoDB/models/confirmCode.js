
const monogoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

var hesaplar = monogoose.createConnection('mongodb://localhost:27017/speedsmm', {
  useNewUrlParser: true,
  autoIndex: false
});
const fastonaycodeSchema = new monogoose.Schema({
    ownerID: { type: String, required: true, index: true },
    onay_kodu: { type: String, required: true, index: true },
    alinacak_sure: { type: String, required: true },
    guvenlik_keyi: { type: String, required: true }, 
    kesilecek_miktar: { type: String, required: true }, 
    urunID: { type: String, required: true },
    tarih: { type: String, required: true }, 
});

fastonaycodeSchema.plugin(uniqueValidator);
module.exports = hesaplar.model("smm_onaykod", fastonaycodeSchema);