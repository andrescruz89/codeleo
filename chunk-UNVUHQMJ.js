import"./chunk-T7K6HM2J.js";import"./chunk-FB43MXFK.js";import"./chunk-IYZ43JEX.js";import"./chunk-IEROSTYY.js";import"./chunk-RI24VZ65.js";import"./chunk-36R5EU3R.js";import"./chunk-SGZ2B7FA.js";import{C as a,M as p,t as c,w as m}from"./chunk-FYWJBKMT.js";import"./chunk-IV5FR2YO.js";import"./chunk-TJ36ROFO.js";import"./chunk-SSFCZT2V.js";import"./chunk-HZ55OLAU.js";import"./chunk-6XL4YCFJ.js";import"./chunk-QBRYSDNA.js";import"./chunk-XXV46XCU.js";var w=c`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var l=arguments.length,t=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var f=o.length-1;f>=0;f--)(n=o[f])&&(t=(l<3?n(t):l>3?n(e,i,t):n(e,i))||t);return l>3&&t&&Object.defineProperty(e,i,t),t},s=class extends a{render(){return m`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=w;s=u([p("w3m-transactions-view")],s);export{s as W3mTransactionsView};
