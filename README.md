🤖 Intelligent AI Lead Scoring Pipeline

![Overview](overview.png)

**🇵🇱 Opis Projektu:**

Projekt ten to zautomatyzowany system klasy **Marketing Automation**, który w czasie rzeczywistym analizuje, ocenia i kategoryzuje leady przychodzące z kampanii reklamowych. System rozwiązuje problem "zimnych leadów" trafiających do działu sprzedaży, wykorzystując sztuczną inteligencję do analizy intencji klienta.

**🤝 Transparentność i Metodologia (AI Collaboration)**
Ten projekt powstał w ramach intensywnej nauki automatyzacji (Project-Based Learning). Został zrealizowany przy bliskiej współpracy z Mentorem AI (LLM).

**Podział ról i obowiązków:**

*   **Moja rola (Execution & Infrastructure):**
    *   Konfiguracja infrastruktury self-hosted: n8n na chmurze Render oraz bazy danych PostgreSQL na własnym serwerze VPS (Mikrus) z wykorzystaniem Dockera.
    *   Integracja systemów poprzez API: konfiguracja uwierzytelniania (OAuth2/Tokeny) dla HubSpot, Google Sheets, Groq AI oraz Slack/Discord.
    *   Budowa przepływu danych (Workflow) w n8n, mapowanie zmiennych oraz testowanie "live" za pomocą narzędzi cURL/ReqBin.
    *   Weryfikacja błędów i debugging połączeń sieciowych (firewall, porty).

*   **Rola AI (Architecture & Code):**
    *   Zaprojektowanie architektury logicznej systemu i modelu punktowania (Scoring Model).
    *   Generowanie fragmentów kodu JavaScript (węzły `Code`) odpowiedzialnych za czyszczenie danych (Regex) oraz logikę warunkową.
    *   Wsparcie w rozwiązywaniu błędów składniowych JSON oraz problemów konfiguracyjnych serwera.

### 🚀 Jak to działa?
1.  **Odbiór danych:** Webhook przyjmuje dane z formularzy (symulacja Facebook Ads / Landing Page).
2.  **Data Cleaning:** Skrypt JavaScript standaryzuje numery telefonów i weryfikuje domeny e-mail.
3.  **AI Analysis:** Model **Llama 3 (via Groq)** analizuje treść wiadomości, określając sentyment i intencję.
4.  **Scoring:** Algorytm sumuje punkty (dane techniczne + ocena AI).
5.  **Routing & Action:** Leady powyżej 60 pkt otrzymują status **HOT LEAD** i są priorytetowo zapisywane w **HubSpot CRM** oraz archiwizowane w **Google Sheets**.

### 🛠️ Tech Stack (Zero-Cost Architecture)
*   **Automation:** n8n (Self-hosted na Render Cloud)
*   **AI:** Llama 3.3 (via Groq API)
*   **Database:** PostgreSQL (Docker na Alpine Linux VPS)
*   **CRM:** HubSpot API
*   **Scripting:** JavaScript

---

**🇬🇧 Project Description**

This project is an automated **Marketing Automation** pipeline that analyzes, scores, and categorizes inbound leads in real-time. It solves the issue of "cold leads" cluttering the sales pipeline by leveraging Artificial Intelligence to determine customer intent.

**🤝 Transparency & Methodology (AI Collaboration)**
This project was built as part of an intensive Project-Based Learning path, executed in close collaboration with an AI Mentor (LLM).

**Roles and Responsibilities:**

*   **My Role (Execution & Infrastructure):**
    *   Setting up the self-hosted environment: Deployed n8n on Render Cloud and a PostgreSQL database on a private VPS (Mikrus) using Docker.
    *   API Integrations: Managing authentication (OAuth2/Tokens) for HubSpot, Google Sheets, Groq AI, and Slack/Discord.
    *   Building the workflow in n8n, data mapping, and conducting live tests using cURL/ReqBin.
    *   Troubleshooting and debugging network issues (firewalls, port forwarding).

*   **AI Role (Architecture & Code):**
    *   Designing the logical architecture and the Lead Scoring Model.
    *   Generating JavaScript code snippets (for `Code` nodes) used for data cleansing (Regex) and conditional logic.
    *   Assisting with JSON syntax errors and server configuration troubleshooting.

### 🚀 How it works?
1.  **Data Ingestion:** A Webhook receives data from forms (simulating FB Ads / Landing Pages).
2.  **Data Cleaning:** JavaScript normalizes phone numbers and verifies email domains.
3.  **AI Analysis:** The **Llama 3 model (via Groq)** analyzes the message content to determine sentiment and intent.
4.  **Scoring:** An algorithm calculates the total score (technical data + AI assessment).
5.  **Routing & Action:** Leads scoring above 60 points are flagged as **HOT LEAD**, prioritized in **HubSpot CRM**, and archived in **Google Sheets**.

---

## 📊 Logic Snippet / Przykładowy Kod

Fragment logiki biznesowej (JavaScript), który łączy dane techniczne z oceną AI / The business logic snippet combining technical data with AI assessment:

![Logic Detail](logic-detail.png)
