/* =========================================================================
   check.js — KONTROL KODU (KAPI #1). GitHub'da barinir; loader uzaktan cekip
   calistirir ve globalThis.__CHECK__(ctx, helpers) fonksiyonunu cagirir.
   Buradaki mantigi GitHub'da degistirerek kurallari UZAKTAN guncelleyebilirsin
   (loader'i tekrar dagitmana gerek yok).
   helpers.get(url) -> CORS/CSP engeli olmadan GET (loader saglar).
   Donus: {ok:true} veya {ok:false, message:"..."}
   ========================================================================= */
globalThis.__CHECK__ = async function (ctx, helpers) {
  try {
    var cfg = await helpers.get('https://cdn.jsdelivr.net/gh/berj-oss/gothjo-script@main/config.json');

    if (!cfg || cfg.active !== true) {
      return { ok: false, message: (cfg && cfg.message) ? cfg.message : 'Sistem kapali.' };
    }
    if (cfg.expires && Number(cfg.expires) > 0 && Date.now() > Number(cfg.expires)) {
      return { ok: false, message: 'Aboneligin sona erdi.' };
    }
    // Buraya istedigin ek kurallari ekleyebilirsin (surum, saat, vs.)
    return { ok: true };
  } catch (e) {
    return { ok: false, message: 'Kontrol#1 alinamadi.' };
  }
};
