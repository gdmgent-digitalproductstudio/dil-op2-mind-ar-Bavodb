Kazoo Kid AR - Augmented Reality Application

Live Demo: https://gdmgent-digitalproductstudio.github.io/dil-op2-mind-ar-Bavodb/

Concept
Dit project combineert twee AR technologieën. Face tracking plaatst een virtuele kazoo op je mond die beweegt en geluid maakt. Image tracking scant instrumentafbeeldingen en toont 3D modellen in AR en speelt ook het bijpassende geluid af. Het thema is geïnspireerd door de Kazoo Kid meme en Frederick Roegiers zijn prachtige kinder foto .

Functionaliteit

- Face Tracking: Kazoo op je mond, haar op je hoofd, beide aan/uit te zetten, play button voor animatie + geluid
- Image Tracking: Scan 4 verschillende instrumentkaarten, kazoo/fluit/mondharmonica/trompet wordt in 3D getoond, play button om geluid af te spelen met animatie
- Download Markers: Via image tracking pagina kan je alle marker afbeeldingen downloaden als ZIP

Bronnen

- 3D modellen: Sketchfab (gratis/royalty-free)
- Technologie: A-Frame 1.5.0 en 1.7.1, MindAR 1.2.5, Three.js (implicit), JSZip, FileSaver
- Licenties: A-Frame (MPL 2.0), MindAR (Apache 2.0), anderen (MIT)
- Audio: Royalty-free kazoo/fluit/mondharmonica/trompet samples

Interacties
Face Tracking pagina:

- Back knop: terug naar home
- Toggle Kazoo: toon/verberg kazoo
- Toggle Hair: toon/verberg haar
- Play knop: kazoo groeit 30%, wiggelt 7 seconden, haar verandert van kleur (6 kleuren cycling)

Image Tracking pagina:

- Back knop: terug naar home
- Play knop (verschijnt bij scan): instrument groeit 20%, wiggelt 5 seconden, geluid speelt af
- Download Markers knop: download alle 4 target afbeeldingen als ZIP

Bestanden

- index.html: home pagina met navigatie
- face.html: face tracking AR mode
- image.html: image tracking AR mode
- css/main.css: styling voor alle pagina's
- scripts/home.js: navigatie
- scripts/face.js: face tracking logica
- scripts/image.js: image tracking logica
- assets/3dmodels/: kazoo, fluit, mondharmonica, trompet GLB files
- assets/audio/: geluidsfragmenten WAV
- markers/: target afbeeldingen JPG
- targets.mind: MindAR marker database

- bronnen: Sketchfab (CC0 / Royalty-free)
- Licentie: Gratis gebruik voor commerciële en verbruiksprojecten toegestaan
- Modellen: Kazoo, Flute, Harmonica, Trumpet (afzonderlijk gedownload)

Overige Assets

- Video: Kazoo Kid Video - Educational/Fair Use
- Audio: Kazoo/Flute/Harmonica/Trumpet sounds - Royalty-free samples
- Logo: Custom design (project-specifiek)
