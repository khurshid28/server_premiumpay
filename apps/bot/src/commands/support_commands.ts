export enum SupportCommand {
  START = '/start',
}

export const startText =
  "Xush kelibsiz 🩶 Bu Premium Pay muddatli to'lov xizmatining yordamchi boti!";

export const contactText = 'Telefon raqamini ulashing!';
export const contactShareText = 'Nomerni ulashish';

export const selectText = "O'zingizni qiziqtirgan bo'limni tanlang";


export const operatorText ="Operatorimiz bilan bog'lanish uchun"
export const operatorPhone = "+998935034000";

export const operatorFullname = "PremiumPay Operator";
export enum SupportMainCommand {
  DOCUMENT = 'Hujjatlar',
  More = "Ko'p beriladigan savollar",
  OPERATOR = "Operator bilan bog'lanish",
}

export enum SupportMoreCommand {
  ABOUT = "Premium Pay muddatli to'lov xizmati haqida",
  DOCUMENT = 'Shartnomalar',
  METHODS = "Muddatli to'lov usullari",
  EXTRA = "Xizmat bilan bog'liq qo'shimcha savollar",
  OPERATOR = "Operator bilan bog'lanish",
  BACK = 'Orqaga',
}


export enum SupportEXTRACommand {

    CREDIT_NASIYA = "Premium Pay muddatli to'lovi bank kreditidan nimasi bilan farq qiladi?",
    LIMIT = "Nega menga limit bermadi ?",
    MYID = "Yuzni skanerlash bosqichidan o'ta olmayapman",
    CARD = "Nega kartamni ulay olmayabman?",
    INIT_PAYMENT = "Oldindan to'lov mavjudmi?",
    MONTHS = "Qanday muddatlarga xarid qila olaman?",
    PAYMENT = "Qanday to'lovni amalga oshiraman?",
    BACK = 'Orqaga',
  }
  
export const METHODS ="<b>Premium Pay</> platformasidan olingan muddatli to'lov avtomatik har oyning belgilanagan sanasida yechiladi\n\nBelgilangan sanadan oldin to'lovni amalga oshirmoqchi bo'lsangiz <b>Click</b>,<b>Payme</b> va <b>SQB Mobile</b> ilovasidan kreditni so'ndirish bo'limi orqali to'lovlarni amalga oshirishingiz mumkin!"


export const CREDIT_NASIYA = "Nasiyada boshlang'ich to'lov yo'q, shuningdek, bank kreditidan farqli ravishda to‘lovni kechiktirganlik uchun penya va jarimalar ham bo'lmaydi.\n\nMahsulot yoki xizmatni muddatli to'lovga sotib olayotganda mijoz oylik va umumiy to‘lov miqdorini, shuningdek, to‘lov muddatini aniq biladi. Shartlar shaffof bo'ladi va shartnoma oxirigacha o'zgarishsiz qoladi.\n\nKredit va nasiya o'rtasidagi yana bir farq shundaki, xaridor kredit olish uchun ariza berish orqali bank bilan huquqiy munosabatlarni o'rnatadi. Bank ushbu puldan foydalanganlik uchun qarz oluvchiga ma'lum foiz stavkasi bo'yicha pul mablag'larini taqdim etadi va xaridor bu pul bilan darhol istalgan do'konda xarid uchun to'laydi.\n\nNasiya esa ushbu xizmat mavjud bo'lgan sheriklar tarmog'iga ega bo'ladi. Sotib olayotganda, xizmat tanlangan do'konda xaridor uchun to'laydi, ya'ni mablag'lar to'g'ridan-to'g'ri xaridorga taqdim etilmaydi. O‘z navbatida, xaridor muddatli to'lov xizmati mijoziga aylanadi va xarid uchun to'lovni bo'lib-bo'lib amalga oshiradi."
export const CARD ="Bunday holda, sizning to'lov kartangiz:\n\n- aynan sizga tegishliligiga ishonch hosil qiling;\n- bu sizning asosiy daromadga ega plastik kartangiz bo’lishi kerak, aniqrog’i KREDIT, KORPORATIV, PENSIYA, STIPEDNIYA va shu kabi turdagi plastik kartalarni tizim qabul qilmaydi;\n- so'nggi 6 oy ichida faol;\n"
export const LIMIT ="Tizim avtomatik ravishda muddatli to'lov limitini belgilaydi.  Quyidagi hollarda rad javobini olishingiz mumkin:\n\n- oylik daromadingiz belgilangan minimal moqdordan kam bo'lsa;\n- boshqa kredit tizimlarida muddati o'tgan majburiyatlaringiz mavjud bo'lsa;\n- boshqa do'konlar va tizimlarda muddatli to'lovga mahsulot xarid qilib o'z vaqtida to'lamagan bo'lsangiz;\n- yosh chegarasi (20 yoshdan 65 yoshgacha) to'g'ri kelmasa;"
export const INIT_PAYMENT="Premium Pay platformasida oldindan to'lov mavjud emas"
export const PAYMENT = "<b>Click</b>,<b>Payme</b> va <b>SQB Mobile</b> ilovasidan kreditni so'ndirish bo'limi orqali to'lovlarni amalga oshirishingiz mumkin, Bu uchun sizga bank mfo raqami va kredit raqami kerak bo'ladi.\nKredit raqamini muddatli to'lovga xarid qilgan do'kondan olingan hujjatda taqdim etiladi, va sms tarzda sizga yuborilgan bo'ladi.\nBank mfo raqamini esa bank veb-saytlaridan olishingiz mumkin!"
export const MONTHS ="Bizning platformamizdan:\n\n <b>- 12 oy</b>\n <b>- 9 oy</b>\n <b>- 6 oy</b>\n <b>- 3 oy</b>\n\nmuddatlarga xaridni amalga oshiringiz mumkin! "

export const ABOUT ="<b>Premium Pay</b> — bu butun O'zbekiston bo'ylab hamkorlik nuqtalarda foydalanish mumkin bo'lgan, tovar va xizmatlarni muddatli to'lovga xarid qilishga mo'ljallangan xizmatdir.\n\nBiz Idea, Mediapark, Elmakon, Artel, Radius,  Mi-Store, Macbro, Just, Selfie, Bellstore, Adamari kabi do'konlar bilan hamkorlik qilamiz va ko'proq ma'lumotni premiumpay.uz saytida hamda ijtimoiy tarmoqlardagi sahifalarimizda topishingiz mumkin."


export const MYID ="Shaxsni tekshirish <b>MyID</b> tizimi orqali amalga oshiriladi. Quyidagilarga ishonch hosil qilishingizni so'raymiz:\n\n- kamera toza va yaxshi ishlashiga;\n- kamera sizning yuzingiz darajasida turganiga;\n- xona yetarlicha yoritilgan ekanligiga;\n- orqa fon turli rangda bo’lishi."