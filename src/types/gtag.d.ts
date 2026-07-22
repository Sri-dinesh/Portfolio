interface GtagConfig {
  page_path?: string;
  page_title?: string;
  [key: string]: unknown;
}

interface Gtag {
  (command: "config", targetId: string, config?: GtagConfig): void;
  (command: "set", config: GtagConfig): void;
  (command: "event", eventName: string, eventParams?: Record<string, unknown>): void;
  (command: "js", date: Date): void;
}

interface Window {
  gtag: Gtag;
  dataLayer: unknown[];
}
