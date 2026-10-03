# Majkula 🦈

Jednoduchý digitálny darček pre Miša. Úvod → video → obrázok na stiahnutie.

## Pridaj súbory

Vlož ich do `public/media/` s presnými názvami:

- `miso.mp4` — tvoje video (ideálne MP4 / H.264).
- `majkula.png` — obrázok, ktorý sa po videu dá stiahnuť.
- `fronbondi_skegs-sfx-custom-version-of-jaws-theme-cinematic-sound-effect-461780.mp3` — zvuk úvodu.

Sound starts after a click and loops continuously through the video and gift sections. Use the sound icon to mute or unmute it. Missing video and image files have placeholders.

## Lokálne

```sh
npm install
npm run dev
```

Otvor http://localhost:3000.

## Netlify

Pripoj svoj Git repozitár, nastav build command `npm run build` a publish directory `out`. Stránka sa exportuje ako statické HTML. Po nasadení použi jej finálnu HTTPS adresu pre QR kód na darčekovú krabičku.
