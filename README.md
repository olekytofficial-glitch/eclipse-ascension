# ECLIPSE: Ascension — MVP 0.3

## Uruchomienie
1. Rozpakuj ZIP.
2. Otwórz `index.html` w Chrome, Edge albo Firefox.
3. Gra nie wymaga instalacji ani połączenia z internetem.
4. Zapis działa lokalnie w tej samej przeglądarce (localStorage).

## Sterowanie
- Kliknij `ATAKUJ` albo naciśnij spację.
- Skill: przycisk `Skill` albo klawisz Q.
- Zmień klasę i broń w zakładce `Postać`.
- Przejdź do etapu 10, aby odblokować prestiż.
- Motyw i eksport zapisu są w zakładce `Opcje`.

## Co zawiera prototyp
- 3 klasy: Warrior, Ranger, Arcanist.
- Dwa warianty broni na klasę (mechanika rotacji broni).
- Automatyczny atak + kliknięcia + skill aktywny.
- Etapy i skalowanie HP przeciwników.
- Questy z nagrodami.
- Umiejętność Cień Ascendenta za 10 000 kliknięć.
- Prestiż i trwały mnożnik obrażeń z esencji.
- Zapis lokalny, eksport JSON i symulowany postęp offline do 8 godzin.
- Cztery palety interfejsu i responsywny układ.

## Uczciwe ograniczenia wersji 0.1
To jest grywalny prototyp mechanik w HTML Canvas z pseudo-3D, a nie finalna gra 3D. Postacie są reprezentowane przez proceduralne sylwetki; nie ma jeszcze modeli 3D, animacji szkieletowych, ekwipunku z losowymi statystykami, serwera ani synchronizacji między PC i telefonem. Offline rewards są przybliżeniem prototypowym.

## Proponowany plan etapów
### Etap 1 — mechaniczny MVP (teraz)
Sprawdzenie pętli walki, klas, questów, prestiżu, zapisu i offline rewards.

### Etap 2 — właściwy projekt 3D
Przenieść fundament do Godot 4 (open source) albo Unity. Kamera 3D, prawdziwe modele, animacje, VFX, teren i bossowie.

### Etap 3 — głębszy system klas
Drzewka skilli, osobne zasoby klasowe, kombinacje broni, aktywne/pasywne skille i specjalizacje.

### Etap 4 — RPG
Dropy, rarity, statystyki przedmiotów, ulepszanie i crafting, kolejne regiony, bossowie i questy fabularne.

### Etap 5 — multiplatforma
UI dotykowe dopracowane, build Windows oraz Android/iOS. Synchronizacja chmurowa dopiero po decyzji o backendzie.

### Etap 6 — ekonomia i model płatności
Najpierw balans i zabawa. Model płatności wybierzemy dopiero po przetestowaniu progresji; bez pay-to-win jako domyślnego założenia.

## Ważne
Roboczy tytuł ECLIPSE: Ascension nie jest sprawdzony pod kątem znaków towarowych. Przed publikacją należy sprawdzić nazwę, licencje assetów i wymagania sklepów.

## Zmiany w 0.2
- Po pokonaniu przeciwnika automatycznie rozpoczyna się następny etap — bez przycisku.
- Opcje → Panel ADMIN → Auto Click (10, 25 lub 100 kliknięć/s).
- Auto Click liczy się do questów i odblokowania Cienia Ascendenta.
- ADMIN to narzędzie testowe lokalnej gry, nie system uprawnień użytkowników.

## Zmiany v0.3
- 3 klasy, 6 broni, 6 odmiennych umiejętności aktywnych.
- Bronie mają osobne mnożniki obrażeń, tempo autoataku, czas odnowienia i efekt skilla.
- Zmiana klasy lub broni resetuje cooldown skilla.
- Cień Ascendenta wzmacnia skill o 30%, a nie zastępuje skilla broni.
- Szał po odblokowaniu zwiększa DPS po użyciu skilla.
- Zachowano ADMIN Auto Click i automatyczne przejście etapów.

## Wersja 0.4
- Znacznie większy interfejs (do 1920px szerokości, większa czcionka i scena).
- Boss co 10 etapów; zwykłe potwory dają tylko złoto.
- Boss upuszcza 1 skrzynkę; ręczne otwieranie w zakładce Skrzynki.
- RNG: normalny 60%, rzadki 25%, epicki 10%, legendarny 4%, mityczny 1%.
- Skrzynki dają przedmioty z pasywnym bonusem do obrażeń. Bonus z przedmiotów ograniczony do +500% w prototypie.
- Skrzynki i przedmioty pozostają po prestiżu.
- Nagrody offline dają tylko złoto, nie skrzynki.

## Aktualizacje bez pobierania ZIP
- Dla jednej maszyny: uruchom serwer z folderu gry przez `python -m http.server 8000` i otwórz `http://localhost:8000`. Podmiana plików na dysku + odświeżenie strony ładuje nową wersję.
- Dla wielu urządzeń: opublikuj folder w GitHub Pages lub Cloudflare Pages. Nowa wersja wymaga wdrożenia zmienionych plików na hostingu; potem wystarczy odświeżyć.
- Uwaga: localStorage jest przypisane do adresu (origin). Zmiana z file:// na localhost lub hosting NIE przenosi automatycznie zapisu.
