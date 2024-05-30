"use strict";(self.webpackChunkjobforjobax=self.webpackChunkjobforjobax||[]).push([[9352],{9352:(E,d,t)=>{t.r(d),t.d(d,{ion_infinite_scroll:()=>h,ion_infinite_scroll_content:()=>g});var a=t(5861),e=t(3281),o=t(7808),s=t(8996),f=t(8958);const h=class{constructor(i){(0,e.r)(this,i),this.ionInfinite=(0,e.d)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.onScroll=()=>{const n=this.scrollEl;if(!n||!this.canStart())return 1;const l=this.el.offsetHeight;if(0===l)return 2;const r=n.scrollTop,p=n.offsetHeight,m=0!==this.thrPc?p*this.thrPc:this.thrPx;return("bottom"===this.position?n.scrollHeight-l-r-m-p:r-l-m)<0&&!this.didFire?(this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3):4},this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}thresholdChanged(){const i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}disabledChanged(){const i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)}connectedCallback(){var i=this;return(0,a.Z)(function*(){const n=(0,o.f)(i.el);n?(i.scrollEl=yield(0,o.g)(n),i.thresholdChanged(),i.disabledChanged(),"top"===i.position&&(0,e.w)(()=>{i.scrollEl&&(i.scrollEl.scrollTop=i.scrollEl.scrollHeight-i.scrollEl.clientHeight)})):(0,o.p)(i.el)})()}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}complete(){var i=this;return(0,a.Z)(function*(){const n=i.scrollEl;if(i.isLoading&&n)if(i.isLoading=!1,"top"===i.position){i.isBusy=!0;const l=n.scrollHeight-n.scrollTop;requestAnimationFrame(()=>{(0,e.e)(()=>{const c=n.scrollHeight-l;requestAnimationFrame(()=>{(0,e.w)(()=>{n.scrollTop=c,i.isBusy=!1,i.didFire=!1})})})})}else i.didFire=!1})()}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const i=(0,s.b)(this);return(0,e.h)(e.H,{key:"8b5da92c7a1c118cd6c6a6be8f21b11b79f166bd",class:{[i]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}})}get el(){return(0,e.f)(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}};h.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";const g=class{constructor(i){(0,e.r)(this,i),this.customHTMLEnabled=s.c.get("innerHTMLTemplatesEnabled",f.E),this.loadingSpinner=void 0,this.loadingText=void 0}componentDidLoad(){if(void 0===this.loadingSpinner){const i=(0,s.b)(this);this.loadingSpinner=s.c.get("infiniteLoadingSpinner",s.c.get("spinner","ios"===i?"lines":"crescent"))}}renderLoadingText(){const{customHTMLEnabled:i,loadingText:n}=this;return i?(0,e.h)("div",{class:"infinite-loading-text",innerHTML:(0,f.a)(n)}):(0,e.h)("div",{class:"infinite-loading-text"},this.loadingText)}render(){const i=(0,s.b)(this);return(0,e.h)(e.H,{key:"8ffd8ff4c951be0c2b1f48fd4be3a2d7765a989f",class:{[i]:!0,[`infinite-scroll-content-${i}`]:!0}},(0,e.h)("div",{key:"d7d03485501b5e2fde7c132309bb6358818eb0cd",class:"infinite-loading"},this.loadingSpinner&&(0,e.h)("div",{class:"infinite-loading-spinner"},(0,e.h)("ion-spinner",{name:this.loadingSpinner})),void 0!==this.loadingText&&this.renderLoadingText()))}};g.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}}}]);