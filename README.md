# Bootstrap4 & CSS & SASS Layout Template.

Wersja online: http://mkrupa85.ssd-linuxpl.com/bootstrap4

1. Klonujemy lub pobieramy repozytorium na dysk.
2. Stronę możemy podejrzeć lokalnie w przeglądarce otwierając plik "index.html" w katalogu głównym projektu, z już wyrenderowanym plikiem main.css, który jest podpięty pod główny dokument html.
3. Jeśli chcemy ponownie przerenderować plik, wchodzimy przez terminal do sklonowanego repozytorium i poleceniem "npm i" uruchamiamy instalację wtyczek i modułów node.
4. Uruchamiamy kompilator za pomocą polecenia: "npm start".
7. Każda zmiana w pliku, który styluje layout src/sass/main.scss zostanie zaobserwowana przez kompilator i natychmiastowo zapisana w drzewie DOM.

Projekt wykonany na podstawie zdjęcia:
http://mkrupa85.ssd-linuxpl.com/bootstrap4/css-recruitment.png

Strona nie jest w pełni responsywna. Optymalny wygląd strony można zobaczyć na rozdzielczościach:
a) = 768px - strona wyświetla 2 kolumny produktów oraz ikonę do wysunięcia sidebaru.
b) >= 992px - strona wyświetla 2 kolumny produktów oraz wysunięty sidebar.
c) >= 1312px - strona wyświetla 3 kolumny oraz wysunięty sidebar.
