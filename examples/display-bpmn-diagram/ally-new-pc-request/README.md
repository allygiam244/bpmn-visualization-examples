# Ally - Autorizzazione richiesta nuovo PC

Esempio che visualizza il workflow BPMN di Ally per autorizzare la richiesta di un nuovo PC.
- to run locally, open the [index.html](index.html) directly in a Web Browser
- BPMN source: [ally_new_pc_request_authorization.bpmn](../../../bpmn-files/ally_new_pc_request_authorization.bpmn)

## Processo

| Lane | Attività |
|------|----------|
| Dipendente | Compila la richiesta (motivazione, tipologia, urgenza); a fine processo firma il verbale di consegna e restituisce il vecchio PC |
| Responsabile diretto | Valuta e autorizza la richiesta. Se non risponde entro 3 giorni parte un sollecito automatico (timer non interrompente). Se respinge, il dipendente viene notificato |
| IT / Help Desk | Verifica la disponibilità a magazzino; se non disponibile definisce la configurazione e chiede un preventivo. Infine prepara/configura il PC, lo consegna e aggiorna l'inventario asset |
| Amministrazione / Direzione | Se l'importo supera 1.500 € approva il budget (in caso di rifiuto il dipendente viene notificato); emette l'ordine d'acquisto e attende la ricezione del PC |

I punti di autorizzazione (1: responsabile, 2: budget) sono evidenziati con un overlay.
