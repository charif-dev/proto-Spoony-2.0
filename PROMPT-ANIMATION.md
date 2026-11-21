# Prompt pour l'animation Spoony 2.0 (ChatGPT, génération vidéo)

Pièces à joindre au message avant le prompt :
1. `img/spoony-2.jpg` : le boîtier Spoony 2.0 et ses quatre modules, référence visuelle à respecter.
2. `img/theme-industrie.jpg` : l'armoire et les équipements reliés, référence de composition.
3. `img/logo-dotvision.png` : le logo DotVision.

Le texte incrusté reste peu fiable en génération vidéo. Le slogan final s'ajoute au montage si le rendu le déforme.

---

## Prompt (à coller tel quel)

```
Create a 12-second photorealistic product animation, 16:9, 4K look, cinematic but sober industrial style.

REFERENCE: use the attached image of the Spoony 2.0 device as the exact product. Keep its shape, colors and labels.

PRODUCT: a compact modular DIN-rail energy sub-meter made in France. White polycarbonate housing, four modules clipped side by side on the DIN rail, each with a dark navy front label (#13294B):
- module 1 "BASE": DotVision logo, "SPOONY 2.0", three small status LEDs labeled STAT, COM, RST
- module 2 "MESURE": one STAT LED
- module 3 "LTE": small antenna connector, STAT LED
- module 4 "UPS": STAT LED
Blue screw terminals on top, grey terminal blocks below labeled "CURRENT SENSORS S1 S2 S3".
The device is SMALL: about the width of four circuit breakers. It must look discreet inside the cabinet, never oversized, never under a magnifying glass.

SCENE AND CAMERA:
0-3 s: slow dolly-in on an open grey industrial electrical cabinet (main low-voltage switchboard) in a modern factory, soft cool lighting, slight depth of field. Rows of circuit breakers and neat blue cables.
3-6 s: the camera settles on the DIN rail where the Spoony 2.0 sits among the breakers. Its green STAT LEDs blink. Three black split-core current clamps sit around the phase cables of one outgoing feeder.
6-9 s: thin luminous data lines, sky blue (#68AEDF) and warm gold (#F2B632), flow from the clamps into the BASE module, then leave the cabinet towards a small supervision screen in the background showing a live power curve.
9-11 s: on the screen, a gold alert tag appears near the curve: "+5.8 %". One LED on the BASE module turns amber, then back to green.
11-12 s: final close-up on the four modules, sharp and clean, DotVision logo readable.

STYLE: realistic materials, real industrial electrical cabinet details, no sci-fi holograms beyond the thin data lines, colour palette navy #13294B, cobalt #2459B8, sky blue #68AEDF, gold #F2B632 as accents.

DO NOT: add people or faces, add any other brand or logo, add extra text, make the device bulky, show sparks or danger, use a magnifier effect.
```

## Variante image fixe (affiche ou vignette)

```
Photorealistic close-up of the attached Spoony 2.0 device mounted on a DIN rail inside an open industrial electrical cabinet, between circuit breakers, three black split-core current clamps on one feeder, green status LEDs on, soft cool factory light, shallow depth of field. The device stays small relative to the cabinet. Navy, cobalt, sky blue and gold accents. No people, no other brand, no extra text. 16:9.
```

## Intégration
Déposer la vidéo obtenue sous `img/hero.mp4` : la page la charge à la place de l'image du boîtier, sans autre modification.
