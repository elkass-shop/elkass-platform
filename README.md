# ELKASS Platform

Oficjalne repo projektu ELKASS Platform — sklep RTV/AGD + ELKASS Studio.

## Uruchomienie

Projekt jest statyczny i działa na Vercel jako HTML/CSS/JS.

Główne wejście:

- `/` — strona główna,
- `/app/category/` — kategorie,
- `/app/product/?id=tv-samsung-55-crystal-uhd` — karta produktu,
- `/app/cart/` — koszyk,
- `/admin/` — ELKASS Studio.

## Struktura

```text
admin/      ELKASS Studio
app/        strony sklepu
assets/     CSS, JS, grafiki, ikony, motywy
data/       produkty, kategorie, koszyk, konfiguracje
docs/       dokumentacja projektu
config/     konfiguracja
scripts/    skrypty pomocnicze
storage/    miejsce na przyszłe pliki generowane
tests/      testy i checklisty
```

## Dokumentacja

Najważniejsze pliki:

- `CHANGELOG.md`
- `ROADMAP.md`
- `docs/project/PROJECT_BOOK.md`
- `docs/project/MIGRATION_TO_GITHUB.md`
- `docs/project/00_MASTER_PROJECT_LOG.md`

## Zasada projektu

Klient ma widzieć piękny sklep. Pracownik ma korzystać z naszego oprogramowania.
