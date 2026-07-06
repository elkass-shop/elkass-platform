# CHANGELOG — ELKASS Platform

## V49.1 — Home polish
- Poprawiono stylistykę opinii Google.
- Usunięto publiczny opis techniczny Theme Engine ze sklepu.
- Zmniejszono sekcję producentów i przeniesiono ją pod kategorie.


## Sprint 0 + V44 Product Polish

- Uporządkowano dokumentację startową projektu.
- Doprecyzowano strukturę pracy na jednym repozytorium `elkass-platform`.
- Przebudowano kartę produktu V44:
  - najważniejsze parametry wróciły wysoko, pod opis produktu,
  - blok ceny, dostępności, rat i CTA został uporządkowany,
  - `Dodaj do koszyka` jest głównym przyciskiem,
  - `Zapytaj doradcę` jest przyciskiem drugorzędnym,
  - `Raty 0%` oraz `Dogodne raty` są osobnymi elementami,
  - `Ekspert ELKASS poleca` został przeniesiony niżej,
  - usługi ELKASS zostały przeniesione niżej jako wsparcie po decyzji zakupowej,
  - dodano sekcje: Kupowane razem, Produkty podobne, Klienci oglądali również,
  - poprawiono mobile buy bar i hierarchię informacji na telefonie.

## Założenie od tego sprintu

Każdy kolejny moduł rozwijamy równolegle dla:

- Desktop,
- Mobile,
- ELKASS Studio,
- dokumentacji,
- przyszłej migracji na docelową witrynę.


## V47 – ELKASS Studio COMPLETE

- Dodano Dashboard administratora v47.
- Dodano Home Builder COMPLETE z sekcjami strony głównej.
- Dodano Product Builder PRO z finansowaniem, parametrami, mediami i powiązaniami.
- Dodano dokumentację `docs/studio/V47_STUDIO_COMPLETE.md`.
- Dodano dokument `docs/platform/WOODYBOY_PLATFORM.md` z założeniem, że ELKASS jest pierwszym wdrożeniem przyszłej platformy WOODYBOY.

## V50/V51 — Home Trust Polish + Launch QA
- Opinie Google przebudowane w kierunku starego, spokojnego stylu premium: gwiazdki, ocena 4.8/5, lokalne zaufanie.
- Zmniejszono i uspokojono sekcję producentów pod kategoriami.
- Ukryto publiczne elementy techniczne Theme Engine.
- Dodano dokumentację sprintu w `docs/project/V50_V51_HOME_TRUST_AND_LAUNCH_QA.md`.

## V54 — Cloud Foundation + Live Product Builder

- Dodano warstwę danych `ElkassCloud`.
- Dodano konfigurację `config/cloud-config.js` oraz przykład Supabase.
- Dodano migrację SQL pod Supabase i przyszły WOODYBOY Core.
- Product Builder w panelu otrzymał działający formularz zapisu produktu.
- Sklep odczytuje produkty z JSON + localStorage, a po konfiguracji także z Supabase.
- Dodano dokumentację `docs/studio/CLOUD_FOUNDATION_V54.md`.
