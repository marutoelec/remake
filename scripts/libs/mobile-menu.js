class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.mmbtn = document.querySelector('.mobile-menu');
        this.DOM.container = document.querySelector('#global-container');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
        bodyFixedToggle();
        // bodyFixedOff();
    }
    
    _remove() {
        this.DOM.container.classList.remove('menu-open');
        bodyFixedOff();
    }
    
    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.mmbtn.addEventListener('click', this._remove.bind(this));
    }
}
    
    // 背景固定
    
    let scrollPosition;
    const ua = window.navigator.userAgent.toLowerCase();
    const isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;
    const body = document.querySelector('body');
    const container = document.querySelector('#global-container');

    function bodyFixedOff() {
        if(isiOS){
            body.style.removeProperty('position');
            body.style.removeProperty('top');
            window.scrollTo(0, scrollPosition);
        }else {
            body.style.removeProperty('overflow');
        }
    }
    
    function bodyFixedOn() {
        if(isiOS){
            scrollPosition = window.pageYOffset;
            body.style.position = 'fixed';
            body.style.top = `-${scrollPosition}px`;
            }else {
                body.style.overflow = 'hidden';
            }
        }

    function bodyFixedToggle(){
        if( container.classList.contains('menu-open') == true ){
            if(isiOS){
                scrollPosition = window.pageYOffset;
                body.style.position = 'fixed';
                body.style.top = `-${scrollPosition}px`;
            } else {
                body.style.overflow = 'hidden';
            } 
        } else {        
            if(isiOS){
                body.style.removeProperty('position');
                body.style.removeProperty('top');
                window.scrollTo(0, scrollPosition);
            } else {
                body.style.removeProperty('overflow');
            }
        }
    }
         
    