/* =========================================================================
   ANA MANTIK (main.js) — GitHub'da barinir, loader uzaktan ceker.
   -------------------------------------------------------------------------
   Bu dosyanin icerigi F12 Network sekmesinde GORULEBILIR. Gizlemek
   istiyorsan bu dosyayi JSVM aracinla obfuscate edip GitHub'a oyle koy
   (kompakt mod onerilir). Obfuscate edince ic (0,eval) global scope'ta
   calisir; o yuzden ctx'i globalThis.__CTX__'ten aliyoruz (loader oyle veriyor).
   ========================================================================= */
(function () {
  'use strict';

  var ctx = (typeof globalThis !== 'undefined' && globalThis.__CTX__) ? globalThis.__CTX__ : {};

  // Ornek kullanim kaydi (yalniz kendi telemetrin)
  try { if (ctx.report) ctx.report({ event: 'start', v: ctx.version }); } catch (e) {}

  // Kill-switch mesaji/notice varsa gosterebilirsin
  if (ctx.config && ctx.config.notice) {
    try { console.log('[main] duyuru:', ctx.config.notice); } catch (e) {}
  }

  // =====================================================================
  //  >>> ANA KODUN BURADAN ITIBAREN <<<
  //  Kendi script mantigin buraya gelir.
  //  Kullanabilecegin: ctx.did (cihaz kimligi), ctx.version, ctx.config,
  //                    ctx.report(obj) (telemetri gonder).
  // =====================================================================
  console.log('[main] yuklendi. cihaz:', ctx.did, 'surum:', ctx.version);

  // Ornek:
  // document.querySelectorAll('.reklam').forEach(function (el) { el.remove(); });
})();
