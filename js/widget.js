var queryString = window.location.search;
console.log(queryString);

var urlParams = new URLSearchParams(queryString);

var vorgid = urlParams.get('orgid')
console.log(vorgid);

var vdepid = urlParams.get('depid')
console.log(vdepid);

var vregion = urlParams.get('region')
console.log(vregion);

if (vregion == 'euw1')
{var vurl = 'ie';
 console.log(vurl);}
else if (vregion == 'use1' || vregion == 'use2' || vregion == 'usw1' || vregion == 'usw2')
{var vurl = 'com';
 console.log(vurl);}

  (function(a,t,c,l,o,u,d){a['_genesysJourneySdk']=o;a[o]=a[o]||function(){
  (a[o].q=a[o].q||[]).push(arguments)},a[o].l=1*new Date();u=t.createElement(c),
  d=t.getElementsByTagName(c)[0];u.async=1;u.src=l;u.charset='utf-8';d.parentNode.insertBefore(u,d)
  })(window, document, 'script', 'https://apps.mypurecloud.' + vurl + '/journey/sdk/js/web/v1/ac.js', 'ac');
  ac('init', vorgid, { region: vregion });
  ac('load', 'autotrackUrlChange');

(function() {

    'use strict';

    // Inject the scripts we need to execute chat

    var scriptB = document.createElement('script');

    scriptB.type = 'text/javascript';
        scriptB.async = true;

        // Note again the reference to the Genesys Cloud region
    scriptB.src = 'https://apps.mypurecloud.ie/widgets/9.0/cxbus.min.js';

    scriptB.onload = function(){
        // remote script has loaded
        // note the reference below to .com - replace the url with the url appropriate to your Genesys Cloud region
        CXBus.configure({debug:false,pluginsPath:'https://apps.mypurecloud.ie/widgets/9.0/plugins/'});
        CXBus.loadPlugin('widgets-core');

        // A custom widgets plugin which we will use to start chat
        const customPlugin = CXBus.registerPlugin('Custom');

        window._genesys = {
            "widgets": {
                "main": {
                    theme: "light",
                    themes: {
                        light: "cx-theme-light",
                        dark: "cx-theme-dark"
                    },
                    lang: "en",
                    customStylesheetID: "genesys_widgets_custom"
                },
                "webchat": {
                    "transport": {
                        "type": "purecloud-v2-sockets",
                        // Note again the reference to the Genesys Cloud region
                        "dataURL": "https://api.mypurecloud." + vurl,
                        // This is your v2 widgets deployment key
                        "deploymentKey": vdepid,
                        // This is your Genesys Cloud org id
                        "orgGuid": vorgid,
                        "interactionData": {
                            "routing": {
                                // This is your routing data. With no flow and no altocloud, this is where your chat will go.
                                // Chat flows and altocloud may change this
                                "targetType": "QUEUE",
                                "targetAddress": "GB Agents",
                                "priority": 2
                            }
                        }
                    },
                    // This is data that can be passed to show as Interaction Details in the Genesys Cloud UI
                    "userData": {
                        "addressStreet": "",
                        "addressCity": "",
                        "addressPostalCode": "",
                        "addressState": "",
                        "phoneNumber": "",
                        "phoneType": "",
                        "customerId": "",
                        "customField1Label": "",
                        "customField1": "",
                        "customField2Label": "",
                        "customField2": "",
                        "customField3Label": "",
                        "customField3": ""
                    }
                }
            }
        };

        // Some code to add a button that will start chat when pressed
        var button = document.createElement("Button");
        button.innerHTML = "Chat with Us";
        button.style = "top:450px;right:-15px;position:fixed;z-index:99999;padding:10px;color:#000000;background-color:#ffffff!important;border:1px solid #000000;transform: rotate(-90deg);height:43.5px;font-weight:700;";
        button.className = "btn-steve";
        // If paired with an altocloud script and you want to hide the button from view, simply comment out this next line
        document.body.appendChild(button);

        // Setup the button click action to start the chat session
        document.getElementsByClassName("btn-steve")[0].onclick = function() {
            console.log('Chat clicked');
            customPlugin.command('WebChat.open');
        };
    };

    document.getElementsByTagName('head')[0].appendChild(scriptB);
    console.log("Chat script loaded");
