import * as CookieConsent from 'vanilla-cookieconsent';

function logConsent(action) {
    const cookie = CookieConsent.getCookie();
    const preferences = CookieConsent.getUserPreferences();

    if (!cookie || !preferences) {
        return;
    }

    const userConsent = {
        session_id: cookie.consentId,
        consent: {
            acceptType: preferences.acceptType,
            acceptedCategories: preferences.acceptedCategories,
            rejectedCategories: preferences.rejectedCategories
        },
        revision: '1.1',
        action: action || 'change',
        site: 'kaminrun.de'
    };

    fetch('/cmlog/consent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userConsent)
    });
}

window.addEventListener('load', function () {
    CookieConsent.run({
        guiOptions: {
            consentModal: {
                layout: 'bar inline',
                position: 'bottom',
                equalWeightButtons: true
            },
            preferencesModal: {
                layout: 'box',
                position: 'right',
                equalWeightButtons: true
            }
        },
        categories: {
            necessary: {
                enabled: true,
                readOnly: true
            },
            analytics: {}
        },
        disablePageInteraction: true,
        language: {
            default: 'de',
            translations: {
                de: {
                    consentModal: {
                        title: 'Wir verwenden Cookies',
                        description: 'Wir nutzen Cookies, um unsere Website zu betreiben und zu verbessern. Sie können Ihre Auswahl jederzeit in den Einstellungen anpassen.',
                        acceptAllBtn: 'Alle akzeptieren',
                        acceptNecessaryBtn: 'Nur notwendige',
                        showPreferencesBtn: 'Einstellungen'
                    },
                    preferencesModal: {
                        title: 'Datenschutzeinstellungen',
                        closeIconLabel: 'Schließen',
                        savePreferencesBtn: 'Einstellungen speichern',
                        acceptAllBtn: 'Alle akzeptieren',
                        rejectAllBtn: 'Alle ablehnen',
                        sections: [
                            {
                                title: 'Verwendung von Cookies',
                                description: 'Wir verwenden Cookies, um grundlegende Funktionen bereitzustellen und um zu verstehen, wie unsere Website genutzt wird.'
                            },
                            {
                                title: 'Notwendige Cookies',
                                description: 'Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.',
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Analyse & Statistik',
                                description: 'Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen, um sie laufend zu verbessern.',
                                linkedCategory: 'analytics'
                            }
                        ]
                    }
                }
            }
        },
        onFirstConsent: () => {
            logConsent('first_consent');
        },
        onChange: () => {
            logConsent('change');
        },
        onConsent: () => {
            logConsent('consent');
        },
    });
});