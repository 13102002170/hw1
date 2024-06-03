// JavaScript per FOOTER (Section 1)

// Risposte alle Domande a Comparsa
document.addEventListener('DOMContentLoaded', function() {
    var faqContainer = document.getElementById('faq-container');

    var faqData = [
        {
            domanda: "Il mio alloggio è adatto a Airbnb?",
            risposta: "Gli ospiti Airbnb sono interessati a tutti i tipi di alloggi. Abbiamo annunci per minicase, baite, case sull'albero e altro ancora. Anche una stanza in più può essere un'ottima soluzione per un soggiorno."
        },
        {
            domanda: "La disponibilità del mio alloggio deve essere costante?",
            risposta: "Assolutamente no: hai tu il controllo totale sul tuo calendario. Puoi affittare il tuo spazio una volta all'anno, qualche notte al mese o più spesso."
        },
        {
            domanda: "Quanto dovrei interagire con gli ospiti?",
            risposta: "Sei tu a decidere. Alcuni host scelgono di inviare messaggi agli ospiti solo nei momenti importanti, e ricorrono ad esempio a una breve nota al check-in, mentre altri preferiscono incontrare di persona chi accolgono. Troverai certamente uno stile che si adatti sia a te che agli ospiti."
        },
        {
            domanda: "Qualche consiglio su come essere un ottimo host Airbnb?",
            risposta: "Una volta capito come gestire gli aspetti essenziali, la strada è tutta in discesa. Tieni pulito l'alloggio, rispondi prontamente agli ospiti e fornisci i servizi necessari, come gli asciugamani puliti. Ad alcuni host piace aggiungere un tocco personale, ad esempio collocando dei fiori freschi nella sistemazione o condividendo un elenco di mete locali da esplorare, ma non è affatto obbligatorio farlo. Prosegui nella lettura per scoprire ulteriori consigli sull'attività di host"
        },
        {
            domanda: "Che costi applica Airbnb?",
            risposta: "In genere, Airbnb riscuote dei costi del servizio fissi pari al 3% del subtotale della prenotazione, quando vieni pagato. Inoltre, addebita una commissione agli ospiti ogni volta che prenotano. In molte aree, peraltro, Airbnb riscuote e versa automaticamente le imposte sulle vendite e sul turismo per tuo conto. Scopri di più sui costi"
        }
    ];

    faqData.forEach(function(faq) {
        var question = document.createElement('ul');
        var listItemDomanda = document.createElement('li');
        var listItemRisposta = document.createElement('li');
        var questionText = document.createTextNode(faq.domanda);
        var answerText = document.createTextNode(faq.risposta);

        listItemDomanda.appendChild(questionText);
        listItemDomanda.classList.add('domanda');

        listItemRisposta.appendChild(answerText);
        listItemRisposta.classList.add('risposta');

        question.appendChild(listItemDomanda);
        question.appendChild(listItemRisposta);
        question.addEventListener('click', function() {
            listItemRisposta.classList.toggle('show');
        });

        faqContainer.appendChild(question);
    });
});