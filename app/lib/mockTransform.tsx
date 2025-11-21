export function mockTransform(mode: string, content: string): string {
  switch (mode) {
    case "Summary":
      return `
Summary (mock):
Här är en kort summering baserad på din text:

{{content}}

Sammanfattning (hårdkodad):
Den här texten handlar om något viktigt som bör få en tydlig och enkel summering för att användaren snabbt ska förstå helheten.
      `.trim();

    case "Rewrite":
      return `
Rewrite (mock):
Här är en omskriven version av din text, förenklad och gjort mer lättläst:

{{content}}

Omskriven (hårdkodad):
Texten har nu fått ett mer rakt och tydligt språk som gör det lättare att förstå vad som är poängen.
      `.trim();

    case "Social post":
      return `
Social Post (mock):
Här är en social media-vänlig version av din text:

{{content}}

Hårdkodad social text:
🚀 Nytt! Här är en snabb och engagerande variant som funkar bra för sociala medier. Kort, tydligt och gjord för att fånga uppmärksamhet.
      `.trim();

    case "Campaign intro":
      return `
Campaign Info (mock):
Här är en kampanjversion av din text:

{{content}}

Hårdkodad kampanjtext:
Den här informationen är nu formad för att passa i en marknadskampanj. Tydligt budskap, enkel värdekommunikation och en rak call-to-action.
      `.trim();

    default:
      return content;
  }
}

