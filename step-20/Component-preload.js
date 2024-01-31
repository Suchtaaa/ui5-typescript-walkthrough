//@ui5-bundle ui5/walkthrough/Component-preload.js
sap.ui.require.preload({
	"ui5/walkthrough/Component.js":function(){
"use strict";sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel"],function(t,n){"use strict";const e=t.extend("ui5.walkthrough.Component",{metadata:{interfaces:["sap.ui.core.IAsyncContentCreation"],manifest:"json"},init:function e(){t.prototype.init.call(this);const o={recipient:{name:"World"}};const i=new n(o);this.setModel(i)}});return e});
},
	"ui5/walkthrough/controller/App.controller.js":function(){
"use strict";sap.ui.define(["sap/ui/core/mvc/Controller"],function(t){"use strict";const e=t.extend("ui5.walkthrough.controller.App",{});return e});
},
	"ui5/walkthrough/controller/HelloPanel.controller.js":function(){
"use strict";sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(e,o){"use strict";const t=e.extend("ui5.walkthrough.controller.HelloPanel",{onShowHello:function e(){const t=this.getView()?.getModel()?.getProperty("/recipient/name");const i=this.getView()?.getModel("i18n")?.getResourceBundle();const n=i.getText("helloMsg",[t])||"no text defined";o.show(n)},onOpenDialog:function e(){if(!this.dialogPromise){this.dialogPromise=this.loadFragment({name:"ui5.walkthrough.view.HelloDialog"})}this.dialogPromise.then(function(e){e.open()})},onCloseDialog:function e(){this.byId("helloDialog")?.close()}});return t});
},
	"ui5/walkthrough/controller/InvoiceList.controller.js":function(){
"use strict";sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],function(e,t){"use strict";const n=e.extend("ui5.walkthrough.controller.App",{onInit:function e(){const n=new t({currency:"EUR"});this.getView()?.setModel(n,"view")}});return n});
},
	"ui5/walkthrough/i18n/i18n.properties":'# App Descriptor\nappTitle=Hello World\nappDescription=A simple walkthrough app that explains the most important concepts of UI5\n\n# Hello Panel\nshowHelloButtonText=Say Hello\nhelloMsg=Hello {0}\nhomePageTitle=UI5 TypeScript Walkthrough\nhelloPanelTitle=Hello World\nopenDialogButtonText=Say Hello With Dialog\ndialogCloseButtonText=Ok\n\n# Invoice List\ninvoiceListTitle=Invoices',
	"ui5/walkthrough/manifest.json":'{"_version":"1.60.0","sap.app":{"id":"ui5.walkthrough","type":"application","i18n":{"bundleName":"ui5.walkthrough.i18n.i18n","supportedLocales":[""],"fallbackLocale":""},"title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"dependencies":{"minUI5Version":"1.120","libs":{"sap.ui.core":{},"sap.m":{}}},"rootView":{"viewName":"ui5.walkthrough.view.App","type":"XML","id":"app"},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ui5.walkthrough.i18n.i18n","supportedLocales":[""],"fallbackLocale":""}},"invoice":{"type":"sap.ui.model.json.JSONModel","uri":"model/localInvoices.json"}},"resources":{"css":[{"uri":"css/style.css"}]}}}',
	"ui5/walkthrough/view/App.view.xml":'<mvc:View\n\tcontrollerName="ui5.walkthrough.controller.App"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"\n\tdisplayBlock="true"><Shell><App class="myAppDemoWT"><pages><Page title="{i18n>homePageTitle}"><content><mvc:XMLView viewName="ui5.walkthrough.view.HelloPanel"/><mvc:XMLView viewName="ui5.walkthrough.view.InvoiceList"/></content></Page></pages></App></Shell></mvc:View>\n\n',
	"ui5/walkthrough/view/HelloDialog.fragment.xml":'<core:FragmentDefinition\n   xmlns="sap.m"\n   xmlns:core="sap.ui.core" ><Dialog\n      id="helloDialog"\n      title="Hello {/recipient/name}"><content><core:Icon\n            src="sap-icon://hello-world"\n            size="8rem"\n            class="sapUiMediumMargin"/></content><beginButton><Button\n            text="{i18n>dialogCloseButtonText}"\n            press=".onCloseDialog"/></beginButton></Dialog></core:FragmentDefinition>',
	"ui5/walkthrough/view/HelloPanel.view.xml":'<mvc:View\n   controllerName="ui5.walkthrough.controller.HelloPanel"\n   xmlns="sap.m"\n   xmlns:mvc="sap.ui.core.mvc"><Panel\n      headerText="{i18n>helloPanelTitle}"\n      class="sapUiResponsiveMargin"\n      width="auto" ><content><Button\n            id="helloDialogButton"\n            icon="sap-icon://world"\n            text="{i18n>openDialogButtonText}"\n            press=".onOpenDialog"\n            class="sapUiSmallMarginEnd"/><Button\n            text="{i18n>showHelloButtonText}"\n            press=".onShowHello"\n            class="myCustomButton"/><Input\n            value="{/recipient/name}"\n            valueLiveUpdate="true"\n            width="60%"/><FormattedText\n            htmlText="Hello {/recipient/name}"\n            class="sapUiSmallMargin sapThemeHighlight-asColor myCustomText"/></content></Panel></mvc:View>',
	"ui5/walkthrough/view/InvoiceList.view.xml":'<mvc:View\n   controllerName="ui5.walkthrough.controller.InvoiceList"\n   xmlns="sap.m"\n   xmlns:mvc="sap.ui.core.mvc"><List\n      headerText="{i18n>invoiceListTitle}"\n      class="sapUiResponsiveMargin"\n      width="auto"\n      items="{invoice>/Invoices}" ><items><ObjectListItem\n            title="{invoice>Quantity} x {invoice>ProductName}"\n            number="{\n               parts: [\n                  \'invoice>ExtendedPrice\', \n                  \'view>/currency\'\n               ],\n               type: \'sap.ui.model.type.Currency\',\n               formatOptions: {\n                  showMeasure: false\n               }\n            }"\n            numberUnit="{view>/currency}"/></items></List></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
