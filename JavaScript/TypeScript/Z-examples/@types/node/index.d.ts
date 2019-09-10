/*----------------------------------------------*
*                                               *
*               GLOBAL INTERFACES               *
*                                               *
*-----------------------------------------------*/
declare namespace NodeJS {

    class EventEmitter {
        // TODO...
    }
}


declare module "events" {
    class internal extends NodeJS.EventEmitter { }

    namespace internal {
        class EventEmitter extends internal {
            
        }
    }

    export = internal;
}