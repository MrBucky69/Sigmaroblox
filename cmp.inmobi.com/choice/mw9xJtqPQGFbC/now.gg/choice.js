'use strict';
(function() {
    var cmpFile = 'noModule' in HTMLScriptElement.prototype ? 'cmp2.js' : 'cmp2-polyfilled.js';
    (function() {
        var cmpScriptElement = document.createElement('script');
        var firstScript = document.getElementsByTagName('script')[0];
        cmpScriptElement.async = true;
        cmpScriptElement.type = 'text/javascript';
        var cmpUrl;
        var tagUrl = document.currentScript.src;
        cmpUrl = 'https://cmp.inmobi.com/tcfv2/CMP_FILE?referer=now.gg'.replace('CMP_FILE', cmpFile);
        cmpScriptElement.src = cmpUrl;
        firstScript.parentNode.insertBefore(cmpScriptElement, firstScript);
    })();
    (function() {
        var css = "" +
            " .qc-cmp-button { " +
            "   background-color: #ff42a5 !important; " +
            "   border-color: #ff42a5 !important; " +
            " } " +
            " .qc-cmp-button:hover { " +
            "   border-color: #ff42a5 !important; " +
            " } " +
            " .qc-cmp-alt-action, " +
            " .qc-cmp-link { " +
            "   color: #ff42a5 !important; " +
            " } " +
            " .qc-cmp-button.qc-cmp-secondary-button:hover { " +
            "   background-color: #ff42a5 !important; " +
            "   border-color: #ff42a5 !important; " +
            " } " +
            " .qc-cmp-button.qc-cmp-secondary-button:hover { " +
            "   color: #ffffff !important; " +
            " } " +
            " .qc-cmp-button.qc-cmp-secondary-button { " +
            "   color: #ff42a5 !important; " +
            " } " +
            " .qc-cmp-button.qc-cmp-secondary-button { " +
            "   background-color: #eee !important; " +
            "   border-color: transparent !important; " +
            " } " +
            "" +
            "";
        var stylesElement = document.createElement('style');
        var re = new RegExp('&quote;', 'g');
        css = css.replace(re, '"');
        stylesElement.type = 'text/css';
        if (stylesElement.styleSheet) {
            stylesElement.styleSheet.cssText = css;
        } else {
            stylesElement.appendChild(document.createTextNode(css));
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(stylesElement);
    })();
    var autoDetectedLanguage = 'en';
    var gvlVersion = 3;

    function splitLang(lang) {
        return lang.length > 2 ? lang.split('-')[0] : lang;
    };

    function isSupported(lang) {
        var langs = ['en', 'fr', 'de', 'it', 'es', 'da', 'nl', 'el', 'hu', 'pt', 'pt-br', 'pt-pt', 'ro', 'fi', 'pl', 'sk', 'sv', 'no', 'ru', 'bg', 'ca', 'cs', 'et', 'hr', 'lt', 'lv', 'mt', 'sl', 'tr', 'zh'];
        return langs.indexOf(lang) === -1 ? false : true;
    };
    if (gvlVersion === 2 && isSupported(splitLang(document.documentElement.lang))) {
        autoDetectedLanguage = splitLang(document.documentElement.lang);
    } else if (gvlVersion === 3 && isSupported(document.documentElement.lang)) {
        autoDetectedLanguage = document.documentElement.lang;
    } else if (isSupported(splitLang(navigator.language))) {
        autoDetectedLanguage = splitLang(navigator.language);
    };
    var choiceMilliSeconds = (new Date).getTime();
    window.__tcfapi('init', 2, function() {}, {
        "coreConfig": {
            "uspVersion": 1,
            "uspJurisdiction": ["CA"],
            "uspLspact": "N",
            "suppressCcpaLinks": true,
            "inmobiAccountId": "mw9xJtqPQGFbC",
            "privacyMode": ["GDPR", "USP"],
            "hashCode": "dV8yUyY/sHtmHbnQUGvWtw",
            "publisherCountryCode": "US",
            "publisherName": "now.gg",
            "vendorPurposeIds": [1, 2, 7, 8, 10, 11, 3, 5, 4, 6, 9],
            "vendorFeaturesIds": [1, 2, 3],
            "vendorPurposeLegitimateInterestIds": [7, 8, 9, 2, 10, 11],
            "vendorSpecialFeaturesIds": [2, 1],
            "vendorSpecialPurposesIds": [1, 2],
            "googleEnabled": true,
            "consentScope": "service",
            "thirdPartyStorageType": "iframe",
            "consentOnSafari": false,
            "displayUi": "inEU",
            "defaultToggleValue": "off",
            "initScreenRejectButtonShowing": true,
            "initScreenCloseButtonShowing": true,
            "softOptInEnabled": false,
            "showSummaryView": true,
            "persistentConsentLinkLocation": 3,
            "displayPersistentConsentLink": true,
            "uiLayout": "banner",
            "publisherLogo": "https://cdn.now.gg/apps-content/img/homepage/whiteLogo.svg?qc-size=249,67",
            "vendorListUpdateFreq": 30,
            "publisherPurposeIds": [],
            "initScreenBodyTextOption": 1,
            "publisherConsentRestrictionIds": [],
            "publisherLIRestrictionIds": [],
            "publisherPurposeLegitimateInterestIds": [],
            "publisherSpecialPurposesIds": [],
            "publisherFeaturesIds": [],
            "publisherSpecialFeaturesIds": [],
            "stacks": [1, 42],
            "lang_": autoDetectedLanguage,
            "gvlVersion": 3,
            "totalVendors": 790
        },
        "premiumUiLabels": {
            "uspDnsText": [""]
        },
        "premiumProperties": {
            "googleWhitelist": [1]
        },
        "coreUiLabels": {},
        "theme": {
            "uxPrimaryButtonColor": "#ff42a5",
            "uxSecondaryButtonTextColor": "#ff42a5"
        },
        "nonIabVendorsInfo": {}
    });
})();