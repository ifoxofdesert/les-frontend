import mitt from 'mitt';

type ApplicationEvents = {
  'popup:close': void;
  'popup:open': void;
  'scroll:on': void;
  'scroll:no': void;
};

const emitter = mitt<ApplicationEvents>();

export const useEvent = emitter.emit;
export const useListen = emitter.on;
