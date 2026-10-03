# Majkula 🦈

Jednoduchý digitálny darček pre Miša. Úvod → video → obrázok na stiahnutie.

## Pridaj súbory

Vlož ich do `public/media/` s presnými názvami:

- `miso.mp4` — tvoje video (ideálne MP4 / H.264).
- `majkula.png` — obrázok, ktorý sa po videu dá stiahnuť.
- `fronbondi_skegs-sfx-custom-version-of-jaws-theme-cinematic-sound-effect-461780.mp3` — zvuk úvodu.

Zvuk sa spustí až po kliknutí, aby fungoval aj na telefóne. Úvodný zvuk sa pri prehrávaní videa zastaví, aby bolo počuť zvuk videa. Chýbajúce video a obrázok majú pripravenú náhradu.

## Lokálne

```sh
npm install
npm run dev
```

Otvor http://localhost:3000.

## Netlify

Pripoj svoj Git repozitár, nastav build command `npm run build` a publish directory `out`. Stránka sa exportuje ako statické HTML. Po nasadení použi jej finálnu HTTPS adresu pre QR kód na darčekovú krabičku.
