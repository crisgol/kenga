import Event from '../event';

class MouseEvent extends Event {
    constructor(w, event, clickCount) {
        super(w, event.target, event);
        Object.defineProperty(this, "x", {
            get: function() {
                return event.x;
            }
        });
        Object.defineProperty(this, "y", {
            get: function() {
                return event.y;
            }
        });
        Object.defineProperty(this, "screenX", {
            get: function() {
                return event.screenX;
            }
        });
        Object.defineProperty(this, "screenY", {
            get: function() {
                return event.screenY;
            }
        });
        Object.defineProperty(this, "altDown", {
            get: function() {
                return event.altKey;
            }
        });
        Object.defineProperty(this, "controlDown", {
            get: function() {
                return event.ctrlKey;
            }
        });
        Object.defineProperty(this, "shiftDown", {
            get: function() {
                return event.shiftKey;
            }
        });
        Object.defineProperty(this, "metaDown", {
            get: function() {
                return event.metaKey;
            }
        });
        Object.defineProperty(this, "button", {
            get: function() {
                switch (event.button) {
                    case 1 /*BUTTON_LEFT*/ :
                        return 1;
                    case 2 /*BUTTON_RIGHT*/ :
                        return 2;
                    case 4 /*BUTTON_MIDDLE*/ :
                        return 3;
                    default:
                        return 0;
                }
            }
        });
        Object.defineProperty(this, "clickCount", {
            get: function() {
                if (clickCount)
                    return clickCount;
                else
                    return 0;
            }
        });
    }
}

export default MouseEvent;