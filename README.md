# **Text Studio – React Router Project**

Text Studio är ett React Router-baserat projekt där användaren kan skriva in text, välja ett transformationsläge och generera bearbetad text. Syftet är att skapa en enkel men flexibel texteditor med stöd för flera kreativa skrivlägen.

## 🚀 **Starta projektet**

1. Installera dependencies:

```bash
npm install
```

2. Kör utvecklingsservern:

```bash
npm run dev
```

3. Öppna i webbläsaren:

```
http://localhost:3000
```

## ✨ **Funktioner**

* Stor textarea för inmatning av text
* Dropdown för att välja transformation
* Generate-knapp
* Output-ruta som visar resultatet
* Route-baserad struktur (`/` och `/text-studio`)

## 🔧 **Transformationslägen**

I Text Studio finns just nu följande lägen:

* **Summary** – Kortar ner text och sammanfattar den
* **Rewrite** – Skriver om texten i en ny stil
* **Social post** – Genererar text anpassad för sociala medier
* **Campaign intro** – Skapar en enklare introduktion för marknadsföringssyfte

(*Observera att nuvarande version endast simulerar logiken — detta kan senare bytas mot riktig AI-bearbetning.*)

## 🛠 **Vad jag gjort**

* Skapat ett React Router-projekt med anpassad routestruktur
* Lagt till en ny sida: **/text-studio**
* Byggt UI för textinmatning, mode-val och output
* Implementerat Generate-funktion med state-hantering
* Flyttat routinglogik till `app/routes.ts` för att stödja dynamiska sidor

---
