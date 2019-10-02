class SweetSelector {
    static select (type) {
        if(type[0]=='#'){
            return document.getElementById(type.slice(1));
        }else if(type[0]=='.'){
            return document.getElementsByClassName(type.slice(1))[0];
        }else{
            return document.getElementsByTagName(type)[0];
        }
    }
}

SweetSelector.select('#eyed');
SweetSelector.select('.btn');
SweetSelector.select('a');


class DOM {
    static hide(query){
        SweetSelector.select(query).style.display = 'none';
    }
    static show(query){
        SweetSelector.select(query).style.display = 'block';
    }
    static addClass(query,newClass){
        SweetSelector.select(query).classList.add(`${newClass}`);
    }
    static removeClass(query,target){
        SweetSelector.select(query).classList.remove(`${target}`)
    }
}

DOM.hide('#eyed');
DOM.hide('.btn');
DOM.hide('a');

DOM.show('#eyed');
DOM.show('.btn');
DOM.show('a');

DOM.addClass('.btn','shadi')
DOM.addClass('#eyed', 'shadi')
DOM.addClass('a', 'shadi')

DOM.removeClass('.btn','shadi');
DOM.removeClass('#eyed','shadi');
DOM.removeClass('a','shadi');


class EventDispatcher {
    static on(query, method ,cb){
        SweetSelector.select(query).addEventListener(method,cb)
    }
    static trigger(query,method){
        const event = new Event(method);
        SweetSelector.select(query).dispatchEvent(event)
    }
}
EventDispatcher.on('.btn','click', function(){
    console.log('awesome')
})
EventDispatcher.trigger('.btn','click');